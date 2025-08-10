"use client";

import * as React from "react";

import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
    SidebarSeparator,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { sidebarData } from "@/lib/app-data";
import { usePathname } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const pathname = usePathname();

	return (
		<Sidebar className="border-r-0 overflow-hidden" {...props}>
			<SidebarHeader>
				<NavMain items={sidebarData.navMain} path={pathname} />
			</SidebarHeader>
            <SidebarSeparator className="mx-0"/>
			<SidebarContent></SidebarContent>
		</Sidebar>
	);
}
