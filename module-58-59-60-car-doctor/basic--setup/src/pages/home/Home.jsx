import AboutUs from "../../shared/AboutUs";
import Banner from "../../shared/Banner";
import SecondBanner from "../../shared/SecondBanner";
import Services from "../../shared/Services";
import Sidebar from "../../shared/Sidebar";


// import axios from "axios";


const Home = () => {
  // const handlePost = ()=>{
  //   const service ={
     
  //     "service_id": "06",
  //     "title": "Electrical System",
  //     "img": "https://i.ibb.co/KzCG8qr/8888.jpg",
  //     "price": "20.00",
  //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
  //     "facility": [
  //         {
  //             "name": "Instant Car Services",
  //             "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
  //         },
  //         {
  //             "name": "24/7 Quality Service",
  //             "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
  //         },
  //         {
  //             "name": "Easy Customer Service",
  //             "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
  //         },
  //         {
  //             "name": "Quality Cost Service",
  //             "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
  //         }
  //     ]
  // }
  //   axios.post('http://localhost:5000/services',service)
  //   .then(data=> {
  //     console.log(data.data);
  //   })
  // }
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