import React from 'react'
import styled from 'styled-components'



const CardDisplay = (props) => {
 return(
  <>
     <CardHolder>
     <Card1 style={
      {borderTop:props.col}}>
      <CardHeader>
       {props.Heading}
      </CardHeader>
      <cardPara>
      {props.paragraph}
      </cardPara>
      <br/>
      <br/>
      <ImageHolder>
       <CardImage src={props.Avatar}/>
      </ImageHolder>
     </Card1>
    </CardHolder>



  </>
 );
};

export default CardDisplay;

const CardHolder = styled.div`
 // height: 500px;
width: 100%;
// background-color: green;
display: flex;
flex-direction: column;
align-items: center;


`

const Card1 = styled.div`
height: 200px;
width: 300px;
background-color: pink;
margin: 1rem 0;
padding:20px;
border: 3px #ccc solid;
background-color: white;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;



`

const CardHeader = styled.h2`

`

const cardPara = styled.p`


`

const CardImage = styled.img`
height: 60px;
width: 60px;
display: flex;
justify-content: flex-end;
`

const ImageHolder = styled.div`
display: flex;
justify-content: flex-end;
`