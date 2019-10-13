import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BigText = styled.span`
    font-weight: 600;
    color: #4cc5ff;
`

export const SmallText = styled.small`
    font-weight: normal;
    color: #5f6769;
`

export const SmallItalicText = styled.small`
    font-weight: normal;
    color: #5f6769;
    font-style: italic;
`

export const InfoText = styled.span`
    float: right;
    font-size: smaller;
    color: #315b96;
`

export const Text = styled.span`
    font-size: inherit;
    font-weight: normal;
`

export const P = styled.p`
    font-size: inherit;
`

export const OL = styled.ol`
    font-size: inherit;
`

export const LI = styled.li`
    font-size: inherit;
`

export const TextLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.color || '#000'};
    font-weight: ${props => props.bold ? '600' : 'inherit'};
    font-size: ${props => props.big ? '1.2rem' : 'inherit'};
    border: 1px solid ${props => props.btn ? props.scolor : 'none'};
    padding: ${props => props.btn ? '5px 10px' : 'inherit'};
    border-radius: 3px;
    display: ${props => props.btn ? 'inline' : 'contents'};
`