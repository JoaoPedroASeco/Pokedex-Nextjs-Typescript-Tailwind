// Next Import
import Image from "next/image"
import { useRouter } from "next/router"
import { CircleNotch } from "phosphor-react"
import { useState, useEffect, ReactNode } from "react"
import { motion } from 'framer-motion'
// Types
type OnPageLoadingType = {
  children: ReactNode
}

const container = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5
    }
  }
}

export default function OnPageLoading({ children }: OnPageLoadingType) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url: string) => (url !== router.asPath) && setLoading(true)
    const handleComplete = (url: string) => (url === router.asPath) && setTimeout(() => { setLoading(false) }, 100)

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleComplete)
    router.events.on("routeChangeError", handleComplete)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleComplete)
      router.events.off("routeChangeError", handleComplete)
    }
  })

  return (
    <div className="flex w-screen h-screen relative ">
      {loading ?
        (
          <motion.div 
            className="flex flex-col items-center justify-center bg-[#FFCB05] h-screen w-screen"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-[60rem] h-[20rem]">
              <Image
                src="/img/pokemon-logo.png"
                objectFit="fill"
                layout="fill"
              />
            </div>

            <CircleNotch
              weight="bold"
              className="w-[3rem] h-[3rem] mb-10 text-black flex items-center justify-center overflow-hidden animate-spin"
            />

            <strong className="flex justify-center w-full h-[10rem] text-6xl font-bold">
              Loading...
            </strong>
          </motion.div>
        ) :
        (
          <>
            {children}
          </>
        )
      }
    </div>
  )
}