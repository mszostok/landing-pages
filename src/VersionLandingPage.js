import React from "react";
import {Container, Content2Xl} from "./components/helpers/Layouts";
import {SectionHeading as HeadingBase} from "./components/helpers/Headings";
import tw from "twin.macro";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MiniCenteredFooter from "./components/MiniCenteredFooter";
import FeatureWithImage from "./components/features/FeatureWithImage";
import FunctionalityCards from "./components/features/FeaturesCards";
import LeftAnimation from "./components/helpers/LeftAnimation";

import CompassIcon from "./images/compass-icon.svg";
import ChatIcon from "./images/chat-icon.svg";
import CustomizeIcon from "./images/customize-icon.svg";
import GitHubLineIcon from "./images/github-icon.svg";
import ModulesIcon from "./images/modules-icon.svg";
import PlayIcon from "./images/play-icon.svg";

const SectionHeading = tw(HeadingBase)`text-secondary-900 mt-64`;
const Code = tw.code`text-black`
const FeatureHighlight = tw.span`text-primary-500`
const LinkGH = tw.a`
  text-primary-300
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;
const Root = tw(Container)`bg-brand -mx-8 -mt-8 pt-8 px-8`

function VersionLandingPage() {
	return (
		<Root>
			<Content2Xl>
				<br/>
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
							repetitiveness</strong> of reimplementing version command.
							<br/>
							<br/>
							All magic included.
						</>
					)}
					primaryButtonUrl={"quick-start/"}
					secondaryButtonUrl={"https://github.com/mszostok/version"}
					imageSrc={"https://version.szostok.io/assets/preview.gif"}
				/>

				<SectionHeading>Functionality</SectionHeading>
				<FunctionalityCards cards={[
					{
						imageSrc: CompassIcon, title: "Data Autodiscovery", description: (
							<>
								For Go 1.18+, detect <Code>version, commit, commitDate</Code>,
								and <Code>dirtyBuild</Code> automatically.
							</>
						)

					},
					{
						imageSrc: ChatIcon, title: "Multiple Output Formats", description: (
							<>
								Print the version in the <Code>YAML, JSON, short</Code>, and <Code>pretty</Code> formats.
							</>
						),
					},
					{
						imageSrc: GitHubLineIcon, title: "New Release Discovery", description: (
							<>
								Detect and display an upgrade notice if a newer version has been released. This can also be used as a
								<LinkGH><a href={"/get-started/upgrade-notice/"}>standalone</a></LinkGH> component for your existing
								project.
							</>
						)
					},
					{
						imageSrc: ModulesIcon,
						title: "Modularity",
						description: "Designed in a way that lets you use each component individually. For example, use the notice upgrade component, or the version collector logic, or a printer with its own info object."
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
								However you can customize the default behavior of the version components. For example,
								use <Code>printer.WithLayout</Code>, <Code>printer.WithPostRender</Code>, <Code>upgrade.WithUpdateCheckTimeout</Code>,
								and many, many <LinkGH><a
								href={"/customization"}>others</a></LinkGH>.
							</>
						)
					},

				]}/>

				<LeftAnimation>
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
							There is built-in support for <LinkGH><a
							href={"https://github.com/spf13/cobra"}>https://github.com/spf13/cobra</a></LinkGH>.
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
				</LeftAnimation>
				<MiniCenteredFooter/>
			</Content2Xl>
		</Root>);
}

export default VersionLandingPage
