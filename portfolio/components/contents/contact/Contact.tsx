import React from 'react';
import { styled, Paper, IconButton } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { MdMailOutline } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

import ContentWrapper from '../ContentWrapper';

const Contact = (): JSX.Element => {
  const handleLinkClick = (link: string | undefined) => window.open(link, '_blank');

  return (
    <ContentWrapper id="contact">
      <ContactDiv>
        <ContactPaper>
          <ContainerGrid container spacing={2}>
            <ItemGrid>
              <LinkedInIconButton
                onClick={() => handleLinkClick('https://www.linkedin.com/in/mizukihashimoto/')}
                title="See Mizuki's linkedin"
              >
                <AiFillLinkedin size={42} />
              </LinkedInIconButton>
              <ContactAnchorText
                aria-label="See Mizuki's linkedin"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/mizukihashimoto/"
              >
                linkedin.com/in/mizukihashimoto
              </ContactAnchorText>
            </ItemGrid>
            <ItemGrid>
              <GitHubIconButton
                onClick={() => handleLinkClick('https://github.com/Mozuha')}
                title="See Mizuki's github"
              >
                <AiOutlineGithub size={42} />
              </GitHubIconButton>
              <ContactAnchorText
                aria-label="See Mizuki's github"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Mozuha"
              >
                github.com/Mozuha
              </ContactAnchorText>
            </ItemGrid>
            <ItemGrid>
              <a aria-label="Email Mizuki" href="mailto:100zuha.shikitomi@gmail.com">
                <EmailIconButton title="Email Mizuki">
                  <MdMailOutline size={42} />
                </EmailIconButton>
              </a>
              <ContactAnchorText aria-label="Email Mizuki" href="mailto:100zuha.shikitomi@gmail.com">
                100zuha.shikitomi@gmail.com
              </ContactAnchorText>
            </ItemGrid>
          </ContainerGrid>
        </ContactPaper>
      </ContactDiv>
    </ContentWrapper>
  );
};

const ContactDiv = styled('div')({
  height: '85vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
});

const ContactPaper = styled(Paper)(({ theme }) => ({
  maxWidth: 900,
  margin: 30,
  padding: 50,
  backgroundColor: theme.palette.primary.dark,
  boxShadow: theme.shadows[5],
}));

const ContainerGrid = styled(Grid2)({
  margin: 'auto',
  width: '100%',
  justifyContent: 'center',
});

const ItemGrid = styled(Grid2)(({ theme }) => ({
  width: 'inherit',
  '& a': {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const LinkedInIconButton = styled(IconButton)({
  padding: '12px',
  '&:hover': {
    color: '#0077b5',
  },
});

const GitHubIconButton = styled(IconButton)({
  padding: '12px',
  '&:hover': {
    color: '#333',
  },
});

const EmailIconButton = styled(IconButton)({
  padding: '12px',
  '&:hover': {
    color: '#ea4335',
  },
});

const ContactAnchorText = styled('a')({
  paddingLeft: 20,
});

export default Contact;
