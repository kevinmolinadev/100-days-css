import { useState } from 'react';
const Day15 = () => {
    const [isDrog, setIsDrog] = useState(false);
    const [file, setFile] = useState(null);
    const drogFile = (e) => {
        const filesInput = e.dataTransfer.files;
        setFile(filesInput);
    }
    const loadFile = (e) => {
        const filesInput = e.target.files;
        setFile(filesInput);
    }
    return (
        <div className="w-frame h-frame bg-gradient-to-tr from-cyan-600 to-green-600 rounded-md flex ">
            <div className="w-3/4 h-4/6 bg-white m-auto rounded-md shadow-lg shadow-black/40 font-sans overflow-hidden flex flex-col">
                <h2 className="text-lg py-2.5 border border-b-black/20">Drop file to upload</h2>
                <div className="flex-grow flex flex-col items-center justify-center gap-8">
                    <div className="relative w-24 h-20 border border-dashed overflow-hidden border-black/40 flex justify-center items-center">
                        {
                            file ?
                                <p className="text-sm">{file[0].name}</p> :
                                <i className={`absolute fa-solid fa-cloud-arrow-up text-5xl text-gray-400/60 m-auto p-5 transition-colors duration-200 ease-in-out ${isDrog ? 'bg-black/20' : ''}`} />
                        }
                        <input onDrop={drogFile} onChange={loadFile} onDragEnter={() => setIsDrog(!isDrog)} onDragLeave={() => setIsDrog(!isDrog)} type="file" className="w-full h-full absolute opacity-0" />
                    </div>
                    <button className="py-2.5 px-8 text-white bg-lime-500 rounded-md border-b-2 border-b-black hover:shadow-[0_0_5px_1px] hover:shadow-lime-500">Upload file</button>
                </div>
            </div>
        </div>
    )
}
export default Day15;