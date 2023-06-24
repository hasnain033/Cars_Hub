'use client'

import { ShowmoreProps } from "@/types"
import { useRouter } from "next/navigation"
import CustomButton from "./CustomButton"
import { updateSearchParams } from "@/utils"

const Showmore = ({pageNumber, isNext}:ShowmoreProps) => {
    const router = useRouter()
    const handleNavigation = () => {
        const newLimit = (pageNumber+1)*10
        const newPathname = updateSearchParams('limit',`${newLimit}`)
        router.push(newPathname)
    }
  return (
    <div className="w-full flex-center gap-5c mt-10">
      {!isNext && <CustomButton 
      title='show more' 
      btntype='button' 
      containerStyle="bg-primary-blue rounded-full text-white" 
      handleClick={handleNavigation}/>
      }
    </div>
  )
}

export default Showmore
