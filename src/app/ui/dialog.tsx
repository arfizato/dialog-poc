import { RefObject } from "react";
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
	return (
		<>
			<dialog ref={ref}>
				<div className='header'>
					<div className='header__left'>
						<Image src={GiftIcon} width={40} height={40} alt='x'></Image>
						<h4>Redeem Code</h4>
					</div>
					<button onClick={() => ref.current?.close()}>
						<Image src={CloseIcon} width={10} height={10} alt='x'></Image>
					</button>
				</div>
				<div className='content'>
					<div className='banner'>
						<Image
							fill
							src={Banner}
							style={{ objectFit: "contain" }}
							alt='x'></Image>
					</div>
					<div className='description'>
						<p className='subtitle'>Redeem your code</p>
						<p className='text'>
							<span>{`Codes are dropped from our `}</span>
							<Image src={Telegram} alt='telegram' />
							<a href='#' target='_blank'>{`Telegram Channel`}</a>
							<span>{`, we will post it there, so be sure to follow us to be updated!`}</span>
						</p>
					</div>
					<button className='cta'>Claim Bonus</button>
				</div>
			</dialog>
		</>
	);
};
