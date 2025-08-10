"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { audiobookData } from "@/lib/temp-data";
import Image from "next/image";
import { useState } from "react";

export default function AudiobookHomePage() {
	const [audiobook, setAudiobook] = useState(audiobookData);
	return (
		<div>
			<Card className="w-fit p-2">
				<CardContent className="p-0">
					<Image
						src={audiobook.coverImage}
						width={250}
						height={250}
						alt={audiobook.title}
						className="rounded-xl"
					/>
				</CardContent>
				<CardFooter>
					<h3>{audiobook.title}</h3>
				</CardFooter>
			</Card>
		</div>
	);
}
