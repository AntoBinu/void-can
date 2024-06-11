import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  SPACE_CONTENTS,
  selectSpaceAddManager,
  setAddManager,
  setContents,
} from "../space/spaceSlice";
import PopupGlobal from "../popup/PopupGlobal";
import TextManager from "./types/TextManager";

const AddManager: FC = () => {
  const addManagerState = useAppSelector(selectSpaceAddManager);
  const dispatch = useAppDispatch();

  const generateRandomId = () => {
    let randomId = "";

    for (let i = 0; i < 8; i++) {
      randomId += Math.floor(Math.random() * 10);
    }

    return randomId;
  };

  const onSubmit = (
    type: SPACE_CONTENTS,
    content: { url?: string; file?: File; text?: string }
  ) => {
    dispatch(
      setContents({
        id: generateRandomId(),
        contentType: type,
        content,
      })
    );
    onClose()
  };

  const onClose = () => {
    dispatch(
      setAddManager({
        show: false,
      })
    );
  };

  return (
    <>
      <PopupGlobal
        show={
          addManagerState.type == SPACE_CONTENTS.TEXT && addManagerState.show
        }
        onClose={onClose}
      >
        <TextManager
          onSubmit={(text) => onSubmit(SPACE_CONTENTS.TEXT, { text })}
        />
      </PopupGlobal>
    </>
  );
};

export default AddManager;
