'use client'
import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'

const Marquee = ({
  text = 'Join Dexora Now — Trade  •  EARN  •  Play  •  Earn with $DORA!  •',
  speed = 100,
}: {
  text?: string
  speed?: number
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const textWidth = marquee.scrollWidth / 2

    const loop = async () => {
      await controls.start({
        x: -textWidth,
        transition: {
          duration: textWidth / speed,
          ease: 'linear',
        },
      })


      requestAnimationFrame(() => {
        marquee.style.transform = `translateX(0)`
        controls.set({ x: 0 })
        loop()
      })
    }

    loop()
  }, [controls, speed, text])

  const baseText = `${text} `.repeat(2)

  return (
    <Link href='/Comingsoon' passHref>
      <div className="w-full overflow-hidden relative h-full  sm:min-h-[250px] py-8 sm:py-4 max-w-7xl mx-auto border-2 border-[#1C1C1C] rounded-xl backdrop-blur-sm bg-white/5 cursor-pointer group flex items-center ">
        {/* <p className="absolute left-1/2 top-2 sm:top-4 transform -translate-x-1/2 text-center text-white/80 text-sm sm:text-lg">
         ( Click to Join )
        </p> */}
        <motion.div
          className="flex whitespace-nowrap gap-10 text-white text-4xl sm:text-7xl font-bold uppercase fr-fnt"
          ref={marqueeRef}
          animate={controls}
        >
          <span>{baseText}</span>
        </motion.div>
      </div>
    </Link>
  )
}

export default Marquee
