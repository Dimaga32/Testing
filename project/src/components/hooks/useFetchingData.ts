import React, {useEffect} from "react";
import axios, {AxiosResponse} from "axios";
export default function useFetchingData(server:string,setData:React.Dispatch<React.SetStateAction<any>>, dep:any[]=[]):void{
    useEffect(():void => {
        axios.get(server)
            .then((res:AxiosResponse):void => {setData(res.data)})
            .catch((error:{message:string}):void => console.error("Ошибка:", error.message));
    }, [server, ...dep]);
}