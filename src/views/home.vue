<template>
   
    <main class="home">
    </main>



    <div v-if="$isMobile()">
        <div class="flex justify-center flex-wrap object-center px-8 text-ellipsis">
            <div class="club_mb_bg">
                <div class="club_description_mb">
                    Cześć!<br>
                    Jesteśmy kołem naukowym Uniwersytetu Szczecińskiego specjalizującym się w obszarze IT, głownie w programowaniu. 
                    Naszym celem jest rozwijanie swoich umiejętności, zdobywanie doświadczenia oraz wykorzystanie tego magicznego, studenckiego czasu w jak najlepszy sposób. 
                    Jeżeli zainteresowała Cię nasza działalność i myślisz o wstąpnieniu do nas, zapraszamy do kontaktu!
                    
                </div>
            </div>
        </div>
    </div>

    <div v-else>
        <div class= "flex flex-auto justify-center object-center px-8 text-ellipsis box1">
            <v-shell class="container p-0 w-full flex-wrap text-ellipsis"
                :banner="banner"
                :shell_input="send_to_terminal"
                :commands="commands"
                @shell_output="prompt"
            ></v-shell>
        </div>
    </div>

        <div class="relative pt-25 flex justify-center object-center scale-50">
            <img class="mt-38 flex justify-center object-center animate-bounce " src="../assets/arrow.png">
        </div>

    <div class="bottom_box justify-center flex-wrap object-center px-20 w-full font-semibold text-base sm:text-base md:text-l lg:text-xl xl:text-2xl">
        <div class=" block p-8 pt-14 flex justify-center text-justify text-xl;">Cześć!</div>
        <div class=" block px-8 flex justify-center text-justify font">Jesteśmy kołem naukowym Uniwersytetu Szczecińskiego specjalizującym się w obszarze IT, głównie w programowaniu. 
        Naszym celem jest rozwijanie swoich umiejętności, zdobywanie doświadczenia oraz wykorzystanie tego magicznego, studenckiego czasu w jak najlepszy sposób. 
        Jeżeli zainteresowała Cię nasza działalność i myślisz o wstąpnieniu do nas, zapraszamy do kontaktu!</div>

        <div class="flex justify-center flex-wrap object-center px-8">
            <router-link to="/about">
                <div class="rectangle0 hover:scale-105" >
                    <div class="zdj_zakładki0">
                        <img src="../assets/aboutus.png">
                    </div>
                    <div class="tytuł_zakładki0 text-xl">O nas</div>
                </div>
            </router-link>
            <router-link to="/government">
                <div class="rectangle0 hover:scale-105">
                    <div class="zdj_zakładki0">
                        <img src="../assets/wladze.png">
                    </div>
                    <div class="tytuł_zakładki0 text-xl">Władze</div>
                </div>
            </router-link>
            <router-link to="/statute">
                <div class="rectangle0 hover:scale-105">
                    <div class="zdj_zakładki0">
                        <img src="../assets/regulamin.png">
                    </div>
                    <div class="tytuł_zakładki0 text-xl">Regulamin</div>
                </div>
            </router-link>
            <router-link to="/join">
            <div class="rectangle0 hover:scale-105">
                <div class="zdj_zakładki0">
                    <img src="../assets/join.png">
                </div>
                <div class="tytuł_zakładki0 text-xl">Dołącz do nas!</div>
            </div>
            </router-link>

        </div>

    </div>

</template>


