import { Box, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getData } from '../Redux/Data/action';

const OuterContainer = styled(Box)(({ theme }) => ({
   
    border:"2px solid red",
  
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }));

   const InnerConataner = styled(Box)(({ theme }) => ({
   
    border:"2px solid green",
    paddingTop:200,
    
  
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }));

   const MenuBox = styled(Box)(({ theme }) => ({
   display:"flex",
    border:"2px solid yellow",
  
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }));

   const CartItems = styled(Box)(({ theme }) => ({
    display:"flex",
     border:"2px solid green",
   
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));


    const MapData = styled(Box)(({ theme }) => ({
       
         border:"2px solid blue",
       
          [theme.breakpoints.down("xl")]: {},
          [theme.breakpoints.down("lg")]: {},
          [theme.breakpoints.down("md")]: {},
          [theme.breakpoints.down("sm")]: {},
          [theme.breakpoints.down("xs")]: {},
        }));

   const FirstBox = styled(Typography)(({ theme }) => ({
    display:"flex",
     border:"1px solid black",
     width:"25%",
     justifyContent:"center",
     fontSize:12,
   
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));

    const SecondBox = styled(Typography)(({ theme }) => ({
        display:"flex",
         border:"1px solid black",
         width:"25%",
       justifyContent:"center",
       fontSize:12,
          [theme.breakpoints.down("xl")]: {},
          [theme.breakpoints.down("lg")]: {},
          [theme.breakpoints.down("md")]: {},
          [theme.breakpoints.down("sm")]: {},
          [theme.breakpoints.down("xs")]: {},
        }));

        const DataMap = styled(Box)(({ theme }) => ({
            border:"1px solid black",
              [theme.breakpoints.down("xl")]: {},
              [theme.breakpoints.down("lg")]: {},
              [theme.breakpoints.down("md")]: {},
              [theme.breakpoints.down("sm")]: {},
              [theme.breakpoints.down("xs")]: {},
            }));

            const TextBox = styled(Typography)(({ theme }) => ({
                border:"1px solid black",
                color:"grey",
                fontSize:10,
                  [theme.breakpoints.down("xl")]: {},
                  [theme.breakpoints.down("lg")]: {},
                  [theme.breakpoints.down("md")]: {},
                  [theme.breakpoints.down("sm")]: {},
                  [theme.breakpoints.down("xs")]: {},
                }));
        

                const ImageBox = styled(Box)(({ theme }) => ({
                    border:"1px solid black",
                      [theme.breakpoints.down("xl")]: {},
                      [theme.breakpoints.down("lg")]: {},
                      [theme.breakpoints.down("md")]: {},
                      [theme.breakpoints.down("sm")]: {},
                      [theme.breakpoints.down("xs")]: {},
                    }));
            
    



function Cart() {

    const mainData=useSelector((store)=>store.data.getData)
    const dispatch=useDispatch()
    const navigate=useNavigate()



    console.log("maindata",mainData)

useEffect(()=>{
   dispatch(getData())
},[])

  return (
    <OuterContainer>
        <InnerConataner>

<MenuBox>
    <FirstBox>SHOPPING BAG</FirstBox>
    <SecondBox>FAVOURITES<BookmarkBorderOutlinedIcon sx={{fontSize:15,color:"grey",paddingLeft:1}}/></SecondBox>
</MenuBox>


<CartItems>
map

</CartItems>


<MapData>

{mainData?.map((item)=>(
    <DataMap>

        <ImageBox as={"img"} src={item.images[0]} />
        <TextBox>{item.name}</TextBox>
        <TextBox>{item.price}</TextBox>


    </DataMap>
))}



</MapData>


        </InnerConataner>
    </OuterContainer>
  )
}

export default Cart