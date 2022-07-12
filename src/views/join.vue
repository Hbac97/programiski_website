<template>

    <main class="/join"></main>
    <div class="rectangle5">
        <div class="cytat">„Pamiętaj, iż Twoja własna determinacja, by osiągnąć sukces <br>liczy się bardziej, niż cokolwiek innego na świecie.”</div>
        <div class="autor">Abraham Lincoln</div>
        <div class="join_text">Jeżeli chcesz zostać członkiem naszego koła studenckiego wystarczy, że napiszesz do nas maila, lub skontaktujesz się z jednym z członków zarządu.<br>
        <br>Jeżeli masz jakieś pytania pisz śmiało!<br>
        <b>Czekamy na Ciebie!</b></div>
    </div>
    <div class="icons">
        <img src="../assets/mail.png">
        <div class="rolamail"><b>E-mail koła:</b><br>Opiekun koła:<br>Przewodniczący:<br>Wiceprzewodnicząca:<br>Skarbnik:</div>
        <div class="maile">
            <b>programiski@usz.edu.pl</b><br>justyna.szydlowska@usz.edu.pl<br>hubert.baciocha@stud.usz.edu.pl<br>natalia.tucka@stud.usz.edu.pl<br>konrad.strzelecki@stud.usz.edu.pl
        </div>
        <img src="../assets/linkedin.png">
        <div class="rolalinkedin">Przewodniczący:<br>Wiceprzewodnicząca:<br>Skarbnik:</div>
        <div class="linkediny">
            <a href="https://www.linkedin.com/in/hubert-baciocha-b06441198/">Hubert Baciocha<br></a>
            <a href="https://www.linkedin.com/in/natalia-tucka-93b617243/">Natalia Tucka<br></a>
            <a href="https://www.linkedin.com/in/konrad-strzelecki-940a33216/">Konrad Strzelecki<br></a>
        </div>
        <img src="../assets/facebook.png">
        <div class="rolafacebook">Przewodniczący:<br>Wiceprzewodnicząca:<br>Skarbnik:</div>
        <div class="facebook">
            <a href="https://www.facebook.com/hubertbaciocha">Hubert Baciocha<br></a>
            <a href="https://www.facebook.com/natalia.tucka.1>Natalia Tucka">Natalia Tucka<br></a>
            <a href="https://www.facebook.com/konrad.keen.39ll">Konrad Strzelecki<br></a>
        </div>
    </div>
</template>

<style>
    .rectangle5 {
        width: 600px;
        height: 400px;
        background: rgb(0, 0, 0, 0.1);
        border-radius: 30px 30px 30px 30px;
        margin-top: 60px;
        left: 130px;
        position: absolute;
    }
    .cytat {
        padding-top: 40px;
        text-align: center;
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 14px;
        letter-spacing: 1.5px;
    }
    .autor {
        padding-top: 15px;
        text-align: right;
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 13px;
        letter-spacing: 1.5px;
        padding-right:74px;
    }
    .join_text {
        padding-top: 60px;
        text-align: justify;
        padding-left: 50px;
        padding-right: 50px;
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 15px;
        letter-spacing: 1.5px;
    }
    .icons img {
        margin-left: 850px;
        margin-top: 55px;
        width: 100px;
        height: 100px;
        position: relative;
        border-radius: 0%;
        display: inline;
    }
    .maile {
        display: inline;
        position: absolute;
        padding-left: 200px;
        padding-top: 55px;
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 13px;

    }
    .linkediny {
        display: inline;
        position: absolute;
        padding-left: 200px;
        padding-top: 75px;
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 13px;
    }
    .facebook {
        display: inline;
        position: absolute;
        padding-left: 200px;
        padding-top: 75px;
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 13px;
    }
    .rolamail {
        display: inline;
        position: absolute;
        padding-left: 50px;
        padding-top: 55px;
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 13px;
        text-align: right;
    }
    .rolalinkedin {
        display: inline;
        position: absolute;
        padding-left: 50px;
        padding-top: 75px;
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 13px;
        text-align: right;
    }
    .rolafacebook {
        display: inline;
        position: absolute;
        padding-left: 50px;
        padding-top: 75px;
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 13px;
        text-align: right;
    }




</style>