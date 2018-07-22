<template>
  <div class="input">
    <input type="radio" class="input__input"
      :id="id"
      :name="name"
      :value="value"
      :checked="isChecked"
      @change="changeHandler">
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  model: {
    prop: 'modelValue',
    event: 'changeRadio',
  },
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
    modelValue: {
      default: '',
    },
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value;
    },
  },
  methods: {
    changeHandler() {
      this.$emit('changeRadio', this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  display: inline-block;

  &__input {
    display: inline-block;
  }

  &__label {
    display: inline-block;
  }
}
</style>