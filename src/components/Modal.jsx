import React from "react";

function Modal({ show, onClose, onConfirm }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-[629.33px] h-[354px] rounded-[16.05px] shadow-lg space-y-6 flex flex-col text-center items-center justify-center">
        <img
          src="./images/alert.svg"
          alt="delete"
          className="w-[50px] h-[50px] object-contain cursor-pointer"
        />

        <h2 className="text-[24px] font-Satoshi-Bold">ARE YOU SURE?</h2>
        <p className="font-Satoshi-Bold text-[19px]">
          You will not be able to undo this action if you proceed!
        </p>

        <div className="flex gap-[25px]">
          <button
            className="border-[2.41px] border-primary font-Satoshi-Bold text-[19px] w-[118px] flex justify-center items-center text-black py-2 px-4 rounded-[4px] mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-primary font-Satoshi-Bold text-[19px] text-white w-[118px] flex justify-center items-center rounded-[4px]"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
