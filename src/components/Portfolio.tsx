import React from 'react'
import styles from '@/styles/Portfolio.module.css'
import Image from 'next/image'
import mainimg from '@/media/matting_hitesh (2).png'


const Portfolio = () => {
  return (
    <div className={styles.section1outer}>
      <div className={styles.subtextdiv}>
        <div className={styles.left}>
          <div className={styles.about}>
            <p>Hi, I am <span>Hitesh Kumar</span></p>
            <p>I build full stack websites and mobile applications, I will solve all your business problems. I am open to freelance work.</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.stat}>
            <h1>30+</h1>
            <p>Happy<br />clients</p>
          </div>
          <div className={styles.stat}>
            <h1>Fresher</h1>
            <p>Ready<br></br>to Work</p>
          </div>
        </div>
      </div>
      <Image src={mainimg} className={styles.mainimg} alt='mainimg' quality={100} />
      <div className={styles.maintextdiv}>
        <p>I m a</p>
        <h1><span>&nbsp;</span>FULL STACK</h1>
        <h2>Developer</h2>
      </div>
      <video src={'https://videos.pexels.com/video-files/2324166/2324166-uhd_3840_2160_25fps.mp4'} autoPlay loop muted className={styles.smokevideo} />
    </div>
  )
}

export default Portfolio
