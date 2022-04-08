<template>
  <main>
    <h1>task board</h1>

    <div class="create-new">
      <input type="text" v-model="title" @keypress.enter="addTask">

      <input type="text" v-model="type" @keypress.enter="addTask">

      <input type="text" v-model="value" @keypress.enter="addTask">
      
      <button @click="addTask">add task</button>
    </div>

    <div class="tasks">
      <Task 
        v-for="(task,i) in $store.state.tasks"
        :key="i"
        :task="task"
      />
    </div>

    <div class="create-new">
      <div>
        <h1>
          data:
        </h1>

        <p>
         {{ $store.state.tasks}}
        </p>
      </div>
      <button>
        Send data to api
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      title: "",
      type: "",
      value: "",
    }
  },
  methods: {
    addTask() {
      if(this.title, this.type,this.value) {
        this.$store.commit('ADD_TASK', {
          title: this.title,
          type: this.type,
          value: this.value
        })
        this.title = ""
        this.type= ""
        this.value = ""
      }
    }
  }
}
</script>
