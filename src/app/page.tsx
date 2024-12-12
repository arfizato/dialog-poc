"use client";

import { useRef } from "react";
import { Dialog } from "./ui/Dialog";

export default function Home() {
	const dialog = useRef<HTMLDialogElement>(null);
	return (
		<div className='popupTrigger__wrapper'>
			<button
				onClick={() => {
					dialog.current?.show();
				}}>
				Do not click me!
			</button>
			<Dialog ref={dialog}></Dialog>
		</div>
	);
}
