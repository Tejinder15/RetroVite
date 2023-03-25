import { HistoryCard } from "../../components/HistoryCard";
import { Layout } from "../../components/Layout";
import { videos } from "../../list";

export function HistoryPage() {
  return (
    <Layout>
      <div className="grid grid-cols-5 items-start">
        <div className="col-span-3">
          <h2 className="font-semibold pb-2">Watch History</h2>
          {videos.map((item) => (
            <HistoryCard video={item} key={item._id} />
          ))}
        </div>
        <div className="col-span-2 p-4 sticky top-20">
          <h2>History Tape</h2>
          <div>
            <input
              type="text"
              placeholder="search watch history"
              className="border"
            />
          </div>
          <button>Clear all watch history</button>
        </div>
      </div>
    </Layout>
  );
}
