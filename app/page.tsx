import Hero from '@/components/Hero'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Hero/>
      <section className="min-h-screen">
        <Header/>
      </section>
    </>
  );
}
