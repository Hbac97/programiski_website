<template>

    <main class="/news"></main>
    
    <div class="rectangle6">
        <div class="event_picture"><img src="../assets/hackathon_grupowe.jpg"></div>
        <div class="event_title">Hackathon - Startup Academy</div>
        <div class="event_description">W ostatni czerwcowy weekend na wydziale ZUT-u odbył się Hackathon organizowany przez Startup Academy. Z naszego koła wzięło w nim udział 
            sześcioro członków tworząc najliczniejszą grupę na tym wydarzeniu. <br>Tematem przewodnim była pomoc przybyszom z Ukrainy. Nasz zespół wziął udział w wyzwaniu 
            dotyczącym stworzeniu wtyczki, która informuje o pochodzeniu produktów. Przez dwa dni stworzyliśmy zarówno projekt biznesowy jak i prawie w pełni działającą wtyczkę.
            <br>Podczas całego eventu towarzyszył nam świetny humor, śmiechu jak i skupienia było od groma. Z pewnością zdobyliśmy cenną wiedzę, poznaliśmy wspaniałych ludzi 
            i co najważniejsze, otrzymaliśmy ogromną dawkę motywacji do dalszego działania. To na pewno nie było ostatnie wydarzenie tego typu. <b>Działamy dalej!</b>
        </div>
        <div class="data">25-26.06.2022r.</div>
    </div>

    <div class="rectangle6">
        <div class="event_picture"></div>
        <div class="event_title"></div>
        <div class="event_description"></div>
        <div class="data"></div>
    </div>

</template>

<style>
    .rectangle6 {
        width: 1300px;
        height: 400px;
        background-color: rgb(0, 0, 0, 0.1);
        border-radius: 30px 30px 30px 30px;
        left: 100px;
        margin-top: 40px;
        position: relative;
        box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.175);
    }
    .event_picture img {
        width: 500px;
        height: 100%;
        border-radius: 20px 20px 20px 20px;
    }
    .event_picture {
        padding: 40px;
        padding-left: 50px;
        position: absolute;
    }
    .event_title {
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 25px;
        font-weight: bold;
        position: absolute;
        padding-left: 600px;
        padding-top: 30px;
    }
    .event_description {
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 17px;
        position: absolute;
        padding-left: 600px;
        padding-top: 80px;
        padding-right: 30px;
    }
    .data {
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 15px;
        position: relative;
        padding-left: 800px;
        padding-top: 42px;
        padding-right: 35px;
        text-align: right;
        font-weight: bold;
    }
</style>