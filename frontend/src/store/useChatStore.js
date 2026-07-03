import { create } from "zustand";
import { axiosInstanace } from "../lib/axios";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  selectedUser: null,
  users: [],
  filteredUser: [],
  messages: [],

  isUserLoading: false,
  isMessageLoading: false,

  setMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),

  getUsers: async () => {
    set({ isUserLoading: true });
    try {
      const res = await axiosInstanace.get("/message/users");
      set({ users: res.data });
      set({ filteredUser: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUserLoading: false });
    }
  },

  getMessage: async (userId) => {
    set({ isMessageLoading: true });
    try {
      const res = await axiosInstanace.get(`/message/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isMessageLoading: false });
    }
  },

  sendMessage: async (messageData, tempId) => {
    const { selectedUser, messages } = get();
    try {
      const res = await axiosInstanace.post(
        `/message/send/${selectedUser._id}`,
        messageData,
      );

      set((state) => ({
        messages: state.messages.map((msg) =>
          msg._id === tempId ? res.data : msg,
        ),
      }));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  subscribeToMessage: () => {
    const { selectedUser } = get();
    if (!selectedUser) return;

    const socket = useAuthStore.getState().socket;
    socket.on("newMessage", (msg) => {
      if (selectedUser._id !== msg.senderId) return;
      set({ messages: [...get().messages, msg] });
    });
  },

  unSubscribeFromMessage: () => {
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
  },

  setSelectedUser: (selectedUser) => set({ selectedUser }),

  filterUser: (text) => {
    const { users } = get();

    const filteredUser = users.filter((user) =>
      user.fullName.toLowerCase().startsWith(text.toLowerCase()),
    );
    set({ filteredUser: text ? filteredUser : users });
  },
}));
