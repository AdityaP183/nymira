"use client";

import { type LucideIcon } from "lucide-react";

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import { Logo } from "@/features/logo";

export function NavMain({
	items,
	path,
}: {
	items: {
		title: string;
		url: string;
		icon: LucideIcon;
	}[];
	path: string;
}) {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<Logo />
			</SidebarMenuItem>
			{items.map((item) => (
				<SidebarMenuItem key={item.title}>
					<SidebarMenuButton asChild isActive={item.url === path}>
						<a href={item.url}>
							<item.icon />
							<span>{item.title}</span>
						</a>
					</SidebarMenuButton>
				</SidebarMenuItem>
			))}
		</SidebarMenu>
	);
}
