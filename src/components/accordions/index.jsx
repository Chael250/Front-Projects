import data from "./data";
import { useState } from "react";
import "./styles.css";

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [multiSelect, setMultiSelect] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...selectedItems]
        console.log(cpyMultiple)
        if(cpyMultiple.includes(getCurrentId)){
            cpyMultiple = cpyMultiple.filter((item) => item !== getCurrentId);
        } else {
            cpyMultiple.push(getCurrentId); 
        }
        setSelectedItems(cpyMultiple);
    }

    return (
        <div className="flex flex-col h-[100vh] w-[100vw] justify-center items-center gap-10">
            <button onClick={() => setMultiSelect(!multiSelect)} className="w-[200px] h-[50px] bg-[#614101] rounded-2xl text-white cursor-pointer">Enable Multi Selection</button>
            <div className="w-[500px]">
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div className="bg-[#614101] mb-[10px] px-[10px] py-[20px]">
                        <div onClick={multiSelect ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="text-white flex justify-between items-center cursor-pointer">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                       {
                        multiSelect ? selectedItems.includes(dataItem.id) && <div className="text-white mt-10">{dataItem.answer}</div> :
                        selected === dataItem.id && <div className="text-white mt-10">{dataItem.answer}</div>
                       }
                    </div>
                    ) : (
                    <div>No data found!</div>
                )}
            </div>
        </div>
    )
}
