import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-center bg-[#80cbc4] pb-32">
          <Header />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4 -mt-28 px-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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
