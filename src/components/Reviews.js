import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

import * as styles from '../styles/reviews.module.css'

const Reviews = () => {
    const data = useStaticQuery(graphql`
    query ReviewQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(reviews)/"}}) {
          nodes {
            html
            id
            frontmatter {
              author
              position
              title
              image {
                childImageSharp {
                  gatsbyImageData(formats: AUTO, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
        `)

    const reviews = data.allMarkdownRemark.nodes
    


    return (
        <div className={styles.reviews} id='clients'>
            <div className={styles.reviewsWrapper}>
                <h4 className={styles.reviewsTitle}>Our clients love us</h4>
                <Carousel fade variant="dark">
                    {reviews.map(review => {
                        const { author, position, title, image } = review.frontmatter
                        const img = getImage(image)
                        const { html } = review

                        return (
                            <CarouselItem key={review.id}>
                                <div className={styles.carouselContainer}>
                                    <div className={styles.review}>                                        
                                        <GatsbyImage image={img} alt={title} className='rounded-circle mb-30'/>                                       
                                    </div>
                                    <div className={styles.reviewInfo}>
                                        <div dangerouslySetInnerHTML={{ __html: html }} className={styles.reviewText}></div>
                                        <p className={styles.reviewAuthor}>{author}</p>
                                        <p>{position + ' ' + title}</p>
                                    </div>
                                </div>
                    </CarouselItem>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default Reviews



