import React,{useEffect} from "react";
import axios from "axios";
export default function useFetchingData(server,setData, dep=[]){
    useEffect(() => {
        axios.get(server)
            .then((res) => {console.log(res);setData(res.data)})
            .catch((error) => console.error("Ошибка:", error.message));
    }, [server, ...dep]);
}