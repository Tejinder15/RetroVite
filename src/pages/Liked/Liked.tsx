import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { TranslucentCard } from "../../components/TranslucentCard";
import { VideoList } from "../../components/VideoList";
import { VIDEO, videos } from "../../list";

export function Liked() {
  return (
    <Layout>
      <div className="grid grid-cols-4 items-start">
        <div className="col-span-2 sticky top-20">
          <TranslucentCard />
        </div>
        <div className="col-span-2 pt-4">
          <VideoList list={videos} />
        </div>
      </div>
    </Layout>
  );
}
