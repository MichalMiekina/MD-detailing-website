<template>
  <div>
    <div id="home">
      
      <video autoplay muted loop playsinline >
        <source
          src="https://video.wixstatic.com/video/f59c86_c69f01da723e4f3c9f66995669659eac/1080p/mp4/file.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <img src="../assets/awards/1.jpg" alt="" id="award">
      <span class="header" id="homeHeader">M&D Detailing</span>
    </div>

    <Prices id="prices" />

    <Booking id="booking" />

    <Gallery id="gallery" />

    <Offer id="offer" />

    <Contact id="contact" />
  </div>
</template>

<script>
import Prices from "../components/Prices.vue"
import Booking from "../components/Booking.vue";
import Gallery from "../components/Gallery.vue";
import Offer from "../components/Offer.vue";
import Contact from "../components/Contact.vue";

export default {
  components: {
    Prices,
    Booking,
    Gallery,
    Offer,
    Contact,
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

div {
  display: block;
}

#homeHeader{
  position: absolute;
  top:100px;
  width: 100%;
  z-index:1;
  font-size: 500%;
}


video {
  width: 100%;
  z-index: 0;
  position: relative;
}

#award{
  position: absolute;
  left:0;
  top:80px;
  z-index: 1;
  width: 25%;
}

span.header {
  text-align: center;
  align-self: center;
  margin: auto;
  padding-top: 10%;
  display: flex;
  justify-content: center;
  font-size: 300%;
  width: 60%;
}
</style>
