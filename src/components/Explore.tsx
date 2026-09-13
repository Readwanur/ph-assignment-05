import React, { Suspense, useState, type Dispatch } from "react";
import Cards from "./Cards";
import YourStack from "./YourStack";
import type { StackTypes } from "../types/StackTypes";

const stackFetch = async (): Promise<StackTypes[]> => {
  const result = await fetch("/public/data.json");
  const data = await result.json();

  return data;
};

interface IexploreProps {
  stackCount: number;
  setStackCount: Dispatch<React.SetStateAction<number>>;
}

const Explore = ({ stackCount, setStackCount }: IexploreProps) => {
  const [selectedStack, setSelectedStack] = useState<StackTypes[]>([]);
  return (
    <section className="max-w-7xl mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-[36px] font-extrabold leading-tight">
          Explore the <span className="text-[#f948a3]">Technologies</span>
        </h1>
        <p className="text-[#64748b] text-[16px] mt-1">
          Pick one technology per category to build your ideal stack
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="flex-1 w-full">
          <Suspense fallback={<h1>Loading Data...</h1>}>
            <Cards
              stackPromise={stackFetch()}
              stackCount={stackCount}
              setStackCount={setStackCount}
              selectedStack={selectedStack}
              setSelectedStack={setSelectedStack}
            />
          </Suspense>
        </div>

        <div className="w-full lg:w-[250px] shrink-0 sticky top-24">
          <YourStack
            stackCount={stackCount}
            setStackCount={setStackCount}
            selectedStack={selectedStack}
            setSelectedStack={setSelectedStack}
          />
        </div>
      </div>
    </section>
  );
};

export default Explore;
