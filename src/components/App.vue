<template>
  <div class="text">{{ text }}</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: "Hello"
    };
  }
};
</script>

<style lang="scss">
$red: red;

.text {
  color: $red;
}
</style>
