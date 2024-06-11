import { FC } from "react";
import { useAppSelector } from "../../hooks";
import { selectSpaceContents } from "../space/spaceSlice";

const ContentManager: FC = () => {
  const contents = useAppSelector(selectSpaceContents);

  return (
    <>
      {contents.map((content, index) => {
        return (
          <div
            key={index}
            className="max-w-[500px] w-fit h-fit flex p-2 text-white border border-white rounded-md"
          >
            {content.content.text}
          </div>
        );
      })}
    </>
  );
};

export default ContentManager;
