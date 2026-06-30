import React, { useState } from "react";
import "./SignUpPage.css";
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
    <main>
      <section className="form-side">
        <form className="form-box" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-logo">
            <svg className="form-logo-gem" viewBox="0 0 28 28" fill="none">
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
            <span className="form-logo-name">
              nex<em>chat</em>
            </span>
          </div>

          <h1 className="form-heading">create account ✦</h1>
          <p className="form-sub">welcome to the future of chat.</p>

          <div className="field">
            <label htmlFor="name">full name</label>
            <div className="input-wrap">
              <span className="input-icon">
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
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">email</label>
            <div className="input-wrap">
              <span className="input-icon">
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
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="password">password</label>
            <div className="input-wrap">
              <span className="input-icon">
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
              />
              <span className="password" onClick={togglePassword}>
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
            className="btn-submit flex items-center justify-center gap-2"
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

          <div className="divider">or</div>

          <p className="login-link">
            already have an account? <Link to={"/login"}>log in</Link>
          </p>
          <p className="terms">
            by signing up you agree to our <a href="#">terms</a> &amp;
            <a href="#">privacy</a>.
          </p>
        </form>
      </section>

      <section className="design-side">
        <canvas id="patternCanvas"></canvas>
        <div className="design-glow"></div>

        <div className="design-content">
          <svg
            className="hero-gem"
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

          <div className="design-headline">
            <h2>
              chat <em>smarter.</em>
              <br />
              connect deeper.
            </h2>
            <p>ai-powered messaging for the ones who matter most.</p>
          </div>

          <div className="bubbles">
            <div className="bubble them">hey! did you try nexchat yet? ✨</div>
            <div className="bubble me">just signed up, it's amazing 🚀</div>
            <div className="bubble them">the ai replies are so fast 💬</div>
            <div className="bubble me">right? feels like the future 🔮</div>
          </div>

          <div className="pill-row">
            <span className="pill">ai replies</span>
            <span className="pill">real-time</span>
            <span className="pill">end-to-end</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUpPage;
