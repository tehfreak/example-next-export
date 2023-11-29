import Link from 'next/link'

export default function About() {
    return (
        <main>
            <div className="">Hi I am About</div>
            <Link href="/about/company">Company</Link>
        </main>
    )
}
