<template>

    <main class="/realized_projects"></main>
    
    <div class="flex justify-center flex-wrap object-center px-8 text-ellipsis">
        <div class="rectangle6">
            <div class="card-column">
                <img class="rproject_picture" src="../assets/computer.jpg">
            </div>
            <div class="card-column flex-column">
                <div class="rproject_title">Nie zrealizowaliśmy jeszcze żadnego projektu</div>
                <div class="rproject_data">25-26.06.2022r.</div>
                <div class="rproject_description box-border">Opis zrealizowanego projektu
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