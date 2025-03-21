import stringOperations from "@/utils/stringOperations";
import { ChangeEvent, FC, JSX, useEffect, useState } from "react";
interface IProps {
  placeholder?: string;
  onChange: (data: string | undefined) => void;
  disabled?: boolean;
  inputValue: string | undefined | null | "" | number;
  name: string;
  inputType?: string;
  label?: string;
  validType?: "number";
}
const CustomInput: FC<IProps> = ({
  placeholder = "placeholder",
  onChange,
  disabled,
  inputValue,
  inputType = "text",
  validType,
  name,
  label,
}): JSX.Element => {
  const [value, setValue] = useState<string>("");

  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (typeof inputValue == "number" && inputValue === 0) {
      setValue("");
    }
  }, [inputValue]);

  useEffect(() => {
    if (inputValue === "") {
      setValue("");
    }
  }, [inputValue]);

  const errors = {
    number: "please you entry to number",
  };

  return (
    <div className="flex flex-col gap-y-1 relative">
      <input
        id={label}
        type={inputType}
        name={name}
        value={inputValue || value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const inputValue: string = e.target.value;
          setValue(inputValue);
          if (validType) {
            const result: boolean = stringOperations.validateInput(
              inputValue,
              validType
            );
            if (!result) {
              onChange(undefined);
              setIsValid(false);
            } else {
              onChange(inputValue);
              setIsValid(true);
            }
          } else {
            onChange(inputValue);
            setIsValid(true);
          }
        }}
        className="w-full bg-transparent px-2 h-10  rounded-lg placeholder:text-sm text-sm placeholder:text-gray-600 text-gray-900 border border-gray-400"
      />
      {validType && value && !isValid && (
        <p className="text-xs text-red-500">{errors[validType]}</p>
      )}
    </div>
  );
};

export default CustomInput;
