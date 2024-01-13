import { Box, Typography, styled } from '@mui/material';
import React from 'react'


const OuterContainer = styled(Box)(({ theme }) => ({
    // border:"1px solid yellow",
     
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));

    const InnerContainer = styled(Box)(({ theme }) => ({
        border:"1px solid yellow",
        paddingTop:200,
        
          [theme.breakpoints.down("xl")]: {},
          [theme.breakpoints.down("lg")]: {},
          [theme.breakpoints.down("md")]: {},
          [theme.breakpoints.down("sm")]: {},
          [theme.breakpoints.down("xs")]: {},
        }));

        const TextBox = styled(Typography)(({ theme }) => ({
            // border:"1px solid yellow",
            textAlign:"left",
            
              [theme.breakpoints.down("xl")]: {},
              [theme.breakpoints.down("lg")]: {},
              [theme.breakpoints.down("md")]: {},
              [theme.breakpoints.down("sm")]: {},
              [theme.breakpoints.down("xs")]: {},
            }));

            const BoxDiv = styled(Box)(({ theme }) => ({
                border:"2px solid red",
                
                  [theme.breakpoints.down("xl")]: {},
                  [theme.breakpoints.down("lg")]: {},
                  [theme.breakpoints.down("md")]: {},
                  [theme.breakpoints.down("sm")]: {},
                  [theme.breakpoints.down("xs")]: {},
                }));

            

function Payment() {
  return (
    <OuterContainer>

        <InnerContainer>

            <TextBox>WHERE DO YOU WANT TO RECEIVE YOUR ORDER?</TextBox>

            <BoxDiv></BoxDiv>

        </InnerContainer>


    </OuterContainer>
  )
}

export default Payment