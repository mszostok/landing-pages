import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = tw.div`relative`;
const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap w-full ml-auto md:justify-center max-w-screen-xl mx-auto `}
`;
const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 w-full px-6 flex`}
`;
const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center  px-6 py-10 rounded-lg mt-0`}
  .imageContainer {
    ${tw`text-center rounded-full p-6 flex-shrink-0 relative text-red-500`}
    .filter-green{
        filter: invert(11%) sepia(93%) saturate(5885%) hue-rotate(262deg) brightness(104%) contrast(112%);
    }
    img {
      ${tw`w-10 h-10  text-red-500`}
    }
  }

  .textContainer {
    ${tw`ml-2 mt-0 text-center`}
  }

  .title {
    ${tw`mt-0 font-bold text-xl leading-none text-secondary-500`}
  }

  .description {
    ${tw`mt-3 text-justify text-secondary-100 text-sm leading-loose`}
  }
`;

interface CardDetails {
	imageSrc: string,
	title: string,
	description: string,
}

function FeaturesCards({cards}: { cards: CardDetails[] }) {
	return (
		<Container>
			<ThreeColumnContainer>
				{cards.map((card, i) => (<Column key={i}>
					<Card>
              <span className="imageContainer">
                <img src={card.imageSrc} alt={`card-${i}`} className="filter-green"/>
              </span>
						<span className="textContainer">
                <span className="title">{card.title}</span>
                <p className="description">
                  {card.description}
                </p>
              </span>
					</Card>
				</Column>))}
			</ThreeColumnContainer>
		</Container>
	);
};

export default FeaturesCards
