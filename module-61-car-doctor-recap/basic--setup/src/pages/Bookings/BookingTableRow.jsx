/* eslint-disable react/prop-types */

const BookingTableRow = ({ booking , bookings, setBookings, handleUpdate}) => {
  const {_id, userName, image, date, service, price , isUpdated } = booking;
  // console.log(booking);
  const data = {
   _id,
   userName,
   image,
   date,
   service,
   price,
   isUpdated: "true"
  }

  const handleDelete = (id)=>{
    const proceed = confirm('are  you sure')
    if(proceed){
      fetch(`https://car-doctor-ten.vercel.app/checkout/${id}`,{
        method:"DELETE",
      })
      .then(res => res.json())
      .then(data =>{
        // console.log(data);
        if(data.deletedCount){
          alert('deleted')
          const newBookings = bookings?.filter(book => book._id !==id)
          // console.log(newBookings);
          setBookings(newBookings)
        }
      })
    }
   }
  return (
    <div>
      {/* row 1 */}
      <tr>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {image && <img src={image} />}
              </div>
            </div>
          </div>
        </td>
        <td>
          <span>{userName}</span>
        </td>
        <td>{service}</td>
        <td>{date}</td>
        <td>{price}</td>
        <th>
          {
            isUpdated==='true'? <span className=" text-lg font-bold text-blue-500">Updated</span> :
            <button onClick={()=>handleUpdate(_id,data)} className="btn btn-ghost btn-xs">Update</button>}
        </th>
      </tr>
    </div>
  );
};

export default BookingTableRow;
