import { HomeLogo } from "../../Molecules/Home/HomeLogo"
import { HomeSearchField } from "../../Molecules/Home/HomeSearchField"

export const HomeHeader = () => {
  return (
    <header className="flex flex-col">
      <div className="flex justify-between">
        <HomeLogo />

        <h1 className="text-black font-bold text-2xl">Pokédex</h1>

        <div className="flex">
          <p className="text-black">#</p>
          
          <div>
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.46997 11.1888L9.21747 10.9363C9.05011 10.7689 8.77875 10.7689 8.61136 10.9363L5.63121 13.9337L5.63121 0.509138C5.63121 0.272459 5.43931 0.0805664 5.20263 0.0805664L4.84549 0.0805664C4.60881 0.0805664 4.41692 0.272459 4.41692 0.509138L4.41692 13.9337L1.43676 10.9363C1.26941 10.7689 0.998049 10.7689 0.830656 10.9363L0.578155 11.1888C0.410797 11.3562 0.410797 11.6275 0.578155 11.7949L4.72102 15.955C4.88838 16.1224 5.15974 16.1224 5.32713 15.955L9.47 11.7949C9.63736 11.6275 9.63736 11.3562 9.46997 11.1888Z" fill="#212121" />
            </svg>
          </div>
        </div>
      </div>

      <HomeSearchField />
    </header>
  )
}