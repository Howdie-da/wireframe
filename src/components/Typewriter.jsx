import { useEffect, useState } from "react"

export default function Typewriter({ text }) {

    const [displayedText, setDisplayedText] = useState(text[0])

    useEffect(() => {
        let timeout;
        let currentIndex = 1;
        let isDeleting = false;

        const typeCharacter = () => {
            if (!isDeleting && currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;

                if (currentIndex > text.length) {
                    isDeleting = true;
                    timeout = setTimeout(typeCharacter, 3000);
                } else {
                    timeout = setTimeout(typeCharacter, 100);
                }
            } else if (isDeleting && currentIndex >= 0) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex--;

                if (currentIndex < 1) {
                    isDeleting = false;
                    currentIndex = 1;
                    timeout = setTimeout(typeCharacter, 500);
                } else {
                    timeout = setTimeout(typeCharacter, 50);
                }
            }
        }

        typeCharacter()

        return () => clearTimeout(timeout)
    }, [text])

    return(
        <span>
            {displayedText}
            <span className="animate-pulse font-bold text-cyan-400">_</span>
        </span>
    )
}