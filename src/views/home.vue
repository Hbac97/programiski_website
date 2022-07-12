<template>

    <main class="home">
    </main>
    <router-link to="/about">
        <div class="rectangle">
            <div class="zdj_zakładki">
                <img src="../assets/example.jpg">
            </div>
            <div class="tytuł_zakładki">O nas</div>
        </div>
    </router-link>

    <router-link to="/government">
        <div class="rectangle">
            <div class="zdj_zakładki">
                <img src="../assets/example.jpg">
            </div>
            <div class="tytuł_zakładki">Władze</div>
        </div>
    </router-link>

    <router-link to="/statute">
        <div class="rectangle">
            <div class="zdj_zakładki">
                <img src="../assets/example.jpg">
            </div>
            <div class="tytuł_zakładki">Regulamin</div>
        </div>
    </router-link>

    <router-link to="/join">
        <div class="rectangle">
            <div class="zdj_zakładki">
                <img src="../assets/example.jpg">
            </div>
            <div class="tytuł_zakładki">Dołącz do nas!</div>
        </div>
    </router-link>
</template>

<style>
  .rectangle {
      width: 300px;
      height: 480px;
      background: rgb(0, 0, 0, 0.1);
      border-radius: 30px 30px 30px 30px;
      display : inline-block;
      position: relative;
      margin: 25px;
      margin-top: 35px;
      left: 65px;
      transition: 0.3s;
      box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.175);
  }
  .rectangle:hover {
  background-color: rgb(0, 0, 0, 0.20);
  color: white; 
  }
  .tytuł_zakładki {
    padding-top: 380px;
    text-align: center;
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 25px;
  }
  .zdj_zakładki {
    position: absolute;
    padding: 35px;
  }
  .zdj_zakładki img {
    width: 250px;
    height: 100%;
    border-radius: 25px 25px 25px 25px;
  }
</style>