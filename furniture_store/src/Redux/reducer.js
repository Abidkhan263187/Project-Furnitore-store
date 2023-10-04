
import { AUTH, CARTARRAY, CART_TOTAL, CITY_NAME, CLIENT_NAME, LATITUDE, LONGITUDE, PAYMENT_INFO, PERMIT, SINGLE, UPLOAD_PROD_DATA, USER_INFO } from "./actiontypes";

const inituserArr = {
    userArr: [],
    access: false,
    single: {},
    cart: [],
    display: false,
    prod_Array: [],
    userInfo: {},
    paymentInfo: {},
    carttotal: '',
    name: '',
    longi: '',
    lati: '',
    city: '',


}

export const reducer = (state = inituserArr, action) => {

    switch (action.type) {
        case AUTH: {
            return { ...state, userArr: action.payload }
        }
        case CLIENT_NAME: {
            return { ...state, name: action.payload }
        }
        case PERMIT: {
            sessionStorage.setItem('Fur_user', JSON.stringify(action.payload))
        }
        case SINGLE: {
            return { ...state, single: action.payload }
        }
        case CARTARRAY: {
            return { ...state, cart: action.payload }
        }
        case LATITUDE:{
            return {...state,lati:action.payload}
          }
          case LONGITUDE:{
            return {...state,longi:action.payload}
          }
          case CITY_NAME:{
            return {...state,city:action.payload}
          }

        case UPLOAD_PROD_DATA: {
            return { ...state, prod_Array: action.payload }
        }
        case USER_INFO: {
            return { ...state, userInfo: action.payload }
        }
        case PAYMENT_INFO: {
            return { ...state, paymentInfo: action.payload }
        }
        case CART_TOTAL: {
            return { ...state, carttotal: action.payload }
        }
        default: return state;
    }
}

