import React, { FunctionComponent } from 'react';
import Title from '../components/index/Title';
// import DigitalNomad from '../components/index/svg/DigitalNomad';
import Minion from '../components/index/svg/Minion';
// import Balloon from '../components/index/svg/Balloon';
import Spaceship from '../components/index/svg/Spaceship';
// import { Link } from 'gatsby';

// import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
// import PostsList from '../components/posts-list';

import '../styles/pages/index.scss';
import GearTool from '../components/index/svg/GearTool';

const IndexPage: FunctionComponent = () => {
  return (
    <main className="home-page">
      <SEO title="Home" />
      {/* <DigitalNomad /> */}
      {/* <Balloon /> */}
      <GearTool className="gear-tool" />
      <Spaceship className="spaceship-1"/>
      <Spaceship className="spaceship-2"/>
      <Spaceship className="spaceship-3"/>
      <Spaceship className="spaceship-4"/>
      {/* <Minion /> */}
      <Title />
    </main>
  );
};

export default IndexPage;
