<template>
   
    <main class="home">
    </main>
    <div v-if="$isMobile()"></div>
    <div v-else>
        <v-shell class="terminal flex flex-wrap"
        :banner="banner"
        :shell_input="send_to_terminal"
        :commands="commands"
        @shell_output="prompt"
        ></v-shell>
    </div>

  <div class= "flex justify-center flex-wrap object-center px-8">
        <router-link to="/about">
            <div class="rectangle" >
                <div class="zdj_zakładki">
                    <img src="../assets/example.jpg">
                </div>
                <div class="tytuł_zakładki">O nas</div>
            </div>
        </router-link>

        <router-link to="/government">
            <div class="rectangle">
                <div class="zdj_zakładki">
                    <img src="../assets/example.jpg">
                </div>
                <div class="tytuł_zakładki">Władze</div>
            </div>
        </router-link>

        <router-link to="/statute">
            <div class="rectangle">
                <div class="zdj_zakładki">
                    <img src="../assets/example.jpg">
                </div>
                <div class="tytuł_zakładki">Regulamin</div>
            </div>
        </router-link>

        <router-link to="/join">
            <div class="rectangle">
                <div class="zdj_zakładki">
                    <img src="../assets/example.jpg">
                </div>
                <div class="tytuł_zakładki">Dołącz do nas!</div>
            </div>
        </router-link>
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
            helpHeader: 'Wpisz "help", poznaj komendy.',
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
            { name: "info",
            get() {
                return `<p>Witaj na stronie Koła naukowego Programiski i takie tam bla bla bla bla bla blab lalalalalala</p>`;
            }
            },
            {
            name: "club",
            get() {
                return navigator.appVersion;
            }
            },
            {
            name: "news",
            get() {
                return navigator.appVersion;
            }
            },
            {
            name: "callus",
            get() {
                return navigator.appVersion;
            }
            }
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
  .rectangle {
        width: 300px;
        height: 480px;
        background: rgb(0, 0, 0, 0.1);
        border-radius: 30px 30px 30px 30px;
        display : inline-block;
        position: relative;
        margin: 25px;
        margin-top: 35px;
        transition: 0.3s;
        box-shadow: 7px 7px 3px rgb(0, 0, 0, 0.175);
  }
  .rectangle:hover {
  background-color: rgb(0, 0, 0, 0.20);
  color: white; 
  }
  .tytuł_zakładki {
    padding-top: 380px;
    text-align: center;
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    font-size: 25px;
  }
  .zdj_zakładki {
    position: absolute;
    padding: 35px;
  }
  .zdj_zakładki img {
    width: 250px;
    height: 100%;
    border-radius: 25px 25px 25px 25px;
  }
    #container[data-v-02bdc591]{
        width: 50%;
        height: 500px;
        background: rgb(0, 0, 0, 0.15);
        border-radius: 30px 30px 30px 30px;
        display : inline-block;
        position: relative;
        margin: 25px;
        margin-top: 45px;
        padding-left: 120px;
        padding-bottom: 120px;
        left: 65px;
        font-family: 'Inconsolata', monospace;
        color: whitesmoke;
        font-size: 16px;
        max-height: 500px;
        max-width: 50%;
        overflow: hidden;
        overflow-wrap: break-word;
    }
    .prompt[data-v-02bdc591]{
        color: #A7DEBE;
    }
    .cmdline[data-v-02bdc591]{
        color: whitesmoke;
        overflow: hidden;
        overflow-wrap: break-word;
        
    }

</style>