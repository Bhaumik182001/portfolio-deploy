import type { GetStaticProps, NextPage } from "next";
import Head from 'next/head'
import Contact from "../components/Contact";
import Cursor from "../components/Cursor";
import { GET_ALL_DATA } from "../graphql/queries";
import Intro from "../components/Intro";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import MainProjects from "../components/MainProjects";
import Skills from "../components/Skills";

import Who from "../components/Who";
import { allDataType } from "../shared/types";
import { client } from "../graphql/client";
import { useRef } from "react";

interface HomeProps {
  data: allDataType;
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <Cursor />

      <div data-scroll-container ref={containerRef}>
        <Head>
        <title>Portfolio</title>
        <link rel="icon" href="https://i.pinimg.com/474x/af/09/41/af0941ba06185e9846af909ba9350baf--letter-b-logo-b-logo-design.jpg" />
      </Head>
        <Intro />
        <Who />
        <Skills skills={data.skills1} />
        <MainProjects projects={data.projects1} />
        {/* <SmallProjects projects={data.smallProjects} />  */}  
        <Contact />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.request(GET_ALL_DATA);

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
};
