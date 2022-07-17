<template>

    <main class="/about"></main>

    <div class="flex justify-center flex-wrap object-center px-8 text-ellipsis">
        <div class="rectangle3">
            <div class="card-column">
                <img class="about_picture" src="../assets/koło1.jpg">
            </div>
            <div class="card-column flex-column">
                <div class="about_title">Kim jesteśmy?</div>
                <div class="about_description">Nasze koło naukowe to przede wszystkim ludzie przyjaźni, pomocni i wspólnie rozwijający swoje pasje. Każdy z nas jest 
                    gotowy stawiać czoła nowym wyzwaniom, rozwijać swoje umiejętności, a przy tym świetnie się bawić! U nas nie ma głupich pomysłów, wszystko wysłuchamy
                     i dokładnie przeanalizujemy. Robimy tutaj tylko to, na co mamy ochotę. Co ważne, wstępując do koła nie trzeba mieć dużego pojęcia o programowaniu, 
                     wystarczy tylko dobre nastawienie i chęci do pracy. Mamy w kole tyle wspaniałych i uzdolnionych osób, że każdy z pewnością otrzyma pomoc. 
                    Poza nauką chętnie organizujemy wspólne wyjścia, jest to idealna okazja aby poznać się bliżej i zawrzeć przyjaźnie na długi, długi czas.
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

.rectangle3 {
    width: 95%;
    height: auto;
    background-color: rgb(0, 0, 0, 0.1);
    border-radius: 30px 30px 30px 30px;
    position: relative;
    box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.175);
    display: flex;
    padding: 10px;
    margin-top: 25px;
}

.about_picture {
    width: 100%;
    height: auto;
    border-radius: 20px 20px 20px 20px;
    align-self: center;
    box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.08);
}

.about_title {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
}

.about_description {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 21px;
    padding-left: 25px;
    padding-right: 25px;
    text-align: justify;
    padding-top: 20px;
}

@media (max-width: 768px) {
    .rectangle3 {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .card-column {
        width: 100%;
    }
}
</style>