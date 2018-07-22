<template>
  <form action="#" class="form">
    <div class="form__row">
      <Input name="name"
        id="name"
        label="Name"
        v-model="form.name"/>
    </div>
    <div class="form__row">
      <Radio name="gender"
        id="male"
        label="male"
        value="male"
        v-model="form.gender" />
      <Radio name="gender"
        id="female"
        label="female"
        value="female"
        v-model="form.gender" />
    </div>
    <div class="form__row">
      <Checkbox name="hashtags"
        id="#food"
        label="#food"
        value="#food"
        v-model="form.hashtags" />
      <Checkbox name="hashtags"
        id="#art"
        label="#art"
        value="#art"
        v-model="form.hashtags" />
      <Checkbox name="hashtags"
        id="#home"
        label="#home"
        value="#home"
        v-model="form.hashtags" />
    </div>
    <div class="form__row">
      <Checkbox name="subscribe"
        id="subscribe"
        label="subscribe"
        v-model="form.subscribe" />
    </div>
  </form>
</template>

<script>
import Input from './formComponents/Input.vue';
import Radio from './formComponents/Radio.vue';
import Checkbox from './formComponents/Checkbox.vue';

export default {
  name: 'App',
  components: {
    Input,
    Radio,
    Checkbox,
  },
  data() {
    return {
      form: {
        name: 'test name',
        gender: 'female',
        hashtags: ['#food', '#art'],
        subscribe: true,
      },
    };
  },
};
</script>

<style lang="scss">
.form {
  width: 500px;
  margin: 0 auto;

  &__row {
    margin-bottom: 20px;
  }
}
</style>
