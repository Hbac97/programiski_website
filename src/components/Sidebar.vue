<template>
    <div>
    <div class="bg-gray-100 bg-opacity-0 ... h-50">
      <nav
        class="
          container
          px-10
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
            "
            >
            <div class="logo">
              <img src="../assets/logowektor.png">
              <b>Koło naukowe<br>PROGRAMIŚKI</b>
            </div>
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/">KOŁO</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/news">AKTUALNOŚCI</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/project">PROJEKTY</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/contact">KONTAKT</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>


<style lang="scss" scoped>
    img {
      max-width: 30%;
      height: auto;
    }
    .Sidebar{
        background-color: var(--dark);

    }
    .logo {
      display : flex;
      flex-direction : row;
      align-items: center;
      font-size: 15px;
      letter-spacing: 1px;
      line-height: 25px;
      text-align: center;
      color: whitesmoke;
      font-family: 'Lato', sans-serif;
      text-shadow: 2px 2px 4px rgb(0,0,0,0.2);
    }
    li {
      color: whitesmoke;
      padding: 30px;
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      text-shadow: 2px 2px 4px rgb(0,0,0,0.2);
    }
    navbar {
      font-weight: 600;
      font-family: 'Lato', sans-serif;
    }
    navbar ul {
      margin-right: 40%;
    }
</style>