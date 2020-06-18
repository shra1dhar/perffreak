
import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface HeaderProps {
  siteTitle: string;
  siteTagline: string;
  socialLinks: {
    github: string;
    facebook: string;
    linkedIn: string;
    twitter: string;
    youTube: string;
    instagram: string;
  };
}
interface SocialIconProps {
  name:
    | 'facebook'
    | 'linkedin'
    | 'twitter'
    | 'github'
    | 'youtube'
    | 'instagram';
  link: string;
}

const SocialIcon: FunctionComponent<SocialIconProps> = ({ name, link }) => (
  <div
    style={{
      display: `inline-block`,
      marginLeft: `1rem`,
    }}
  >
    <a
      rel="noreferrer noopener"
      target="_blank"
      href={link}
      style={{
        textDecoration: `none`,
        color: `#ffffff`,
        textTransform: `capitalize`,
      }}
    >
      <FontAwesomeIcon
        icon={['fab', name]}
        style={{ color: '#ffffff', marginRight: '.3rem' }}
      />
      {name}
    </a>
  </div>
);
const Header: FunctionComponent<HeaderProps> = ({
  siteTitle,
  siteTagline,
  socialLinks,
}) => (
  <header
    style={{
      background: `linear-gradient(-45deg,#116ace,#0d42a2)`,
      marginBottom: `1.45rem`,
      margin: `0 auto`,
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        width: `50%`,
        display: `inline-block`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            textTransform: `uppercase`,
          }}
        >
          <span style={{ fontWeight: 800 }}>{siteTitle}</span>
          <span style={{ fontWeight: 400 }}>{siteTagline}</span>
        </Link>
      </h1>
    </div>
    <div
      style={{
        width: `50%`,
        display: `inline-block`,
      }}
    >
      {socialLinks.twitter && (
        <SocialIcon
          name="twitter"
          link={`https://twitter.com/${socialLinks.twitter}`}
        />
      )}
      {socialLinks.github && (
        <SocialIcon
          name="github"
          link={`https://github.com/${socialLinks.github}`}
        />
      )}
      {socialLinks.linkedIn && (
        <SocialIcon
          name="linkedin"
          link={`https://linkedin.com/in/${socialLinks.linkedIn}`}
        />
      )}
      {socialLinks.facebook && (
        <SocialIcon
          name="facebook"
          link={`https://facebook.com/${socialLinks.facebook}`}
        />
      )}
      {socialLinks.youTube && (
        <SocialIcon
          name="youtube"
          link={`https://youtube.com/channel/${socialLinks.youTube}`}
        />
      )}
      {socialLinks.instagram && (
        <SocialIcon
          name="instagram"
          link={`https://instagram.com/${socialLinks.instagram}`}
        />
      )}
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
