/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent, ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {
//   faFacebook,
//   faTwitter,
//   faGithub,
//   faInstagram,
//   faLinkedin,
//   faYoutube,
// } from '@fortawesome/free-brands-svg-icons';

// library.add(
//   faFacebook,
//   faTwitter,
//   faGithub,
//   faInstagram,
//   faLinkedin,
//   faYoutube
// );

import Header from './header';
// import '../styles/global.scss';

interface Props {
  children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          tagline
          socialLinks {
            github
            facebook
            linkedIn
            twitter
            youTube
            instagram
          }
        }
      }
    }
  `);

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteTagline={data.site.siteMetadata.tagline}
        socialLinks={data.site.siteMetadata.socialLinks}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
