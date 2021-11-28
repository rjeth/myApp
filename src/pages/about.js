import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <React.Fragment>
    <div>About page</div>
    <Link to="/">Back to home</Link>
  </React.Fragment>
)

export const query = graphql `
  query {
    site {
      siteMetadata {
        author,
        description,
        title
      }
    }
  }
`