import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header_outer">
        <div className="container">
          <div className="header_content">
            <div className="logo">fashion</div>
            <nav className="navbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/About">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Blogs">Blogs</Link>
                </li>
                <li className="nav-item">
                  <Link to="Contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="header_icon">
              <svg
                width="25"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fff"
                  d="M9.993 10.573a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M10 0a6 6 0 0 1 3.04 11.174c3.688 1.11 6.458 4.218 6.955 8.078.047.367-.226.7-.61.745-.383.045-.733-.215-.78-.582-.54-4.19-4.169-7.345-8.57-7.345-4.425 0-8.101 3.161-8.64 7.345-.047.367-.397.627-.78.582-.384-.045-.657-.378-.61-.745.496-3.844 3.281-6.948 6.975-8.068A6 6 0 0 1 10 0"
                ></path>
              </svg>
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.832 4.387h.511c.86 0 1.618.56 1.87 1.381l3.065 9.958a1.96 1.96 0 0 0 1.87 1.381h6.963c.826 0 1.563-.518 1.842-1.295l2.04-5.68c.686-1.913-.731-3.928-2.763-3.928h-7.57"></path>
                <circle cx="10.171" cy="20.532" r="1.468" fill="#fff"></circle>
                <circle cx="17.02" cy="20.532" r="1.468" fill="#fff"></circle>
              </svg>
            </div>
            {/* <div className="mobile_nav">
            <div className="toggle_icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className="navbar-nav">
              <div className="logo">fashion</div>
              <li className="nav-item">Home</li>
              <li className="nav-item">About Us</li>
              <li className="nav-item">Services</li>
              <li className="nav-item">Blogs</li>
              <li className="nav-item">Contact Us </li>
            </ul>
          </div> */}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
