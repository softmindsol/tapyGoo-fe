import HeaderBar from "@/component/headerBar/headerBar";
import HeroSection from "@/component/heroSection/heroSection";
import HowWork from "@/component/howWorks/howWork";
import ProblemSolution from "@/component/problemSolution/ProblemSolution";
import ProductFeatures from "@/component/productFeatures/productFeatures";
import Benefits from "@/component/tangibleBenefits/benefits";
import Testimonial from "@/component/testimonial/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeaderBar />
    <HeroSection />
    <ProductFeatures />
    <ProblemSolution />
    <Benefits />
    <HowWork />
    <Testimonial />
    
    </>
   
  );
}
