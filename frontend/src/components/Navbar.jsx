import React from "react";
import "./Navbar.css";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { CircleUserRound, LogOut, LogIn, UserRoundPlus } from "lucide-react";

function Navbar() {
  const { authUser, logout } = useAuthStore();
  return (
    <nav>
      <a className="nav-logo" href="#">
        <svg className="nav-logo-gem" viewBox="0 0 28 28" fill="none">
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
        <span className="nav-logo-name">
          nex<em>chat</em>
        </span>
      </a>

      <div className="nav-right">
        {authUser ? (
          <>
            <button
              className="nav-link nav-logout flex items-center gap-0 sm:gap-2"
              title="Profile"
              onClick={() => logout()}
            >
              <CircleUserRound className="size-4" />
              <span className="hidden sm:inline">Profile</span>
            </button>
            <button
              className="nav-link nav-logout flex items-center gap-0 sm:gap-2"
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
              className="nav-link flex items-center gap-0 sm:gap-2"
              title="Login"
            >
              <LogIn className="size-4" />
              <span className="hidden sm:inline">login</span>
            </Link>
            <Link
              to={"/signup"}
              className="nav-link flex items-center gap-0 sm:gap-2"
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
