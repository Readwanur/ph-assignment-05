import React, { type Dispatch } from "react";
import type { StackTypes } from "../types/StackTypes";

interface IyourStackProps {
  stackCount: number;
  setStackCount: Dispatch<React.SetStateAction<number>>;
  selectedStack: StackTypes[];
  setSelectedStack: Dispatch<React.SetStateAction<StackTypes[]>>;
}

const YourStack = ({
  stackCount,
  setStackCount,
  selectedStack,
  setSelectedStack,
}: IyourStackProps) => {
  const handleRemoveAll = () => {
    setSelectedStack([]);
    setStackCount(0);
  };

  const handleRemoveStack = (stack: StackTypes) => {
    const restStack = selectedStack.filter(
      (selectedStack) => selectedStack.name != stack.name,
    );

    setSelectedStack(restStack);
    setStackCount(stackCount - 1);
  };

  return (
    <div className="w-full card bg-white border border-slate-200/80 rounded-2xl shadow-sm p-5">
      <div className="mb-5 space-y-1">
        <h2 className="text-slate-900 text-xl font-bold">Your Stack</h2>
        <p className="text-xs text-slate-400">
          {stackCount
            ? `${stackCount} Technology Selected`
            : "No technologies selected yet."}
        </p>
      </div>

      {stackCount === 0 ? (
        <div className="mt-4 border border-dashed border-slate-200 rounded-xl py-8 px-4 flex items-center justify-center">
          <span className="text-xs text-slate-400 font-normal">
            Your Stack is empty.
          </span>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {selectedStack.map((stack) => (
            <div
              key={stack.id}
              className="flex items-center justify-between bg-white border border-slate-200 rounded-2xl px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain"
                    src={stack.icon}
                    alt={stack.name}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900">
                    {stack.name}
                  </span>
                  <span className="text-xs text-slate-400 font-normal mt-0.5">
                    {stack.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  handleRemoveStack(stack);
                }}
                className="text-slate-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
          <button
            onClick={() => handleRemoveAll()}
            className="mt-6 w-full py-3 bg-white border border-red-200 text-red-500 font-bold rounded-2xl hover:bg-red-50 transition-colors cursor-pointer"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;
