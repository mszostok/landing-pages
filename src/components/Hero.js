import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto mt-20 py-24 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left -mt-12 `;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;
const Heading = tw.h1`font-black text-secondary-900 text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-secondary-100 max-w-lg mx-auto lg:mx-0`;
const Actions = styled.div`
  ${tw`mt-16 lg:mb-0`}
  .action {
    ${tw` text-center inline-block  sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-primary-500 text-gray-100 hover:bg-primary-700`}
  }
  .secondaryAction {
    ${tw``}
  }
`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 border-primary-500 border-2 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;
const SecondaryButton = tw.button`
font-bold px-8 lg:px-10 py-3
rounded bg-primary-500 text-gray-100
 sm:ml-4 bg-brand border-primary-500 border-2 text-gray-700 hover:bg-gray-400 hover:text-gray-800

hover:bg-primary-700 hover:text-white focus:shadow-outline focus:outline-none transition duration-300`;
const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

function Hero({
								heading = "",
								description = "",
								primaryButtonText = "Get Started",
								primaryButtonUrl = "#",
								secondaryButtonText = "GitHub",
								secondaryButtonUrl = "#",
								imageSrc = null,
							}) {
	return (
		<>
			<Container>
				<TwoColumn>
					<LeftColumn>
						<Heading>{heading}</Heading>
						<Paragraph>{description}</Paragraph>
						<Actions>
							<PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
							<SecondaryButton as="a" href={secondaryButtonUrl}>{secondaryButtonText}</SecondaryButton>
						</Actions>
					</LeftColumn>
					<RightColumn>
						<IllustrationContainer>
							<img
								src={imageSrc}
								alt="Hero"
							/>
						</IllustrationContainer>
					</RightColumn>
				</TwoColumn>
			</Container>
		</>
	);
};

export default Hero
