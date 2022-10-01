import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import BoxesIcon from "../images/boxes-line.svg";
import GitHubIcon from "../images/github-icon.svg";
import DNAIcon from "../images/bubble-aka-dna-line.svg";
import SeeIcon from "../images/search-line.svg";
import ValidateIcon from "../images/shield-check-line.svg";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;
const NavLinks = tw.div`inline-block`;
const ProjectGroupHeader = tw.div`ml-5 mt-5 text-secondary-100  text-base font-semibold`;
const NavLink = tw.a`
  text-secondary-100
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

const LogoButton = tw.button`

font-bold lg:pl-6 lg:pr-3 px-3 py-1 rounded-lg bg-primary-500 border-primary-500 border-2 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300
`;

const Icon = styled.img`
filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(286deg) brightness(103%) contrast(103%);
`
const IconSecondary = styled.img`
filter: invert(29%) sepia(0%) saturate(21%) hue-rotate(254deg) brightness(91%) contrast(99%);
`

const ActiveButton = tw.button`
font-light px-3 py-2 rounded-md bg-primary-500 border-primary-500 border-0 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300
`;

const SecondaryButton = tw.button`
font-light px-3 py-2
rounded-md bg-gray-200 text-gray-100
bg-gray-200 border-white  border-0 text-secondary-100 hover:bg-gray-400 hover:text-gray-800
hover:bg-primary-700 hover:text-white focus:shadow-outline focus:outline-none transition duration-300`;

function Navbar({
									header = "",
									documentationUrl = "",
									gitHubUrl = "",
								}) {

	const links = [
		<NavLinks key={1}>
			<NavLink href={documentationUrl}>Documentation</NavLink>
			<NavLink className="cursor-pointer" onClick={() => setShowModal(true)} >Projects</NavLink>
			<NavLink href="https://szostok.io/">Blog</NavLink>
		</NavLinks>
	];

	const [showModal, setShowModal] = React.useState(false);

	return (
		<Header className={"header-light"}>
			<DesktopNavLinks>
				<LogoButton onClick={() => setShowModal(true)}>
					<div className="grid grid-rows-1  grid-flow-col gap-4">
						<div className="row-span-1">
							<code>{header}</code>
						</div>
						<div style={{borderLeft: "1px solid white", height: "100%"}}/>
						<div className="col-span-2">
							<Icon style={{width: "90%", marginLeft: "-4px", paddingTop: "4px"}} src={BoxesIcon} alt={"github"}/>
						</div>
					</div>
				</LogoButton>
				{links}
				{showModal ? (
					<>
						<div
							className=" justify-center mt-12 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] outline-none focus:outline-none">
							<div className=" relative w-full mx-auto max-w-[450px]">
								<div className="bg-white border-white border-2 rounded-lg w-full outline-none focus:outline-none">
									{/*header*/}
									<div className="flex items-start justify-between pt-2 pr-2  border-slate-200 rounded-t">
										<button
											className="px-2 ml-auto bg-transparent border-0 text-black opacity-55 float-right  leading-none outline-none focus:outline-none"
											onClick={() => setShowModal(false)}
										>
                    <span
											className="bg-transparent text-black opacity-70 h-6 w-6 text-3xl block outline-none font-extralight focus:outline-none">
                      ×
                    </span>
										</button>
									</div>

									{/*body*/}
									<div className="ml-5 -mt-2 text-base text-secondary-100 font-semibold">Terminal tools</div>
									<div className="ml-5 mt-3">
										<ActiveButton>
											<div className="grid grid-rows-1 grid-flow-col gap-1">
												<Icon style={{width: "80%", paddingTop: "3px"}} src={DNAIcon} alt={"github"}/>
												<code>version</code>
											</div>
										</ActiveButton>

										{/*<a href="https://github.com/mszostok/see">*/}
										{/*	<SecondaryButton className="ml-4">*/}
										{/*		<div className="grid grid-rows-1 grid-flow-col gap-1">*/}
										{/*			<IconSecondary style={{width: "80%", paddingTop: "3px"}} src={SeeIcon} alt={"github"}/>*/}
										{/*			<code>see</code>*/}
										{/*		</div>*/}
										{/*	</SecondaryButton>*/}
										{/*</a>*/}
									</div>
									<ProjectGroupHeader>GitHub tools</ProjectGroupHeader>
									<div className="ml-5 m-3 w-full">
										<a href="https://github.com/mszostok/codeowners-validator">
											<SecondaryButton>
												<div className="grid grid-rows-1 grid-flow-col gap-1">
													<IconSecondary style={{width: "80%", marginTop: "3px"}} src={ValidateIcon} alt={"github"}/>
													<code>codeowners-validator</code>
												</div>
											</SecondaryButton>
										</a>

										{/*<a href="https://github.com/mszostok/gimme">*/}
										{/*	<SecondaryButton className="ml-4">*/}
										{/*		<div className="grid grid-rows-1 grid-flow-col gap-1">*/}
										{/*			<IconSecondary style={{width: "80%", marginTop: "3px", transform: "rotate(180deg)"}}*/}
										{/*										 src={GitHubIcon} alt={"github"}/>*/}
										{/*			<code>gimme</code>*/}
										{/*		</div>*/}
										{/*	</SecondaryButton>*/}
										{/*</a>*/}
									</div>

									<div className="ml-5 m-3 mb-10 "/>
								</div>
							</div>
						</div>
						<div className="opacity-25 fixed inset-0 z-50 bg-black" onClick={() => setShowModal(false)}></div>
					</>
				) : null}
			</DesktopNavLinks>
		</Header>
	);
};

export default Navbar
