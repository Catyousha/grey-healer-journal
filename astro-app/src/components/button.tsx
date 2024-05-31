import type { ButtonType } from "../types/common/button";
import { cn } from "../utils/cn";

interface ButtonPropsType {
  params: ButtonType | undefined;
  className?: string;
}

export function Button(props: ButtonPropsType) {
  const { params, className } = props;
  return (
    <button
      className={cn(
        "p-3 bg-black text-white rounded-lg shadow-sm hover:bg-gray-800",
        className,
        params?.classList ?? ""
      )}
    >
      <a href={params?.href ?? '/'}>{params?.label}</a>
    </button>
  );
}
