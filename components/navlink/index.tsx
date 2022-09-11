import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type NavType = FC<{
  children: React.ReactNode;
  href: string;
  activeStyle?: any;
  className?: any;
}>;

// this component active just used for tailwind css

const NavLink: NavType = ({ children, href, activeStyle, className }) => {
  const router = useRouter();

  activeStyle = activeStyle ? activeStyle : "underline";
  const styles = className ? activeStyle + " " + className : activeStyle;
  
  const active = router.pathname === href ? true : false;
  return (
    <Link href={href}>
      <a className={active ? styles : className}>{children}</a>
    </Link>
  );
};

export default NavLink;
