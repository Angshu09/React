import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between p-6 shadow-md">
      <h1>Random Page</h1>
      <ul className="flex gap-6">
        <li>
          <NavLink
            className={(e) => {
              if (e.isActive) {
                return "underline text-blue-600";
              }
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : ""
            }
            to="/contact"
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <button onClick={() => setIsOpen(true)}>Sign In</button>
          <Modal
            header={<div className="text-xl font-bold">Sign In</div>}
            footer={
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60"
                >
                  Sign In
                </button>
              </div>
            }
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <input
              placeholder="Username"
              className="grow rounded border border-gray-600 px-2 py-1"
              type="text"
            />
            <input
              placeholder="Password"
              className="grow rounded border border-gray-600 px-2 py-1"
              type="password"
            />
          </Modal>
        </li>
      </ul>
    </header>
  );
}
