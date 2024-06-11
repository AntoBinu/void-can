import { FC, ReactNode } from "react";

interface PopupGlobalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const PopupGlobal: FC<PopupGlobalProps> = ({ show, onClose, children }) => {
  return (
    <>
      {show && (
        <button
          className={`fixed top-0 left-0 w-full h-full z-[99]`}
          onClick={onClose}
        ></button>
      )}

      {
        <div
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] ${
            show
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-90 pointer-events-none"
          }
         transition-all duration-300 ease-out `}
        >
          {children}
        </div>
      }
    </>
  );
};

export default PopupGlobal;
