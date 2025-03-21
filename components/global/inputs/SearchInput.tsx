import { ChangeEvent, FC, JSX } from "react";
import Search from "../icons/Search";

interface IProps {
  value: string;
  onChange: (data: string | undefined) => void;
  className?: string;
  placeHolder?: string;
  error?: string;
}
const SearchInput: FC<IProps> = ({
  value,
  onChange,
  className,
}): JSX.Element => {
  return (
    <div className="flex  flex-col gap-y-1">
      <div className="relative h-8">
        <input
          name="search"
          autoComplete="off"
          autoFocus={false}
          value={value || ""}
          placeholder="Search Products..."
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value) {
              onChange(e.target.value);
            } else {
              onChange(undefined);
            }
          }}
          className={[
            "w-[300px]  !pl-8 h-8 rounded-md py-4 text-sm font-medium outline-hidden text-gray-600   px-2  border-b border-gray-200 ",
            className,
          ].join(" ")}
        />
        <Search className="absolute left-2 bottom-[8px] text-gray-400 w-5 h-5  outline-hidden" />
      </div>
    </div>
  );
};

export default SearchInput;
