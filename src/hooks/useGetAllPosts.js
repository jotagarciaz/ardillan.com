import { useStaticQuery, graphql } from "gatsby"

export const useGetAllPosts = () => {
  const posts = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/posts/" } }
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
                featuredImage {
                  childImageSharp {
                    gatsbyImageData(
                      layout: CONSTRAINED
                      width: 250
                      height: 250
                    )
                  }
                }
                type
                description
                category
              }
            }
          }
        }
      }
    `
  )
  return posts.allMarkdownRemark.edges
}
