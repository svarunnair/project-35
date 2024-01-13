import { DELETE_CART_FAILURE, DELETE_CART_REQUIEST, DELETE_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUIEST, GET_CART_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, GET_DETAIL_FAILURE, GET_DETAIL_REQUIEST, GET_DETAIL_SUCCESS, PATCH_CART_FAILURE, PATCH_CART_REQUIEST, PATCH_CART_SUCCESS, POST_CART_FAILURE, POST_CART_REQUIEST, POST_CART_SUCCESS } from "./action"


const initState={
    isError:false,
    isLoading:false,
    getData:[],
    getDetails:[],
    postCartData:[],
    getCartData:[],
    patchCartData:[],
    deleteCartData:[],

}

export const dataReducer=(state=initState,action)=>{
    switch(action.type){
       case GET_DATA_REQUIEST:
        return({
            ...state,
            isLoading:true,
            isError:false,
        })
        case GET_DATA_SUCCESS:
            return({
                ...state,
                isLoading:false,
                isError:false,
                getData:action.payload
            })
            case GET_DATA_FAILURE:
                return({
                    ...state,
                    isLoading:false,
                    isError:true
                })


                case GET_DETAIL_REQUIEST:
        return({
            ...state,
            isLoading:true,
            isError:false,
        })
        case GET_DETAIL_SUCCESS:
            return({
                ...state,
                isLoading:false,
                isError:false,
                getDetails:action.payload
            })
            case GET_DETAIL_FAILURE:
                return({
                    ...state,
                    isLoading:false,
                    isError:true
                })

                case POST_CART_REQUIEST:
        return({
            ...state,
            isLoading:true,
            isError:false,
        })
        case POST_CART_SUCCESS:
            return({
                ...state,
                isLoading:false,
                isError:false,
                postCartData:action.payload
            })
            case POST_CART_FAILURE:
                return({
                    ...state,
                    isLoading:false,
                    isError:true
                })

                case GET_CART_REQUIEST:
        return({
            ...state,
            isLoading:true,
            isError:false,
        })
        case GET_CART_SUCCESS:
            return({
                ...state,
                isLoading:false,
                isError:false,
                getCartData:action.payload
            })
            case GET_CART_FAILURE:
                return({
                    ...state,
                    isLoading:false,
                    isError:true
                })
                
                case PATCH_CART_REQUIEST:
                    return({
                        ...state,
                        isLoading:true,
                        isError:false,
                    })
                    case PATCH_CART_SUCCESS:
                        return({
                            ...state,
                            isLoading:false,
                            isError:false,
                            patchCartData:action.payload
                        })
                        case PATCH_CART_FAILURE:
                            return({
                                ...state,
                                isLoading:false,
                                isError:true
                            })

                            case DELETE_CART_REQUIEST:
                    return({
                        ...state,
                        isLoading:true,
                        isError:false,
                    })
                    case DELETE_CART_SUCCESS:
                        return({
                            ...state,
                            isLoading:false,
                            isError:false,
                            deleteCartData:action.payload
                        })
                        case DELETE_CART_FAILURE:
                            return({
                                ...state,
                                isLoading:false,
                                isError:true
                            })
            



                default:
                    return({
                        ...state
                    })
    }
}