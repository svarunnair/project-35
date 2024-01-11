import { Box, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getData, getDetail } from '../Redux/Data/action';

const OuterContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerContainer = styled(Box)(({ theme }) => ({
    border:"2px solid red",
    display:"flex",
    paddingTop:250,
    paddingLeft:30,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const FirstBox = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    border:"1px solid black",
    width:230,
    height:230,
    justifyContent:"center",
    textAlign:"left",
    paddingLeft:20,
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const SecondBox = styled(Box)(({ theme }) => ({
    display:"flex",
    paddingLeft:230,
    // border:"2px solid green",
    justifyContent:"center",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ThirdBox = styled(Box)(({ theme }) => ({
    display:"flex",
    height:520,
    // border:"2px solid blue",
    paddingLeft:150,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TopBox = styled(Box)(({ theme }) => ({
    display:"flex",
  width:280,
  flexDirection:"column",
  textAlign:"left",
  padding:15,
  paddingLeft:20,
  
    border:"1px solid black",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextData = styled(Typography)(({ theme }) => ({
    color:"grey",
    fontSize:10,
    padding:8,
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImageBox = styled(Box)(({ theme }) => ({
   
    width:250,
    height:400,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextDetails = styled(Typography)(({ theme }) => ({
    color:"grey",
    fontSize:8,
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function Detail() {

    const params=useParams()
    const mainData=useSelector((store)=>store.data.getData)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const detailData=useSelector((store)=>store.data.getDetails)


    console.log("mainData",mainData)
    console.log("params",params)
    console.log("detail",detailData)

    useEffect(()=>{
      dispatch(getDetail(params.id))
    },[])

  return (
    <OuterContainer>

        <InnerContainer>

            <FirstBox>
                <TextData>COMPOSITION, CARE & ORIGIN</TextData>
                <TextData>COMPOSITION</TextData>
                <TextData>We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our products. To assess compliance, we have developed a </TextData>
            </FirstBox>


            <SecondBox>
                <ImageBox as={"img"} src={detailData?.images[0]}/>
            </SecondBox>


            <ThirdBox>

              <TopBox>
                <TextDetails>FEW ITEMS LEFT</TextDetails>
                <TextDetails sx={{fontSize:11,textTransform:"uppercase"}} >{detailData?.product}</TextDetails>
                <TextDetails sx={{fontSize:10,paddingTop:2}} >₹{detailData.price}.00</TextDetails>
                <TextDetails sx={{fontSize:8,paddingTop:2}}>MRP incl. of all taxes</TextDetails>
                <TextDetails sx={{fontSize:11,paddingTop:2}}>{detailData?.name}</TextDetails>

                <TextDetails sx={{fontSize:10,paddingTop:2}} >Round neck T-shirt made of a cotton blend with short sleeves.</TextDetails>


              </TopBox>

            </ThirdBox>


        </InnerContainer>


    </OuterContainer>
  )
}

export default Detail