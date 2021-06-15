import React from 'react';
import { Typography, Box } from '@material-ui/core'

import { AppList, FooterContainer, FooterStyled, FooterTitle } from './styles';

const Footer: React.FC = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <Box sx={{ maxWidth: '400px' }}>
                    <FooterTitle>Quem somos</FooterTitle>
                    <Typography variant={'body2'} sx={{ marginTop: '16px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore voluptatem ut aliquid, blanditiis impedit eos id
                        harum repellat architecto quaerat labore, iste odit?
                        Aperiam sequi optio rem libero nemo accusamus.
                    </Typography>
                </Box>
                <Box>
                    <FooterTitle>Lojas</FooterTitle>
                    <AppList>
                        <li>
                            <a href="/" target={'_blank'} rel={'nooper noreferrer'}>
                                <img src={'/img/logos/google-play.png'} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/" target={'_blank'} rel={'nooper noreferrer'}>
                                <img src={'/img/logos/app-store.png'} alt="" />
                            </a>
                        </li>
                    </AppList>
                </Box>
            </FooterContainer>
        </FooterStyled>
    );
}

export default Footer;