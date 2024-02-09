'use client';
import Element from "@/app/ui/navbar/element";

interface Props {
	className?: string;
}

export default function Navbar({ className }: Props) {
	return (
		<div className={className}>
			<div className="h-20 bg-blue-900/20 flex justify-around align-middle">
				<Element
					type="home"
				/>
				<Element
					type="liked"
				/>
				<Element
					type="add"
				/>
				<Element
					type="find"
				/>
				<Element
					type="user"
				/>
			</div>
		</div>
	)
}