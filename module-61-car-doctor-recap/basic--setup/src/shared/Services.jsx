// import { useEffect, useState } from "react";
import { FaDollarSign, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLoadDataByCustomFetch from "../hooks/useLoadDataByCustomFetch";
import { useState } from "react";


const Services = () => {
  const [search , setSearch]= useState('')
  const [ascending , setAscending]=useState(true)
  const services = useLoadDataByCustomFetch(ascending,search)
  // const [services, setServices] = useState();
  // useEffect(() => {
  //   fetch("http://localhsot:5000/services?sort${ascending}&search=${seach}")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);
  // console.log(services);
  const handleSearch=e=>{
    e.preventDefault()
    const searchVal = e.target.search.value 
    console.log(searchVal);
    setSearch(searchVal)
  }
  return (
    <div className=" my-20">
      <div>
        <h1 className=" text-[#FF3811] font-bold text-center text-lg">
          {" "}
          Services{" "}
        </h1>
        <h2 className=" font-bold text-4xl text-center"> Our Services</h2>


        <form onSubmit={handleSearch} >
          <input className=" input input-secondary" type="text" name="search" />
          <input className="btn btn-accent" type="submit" value="search" />
        </form>
        <button
        onClick={()=>setAscending(!ascending)} 
        className=" btn btn-warning">
          {
            ascending?'Price : High To Low':'Price : Low To High'
          }
          </button>
      </div>
      <div className=" grid grid-cols-3 gap-8 border p-5">
        {services?.map((service) => (
          <div key={service._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
              className=" h-[250px]"
                src={service?.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body space-y-3">
              <h2 className=" text-2xl font-bold ">
            {service.title}
              </h2>
             
              <div className="card-actions justify-between ">
                <div className="flex gap-3 text-xl text-[#FF3811]">Price: <span className=" flex items-center font-bold text-xl"><FaDollarSign></FaDollarSign>{service?.price} </span></div>
                <Link to={`/checkout/${service?._id}`}>
                <div className="text-2xl  text-[#FF3811]"><FaArrowAltCircleRight></FaArrowAltCircleRight></div></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
