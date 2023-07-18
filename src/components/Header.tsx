import { MagicWand } from "phosphor-react"


export function Header(){
    return(
        <div className="flex justify-center">
          <div className="mt-14 flex justify-center flex-col w-full">
            <div className="flex justify-center mx-auto bg-grey-600 rounded-2xl mb-6">
              <MagicWand size={40} className="m-3"/>
            </div>
            <h1 className="text-2xl text-center font-semibold text-grey-100">Experimente o poder da Inteligência Artificial</h1>
          </div>
        </div>
    )
}