import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Nuevo Usario</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
              alt=""
            />
          </div>
          <div className="right">Right</div>
        </div>
      </div>
    </div>
  );
};

export default New;
