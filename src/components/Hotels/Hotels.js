import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import Rating from "react-rating";

const Hotels = () => {
  const [filterResults, setFilterResults] = useState([]);

  const handleUpdateStatus = (e) => {
    const selected = e.target.value;
    axios
      .get(
        `https://infinite-reaches-98033.herokuapp.com/hotels?filter=${selected}`
      )
      .then((res) => {
        setFilterResults(res.data);
      });
  };

  useEffect(() => {
    axios
      .get("https://infinite-reaches-98033.herokuapp.com/hotels")
      .then((res) => {
        setFilterResults(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="container">
        <form onChange={(e) => handleUpdateStatus(e)}>
          <div className="input-group w-75 mx-auto mt-5">
            <select className="form-select" id="inputGroupSelect01">
              <option selected name="filter" value="All">
                All
              </option>
              <option name="filter" value="Dhaka">
                Dhaka
              </option>
              <option name="filter" value="Chattogram">
                Chattogram
              </option>
              <option name="filter" value="Sylhet">
                Sylhet
              </option>
              <option name="filter" value="Khulna">
                Khulna
              </option>
              <option name="filter" value="Rangpur">
                Rangpur
              </option>
              <option name="filter" value="Rajshahi">
                Rajshahi
              </option>
            </select>
          </div>
          <br />
        </form>
        {/* end */}
        <h1 className="fw-bold text-center text-blue fs-1 mt-3 p-3">Hotels</h1>
        {filterResults.length > 0 ? (
          <div className="row">
            {filterResults.map((hotel) => (
              <>
                <div className="col-md-4 my-3">
                  <Card className="border-0 shadow hover-card">
                    <Card.Img
                      className="img-fluid p-2 "
                      variant="top"
                      src={hotel.img}
                    />
                    <Card.Body>
                      <Card.Title className="fw-bold text-blue text-center">
                        {hotel.name}
                      </Card.Title>
                      <Card.Title className="fw-bold text-blue text-center">
                        BDT {hotel.price}
                      </Card.Title>
                      <Card.Title className="text-center fw-bold text-blue">
                        {hotel.district}
                      </Card.Title>

                      <div className="text-center">
                        <Rating
                          emptySymbol="fa fa-star-o fa-1x"
                          fullSymbol="fa fa-star fa-1x"
                          initialRating={hotel.rating}
                          readonly
                          className="text-warning fs-6 text-center"
                        />
                      </div>
                      <Card.Title className="text-center fw-bold text-blue">
                        {hotel.compliments}
                      </Card.Title>
                      <div className="text-center">
                        <Link to={`/hotel/${hotel._id}`}>
                          <Button className="btn-success bg-blue px-5 btnHover">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </>
            ))}
          </div>
        ) : (
          <div className="row my-5">
            <div className="col d-flex align-items-center justify-content-center">
              <div class="spinner-border text-primary " role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Hotels;
