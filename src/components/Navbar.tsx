"use client"
import React, { useState } from 'react'
import styles from "@/styles/Navbar.module.css"
import signature from '@/media/myphotosign_244998_w.png'
import Image from 'next/image'

const Navbar = ({
    portfolioRef,
    aboutRef,
    projectRef,
    skillsRef,
    contactRef
}: {
    portfolioRef: React.RefObject<HTMLDivElement>
    aboutRef: React.RefObject<HTMLDivElement>
    projectRef: React.RefObject<HTMLDivElement>
    skillsRef: React.RefObject<HTMLDivElement>
    contactRef: React.RefObject<HTMLDivElement>
}) => {

    const handleButtonClick = (section: string) => {
        // console.log(section)
        if (section == 'home' && portfolioRef.current) {
            portfolioRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        else if (section == 'about' && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' })
        }
       else if (section == 'projects' && projectRef.current) {
            projectRef.current.scrollIntoView({ behavior: 'smooth' })
        }
       else if (section == 'skills' && skillsRef.current) {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' })
        }
       else if (section == 'contact' && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        else{
            console.warn(`section "${section}" not found. Please ensure it exists.`)
        }
    }
    const [navActive, setNavActive] = useState(false)
    const handleNavbarClick = () => {
        navActive ? setNavActive(false) : setNavActive(true)
    }
    return (
        <div className={styles.navouter}>
            <div className={styles.left}>
                <Image alt='' src={signature} width={400} height={400} quality={100} className={styles.sign} />
            </div>
            <div
                onClick={handleNavbarClick}
                className={navActive == true ? `${styles.nav_toggler} ${styles.navActive}` : `${styles.nav_toggler}`}>
                <span></span>
            </div>
            <div className={styles.right}>
                <button onClick={() => handleButtonClick("home")}>Home</button>
                <button onClick={() => handleButtonClick("about")}>About</button>
                <button onClick={() => handleButtonClick("projects")}>Projects</button>
                <button onClick={() => handleButtonClick("skills")}>Skills</button>
                <button onClick={() => handleButtonClick("contact")}>Contact</button>

            </div>
            {
                navActive == true &&
                <div className={styles.right1}>
                    <button onClick={() => handleButtonClick("home")}>Home</button>
                    <button onClick={() => handleButtonClick("about")}>About</button>
                    <button onClick={() => handleButtonClick("projects")}>Projects</button>
                    <button onClick={() => handleButtonClick("contact")}>Contact</button>
                </div>
            }
        </div>
    )
}

export default Navbar
