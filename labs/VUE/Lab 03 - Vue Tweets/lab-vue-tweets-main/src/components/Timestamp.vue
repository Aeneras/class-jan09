<template>
    <span className="timestamp">{{ timestamp }}</span>
  </template>
  <script>
  export default {
    props: {
       timestamp: String,
    },
  };
  </script>