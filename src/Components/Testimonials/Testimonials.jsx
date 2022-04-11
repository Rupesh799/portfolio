import React,{useState} from "react";
import "./Testimonials.css";

import client1 from "../../Assets/user7.jpg";
import client2 from "../../Assets/user2.jpg";
import client3 from "../../Assets/user9.jpg";
import client4 from "../../Assets/user8.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "susan smith",
    image: client1,
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    image: client2,
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal to the point on this theme.",
  },
  {
    id: 3,
    name: "peter jones",
    image: client3,
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag and i want to do it at anycost.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    image: client4,
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const Testimonials = () => {
    const [readmore,setReadMore] = useState(false);
  return (
    <section id="testimonials">
      <h5>My Clients Voice</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {reviews.map(({ id, name, image, text }) => {
          return (
            <SwiperSlide key={id} className="testimonials">
              <div className="client_img">
                <img src={image} alt="client_picture" />
              </div>
              <h3 className="client_name">{name}</h3>
              <small className="client_review">{readmore?text : `${text.substring(0,100)}...`}
              <button className="read-btn" onClick={()=>setReadMore(!readmore)}>
                {readmore?'Showless' : 'Readmore'}
              </button>
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
