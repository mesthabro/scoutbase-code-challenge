import styled from 'styled-components'

export const Card = styled.div`
    box-shadow: 0px 0px 3px #e4e4e4;
    margin: 20px 0px;
    padding: 20px 30px;
    background-color: #fff;
`

export const CardHeader = styled.div`
    width: 100%;
    font-size: large;
    padding-bottom: 10px;
    box-sizing: border-box;
    transition: all 0.4s ease-in-out;
    border-bottom: 2px solid #ddd;

    :hover {
        border-bottom: 2px solid #9E9E9E;
    }
`

export const CardBody = styled.div`
    margin: 10px 0px 0px;
`