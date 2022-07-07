<script>
  import Sidebar from './components/Sidebar.vue'
  
  export default {
    components: {
      Sidebar
    }
  }


</script>

<template>
  <div class="app">
    <Sidebar />
    <router-view />
    



  </div>
  
</template>



<style lang="scss">

:root {
  --primary: #4ade80;
  --dark: #1e293b;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}
.app {
  min-height: 100vh;
  position: relative;
  background-color: var(--dark);
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}

</style>
