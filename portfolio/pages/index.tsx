import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Top from '../components/contents/Top';
import About from '../components/contents/about/About';
import Experiences from '../components/contents/experiences/Experiences';
import Projects from '../components/contents/projects/Projects';
import Skills from '../components/contents/skills/Skills';
import Contact from '../components/contents/contact/Contact';
import Footer from '../components/contents/Footer';

type Props = {};

const IndexPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Mizuki | Portfolio</title>
      </Head>
      <Top />
      <About />
      <Experiences />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['about', 'experiences', 'projects'])),
  },
});

export default IndexPage;
