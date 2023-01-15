import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import {
  codeStyles,
  headingAccentStyles,
  headingStyles,
  pageStyles,
  paragraphStyles,
} from "../components/index.css";
import Layout from "../components/layout";

interface IndexProps {
  data: {
    allWpPage: {
      nodes: [];
    };
  };
}

// const IndexPage: React.FC<PageProps> = () => {
const IndexPage = (props: any) => {
  const { allWpPage } = props.data;
  return (
    <Layout>
      <main style={pageStyles}>
        {allWpPage.nodes.map((node: any) => (
          <p>{node.title}</p>
        ))}
        <h1 style={headingStyles}>
          fgdfdfgdfg
          <br />
          <span style={headingAccentStyles}>
            — you just made a Gatsby site! 🎉🎉🎉
          </span>
        </h1>
        <p style={paragraphStyles}>
          Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this
          page update in real-time. 😎
        </p>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allWpPage {
      nodes {
        id
        title
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
