import React from 'react';
import { Container } from '@material-ui/core'

import { SafeEnvironmentContainer } from './styles';

const SafeEnvironment = () => {
    return (
        <SafeEnvironmentContainer>
            <Container>
                ambiente seguro <i className={"twf-lock"} />
            </Container>
        </SafeEnvironmentContainer>
    );
}

export default SafeEnvironment;