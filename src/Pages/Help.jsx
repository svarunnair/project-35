import { Box, Button, OutlinedInput, Typography, styled } from "@mui/material";
import React from "react";

const OuterContainer = styled(Box)(({ theme }) => ({
  //   border: "2px solid black",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  //   border: "2px solid black",
  paddingTop: 180,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingTop: 80,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ContainerDiv = styled(Box)(({ theme }) => ({
    //   border: "2px solid black",
      display:"grid",
      gridTemplateColumns:"repeat(4,1fr)",
   gap:20,
   padding:20,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns:"repeat(2,1fr)",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ThirdBox = styled(Box)(({ theme }) => ({
    //   border: "2px solid blue",
    paddingLeft:20,
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

const ImageBox = styled(Box)(({ theme }) => ({
  //   border: "2px solid green",
  width: "100%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const SecondBox = styled(Box)(({ theme }) => ({
  //   border: "2px solid green",
  padding:40,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  //   border: "2px solid green",

  display: "flex",
  gap: 30,
  paddingTop:20,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    gap: 10,
  paddingTop:20,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({
  //   border: "2px solid green",
  textAlign:"left",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const FirstBox = styled(Box)(({ theme }) => ({
  //   border: "2px solid green",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


const DataBox = styled(Box)(({ theme }) => ({
      border: "1px solid black",    
      width:250,
      height:200,
    display:"flex",
    flexDirection:"column",
    gap:3,
      textAlign:"left",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
        
      width:150,
      height:150,
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  
const InputBox = styled(Box)(({ theme }) => ({
  // border: "2px solid blue",
  position: "absolute",
  padding: 50,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DataText = styled(Typography)(({ theme }) => ({
  color:"grey",
  fontSize:10,
  paddingLeft:30,
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DataTextTitle = styled(Typography)(({ theme }) => ({
 
  padding:30,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

function Help() {
  return (
    <OuterContainer>
      <InnerContainer>
        <FirstBox>
          <InputBox>
            <OutlinedInput
              sx={{ width:{ xs: 300, sm: 300, md: 700 },height:{ xs: 10, sm: 10, md: 40 }
              , background: "white", height: 40 }}
              placeholder="HOW CAN WE HELP YOU"
            />
          </InputBox>
          <ImageBox
            as={"img"}
            src="https://static.zara.net/photos///contents/mkt/spots/ss24-help-customer/subhome-xmedia-02-north//w/1895/IMAGE-landscape-web-43e46442-a65e-499e-a1ea-4552afc12701-default_0.jpg?ts=1704876408263"
          />
        </FirstBox>

        <SecondBox>
          <TextBox>FREQUENTLY ASKED QUESTIONS</TextBox>

          <ButtonBox>
            <Button
              sx={{
                border: "1px solid black",
                color: "grey",
                fontSize: 9,
                borderRadius: 0,
              }}
            >
              ITEMS AVAILABLE
            </Button>
            <Button
              sx={{
                border: "1px solid black",
                color: "grey",
                fontSize: 9,
                borderRadius: 0,
              }}
            >
              HOW TO RETURN
            </Button>
            <Button
              sx={{
                border: "1px solid black",
                color: "grey",
                fontSize: 9,
                borderRadius: 0,
              }}
            >
              ORDER STATUS
            </Button>
            <Button
              sx={{
                border: "1px solid black",
                color: "grey",
                fontSize: 9,
                borderRadius: 0,
              }}
            >
              {" "}
              REFUNDS
            </Button>
          </ButtonBox>
        </SecondBox>

        <ThirdBox>
        <TextBox sx={{paddingLeft:3,}}>ALL HELP TOPICS</TextBox>

        <ContainerDiv>

            <DataBox>
              <DataTextTitle>MY ZARA ACCOUNT</DataTextTitle>
                <DataText>REGISTRATION AND LOG IN</DataText>
                <DataText>MANAGING MY PROFILE</DataText>
                <DataText>MY FAVOURITES</DataText>
            </DataBox>
            <DataBox>
            <DataTextTitle>ITEMS AND SIZES</DataTextTitle>
                <DataText>ITEMS AVAILABILITY</DataText>
                <DataText>WHAT’S MY SIZE?</DataText>
                <DataText>COMPOSITION AND CARE</DataText>
            </DataBox>
            <DataBox>
            <DataTextTitle>GIFT OPTIONS</DataTextTitle>
                <DataText>GIFT CARD</DataText>
                
            </DataBox>
            <DataBox>
            <DataTextTitle>SHIPPING</DataTextTitle>
                <DataText>SHIPPING METHODS, TIMES AND COSTS</DataText>
                <DataText>ORDERS IN SEVERAL SHIPMENTS</DataText>
                <DataText>WHERE DO WE SHIP?</DataText>
            </DataBox>
            <DataBox>
            <DataTextTitle>PAYMENTS AND INVOICES</DataTextTitle>
                <DataText>PAYMENT METHODS</DataText>
                <DataText>PAYMENT SECURITY</DataText>
                <DataText>INVOICES</DataText>
            </DataBox>
            <DataBox>
            <DataTextTitle>MY PURCHASES</DataTextTitle>
                <DataText>ONLINE SHOPPING</DataText>
                <DataText>ORDER STATUS</DataText>
                <DataText>CHANGE OR CANCEL AN ONLINE ORDER</DataText>
            </DataBox>
            <DataBox>
            <DataTextTitle>EXCHANGES, RETURNS AND REFUNDS</DataTextTitle>
                <DataText>HOW TO RETURN</DataText>
                <DataText>HOW TO EXCHANGE</DataText>
                <DataText>REFUNDS</DataText>
            </DataBox>
            <DataBox>
            <DataTextTitle>ZARA EXPERIENCES</DataTextTitle>
                <DataText>OUR USED CLOTHING COLLECTION PROGRAMME</DataText>
                <DataText>STORE MODE IN THE APP</DataText>
                <DataText>NEWSLETTER</DataText>
            </DataBox>




        </ContainerDiv>

        </ThirdBox>



      </InnerContainer>
    </OuterContainer>
  );
}

export default Help;
