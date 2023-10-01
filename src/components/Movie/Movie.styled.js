import styled from 'styled-components';
import { Link as BaseLink } from 'react-router-dom';

export const Link = styled(BaseLink)`
  color: #c40208;
  text-decoration: none;
`

export const MovieContainer = styled.div`
    padding: 20px 0;
    display: flex;
    margin-bottom: 30px;
    box-shadow: 0px 10px 10px -10px #fff; 
`
export const MovieContainerInfo = styled.div`
    margin-left: 35px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const MovieGenresList = styled.ul`
    display: flex;
    gap: 10px;

`
export const MovieAdditionalContainer = styled.div`
    padding-bottom: 15px;
    box-shadow: 0px 10px 10px -10px #fff; 
`

export const MovieAdditionalText = styled.p`
    text-align: center;
`

export const MovieAdditionalList=styled.ul`
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 15px;
`