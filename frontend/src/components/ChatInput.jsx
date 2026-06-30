import React, { useRef, useState } from "react";
import "./ChatInput.css";
import { useChatStore } from "../store/useChatStore";
import toast from "react-hot-toast";

function ChatInput() {
  const [text, setText] = useState("");
  const { sendMessage } = useChatStore();
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    try {
      await sendMessage({
        text: text,
        image: imagePreview,
      });
      setText("");
      setImagePreview(null);
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
        <div className="image-preview">
          <img src={imagePreview} alt="sending image" />
          <button onClick={removeImage}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
            </svg>
          </button>
        </div>
      )}
      <form onSubmit={handleFormSubmit} className="chat-input-bar">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        <button
          className="attach-btn"
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

        <div className="chat-input-wrap">
          <div className="sep"></div>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="chat-input"
            type="text"
            placeholder="type a message..."
          />
          {/* <button className="emoji-btn">😊</button> */}
        </div>
        {(text.trim() || imagePreview) && (
          <button
            className="send-btn"
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
