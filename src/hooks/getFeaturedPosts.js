import { useStaticQuery, graphql } from "gatsby"

export const getFeaturedPosts = () => {
  const posts = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/posts/" }
            frontmatter: { featured: { eq: true } }
          }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          totalCount
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                date
                author
                type
                description
                category
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 300, maxHeight: 200) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return posts.allMarkdownRemark.edges
}
