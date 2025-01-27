import { Poppins } from "next/font/google"

const headingFont = Poppins({
    weight: ['400', '800','600'],
    subsets: ['latin'],
    display: 'swap'
});

interface HeadingProps {
    className: string
    text: string
    h1?: boolean
}

export default function Heading({ className, text, h1 }: HeadingProps) {
    if (h1) return <h1 className={`${headingFont.className} ${className}`}>{text}</h1>
    else return <h2 className={`${headingFont.className} ${className}`}>{text}</h2>
}