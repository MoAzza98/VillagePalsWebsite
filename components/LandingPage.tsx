"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Roadmap } from "./roadmap"

export default function LandingPage() {
  const [isVideoBackground, setIsVideoBackground] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [currentView, setCurrentView] = useState<"home" | "roadmap">("home")

  useEffect(() => {
    if (isVideoBackground) {
      const video = document.querySelector("video")
      if (video) {
        video.addEventListener("loadeddata", () => setIsVideoLoaded(true))
        return () => video.removeEventListener("loadeddata", () => setIsVideoLoaded(true))
      }
    }
  }, [isVideoBackground])

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#1a4b8a]">
      {/* Video/Image Background */}
      {isVideoBackground ? (
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/video-poster.png"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? "opacity-90" : "opacity-0"}`}
          >
            <source src="/videos/VillagePals.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute left-0 top-0 h-full w-[40rem] bg-gradient-to-r from-[#1a4b8a] via-[#1a4b8a]/95 via-30% to-transparent md:block hidden">
            <div className="absolute left-0 top-0 h-full w-24 bg-[#1a4b8a]" />
          </div>
          {/* Mobile gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a4b8a]/80 to-transparent md:hidden" />
        </div>
      ) : (
        <div className="absolute inset-0">
          <Image
            src="/images/video-poster.png"
            alt="Scenic camping background with mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute left-0 top-0 h-full w-[40rem] bg-gradient-to-r from-[#1a4b8a] via-[#1a4b8a]/95 via-30% to-transparent md:block hidden">
            <div className="absolute left-0 top-0 h-full w-24 bg-[#1a4b8a]" />
          </div>
          {/* Mobile gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a4b8a]/80 to-transparent md:hidden" />
        </div>
      )}

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-4 md:px-8 py-6">
        <div className="flex items-center gap-8 md:gap-16">
          <Image
            src="/images/Tent.png"
            alt="Tent Logo"
            width={32}
            height={32}
            className="object-contain text-white"
          />
          <div className="hidden md:flex gap-12 text-white text-sm font-medium tracking-wider">
            <button
              className={`hover:text-blue-300 transition-colors ${currentView === "home" ? "text-blue-300" : ""}`}
              onClick={() => setCurrentView("home")}
            >
              HOME
            </button>
            <button className="hover:text-blue-300 transition-colors">WHITEPAPER</button>
            <button
              className={`hover:text-blue-300 transition-colors ${currentView === "roadmap" ? "text-blue-300" : ""}`}
              onClick={() => setCurrentView("roadmap")}
            >
              ROADMAP
            </button>
            <button className="hover:text-blue-300 transition-colors">TRAILER</button>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <Button
            variant="ghost"
            className="text-white hover:text-black text-sm hidden md:block"
            onClick={() => setIsVideoBackground(!isVideoBackground)}
          >
            {isVideoBackground ? "Use Image" : "Use Video"}
          </Button>
          <Button
            variant="outline"
            className="text-black hover:text-white border-white/20 hover:bg-white/10 rounded-xl px-4 md:px-6"
          >
            DOWNLOAD SOON
          </Button>
        </div>
      </nav>

      {/* Side Menu */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-8 hidden md:flex">
        <Button variant="ghost" size="icon" className="text-white/50 hover:text-white hover:bg-transparent" asChild>
          <a href="https://x.com/VillagePals" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/x-social-media-white-icon.png"
              alt="X (Twitter)"
              width={20}
              height={20}
              className="object-contain"
            />
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="text-white/50 hover:text-white hover:bg-transparent" asChild>
          <a href="https://discord.gg/eaYpUWhV" target="_blank" rel="noopener noreferrer">
            <Image src="/images/discord.png" alt="Discord" width={24} height={24} className="object-contain" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="text-white/50 hover:text-white hover:bg-transparent" asChild>
          <a href="https://t.me/+NecmCeGQNiQ3Zjlk" target="_blank" rel="noopener noreferrer">
            <Image src="/images/telegram.png" alt="Telegram" width={20} height={20} className="object-contain" />
          </a>
        </Button>
      </div>

      {/* Mobile Social Links */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-6 md:hidden">
        <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-transparent" asChild>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/x-social-media-white-icon.png"
              alt="X (Twitter)"
              width={20}
              height={20}
              className="object-contain"
            />
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-transparent" asChild>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/discord.png" alt="Discord" width={24} height={24} className="object-contain" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-transparent" asChild>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <Image src="/images/telegram.png" alt="Telegram" width={20} height={20} className="object-contain" />
          </a>
        </Button>
      </div>

      {/* Main Content */}
      {currentView === "home" ? (
        <>
          <main className="fixed z-10 flex flex-col items-center px-16 md:px-[calc((100vw-((180px*4)+18px*3))/2)] bottom-64 md:bottom-64 w-full">
            <div className="flex flex-col items-center max-w-[800px] w-full">
              <Image
                src="/images/Logo-gapless.png"
                alt="Village Pals Logo"
                width={300}
                height={112}
                className="object-contain mb-8 md:w-[400px] md:h-[150px]"
                priority
              />
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-wider leading-tight text-center [text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">
                FROM CAMPFIRE TO COMMUNITY
              </h1>
              <h3 className="text-xl md:text-2xl font-medium text-white/90 mb-8 tracking-wide text-center px-4 [text-shadow:_0_2px_2px_rgb(0_0_0_/_30%)]">
                BUILD A THRIVING TOWN ON THE BLOCKCHAIN
              </h3>
            </div>
          </main>

          {/* Platform Buttons and Download Text */}
          <div className="fixed bottom-8 md:bottom-12 left-0 right-0 z-20 flex flex-col items-center px-4">
            <p className="text-base md:text-lg text-white/80 drop-shadow-lg mb-6 text-center">
              Releasing on Multiple Ecosystems - Download Soon.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6 w-full md:w-auto">
              <Button className="bg-black/30 hover:bg-black/50 text-white px-4 md:px-8 py-4 md:py-6 rounded-xl w-full md:min-w-[180px] backdrop-blur-sm flex flex-row items-center justify-center gap-3">
                <Image
                  src="/images/abstract.png"
                  alt="Abstract Logo"
                  width={24}
                  height={24}
                  className="object-contain invert"
                />
                Abstract
              </Button>
              <Button className="bg-black/30 hover:bg-black/50 text-white px-4 md:px-8 py-4 md:py-6 rounded-xl w-full md:min-w-[180px] backdrop-blur-sm flex flex-row items-center justify-center gap-3">
                <Image src="/images/sui-logo.webp" alt="Sui Logo" width={24} height={24} className="object-contain" />
                Sui
              </Button>
              <Button className="bg-black/30 hover:bg-black/50 text-white px-4 md:px-8 py-4 md:py-6 rounded-xl w-full md:min-w-[180px] backdrop-blur-sm flex flex-row items-center justify-center gap-3">
                <Image
                  src="/images/Solana_logo.png"
                  alt="Solana Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                Solana
              </Button>
            </div>
          </div>
        </>
      ) : (
        <main className="fixed z-10 flex flex-col items-center px-4 top-32 bottom-12 w-full overflow-y-auto pr-4">
          <Roadmap />
        </main>
      )}
    </div>
  )
}

