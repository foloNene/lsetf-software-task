import React from 'react'
import styled from 'styled-components'
import CardDisplay from './CardDisplay.js'
import home from './home.png'
import search from './search.jpg'
import bulbicon from './bulbicon.png'
import desktop from './desktop.png'




const Card = () => {
 return(
  <WholeContain>
   <MainContain>
    <HeaderContain>
     <Header1>
      Reliable efficient delivery
     </Header1>
     <Header2>
      Powered by technology
     </Header2>
     <HeaderPara>
      Our Atificial intellgence powered tools use millions of project data <br/> points to ensure that your project is successful
     </HeaderPara>
    </HeaderContain>
    <CardDisplayHolder>

     <CardDisplayHolderSide>
      <CardDisplay Heading="Supervisor"
    paragraph="Monitor activity to identify project feedback"
    Avatar={search}
    col='3px solid blue'
    />
     </CardDisplayHolderSide>

    <CardDisplayHolderInner>
      <CardDisplay Heading="Team Bulder"
    paragraph="Scan our talent network to create the optimal team for your project"
    Avatar={home}
    col='3px solid red'
    />

    <CardDisplay Heading="Karma"
    paragraph="Regularly  evaluate our talent to ensure quality"
    Avatar={bulbicon}
    col='3px solid orange'
    />
    </CardDisplayHolderInner>

    <CardDisplayHolderSide>
    <CardDisplay Heading="Calculator"
    paragraph="Uses data from past projects to provide better delivery estimate"
    Avatar={desktop}
    col='3px solid blue'
    />
    </CardDisplayHolderSide>

    </CardDisplayHolder>
    
   </MainContain>
  </WholeContain>
 )
}

export default Card;

const WholeContain = styled.div`
width:100%;
height: 1000px;
background-color: #AEADA3;
display: flex;
justify-content: center;
align-items: center;
border: 3px #ccc solid;
`

const MainContain = styled.div`
width: 70%;
// height: 50%;
 background-color: #FFFDE4;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 3px #ccc solid;


`

const HeaderContain = styled.div`
width: 50%;
// background-color: red;
text-align: center;
align-items: center;

`

const Header1 = styled.h2`
font-weight: lighter;
padding-top: 25px;
margin: 0;


`

const Header2 = styled.h2`
padding: 0;
margin: 0;
`

const HeaderPara = styled.p`

`

const CardDisplayHolder = styled.div`

width: 90%;
display: flex;
justify-content: space-around;
align-items: center;

`

    
const CardDisplayHolderInner = styled.div`

`

const CardDisplayHolderSide = styled.div`
`