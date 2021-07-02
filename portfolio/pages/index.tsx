import Layout from '../components/Layout'
import Top from '../components/contents/Top'
import Projects from '../components/contents/projects/Projects'
import Experiences from '../components/contents/experiences/Experiences'
import About from '../components/contents/about/About'
import Contact from '../components/contents/Contact'

const IndexPage = (): JSX.Element => {
  return (
  <Layout>
    <Top />
    <About />
    <Experiences />
    <Projects />
    <Contact />
  </Layout>
  )
}

export default IndexPage