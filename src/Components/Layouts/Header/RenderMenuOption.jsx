const RenderMenuOption = ({ navigationList }) => {
  return navigationList.map((item, index) => {
    // if (x.children)
    //   return (
    //     <li className="main-menu">
    //       <input type="checkbox" id={`${"item" + index}`} />
    //       <label htmlFor={`${"item" + index}`}>{x.label}</label>
    //       <ul className="sub-menu">
    //         <RenderMenuOption navigationList={x.children} />
    //       </ul>
    //     </li>
    //   );
    // else return <li className="menu-item">{x.label}</li>;
  });
};
export default RenderMenuOption;
