import { PaperPlaneRight, PlusCircle } from "phosphor-react";

export function PromptLine(){
    return(
        <div className="flex flex-row items-center justify-between mt-4">
            <div className="border border-grey-400 p-4 mr-4 bg-grey-600 rounded-2xl flex flex-row flex-1">
                <PlusCircle size={32} className="text-grey-300" />
                <input 
                    type="text" 
                    name="search" 
                    id="prompt-search" 
                    placeholder="Envie uma mensagem ou digite “/” para exibir os comandos" 
                    className="bg-transparent ml-4 outline-none w-full"
                />
            </div>
            <button className="bg-grey-600 p-4 rounded-2xl">
                <PaperPlaneRight  size={32} className="text-grey-100"/>
            </button>
        </div>
    )
}