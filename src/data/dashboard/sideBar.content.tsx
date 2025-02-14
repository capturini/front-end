import { link } from "fs";
import {
  ChartColumnBig,
  LayoutDashboard,
  FolderOpenDot,
  SlidersHorizontal,
  CalendarFold,
} from "lucide-react";

export const SidebarMainLinks = [
  {
    title: "dashboard",
    href: "/",
    icon: <LayoutDashboard />,
  },
  {
    title: "Statistiques",
    href: "/statistics",
    icon: <ChartColumnBig />,
  },
];

export const SidebarSecondaryLinks = [
  {
    title: "Settings",
    href: "/settings",
    icon: <SlidersHorizontal />,
  },
];
