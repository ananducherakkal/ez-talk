"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

type Props = {
  content: {
    title: string;
    content: string;
    summaryTitle: string;
    summaryContent: string;
  };
};
function PopupParagraph(props: Props) {
  const { content } = props;

  const [showSummary, setShowSummary] = useState(false);

  const toggleShowSummary = () => {
    setShowSummary((prevValue) => !prevValue);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div
          className="w-full flex flex-col justify-start items-start text-left space-y-1 cursor-pointer"
          onClick={toggleShowSummary}
        >
          <strong>{content.title}</strong>
          <p>{content.content}</p>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[70vw] py-10 flex flex-col justify-center">
        <p className="w-full">
          <strong>{content.summaryTitle}</strong> {content.summaryContent}
        </p>
      </DialogContent>
    </Dialog>
  );
}

export default PopupParagraph;
