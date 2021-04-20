import styled from 'styled-components';

export const InputField = styled.input`
outline: none;
padding: 20px 7%;
border-radius: 20px;
border: none;
margin-bottom: 5%;
background: rgb(156, 156, 156);
color: white;
& - placeholder {
    color: white;
}
`

export const Wrapper = styled.div`
display: flex;
justify-content: space-around;
`
export const NewsBlock = styled.div`
max-width: 600px;
`

export const NewsText = styled.div`
margin: 10px
`

export const ReadMoreButton = styled.button`
outline: none;
padding: 10px 7%;
border-radius: 20px;
border: none;
margin-bottom: 5%;
background: rgb(156, 156, 156);
color: white;
cursor: pointer;
color: ${props => props.disabled ? 'gray' : 'blue'};
`


export const WeatherCity = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 15px 8%;
border-radius: 20px;
background: rgba(250, 250, 250, 0.85);
box-shadow: 10px 10px 5px 0px rgba(15, 15, 15, 0.404);
`

export const City = styled.h2`
font-size: 2em;
`

export const Temp = styled.div`
font-size: 5rem;
font-weight: lighter;
margin-top: 10px;
color: #1e2432;
text-align: center;
`

export const Info = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`