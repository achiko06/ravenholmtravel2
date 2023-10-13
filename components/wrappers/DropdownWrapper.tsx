import { ReactNode } from "react"

interface Props {
    children: ReactNode
  }

const DropdownWrapper = ({ children }: Props) => {
  return (
    <div 
          className="absolute rounded-xl shadow-md w-[80vw] xs:w-[60vw] sm:w-[40vw] md:w-full bg-lightGold overflow-hidden right-0 top-14 md:top-12 text-sm select-none"
        >
          <div className="flex flex-col cursor-pointer">
            {children}
          </div>
    </div>
  )
}

export default DropdownWrapper