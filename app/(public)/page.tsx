import { LogoScroll } from "@/components/organisms/LogoScroll"
import { HeroSection } from "@/components/organisms/HeroSection"
import { FeaturesSection } from "@/components/organisms/FeaturesSection/FeaturesSection"

const logos = [
  {
    "id": "/images/svg/microsoft.svg",
    "width": 120,
    "height": 40
  },
  { "id": "/images/svg/nvidia.svg", "width": 120, "height": 40 },
  { "id": "/images/svg/openai.svg", "width": 120, "height": 40 },
  { "id": "/images/svg/ibm.svg", "width": 120, "height": 40 },
  { "id": "/images/svg/apple.svg", "width": 120, "height": 40 },
  { "id": "/images/svg/hashicorp.svg", "width": 120, "height": 40 },
  
]

export default function HomePage() {
  return (

    <>

      <main className="flex flex-col">



        <HeroSection />
        <LogoScroll
          sideText="Powering the best teams"
          speed={40}
          logos={logos}
        />
        <FeaturesSection />

      </main>




    </>

  )
}