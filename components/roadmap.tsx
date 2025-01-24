import React from "react"

const pulseAnimation = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); }
  }
`

const hoverStyles = `
  .group:hover .group-hover\\:animate-pulse {
    animation: pulse 2s infinite;
  }
`

export function Roadmap() {
  return (
    <>
      <style jsx>{`${pulseAnimation}${hoverStyles}`}</style>
      <div className="flex flex-col items-center w-full max-w-[1200px] mx-auto px-4 text-white pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">RoadMap</h1>
        <p className="text-white/80 text-center max-w-[600px] mb-16">
          Take a look at our development timeline as we build on top of the existing VillagePals product into and throughout 2025.
        </p>

        <div className="relative w-full">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />

          {/* Timeline items */}
          <div className="relative space-y-12">
            {/* Q4 2024 */}
            <div className="group relative min-h-[100px] flex items-center">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-white group-hover:bg-blue-400 transition-colors group-hover:animate-pulse" />
              </div>
              <div className="grid grid-cols-[1fr,auto,1fr] gap-4 w-full">
                <div className="text-right pr-8">
                  <div className="bg-white/30 p-6 rounded-lg hover:bg-white/50 transition-colors">
                    <h3 className="font-semibold mb-1">Q4 2024</h3>
                    <p className="text-white/90">Final Pre-MVP Development Phase and Public Announcement.</p>
                  </div>
                </div>
                <div className="w-3" /> {/* Spacer for dot */}
                <div /> {/* Empty right side */}
              </div>
            </div>

            {/* Q1 2025 */}
            <div className="group relative min-h-[100px] flex items-center">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-white group-hover:bg-blue-400 transition-colors group-hover:animate-pulse" />
              </div>
              <div className="grid grid-cols-[1fr,auto,1fr] gap-4 w-full">
                <div /> {/* Empty left side */}
                <div className="w-3" /> {/* Spacer for dot */}
                <div className="pl-8">
                  <div className="bg-white/30 p-6 rounded-lg hover:bg-white/50 transition-colors">
                    <h3 className="font-semibold mb-1">Q1 2025</h3>
                    <p className="text-white/90">Release Ecosystem Finalization and Further Development of Pre-Alpha. Market Strategy Outreach and 
                    Development for AI Agent Collaborative Cammpaigns.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Q2 2025 */}
            <div className="group relative min-h-[100px] flex items-center">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-white group-hover:bg-blue-400 transition-colors group-hover:animate-pulse" />
              </div>
              <div className="grid grid-cols-[1fr,auto,1fr] gap-4 w-full">
                <div className="text-right pr-8">
                  <div className="bg-white/30 p-6 rounded-lg hover:bg-white/50 transition-colors">
                    <h3 className="font-semibold mb-1">Q2 2025</h3>
                    <p className="text-white/90">
                      Release of Whitepaper and Tokenomic structure. Wave 2 Rollout of Collaboration and Partnership Campaigns. Pre-Alpha Closed Testers Release.
                    </p>
                  </div>
                </div>
                <div className="w-3" /> {/* Spacer for dot */}
                <div /> {/* Empty right side */}
              </div>
            </div>

            {/* Q3 2025 */}
            <div className="group relative min-h-[100px] flex items-center">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-white group-hover:bg-blue-400 transition-colors group-hover:animate-pulse" />
              </div>
              <div className="grid grid-cols-[1fr,auto,1fr] gap-4 w-full">
                <div /> {/* Empty left side */}
                <div className="w-3" /> {/* Spacer for dot */}
                <div className="pl-8">
                  <div className="bg-white/30 p-6 rounded-lg hover:bg-white/50 transition-colors">
                    <h3 className="font-semibold mb-1">Q3 2025</h3>
                    <p className="text-white/90">NFT Town Sale Preparation and Launch. Intial Alpha Release and Internal Marketplace Festival System Development. 
                    Wave 2 Rollout of Collaboration and Partnership Campaigns.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Q4 2025 */}
            <div className="group relative min-h-[100px] flex items-center">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-white group-hover:bg-blue-400 transition-colors group-hover:animate-pulse" />
              </div>
              <div className="grid grid-cols-[1fr,auto,1fr] gap-4 w-full">
                <div className="text-right pr-8">
                  <div className="bg-white/30 p-6 rounded-lg hover:bg-white/50 transition-colors">
                    <h3 className="font-semibold mb-1">Q4 2025</h3>
                    <p className="text-white/90">$PALS Token Release And Pre-Release Development and Testing of Core Game Systems. 
                    Beta Build Public Release. Town NFT Systems Public Release.</p>
                  </div>
                </div>
                <div className="w-3" /> {/* Spacer for dot */}
                <div /> {/* Empty right side */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

