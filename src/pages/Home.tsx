import { useState } from "react";
import { FaGraduationCap, FaWindows } from "react-icons/fa";



export default function Home() {
    const [fontSize, setFontSize] = useState("text-base");
   
    const handleFontSize = (size: string) => {
        setFontSize(size)
    }
   
    return (
        <div className="min-h-screen h-full w-full">
            {/* navbar */}
            <section className=" flex flex-row items-center bg-slate-100 justify-between py-6 px-10 ">
                <img src="/Logo.svg" alt="gambar" className="w-24" />
                <div className="flex flex-row  gap-3">
                    <h1 className="font-semibold text-3xl">Jordan Arya Leksana</h1>
                    <div className="flex flex-col  w-14 h-14 justify-center items-center border-[3px] rounded-md border-blue-600">
                        <FaGraduationCap size={40} color="black" />
                    </div>
                </div>
            </section>

            {/* main */}
            <section className="flex w-[90%] mx-auto h-screen flex-col  ">
                <div className="flex flex-row px-10 py-6 justify-between">
                    <div className="flex flex-col gap-5">
                    <h1 className="font-semibold ">Soal Nomor:</h1>
                        <div className="flex flex-row gap-3 items-end bg-white">
                            <h1 className="">Ukuran Font Soal:</h1>
                            <button className="text-xl" onClick={() => handleFontSize('text-lg')}>A</button>
                            <button className="text-2xl" onClick={() => handleFontSize('text-2xl')}>A</button>
                            <button className="text-3xl" onClick={() => handleFontSize('text-3xl')}>A</button>
                        </div>
                    </div>
                    <div className={`flex flex-col items-end justify-center gap-2`}>
                        <button className="flex flex-row text-white font-semibold bg-blue-500 justify-center rounded-full items-center px-4 py-2">
                            Daftar Soal <span className="ml-2"><FaWindows size={20} color="white" /></span>
                        </button>
                        <h1 className="">Jenis Tryout </h1>
                    </div>
                </div>
                <div className={`w-full h-full border border-black ${fontSize} `}>
                    soal
                </div>

            </section>
        </div>
    )
}

