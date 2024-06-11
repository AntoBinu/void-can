import { FC, useState } from "react";

interface TextManagerProps {
  onSubmit: (text: string) => void;
}

const TextManager: FC<TextManagerProps> = ({ onSubmit }) => {
  const [text, setText] = useState<string>("");

  return (
    <div className="w-[600px] h-auto flex flex-col p-4 bg-black border-white border rounded-lg gap-y-2">
      <textarea
        className="w-full max-h-[70dvh] min-h-[50dvh] outline-none p-2
      border border-white bg-transparent rounded-md text-white"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="A long time ago..."
      ></textarea>
      <button
        className="w-full bg-white py-2 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onSubmit(text);
          setText("");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default TextManager;
