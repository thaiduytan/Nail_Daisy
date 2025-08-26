import { Carousel } from "@/components/Carousel";
import { HomeLayout } from "@/components/Home/HomeLayout";
import { Skilled } from "@/components/Skilled";

export default function HomePage() {
	return (
		<HomeLayout>
			<Carousel />
			<Skilled />
		</HomeLayout>
	);
}
