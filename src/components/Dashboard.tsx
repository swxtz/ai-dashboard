import { Header } from "./Header";
import { PromptButtons } from "./PromptButtons";
import { PromptLine } from "./PromptLine";

import { Code, ImageSquare, PlayCircle, MusicNoteSimple } from "phosphor-react"

export function Dashbord(){
    return(
        <div className="h-full w-full pb-10 bg-grey-700/80 rounded-[32px]">
          <Header />

          <div className="mx-72 my-10 flex flex-col gap-4">
            <PromptButtons svg={<Code size={32} className="text-grey-300" />} title="Gerador de códigos" />
            <PromptButtons svg={<ImageSquare size={32} className="text-grey-300" />} title="Edição de foto" />
            <PromptButtons svg={<PlayCircle size={32} className="text-grey-300" />} title="Geração de vídeos" />
            <PromptButtons svg={<MusicNoteSimple size={32} className="text-grey-300" />} title="Criador de áudios e musicas " />

          </div>

          <div className="mx-[60px]">
            <div className="w-full h-[1px] bg-grey-400" />
            <div className="">
              <PromptLine />
            </div>
          </div>
        </div>
    )
}