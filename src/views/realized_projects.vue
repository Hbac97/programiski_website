<template>

    <main class="/realized_projects"></main>
    
    <div class="flex justify-center flex-wrap object-center px-8 text-ellipsis">
        <div class="rectangle6">
            <div class="card-column">
                <img class="rproject_picture" src="../assets/strona.jpg">
            </div>
            <div class="card-column flex-column">
                <div class="rproject_title">Strona internetowa koła</div>
                <div class="rproject_data">07.2022</div>
                <div class="rproject_description box-border">
                    Naszym pierwszym projektem nie mogło być nic innego jak stworzenie własnej strony internetowej, by każdy kto jest zainteresowany naszą działalnością mógł w szybki i prosty
                    sposób dowiedzieć się o nas wszystkich potrzebnych informacji. <br>Cały projekt został utworzony w Vue. Wybraliśmy właśnie ten framework, aby nauczyć się czegoś nowego, ponieważ osoby, 
                    które stworzyły stronę nie znały wcześniej tego narzędzia. Wszyscy zaangażowani w projekt podzielili się na zadania od UI do kodowania. <br>Do stworzenia UI użyliśmy
                    narzędzia <a href="https://www.figma.com/" style="text-decoration: underline">figma</a>, gdzie umieściliśmy dokładne projekty wszystkich podstron. Następnie zajęliśmy się tworzeniem strony w Vue, a 
                    nasze postępy umieszczaliśmy na Githubie. 
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

.rectangle6 {
    width: 100%;
    height: auto;
    background-color: rgb(0, 0, 0, 0.1);
    border-radius: 30px 30px 30px 30px;
    position: relative;
    box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.175);
    display: flex;
    padding: 10px;
    margin-top: 25px;
}

.rproject_picture {
    width: 100%;
    height: auto;
    border-radius: 20px 20px 20px 20px;
    align-self: center;
}

.rproject_title {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 25px;
    font-weight: bold;
}

.rproject_description {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 17px;
    text-align: justify;
    margin-top: 15px;
}

.rproject_data {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 15px;
    font-weight: bold;
}

@media (max-width: 768px) {
    .rectangle6 {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .card-column {
        width: 100%;
    }
}
</style>