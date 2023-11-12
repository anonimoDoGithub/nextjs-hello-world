import Image from 'next/image'

export default function Home() {
  return (
    <section>
      <h1>Hello World!</h1>
      <h1>Está é a HomePage!</h1>
      <Image src="/img01.webp" width={500} height={500} alt="Albert" quality={100}/>
    </section>
  )
}
