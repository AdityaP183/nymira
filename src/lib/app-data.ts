import { Home, ListMusic, Search } from "lucide-react";

export const sidebarData = {
	navMain: [
        {
            title: "Home",
            url: "/audiobook",
            icon: Home,
        },
		{
			title: "Search",
			url: "/audiobook/search",
			icon: Search,
		},
		{
			title: "Playlists",
			url: "/audiobook/playlists",
			icon: ListMusic,
		},
	],
};
