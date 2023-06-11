
import axios from "axios"
import { Authenticate, cartArray, singlePRoduct, uploadProductsData } from "./action"


export const getUserAuthenticate = () => (dispatch) => {

    axios.get(`https://myjson.onrender.com/users`).then(({ data }) => {
        // console.log(data)
        dispatch(Authenticate(data))
    }).catch((error) => {
        console.log(error)
    })
}


export const getProduct = (id,prod) => (dispatch) => {
    axios.get(`https://myjson.onrender.com/${prod}/${id}`).then(({ data }) => {

        dispatch(singlePRoduct(data))
    }).catch((error) => {
        console.log(error)
    })

}
export const addtoCart = (product) => (dispatch) => {


    axios.post(`https://myjson.onrender.com/furnitureCart`, product).then(({ data }) => {
        dispatch(cartArray(data))

    }).catch((error) => {
        console.log(error)
    })
}

export const getCartArray = () => (dispatch) => {
    axios.get(`https://myjson.onrender.com/furnitureCart`).then(({ data }) => {
        // console.log(data)
        dispatch(cartArray(data))
    }).catch((error) => {
        console.log(error)
    })
}

export const removeFromCart = (id) => (dispatch) => {
    axios.delete(`https://myjson.onrender.com/furnitureCart/${id}`)
    dispatch(getCartArray());
}

export const getProductArray = (page_name) => (dispatch) => {
    axios.get(`https://myjson.onrender.com/${page_name}`).then(({ data }) => {
        //  console.log(data)
        dispatch(uploadProductsData(data))
    }).catch((error) => {
        console.log(error);
    })
}

export const getSortArray = (sort, page_name) => (dispatch) => {

    axios.get(`https://myjson.onrender.com/${page_name}?_sort=price&_order=${sort}`).then(({ data }) => {
        dispatch(uploadProductsData(data))
    }).catch((error) => {
        console.log(error);
    })
}



export const getFilterArray = (cat, manu, rat, page) => (dispatch) => {
    console.log(cat, manu, rat);

    let url = `https://myjson.onrender.com/${page}`;

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
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}



