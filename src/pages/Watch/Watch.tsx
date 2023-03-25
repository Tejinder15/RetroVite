import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { VideoList } from "../../components/VideoList";
import { videos } from "../../list";

export function Watch() {
  const { id } = useParams();
  return (
    <Layout>
      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <div>
            <div
              className="relative w-full overflow-hidden"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
                className="absolute inset-0 w-full h-full border-none"
              ></iframe>
            </div>
            {/* //TODO: Video Footer */}
            <div>
              <span>video Title</span>
              <span>Video Views</span>
            </div>
            <div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
          {/* //TODO: COMMENT SECTION TO BE Added */}
        </div>
        <div className="col-span-2 ">
          <VideoList list={videos} />
        </div>
      </div>
    </Layout>
  );
}
