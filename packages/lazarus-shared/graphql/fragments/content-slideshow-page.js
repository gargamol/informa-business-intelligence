const gql = require('graphql-tag');

module.exports = gql`
fragment ContentSlideshowPageFragment on Content {
  id
  name
  published
  siteContext {
    path
  }
  primaryImage {
    id
  }
  images(input: { sort: { order: values }, pagination: { limit: 0 } }) {
    edges {
      node {
        id
        src(input: { options: { w: 768 } })
        alt
        displayName
        body
        credit
      }
    }
  }
  ... on Authorable {
    authors {
      edges {
        node {
          id
          name
          type
          siteContext {
            path
          }
        }
      }
    }
  }
}
`;
