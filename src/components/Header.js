import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import * as styles from '../styles/home.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerImage}><StaticImage src='../images/header-image.webp'/></div>
            <div className={styles.navbarMask}></div>
            <div className={styles.headerWrapper}>             
                <div className={styles.navbarContent}>
                    <div className={styles.logo}><StaticImage src='../images/logo.png'/></div>
                    <nav>                        
                        <ul className={styles.navlinks}>
                            <li>Services</li>
                            <li>Clients</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>                
                <div className={styles.headerTitle}>
                    <div className={styles.headerContent}>
                        <h2>We are TargSoft</h2>
                        <p>We develop custom-build competitive solutions tailored to the needs of our clients</p>
                    </div>
                </div>                
            </div>            
        </div>
    )
}