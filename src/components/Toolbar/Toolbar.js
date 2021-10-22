import "./Toolbar.css";

const Toolbar = props => {
  console.log(props);
  const getClass = category => {
    return category === props.activeMenuItem ? "active-item" : "";
  };
  const items = props.categories;
  const buttons = items.map(item => {
    return (
      <button
        onClick={() => props.changeMenuItems(item.category)}
        class={getClass(item.category)}
      >
        {item.category}
      </button>
    );
  });
  return <div className="toolbar">{buttons}</div>;
};

export default Toolbar;
