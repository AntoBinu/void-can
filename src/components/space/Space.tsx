import { FC } from "react";
import Listener from "../listeners/Listener";
import AddManager from "../addManager/AddManager";
import ContentManager from "../ContentManager/ContentManager";

const Space: FC = () => {
  return (
    <div className="w-full min-h-[100dvh] h-auto flex bg-black relative">
      <ContentManager/>
      <Listener />
      <AddManager />
    </div>
  );
};

export default Space;
