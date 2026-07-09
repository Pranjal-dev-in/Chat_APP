import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";
import { LoaderCircle } from "lucide-react";

function SignUpPage() {
  const { isSigningUp, signUp } = useAuthStore();

  const [showPassword, setshowPassword] = useState(false);

  const togglePassword = () => {
    setshowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleFormData = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const validateForm = (formData) => {
    if (!formData.fullName.trim()) return toast.error("Name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password.trim()) return toast.error("Password is required");
    if (formData.password.trim().length < 6)
      return toast.error("Password must be at least 6 character");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm(formData);

    if (success === true) signUp(formData);
  };

  return (
    <main className="min-h-screen pt-14 grid grid-cols-1 md:grid-cols-2">
      <section className="flex items-start md:items-center justify-center pt-10 pr-[1.2rem] pb-8 pl-[1.2rem] md:py-10 md:px-8 bg-[#0d0012] md:bg-[#0a000f] md:border-r md:border-[#ffffff0f] min-h-[calc(100vh-56px)] md:min-h-0">
        <form className="w-full max-w-87.5" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex items-center gap-2 mb-[1.7rem]">
            <svg className="w-9 h-9" viewBox="0 0 28 28" fill="none">
              <polygon
                points="14,1 25,8 25,20 14,27 3,20 3,8"
                fill="none"
                stroke="#9b6fd4"
                strokeWidth="1.2"
                opacity="0.8"
              />
              <polygon points="14,1 25,8 14,13" fill="rgba(155,111,212,0.15)" />
              <polygon points="14,1 3,8 14,13" fill="rgba(78,30,120,0.18)" />
              <polygon points="3,8 14,13 3,20" fill="rgba(155,111,212,0.09)" />
              <polygon points="25,8 14,13 25,20" fill="rgba(78,30,120,0.11)" />
              <polygon
                points="14,13 3,20 14,27 25,20"
                fill="rgba(155,111,212,0.12)"
              />
              <line
                x1="3"
                y1="8"
                x2="14"
                y2="13"
                stroke="rgba(155,111,212,0.55)"
                strokeWidth="0.6"
              />
              <line
                x1="25"
                y1="8"
                x2="14"
                y2="13"
                stroke="rgba(78,30,120,0.65)"
                strokeWidth="0.6"
              />
              <line
                x1="14"
                y1="1"
                x2="14"
                y2="13"
                stroke="rgba(155,111,212,0.45)"
                strokeWidth="0.6"
              />
              <line
                x1="14"
                y1="13"
                x2="3"
                y2="20"
                stroke="rgba(78,30,120,0.55)"
                strokeWidth="0.6"
              />
              <line
                x1="14"
                y1="13"
                x2="25"
                y2="20"
                stroke="rgba(155,111,212,0.5)"
                strokeWidth="0.6"
              />
              <line
                x1="14"
                y1="13"
                x2="14"
                y2="27"
                stroke="rgba(78,30,120,0.45)"
                strokeWidth="0.6"
              />
              <circle cx="14" cy="13" r="2" fill="#9b6fd4" opacity="0.92" />
            </svg>
            <span className="font-['Comfortaa',cursive] font-bold text-[1.3rem] text-[#cdb8dd]">
              nex<em className="not-italic text-[#9b6fd4]">chat</em>
            </span>
          </div>

          <h1 className="font-['Comfortaa',cursive] font-bold text-[1.25rem] md:text-[1.4rem] text-[#cdb8dd] leading-tight mb-1">
            create account ✦
          </h1>
          <p className="text-[0.8rem] text-[#9278a8] font-normal mb-[1.4rem] md:mb-[1.7rem]">
            welcome to the future of chat.
          </p>

          <div className="mb-[0.85rem]">
            <label
              htmlFor="name"
              className="block text-[0.68rem] font-semibold text-[#4a3158] tracking-[0.07em] uppercase mb-1.25"
            >
              full name
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4a3158] pointer-events-none flex">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <input
                type="text"
                id="fullNameInput"
                name="fullName"
                placeholder="arjun sharma"
                autoComplete="name"
                onChange={(e) => handleFormData(e)}
                value={formData.fullName}
                className="w-full pt-2.5 pr-3.25 pb-2.5 pl-9.25 border border-[#ffffff17] rounded-[11px] bg-[rgba(255,255,255,0.025)] font-['Outfit',sans-serif] text-[0.88rem] font-normal text-[#cdb8dd] outline-none transition-all duration-200 placeholder:text-[#4a3158] focus:border-[#7a52aa] focus:shadow-[0_0_0_3px_rgba(155,111,212,0.15)] focus:bg-[rgba(155,111,212,0.04)]"
              />
            </div>
          </div>

          <div className="mb-[0.85rem]">
            <label
              htmlFor="email"
              className="block text-[0.68rem] font-semibold text-[#4a3158] tracking-[0.07em] uppercase mb-1.25"
            >
              email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4a3158] pointer-events-none flex">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@email.com"
                autoComplete="email"
                onChange={(e) => handleFormData(e)}
                value={formData.email}
                className="w-full pt-2.5 pr-3.25 pb-2.5 pl-9.25 border border-[#ffffff17] rounded-[11px] bg-[rgba(255,255,255,0.025)] font-['Outfit',sans-serif] text-[0.88rem] font-normal text-[#cdb8dd] outline-none transition-all duration-200 placeholder:text-[#4a3158] focus:border-[#7a52aa] focus:shadow-[0_0_0_3px_rgba(155,111,212,0.15)] focus:bg-[rgba(155,111,212,0.04)]"
              />
            </div>
          </div>

          <div className="mb-[0.85rem]">
            <label
              htmlFor="password"
              className="block text-[0.68rem] font-semibold text-[#4a3158] tracking-[0.07em] uppercase mb-1.25"
            >
              password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4a3158] pointer-events-none flex">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="min. 8 characters"
                autoComplete="new-password"
                onChange={(e) => handleFormData(e)}
                value={formData.password}
                name="password"
                className="w-full pt-2.5 pr-3.25 pb-2.5 pl-9.25 border border-[#ffffff17] rounded-[11px] bg-[rgba(255,255,255,0.025)] font-['Outfit',sans-serif] text-[0.88rem] font-normal text-[#cdb8dd] outline-none transition-all duration-200 placeholder:text-[#4a3158] focus:border-[#7a52aa] focus:shadow-[0_0_0_3px_rgba(155,111,212,0.15)] focus:bg-[rgba(155,111,212,0.04)]"
              />
              <span
                className="absolute top-1/2 -translate-y-1/2 right-7.5 text-[#4a3158] cursor-pointer"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"
                    />
                    <line x1="1" y1="1" x2="23" y2="23" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>

          <button
            className="w-full flex items-center justify-center gap-2 py-2.75 px-2.75 mt-8 bg-[#3d1560] text-[#d4b8f0] font-['Comfortaa',cursive] font-bold text-[0.88rem] tracking-[0.02em] border border-[rgba(155,111,212,0.2)] rounded-[11px] cursor-pointer transition-all duration-200 hover:bg-[#4e1e78] hover:-translate-y-px hover:shadow-[0_5px_18px_rgba(61,21,96,0.55)] active:translate-y-0 active:shadow-none"
            disabled={isSigningUp}
          >
            {isSigningUp ? (
              <>
                <LoaderCircle className="size-5 animate-spin " />
                <span>getting start...</span>
              </>
            ) : (
              <>get started →</>
            )}
          </button>

          <div className="flex items-center gap-2.5 my-[1.1rem] text-[#4a3158] text-[0.72rem] font-semibold tracking-wider before:content-[''] before:flex-1 before:h-px before:bg-[#ffffff17] after:content-[''] after:flex-1 after:h-px after:bg-[#ffffff17]">
            or
          </div>

          <p className="text-center text-[0.8rem] text-[#9278a8] font-normal">
            already have an account?{" "}
            <Link
              to={"/login"}
              className="text-[#9b6fd4] no-underline font-semibold hover:text-[#c0a0f0]"
            >
              log in
            </Link>
          </p>
          <p className="text-center text-[0.68rem] text-[#4a3158] mt-[0.9rem] leading-[1.6]">
            by signing up you agree to our{" "}
            <a href="#" className="text-[#9278a8] no-underline">
              terms
            </a>{" "}
            &amp;
            <a href="#" className="text-[#9278a8] no-underline">
              privacy
            </a>
            .
          </p>
        </form>
      </section>

      <section className="hidden md:flex items-center justify-center relative overflow-hidden bg-[#080010]">
        <canvas
          id="patternCanvas"
          className="absolute inset-0 w-full h-full opacity-90"
        ></canvas>
        <div className="absolute w-95 h-95 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-[radial-gradient(circle,rgba(61,21,96,0.28)_0%,transparent_68%)] animate-glow-pulse"></div>

        <div className="relative z-2 flex flex-col items-center gap-[1.4rem] p-8">
          <svg
            className="animate-float-gem filter[drop-shadow(0_0_18px_rgba(155,111,212,0.35))]"
            width="90"
            height="90"
            viewBox="0 0 28 28"
            fill="none"
          >
            <polygon
              points="14,1 25,8 25,20 14,27 3,20 3,8"
              fill="none"
              stroke="#9b6fd4"
              strokeWidth="0.8"
              opacity="0.7"
            />
            <polygon points="14,1 25,8 14,13" fill="rgba(155,111,212,0.2)" />
            <polygon points="14,1 3,8 14,13" fill="rgba(78,30,120,0.22)" />
            <polygon points="3,8 14,13 3,20" fill="rgba(155,111,212,0.12)" />
            <polygon points="25,8 14,13 25,20" fill="rgba(78,30,120,0.14)" />
            <polygon
              points="14,13 3,20 14,27 25,20"
              fill="rgba(155,111,212,0.15)"
            />
            <line
              x1="3"
              y1="8"
              x2="14"
              y2="13"
              stroke="rgba(155,111,212,0.75)"
              strokeWidth="0.5"
            />
            <line
              x1="25"
              y1="8"
              x2="14"
              y2="13"
              stroke="rgba(78,30,120,0.8)"
              strokeWidth="0.5"
            />
            <line
              x1="14"
              y1="1"
              x2="14"
              y2="13"
              stroke="rgba(155,111,212,0.65)"
              strokeWidth="0.5"
            />
            <line
              x1="14"
              y1="13"
              x2="3"
              y2="20"
              stroke="rgba(78,30,120,0.7)"
              strokeWidth="0.5"
            />
            <line
              x1="14"
              y1="13"
              x2="25"
              y2="20"
              stroke="rgba(155,111,212,0.7)"
              strokeWidth="0.5"
            />
            <line
              x1="14"
              y1="13"
              x2="14"
              y2="27"
              stroke="rgba(78,30,120,0.6)"
              strokeWidth="0.5"
            />
            <circle cx="14" cy="13" r="2.8" fill="#9b6fd4" />
            <circle
              cx="14"
              cy="13"
              r="5"
              fill="none"
              stroke="#9b6fd4"
              strokeWidth="0.4"
              opacity="0.3"
            />
            <circle
              cx="14"
              cy="13"
              r="7.5"
              fill="none"
              stroke="#9b6fd4"
              strokeWidth="0.25"
              opacity="0.15"
            />
          </svg>

          <div className="text-center">
            <h2 className="font-['Comfortaa',cursive] font-bold text-[1.55rem] leading-[1.3] text-[#c8b0e0] tracking-[-0.01em] mb-[0.4rem]">
              chat <em className="not-italic text-[#9b6fd4]">smarter.</em>
              <br />
              connect deeper.
            </h2>
            <p className="text-[0.78rem] text-[#4a3158] leading-[1.6] max-w-60 mx-auto">
              ai-powered messaging for the ones who matter most.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-55">
            <div className="px-3.25 py-2 rounded-[14px] text-[0.72rem] font-medium leading-[1.4] animate-fade-slide [animation-delay:0.1s] bg-[rgba(61,21,96,0.55)] border border-[rgba(155,111,212,0.15)] text-[#b09acc] rounded-bl-sm self-start">
              hey! did you try nexchat yet? ✨
            </div>
            <div className="px-3.25 py-2 rounded-[14px] text-[0.72rem] font-medium leading-[1.4] animate-fade-slide [animation-delay:0.25s] bg-[rgba(78,30,120,0.55)] border border-[rgba(155,111,212,0.2)] text-[#c8aee8] rounded-br-sm self-end">
              just signed up, it's amazing 🚀
            </div>
            <div className="px-3.25 py-2 rounded-[14px] text-[0.72rem] font-medium leading-[1.4] animate-fade-slide [animation-delay:0.4s] bg-[rgba(61,21,96,0.55)] border border-[rgba(155,111,212,0.15)] text-[#b09acc] rounded-bl-sm self-start">
              the ai replies are so fast 💬
            </div>
            <div className="px-3.25 py-2 rounded-[14px] text-[0.72rem] font-medium leading-[1.4] animate-fade-slide [animation-delay:0.55s] bg-[rgba(78,30,120,0.55)] border border-[rgba(155,111,212,0.2)] text-[#c8aee8] rounded-br-sm self-end">
              right? feels like the future 🔮
            </div>
          </div>

          <div className="flex gap-1.75 flex-wrap justify-center">
            <span className="text-[0.65rem] font-semibold tracking-[0.04em] px-2.75 py-1.25 rounded-full bg-[rgba(61,21,96,0.45)] border border-[rgba(155,111,212,0.18)] text-[#9278a8]">
              ai replies
            </span>
            <span className="text-[0.65rem] font-semibold tracking-[0.04em] px-2.75 py-1.25 rounded-full bg-[rgba(61,21,96,0.45)] border border-[rgba(155,111,212,0.18)] text-[#9278a8]">
              real-time
            </span>
            <span className="text-[0.65rem] font-semibold tracking-[0.04em] px-2.75 py-1.25 rounded-full bg-[rgba(61,21,96,0.45)] border border-[rgba(155,111,212,0.18)] text-[#9278a8]">
              end-to-end
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUpPage;
