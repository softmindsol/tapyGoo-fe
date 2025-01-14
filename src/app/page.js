import Faq from "@/component/faq/faq";
import HeaderBar from "@/component/headerBar/headerBar";
import HeroSection from "@/component/heroSection/heroSection";
import HowWork from "@/component/howWorks/howWork";
import PricingPlan from "@/component/pricingPlan/pricingPlan";
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
    <Testimonial />
    <HowWork />
    <PricingPlan />
    <Faq />
    
    </>
   
  );
}
