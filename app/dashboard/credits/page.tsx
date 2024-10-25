import Image from 'next/image';

export default function Home() {
    return (
        <>
            <h1>Cet examen est l'oeuvre de Corentin Pouget</h1>
            <Image
            src="/credits/pp.png"
            className="mr-2 rounded-full"
            width={200}
            height={200}
            alt={` Corentin Pouget's profile picture`}
            />
        </>
    )
}