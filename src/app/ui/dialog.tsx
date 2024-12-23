import { RefObject, useState } from "react";
import "./dialog.scss";
import Image from "next/image";
import CloseIcon from "@/assets/images/Close.svg";
import GiftIcon from "@/assets/images/Gift.svg";
import Banner from "@/assets/images/Banner.png";
import Telegram from "@/assets/images/Telegram.svg";

export const Dialog = ({
	ref,
}: {
	ref: RefObject<HTMLDialogElement | null>;
}) => {
	const [startY, setStartY] = useState(0);
	const [currentY, setCurrentY] = useState(0);
	const closeModal = () => {
		ref.current?.classList.add("closing");
		setTimeout(() => {
			ref.current?.close();
			ref.current?.classList.remove("closing");
		}, 200);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		setStartY(e.touches[0].clientY);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		const touchY = e.touches[0].clientY;
		const deltaY = touchY - startY;
		if (deltaY > 0) {
			setCurrentY(deltaY);
		}
	};

	const handleTouchEnd = () => {
		if (currentY > 100) {
			closeModal();
		}
		setCurrentY(0);
	};
	return (
		<>
			<dialog
				ref={ref}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				style={{ transform: `translate(-50, ${currentY}px)` }}>
				<div className='header'>
					<div className='header__left'>
						<Image src={GiftIcon} width={40} height={40} alt='x'></Image>
						<h4>Redeem Code</h4>
					</div>
					<button onClick={closeModal}>
						<Image src={CloseIcon} width={10} height={10} alt='x'></Image>
					</button>
				</div>
				<div className='content'>
					<div className='banner'>
						<Image
							fill
							src={Banner}
							style={{ objectFit: "contain" }}
							alt=''></Image>
					</div>
					<div className='description'>
						<p className='subtitle'>Redeem your code</p>
						<p className='text'>
							<span>{`Codes are dropped from our `}</span>
							<Image src={Telegram} alt='telegram' />
							<a
								href='https://arfizato.tn'
								target='_blank'>{`Telegram Channel`}</a>
							<span>{`, we will post it there, so be sure to follow us to be updated!`}</span>
						</p>
					</div>
					<a href='https://arfizato.tn' target='_blank'>
						<button className='cta'>Claim Bonus</button>
					</a>
				</div>
			</dialog>
		</>
	);
};
