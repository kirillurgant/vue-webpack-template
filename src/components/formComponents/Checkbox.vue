<template>
  <div class="input">
    <input type="checkbox" class="input__input"
      :id="id"
      :name="name"
      :value="value"
      :checked="isChecked"
      @change="changeHandler" />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'modelValue',
    event: 'changeCheckbox',
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
      default: [],
    },
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }

      return !!this.modelValue;
    },
  },
  methods: {
    changeHandler(event) {
      const { checked } = event.target;

      if (this.modelValue instanceof Array) {
        const newVal = [...this.modelValue];

        if (checked) {
          newVal.push(this.value);
        } else {
          newVal.splice(newVal.indexOf(this.value), 1);
        }

        this.$emit('changeCheckbox', newVal);
      } else {
        this.$emit('changeCheckbox', checked);
      }
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
