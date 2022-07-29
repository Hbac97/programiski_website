<template>

    <main class="/government"></main>

    <div class= "flex justify-center flex-wrap object-center px-8">
      <div class="rectangle4">
          <div class="profile"><img src="../assets/opiekunkola.jpg"></div>
          <div class="name">Justyna Szydłowska</div>
          <div class="role"><br>Opiekun koła</div>
          <div class="role"><br></div>
          <div class="mail"><br>justyna.szydlowska@usz.edu.pl</div>
          <div class="linkedin"><a href=""></a></div>
          <div class="Facebook"><a href=""></a></div>
      </div>
      <div class="rectangle4">
          <div class="profile"><img src="../assets/przew.jpg"></div>
          <div class="name"><h3>Hubert Baciocha</h3></div>
          <div class="role"><br>Przewodniczący</div>
          <div class="role"><br></div>
          <div class="mail"><br>hubert.baciocha@stud.usz.edu.pl</div>
          <div class="linkedin"><a href="https://www.linkedin.com/in/hubert-baciocha-b06441198/" style="text-decoration: underline">Linkedin </a></div>
          <div class="Facebook"><a href="https://www.facebook.com/hubertbaciocha" style="text-decoration: underline"> Facebook</a></div>
      </div>
      <div class="rectangle4">
          <div class="profile"><img src="../assets/wice.jpg"></div>
          <div class="name"><h3>Natalia Tucka</h3></div>
          <div class="role"><br>Wiceprzewodnicząca</div>
          <div class="role">Sekretarz</div>
          <div class="mail"><br>natalia.tucka@stud.usz.edu.pl</div>
          <div class="linkedin"><a href="https://www.linkedin.com/in/natalia-tucka-93b617243/" style="text-decoration: underline">Linkedin </a></div>
          <div class="Facebook"><a href="https://www.facebook.com/natalia.tucka.1>Natalia Tucka" style="text-decoration: underline"> Facebook</a></div>
      </div>
      <div class="rectangle4">
          <div class="profile"><img src="../assets/skarbnik.jpg"></div>
          <div class="name"><h3>Konrad Strzelecki</h3></div>
          <div class="role"><br>Skarbnik</div>
          <div class="role"><br></div>
          <div class="mail"><br>konrad.strzelecki@stud.usz.edu.pl</div>
          <div class="linkedin"><a href="https://www.linkedin.com/in/konrad-strzelecki-940a33216/" style="text-decoration: underline">Linkedin </a></div>
          <div class="Facebook"><a href="https://www.facebook.com/konrad.keen.39ll" style="text-decoration: underline"> Facebook</a></div>
      </div>
    </div>

</template>

<style>
  .rectangle4 {
      width: 240px;
      height: 400px;
      background: rgb(0, 0, 0, 0.1);
      border-radius: 30px 30px 30px 30px;
      display : inline-block;
      position: relative;
      margin: 40px;
      margin-top: 70px;
      transition: 0.3s;
      box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.175);
      transition: 0.3s;
  }
  .rectangle4:hover {
    background-color: rgb(0, 0, 0, 0.15);
    color: white; 
  }
  .profile {
    padding-top: 40px;
    padding-left: 45px;
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 50px 50px 50px 50px;
  }
  .name {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 16px;
    text-align: center;
    padding-top: 40px;
    font-weight: bold;
  }
  .role {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 14px;
    text-align: center;
  }
  .mail {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 13px;
    text-align: center;
  }
  .linkedin {
    width: 25px;
    height: 15px;
    display: inline;
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 13px;
    padding-left: 60px;
  }
  .Facebook {
    display: inline;
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 13px;
    padding-left: 15px;
  }

</style>