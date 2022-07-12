<template>

    <main class="/current_projects"></main>
    
    <div class="rectangle7">
        <div class="project_picture"><img src="../assets/computer.jpg"></div>
        <div class="project_title">Aktualnie nie pracujemy nad żadnym projektem</div>
        <div class="project_description">
        </div>
        <div class="project_data"></div>
    </div>

    <div class="rectangle6">
        <div class="project_picture"></div>
        <div class="project_title"></div>
        <div class="project_description"></div>
        <div class="project_data"></div>
    </div>

</template>

<style>
    .rectangle7 {
        width: 1300px;
        height: 400px;
        background-color: rgb(0, 0, 0, 0.1);
        border-radius: 30px 30px 30px 30px;
        left: 100px;
        margin-top: 40px;
        position: relative;
        box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.175);
    }
    .project_picture img {
        width: 500px;
        height: 100%;
        border-radius: 20px 20px 20px 20px;
    }
    .project_picture {
        padding: 40px;
        padding-left: 50px;
        position: absolute;
    }
    .project_title {
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 25px;
        font-weight: bold;
        position: absolute;
        padding-left: 600px;
        padding-top: 30px;
    }
    .project_description {
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 17px;
        position: absolute;
        padding-left: 600px;
        padding-top: 80px;
        padding-right: 30px;
    }
    .project_data {
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