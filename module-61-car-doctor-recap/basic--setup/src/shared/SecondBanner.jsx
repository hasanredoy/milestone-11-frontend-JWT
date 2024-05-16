import banner from "../assets/images/banner/3.jpg";
const SecondBanner = () => {
  return (
    <div>
      <div className="">
        <img src={banner} alt="" />
      </div>
      {/* text div  */}
      <div className=" my-5 space-y-3">
        <h1 className=" text-3xl font-bold">Unique Car Engine Service</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn&apos;t anything embarrassing hidden in the middle
          of text.
        </p>
      </div>
      {/* card div  */}
      <div className=" grid grid-cols-2 gap-10
     my-10  ">
        <div className="card   bg-base-300 shadow-xl border-t-2 rounded-t-lg p-0  lg:pl-8 lg:py-5 border-[#FF3811]">
        
          <div className="card-body ">
            <h2 className=" text-2xl font-bold">
            Instant Car Services
            </h2>
            <p className=" text-lg">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>

          </div>
        </div>
        <div className="card   bg-base-300 shadow-xl border-t-2 rounded-t-lg p-0   lg:pl-8 lg:py-5 border-[#FF3811]">
        
          <div className="card-body ">
            <h2 className=" text-2xl font-bold">
            24/7 Quality Service
            </h2>
            <p className=" text-lg">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>

          </div>
        </div>
        <div className="card   bg-base-300 shadow-xl border-t-2 rounded-t-lg p-0   lg:pl-8 lg:py-5 border-[#FF3811]">
        
          <div className="card-body ">
            <h2 className=" text-2xl font-bold">
            Easy Customer Service
            </h2>
            <p className=" text-lg">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>

          </div>
        </div>
        <div className="card   bg-base-300 shadow-xl border-t-2 rounded-t-lg p-0   lg:pl-8 lg:py-5 border-[#FF3811]">
        
          <div className="card-body ">
            <h2 className=" text-2xl font-bold">
            Quality Cost Service
            </h2>
            <p className=" text-lg">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
