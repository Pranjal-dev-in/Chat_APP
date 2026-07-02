import { create } from "zustand";
import { axiosInstanace } from "../lib/axios";
import toast from "react-hot-toast";
import { useChatStore } from "./useChatStore";
import { io } from "socket.io-client";

const SOCKET_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : import.meta.env.VITE_API_URL;
    
export const useAuthStore = create((set, get) => ({
  authUser: null,
  isCheckingAuth: true,

  isSigningUp: false,
  isLogingIn: false,
  socket: null,
  onlineUser: [],

  checkAuth: async () => {
    try {
      const res = await axiosInstanace.get("/auth/check");
      set({ authUser: res.data });
      get().connectSocket();
    } catch (error) {
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  logout: async () => {
    const res = await axiosInstanace.post("/auth/logout");
    localStorage.removeItem("token");
    set({ authUser: null });
    useChatStore.getState().setSelectedUser(null);
    toast.success(res.data.message);

    get().disconnectSocket();
  },

  signUp: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstanace.post("/auth/signup", data);
      localStorage.setItem("token", res.data.token);
      set({ authUser: res.data });
      toast.success("Account created successfully");
      get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  logIn: async (data) => {
    set({ isLogingIn: true });
    try {
      const res = await axiosInstanace.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      set({ authUser: res.data });
      toast.success("Login successfully");
      get().connectSocket();
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      set({ isLogingIn: false });
    }
  },

  connectSocket: () => {
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;

    const token = localStorage.getItem("token");
    const socket = io(SOCKET_URL, {
      auth: { token },
    });
    socket.connect();
    set({ socket: socket });

    socket.on("connect_error", (err) => {
      console.log("Socket connection error:", err.message);
    });

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUser: userIds });
    });
  },

  disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect();
  },
}));
