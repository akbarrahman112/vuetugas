<template>
  <div >
    List User
    <user v-for="(user, index) in users"
          :firstname="user.firstname"
          :lastname="user.lastname"
          :key="index"></user>
  </div>
</template>

<script>
  import User from '@/components/User'
    export default{
      name: 'componen1',
      data() {
        return{
          users:{
            firstname: 'Moch Abdul',
            lastname: 'Aziz'
          }
        }
      }
    }
</script>
