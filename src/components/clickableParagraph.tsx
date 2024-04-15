"use client";
import React, { useState } from "react";

type Props = {
  content: {
    title: string;
    content: string;
    summaryTitle: string;
    summaryContent: string;
  };
};
function ClickableParagraph(props: Props) {
  const { content } = props;

  const [showSummary, setShowSummary] = useState(false);

  const toggleShowSummary = () => {
    setShowSummary((prevValue) => !prevValue);
  };

  return (
    <div className="w-full flex flex-col space-y-2">
      <div
        className="w-full flex flex-col space-y-1 cursor-pointer"
        onClick={toggleShowSummary}
      >
        <strong>{content.title}</strong>
        <p>{content.content}</p>
      </div>
      {showSummary && (
        <p className="w-full bg-yellow-300" onClick={toggleShowSummary}>
          <strong>{content.summaryTitle}</strong> {content.summaryContent}
        </p>
      )}
    </div>
  );
}

export default ClickableParagraph;
