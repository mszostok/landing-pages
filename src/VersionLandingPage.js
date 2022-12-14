import React from "react";
import {Container, Content2Xl} from "./components/helpers/Layouts";
import {SectionHeading as HeadingBase} from "./components/helpers/Headings";
import tw from "twin.macro";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MiniCenteredFooter from "./components/MiniCenteredFooter";
import FeatureWithImage from "./components/features/FeatureWithImage";
import FunctionalityCards from "./components/features/FeaturesCards";

import CompassIcon from "./images/compass-icon.svg";
import ChatIcon from "./images/chat-icon.svg";
import CustomizeIcon from "./images/customize-icon.svg";
import GitHubLineIcon from "./images/github-icon.svg";
import ModulesIcon from "./images/modules-icon.svg";
import PlayIcon from "./images/play-icon.svg";

const SectionHeading = tw(HeadingBase)`text-secondary-900 mt-64`;
const Code = tw.code`text-black`
const FeatureHighlight = tw.span`text-primary-500`
const LinkButton = tw.a`
  text-primary-300
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

const Root = tw(Container)`bg-brand -mt-8 pt-8 px-8`

function VersionLandingPage() {
	return (
		<Root>
			{/*<a href="https://dev.to/mszostok/cli-version-a-collection-of-handy-tips-1nce">*/}
			{/*	<div className="new-announcement-bar-container">*/}
			{/*		<div className="main font-medium  text-sm text-secondary-700 pt-1">*/}
			{/*			🧐 Want to learn more? Check out the new "CLI version. A collection of handy tips" blog post.*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</a>*/}
			<Content2Xl>
				<Navbar
					header={"szostok.io/version"}
					documentationUrl={"quick-start/"}
					gitHubUrl={"https://github.com/mszostok/version"}
				/>
				<Hero
					heading={"Pure DNA of your CLI"}
					description={(
						<>
							Go package to present your CLI version in <b>a classy way</b>. Born to <strong>remove the
							repetitiveness</strong> in implementing the version command.
							<br/>
							<br/>
							All magic included.
						</>
					)}
					primaryButtonUrl={"quick-start/"}
					secondaryButtonUrl={"https://github.com/mszostok/version"}
					imageSrc={"https://szostok.io/projects/version/assets/hp-preview.gif"}
				/>

				<div className={"announcement-bar-container"} >
					<div className="wrapper">
						<div className="main">
							🧐 Want to learn more? Check out the <LinkButton href={"https://dev.to/mszostok/cli-version-a-collection-of-handy-tips-1nce"}>CLI version. A collection of handy tips</LinkButton> blog post!
						</div>
						<aside className="aside aside-1"></aside>
						<aside className="aside aside-2"></aside>
					</div>
				</div>

				<SectionHeading>Functionality</SectionHeading>
				<FunctionalityCards cards={[
					{
						imageSrc: CompassIcon, title: "Data Autodiscovery", description: (
							<>
								For Go 1.18+, detect <Code>version</Code>, <Code>commit</Code>, <Code>commitDate</Code>,
								and <Code>dirtyBuild</Code> automatically.
							</>
						)

					},
					{
						imageSrc: ChatIcon, title: "Multiple Output Formats", description: (
							<>
								Print the version in the <Code>YAML</Code>, <Code>JSON</Code>, <Code>short</Code>,
								and <Code>pretty</Code> formats. Automatically disable color output for non-tty output streams.
							</>
						),
					},
					{
						imageSrc: GitHubLineIcon, title: "New Release Discovery", description: (
							<>
								Detect and display an upgrade notice if a newer version of your project has been released.
							</>
						)
					},
					{
						imageSrc: ModulesIcon,
						title: "Modularity",
						description: (
							<>
								Designed in a way that lets you use each component individually. For example, use the <LinkButton
								href={"get-started/upgrade-notice/"}>notice upgrade</LinkButton> component, or the <LinkButton
								href={"get-started/usage/plain/"}>version collector</LinkButton> logic, or a <LinkButton
								href={"get-started/usage/printer/"}>printer</LinkButton> with your own info object.
							</>
						)
					},
					{
						imageSrc: PlayIcon,
						title: "Simplicity...",
						description: (
							<>
								Everything can be enabled with a single line of code. For example,
								use <Code>extension.NewVersionCobraCmd()</Code> to enable the <Code>version</Code> command for Cobra.
							</>
						)
					},
					{
						imageSrc: CustomizeIcon, title: "...with Full Customization", description: (
							<>
								However you can customize the default behavior of the version components
								via <Code>printer.WithLayout</Code>, <Code>printer.WithPostRender</Code>, <Code>upgrade.WithUpdateCheckTimeout</Code>,
								and many <LinkButton href={"customization"}>others</LinkButton>.
							</>
						)
					},

				]}/>
				<br/><br/><br/><br/><br/><br/>
				<FeatureWithImage
					images={["https://szostok.io/projects/version/assets/examples/screen-cobra-version.png/", "https://szostok.io/projects/version/assets/examples/screen-custom-layout-.png/", "https://szostok.io/projects/version/assets/examples/screen-custom-formatting-.png/",]}
					heading={(<>
						<FeatureHighlight>Pretty</FeatureHighlight> output format
					</>)}
					description={"It comes with a built-in style. However, you can easily create your own. You can customize formatting and layout, or provide your own renderer functions."}
					primaryButtonUrl={"customization/pretty/format/"}
				/>
				<FeatureWithImage
					images={["https://szostok.io/projects/version/assets/examples/screen-printer--oyaml.png", "https://szostok.io/projects/version/assets/examples/screen-printer--ojson.png",]}
					heading={(<>
						<FeatureHighlight>JSON/YAML</FeatureHighlight> output format
					</>)}
					description={(<>
						This format can be useful for scripting purposes, e.g.
						<br/>
						<br/>
						<Code> cli version -ojson | jq .commit </Code>
						<br/>
						<br/>
						<br/>
						<br/>
					</>)}
				/>

				<FeatureWithImage
					images={["https://szostok.io/projects/version/assets/examples/screen-printer--oshort.png",]}
					heading={(<>
						<FeatureHighlight>Short</FeatureHighlight> output format
					</>)}
					description={"Short format can be useful for CI purposes, e.g. to easily validate that the correct CLI version is used."}
				/>
				<FeatureWithImage
					images={["https://szostok.io/projects/version/assets/examples/screen-cobra-version_-h.png/", "https://szostok.io/projects/version/assets/examples/screen-cobra-version.png/",]}
					heading={(<>
						<FeatureHighlight>Cobra</FeatureHighlight> native support
					</>)}
					description={(<>
						There is built-in support for <LinkButton
						href={"https://github.com/spf13/cobra"}>https://github.com/spf13/cobra</LinkButton>.
					</>)}
					primaryButtonUrl={"quick-start/"}
				/>
				<FeatureWithImage
					images={["https://szostok.io/projects/version/assets/examples/screen-upgrade-notice-cobra-version.png/", "https://szostok.io/projects/version/assets/examples/screen-upgrade-notice-cobra-version_-ojson.png/", "https://szostok.io/projects/version/assets/examples/screen-upgrade-notice-custom-version.png/",]}
					heading={(<>
						<FeatureHighlight>Release</FeatureHighlight> upgrade notice
					</>)}
					description={(<>
						Checks for new GitHub releases. If a newer version was found, it displays an upgrade notice.
						<br/>
						You can customize all aspects of the upgrade check!
					</>)}
					primaryButtonUrl={"customization/upgrade-notice/"}
				/>
				<FeatureWithImage
					images={["https://szostok.io/projects/version/assets/examples/screen-custom-fields-.png"]}
					heading={(<>
						<FeatureHighlight>Custom</FeatureHighlight> info fields
					</>)}
					description={(<>
						Extend the version info with own fields just by assigning your Go struct.
						<br/>
						You can define the field name for all output formats with field tags.
					</>)}
					primaryButtonUrl={"customization/extra-fields/"}
				/>
				<MiniCenteredFooter/>
			</Content2Xl>
		</Root>);
}

export default VersionLandingPage
