import React from 'react';
import { Toolbar, Container } from '@material-ui/core'

import { HeaderAppBar, HeaderLogo } from './styles';

const Header: React.FC = () => {
    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <HeaderLogo src={'/img/logos/logo.svg'} alt={'e-diaristas'} />
            </Toolbar>
        </HeaderAppBar>
    );
}

export default Header;