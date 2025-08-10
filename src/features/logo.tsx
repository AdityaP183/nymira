import * as React from "react";

import { cn } from "@/lib/utils";
import { Disc3 } from "lucide-react";

function Logo({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div className="bg-primary/20 mb-3 hover:bg-primary/20 px-3 py-1.5 rounded-md">
			<div
				className={cn("flex items-center space-x-1.5", className)}
				{...props}
			>
				<div className="animate-vinyl-spin duration-500 ease-in-out">
                    <Disc3 size={32} />
				</div>
				<h4 className="font-bold text-2xl font-serif">Nymira</h4>
			</div>
		</div>
	);
}

export { Logo };

