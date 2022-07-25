import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Single = () => {
    return(
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Editar</div>
                        <h1 className="title">Informacion</h1>
                        <div className="item">
                            <img src="https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg"
                            alt=""
                            className="itemImg" />
                             details
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="bottom"></div>
            </div>
        </div>
    )
}

export default Single