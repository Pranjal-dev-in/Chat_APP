import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { useChatStore } from "../store/useChatStore";
import SidebarSkeleton from "../skeletons/SidebarSkeleton";
import { User } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

function Sidebar() {
  const {
    isUserLoading,
    selectedUser,
    users,
    setSelectedUser,
    getUsers,
    filterUser,
    filteredUser,
  } = useChatStore();

  const { onlineUser } = useAuthStore();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    filterUser(e.target.value);
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUserLoading) {
    return <SidebarSkeleton />;
  }

  return (
    <aside
      className="sidebar"
      id={`${selectedUser ? "chat-open-for-mobile" : ""}`}
    >
      <div className="sidebar-head">
        <div className="sidebar-title">messages</div>
        <div className="search-wrap">
          <svg
            width="13"
            height="13"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
          </svg>
          <input
            className="search-input"
            type="text"
            placeholder="search chats..."
            onChange={handleSearch}
            value={search}
          />
        </div>
      </div>

      <div className="contacts">
        {filteredUser.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`contact c1 ${
              selectedUser?._id === user._id ? "active-contact" : ""
            }`}
          >
            <div className="avatar av1">
              {user.profilePic ? (
                <>
                  <img src={user.profilePic} alt="dp" />
                  {onlineUser.includes(user._id) && (
                    <span className="online-dot"></span>
                  )}
                </>
              ) : (
                <>
                  <User className="size-4" />
                  {onlineUser.includes(user._id) && (
                    <span className="online-dot"></span>
                  )}
                </>
              )}
            </div>
            <div className="contact-info">
              <div className="contact-name">{user.fullName}</div>
              {onlineUser.includes(user._id) ? (
                <div className="contact-last online">Online</div>
              ) : (
                <div className="contact-last">Offline</div>
              )}
            </div>
            <div className="contact-meta">
              <span className="contact-time">9:41 am</span>
              <span className="badge"></span>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
