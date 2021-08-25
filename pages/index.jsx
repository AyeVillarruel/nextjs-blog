import Layout from '../components/Layout'
import utilStyle from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout
        title="Home | Next.js"
        description="esta es la descripcion del home"
        home
    >
      <section className={utilStyle.headdingMd}>
        <p>Esta soy yo</p>
        <p>
          este es mi pagina web
          <a href="https://nextjs.org/learn">tutorial de next</a>
        </p>
      </section>
    </Layout>
  )
}