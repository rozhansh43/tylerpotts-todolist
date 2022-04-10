<template>
  <div style="background-color: white; color: black; padding: 20px">
    <input type="text" v-model="inputText" />

    <br />

    <button @click="editToDo">update value</button>
    {{ task.title }}
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      inputText: this.task.title,
    };
  },
  methods: { 
    editToDo() {
      console.log("hhh");
      this.$store.commit("EDIT_TODO", this.inputText);
    },
  }
};
</script>
