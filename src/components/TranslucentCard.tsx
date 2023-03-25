import { Link } from "react-router-dom";
import { videos } from "../list";

export function TranslucentCard() {
  return (
    <div className="p-5 border border-black rounded-xl">
      <img
        src={videos[0].thumbnail}
        alt={videos[0].title}
        className="rounded-xl"
      />
      <h2 className="text-2xl font-bold pt-2.5">Liked videos</h2>
      <h4 className="text-lg font-semibold pt-1">username</h4>
      <p className="text-sm">playlist length</p>
      <Link
        to="/"
        className="inline-block rounded-3xl py-2 px-6 bg-green-400 mt-4"
      >
        Play all
      </Link>
    </div>
  );
}
