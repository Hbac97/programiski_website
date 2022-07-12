<template>

    <main class="home">
    </main>

    <div class="rectangle">
        <router-link to="/about">O nas</router-link>
    </div>
    <div class="rectangle">
        <router-link to="/government">Władze</router-link>
    </div>
    <div class="rectangle">
        <router-link to="/statute">Regulamin</router-link>
    </div>
    <div class="rectangle">
        <router-link to="/join">Dołącz do nas!</router-link>
    </div>
    
    
</template>

<style>
  .rectangle {
      width: 300px;
      height: 480px;
      background: rgb(0, 0, 0, 0.1);
      border-radius: 30px 30px 30px 30px;
      display : inline-block;
      padding-top: 380px;
      text-align: center;
      position: relative;
      margin: 25px;
      margin-top: 35px;
      left: 65px;
      font-family: 'Lato', sans-serif;
      color: whitesmoke;
      font-size: 25px;
      transition: 0.3s;
      box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.2);
  }
  .rectangle:hover {
  background-color: rgb(0, 0, 0, 0.20);
  color: white; 
  }
</style>