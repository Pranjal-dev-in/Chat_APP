import React, { useEffect, useState } from "react";
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
      id={`${selectedUser ? "chat-open-for-mobile" : ""}`}
      className={`bg-[#09000e] border-r border-[rgba(255,255,255,0.06)] flex flex-col overflow-hidden max-md:h-[calc(100vh-54px)] ${
        selectedUser ? "max-md:hidden" : ""
      }`}
    >
      <div className="py-[0.9rem] px-4 border-b border-[rgba(255,255,255,0.06)] shrink-0">
        <div className="font-['Comfortaa',cursive] font-bold text-base text-[#cdb8dd] mb-[0.7rem]">
          messages
        </div>
        <div className="relative">
          <svg
            width="13"
            height="13"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#7a5c88] pointer-events-none"
          >
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
          </svg>
          <input
            className="w-full pt-2 pr-3 pb-2 pl-8 border border-[rgba(255,255,255,0.09)] rounded-lg bg-[rgba(255,255,255,0.03)] font-['Outfit',sans-serif] text-[0.8rem] text-[#cdb8dd] outline-none transition-colors duration-200 placeholder:text-[#3e2449] focus:border-[#7a52aa]"
            type="text"
            placeholder="search chats..."
            onChange={handleSearch}
            value={search}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-[0.4rem] [&::-webkit-scrollbar]:w-0.75 [&::-webkit-scrollbar-thumb]:bg-[#3e2449] [&::-webkit-scrollbar-thumb]:rounded-[3px]">
        {filteredUser.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`flex items-center gap-3 w-full py-[0.65rem] px-4 cursor-pointer transition-colors duration-150 animate-slide-in [animation-delay:0.05s] hover:bg-[rgba(155,111,212,0.1)] ${
              selectedUser?._id === user._id
                ? "bg-[rgba(155,111,212,0.1)] border-l-2 border-[#9b6fd4]"
                : ""
            }`}
          >
            <div className="w-9.5 h-9.5 rounded-full shrink-0 flex items-center justify-center text-[0.75rem] font-semibold tracking-[0.03em] relative bg-[#3d1560]">
              {user.profilePic ? (
                <>
                  <img
                    src={user.profilePic}
                    alt="dp"
                    className="h-full rounded-full"
                  />
                  {onlineUser.includes(user._id) && (
                    <span className="absolute bottom-px right-px w-2.25 h-2.25 rounded-full bg-[#5cb85c] border-2 border-[#09000e]"></span>
                  )}
                </>
              ) : (
                <>
                  <User className="size-4" />
                  {onlineUser.includes(user._id) && (
                    <span className="absolute bottom-px right-px w-2.25 h-2.25 rounded-full bg-[#5cb85c] border-2 border-[#09000e]"></span>
                  )}
                </>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[0.82rem] font-semibold text-[#cdb8dd] whitespace-nowrap overflow-hidden text-ellipsis text-left">
                {user.fullName}
              </div>
              {onlineUser.includes(user._id) ? (
                <div className="text-[0.72rem] whitespace-nowrap overflow-hidden text-ellipsis mt-0.5 text-left text-[#5cb85c]">
                  Online
                </div>
              ) : (
                <div className="text-[0.72rem] text-[#7a5c88] whitespace-nowrap overflow-hidden text-ellipsis mt-0.5 text-left">
                  Offline
                </div>
              )}
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="text-[0.65rem] text-[#3e2449]">9:41 am</span>
              <span className="bg-[#7a52aa] text-white text-[0.6rem] font-bold rounded-[10px] py-px px-1.5 min-w-4.5 text-center"></span>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
