<template>

    <main class="/news"></main>

    <div class="flex justify-center flex-wrap object-center px-8 text-ellipsis">
        <div class="rectangle6">
            <div class="card-column">
                <img class="event_picture" src="../assets/hackathon_grupowe.jpg">
            </div>
            <div class="card-column flex-column">
                <div class="event_title">Hackathon - Startup Academy</div>
                <div class="data">25-26.06.2022r.</div>
                <div class="event_description box-border">W ostatni czerwcowy weekend na wydziale ZUT-u odbył się
                    Hackathon organizowany przez Startup Academy. Z naszego koła wzięło w nim udział
                    sześcioro członków tworząc najliczniejszą grupę na tym wydarzeniu. <br>Tematem przewodnim była pomoc
                    przybyszom z Ukrainy. Nasz zespół wziął udział w wyzwaniu
                    dotyczącym stworzeniu wtyczki, która informuje o pochodzeniu produktów. Przez dwa dni stworzyliśmy
                    zarówno projekt biznesowy jak i prawie w pełni działającą wtyczkę.
                    <br>Podczas całego eventu towarzyszył nam świetny humor, śmiechu jak i skupienia było od groma. Z
                    pewnością zdobyliśmy cenną wiedzę, poznaliśmy wspaniałych ludzi
                    i co najważniejsze, otrzymaliśmy ogromną dawkę motywacji do dalszego działania. To na pewno nie było
                    ostatnie wydarzenie tego typu. <b>Działamy dalej!</b>
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

.event_picture {
    width: 100%;
    height: auto;
    border-radius: 20px 20px 20px 20px;
    align-self: center;
}

.event_title {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 25px;
    font-weight: bold;
}

.event_description {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 17px;
    text-align: justify;
    margin-top: 15px;
}

.data {
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