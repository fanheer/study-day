'use client';
import NavLinks from "@/app/ui/nav-link";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

export default function Layout({ children }: { children: React.ReactNode }) {
  const links = [
    {
      name: "home",
      icon: HomeIcon,
      href: "/dashboard",
    },
    {
        name: "detail",
        icon: UserGroupIcon,
        href: "/dashboard/detail",
      },
    {
      name: "source",
      icon: DocumentDuplicateIcon,
      href: "/dashboard/source",
    },
  ];
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <NavLinks links={links} />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
