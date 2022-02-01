<template>
  <div>
    <div id="home">
      <video autoplay loop>
        <source
          src="https://video.wixstatic.com/video/f59c86_c69f01da723e4f3c9f66995669659eac/1080p/mp4/file.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <span class="header" id="homeHeader">M&D Detailing</span>
    </div>

    <Booking />

    <Contact />
  </div>
</template>

<script>
import Booking from "../components/Booking.vue";
import Contact from "../components/Contact.vue";

export default {
  components: {
    Booking,
    Contact,
  },
};
</script>

<style>
div {
  display: block;
}

body {
  background-color: #ffffff;
}

video {
  width: 100%;
  z-index: -1;
  position: absolute;
}

span.header {
  text-align: center;
  align-self: center;
  margin: auto;
  padding-top: 10%;
  display: flex;
  justify-content: center;
  font-family: URW Chancery L, cursive;
  font-size: 300%;
  width: 60%;
}
</style>
