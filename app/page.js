import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh]">
        <div className="font-bold text-3xl flex items-center justify-center">
          Buy Me a Coffee
          <Image src="/coffee.gif" alt="Coffee" className="invert-0 inline-block ml-2" width={50} height={50} />
        </div>

        <p>
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start now!
        </p>
        <div>
          <button type="button" className="
          text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
          focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
          font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
        ">
            Start Here
          </button>
          <button type="button" className="
          text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
          focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
          font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
        ">
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white opacity-10 h-1"></div>
      <div className="text-white container mx-auto py-32">
        <h1 className="text-3xl font-bold text-center mb-14">
          Your Fans can buy you a Coffee
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image className="bg-slate-400 rounded-full p-2 text-black" width={88} height={88} src="/man.webp" alt="Man" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image className="bg-slate-400 rounded-full p-2 text-black" width={88} height={88} src="/coin-spin.gif" alt="Coin Spin" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image className="bg-slate-400 rounded-full p-2 text-black" width={88} height={88} src="/grp.gif" alt="Group" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white opacity-10 h-1"></div>
      <div className="text-white container mx-auto py-32 flex items-center flex-col justify-center">
        <h1 className="text-3xl font-bold text-center mb-14">
          Learn more about US
        </h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/33o3s4Vs4Sw?si=TCnzRP14jSN8BVF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>        
        </div>
    </>
  );
}
