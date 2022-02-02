<template>
  <div :style="{ width: '100%', height: '100vh' }">
    <h1>Panel admina, tylko dla upoważnionych</h1>

    <div id="datesContainer">
      Wybierz datę do zmiany:
      <input type="date" name="" id="date" v-model="date" />
      <button @click="dateChange">Zmień</button>

      <ul>
        Wolne terminy:
        <li :date="date" :key="date" v-for="date in dates">{{ date }}</li>
        <li>
          <router-link class="routerPoint" :to="homePath">
            Home
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  getDatabase,
  ref,
  get,
  update,
  remove,
  child,
} from "firebase/database";

export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      message: "",
      dates: [1, 23, 4],
      date: "",
      datesAmount: 0,
      homePath: "/",
    };
  },
  methods: {
    dateChange() {
      if (this.passVerification() && this.datesAmount < 50) {
        this.addDate();
      }
    },
    passVerification() {
      const db = getDatabase();
      const dbref = ref(db);
      get(child(dbref, "pass")).then((snapshot) => {
        if (snapshot.val() == window.prompt("Type password")) {
          return true;
        } else {
          alert("password incorrect");
          return false;
        }
      });
    },
    addDate() {
      if (this.dates.includes(this.date)) {
        const index = this.dates.indexOf(this.date);
        alert("you're removing already existing date..." + index);
        const db = getDatabase();
        remove(ref(db, "dates/" + index))
          .then(() => {
            alert("succ removed");
          })
          .catch((error) => {
            alert("unsuscc remove: " + error);
          });
      } else {
        const db = getDatabase();
        update(ref(db, "dates"), { [this.datesAmount]: this.date })
          .then(() => {
            // alert("data stored successfully")
          })
          .catch((error) => {
            alert("unsuccesful, error: " + error);
          });
      }
      this.buildCalendar();
    },
    getDates() {
      let db = getDatabase();

      let dbref = ref(db);
      get(child(dbref, "dates"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            let datesTab = [];
            snapshot.val().forEach((el) => {
              if (el) {
                datesTab.push(el);
                const index = snapshot.val().indexOf(el);
                remove(ref(db, "dates/" + index));
              }
            });

            let i = 0;
            datesTab.forEach((el) => {
              update(ref(db, "dates"), { [i]: el });
              i++;
            });
            // this.datesAmount = Object.keys(snapshot.val()).length;
            this.datesAmount = snapshot.val().length;
            this.dates = snapshot.val();
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
  },
  beforeMount() {
    this.buildCalendar();
  },
};
</script>

<style>
body {
  background-color: #000;
  color: #fff;
}

h1{
  width: 100%;
}

#datesContainer {
  display: flex;
  margin: 0 0 128px 64px;
}

li {
  list-style-type: none;
  margin: 4px;
  border: 1px solid white;
  text-align: center;
}
</style>
