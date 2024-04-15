import PopupParagraph from "@/components/paragraph/popupParagraph";
import contentList from "@/data/content.json";

export default function PopupPage() {
  return (
    <main className="w-full h-screen flex flex-col space-y-4 p-6">
      {contentList.map((content) => (
        <PopupParagraph content={content} key={content.id} />
      ))}
    </main>
  );
}
