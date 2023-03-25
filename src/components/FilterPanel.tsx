const filterOptions = ["All", "Comedy", "Gaming", "Podcast", "Sports"];

export const FilterPanel: React.FC = () => {
  return (
    <ul className="h-14 bg-white flex items-center gap-x-2 px-3 m-0 overflow-x-auto sticky top-[61.5px]">
      {filterOptions.map((option, idx) => (
        <li
          className="px-3 py-1 inline-flex items-center justify-center rounded-lg m-0 bg-gray-200"
          key={idx}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};
