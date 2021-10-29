import React from 'react'

import * as styles from '../styles/work.module.css'

export default function HowWeWork() {
    return (
        <div className={styles.work}>
            <div className={styles.workWrapper}>
                <div className={styles.title}>
                    <h3>How we work</h3>    
                </div> 
                <div className={styles.workCards}>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>1</div>
                        <div className={styles.cardContent}>
                            <h4>Analyze</h4>
                            <p>We create countless versions of clickable prototypes for your product to make sure the blueprint is right</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>2</div>
                        <div className={styles.cardContent}>
                            <h4>Design</h4>
                            <p>As fans of all things simple, we create clean, in-your-face interfaces even for the most sophisticated workflows</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>3</div>
                        <div className={styles.cardContent}>
                            <h4>Develop</h4>
                            <p>Good, efficient architecture is king. Your product should be scalable, maintainable and future-proof</p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}
