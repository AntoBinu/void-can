import { FC, useEffect, useState } from "react";
import { IoText } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  APP_MODE,
  SPACE_CONTENTS,
  setAppMode,
  setAddManager,
  selectSpaceAddManager,
} from "../space/spaceSlice";

const Listener: FC = () => {
  const [showPopUp, setShowPopup] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );

  const appMode = useAppSelector((state) => state.space.appMode);
  const appManager = useAppSelector(selectSpaceAddManager)
  const dispatch = useAppDispatch();

  const triggerAddManager = (type: SPACE_CONTENTS) => {
    dispatch(setAddManager({ show: true, type }));
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!showPopUp && appMode == APP_MODE.LISTEN && !appManager.show) {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
        setShowPopup(true);

        dispatch(setAppMode(APP_MODE.FOUCS));
      } else {
        setShowPopup(false);
        setPosition(null);
        dispatch(setAppMode(APP_MODE.LISTEN));
      }
    };

    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [showPopUp, appMode , appManager]);

  return (
    <>
      {showPopUp && position != null && (
        <div
          className="fixed -translate-y-[100%]"
          style={{
            top: position.y,
            left: position.x,
          }}
        >
          <div className="w-[200px] h-auto flex bg-white rounded-md p-1">
            <button
              className="w-[24px] h-[24px] flex p-0.5"
              onClick={() => triggerAddManager(SPACE_CONTENTS.TEXT)}
            >
              <IoText className="h-full w-full" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Listener;
