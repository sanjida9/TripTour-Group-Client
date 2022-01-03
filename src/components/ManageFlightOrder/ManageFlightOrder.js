import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const ManageFlightOrder = () => {
  const [deleteCount, setDeleteCount] = useState(0);
  const [flightManage, setflightManage] = useState([]);
  const [statusCount, setStatusCount] = useState(0);

  const { allContext } = useAuth();
  const { user } = allContext;
  const handleDeleteOrder = (id) => {
    const isDelete = window.confirm("Are you sure?");
    if (isDelete) {
      axios
        .post(
          "https://infinite-reaches-98033.herokuapp.com/deleteFlightOrder",
          {
            UserId: id,
          }
        )
        .then((res) => {
          setDeleteCount(deleteCount + 1);
          console.log("Order Deleted");
        });
    }
  };

  const handleUpdateStatus = (e) => {
    e.preventDefault();
    const status = e.target.value;
    const id = e.target.id;

    axios
      .post("https://infinite-reaches-98033.herokuapp.com/updateFlightStatus", {
        status: status,
        id: id,
      })
      .then(function (response) {
        setStatusCount(statusCount + 1);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("https://infinite-reaches-98033.herokuapp.com/flight")
      .then((res) => setflightManage(res.data));
  }, [deleteCount, statusCount, user]);

  return (
    <div className="container">
      <div className="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Category</th>
              <th scope="col">From City</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>abcd@gmail.com </td>
              <td> Car</td>
              <td> Dhaka</td>
              <td>01-01-2022</td>
            </tr>
            <tr>
              <td>12345@gmail.com </td>
              <td> Bus</td>
              <td> Sylhet</td>
              <td>03-01-2022</td>
            </tr>
            <tr>
              <td>afnoya01@gmail.com </td>
              <td> Bus</td>
              <td> Rajshahi</td>
              <td>06-01-2022</td>
            </tr>
            <tr>
              <td>user01@gmail.com </td>
              <td> Flight</td>
              <td> Dhaka</td>
              <td>10-01-2022</td>
            </tr>
            <tr>
              <td>yaminaislam13@gmail.com </td>
              <td> Car</td>
              <td> Rangpur</td>
              <td>13-01-2022</td>
            </tr>
            <tr>
              <td>sanjidanowrin23@gmail.com </td>
              <td> Bus</td>
              <td> Cumilla</td>
              <td>15-01-2022</td>
            </tr>
            <tr>
              <td>sanjidaafrin09@gmail.com </td>
              <td> Bus</td>
              <td> Feni</td>
              <td>17-01-2022</td>
            </tr>
            <tr>
              <td>ahir102@gmail.com </td>
              <td> Car</td>
              <td> Cumilla</td>
              <td>19-01-2022</td>
            </tr>
            <tr>
              <td>nowshin19@gmail.com </td>
              <td> Flight</td>
              <td> Dhaka</td>
              <td>25-01-2022</td>
            </tr>
            <tr>
              <td>nidhy39@gmail.com </td>
              <td> Bus</td>
              <td> Rajshahi</td>
              <td>29-01-2022</td>
            </tr>

            {flightManage.map((flight) => (
              <tr>
                {/* <th>{flight.userEmail}</th> */}
                <td>{flight?.from}</td>
                <td>{flight?.to}</td>
                <td>{flight?.adults}</td>
                <td>{flight?.status}</td>

                <td>
                  <select
                    onChange={(e) => handleUpdateStatus(e)}
                    defaultValue={flight?.status}
                    id={flight?._id}
                    className={`border-2  form-select block w-full p-2 font-semibold ${
                      flight?.status == "Pending"
                        ? "text-warning border-warning"
                        : "text-success border-success"
                    }`}
                  >
                    <option className="text-warning fw-bold" value="Pending">
                      Pending
                    </option>
                    <option value="Approved" className="text-success fw-bold">
                      Approved
                    </option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteOrder(flight._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageFlightOrder;
