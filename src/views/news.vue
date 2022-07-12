<template>

    <main class="/news"></main>
    
    <div class="rectangle1">
        <router-link to="/current_events">Bieżące wydarzenia</router-link>
    </div>
    <div class="rectangle1">
        <router-link to="/reports_events">Sprawozdania</router-link>
    </div>

</template>

<style>
  .rectangle1 {
      width: 500px;
      height: 450px;
      background: rgb(0, 0, 0, 0.1);
      border-radius: 30px 30px 30px 30px;
      display : inline-block;
      padding-top: 350px;
      text-align: center;
      position: relative;
      margin: 60px;
      margin-top: 50px;
      left: 140px;
      font-family: 'Lato', sans-serif;
      color: whitesmoke;
      font-size: 25px;
      transition: 0.3s;
      box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.2);
  }
  .rectangle1:hover {
  background-color: rgb(0, 0, 0, 0.20);
  color: white; 
  }
</style>