<template>
  <div class="home">
    <h1>欢迎</h1>
  </div>
</template>

<script>
  import axios from 'axios'
// @ is an alias to /src
export default {
  name: 'home',
  mounted(){
     axios({
       method: 'post',
       url:'/GetAPKReleaseNote',
       data:{
         APKNAME:'BootWizard',
         VERSION1:'v1.0.0_1',
         VERSION2:'v1.0.0_2'
       }
     }).then(res=>console.log(res))
  },
  components: {
  }
}
</script>
