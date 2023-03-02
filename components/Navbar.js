
import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav >
            <div className={styles.container}>
            <Link href="/" className={styles.maria} >
                {/* links take any child components */}
                Maria Hamilton
            </Link>

            <Link href="#about" className={styles.item}>
                
                About Me
            </Link>

            <Link href="/projects" className={styles.item}>
                Projects
            </Link>

            <Link href="#Resume" className={styles.item}>
                
                Resume
            </Link>


            <Link href="#contact" className={styles.item}>
                Contact
            </Link>

            
                
            

            {/* outside sources use regular a tags */}
            {/* <a 
                href="https://github.com/weston-bailey"
                target="_blank"
            >
                see my github
            </a> */}
            </div>
        </nav>
    )
}