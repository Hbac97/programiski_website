<template>

    <main class="/contact"></main>
    
    <div class="rectangle9">
        <div class="mapa"><img src="../assets/mapa.png"></div>
        <div class="contact_icons">
            <img src="../assets/www.png">
            <img src="../assets/mail_c.png">
            <img src="../assets/localization.png">
        </div>
        <div class="www">
            www.nazwastrony.usz.edu.pl
        </div>
        <div class="contact_mail">
            programiski@usz.edu.pl
        </div>
        <div class="adress">
            <a href="https://goo.gl/maps/a4DvTQ62jp9fUp2Z8">Uniwersytet Szczeciński<br>Wydział Ekonomii, Finansów i Zarządzania<br>Cukrowa 8, 71-004 Szczecin</a>
        </div>
    </div>

</template>

<style>
    .rectangle9 {
        width: 1100px;
        height: 500px;
        background-color: rgb(0, 0, 0, 0.1);
        border-radius: 30px 30px 30px 30px;
        left: 200px;
        margin-top: 40px;
        position: relative;
        box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.175);
    }
    .mapa img {
        width: 370px;
        height: 100%;
        border-radius: 25px 25px 25px 25px;
    }
    .mapa {
        position: absolute;
        padding: 60px;
    }
    .contact_icons {
        width: 55px;
        height: 100%;
        position: absolute;
        margin-top: 50px;
        left: 510px;
    }
     .contact_icons img{
        border-radius: 0px 0px 0px 0px;
        padding-top: 60px;
    }
    .www {
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 20px;
        position: absolute;
        padding-left: 610px;
        padding-top: 120px;
        letter-spacing: 1.6px;
    }
    .contact_mail {
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 20px;
        position: absolute;
        padding-left: 610px;
        padding-top: 235px;
        letter-spacing: 1.6px;
    }
    .adress {
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 20px;
        position: absolute;
        padding-left: 610px;
        padding-top: 325px;
        letter-spacing: 1.6px;
    }
</style>