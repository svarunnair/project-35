import { PhoneIphoneOutlined } from '@mui/icons-material';
import { Box, Button, Input, Typography, styled } from '@mui/material';
import { PhoneAuthCredential, PhoneAuthProvider, RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber } from 'firebase/auth';
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';


const OuterDiv = styled(Box)(({ theme }) => ({
    border:"1px solid red",
      
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));
    const InnerDiv = styled(Box)(({ theme }) => ({
        border:"1px solid green",
        paddingTop:200,
        paddingBottom:200,
          
          [theme.breakpoints.down("xl")]: {},
          [theme.breakpoints.down("lg")]: {},
          [theme.breakpoints.down("md")]: {},
          [theme.breakpoints.down("sm")]: {},
          [theme.breakpoints.down("xs")]: {},
        }));

        const TextBox = styled(Typography)(({ theme }) => ({
            // border:"1px solid green",
              
              [theme.breakpoints.down("xl")]: {},
              [theme.breakpoints.down("lg")]: {},
              [theme.breakpoints.down("md")]: {},
              [theme.breakpoints.down("sm")]: {},
              [theme.breakpoints.down("xs")]: {},
            }));

function MobileOtp() {

    const [phone,setPhone]=useState()
    const [confirmationResult,setConfirmationResult]=useState('')
    const [otp,SetOtp]=useState('')
    const navigate=useNavigate()


    const handleSend=async()=>{
        try{
            const recaptcha=new RecaptchaVerifier(auth,"recaptcha",{})
            const confirmation=await signInWithPhoneNumber(auth,phone,recaptcha)
            setConfirmationResult(confirmation)
            console.log("confirmation",confirmation)
        }
        catch(err){
            console.log(err)
        }
    }

    console.log("confirmationResult",confirmationResult)
    const handleInput=(e)=>{
        let value=e.target.value
        SetOtp(value)
    }

    const handleVerify=async()=>{
        try{
            const credential=PhoneAuthProvider.credential(confirmationResult.verificationId,otp)
            await signInWithCredential(auth,credential);
            console.log('user is signed in',credential,auth)
            console.log("tokennnnnnn",credential.params.verificationId)
            localStorage.setItem("OTP token",credential.params.verificationId)
        }
        catch(err){
            console.error(err)
        }
        alert('OTP verified successfully')
        navigate(-1)
       
    }




  return (
    <OuterDiv>

        <InnerDiv>

            <TextBox>Enter your valid  Mobile number</TextBox>
<PhoneInput country={"ind"} value={phone} onChange={(phone)=>setPhone('+'+phone)}/>

<Button onClick={handleSend}>Sent OTP</Button>
<div id='recaptcha'></div>
<Input onChange={handleInput} placeholder='input OTP' />
<Button onClick={handleVerify}>Verify</Button>
  
        </InnerDiv>



    </OuterDiv>
  )
}

export default MobileOtp