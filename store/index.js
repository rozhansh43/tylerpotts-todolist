export const state = () => ({
    tasks: [],
    apiTasks: []
});

export const mutations = {
    ADD_TASK(state, task) {
        state.tasks.unshift({
            id: String(Math.floor(Math.random() * 999999999)),
            title: task.title,
            type: task.type,
            value: task.value,
            _rowVariant: "danger",
        })
    },
    SET_API_TASKS(state, apiTasks) {
        state.tasks = apiTasks;
    },
    REMOVE_TASK(state, task) {
        state.tasks = state.tasks.filter((o) => {
            o.id !== task.id
        });
        console.log('task.id');
        console.log(task.id);
    },
    TOGGLE_TASK(state, task) {
        task.done = !task.done;
    },
    EDIT_TODO(state, {newValue , task }) {
        console.log('task');
        console.log(task);
        task.title = newValue
    }
};