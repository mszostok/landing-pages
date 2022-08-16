import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;
const NavLinks = tw.div`inline-block`;
const NavLink = tw.a`
  text-secondary-100
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;
const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;
const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

function Navbar({
									header = "",
									documentationUrl = "",
									gitHubUrl = "",
								}) {

	const links = [
		<NavLinks key={1}>
			<NavLink href={documentationUrl}>Documentation</NavLink>
			<NavLink href={gitHubUrl}>GitHub</NavLink>
			<NavLink href="https://szostok.io/">Blog</NavLink>
		</NavLinks>
	];

	const logoLink = (
		<LogoLink href="/">
			<code>{header}</code>
		</LogoLink>
	);

	return (
		<Header className={"header-light"}>
			<DesktopNavLinks>
				{logoLink}
				{links}
			</DesktopNavLinks>
		</Header>
	);
};

export default Navbar
