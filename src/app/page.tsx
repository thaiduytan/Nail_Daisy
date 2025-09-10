import { Carousel } from "@/components/Carousel"
import { Gallery } from "@/components/Gallery"
import { HomeLayout } from "@/components/Home/HomeLayout"
import { Service } from "@/components/Service"
import { Skilled } from "@/components/Skilled"

export default function HomePage() {
  return (
    <HomeLayout>
      <Carousel />
      <Skilled />
      <Service />
      <Gallery />
    </HomeLayout>
  )
}
