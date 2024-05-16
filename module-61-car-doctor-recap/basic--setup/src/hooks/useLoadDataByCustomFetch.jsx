
import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useLoadDataByCustomFetch = (ascending,search) => {
 const axiosUrl = useAxios()
 const [fetchedData , setFetchedData] = useState([])
 useEffect(()=>{
  axiosUrl.get(`/services?sort=${ascending?'ascending':'descending'}&search=${search}`)
  .then(res=>{
    setFetchedData(res.data)
  })
 },[axiosUrl,ascending,search])

  return fetchedData
};

export default useLoadDataByCustomFetch;