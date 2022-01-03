import React from "react";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Attractions.css";
import image01 from "../../assets/images/tm-img-01.jpg";
import image02 from "../../assets/images/tm-img-02.jpg";
import image03 from "../../assets/images/tm-img-03.jpg";
import image04 from "../../assets/images/tm-img-04.jpg";
import image05 from "../../assets/images/tm-img-05.jpg";
import image06 from "../../assets/images/tm-img-06.jpg";
import image07 from "../../assets/images/tm-img-07.jpg";
import dhaka from "../../assets/images/north-america.png";
import chittagong from "../../assets/images/south-america.png";
import sylhet from "../../assets/images/europe.png";
import khulna from "../../assets/images/africa.png";
import barishal from "../../assets/images/asia.png";
import rajshahi from "../../assets/images/australia.png";
import rangpur from "../../assets/images/antartica.png";

const Attractions = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>

      <div class="tm-main-content" id="top">
        {/* <div class="tm-top-bar-bg"></div>
        <div class="tm-top-bar" id="tm-top-bar">
          <div class="container">
            <div class="row">
              <nav class="navbar navbar-expand-lg narbar-light">
                <img src="../../assets/images/logo.png" alt="Site logo" />{" "}
                Journey
                <button
                  type="button"
                  id="nav-toggle"
                  class="navbar-toggler collapsed"
                  data-toggle="collapse"
                  data-target="#mainNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div id="mainNav" class="collapse navbar-collapse tm-bg-white">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-link active" href="#top">
                        Home <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#tm-section-2">
                        Top Destinations
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#tm-section-3">
                        Recommended Places
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#tm-section-4">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div> */}

        <div class="tm-page-wrap mx-auto">
          <section class="tm-banner">
            <div class="tm-container-outer tm-banner-bg">
              <div class="container">
                <div class="row tm-banner-row tm-banner-row-header">
                  <div class="col-xs-12">
                    <div class="tm-banner-header">
                      <h1 class="text-uppercase tm-banner-title">
                        Let's begin
                      </h1>
                      <img src="img/dots-3.png" alt="Dots" />
                      <p class="tm-banner-subtitle">
                        We assist you to choose the best.
                      </p>
                      {/* <a href="javascript:void(0)" class="tm-down-arrow-link"><i class="fa fa-2x fa-angle-down tm-down-arrow"></i></a> */}
                    </div>
                  </div>
                </div>

                <div class="row tm-banner-row" id="tm-section-search">
                  <form
                    action="index.html"
                    method="get"
                    class="tm-search-form tm-section-pad-2"
                  >
                    <div class="form-row tm-search-form-row">
                      <div class="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                        <label for="inputCity">Choose Your Destination</label>
                        <input
                          name="destination"
                          type="text"
                          class="form-control"
                          id="inputCity"
                          placeholder="Type your destination..."
                        />
                      </div>
                      <div class="form-group tm-form-group tm-form-group-1">
                        <div class="form-group tm-form-group tm-form-group-pad tm-form-group-2">
                          <label for="inputRoom">How many rooms?</label>
                          <select
                            name="room"
                            class="form-control tm-select"
                            id="inputRoom"
                          >
                            <option value="1" selected>
                              1 Room
                            </option>
                            <option value="2">2 Rooms</option>
                            <option value="3">3 Rooms</option>
                            <option value="4">4 Rooms</option>
                            <option value="5">5 Rooms</option>
                            <option value="6">6 Rooms</option>
                            <option value="7">7 Rooms</option>
                            <option value="8">8 Rooms</option>
                            <option value="9">9 Rooms</option>
                            <option value="10">10 Rooms</option>
                          </select>
                        </div>
                        <div class="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                          <label for="inputAdult">Adult</label>
                          <select
                            name="adult"
                            class="form-control tm-select"
                            id="inputAdult"
                          >
                            <option value="1" selected>
                              1
                            </option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select>
                        </div>
                        <div class="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                          <label for="inputChildren">Children</label>
                          <select
                            name="children"
                            class="form-control tm-select"
                            id="inputChildren"
                          >
                            <option value="0" selected>
                              0
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="form-row tm-search-form-row">
                      <div class="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                        <label for="inputCheckIn">Check In Date</label>
                        <input
                          name="check-in"
                          type="text"
                          class="form-control"
                          id="inputCheckIn"
                          placeholder="Check In"
                        />
                      </div>
                      <div class="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                        <label for="inputCheckOut">Check Out Date</label>
                        <input
                          name="check-out"
                          type="text"
                          class="form-control"
                          id="inputCheckOut"
                          placeholder="Check Out"
                        />
                      </div>
                      <div class="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                        <label for="btnSubmit">&nbsp;</label>
                        <button
                          type="submit"
                          class="btn btn-primary tm-btn tm-btn-search text-uppercase"
                          id="btnSubmit"
                        >
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div class="tm-banner-overlay"></div>
              </div>
            </div>
          </section>

          <section class="p-5 tm-container-outer tm-bg-gray">
            <div class="container">
              <div class="row">
                <div class="col-xs-12 mx-auto tm-about-text-wrap text-center">
                  <h2 class="text-uppercase mb-4">
                    Your <strong>Journey</strong> is our priority
                  </h2>
                  <p class="mb-4">
                    Nullam auctor, sapien sit amet lacinia euismod, lorem magna
                    lobortis massa, in tincidunt mi metus quis lectus. Duis nec
                    lobortis velit. Vivamus id magna vulputate, tempor ante
                    eget, tempus augue. Maecenas ultricies neque magna.
                  </p>
                  <a href="#" class="text-uppercase btn-primary tm-btn">
                    Continue explore
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div class="tm-container-outer" id="tm-section-2">
            <section class="tm-slideshow-section">
              <div class="tm-slideshow">
                <img src={image01} alt="Image" />
              </div>
              <div class="tm-slideshow-description tm-bg-primary">
                <h2 class="">Europe's most visited places</h2>
                <p>
                  Aenean in lacus nec dolor fermentum congue. Maecenas ut velit
                  pharetra, pharetra tortor sit amet, vulputate sem. Vestibulum
                  mi nibh, faucibus ac eros id, sagittis tincidunt velit. Proin
                  interdum ullamcorper faucibus. Ut mi nunc, sollicitudin non
                  pulvinar id, sagittis eget diam.
                </p>
                <a
                  href="#"
                  class="text-uppercase tm-btn tm-btn-white tm-btn-white-primary"
                >
                  Continue Reading
                </a>
              </div>
            </section>
            <section class="clearfix tm-slideshow-section tm-slideshow-section-reverse">
              <div class="tm-right tm-slideshow tm-slideshow-highlight">
                <img src={image02} alt="Image" />
              </div>

              <div class="tm-slideshow-description tm-slideshow-description-left tm-bg-highlight">
                <h2 class="">Asia's most popular places</h2>
                <p>
                  Vivamus in massa ullamcorper nunc auctor accumsan ac at arcu.
                  Donec sagittis mattis pharetra. Proin commodo, ante et
                  volutpat pulvinar, arcu arcu ullamcorper diam, id maximus sem
                  tellus id sem. Suspendisse eget rhoncus diam. Fusce urna elit,
                  porta nec ullamcorper id.
                </p>
                <a
                  href="#"
                  class="text-uppercase tm-btn tm-btn-white tm-btn-white-highlight"
                >
                  Continue Reading
                </a>
              </div>
            </section>
            <section class="tm-slideshow-section">
              <div class="tm-slideshow">
                <img src={image03} alt="Image" />
              </div>
              <div class="tm-slideshow-description tm-bg-primary">
                <h2 class="">America's most famous places</h2>
                <p>
                  Donec nec laoreet diam, at vehicula ante. Orci varius natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Suspendisse nec dapibus nunc, quis viverra metus. Morbi
                  eget diam gravida, euismod magna vel, tempor urna.
                </p>
                <a
                  href="#"
                  class="text-uppercase tm-btn tm-btn-white tm-btn-white-primary"
                >
                  Continue Reading
                </a>
              </div>
            </section>
            <section class="clearfix tm-slideshow-section tm-slideshow-section-reverse">
              <div class="tm-right tm-slideshow tm-slideshow-highlight">
                <img src={image02} alt="Image" />
              </div>

              <div class="tm-slideshow-description tm-slideshow-description-left tm-bg-highlight">
                <h2 class="">Asia's most popular places</h2>
                <p>
                  Vivamus in massa ullamcorper nunc auctor accumsan ac at arcu.
                  Donec sagittis mattis pharetra. Proin commodo, ante et
                  volutpat pulvinar, arcu arcu ullamcorper diam, id maximus sem
                  tellus id sem. Suspendisse eget rhoncus diam. Fusce urna elit,
                  porta nec ullamcorper id.
                </p>
                <a
                  href="#"
                  class="text-uppercase tm-btn tm-btn-white tm-btn-white-highlight"
                >
                  Continue Reading
                </a>
              </div>
            </section>
          </div>
          <div class="tm-container-outer" id="tm-section-3">
            <ul class="nav nav-pills tm-tabs-links">
              <li class="tm-tab-link-li">
                <a href="#1a" data-toggle="tab" class="tm-tab-link">
                  <img src={dhaka} alt="Image" class="img-fluid" /> Dhaka
                </a>
              </li>
              <li class="tm-tab-link-li">
                <a href="#2a" data-toggle="tab" class="tm-tab-link">
                  <img src={chittagong} alt="Image" class="img-fluid" />{" "}
                  Chittagong
                </a>
              </li>
              <li class="tm-tab-link-li">
                <a href="#3a" data-toggle="tab" class="tm-tab-link">
                  <img src={rajshahi} alt="Image" class="img-fluid" /> Rajshahi
                </a>
              </li>
              <li class="tm-tab-link-li">
                <a href="#4a" data-toggle="tab" class="tm-tab-link active">
                  <img src={barishal} alt="Image" class="img-fluid" /> Barishal
                </a>
              </li>
              <li class="tm-tab-link-li">
                <a href="#5a" data-toggle="tab" class="tm-tab-link">
                  <img src={khulna} alt="Image" class="img-fluid" /> Khulna
                </a>
              </li>
              <li class="tm-tab-link-li">
                <a href="#6a" data-toggle="tab" class="tm-tab-link">
                  <img src={sylhet} alt="Image" class="img-fluid" /> Sylhet
                </a>
              </li>
              <li class="tm-tab-link-li">
                <a href="#7a" data-toggle="tab" class="tm-tab-link">
                  <img src={rangpur} alt="Image" class="img-fluid" /> Rangpur
                </a>
              </li>
            </ul>
            <div class="tab-content clearfix">
              <div class="tab-pane fade" id="1a">
                <div class="tm-recommended-place-wrap">
                  <div class="tm-recommended-place">
                    <img
                      src={image06}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">North Garden Resort</h3>
                      <p class="tm-text-highlight">One North</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$110</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image07}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">Felis nec dignissim</h3>
                      <p class="tm-text-highlight">Two North</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <div id="preload-hover-img"></div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$120</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image05}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">Sed fermentum justo</h3>
                      <p class="tm-text-highlight">Three North</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$130</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image04}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">
                        Maecenas ultricies neque
                      </h3>
                      <p class="tm-text-highlight">Four North</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$140</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>
                </div>

                <a
                  href="#"
                  class="text-uppercase btn-primary tm-btn mx-auto tm-d-table"
                >
                  Show More Places
                </a>
              </div>

              <div class="tab-pane fade" id="2a">
                <div class="tm-recommended-place-wrap">
                  <div class="tm-recommended-place">
                    <img
                      src={image05}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">South Resort Hotel</h3>
                      <p class="tm-text-highlight">South One</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$220</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image04}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">
                        Aenean ac ante nec diam
                      </h3>
                      <p class="tm-text-highlight">South Second</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$230</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image07}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">
                        Suspendisse nec dapibus
                      </h3>
                      <p class="tm-text-highlight">South Third</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$240</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image06}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">
                        Aliquam viverra mi at nisl
                      </h3>
                      <p class="tm-text-highlight">South Fourth</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$250</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>
                </div>

                <a
                  href="#"
                  class="text-uppercase btn-primary tm-btn mx-auto tm-d-table"
                >
                  Show More Places
                </a>
              </div>

              <div class="tab-pane fade" id="3a">
                <div class="tm-recommended-place-wrap">
                  <div class="tm-recommended-place">
                    <img
                      src={image04}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">Europe Hotel</h3>
                      <p class="tm-text-highlight">Venecia, Italy</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$330</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image05}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">
                        In viverra enim turpis
                      </h3>
                      <p class="tm-text-highlight">Paris, France</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$340</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image06}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">
                        Volutpat pellentesque
                      </h3>
                      <p class="tm-text-highlight">Barcelona, Spain</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$350</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image07}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">Grand Resort Pasha</h3>
                      <p class="tm-text-highlight">Istanbul, Turkey</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$360</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>
                </div>

                <a
                  href="#"
                  class="text-uppercase btn-primary tm-btn mx-auto tm-d-table"
                >
                  Show More Places
                </a>
              </div>

              <div class="tab-pane fade show active" id="4a">
                <div class="tm-recommended-place-wrap">
                  <div class="tm-recommended-place">
                    <img
                      src="img/tm-img-06.jpg"
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">Asia Resort Hotel</h3>
                      <p class="tm-text-highlight">Singapore</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$440</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src="img/tm-img-07.jpg"
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">
                        Nullam eget est a nisl
                      </h3>
                      <p class="tm-text-highlight">Yangon, Myanmar</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <div id="preload-hover-img"></div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$450</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src="img/tm-img-05.jpg"
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">
                        Proin interdum ullamcorper
                      </h3>
                      <p class="tm-text-highlight">Bangkok, Thailand</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$460</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image04}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">
                        Lorem ipsum dolor sit
                      </h3>
                      <p class="tm-text-highlight">Vientiane, Laos</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$470</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>
                </div>

                <a
                  href="#"
                  class="text-uppercase btn-primary tm-btn mx-auto tm-d-table"
                >
                  Show More Places
                </a>
              </div>

              <div class="tab-pane fade" id="5a">
                <div class="tm-recommended-place-wrap">
                  <div class="tm-recommended-place">
                    <img
                      src={image05}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">Africa Resort Hotel</h3>
                      <p class="tm-text-highlight">First City</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$550</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image04}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">Aenean ac magna diam</h3>
                      <p class="tm-text-highlight">Second City</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$560</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image07}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">
                        Beach Barbecue Sunset
                      </h3>
                      <p class="tm-text-highlight">Third City</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$570</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image06}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">Grand Resort Pasha</h3>
                      <p class="tm-text-highlight">Fourth City</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$580</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>
                </div>

                <a
                  href="#"
                  class="text-uppercase btn-primary tm-btn mx-auto tm-d-table"
                >
                  Show More Places
                </a>
              </div>

              <div class="tab-pane fade" id="6a">
                <div class="tm-recommended-place-wrap">
                  <div class="tm-recommended-place">
                    <img
                      src={image04}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">Hotel Australia</h3>
                      <p class="tm-text-highlight">City One</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$660</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image05}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">
                        Proin interdum ullamcorper
                      </h3>
                      <p class="tm-text-highlight">City Two</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$650</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image06}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">
                        Beach Barbecue Sunset
                      </h3>
                      <p class="tm-text-highlight">City Three</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$640</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image07}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">Grand Resort Pasha</h3>
                      <p class="tm-text-highlight">City Four</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$630</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>
                </div>

                <a
                  href="#"
                  class="text-uppercase btn-primary tm-btn mx-auto tm-d-table"
                >
                  Show More Places
                </a>
              </div>

              <div class="tab-pane fade" id="7a">
                <div class="tm-recommended-place-wrap">
                  <div class="tm-recommended-place">
                    <img
                      src={image04}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">Antartica Resort</h3>
                      <p class="tm-text-highlight">Ant City One</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$770</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image05}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">Pulvinar Semper</h3>
                      <p class="tm-text-highlight">Ant City Two</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$230</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image06}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">Cras vel sapien</h3>
                      <p class="tm-text-highlight">Ant City Three</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$140</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>

                  <div class="tm-recommended-place">
                    <img
                      src={image07}
                      alt="Image"
                      class="img-fluid tm-recommended-img"
                    />
                    <div class="tm-recommended-description-box">
                      <h3 class="tm-recommended-title">Nullam eget est</h3>
                      <p class="tm-text-highlight">Ant City Four</p>
                      <p class="tm-text-gray">
                        Sed egestas, odio nec bibendum mattis, quam odio
                        hendrerit risus, eu varius eros lacus sit amet lectus.
                        Donec blandit luctus dictum...
                      </p>
                    </div>
                    <a href="#" class="tm-recommended-price-box">
                      <p class="tm-recommended-price">$190</p>
                      <p class="tm-recommended-price-link">Continue Reading</p>
                    </a>
                  </div>
                </div>

                <a
                  href="#"
                  class="text-uppercase btn-primary tm-btn mx-auto tm-d-table"
                >
                  Show More Places
                </a>
              </div>
            </div>
          </div>

          <footer class="tm-container-outer">
            <p class="mb-0">
              Copyright © <span class="tm-current-year">2018</span> Your Company
              . Designed by{" "}
              <a
                rel="nofollow"
                href="http://www.google.com/+templatemo"
                target="_parent"
              >
                Template Mo
              </a>
            </p>
          </footer>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Attractions;
