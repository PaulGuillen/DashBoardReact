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
        icon: <PersonOutlineIcon className="icon" 
        style ={{
            color:"crimson",
            backgroundColor : "rgba(255,0,0,0.2)",
        }}/>
      };
      break;
    case "order":
      data = {
        title: "Pedidos",
        isMoney: false,
        link: "Ver todos los pedidos",
        icon: <ShoppingCartIcon className="icon" 
        style ={{
            color:"goldenrod",
            backgroundColor : "rgba(218,165,32,0.2)",
        }}/>,
      };
      break;
    case "earning":
      data = {
        title: "Ganancias",
        isMoney: false,
        link: "Ver ganancias",
        icon: <MonetizationOnIcon className="icon" 
        style ={{
            color:"green",
            backgroundColor : "rgba(0,128,0,0.2)",
        }}/>,
    
      };
      break;
      case "balance":
        data = {
          title: "Balance",
          isMoney: false,
          link: "Ver el balance",
          icon: <AccountBalanceIcon className="icon" 
          style ={{
            color:"purple",
            backgroundColor : "rgba(128,0,128,0.2)",
        }}/>,
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
      </div>
    </div>
  );
};

export default Widget;
