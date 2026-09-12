import React from "react";

const YourStack = () => {
  return (
    <div className="w-full card bg-white border border-slate-200/80 rounded-2xl shadow-sm p-5">
      <div className="space-y-1">
        <h2 className="text-slate-900 text-base font-bold">Your Stack</h2>
        <p className="text-xs text-slate-400">No technologies selected yet.</p>
      </div>

      <div className="mt-4 border border-dashed border-slate-200 rounded-xl py-8 px-4 flex items-center justify-center">
        <span className="text-xs text-slate-400 font-normal">
          Your stack is empty.
        </span>
      </div>
    </div>
  );
};

export default YourStack;