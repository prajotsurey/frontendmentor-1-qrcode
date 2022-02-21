import React from 'react'
import styles from './card.module.scss'
import Image from 'next/image'
import qrImage from '../public/images/image-qr-code.png'

export default function Card() {
  return (
    <div className={styles.card}>
      <img 
        src='/images/image-qr-code.png'
        alt="image of qrcode" 
        className={styles.qrImage}
        priority={true}/>
      <div className={styles.textContent}>
        <h1 className={styles.title}>
          Improve your front-end skills by building projects
        </h1>
        <div className={styles.detail}>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </div>
      </div>
    </div>
  )
}
