"use client";

import { useRef } from "react";
import { Dialog } from "@/app/ui/dialog";

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
			<a
				className='git'
				target='_blank'
				href='https://github.com/arfizato/dialog-poc'>
				GitHub Repo
			</a>
		</>
	);
}
