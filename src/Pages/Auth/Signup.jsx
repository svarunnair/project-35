import { CheckBox } from '@mui/icons-material';
import { Box, Button, Checkbox, Input, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postSignup } from '../../Redux/Auth/authAction';
import { useNavigate } from 'react-router-dom';

const OuterContainer = styled(Box)(({ theme }) => ({

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerContainer = styled(Box)(({ theme }) => ({
    // border:"1px solid green",
    paddingTop:200,
    textAlign:'left',
    width:"30%",
    paddingLeft:30,
  display:'flex',
    flexDirection:"column",
    gap:50,
    
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));

    const TextDetails = styled(Typography)(({ theme }) => ({
      // border:"1px solid red",
        [theme.breakpoints.down("xl")]: {},
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
      }));

      const FirstBox = styled(Box)(({ theme }) => ({
        // border:"1px solid yellow",
        display:"flex",
        flexDirection:"column",
          [theme.breakpoints.down("xl")]: {},
          [theme.breakpoints.down("lg")]: {},
          [theme.breakpoints.down("md")]: {},
          [theme.breakpoints.down("sm")]: {},
          [theme.breakpoints.down("xs")]: {},
        }));

        const TextOne = styled(Typography)(({ theme }) => ({
          // border:"1px solid yellow",
          fontSize:11,
          color:"grey",
          paddingTop:20,
            [theme.breakpoints.down("xl")]: {},
            [theme.breakpoints.down("lg")]: {},
            [theme.breakpoints.down("md")]: {},
            [theme.breakpoints.down("sm")]: {},
            [theme.breakpoints.down("xs")]: {},
          }));


          const SecondBox = styled(Box)(({ theme }) => ({
            // border:"1px solid yellow",
              display:"flex",
              [theme.breakpoints.down("xl")]: {},
              [theme.breakpoints.down("lg")]: {},
              [theme.breakpoints.down("md")]: {},
              [theme.breakpoints.down("sm")]: {},
              [theme.breakpoints.down("xs")]: {},
            }));

            const ThirdBox = styled(Box)(({ theme }) => ({
              // border:"1px solid yellow",
                display:"flex",
                [theme.breakpoints.down("xl")]: {},
                [theme.breakpoints.down("lg")]: {},
                [theme.breakpoints.down("md")]: {},
                [theme.breakpoints.down("sm")]: {},
                [theme.breakpoints.down("xs")]: {},
              }));
    
  


function Signup() {
  const dispatch=useDispatch()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const [telephone,setTelephone]=useState('')
  const navigate=useNavigate()


  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
  }
  const handlePassword=(e)=>{
    let value=e.target.value 
    setPassword(value)
  }
  const handleName=(e)=>{
    let value=e.target.value 
    setName(value)
  }
  const handleTelephone=(e)=>{
    let value=e.target.value 
    setTelephone(value)
  }
const handleCreate=()=>{
  if(email===""||password===""||name===""||telephone===""){
    alert("please fill the details")
  }
  else{
    let data={
      email:email,
      password:password,
      name:name,
      telephone:telephone
    }
    dispatch(postSignup(data))
alert("Account created successfully")
navigate('/signin')
  }
  
  
}
  const [checked, setChecked] = React.useState(true);


  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <TextDetails>PERSONAL DETAILS</TextDetails>

        <FirstBox>

          <Input onChange={handleEmail} sx={{paddingTop:4,fontSize:12}} placeholder='E-MAIL'/>
          <Input onChange={handlePassword} sx={{paddingTop:4,fontSize:12}} placeholder='PASSWORD'/>
          <Input onChange={handleName} sx={{paddingTop:4,fontSize:12}} placeholder='NAME'/>
          <Input onChange={handleTelephone} sx={{paddingTop:4,fontSize:12}} placeholder='TELEPHONE'/>
          <TextOne>We will send you an SMS to verify your phone number</TextOne>

          </FirstBox>


<SecondBox>
          <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /><TextOne >I wish to receive Zara news on my e-mail</TextOne>
</SecondBox>

<ThirdBox>
          <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /><TextOne >I accept the privacy statement</TextOne>
</ThirdBox>
<Button onClick={handleCreate} sx={{border:"1px solid black",color:"grey",width:400,borderRadius:0}}>CREATE ACCOUNT</Button>

       
      </InnerContainer>

    </OuterContainer>
  )
}

export default Signup