<template>
  <main>
    <h1>task board</h1>

    <div class="create-new">
      <input type="text" v-model="newTask" @keypress.enter="addTask">
      <button @click="addTask">add task</button>
    </div>

    <div class="tasks">
      <Task 
        v-for="(task,i) in $store.state.tasks"
        :key="i"
        :task="task"
      />
        {{ $store.state.tasks}}
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      newTask: ""
    }
  },
  methods: {
    addTask() {
      if(this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask)
        this.newTask = ""
      }
    }
  }
}
</script>
