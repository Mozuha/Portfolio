import Layout from '../components/Layout'
import Top from '../components/contents/Top'
import Projects from '../components/projects/Projects'
import Experiences from '../components/contents/Experiences'
import About from '../components/contents/About'
import Contact from '../components/contents/Contact'

const IndexPage = (): JSX.Element => {
  return (
  <Layout>
    <Top />
    <Projects />
    <Experiences />
    <About />
    <Contact />
  </Layout>
  )
}

export default IndexPage