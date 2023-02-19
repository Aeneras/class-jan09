<template>
    <span className="name"> {{ user.name }} </span>
   <!--  <span className="handle"> {{ user.handle }} </span> -->
  </template>
  <script>
  export default {
    props: {
       user: {       
        name: String,
        handle: String,
      },
    },
  };
  </script>