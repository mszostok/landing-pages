import {motion, Variants} from "framer-motion";
import React from "react";
import tw from "twin.macro";

const cardVariants: Variants = {
	offscreen: {
		x: "-550"
	},
	onscreen: {
		x: 0,
		transition: {
			type: "spring", damping: 19
		}
	}
};

function Card({children}: CardProps) {
	return (
		<motion.div
			className="card-container"
			initial="offscreen"
			whileInView="onscreen"
			viewport={{once: true, amount: 0}}
		>
			<motion.div className="card" variants={cardVariants}>
				{children}
			</motion.div>
		</motion.div>
	);
}

const StyledDiv = tw.div`mt-24 font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;

interface CardProps {
	children: React.ReactNode;
}
interface LeftAnimationProps {
	children: React.ReactNode[];
}

function LeftAnimation({children}: LeftAnimationProps) {
	const childrenWithAnimation = children.map((child: any, i: number) => {
		return (
			<Card key={i}>
				{child}
			</Card>
		);
	});
	return (
		<StyledDiv>
			{childrenWithAnimation}
		</StyledDiv>
	)
};

export default LeftAnimation;
