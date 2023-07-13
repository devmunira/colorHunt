import styled from "styled-components";

const TextInput = styled.input`
    border : 2px solid #eeeeee;
    border-radius : 20px;
    color : #777;
    padding: 10px 20px;
    width: 100%;

    &:focus{
        border : 3px soild red;
    }
`

export default TextInput