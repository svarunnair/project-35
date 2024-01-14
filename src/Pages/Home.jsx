import {
  Box,
  Button,
  Input,
  OutlinedInput,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CoverImages from "../Components/CoverImages";
import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import PublicRoutes from "../Routes/PublicRoutes";
import { useSelector } from "react-redux";


const OuterContainer = styled(Box)(({ theme }) => ({
  // border: "2px solid green",
  position:"sticky",
  top:0,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  // border: "2px solid green",
  position: "absolute",
  paddingBottom:10,
  // ":hover":{background:'rgba(255,255,255,0.7)'},
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingBottom:0,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ZaraIcon = styled(Box)(({ theme }) => ({
  // border: "2px solid yellow",
  width: "25%",
  color: "black",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InputBox = styled(Box)(({ theme }) => ({
  // border: "2px solid yellow",
  padding: 25,
  paddingLeft: 170,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    padding: 0,
    paddingLeft: 0,
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TopBox = styled(Box)(({ theme }) => ({
  // border:"2px solid yellow",
  display: "flex",
  gap: 30,
  paddingLeft: 30,
  paddingTop: 20,
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({
  // border: "2px solid yellow",
  fontSize: 12,
  fontWeight: 200,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MenuBox = styled(Box)(({ theme }) => ({
  // border: "2px solid red",
  display: "flex",
  gap: 15,
  padding: 15,
  paddingLeft: 50,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const FirstBox = styled(Box)(({ theme }) => ({
  // border: "2px solid red",
  display: "flex",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const SecondBox = styled(Box)(({ theme }) => ({
  // border: "2px solid red",
  display: "flex",
  justifyContent: "left",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextButton = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  cursor:'pointer',
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BottomInput = styled(Typography)(({ theme }) => ({
  border: "1px solid black",
  position: "absolute",
  display: "none",
  bottom: 140,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    left: 15,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxOne = styled(Typography)(({ theme }) => ({
  // border:"2px solid red",
  fontSize: 12,
  display: "flex",
  gap: 30,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const SideBarBox = styled(Box)(({ theme }) => ({
  border:"1px solid black",
  width: 400,
  height: 450,
  position: "absolute",
  background: "white",
  left: 40,
  top: 10,
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageIcon = styled(Box)(({ theme }) => ({
  width: "65%",
  justifyContent: "left",
  padding: 14,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DivOne = styled(Box)(({ theme }) => ({
  display: "flex",
  border: "1px solid black",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DivTwo = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MenuListDiv = styled(Box)(({ theme }) => ({
  // border:"2px solid red",
  display: "flex",
  justifyContent: "end",
  padding: 20,
  gap: 10,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ButtonBox = styled(Typography)(({ theme }) => ({
  // border:"1px solid red",
  fontSize: 13,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ProductList = styled(Box)(({ theme }) => ({
  // border:"1px solid red",
  display: "flex",
  justifyContent: "end",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

function Home() {
  const navigate = useNavigate();
  const [show,setShow]=useState(false)
  const path=useLocation()
  const cartData=useSelector((store)=>store.data.getCartData)



  console.log("cartLength",cartData.length)

  const handleMenu=()=>{
    if(show===false){
      setShow(true)
      localStorage.setItem('hide',true)
    }
    if(show===true){
      localStorage.setItem('hide',null)
      setShow(false)
    }
  }


  const handleCart=()=>{
    navigate('/cart')
  }
  const handleSearch=()=>{
    navigate('/search')
  }

  const handleMen = () => {
    navigate("/men");
    setShow(false)
  };
  const handleWoman = () => {
    navigate("/women");
    setShow(false)
  };
  const handleKids = () => {
    navigate("/kids");
    setShow(false)
  };
  const handleBeauty = () => {
    navigate("/beauty");
    setShow(false)
  };

  const handleLogin=()=>{
    navigate('/signin')
  }
  const handleHelp=()=>{
    navigate('/help')
  }
  const handleZara=()=>{
    navigate("/")
  }

  return (
    <OuterContainer>
      <InnerDiv>
        <FirstBox sx={{cursor:"pointer"}}>
          {show?<CloseIcon onClick={handleMenu} sx={{ padding: 1 }} />:<DragHandleIcon onClick={handleMenu}/>}
          <ZaraIcon onClick={handleZara}
            sx={{ padding: 1 ,cursor:"pointer"}}
            as={"img"}
            src="https://static.zara.net/photos///contents/cm/assets/logos/default-light-yellow_0.svg?ts=166922561481"
          />
          <InputBox>
            {path.pathname!=="/help"&&<OutlinedInput onClick={handleSearch}
              sx={{
                cursor:"pointer",
                height: 35,
                width: 400,
                background: "white",
                fontSize: 13,
                borderRadius: 0,
              }}
              placeholder="SEARCH"
            />}
          </InputBox>

          <TopBox>
            <BoxOne>
              <TextBox onClick={handleLogin}>LOGIN</TextBox>
              <TextBox onClick={handleHelp}>HELP</TextBox>
            </BoxOne>
            <TextBox onClick={handleCart}>SHOPING BAG({cartData.length})</TextBox>
          </TopBox>
        </FirstBox>
        
       {path.pathname==="/"&&<SecondBox>
          <MenuBox onClick={handleMenu}>
            <TextButton>WOMEN</TextButton>
            <TextButton>MEN</TextButton>
            <TextButton>KIDS</TextButton>
            <TextButton>BEAUTY</TextButton>
          </MenuBox>
        </SecondBox>}
      </InnerDiv>

      {show&&<SideBarBox sx={{bgcolor:'white'}} >
        <DivOne sx={{bgcolor:'white'}}>
          <ImageIcon
            as={"img"}
            src="data:image/png;base64,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"
          />
        </DivOne>
        <DivTwo >
          <MenuListDiv>
            <ButtonBox onClick={handleWoman}>WOMEN</ButtonBox>
            <ButtonBox onClick={handleMen}>MEN</ButtonBox>
            <ButtonBox onClick={handleKids}>KIDS</ButtonBox>
            <ButtonBox onClick={handleBeauty}>BEAUTY</ButtonBox>
          </MenuListDiv>

          <ProductList>
            <Button>Collections</Button>
          </ProductList>
        </DivTwo>
      </SideBarBox>}

      {path.pathname==='/'&&<CoverImages sx={{ position: "relative" }} />}

      {/* <PublicRoutes/> */}

      <BottomInput>
        <OutlinedInput sx={{ height: 20, width: 330,color:"grey" }} placeholder="SEARCH" />
      </BottomInput>
    </OuterContainer>
  );
}

export default Home;
