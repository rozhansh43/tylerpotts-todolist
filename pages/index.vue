<template>
  <main>
    <h1>task board</h1>

    {{ newTasks }}

    <div class="create-new">
      <input type="text" v-model="title" @keypress.enter="addTask" />
      <br />
      <input type="text" v-model="type" @keypress.enter="addTask" />
      <br />

      <input type="text" v-model="value" @keypress.enter="addTask" />
      <br />

      <button @click="addTask">add task</button>
    </div>

    <div class="tasks">
      <Task
        @update="update"
        v-for="(task, i) in $store.state.tasks"
        :key="i"
        :task="task"
      />
    </div>

    <div class="create-new">
      <div>
        <h1>data:</h1>

        <p>
          {{ $store.state.tasks }}
        </p>
      </div>
      <button>Send data to api</button>
    </div>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      title: "",
      type: "",
      newTasks: [],
      value: "",
      apiTask: [
        {
          id: "996801213",
          title: "llllllll",
          type: "kkkkkkkk",
          value: "iiiiiii",
          done: false,
        },
        { id: "104487746", title: "hhhhhhh", type: "uuuuuuuu", done: false },
        { id: "855403452", title: "mmmmm", done: false },
      ],
      type: null,
    };
  },
  watch: {
    type: function (value) {
      console.log(value);
    },
  },
  methods: {
    addTask() {
      if ((this.title, this.type, this.value)) {
        this.$store.commit("ADD_TASK", {
          title: this.title,
          type: this.type,
          value: this.value,
          _rowVariant: "danger",
        });
        this.title = "";
        this.type = "";
        this.value = "";
      }
    },
    update() {
      this.newTasks = this.apiTask.filter((x) => x.type !== "delete");
    },
  },
  mounted() {
    this.$store.commit("SET_API_TASKS", this.apiTask);
    this.apiTask.forEach((record) => {
      record._rowVariant = "success";
      this.type = record.type
    });
    // this.apiTask.forEach((task) => {
    //   if (task.type != "delete") {
    //     this.newTasks.push(task);
    //   }
    // });
  },
};
</script>
