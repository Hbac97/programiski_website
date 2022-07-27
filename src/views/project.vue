<template>

    <main class="/project"></main>
    
    <div class= "flex justify-center flex-wrap object-center px-8">
      <router-link to="/current_projects">
          <div class="rectangle2 hover:scale-110">
              <div class="zdj_zakładki_projektu">
                  <img src="../assets/current.png">
              </div>
              <div class="tekst_zakładki_projektu">Bieżące</div>
          </div>
      </router-link>

      <router-link to="/realized_projects">
          <div class="rectangle2 hover:scale-110">
              <div class="zdj_zakładki_projektu">
                  <img src="../assets/realized.png">
              </div>
              <div class="tekst_zakładki_projektu">Zrealizowane</div>
          </div>
      </router-link>
    </div>
</template>

<style>
  .rectangle2 {
      width: 400px;
      height: 450px;
      background: rgb(0, 0, 0, 0.1);
      border-radius: 30px 30px 30px 30px;
      display : inline-block;
      position: relative;
      margin: 60px;
      margin-top: 50px;
      transition: 0.3s;
      box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.175);
  }
  .rectangle2:hover {
  background-color: rgb(0, 0, 0, 0.20);
  color: white; 
  }
  .tekst_zakładki_projektu {
    padding-top: 370px;
    text-align: center;
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 25px;
  }
  .zdj_zakładki_projektu img {
    width: 420px;
    height: 280px;
    border-radius: 25px 25px 25px 25px;
  }
  .zdj_zakładki_projektu {
    position: absolute;
    padding: 40px;
  }
</style>