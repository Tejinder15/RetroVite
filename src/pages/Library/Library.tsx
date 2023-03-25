import { Layout } from "../../components/Layout";
import { LibraryCard } from "../../components/LibraryCard";

export function Library() {
  const libraryData: any = [1, 2, 3, 4];
  return (
    <Layout>
      <div className="grid grid-cols-videoContainer gap-5 py-5 lg:px-5 px-2 w-full">
        {libraryData.map((item: number, index: number) => (
          <LibraryCard key={index} />
        ))}
      </div>
    </Layout>
  );
}
