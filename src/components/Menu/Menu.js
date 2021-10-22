import "./Menu.css";

const Menu = props => {
  const menuItems = props.menuItems;
  const individualMapItem = menuItems.map((item, index) => {
    return (
      <article className="menu-item">
        <img src={item.img} alt="menu item" className="photo" />
        <div className="item-info">
          <header>
            <h4>{item.title}</h4>
            <h4 className="price">{item.price}</h4>
          </header>
          <p className="item-text">{item.desc}</p>
        </div>
      </article>
    );
  });
  return <div className="menu-items-wrapper">{individualMapItem}</div>;
};

export default Menu;
