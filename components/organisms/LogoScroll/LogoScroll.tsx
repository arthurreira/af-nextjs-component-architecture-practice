import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider"
import type { LogoScrollProps } from "./LogoScrollProps"
import Image from "next/image"

export function LogoScroll({ sideText, speed, imageLibrary = [], logos = [] }: LogoScrollProps) {
  return (
    <section className="bg-background overflow-hidden py-16">
      <div className="group relative w-full px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">{sideText}</p>
          </div>

          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speed={speed} speedOnHover={20} gap={120} className="w-full">
              {logos.map((logo) => {
                const logoData = imageLibrary.find((img) => img.id === logo.id)

                if (logoData?.component) {
                  const LogoComponent = logoData.component
                  return (
                    <div key={logo.id} className="flex shrink-0 items-center justify-center">
                      <LogoComponent
                        className="text-foreground h-8 w-auto opacity-60 transition-all duration-300"
                        width={logo.width ?? "auto"}
                        height={logo.height ?? 32}
                      />
                    </div>
                  )
                }

                return (
                  <div key={logo.id} className="flex shrink-0 items-center justify-center">
                    <Image
                      src={logo.id}
                      alt=""
                        width={logo.width}
                      height={logo.height ?? 32}
                      className="h-8 w-auto opacity-60 transition-all duration-300"
                    />
                  </div>
                )
              })}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  )
}