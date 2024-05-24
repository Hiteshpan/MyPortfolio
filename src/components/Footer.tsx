'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styles from '@/styles/Footer.module.css'


const Footer = () => {
  return (
    <div className={styles.social}>
       <div className={styles.socialcard}
       onClick={()=> window.open('https://www.instagram.com/hitesh_pan573','_blank')}
       >
       <SocialIcon url="https://instagram.com" style={{ height: 40, width: 40 }} />
       <p>hitesh_pan573</p>
       </div>

       <div className={styles.socialcard}
       onClick={()=>window.open('https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTSCMqsnJmmDSpGvCwPSRbNTQdStpwktGRzNHvsvkblnWpgnVdPnBLmfDMpbbmkGscRLrV','_blank')}
       >
       <SocialIcon url="https://mail.google.com" style={{ height: 40, width: 40 }} />
       <p>hiteshrtk999@gmail.com</p>
       </div>

       <div className={styles.socialcard}
       onClick={()=>window.open('linkedin.com/in/hitesh-kumar-46708822b','_blank')}
       >
       <SocialIcon url="https://linkedin.com" style={{ height: 40, width: 40 }} />
       <p>Hitesh Kumar</p>
       </div>

       <div className={styles.socialcard}
         onClick={()=>window.open('https://github.com/Hiteshpan','_blank')}
       >
       <SocialIcon url="https://github.com" style={{ height: 40, width: 40 }} />
       <p>Hiteshpan</p>
       </div>
    </div>
  )
}

export default Footer
