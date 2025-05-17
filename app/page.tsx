import { CarouselHome } from "@/components/carousel";
import { ProductCard } from "@/components/product-card";

export default function Home() {
  return (
    <div className="">
      <CarouselHome />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  );
}
