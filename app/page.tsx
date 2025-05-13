import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center bg-[#e0f2f1]">
          <Header />
      </div>
       <div className="flex justify-center items-center h-80 w-screen">
        <h1 className="font-bold text-5xl text-emerald-600">la vida la vida es un carrusel</h1>
       </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4 mt-6 px-5">
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
