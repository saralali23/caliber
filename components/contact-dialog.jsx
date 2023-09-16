"use client";

import { Mail, Phone } from "lucide-react";

export const ContactDialog = () => {
  return (
    <dialog id="my_modal_1" className="modal ">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello 👋</h3>
        <p className="mt-3">Get in touch with us for all your fitness needs!</p>
        <div className="flex justify-between mt-3">
          <div
            className="flex gap-2 items-center tooltip"
            data-tip="Click to call us"
          >
            <Phone />
            <a href="tel:+917550151561">+91 7550151561</a>
          </div>
          <div
            className="flex gap-2 items-center tooltip"
            data-tip="Click to mail us"
          >
            <Mail />
            <a href="mailto:caliberfitcenter@gmail.com">
              caliberfitcenter@gmail.com
            </a>
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export const ContactDialogButton = () => (
  <button
    className="btn btn-primary ring-0 focus-visible:ring-0"
    onClick={() => document.getElementById("my_modal_1").showModal()}
  >
    Contact us
  </button>
);
