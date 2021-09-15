import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { SectionTitle } from "../../components/styled/Interface"

const SpacesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2px;
  margin: 2px 0;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0px 2px;
    grid-template-columns: 1fr 1fr;
  }
`

const Spaces = () => {
  const spaces = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "spaces" }
          extension: { regex: "/jpg|png|jpeg/" }
        }
        sort: { fields: name, order: DESC }
      ) {
        edges {
          node {
            sourceInstanceName
            relativePath
            size
            name
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 300
                height: 300
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo
        title={`Ardillan.com | Espacios`}
        postDescription="En esta página muestro los diferentes espacios en los que suelo trabajar con mi portátil. "
      />
      <SectionTitle>
        <div>
          <h1>Mis espacios</h1>
          <h2>
            Aquí muestro los diferentes espacios en los que he tenido el placer
            de trabajar con mi ordenador. Me encanta ser lo más nómada posible
            en este aspecto, por eso siempre aprovecho la ocasión para poder
            cambiar de ámbito.
          </h2>
        </div>
      </SectionTitle>
      <SpacesContainer>
        {spaces.allFile.edges.map((image) => (
          <GatsbyImage
            image={image.node.childImageSharp.gatsbyImageData}
            key={image.node.name}
            alt="Imagen de un portátil"
          />
        ))}
      </SpacesContainer>
    </Layout>
  )
}

export default Spaces
