<template>

    <main class="/project"></main>
    
    
    <div class="rectangle2">
        <router-link to="/current_projects">Bieżące</router-link>
    </div>
    <div class="rectangle2">
        <router-link to="/realized_projects">Zrealizowane</router-link>
    </div>
</template>

<style>
  .rectangle2 {
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
  }
  .rectangle2:hover {
  background-color: rgb(0, 0, 0, 0.20);
  color: white; 
  }
</style>