import { notFound } from "next/navigation";
import { QUESTIONS_DB } from "@/data";
import TopicsList from "@/components/blocks/TopicsList";
import BackButton from "@/components/common/BackButton";

interface BlockPageProps {
  params: Promise<{ block: string }>;
}

export default async function BlockPage({ params }: BlockPageProps) {
  const { block } = await params;
  const blockData = QUESTIONS_DB[block];

  if (!blockData) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <BackButton />
      <div className="flex items-center gap-4 mb-10">
        <span className="text-5xl">{blockData.meta.icon}</span>
        <div>
          <h1 className="text-3xl font-bold">{blockData.meta.en.title}</h1>
          <p className="text-zinc-500 mt-1">{blockData.meta.en.desc}</p>
        </div>
      </div>

      <TopicsList blockId={block} topics={blockData.topics} />
    </main>
  );
}
