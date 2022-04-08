<template>
  <div :class="`task ${task.done ? 'is-complete' : ''}`">
    <div v-if="!editing" class="content">
      <p>
        title:  {{ task.title }}
      </p>

      <p>
        type: {{ task.type }}
      </p>

      <p>
       value:  {{ task.value }}
      </p>
    </div>

    <div v-else>
      <input v-model="todoText" type="text" />
      {{todoText}}
    </div>

    <div class="buttons">
      <button @click="toggleDone">{{ task.done ? "Undo" : "Done" }}</button>
      <button @click="editTask()" class="btn btn-primary mx-2">
        {{ editing ? "Update" : "Edit" }}
      </button>
      <button @click="removeTask" class="delete">delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      editing: false,
      todoText: "",
    };
  },
  methods: {
   toggleDone() {
      this.$store.commit("TOGGLE_TASK", this.task);
    },
    removeTask() {
      this.$store.commit("REMOVE_TASK", this.task);
    },
    editTask() {
      this.editing = this.editing == true ? false : true;
      this.todoText = this.task.content;
      this.$store.commit("EDIT_TODO", this.task);
    },
  },
};
</script>