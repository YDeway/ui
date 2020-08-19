<template>
    <div>
        跳转中...请稍后...
    </div>
</template>
<script>
export default {
    mounted() {
        // setTimeout(() => {
        this.$router.push('/');
        // }, 1000);
  }
}
</script>