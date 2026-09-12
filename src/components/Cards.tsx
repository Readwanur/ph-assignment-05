import React from "react";
import type { StackTypes } from "../types/StackTypes";
import { use } from "react";
import { FaStar } from "react-icons/fa";

interface stackProps {
  stackPromise: Promise<StackTypes[]>;
}

const Cards = ({ stackPromise }: stackProps) => {
  const stack = use(stackPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stack.map((stack) => {
        return (
          <div
            key={stack.id}
            className="card bg-base-100 border border-slate-200/80 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 group"
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

              <div className="border border-gray-100 flex items-center justify-between pt-3 mt-4 text-sm">
                <div className="badge badge-ghost rounded-sm">
                  {stack.category}
                </div>
                <span className="text-slate-500">{stack.difficulty}</span>
                <span className="font-bold text-slate-800 flex items-center">
                  <FaStar className="text-[#fbbf24] text-sm" /> {stack.rating}
                </span>
              </div>

              <div className="card-actions mt-6">
                <button className="btn btn-primary w-full bg-[#0a0f1d] hover:bg-[#0a0f1d] text-white border-0 shadow-none transition-colors">
                  Add to Stack
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
