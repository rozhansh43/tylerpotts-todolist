export const state = () => ({
    tasks: [],
    apiTasks: [
        { "id": "996801213", "title": "llllllll", "type": "kkkkkkkk", "value": "iiiiiii", "done": false },
        { "id": "104487746", "title": "hhhhhhh", "type": "uuuuuuuu", "done": false },
        { "id": "855403452", "title": "mmmmm", "done": false }
    ]
})

export const mutations = {
    ADD_TASK(state, task) {
        state.tasks = [{
            id: String(Math.floor(Math.random() * 999999999)),
            title: task.title,
            type: task.type,
            value: task.value,
            done: false
        }, ...state.apiTasks]
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
    }
}