import React from "react";
import CustomHeading from "../common/customHeading";

const ProblemSolution = () => {
    const commonProblem =[{
        
    }]
  return (
    <>
      <div className="container mx-auto py-10">
        <CustomHeading
          headingText="Problem & Solution"
          fontSize={"lg:text-[26px] text-lg"}
          textAlign={"text-center"}
          fontWeight={"font-semibold"}
        />
        <p className="text-center font-fontOutfit text-base font-medium text-[#696969]">
          Why keep losing time and orders?
        </p>
        <div className="grid lg:grid-cols-3 mt-4">
          <div className="">
            <CustomHeading
              headingText="Common Problems"
              fontSize={"lg:text-[20px] text-lg"}
              textAlign={"text-left"}
              fontWeight={"font-semibold"}
            />
            {commonProblem?.map((item, index) =>(
                <div key={index} >
                    </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemSolution;
