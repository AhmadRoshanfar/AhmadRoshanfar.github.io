import * as React from "react";

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const IndexPage = () => {
  return (
    <div>
      <h1 style={headingStyles}>Welcome to the Embedded Ai Blog</h1>
      <h2>Coming Soon...</h2>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
