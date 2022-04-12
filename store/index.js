export const state = () => ({
    tasks: [],
    apiTasks: []
});

export const mutations = {
    ADD_TASK(state, task) {
        state.tasks.unshift({
            id: String(Math.floor(Math.random() * 999999999)),
            title: task.title,
            type: "insert",
            value: task.value,
            _rowVariant: "danger",
        })
    },
    SET_API_TASKS(state, apiTasks) {
        state.tasks = apiTasks;
    },
    REMOVE_TASK(state, task) {
        console.log('task in module');
        console.log(task);
        task.type = "delete";
        // state.tasks = filter(state.tasks,{ type: "delete" });
    },
    TOGGLE_TASK(state, task) {
        task.done = !task.done;
    },
    EDIT_TODO(state, {newValue , task }) {
        console.log('task');
        console.log(task);
        if(task._rowVariant = "success") {
            task._rowVariant = "danger"
            task.type = "update"
        }
        task.title = newValue
    }
};