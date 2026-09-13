import type { StackTypes } from "../types/StackTypes";
import React, { use, type Dispatch } from "react";
import CardItem from "./CardItem";

interface stackProps {
  stackPromise: Promise<StackTypes[]>;
  stackCount: number;
  setStackCount: Dispatch<React.SetStateAction<number>>;
  selectedStack: StackTypes[];
  setSelectedStack: Dispatch<React.SetStateAction<StackTypes[]>>;
}

const Cards = ({
  stackPromise,
  stackCount,
  setStackCount,
  selectedStack,
  setSelectedStack,
}: stackProps) => {
  const stack = use(stackPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stack.map((stack) => {
        return (
          <CardItem
            stack={stack}
            stackCount={stackCount}
            setStackCount={setStackCount}
            selectedStack={selectedStack}
            setSelectedStack={setSelectedStack}
          />
        );
      })}
    </div>
  );
};

export default Cards;
