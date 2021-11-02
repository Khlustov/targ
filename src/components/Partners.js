import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

import * as styles from '../styles/partners.module.css'

const Partners = () => {
    const data = useStaticQuery(graphql`
    query Partners {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(partners)/"}}) {
          nodes {
            frontmatter {
              link
              title
              image {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, formats: AUTO)
                }
              }
            }
          }
        }
      }
    `)
    
    const partners = data.allMarkdownRemark.nodes
    
    return (
        <div className={styles.partners} id='clients'>
            <div className={styles.partnersWrapper}>                
                {partners.map(partner => {
                    const { title, link, image } = partner.frontmatter                                  
                    const img = getImage(image)

                    return (
                        <div key={title} className={styles.links}>
                            <a href={ link }>
                                <GatsbyImage image={img} alt={title}/>    
                            </a>                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Partners
