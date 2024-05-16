import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../shared/authprovider/AuthProvider";
import BookingTableRow from "./BookingTableRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState();
  // console.log(user.email);
  useEffect(() => {
    axios.get(`http://localhost:5000/checkout?email=${user?.email}`, {withCredentials:true})
    .then(res=>{
      setBookings(res.data)
      console.log(res.data);
    })
    
   
    // fetch(`http://localhost:5000/checkout?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [user]);
  // console.log(bookings);


  // handling update 
   const handleUpdate=(id , data) =>{
    fetch(`http://localhost:5000/checkout/${id}`,{
      method:"PUT",
      headers:{
        'content-type':"application/json"
      },
      body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      if(data.modifiedCount>0){
        // console.log('asi re bai asi')
        const remaining = bookings.filter(booking=> booking._id !== id)
        const updated = bookings.find(booking => booking._id === id)
        updated.isUpdated="true"
        
      const newBookings = [updated , ...remaining]
      setBookings(newBookings)
      }
    })
   }


  return (
    <div className=" my-10">
      <h1 className=" text-6xl">You&apos;re Bookings :{bookings?.length} </h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className=" ">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Service Name</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking) => (
                <BookingTableRow
                  key={booking._id}
                  booking={booking}
                  bookings={bookings}
                  setBookings={setBookings}
                  handleUpdate={handleUpdate}
                ></BookingTableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
