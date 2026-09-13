import React, { type Dispatch } from "react";
import type { StackTypes } from "../types/StackTypes";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

interface CardItemProps {
  stack: StackTypes;
  stackCount: number;
  setStackCount: Dispatch<React.SetStateAction<number>>;
  selectedStack: StackTypes[];
  setSelectedStack: Dispatch<React.SetStateAction<StackTypes[]>>;
}

const CardItem = ({
  stack,
  stackCount,
  setStackCount,
  selectedStack,
  setSelectedStack,
}: CardItemProps) => {
  const handleAddtoStackBtn = () => {
    setStackCount(stackCount + 1);
    toast.success(`${stack.name} added successfully`);

    setSelectedStack([...selectedStack, stack]);
  };

  const isAdded = selectedStack.some((s) => s.id === stack.id);

  return (
    <div
      className={`card bg-base-100 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl group ${
        isAdded
          ? "border-2 border-[#d81b7e]"
          : "border border-slate-200/80 hover:border-slate-300"
      }`}
    >
      <div className="card-body p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl p-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                className="w-full h-full object-contain"
                src={stack.icon}
                alt={stack.name}
              />
            </div>
            <div className="badge badge-soft badge-primary rounded-full px-3 py-1 text-xs font-semibold">
              {stack.badge}
            </div>
          </div>

          <h2 className="card-title text-xl font-bold text-slate-900">
            {stack.name}
          </h2>
          <p className="text-sm text-slate-500 line-clamp-3 mt-1 leading-relaxed">
            {stack.description}
          </p>
        </div>

        <div className="border-t border-gray-100 flex items-center justify-between pt-3 mt-4 text-sm">
          <div className="badge badge-ghost rounded-sm">{stack.category}</div>
          <span className="text-slate-500">{stack.difficulty}</span>
          <span className="font-bold text-slate-800 flex items-center gap-1">
            <FaStar className="text-[#fbbf24] text-sm" />
            {stack.rating}
          </span>
        </div>

        <div className="card-actions mt-6">
          <button
            onClick={() => handleAddtoStackBtn()}
            disabled={isAdded}
            className={`btn w-full border-0 shadow-none transition-colors ${
              isAdded
                ? "bg-[#f2c3db] text-[#d81b7e]! pointer-events-auto cursor-not-allowed! opacity-90"
                : "bg-[#0a0f1d] text-white cursor-pointer"
            }`}
          >
            {isAdded ? `Added to Stack` : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
