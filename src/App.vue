<script>
  import Sidebar from './components/Sidebar.vue'
  
  export default {
    components: {
      Sidebar
    }
  }


</script>

<template>
  <div class="app overflow-x-hidden">
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
}
.app {
  min-height: 100vh;
  position: relative;
  background: rgb(99,205,127);
  background: linear-gradient(225deg, rgba(99,205,127,0.5609594179468662) 0%, rgba(91,170,158,1) 45%, rgba(72,130,158,1) 92%, rgba(80,147,158,1) 100%);
  color: whitesmoke;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}

</style>
