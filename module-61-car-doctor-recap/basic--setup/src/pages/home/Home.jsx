import AboutUs from "../../shared/AboutUs";
import Banner from "../../shared/Banner";
import SecondBanner from "../../shared/SecondBanner";
import Services from "../../shared/Services";
import Sidebar from "../../shared/Sidebar";


// import axios from "axios";


const Home = () => {
  const handleUpload=(e)=>{
    e.preventDefault()
    console.log(e.target.files);
  }
  return (
    <div>
      {/* <button onClick={ handlePost} className=" btn">Post</button> */}
      <div className=" my-10">
      <Banner></Banner>
      </div>
      <div className=" my-10 border">
        <AboutUs></AboutUs>
      </div>
     <div>
      <Services></Services>
     </div>
     <div>
      <input onChange={handleUpload} type="file" name="file" id="" />
     </div>
    <section className=" grid grid-cols-4">
      <div className="col-span-3">
        <SecondBanner></SecondBanner>
      </div>
      <div className=" grid-cols-1">
        <Sidebar></Sidebar>
      </div>
    </section>

    </div>
  );
};

export default Home;