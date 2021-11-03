import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from '../styles/footer.module.css'

export default function Footer() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSend, setIsSend] = useState(false)

    return (
        <div className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerImage}>
                    <StaticImage src='../images/footer-image.webp' alt="footer-image"/>
                </div>
                <div className={styles.formLayout}>
                    <div className={styles.formContainer}>
                        <h4>Contact us</h4>
                        <form className={styles.form}>
                            <p>Your Name</p>
                            <input
                            placeholder='John Smith'
                            onChange={e => setName(e.target.value)}
                            value={name}
                            required
                            >
                            </input>
                            <p>Your Email</p>
                            <input
                            placeholder='mail@example.com'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            required
                            >
                            </input>
                            <p>Your message</p>
                            <textarea
                            rows={2}
                            onChange={e => setMessage(e.target.value)}
                            value={message}
                            required
                            >
                            </textarea>
                            <button type='submit'>Send</button>
                        </form>
                    </div>    
                </div>

            </div>
        </div>
    )
}