<script>
    export default {
    data() {
        return {
        send_to_terminal: "",
        banner: {
            //header: "Programiski",
            subHeader: "",
            helpHeader: 'Hej! Wpisz "hello"',
            emoji: {
                first: "🐻",
            },
            sign: "student $",
            // img: {
            //     align: "left",
            //     link: "../src/assets/logowektor.png",
            //     width: 100,
            //     height: 100
            // }
        },
        commands: [
            { name: "hello",
            get() {
                return `<p>Witaj na stronie Koła naukowego Programiski!<br>Wpisz "help" i poznaj wszystkie komendy lub zjedź w dół i dowiedz się więcej.</p>`;
            }
            },
            {
            name: "e-mail",
            get() {
                return '<p>Nasz e-mail to: programiski@gmail.com<br>W razie pytań pisz śmiało!</p>';
            }
            },
            {
            name: "localization",
            get() {
                return '<p>Uniwersytet Szczeciński<br>Wydział Ekonomii, Finansów i Zarządzania<br>Cukrowa 8, 71-004 Szczecin</p>';
            }
            },
            {
            name: "fun_fact",
            get() {
                return '<p>Komputer był tytułem zawodowym, a pierwszymi programistami były kobiety!<br><a href="https://www.matplaneta.pl/programowanie-to-warto-wiedziec/" style="text-decoration: underline">Link do strony z ciekawostkami</a></p>';
            }
            },
            {
            name: "joke-1",
            get() {
                return '<p>Jak zająć programistę?<br>- Przeczytaj zdanie poniżej.<br>- Przeczytaj zdanie powyżej.</p>';
            }
            },
            {
            name: "joke-2",
            get() {
                return 'Spotykają się dwaj programiści:<br>- Słuchaj, potrzebuję generatora liczb losowych<br>- Czternaście...</p>';
            }
            },
            
        ]
        };
    },
    methods: {
        prompt(value) {
        if (value == "node -v") {
            this.send_to_terminal = process.versions.node;
        }
        }
    }
    };
    
</script>

<style>
    .flex-column {
        flex-direction: column;
    }
    .card-column {
        width: 100%;
        display: flex;
        padding: 1rem;
    }
    #container[data-v-02bdc591]{
        height: 500px;
        width: 60%;
        border-radius: 30px 30px 30px 30px;
        font-family: 'Inconsolata', monospace;
        color: whitesmoke;
        font-size: 16px;
        max-height: 500px;
        overflow-y: hidden;
        overflow-x: hidden;
        overflow-wrap: break-word;
        background-color: rgb(0, 0, 0, 0.15);
        box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.2);
        transition: 0.3s;
    }
    #container[data-v-02bdc591]:hover {
        background-color: rgb(0, 0, 0, 0.20);
        color: white;
    }

    #container output[data-v-02bdc591]{
        overflow-wrap: break-word;
    }

    #baner[data-v-02bdc591]{
        display: flex;
    }
    #input-line[data-v-02bdc591]{
        display: flex;
    }
    .prompt[data-v-02bdc591]{
        color: #A7DEBE;
    }
    .cmdline[data-v-02bdc591]{
        color: whitesmoke;
        overflow: hidden;
        overflow-wrap: break-word; 
    }
    .box1 {
        margin-top: 20px;
        margin-left: 17%;
        background-color: rgb(0, 0, 0, 0);
        display : flex;
        width: 100%;
        height: auto;
    }
    .home_text {
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 25px;
    }
    .home_text1 {
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 25px;
    }

    .club_description_mb {
        text-align: left;
        font-family: 'Lato', sans-serif;
        color: whitesmoke;
        font-size: 22px;
        padding: 8%;
        
    }
    .club_mb_bg {
        margin-top: 50px;
        display: relative;
        width: 95%;
        height: 100%;
        background: rgb(0, 0, 0, 0.1);
        border-radius: 30px 30px 30px 30px;
        box-shadow: 10px 10px 5px rgb(0, 0, 0, 0.175);
    }
    .bottom_box{
        width: 100%;
        height: auto;
        background-color: whitesmoke;
        border-radius: 30px 30px 30px 30px;
        position: relative;
        box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.175);
        margin-top: 10px;
        color: rgb(25, 133, 91);
        font-size: 30px;
    }

    @media (max-width: 1200px) {
    .box1 {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .card-column {
        width: 100%;
    }
    }
    /* Kafelki jak w club */
    .rectangle0 {
    width: 250px;
    height: 320px;
    background: rgb(0, 0, 0, 0.1);
    border-radius: 30px 30px 30px 30px;
    display : inline-block;
    position: relative;
    margin: 25px;
    margin-top: 40px;
    transition: 0.3s;
    box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.175);
    }
    .zdj_zakładki0 {
        width: 240px;
        position: absolute;
        padding: 35px;
        padding-left: 43px;
        
    }
    .zdj_zakładki0 img {
        width: 290px;
        height: 100%;
        border-radius: 25px 25px 25px 25px;
    }
    .tytuł_zakładki0 {
        text-align: center;
        padding-top: 265px;
        
    }
    

</style>