import "./index.css";

const ListItem = ({item, index, onCheck, onDelete}) => {
    const classes = item.done ? ["completed"] : []
    return <li className={classes}><input type="checkbox" checked={item.done} onChange={(ev)=>onCheck(index, ev.target.checked)}/>&nbsp;{item.content}&nbsp;<span onClick={(ev)=>onDelete(index)}>🗑️</span></li>
}

export default ListItem;
