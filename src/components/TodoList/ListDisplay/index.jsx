import ListItem from "./ListItem";

const ListDisplay = ({todoList, onCheck, onDelete}) => {
    return <ul>
        {todoList.map((item, index) => <ListItem item={item} index={index} onCheck={onCheck} onDelete={onDelete} />)}
    </ul>
}

export default ListDisplay;
