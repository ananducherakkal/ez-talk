import ClickableParagraph from "@/components/clickableParagraph";
import contentList from "@/data/content.json";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col space-y-4 p-6">
      {contentList.map((content) => (
        <ClickableParagraph content={content} key={content.id} />
      ))}
    </main>
  );
}
