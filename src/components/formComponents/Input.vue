<template>
  <div class="input">
    <label class="input__label"
      v-if="label"
      :for="id">{{ label }}</label>
    <input type="text" class="input__input"
      :id="id"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: {
      type: String,
    },
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    value: {
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  &__label {
    display: block;
    margin-bottom: 5px;
    cursor: pointer;
  }
  &__input {
    display: block;
    width: 100%;
  }
}
</style>