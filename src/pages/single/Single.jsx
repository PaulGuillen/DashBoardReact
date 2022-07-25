import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

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
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Correo:</span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Celular:</span>
                                    <span className="itemValue">+5185476932</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Calle:</span>
                                    <span className="itemValue">San Jose Av Martial . Lima</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Ciudad:</span>
                                    <span className="itemValue">Lima</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={ 6 /  1 } title="Compras del usuario (Ultimos 3 meses)"/>
                    </div>
                </div>
                <div className="bottom">
                <h1 className="title">Últimas transacciones</h1>
                    <List/>
                </div>
            </div>
        </div>
    )
}

export default Single