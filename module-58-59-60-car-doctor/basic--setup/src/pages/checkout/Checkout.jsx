import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../shared/authprovider/AuthProvider";
import axios from "axios";
const Checkout = () => {
  const data = useLoaderData();
  console.log(data);
  const { user } = useContext(AuthContext);
  console.log(user);

  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const checkout = {
      userName: name,
      date,
      service: data?.title,
      service_id: data?._id,
      image: data?.img,
      email: user?.email,
      price: data?.price,
    };
    axios.post("http://localhost:5000/checkout", checkout).then((data) => {
      console.log(data.data);
      if(data.data.insertedId){
        alert('Order Confirmed')
      }
    });
  };
  return (
    <div>
      <div className="card shrink-0 w-full  border p-10 my-10">
        <form onSubmit={handlePost} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="form-control">
              <label className="label">
                <span className="text-2xl font-bold">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-2xl font-bold">Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered"
                required
                name="date"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-2xl font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                defaultValue={user?.email}
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-2xl font-bold">Amount to Pay</span>
              </label>
              <input
                type="text"
                defaultValue={"$" + data.price}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6 col-span-2">
              <button className="btn btn-block btn-error btn-outline ">
               Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
