import React from 'react'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
export default function footer(){
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
            <h2 id='contact'>Contact</h2>
               <p> Maria <br />
               <br />
               <Image
                    src='/pictures/phone.webp'
                    alt='phone logo'
                    width='30'
                    height='20'/>
                +1 971 563 2305 <br />
                 <br />
                 <Image
                    src='/pictures/mail.png'
                    alt='mail logo'
                    className={styles.icon}
                    width='30'
                    height='20'/>
                 mariaehamilton28@gmail.com
                </p>
            </div>
            <div className={styles.socials}>
                
                
                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>© Made by Maria Hamilton with ❤️</p>
                   
                </div>    
            </div>

            <div className={styles.imdb}>
                <h2>Social Media</h2>
                <a className={styles.item} target='_blank' href='https://www.linkedin.com/in/mariahamiltondev/'>
                <Image
                    src='/pictures/linkedin.png'
                    alt='linkedin logo'
                    width='40'
                    height='40'/>
                     <br />
                     <br />

                </a>
                
                <a className={styles.item} target='_blank' href='https://github.com/dudahamilton'>
                <Image
                    src='/pictures/github.png'
                    alt='github logo'
                    width='60'
                    height='50'/>

                </a>
                
                
            </div>        
        </div>
         


        
    )
}