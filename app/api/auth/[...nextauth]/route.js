import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import mongoose from 'mongoose';
import User from '@/models/User';
import connectToDatabase from '@/db';
// Ensure Mongoose connection is established only once


export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        // Include email from profile if available
        return {
          id: profile.id,
          name: profile.login,
          email: profile.email || null,
          image: profile.avatar_url,
        };
      }
    }),
    // Other providers...
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === 'github') {
        try {
          // Debugging statements
          console.log('User:', user);
          console.log('Account:', account);
          console.log('Profile:', profile);

          // Extract email from user or profile
          const email = user.email || profile.email;
          
          // Connect to the database
          await connectToDatabase();

          // Check if the user already exists in the database
          const currentUser = await User.findOne({ email: email });

          if (!currentUser) {
            const newUser = new User({
              email: email,
              username: email.split("@")[0],
            });
            await newUser.save();
            user.name = newUser.username;
          } else {
            user.name = currentUser.username;
          }
        } catch (error) {
          console.error('Error during sign-in:', error);
          return false; // Return false to prevent sign-in on error
        }
      }
      return true;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { authoptions as GET, authoptions as POST };
