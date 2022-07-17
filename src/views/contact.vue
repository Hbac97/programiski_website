<template>

    <main class="/contact"></main>
    
    <div class="flex justify-center flex-wrap object-center px-8 text-ellipsis">
        <div class="rectangle9">
            <div class="card-column">
                <img class="mapa" src="../assets/mapa.png">
            </div>
            <div class="card-column flex-column">
                <div class="contact_box">
                    <div class="www">
                        <div class="contact_icon1"><img src="../assets/www.png"></div>
                        <div class="kontakt">www.nazwastrony.usz.edu.pl</div>
                    </div>
                    <div class="contact_mail">
                        <div class="contact_icon"><img src="../assets/mail_c.png"></div>
                        <div class="kontakt">programiski@usz.edu.pl</div>
                    </div>
                    <div class="contact_icon"><img src="../assets/localization.png"></div>
                    <div class="adress">
                        <div class="kontakt"><a href="https://goo.gl/maps/a4DvTQ62jp9fUp2Z8">Uniwersytet Szczeciński</a>
                        <br>Wydział Ekonomii, Finansów i Zarządzania
                        <br>Cukrowa 8, 71-004 Szczecin</div>
                    </div>
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

.rectangle9 {
    width: 90%;
    height: auto;
    background-color: rgb(0, 0, 0, 0.1);
    border-radius: 30px 30px 30px 30px;
    position: relative;
    box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.175);
    display: flex;
    padding: 10px;
    margin-top: 50px;
}
.mapa {
    width: 100%;
    height: auto;
    border-radius: 20px 20px 20px 20px;
}
.contact_icon img{
    padding-top: 8%;
    width: 50px;
    height: 100%;
    border-radius: 0px 0px 0px 0px;
}
.contact_icon1 img{
    padding-top: 6%;
    width: 50px;
    height: 100%;
    border-radius: 0px 0px 0px 0px;
}
.contact_icon {
    margin-left: 45%;
}
.contact_icon1 {
    margin-left: 45%;
}
.kontakt {
    text-align: center;
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 20px;
}
@media (max-width: 768px) {
    .rectangle9 {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .card-column {
        width: 100%;
    }
}
</style>