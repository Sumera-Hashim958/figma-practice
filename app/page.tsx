import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'

const homePage = () => {
  return (
    <div className="h=screen">
      <Header/>
      <div className="flex">
      <div className="w-1/2 flex flex-col justify-center items-start m-12 mt-40">
      <h1 className="text-[44px] font-bold">Welcome To Our Website</h1>
      <p className="text-[32px] w-[571px] h-[156px] font-normal leading-[38.73px] text-justify mt-2 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
      <button className="bg-black text-[28px] font-normal text-white py-2 px-4 w-[237px] h-[66px] mt-8">Contact Us</button>
      </div>
      <div className="w-1/2 h-[465px] mt-32">
      <Image src={"/philip-oroni-VfOGf5RWkeg-unsplash 1.svg"} alt="next-image" width={502} height={465}/>
      </div>
      </div>
    </div>
  )
}

export default homePage
