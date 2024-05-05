import axios from "axios";

const SERVER_URL = "http://192.168.1.33:75/";
const SERVER_URL2 = "http://192.168.1.33:70/";

const instance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json"
  },
});


const instancePro = axios.create({
  baseURL: SERVER_URL2,
  headers: {
    "Content-Type": "application/json",
  },
});

instancePro.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});



// export const getArrayList = (data, customHeader="ggggggghgh" ) => {
//     return instance.post("products/add", data, { headers: { 'My-Custom-Headerr': customHeader } });
//   };


export const getLogin = (data) => {
  return instance.post("Account/login", data);
};


export const getAllProducts = (data) => {

  return instancePro.post("api/v1/boxsize/getlist", data);
};


export const deleteProduct = (id) => {

  return instancePro.delete(`api/v1/boxsize/${id}`);
};

export const createProduct = (data) => {

  return instancePro.post(`api/v1/boxsize`,data);
};

export const updateProduct = (data) => {

  console.log(data)
  console.log(data)

  return instancePro.put(`api/v1/boxsize`,data);
};