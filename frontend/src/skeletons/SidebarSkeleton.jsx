import React from "react";
import "./SidebarSkeleton.css";

function SidebarSkeleton() {
  return (
    <aside className="sidebar">
      <div className="sidebar-head">
        <div className="sk sk-title"></div>
        <div className="sk sk-search"></div>
      </div>
      <div className="sk-contacts">
        <div className="sk-contact sk-c1">
          <div className="sk sk-avatar"></div>
          <div className="sk-contact-body">
            <div className="sk sk-name" style={{ width: "90px" }}></div>
            <div className="sk sk-last"></div>
          </div>
          <div className="sk-contact-meta">
            <div className="sk sk-time"></div>
          </div>
        </div>
        <div className="sk-contact sk-c2">
          <div className="sk sk-avatar"></div>
          <div className="sk-contact-body">
            <div className="sk sk-name" style={{ width: "110px" }}></div>
            <div className="sk sk-last" style={{ width: "60%" }}></div>
          </div>
          <div className="sk-contact-meta">
            <div className="sk sk-time"></div>
          </div>
        </div>
        <div className="sk-contact sk-c3">
          <div className="sk sk-avatar"></div>
          <div className="sk-contact-body">
            <div className="sk sk-name" style={{ width: "80px" }}></div>
            <div className="sk sk-last" style={{ width: "75%" }}></div>
          </div>
          <div className="sk-contact-meta">
            <div className="sk sk-time"></div>
          </div>
        </div>
        <div className="sk-contact sk-c4">
          <div className="sk sk-avatar"></div>
          <div className="sk-contact-body">
            <div className="sk sk-name" style={{ width: "100px" }}></div>
            <div className="sk sk-last" style={{ width: "55%" }}></div>
          </div>
          <div className="sk-contact-meta">
            <div className="sk sk-time"></div>
          </div>
        </div>
        <div className="sk-contact sk-c5">
          <div className="sk sk-avatar"></div>
          <div className="sk-contact-body">
            <div className="sk sk-name" style={{ width: "95px" }}></div>
            <div className="sk sk-last" style={{ width: "65%" }}></div>
          </div>
          <div className="sk-contact-meta">
            <div className="sk sk-time"></div>
          </div>
        </div>
        <div className="sk-contact sk-c6">
          <div className="sk sk-avatar"></div>
          <div className="sk-contact-body">
            <div className="sk sk-name" style={{ width: "85px" }}></div>
            <div className="sk sk-last" style={{ width: "80%" }}></div>
          </div>
          <div className="sk-contact-meta">
            <div className="sk sk-time"></div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SidebarSkeleton;
