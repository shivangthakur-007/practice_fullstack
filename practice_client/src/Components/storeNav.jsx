import React from "react";
import Header from "./header";
import Footer from "../footer";

function StoreNav() {
  return (
    <div>
      <Header />
      <div className="pt-[4rem] pb-[2rem]">
        <div>
          <h1>Combonation : Amritsar Store</h1>
        </div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h1></h1>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <div>
              <h1></h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7385383.345770013!2d76.831238!3d25.3329414!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978738a56576cd3%3A0x83a98eed49abb30c!2sBundelkhand!5e0!3m2!1sen!2sin!4v1697132841816!5m2!1sen!2sin"
                width="600"
                height="450"
                // allowfullscreen=""
                // loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StoreNav;
