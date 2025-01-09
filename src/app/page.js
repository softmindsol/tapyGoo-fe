import HeaderBar from "@/component/headerBar/headerBar";
import HeroSection from "@/component/heroSection/heroSection";
import ProblemSolution from "@/component/problemSolution/ProblemSolution";
import ProductFeatures from "@/component/productFeatures/productFeatures";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeaderBar />
    <HeroSection />
    <ProductFeatures />
    <ProblemSolution />
    
    </>
   
  );
}
