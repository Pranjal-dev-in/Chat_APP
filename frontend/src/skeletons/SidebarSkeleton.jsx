import React from "react";

const SK =
  "bg-[linear-gradient(90deg,#1a0025_25%,#220030_50%,#1a0025_75%)] bg-[length:200%_100%] animate-shimmer";

function SidebarSkeleton() {
  return (
    <aside className="bg-[#09000e] border-r border-[rgba(255,255,255,0.06)] flex flex-col overflow-hidden">
      <div className="py-[0.9rem] px-4 border-b border-[rgba(255,255,255,0.06)] shrink-0">
        <div className={`${SK} rounded-md h-5 w-20 mb-3`}></div>
        <div className={`${SK} rounded-lg h-10`}></div>
      </div>
      <div className="flex-1 overflow-hidden py-[0.4rem]">
        <div className="flex items-center gap-3 px-4 py-[0.65rem] animate-fade-in [animation-delay:0.05s]">
          <div className={`${SK} rounded-full w-9.5 h-9.5 shrink-0`}></div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div
              className={`${SK} rounded-[5px] h-2.75`}
              style={{ width: "90px" }}
            ></div>
            <div className={`${SK} rounded-[5px] h-2.25 w-[70%]`}></div>
          </div>
          <div className="flex flex-col items-end gap-1.25 shrink-0">
            <div className={`${SK} rounded-[5px] h-2.25 w-9`}></div>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-[0.65rem] animate-fade-in [animation-delay:0.1s]">
          <div className={`${SK} rounded-full w-9.5 h-9.5 shrink-0`}></div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div
              className={`${SK} rounded-[5px] h-2.75`}
              style={{ width: "110px" }}
            ></div>
            <div
              className={`${SK} rounded-[5px] h-2.25`}
              style={{ width: "60%" }}
            ></div>
          </div>
          <div className="flex flex-col items-end gap-1.25 shrink-0">
            <div className={`${SK} rounded-[5px] h-2.25 w-9`}></div>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-[0.65rem] animate-fade-in [animation-delay:0.15s]">
          <div className={`${SK} rounded-full w-9.5 h-9.5 shrink-0`}></div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div
              className={`${SK} rounded-[5px] h-2.75`}
              style={{ width: "80px" }}
            ></div>
            <div
              className={`${SK} rounded-[5px] h-2.25`}
              style={{ width: "75%" }}
            ></div>
          </div>
          <div className="flex flex-col items-end gap-1.25 shrink-0">
            <div className={`${SK} rounded-[5px] h-2.25 w-9`}></div>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-[0.65rem] animate-fade-in [animation-delay:0.2s]">
          <div className={`${SK} rounded-full w-9.5 h-9.5 shrink-0`}></div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div
              className={`${SK} rounded-[5px] h-2.75`}
              style={{ width: "100px" }}
            ></div>
            <div
              className={`${SK} rounded-[5px] h-2.25`}
              style={{ width: "55%" }}
            ></div>
          </div>
          <div className="flex flex-col items-end gap-1.25 shrink-0">
            <div className={`${SK} rounded-[5px] h-2.25 w-9`}></div>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-[0.65rem] animate-fade-in [animation-delay:0.25s]">
          <div className={`${SK} rounded-full w-9.5 h-9.5 shrink-0`}></div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div
              className={`${SK} rounded-[5px] h-2.75`}
              style={{ width: "95px" }}
            ></div>
            <div
              className={`${SK} rounded-[5px] h-2.25`}
              style={{ width: "65%" }}
            ></div>
          </div>
          <div className="flex flex-col items-end gap-1.25 shrink-0">
            <div className={`${SK} rounded-[5px] h-2.25 w-9`}></div>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-[0.65rem] animate-fade-in [animation-delay:0.3s]">
          <div className={`${SK} rounded-full w-9.5 h-9.5 shrink-0`}></div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div
              className={`${SK} rounded-[5px] h-2.75`}
              style={{ width: "85px" }}
            ></div>
            <div
              className={`${SK} rounded-[5px] h-2.25`}
              style={{ width: "80%" }}
            ></div>
          </div>
          <div className="flex flex-col items-end gap-1.25 shrink-0">
            <div className={`${SK} rounded-[5px] h-2.25 w-9`}></div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-[0.65rem] animate-fade-in [animation-delay:0.35s]">
          <div className={`${SK} rounded-full w-9.5 h-9.5 shrink-0`}></div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div
              className={`${SK} rounded-[5px] h-2.75`}
              style={{ width: "85px" }}
            ></div>
            <div
              className={`${SK} rounded-[5px] h-2.25`}
              style={{ width: "80%" }}
            ></div>
          </div>
          <div className="flex flex-col items-end gap-1.25 shrink-0">
            <div className={`${SK} rounded-[5px] h-2.25 w-9`}></div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-[0.65rem] animate-fade-in [animation-delay:0.4s]">
          <div className={`${SK} rounded-full w-9.5 h-9.5 shrink-0`}></div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div
              className={`${SK} rounded-[5px] h-2.75`}
              style={{ width: "85px" }}
            ></div>
            <div
              className={`${SK} rounded-[5px] h-2.25`}
              style={{ width: "80%" }}
            ></div>
          </div>
          <div className="flex flex-col items-end gap-1.25 shrink-0">
            <div className={`${SK} rounded-[5px] h-2.25 w-9`}></div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-[0.65rem] animate-fade-in [animation-delay:0.45s]">
          <div className={`${SK} rounded-full w-9.5 h-9.5 shrink-0`}></div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div
              className={`${SK} rounded-[5px] h-2.75`}
              style={{ width: "85px" }}
            ></div>
            <div
              className={`${SK} rounded-[5px] h-2.25`}
              style={{ width: "80%" }}
            ></div>
          </div>
          <div className="flex flex-col items-end gap-1.25 shrink-0">
            <div className={`${SK} rounded-[5px] h-2.25 w-9`}></div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SidebarSkeleton;
