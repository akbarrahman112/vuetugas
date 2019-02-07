<template>
  <div >
    Nama User : {{ firstname }} {{ lastname }}
  </div>
</template>

<script>
  export default{
    name: 'User',
      props:[
        'firstname',
        'lastname'
      ]
    }
</script>
