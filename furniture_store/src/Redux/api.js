
import axios from "axios"
import { Authenticate, cartArray, clientName, singlePRoduct, uploadProductsData } from "./action"


export const getUserAuthenticate = () => (dispatch) => {

    axios.get(`${process.env.REACT_APP_URL}/users`).then(({ data }) => {
        console.log(data)
        dispatch(Authenticate(data))
    }).catch((error) => {
        console.log(error)
    })
}


export const getProduct = (id,prod) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_URL}/${prod}/${id}`).then(({ data }) => {

        dispatch(singlePRoduct(data))
    }).catch((error) => {
        console.log(error)
    })

}
export const addtoCart = (product) => (dispatch) => {


    axios.post(`${process.env.REACT_APP_URL}/furnitureCart`, product).then(({ data }) => {
        dispatch(cartArray(data))

    }).catch((error) => {
        console.log(error)
    })
}

export const getCartArray = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_URL}/furnitureCart`).then(({ data }) => {
        // console.log(data)
        dispatch(cartArray(data))
    }).catch((error) => {
        console.log(error)
    })
}

export const removeFromCart = (id) => (dispatch) => {
    axios.delete(`${process.env.REACT_APP_URL}/furnitureCart/${id}`)
    dispatch(getCartArray());
}

export const getProductArray = (page_name) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_URL}/${page_name}`).then(({ data }) => {
        //  console.log(data)
        dispatch(uploadProductsData(data))
    }).catch((error) => {
        console.log(error);
    })
}

export const getSortArray = (sort, page_name) => (dispatch) => {

    axios.get(`${process.env.REACT_APP_URL}/${page_name}?_sort=price&_order=${sort}`).then(({ data }) => {
        dispatch(uploadProductsData(data))
    }).catch((error) => {
        console.log(error);
    })
}



export const getFilterArray = (cat, manu, rat, page) => (dispatch) => {
  

    let url = `${process.env.REACT_APP_URL}/${page}`;

    if (cat) {
        url += `?cat=${cat}`;
    }

    if (manu) {
        url += `${cat ? '&' : '?'}manufacturer=${manu}`;
    }

    if (rat) {
        url += `${cat || manu ? '&' : '?'}rating_gte=${rat}`;
    }

    axios
        .get(url)
        .then(({ data }) => {
            dispatch(uploadProductsData(data));
         
        })
        .catch((error) => {
            console.log(error);
        });
}



