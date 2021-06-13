import React from 'react';

import {
    UserInformationConatiner,
    UserName,
    UserDescription,
    AvatarStyled,
    RatingStyled
} from './styles'

interface UserInfoamtionProps {
    picture?: string;
    name: string;
    rating: number;
    description?: string
}

const UserInformation: React.FC<UserInfoamtionProps> = (props) => {
    return (
        <UserInformationConatiner>
            <AvatarStyled>{props.name[0]}</AvatarStyled>
            <UserName>{props.name}</UserName>
            <RatingStyled value={props.rating} />
            <UserDescription>{props.description}</UserDescription>
        </UserInformationConatiner>
    );
}

export default UserInformation;