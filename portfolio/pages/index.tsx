import Layout from '../components/Layout'
import Top from '../components/contents/Top'
import About from '../components/contents/about/About'
import Experiences from '../components/contents/experiences/Experiences'
import Projects from '../components/contents/projects/Projects'
import Skills from '../components/contents/skills/Skills'
import Contact from '../components/contents/Contact'

const IndexPage = (): JSX.Element => {
  return (
  <Layout>
    <Top />
    <About />
    <Experiences />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
  )
}

export default IndexPage