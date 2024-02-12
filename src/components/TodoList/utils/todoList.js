export const addTodoItem = (list, content) => {
    return [...list, {
        content: content,
        done: false
    }];
}

export const deleteTodoItem = (list, index) => {
    return list.toSpliced(index, 1);
}


export const setDoneState = (list, index, done) => {
    let res = [...list];
    res[index].done = done;
    return res;
}
