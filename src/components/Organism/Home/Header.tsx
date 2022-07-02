import { HomeHeaderArrowDown } from "../../Molecules/Home/HomeHeaderArrowDown"
import { HomeLogo } from "../../Molecules/Home/HomeLogo"
import { HomeSearchField } from "../../Molecules/Home/HomeSearchField"

export const HomeHeader = () => {
  return (
    <header className="flex flex-col">
      <div className="flex justify-between h-full items-center px-3 mb-3">
        <HomeLogo />

        <button className="flex h-full items-center">
          <p className="flex h-full text-black font-bold text-center justify-center items-center  xl:text-[3rem] lg:text-[2.75rem] md:text-[2.5rem]  sm:text-[2.5rem] text-[1rem] xl:mr-[1rem] lg:mr-[0.875rem] md:mr-[0.75rem] sm:mr-[0.75rem] mr-[0.5rem]">
            #
          </p>
          
          <HomeHeaderArrowDown />
        </button>
      </div>

      <HomeSearchField />
    </header>
  )
}