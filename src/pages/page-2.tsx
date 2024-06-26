// Gatsby supports TypeScript natively!
import React, { FunctionComponent } from 'react';
import { PageProps, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage: FunctionComponent<PageProps> = props => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
