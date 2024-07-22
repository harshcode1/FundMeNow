import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
// import mongoose from 'mongoose';
// import User from '@/models/User';
// import Payment from '@/models/Payment';

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),


    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),

  ],
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     if(account.provider == "github") {
  //       // Connect to the database
  //       const client = await mongoose.connect()

  //       // Check if the user already exists in the database
  //       // const currentUser = await client.db("users").collection("users").findOne({email:email})
  //       const currentUser = User.findOne({email : email});
  //       if(!currentUser) {
  //         const newUser = new User({
  //           email : email,
  //           username : email.split("@")[0],
  //         })
  //       }
  //       await newUser.save();
  //       user.name = newUser.username;
  //     }else {
  //       user.name = newUser.username;
  //     }
      
  //   }
  // },
  secret: process.env.NEXTAUTH_SECRET,
});

export { authoptions as GET, authoptions as POST }