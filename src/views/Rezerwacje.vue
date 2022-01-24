<template>
  <div>
    <h1>Zarezerwuj termin</h1>

    

    <div id="datesContainer">

      Dodaj wolny termin:
      <input type="date" name="" id="date" v-model="date">
      <button @click="addDate($event)">Dodaj</button>

      <ul>
      Wolne terminy:
      <li :date="date.value" :key="date.value" v-for="date in dates">{{date.value}}</li>
      </ul>
    </div>


    <h1>Zaproponuj termin a oddzwonimy</h1>
    <div class="formContainer">
      <form ref="form" @submit="sendEmail">
        <input type="text" v-model="name" name="name" placeholder="Imię" />

        <input
          type="text"
          v-model="phone"
          name="phone"
          placeholder="Numer telefonu"
        />

        <textarea
          name="message"
          v-model="message"
          cols="30"
          rows="5"
          placeholder="Wpisz przynajmniej jeden termin lub przedział i dodatkowe uwagi"
        >
        </textarea>

        <input type="sumbit" value="API" @click="buildCalendar" />
        <input type="submit" value="Send" @click="submit" />
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getDatabase, ref, get, set, child } from "firebase/database";

export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      message: "",
      dates: [1, 23, 4],
      date: "",
      // dates2: getDates(),
    };
  },
  methods: {
    addDate(){
      const db = getDatabase();
      console.log(this.date)
      set(ref(db, "dates/"+(this.dates.length+2)), {value: this.date})
      .then(()=>{
        alert("data stored successfully")
      })
      .catch((error)=>{
        alert("unsuccesful, error: "+error)
      })
      window.location.reload();
    },
    testfun(dates) {
      console.log(dates);
      this.dates = dates
    },
    getDates() {
      const db = getDatabase();

      const dbref = ref(db);
      get(child(dbref, "dates"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            // console.log(snapshot.val());
            this.testfun(snapshot.val())
          } else {
            alert("No data found");
          }
        })
        .catch((error) => {
          alert("unsuccessful, erorr" + error);
        });
    },
    buildCalendar() {
      this.testfun();
      this.getDates();
    },

    submit: function () {
      this.$refs.form.submit();
    },
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_ol6pdly",
          "template_7erx37r",
          e.target,
          "user_DUZxsiRaTqgFYHEVIAknf",
          {
            name: this.name,
            phone: this.phone,
            email: "XD",
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.phone = "";
      this.email = "";
      this.message = "";
    },
  },
  beforeMount(){
    console.log('befmon')
    this.buildCalendar()
  }
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}
div > h1 {
  font-size: 200%;
  text-align: center;
  width: 100%;
  margin-bottom: 16px;
}
.formContainer {
  display: flex;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 60%;
}

.mapContainer {
  padding-top: 36px;
  margin: auto;
  text-align: center;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 2px;
  margin-bottom: 8px;
  resize: both;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

#datesContainer{
  display: flex;
  color: aliceblue;
  margin-left: 64px;

  margin: 0 0 128px 64px;
}

</style>