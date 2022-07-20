import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100
  const diff = 20

  switch (type) {
    case "user":
      data = {
        title: "Usuarios",
        isMoney: false,
        link: "Ver todos los usuarios",
        icon: <PersonOutlineIcon className="icon" />,
      };
      break;
    case "order":
      data = {
        title: "Pedidos",
        isMoney: false,
        link: "Ver todos los pedidos",
        icon: <ShoppingCartIcon className="icon" />,
      };
      break;
    case "earning":
      data = {
        title: "Ganancias",
        isMoney: false,
        link: "Ver ganancias",
        icon: <MonetizationOnIcon className="icon" />,
      };
      break;
      case "balance":
        data = {
          title: "Balance",
          isMoney: false,
          link: "Ver el balance",
          icon: <AccountBalanceIcon className="icon" />,
        };
        break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}
        {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon className="icon" />
          {diff} %
        </div>
        {data.icon}
        <PersonOutlineIcon className="icon" />
      </div>
    </div>
  );
};

export default Widget;
