import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import * as styles from '../styles/home.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <nav>
                <div><StaticImage src='../images/logo.png'/></div>
                <ul>
                    <li>Services</li>
                    <li>Clients</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <h2>We are TargSoft</h2>
            <p>We develop custom-build competitive solutions tailored to the needs of our clients</p>
        </div>
    )
}
