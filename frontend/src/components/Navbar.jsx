import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { CircleUserRound, LogOut, LogIn, UserRoundPlus } from "lucide-react";

function Navbar() {
  const { authUser, logout } = useAuthStore();
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 h-14 flex items-center justify-between px-4 md:px-[1.6rem] bg-[#08000ef0] backdrop-blur-xl">
      <a className="flex items-center gap-2 shrink-0 no-underline">
        <svg className="w-7 h-7 shrink-0" viewBox="0 0 28 28" fill="none">
          <polygon
            points="14,1 25,8 25,20 14,27 3,20 3,8"
            fill="none"
            stroke="#9b6fd4"
            strokeWidth="1.2"
            opacity="0.8"
          />
          <polygon points="14,1 25,8 14,13" fill="rgba(155,111,212,0.13)" />
          <polygon points="14,1 3,8 14,13" fill="rgba(78,30,120,0.16)" />
          <polygon points="3,8 14,13 3,20" fill="rgba(155,111,212,0.08)" />
          <polygon points="25,8 14,13 25,20" fill="rgba(78,30,120,0.1)" />
          <polygon
            points="14,13 3,20 14,27 25,20"
            fill="rgba(155,111,212,0.11)"
          />
          <line
            x1="3"
            y1="8"
            x2="14"
            y2="13"
            stroke="rgba(155,111,212,0.5)"
            strokeWidth="0.6"
          />
          <line
            x1="25"
            y1="8"
            x2="14"
            y2="13"
            stroke="rgba(78,30,120,0.6)"
            strokeWidth="0.6"
          />
          <line
            x1="14"
            y1="1"
            x2="14"
            y2="13"
            stroke="rgba(155,111,212,0.4)"
            strokeWidth="0.6"
          />
          <line
            x1="14"
            y1="13"
            x2="3"
            y2="20"
            stroke="rgba(78,30,120,0.5)"
            strokeWidth="0.6"
          />
          <line
            x1="14"
            y1="13"
            x2="25"
            y2="20"
            stroke="rgba(155,111,212,0.45)"
            strokeWidth="0.6"
          />
          <line
            x1="14"
            y1="13"
            x2="14"
            y2="27"
            stroke="rgba(78,30,120,0.4)"
            strokeWidth="0.6"
          />
          <circle cx="14" cy="13" r="1.8" fill="#9b6fd4" opacity="0.9" />
        </svg>
        <span className="font-['Comfortaa',cursive] font-bold text-[1.05rem] text-[#cdb8dd] tracking-[0.01em] max-[420px]:text-[0.95rem]">
          nex<em className="not-italic text-[#9b6fd4]">chat</em>
        </span>
      </a>

      <div className="flex items-center gap-1">
        {authUser ? (
          <>
            <button
              className="flex items-center gap-0 sm:gap-2 font-['Outfit',sans-serif] text-[0.78rem] font-medium px-3.25 py-1.5 bg-transparent border-none rounded-[7px] cursor-pointer no-underline whitespace-nowrap transition-colors duration-150 text-[#4a3158] hover:text-[#c97070] hover:bg-[rgba(200,100,100,0.08)]"
              title="Profile"
              onClick={() => logout()}
            >
              <CircleUserRound className="size-4" />
              <span className="hidden sm:inline">Profile</span>
            </button>
            <button
              className="flex items-center gap-0 sm:gap-2 font-['Outfit',sans-serif] text-[0.78rem] font-medium px-3.25 py-1.5 bg-transparent border-none rounded-[7px] cursor-pointer no-underline whitespace-nowrap transition-colors duration-150 text-[#4a3158] hover:text-[#c97070] hover:bg-[rgba(200,100,100,0.08)]"
              title="Logout"
              onClick={() => logout()}
            >
              <LogOut className="size-4" />
              <span className="hidden sm:inline">logout</span>
            </button>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className="flex items-center gap-0 sm:gap-2 font-['Outfit',sans-serif] text-[0.8rem] font-medium px-3.25 py-1.5 bg-transparent border-none rounded-[7px] cursor-pointer no-underline whitespace-nowrap transition-colors duration-150 text-[#9278a8] hover:bg-white/5 hover:text-[#cdb8dd]"
              title="Login"
            >
              <LogIn className="size-4" />
              <span className="hidden sm:inline">login</span>
            </Link>
            <Link
              to={"/signup"}
              className="flex items-center gap-0 sm:gap-2 font-['Outfit',sans-serif] text-[0.8rem] font-medium px-3.25 py-1.5 bg-transparent border-none rounded-[7px] cursor-pointer no-underline whitespace-nowrap transition-colors duration-150 text-[#9278a8] hover:bg-white/5 hover:text-[#cdb8dd]"
              title="Signup"
            >
              <UserRoundPlus className="size-4" />
              <span className="hidden sm:inline">sign up</span>
            </Link>
          </>
        )}

        {/* <div className="nav-sep"></div> */}

        {/* <button className="nav-icon-btn" title="Settings" aria-label="Settings">
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button> */}

        {/* <div className="nav-avatar" title="Profile" aria-label="Profile">
          AS
        </div> */}

        {/* <div className="nav-sep"></div> */}
      </div>
    </nav>
  );
}

export default Navbar;
