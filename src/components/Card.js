import { GatsbyImage } from "gatsby-plugin-image"
import React from 'react'

import * as styles from '../styles/card.module.css'

export default function Card(props) {

    return (
        <div className={styles.card}>
            <div className={styles.cardMain}>
                <GatsbyImage image={props.source} alt={props.cardTitle}/>
                <h4>{props.cardTitle}</h4>
            </div>
            
        </div>
    )
}
