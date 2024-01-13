import { Box, Button, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCart, getCart, getData, patchCart, postPayment } from '../Redux/Data/action';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { TextRotateUp } from '@mui/icons-material';


const OuterContainer = styled(Box)(({ theme }) => ({
   
    // border:"2px solid red",
  
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }));

   const InnerConataner = styled(Box)(({ theme }) => ({
   
    // border:"2px solid green",
    paddingTop:200,
    
  
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }));

   const MenuBox = styled(Box)(({ theme }) => ({
   display:"flex",
   position:"sticky",
   top:170,
   
    // border:"2px solid yellow",
  
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }));

   const CartItems = styled(Box)(({ theme }) => ({
    display:"grid",
    gridTemplateColumns:"repeat(6,1fr)",
    paddingBottom:100,
    width:"100%",
     border:"1px solid red",
   
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {
        width:620,
        gridTemplateColumns:"repeat(3,1fr)",
      },
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));


    const MapData = styled(Box)(({ theme }) => ({
       
        //  border:"2px solid blue",
         display:"grid",
         gridTemplateColumns:"repeat(6,1fr)",
       
          [theme.breakpoints.down("xl")]: {},
          [theme.breakpoints.down("lg")]: {},
          [theme.breakpoints.down("md")]: {
         gridTemplateColumns:"repeat(3,1fr)",

          },
          [theme.breakpoints.down("sm")]: {},
          [theme.breakpoints.down("xs")]: {},
        }));

   const FirstBox = styled(Typography)(({ theme }) => ({
    display:"flex",
     border:"1px solid black",
     width:"25%",
     justifyContent:"center",
     fontSize:12,
     background:"white",
   
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
       background:"white",
          [theme.breakpoints.down("xl")]: {},
          [theme.breakpoints.down("lg")]: {},
          [theme.breakpoints.down("md")]: {},
          [theme.breakpoints.down("sm")]: {},
          [theme.breakpoints.down("xs")]: {},
        }));

        const DataMap = styled(Box)(({ theme }) => ({
            border:"1px solid grey",
              [theme.breakpoints.down("xl")]: {},
              [theme.breakpoints.down("lg")]: {},
              [theme.breakpoints.down("md")]: {},
              [theme.breakpoints.down("sm")]: {},
              [theme.breakpoints.down("xs")]: {},
            }));

            const TextBox = styled(Typography)(({ theme }) => ({
             
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
                    width:"100%",
                      [theme.breakpoints.down("xl")]: {},
                      [theme.breakpoints.down("lg")]: {},
                      [theme.breakpoints.down("md")]: {},
                      [theme.breakpoints.down("sm")]: {},
                      [theme.breakpoints.down("xs")]: {},
                    }));

                    const ItemMap = styled(Box)(({ theme }) => ({
                      border:"1px solid black",
                      textAlign:'left',
                    
                    
                        [theme.breakpoints.down("xl")]: {},
                        [theme.breakpoints.down("lg")]: {},
                        [theme.breakpoints.down("md")]: {},
                        [theme.breakpoints.down("sm")]: {},
                        [theme.breakpoints.down("xs")]: {},
                      }));

                      const AmountBox = styled(Box)(({ theme }) => ({
                        border:"1px solid black",
                        width:"100%",
                        display:"flex",
                        justifyContent:"right",
                        gap:30,
                        background:"white",
                        position:"fixed",
                        bottom:0,
                          [theme.breakpoints.down("xl")]: {},
                          [theme.breakpoints.down("lg")]: {},
                          [theme.breakpoints.down("md")]: {},
                          [theme.breakpoints.down("sm")]: {},
                          [theme.breakpoints.down("xs")]: {},
                        }));

                        const TextAmount = styled(Typography)(({ theme }) => ({
                          fontSize:10,
                          color:'grey',
                          textAlign:"right",
                          
                            [theme.breakpoints.down("xl")]: {},
                            [theme.breakpoints.down("lg")]: {},
                            [theme.breakpoints.down("md")]: {},
                            [theme.breakpoints.down("sm")]: {},
                            [theme.breakpoints.down("xs")]: {},
                          }));

                          const TotalAmountBox = styled(Button)(({ theme }) => ({
                            fontSize:13,
                            borderRadius:0,
                            ":hover":{color:"white",background:"black"},
                            color:'white',
                            border:'1px solid black',
                            background:"black",
                            height:60,
                            width:180,
                              [theme.breakpoints.down("xl")]: {},
                              [theme.breakpoints.down("lg")]: {},
                              [theme.breakpoints.down("md")]: {},
                              [theme.breakpoints.down("sm")]: {},
                              [theme.breakpoints.down("xs")]: {},
                            }));

                            const Total = styled(Typography)(({ theme }) => ({
                              fontSize:10,
                              color:'grey',
                              // border:'1px solid black',
                                [theme.breakpoints.down("xl")]: {},
                                [theme.breakpoints.down("lg")]: {},
                                [theme.breakpoints.down("md")]: {},
                                [theme.breakpoints.down("sm")]: {},
                                [theme.breakpoints.down("xs")]: {},
                              }));
    
  


                      const Count = styled(Box)(({ theme }) => ({
                                                                           
                        display:"flex",
                        paddingLeft:10,
                  cursor:'pointer',
                      
                          [theme.breakpoints.down("xl")]: {},
                          [theme.breakpoints.down("lg")]: {},
                          [theme.breakpoints.down("md")]: {},
                          [theme.breakpoints.down("sm")]: {},
                          [theme.breakpoints.down("xs")]: {},
                        }));

                        const CountData = styled(Box)(({ theme }) => ({
                          border:"1px solid black",
                          display:"flex",
                          width:35,
                          height:35,
                          textAlign:'center',
                          justifyContent:"center",
                    
                        
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
    const cartData=useSelector((store)=>store.data.getCartData)


    const handleAdd=(id,quant)=>{
       let data={
        quant:quant+1
       }
       dispatch(patchCart(id,data))
    }

    const handleDelete=(id)=>{
       dispatch(deleteCart(id))
    }

    const handleReduce=(id,quant)=>{
        if(quant<2){
          quant=1
        }
        else{
          let data={
            quant:quant-1
          }
          dispatch(patchCart(id,data))
        }    
    }

    const handleContinue=()=>{
      dispatch(postPayment(...cartData))
      navigate("/payment")
    }


    const handleProduct=(id)=>{
      navigate(`/detail/${id}`)
    }

    console.log("cartData",cartData)
    console.log("maindata",mainData)

    let total=cartData?.reduce((acc,item,index)=>{
      return acc+item.price*item.quant
    },0)

    useEffect(()=>{
      dispatch(getCart())
    },[])

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
{cartData.map((item)=>(
  <ItemMap>

    <ImageBox sx={{width:200,}} as={"img"} src={item.images[0]}/>
    <TextBox sx={{padding:1,}}>{item.name}<CloseOutlinedIcon onClick={()=>handleDelete(item.id)}/></TextBox>
    <TextBox sx={{padding:1,}}>₹{item.price}.00</TextBox>
    <TextBox sx={{padding:1,}}>size</TextBox>
    <Count>
    <CountData onClick={()=>handleAdd(item.id,item.quant)}>+</CountData>
    <CountData>{item.quant}</CountData>
    <CountData onClick={()=>handleReduce(item.id,item.quant)}>-</CountData>
      
    </Count>

  </ItemMap>
))}

</CartItems>

<AmountBox>
  <TextAmount>
    <Total sx={{color:'black'}}>TOTAL ₹ {total}.00</Total>
    <Total>INCLUDING GST</Total>
    <Total>* EXCL SHIPPING COST</Total>
  </TextAmount>
  <TotalAmountBox onClick={handleContinue}>Continue</TotalAmountBox>
</AmountBox>

<TextBox sx={{textAlign:"left",padding:2,}}>YOU MAY ALSO LIKE</TextBox>

<MapData>

{mainData?.map((item)=>(
    <DataMap>

        <ImageBox onClick={()=>handleProduct(item.id)} sx={{width:207,}} as={"img"} src={item.images[0]} />
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