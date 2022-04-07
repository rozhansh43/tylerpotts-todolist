export const state = () => ({
    tasks: [],
})

export const mutations = {
    ADD_TASK(state, task) {
        state.tasks = [{
            id: String(Math.floor(Math.random() * 999999999)),
            content: task,
            done: false
        }, ...state.tasks]
    },
    REMOVE_TASK(state, task) {
        state.tasks = state.tasks.filter(o => o.id !== task.id)
    },
    TOGGLE_TASK(state, task) {
        task.done = !task.done
    },
    EDIT_TODO(state, task) {
        state.tasks.filter(o => {
            o.content = task.content
        })
    },
    update_todo(state, task) {
        let index = state.tasks.findIndex((t) => t.id == task.id);
        if (index != -1) {
            state.tasks[index] = task;
        }
    },
}

export const actions = {
    updateTodo({ commit }, task) {
        commit("update_todo", task);
    },
}