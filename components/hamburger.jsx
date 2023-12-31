"use client";

import Link from "next/link";
import { useState } from "react";

export const Hamburger = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative h-full">
      <button
        className=" btn btn-sm btn-ghost btn-circle"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {!open ? (
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        ) : (
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        )}
      </button>

      {open && (
        <ul
          tabIndex={0}
          className="dropdown-content absolute bg-base-300 z-[1] menu p-2 shadow  rounded-box w-52 right-0 top-14"
        >
          {links.map(({ href, label }) => (
            <li
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
