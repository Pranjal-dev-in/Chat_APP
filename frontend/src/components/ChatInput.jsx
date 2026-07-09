import React, { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";

function ChatInput() {
  const [text, setText] = useState("");
  const { sendMessage, setMessage, selectedUser } = useChatStore();
  const { authUser } = useAuthStore();
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    const tempId = crypto.randomUUID();
    setMessage({
      text,
      image: imagePreview,
      senderId: authUser._id,
      receiverId: selectedUser._id,
      createdAt: Date.now(),
      status: "sending",
      _id: tempId,
    });
    setText("");
    setImagePreview(null);
    try {
      await sendMessage(
        {
          text: text,
          image: imagePreview,
        },
        tempId,
      );
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const render = new FileReader();
    render.onloadend = () => {
      setImagePreview(render.result);
    };
    render.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <>
      {imagePreview && (
        <div className="relative left-12.5 bottom-px w-30 bg-black max-[768px]:fixed max-[768px]:left-5 max-[768px]:bottom-16.25">
          <img src={imagePreview} alt="sending image" className="w-full" />
          <button
            onClick={removeImage}
            className="absolute -top-2 -right-2 border-none bg-white text-black text-[10px] rounded-full"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
            </svg>
          </button>
        </div>
      )}
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center gap-[0.6rem] shrink-0 px-[1.2rem] py-3 border-t border-(--border) bg-[rgba(9,0,14,0.7)] max-[768px]:fixed max-[768px]:w-full max-[768px]:bottom-0 max-[768px]:bg-[rgb(9,0,14)]"
      >
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        <button
          className="absolute w-14 h-9.75 border-none rounded-[30px] cursor-pointer flex items-center justify-center shrink-0 z-6 transition-colors duration-150 text-(--text-soft) hover:text-(--accent)"
          title="Attach"
          type="button"
          onClick={() => fileInputRef.current?.click()}
        >
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
            />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </button>

        <div className="relative flex-1">
          <div className="absolute left-13.75 top-1/2 translate-y-[45%] h-2.5 w-px border-r border-(--border2)"></div>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="w-full py-2.25 pr-22.5 pl-16 border border-(--border2) rounded-[30px] bg-(--input-bg) font-['Outfit',sans-serif] text-[0.83rem] text-(--text) outline-none resize-none transition-[border-color,box-shadow] duration-200 placeholder:text-(--text-faint) focus:border-(--accent-s) focus:shadow-[0_0_0_3px_rgba(155,111,212,0.1)]"
            type="text"
            placeholder="type a message..."
          />
          {/* <button className="emoji-btn">😊</button> */}
        </div>
        {(text.trim() || imagePreview) && (
          <button
            className="absolute w-17.5 h-9.75 right-5 rounded-[30px] cursor-pointer flex items-center justify-center shrink-0 z-6 transition-color duration-350 text-[#d4b8f0] hover:text-[#9b6cc5]"
            title="Send"
            type="submit"
            disabled={!text.trim() && !imagePreview}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        )}
      </form>
    </>
  );
}

export default ChatInput;
