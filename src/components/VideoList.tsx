import { VIDEO } from "../list";
import { SuggestedCard } from "./SuggestedCard";

export function VideoList({ list }: { list: VIDEO[] }) {
  return (
    <div className="px-4 py-2">
      {list.map((item) => (
        <SuggestedCard video={item} key={item._id} />
      ))}
    </div>
  );
}
