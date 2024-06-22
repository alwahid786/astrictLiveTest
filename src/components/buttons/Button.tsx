import Link from "next/link";
import { MouseEventHandler } from "react";

interface ButtonProps {
  label: string;
  href?: string;
  onClickHandler?: MouseEventHandler;
  theme?: "outline";
  className?: string;
}

export default function Button({
  label,
  href,
  onClickHandler,
  className,
}: ButtonProps) {
  let _className = "bg-orange px-6 py-2 hover:opacity-80 w-fit";
  //  border border-solid
  // switch (theme) {
  //     case 'outline':
  // 
  if (href)
    return (
      <Link className={` ${_className} ${className}`} href={href}>
        {label}
      </Link>
    );
  else
    return (
      <button className={`${_className} ${className}`} onClick={onClickHandler}>
        {label}
      </button>
    );
}
