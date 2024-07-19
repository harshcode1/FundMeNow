import React from 'react'

const username = ({ params }) => {
  return (
    <>
      <div className="cover w-full bg-red-50 relative">
        <img className="object-hover w-full h-[350]" src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/16.gif?token-time=1722729600&token-hash=HVKoue-XHYonEojOK1U6zV4DehD9QHYef7vSZTsQ3sI%3D" alt="" />
        <div className="absolute -bottom-12 right-[46%] border-white border-2 rounded-full">
          <img width={100} className="rounded-full" height={100} src="https://t3.ftcdn.net/jpg/05/55/79/96/360_F_555799679_wN07UXTYUdeBPJeb5quYBAloxJ9Wafdn.jpg" alt="" />
        </div>
      </div>
      <div className="info flex justify-center items-center my-12 flex-col gap-1">
        <div className='font-bold text-lg'>
          @{params.username}
        </div>
        <div className='text-slate-400'>
          Adding Some Value
        </div>
        <div className='text-slate-400'>
          200 Members . 1,500 Views . 60,000 Impressions
        </div>
        <div className="payment mt-11 gap-3 flex w-[80%]">
          <div className="supporters w-1/2 bg-slate-900 text-white rounded-lg p-10">
            {/* show list of all supporters in leaderboard */}
            <h2 className='text-2xl font-bold my-5 text-center'>Supporters</h2>
            <ul className='my-5 text-lg'>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="admin.png" alt="" />
                <span>Harsh donated <span className="font-bold">$400</span> with a message "I Love You man"</span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="admin.png" alt="" />
                <span>Harsh donated <span className="font-bold">$400</span> with a message ""</span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="admin.png" alt="" />
                <span>Harsh donated <span className="font-bold">$400</span> with a message ""</span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="admin.png" alt="" />
                <span>Harsh donated <span className="font-bold">$400</span> with a message ""</span>
              </li>
            </ul>
          </div>
          <div className='makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10'>
            <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
            <div className='flex gap-2 flex-col'>
              {/* input for name and message */}
              <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
              <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
              <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
              <button type='button' className='text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Pay</button>
            </div>

            {/* Or choose from these amounts */}
            <div className='flex gap-2 mt-5'>
              <button className='bg-slate-800 p-3 rounded-lg' >Pay $10</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $30</button>
            </div>
          </div>

        </div>
      </div >
    </>

  )
}

export default username