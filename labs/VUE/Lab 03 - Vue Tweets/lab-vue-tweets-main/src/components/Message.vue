<template>
    <p className="message">
       {{ message }}
     </p>
</template>
<script>
export default {
 props: {
    message: String,
 },
};
</script>