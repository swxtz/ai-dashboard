import { ReactNode } from "react";

import { ArrowRight } from "phosphor-react"

interface PromptButtonsProps {
  title: string;
  svg: ReactNode;
}
export function PromptButtons({ title, svg } : PromptButtonsProps){
    return(
        <div className="w-full bg-grey-600 p-4 rounded-2xl flex flex-row items-center">
          <div className="w-fit p-4 border border-grey-500 rounded-2xl">
            {svg}
          </div>

          <div className="flex flex-row items-center w-full justify-between">
            <h2 className="ml-6 font-semibold text-grey-100">{title}</h2>
            <ArrowRight size={32} className="text-grey-300"/>
          </div>
        </div>
    )
}