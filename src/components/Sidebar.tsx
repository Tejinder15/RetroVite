import { Link } from "react-router-dom";
import { HistoryIcon } from "../assets/Icons/HistoryIcon";
import { HomeIcon } from "../assets/Icons/HomeIcon";
import { LibraryIcon } from "../assets/Icons/LibraryIcon";
import { LikedIcon } from "../assets/Icons/LikedIcon";
import { WatchLaterIcon } from "../assets/Icons/WatchLaterIcon";

const navLinks = [
  {
    icon: <HomeIcon />,
    label: "Home",
    link: "/",
  },
  {
    icon: <LikedIcon />,
    label: "Liked",
    link: "/liked",
  },
  {
    icon: <HistoryIcon />,
    label: "History",
    link: "/history",
  },
  {
    icon: <LibraryIcon />,
    label: "Library",
    link: "/library",
  },
  {
    icon: <WatchLaterIcon />,
    label: "Watch Later",
    link: "/watchlater",
  },
];

export function Sidebar() {
  return (
    <aside className="sticky top-0 left-0 md:flex hidden shadow-md col-span-2 min-h-screen items-center justify-center">
      <ul>
        {navLinks.map((item, idx) => (
          <li key={idx} className="my-5">
            <Link to={item.link} className="flex items-center gap-x-6 py-1">
              <span>{item.icon}</span>
              <span className="lg:block hidden">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
