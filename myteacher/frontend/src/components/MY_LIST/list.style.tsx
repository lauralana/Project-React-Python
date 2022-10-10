import { styled } from '@mui/material';

export const ListStyled = styled('ul')`
    
`;

export const ListItems = styled('li')`
    list-style: none;
`;

export const Photo = styled('img')`
    width: 100%;
`;

export const Info = styled('div')`
`;

export const Name = styled('h3')`
    margin: ${({theme}) => theme.spacing(2, 0, 0, 0)};
`;

let PrimaryColor = "#F52273";

export const Value = styled('p')`
    margin: 0 ;
    font-weight: bold;
    color: ${() => PrimaryColor }
`;

export const Description = styled('p')`
    
`;