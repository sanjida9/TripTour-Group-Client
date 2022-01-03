import React from "react";
import "../ContactUs/ContactUs.css";
import { useForm } from "react-hook-form";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://infinite-reaches-98033.herokuapp.com/contactus", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("Sent Successfully");
  };
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className=" section-gap">
        <div className="wrapper">
          <h3 className="text-center global-title">Contact us</h3>
          <div className="d-grid contact-view">
            <div className="cont-details">
              <div className="cont-top">
                <div className="text-center cont-left">
                  <span className="fa fa-phone "></span>
                </div>

                <div className="cont-right">
                  <h6>Call Us</h6>
                  <p>+123 45 67 89</p>
                </div>
              </div>

              <div className="cont-top margin-up">
                <div className="text-center cont-left">
                  <span className="fa fa-envelope"></span>
                </div>
                <div className="cont-right">
                  <h6>Email Us</h6>
                  <p>example@mail.com</p>
                </div>
              </div>

              <div className="cont-top margin-up">
                <div className="text-center cont-left">
                  <span className="fa fa-map-marker "></span>
                </div>
                <div className="cont-right">
                  <h6>Address</h6>
                  <p>Address here,Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="map-content">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="name"
                  className="p-3 m-2 w-100"
                />

                <br />
                <input
                  {...register("desc")}
                  placeholder="Description"
                  className="p-3 m-2 w-100"
                />
                <br />

                <input
                  {...register("img", { required: true })}
                  placeholder="Image Link"
                  className="p-3 m-2 w-100"
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add"
                  className="mt-3 mb-3 btn w-50"
                  style={{ backgroundColor: "#237DB2", color: "white" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
