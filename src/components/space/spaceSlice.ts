import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export enum SPACE_CONTENTS {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  LINK = "LINK",
  TEXT = "TEXT",
}

export enum APP_MODE {
  FOUCS = "FOCUS",
  LISTEN = "LISTEN",
}

export interface SpaceContents {
  id: string;
  contentType: SPACE_CONTENTS;
  content: {
    url?: string;
    file?: File;
    text?: string;
  };
}

export interface SpaceState {
  appMode: APP_MODE;
  contents: SpaceContents[];
  addManager: {
    show: boolean;
    type?: SPACE_CONTENTS;
  };
}

const initialContentState: SpaceState = {
  appMode: APP_MODE.LISTEN,
  contents: [],
  addManager: {
    show: false,
  },
};

const spaceSlice = createSlice({
  name: "space",
  initialState: initialContentState,
  reducers: {
    setContents: (state, actions) => {
      state.contents = [...state.contents, actions.payload];
    },
    setAppMode: (state, actions) => {
      state.appMode = actions.payload;
    },
    setAddManager: (state, actions) => {
      state.addManager = actions.payload;
    },
  },
});

export const { setContents, setAppMode, setAddManager } = spaceSlice.actions;

export const selectSpaceContents = (state: RootState) => state.space.contents;
export const selectSpaceAddManager = (state: RootState) =>
  state.space.addManager;

export default spaceSlice.reducer;
