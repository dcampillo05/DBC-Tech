"use client"

import { Carousel, CustomFlowbiteTheme } from "flowbite-react"

const customIndicatorStyle: CustomFlowbiteTheme = {
    carousel: {
        indicators: {
            active: {
                off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800 border border-white",
                on: "bg-[#6b26d9]"
            }
        }
    }
}


export function Slidder() {
    return (
        <div className="h-6 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000} theme={{ indicators: customIndicatorStyle.carousel?.indicators }}>
                <img src="banner01.png" alt="" />
                <img src="" alt="" />
            </Carousel>
        </div>
    )
}