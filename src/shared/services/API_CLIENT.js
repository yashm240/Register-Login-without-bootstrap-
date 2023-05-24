import axios from 'axios';

export const API_CLIENT = {
    get(URL,data){
        return axios.get(URL,{timeout:7000});
    },
    post(URL,data){
        console.log(data);
        return axios.post(URL,JSON.stringify(data), {
            headers: {
              "Content-Type": "application/json",
            },
          });
    },
}