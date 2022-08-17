import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase} from "./helpers/Layouts"
import LinkedinIcon from "../images/linkedin-icon.svg";
import TwitterIcon from "../images/twitter-icon.svg";
import GitHubLineIcon from "../images/github-icon.svg";
import { Icon } from "./helpers/Icon";

const Container = tw(ContainerBase)`bg-brand text-secondary-900 -mx-2 -mb-2`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const Row = tw.div`flex items-center justify-center flex-col px-2`
const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-secondary-500 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-secondary-900`

function MiniCenteredFooter() {
	return (
		<Container>
			<Content>
				<Row>
					<SocialLinksContainer>
						<SocialLink href="https://linkedin.com/in/mszostok">
							<Icon src={LinkedinIcon} alt={"linkedin"}/>
						</SocialLink>
						<SocialLink href="https://twitter.com/m_szostok">
							<Icon src={TwitterIcon} alt={"twitter"}/>
						</SocialLink>
						<SocialLink href="https://github.com/mszostok">
							<Icon src={GitHubLineIcon} alt={"github"}/>
						</SocialLink>
					</SocialLinksContainer>
					<CopyrightText>
						&copy; Copyright 2022 Mateusz Szostok (mateusz@szostok.io)
					</CopyrightText>
				</Row>
			</Content>
		</Container>
	);
};

export default MiniCenteredFooter
