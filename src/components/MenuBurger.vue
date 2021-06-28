<template>
    <div class="burger" v-if="window.width < 800">
        <img src="../assets/hamburger-icon.png" alt="expand menu" @click="()=>burger_activity=!burger_activity">
        <ul v-if="burger_activity">
            <li ></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ["window"],
    data(){
        return{
            burger_activity:false
        }
    },
    // methods: {
    //     burgerClick(){
    //         this.burger_activity=!burger_activity
    //     },
    // }
}
</script>

<style>
    .burger{
        width:100%;
        display: flex;
        justify-content:flex-end;
        flex-direction:row;
    }
    .burger img{
        cursor: pointer; 
        height:100%;
        
    }
    .burger ul{
        margin-top:100px;
    }


</style>