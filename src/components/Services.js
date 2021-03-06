import React from 'react'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'


import * as styles from '../styles/services.module.css'

const Services = () => {
    const data = useStaticQuery(graphql`
    query Cards {
        allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/(services)/"}}){
            nodes {
              frontmatter {
                image {
                  childImageSharp {
                    gatsbyImageData(formats: AUTO, placeholder: BLURRED)
                  }
                }
                title
              }
              id
              html
            }
          }
      }
        `)
        
    const services = data.allMarkdownRemark.nodes   
    
    return (
        <div className={styles.services} id="services">
            <div className={styles.servicesImage}><StaticImage src='../images/services-image.webp' alt="background"/></div>
            <div className={styles.servicesWrapper}>
                <div className={styles.servicesInfo}>
                    <h3>Explore our services</h3>
                    <p>We specialize in large scale, high availability enterprise application development</p>
                </div>
                <div className={styles.cards}>
                    {services.map(service => {

                        const { title, image } = service.frontmatter
                        const { html } = service                        
                        const img = getImage(image)
                        
                        return (
                            <div key={service.id} className={styles.card}>
                                <div className={styles.cardMainLayout}>
                                    <div className={styles.cardImgContainer}>
                                        <GatsbyImage image={img} alt={title} className={styles.cardImg}/>
                                    </div>
                                    <h4>{title}</h4>
                                </div>
                                <div className={styles.cardSecondaryLayout}>
                                    <p className={styles.cardTitle}>{title}</p>
                                    <div dangerouslySetInnerHTML={{ __html: html }} className={styles.cardInfo}></div>
                                </div>
                            </div>
                        )
                    })}   
                </div>    
            </div>  
        </div>
    )
}

export default Services


