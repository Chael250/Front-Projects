import { useState } from "react";

export default function RandomGenerator() {
    const [colorType, setColorType] = useState("RGB");
    const [color, setColor] = useState("#000000");

    function handleCreateRandomColor() {
        if(colorType == "RGB"){
            setColor(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
        } else {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            setColor(`#${randomColor}`);
        }   
    }

    return (
        <div className="w-[100vw] h-[100vh] flex flex-col justify-start items-center" style={{backgroundColor: color}}>
            <div className="flex justify-evenly items-center gap-20 mt-10">
                <button onClick={() => setColorType("RGB")} className="w-[200px] h-[50px] bg-gray-500 rounded-full mt-10 text-white will-change-transform transition-transform cursor-pointer hover:scale-105">RGB Generator</button>
                <button onClick={() => setColorType("HEX")} className="w-[200px] h-[50px] bg-gray-500 rounded-full mt-10 text-white will-change-transform transition-transform cursor-pointer hover:scale-105">HEX Generator</button>
                <button onClick={() => handleCreateRandomColor()} className="w-[200px] h-[50px] bg-gray-500 rounded-full mt-10 text-white will-change-transform transition-transform cursor-pointer hover:scale-105">Generate Color</button>
            </div>

            <h3 className="text-2xl font-bold text-white mt-96">{color}</h3>
        </div>
    )
}