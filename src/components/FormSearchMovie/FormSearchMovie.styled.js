import { styled } from 'styled-components';
import searchIcon from '../img/search-icon.svg'

export const SearchForm = styled.form`
    display: inline-block;
    margin: 0 auto;
`
export const SearchContainer = styled.div`
   display: flex;
   border: 1px solid #fff;
   border-radius: 100px;
   padding: 10px 15px;
`

export const SearchInput = styled.input`
    border: 0;
    color:#fff;
    background-color: transparent;
    width: 200px;
    &:focus {
      outline: none;
    }
`

export const SearchBtn = styled.button`
     display: inline-block;
    background-color: transparent;
    width: 20px;
    height: 20px;
    border: 0;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
`