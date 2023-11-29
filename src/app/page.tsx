import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
    return (
        <main>
            <div className="">Hi I am main</div>
            <Link href="/about">about</Link>
        </main>
    )
}
