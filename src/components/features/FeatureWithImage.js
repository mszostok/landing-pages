import React, {useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {SectionHeading, Subheading as SubheadingBase} from "../helpers/Headings.ts";
import CrossfadeImage from "react-crossfade-image";
import {Content2Xl} from "../helpers/Layouts";
import {useInterval} from "usehooks-ts";

const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)(props => [
	tw`md:w-7/12 mt-16 md:mt-0 z-50`,
	props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
	SectionHeading
)` font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-normal leading-relaxed text-secondary-100`;

const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block my-0 mx-auto md:mx-0`;
const CrossFadeImgWrapper = tw.div` w-[125%]
lg:-ml-24 md:-ml-12
`
function FeatureWithImage({
														subheading = "",
														heading = "",
														description = "",
														primaryButtonText = "Learn More",
														primaryButtonUrl = "",
														images = [],
														textOnLeft = false
													}) {
	const [imageIndex, setImageIndex] = useState(0);
	useInterval(() => {
		if (imageIndex === images.length - 1) {
			setImageIndex(0)
		} else {
			setImageIndex(imageIndex + 1)
		}
	}, 5000)

	const imgsList = images.map((url) => {
		return (
			<img src={url} alt={"pre-loadurl"}/>
		);
	});

	return (
		<Content2Xl>
			<div id="preload" style={{display: "none"}}>
				{imgsList}
			</div>
			<TwoColumn>
				<ImageColumn>
					<CrossFadeImgWrapper>
						<CrossfadeImage
							src={images[imageIndex]}
							duration={500}
							style={{width: "115%"}}
							timingFunction={"linear"}
						/>
					</CrossFadeImgWrapper>
				</ImageColumn>
				<TextColumn textOnLeft={textOnLeft}>
					<TextContent>
						{subheading && <Subheading>{subheading}</Subheading>}
						<Heading>{heading}</Heading>
						<Description>{description}</Description>
						{
							primaryButtonUrl && <PrimaryButton as="a" href={primaryButtonUrl}>
								{primaryButtonText}
							</PrimaryButton>
						}
					</TextContent>
				</TextColumn>
			</TwoColumn>
		</Content2Xl>
	);
};
export default FeatureWithImage
