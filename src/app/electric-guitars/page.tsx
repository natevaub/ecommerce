import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import React from "react";

export default async function Page() {
  return (
    <MaxWidthWrapper className="pt-6 md:px-[15rem]">
      <div>
        Hello From Electrics Page!
      </div>
      <div>Path</div>
      <div className="flex justify-between">
        <h1>ELECTRICS</h1>
        <div>Sort By:</div>
      </div>
      <div className='flex'>
        <div>
          {/* Filters */}
        </div>
        <div>
          {/* Grid */}
        </div>
        
      </div>
      
    </MaxWidthWrapper>
    
  );
}