import { FaGoogle, FaStar } from 'react-icons/fa6'
import { LuLeaf, LuCoins, LuBatteryCharging, LuArrowDown } from "react-icons/lu";
export default function Hero() {
    return (
        <>
            <section className="w-full h-[100dvh] bg-center bg-cover bg-[url('https://imgproxy.divecdn.com/0iO2fjFdrmvt4vhSmBeqNVyn0I3CPUn_J1n8yPZwieI/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9HZXR0eUltYWdlcy0xMzcyNjE4NzY2LmpwZw==.webp')]">
                <div className="p-5 relative w-full h-full bg-black/50 flex flex-col items-center justify-center">
                    <span className="absolute top-5 font-abode text-3xl text-bgreen">byke</span>
                    <div className="md:flex items-center justify-center text-md text-white mb-5 w-full md:w-fit md:border-b border-white pb-1">
                        <div className="flex items-center">
                            <FaGoogle className='mr-2 relative bottom-[1px]' />
                            <div className="flex items-center mr-2 relative bottom-[1px] text-yellow-500">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <span>#2 in Rwanda based on 50+ reviews</span>
                    </div>
                    <p className="text-3xl md:text-5xl font-bold leading-relaxed md:pb-5">
                        <span className="bg-bgreen px-1 py-0.5 box-decoration-clone inline">
                            The best way to see Kigali is on an ebike
                        </span>
                    </p>
                    <p className="text-3xl md:text-5xl font-bold leading-relaxed md:pb-5">
                        <span className="bg-bgreen px-1 py-0.5 box-decoration-clone inline">
                            Easily rent yours today.
                        </span>
                    </p>
                    <div className="md:flex items-center justify-center mt-5 w-full md:w-fit">
                        <div className="flex items-center md:mx-5 mb-5">
                            <LuLeaf className='text-white text-4xl mr-2'/>
                            <span className='text-white text-sm/5'>Enviromentally<br/>friendly</span>
                        </div>
                        <div className="flex items-center md:mx-5 mb-5">
                            <LuCoins className='text-white text-4xl mr-2'/>
                            <span className='text-white text-sm/5'>Affordable<br/>pricing plans</span>
                        </div>
                        <div className="flex items-center md:mx-5 mb-5">
                            <LuBatteryCharging className='text-white text-4xl mr-2'/>
                            <span className='text-white text-sm/5'>Long-lasting<br/>battery life</span>
                        </div>
                    </div>
                    <div className="absolute bottom-5 w-12 h-12 flex items-center justify-center bg-white animate-bounce rounded-full">
                        <LuArrowDown/>
                    </div>
                </div>
            </section>
        </>
    )
}