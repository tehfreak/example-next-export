import Link from "next/link"

export default function Header() {
    return (
        <header>
            <div className="flex gap-[200px] justify-center">

                <div className="">logo</div>

                <div className="flex gap-3">

                    <Link href="">about</Link>

                    <Link href="">contacts</Link>

                    <Link href="">video</Link>

                    <Link href="">people</Link>

                </div>

                <div className="flex gap-3">

                    <button>log in</button>

                    <button>sign up</button>

                </div>

            </div>
        </header>
    )
}