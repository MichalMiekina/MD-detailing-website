<template>
  <div>
    <h1>Zarezerwuj termin</h1>

    <div id="datesContainer">
      <ul>
        Wolne terminy:
        <li :date="date" :key="date" v-for="date in dates">{{ date }}</li>
        <li>Inny</li>
        
      </ul>
      
    </div>

    <h1>Zaproponuj termin a oddzwonimy</h1>
    <div id="formContainer">
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

        <input type="submit" value="Send" @click="submit" />
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { getDatabase, ref, get, update, remove, child } from "firebase/database";

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
      datesAmount: 0,
    };
  },
  methods: {
    getDates() {
      let db = getDatabase();

      let dbref = ref(db);
      get(child(dbref, "dates"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            
            let datesTab=[]
            snapshot.val().forEach(el => {
              if(el){
                console.log(el)
                datesTab.push(el)
                const index = snapshot.val().indexOf(el)
                remove(ref(db, "dates/"+index))
              }
            });
            
            let i=0
            datesTab.forEach(el=>{
              update(ref(db, "dates"), {[i]: el})
              i++
            })
            this.datesAmount = snapshot.val().length
            this.dates = snapshot.val()
          } else {
            alert("No data found");
          }
        })
        .catch((error) => {
          alert("unsuccessful, erorr" + error);
        });
    },
    buildCalendar() {
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
  beforeMount() {
    this.buildCalendar();
  },
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
#formContainer {
  display: flex;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 60%;
}

#datesContainer {
  display: flex;
  color: aliceblue;
  margin: 0 0 128px 64px;
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

li {
  list-style-type: none;
  margin: 4px;
  border: 1px solid white;
  text-align: center;
}
</style>