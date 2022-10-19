import axios from "axios";

axios.interceptors.request.use(function (config) {

    const { origin } = new URL(config.url)
    const allowedOrigins = ["http://localhost:5243"];
    const token = localStorage.getItem("token");
    if (allowedOrigins.includes(origin)) {
        config.headers.authorization = `Bearer ${token}`;
    }

    return config;
}, function (error) {
    return Promise.reject(error);
});


export const fetchProductList = async ({ pageParam = 0 }) => {
    const { data } = await axios.get(`http://localhost:5243/api/products?pageNumber=${pageParam}`);

    return data;
};

export const fetchProductListAdmin = async ({ pageSize=30 }) => {
    const { data } = await axios.get(`http://localhost:5243/api/products?pageSize=${pageSize}`);

    return data;
};

export const fetchProduct = async (productId) => {
    const { data } = await axios.get(`http://localhost:5243/api/products/${productId}`)

    return data;
};

export const fetchRegister = async (input) => {
    const { data } = await axios.post("http://localhost:5243/api/auth/Register", input);

    return data;
};

export const fetchLogin = async (input) => {
    const { data } = await axios.post("http://localhost:5243/api/auth", input);

    return data;
};

export const fetchMe = async () => {
    const { data } = await axios.get("http://localhost:5243/api/auth");

    return data;
};

export const updateProduct=async(input)=>{
    await axios.put("http://localhost:5243/api/Products",input);
}

export const deleteProduct=async(productId)=>{
    await axios.delete(`http://localhost:5243/api/products/${productId}`);
}

export const addProduct =async(input)=>{
   await axios.post("http://localhost:5243/api/Products",input);
}

// export const addToBasketApi = async (productId) => {
//     await axios.post(`http://localhost:5243/api/baskets/${productId}`);
// };

// export const getBasketApi = async () => {
//     const { data } = await axios.get("http://localhost:5243/api/baskets");
//     return data;
// };

