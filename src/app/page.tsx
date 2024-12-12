"use client";

import { useRef } from "react";
import { Dialog } from "./ui/Dialog";

export default function Home() {
	const dialog = useRef<HTMLDialogElement>(null);
	return (
		<>
			<Dialog ref={dialog}></Dialog>
			<div className='popupTrigger__wrapper'>
				<button
					onClick={() => {
						dialog.current?.showModal();
					}}>
					Do not click me!
				</button>
			</div>
		</>
	);
}
