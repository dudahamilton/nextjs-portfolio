// import Link from next
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                {/* links take any child components */}
                Home
            </Link>

            <Link href="/about">
                About meeee
            </Link>

            {/* outside sources use regular a tags */}
            <a 
                href="https://github.com/weston-bailey"
                target="_blank"
            >
                see my github
            </a>
        </nav>
    )
}