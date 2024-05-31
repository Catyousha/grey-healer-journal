import { useState } from "react";
import type { HeaderType, NavItemType } from "../../types/header";
import { cn } from "../../utils/cn";

export default function Header(props: { header: HeaderType, baseUrl: string }) {
  const res = props.header;

  return (
    // <header className="z-[100] top-0 sticky w-full">
    <header className="">
      <nav className="flex items-center justify-between bg-slate-100 shadow p-4">
        <a href="/">
          <img
            src={props.baseUrl + res.data.attributes.logo.data.attributes.url}
            width={36}
            height={36}
            className="rounded-full"
          />
        </a>
        <ul className="flex gap-8 ">
          {res?.data.attributes.navItems.map((e) => {
            return <_NavItem item={e} key={"nav-parent-" + e.id} />;
          })}
        </ul>
      </nav>
    </header>
  );
}

function _NavItem(props: { item: NavItemType }) {
  const item = props.item;
  const [isShow, setIsShow] = useState(false);

  return (
    <li
      className={cn("relative font-semibold", item.classList ?? "")}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <a href={item.href ?? '/'} className="cursor-pointer hover:text-red-500">
        {item.label}
      </a>
      {item.children?.length !== 0 && isShow && (
        <ul className="flex flex-col gap-1 absolute z-[999] top-6 w-36 bg-slate-300">
          {item.children?.map((e) => (
            <_NavItem item={e} key={'nav-child-'+e.id} />
          ))}
        </ul>
      )}
    </li>
  );
}
