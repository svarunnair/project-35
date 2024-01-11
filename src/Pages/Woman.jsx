import { Box, Button, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Data/action";
import GridViewIcon from '@mui/icons-material/GridView';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ViewArrayIcon from '@mui/icons-material/ViewArray';

const OuterContainer = styled(Box)(({ theme }) => ({
//   border: "2px solid black",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({
//   border: "2px solid red",
  paddingTop:200,         
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingTop:100, 
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const FirstBox = styled(Box)(({ theme }) => ({
//   border: "2px solid black",
  display:"grid",
  gridTemplateColumns:"repeat(6,1fr)",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns:"repeat(2,1fr)",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DataMap = styled(Box)(({ theme }) => ({
  border: "1px solid black",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({
//   border: "2px solid blue",
  width:"100%",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextData = styled(Typography)(({ theme }) => ({
  fontSize:12,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const GridContainer = styled(Box)(({ theme }) => ({
//   border:'2px solid red',
  display:"flex",
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));

    const GridBox = styled(Box)(({ theme }) => ({
        // border:'2px solid red',
        display:"flex",
        justifyContent:"end",
            [theme.breakpoints.down("xl")]: {},
            [theme.breakpoints.down("lg")]: {},
            [theme.breakpoints.down("md")]: {},
            [theme.breakpoints.down("sm")]: {},
            [theme.breakpoints.down("xs")]: {},
          }));

  const FilterBox = styled(Box)(({ theme }) => ({
//    border:"2px solid red",
   display:"flex",
   gap:10,
   paddingBottom:10,
   paddingLeft:20,
   position:"sticky",
   top:150,

      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));

function Woman() {
  const mainData = useSelector((store) => store.data.getData);
  const dispatch = useDispatch();

  console.log("mainData", mainData);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <OuterContainer>

    
      <InnerContainer>

<GridContainer>
      <FilterBox>
<Button sx={{border:"1px solid black",borderRadius:0,height:37,color:"black"}}>VIEW ALL</Button>
<Button sx={{border:"1px solid black",borderRadius:0,height:37,color:"black"}}> COLOUR</Button>
<Button sx={{border:"1px solid black",borderRadius:0,height:37,color:"black"}}>PRICE</Button>
      </FilterBox>
{/* <GridBox>
    <ViewArrayIcon/>
    <ViewColumnIcon/>
    <GridViewIcon/>

</GridBox> */}

      </GridContainer>
        <FirstBox>
          {mainData?.map((item) => (
            <DataMap>
              <ImageBox as={"img"} src={item.images[0]}/>
              <TextData>{item.name}</TextData>
              <TextData>₹{item.price}.00</TextData>
            </DataMap>
          ))}
        </FirstBox>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Woman;
