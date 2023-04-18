import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import About from '../components/contents/about/About';
import Contact from '../components/contents/contact/Contact';
import Experiences from '../components/contents/experiences/Experiences';
import Footer from '../components/contents/Footer';
import Projects from '../components/contents/projects/Projects';
import Skills from '../components/contents/skills/Skills';
import Top from '../components/contents/Top';

import type { InferGetStaticPropsType } from 'next';

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

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['about', 'experiences', 'projects'])),
  },
});

export default IndexPage;
