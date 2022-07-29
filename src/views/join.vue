<template>

    <main class="/join"></main>

    <div class="flex justify-center flex-wrap object-center px-8 text-ellipsis">
        <div class="rectangle5">
            <div class="card-column">
                <div class="join_box">
                    <div class="cytat">„Pamiętaj, iż Twoja własna determinacja, by osiągnąć sukces liczy się bardziej, niż cokolwiek innego na świecie.”</div>
                    <div class="autor">Abraham Lincoln</div>
                    <div class="join_text">Jeżeli chcesz zostać członkiem naszego koła studenckiego wystarczy, że napiszesz do nas maila, lub skontaktujesz się z jednym z członków zarządu. 
                        <a href="/government" style="color: #ABE9E6; text-decoration: underline; font-size: 14px;" > KONTAKT</a><br>
                    <br>Jeżeli masz jakieś pytania pisz śmiało!<br>
                    <b>Czekamy na Ciebie!</b><br>
                    <b style="color: rgb(0, 0, 0, 0)">l</b></div>
                </div>
            </div>
            <div class="card-column flex-column">
                <img src="../assets/mail.png">
                <div class="mail_box">
                    <b>E-mail koła:<br>programiski@usz.edu.pl</b><br>
                    <br>Opiekun koła:<br>justyna.szydlowska@usz.edu.pl<br>
                    <br>Przewodniczący:<br>hubert.baciocha@stud.usz.edu.pl<br>
                    <br>Wiceprzewodnicząca:<br>natalia.tucka@stud.usz.edu.pl<br>
                    <br>Skarbnik:<br>konrad.strzelecki@stud.usz.edu.pl
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.flex-column {
    flex-direction: column;
}
.card-column {
    width: 50%;
    display: flex;
    padding: 1rem;
}
.card-column img {
    align-self: center;
}
.mail_box {
    background-color: rgb(0, 0, 0, 0);
    position: relative;
    display: relative;
    width: 100%;
    height: auto;
    text-align: center;
}

.rectangle5 {
    width: 100%;
    height: auto;
    background-color: rgb(0, 0, 0, 0);
    border-radius: 30px 30px 30px 30px;
    position: relative;
    display: flex;
    padding: 10px;
    margin-top: 15px;
}
.join_box {
    width: 100%;
    height: auto;
    background: rgb(0, 0, 0, 0.1);
    border-radius: 30px 30px 30px 30px;
    box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.175);
    position: relative;
}
.cytat {
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 60px;
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
    padding-left: 70px;
    padding-right: 70px;
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 15px;
    letter-spacing: 1.5px;
}

@media (max-width: 768px) {
    .rectangle5 {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .card-column {
        width: 100%;
    }
    }
</style>