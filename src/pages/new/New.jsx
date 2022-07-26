import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

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
              src="https://cdn.iconscout.com/icon/free/png-256/photo-size-select-actual-1782180-1512958.png"
              alt=""
            />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                    <label htmlFor="file"> Imagen : <DriveFolderUploadIcon className="icon"/></label>
                    <input type="file" id="file" style={{display:"none"}}></input>
                </div>
                <div className="formInput">
                    <label>Nombre de usuario</label>
                    <input type="text" placeholder= "jhon_doe"></input>
                </div>
                <div className="formInput">
                    <label>Nomnbre y Apellido</label>
                    <input type="text" placeholder= "John Doe"></input>
                </div>
                <div className="formInput">
                    <label>Correo</label>
                    <input type="email" placeholder= "johndoe@gmail.com"></input>
                </div>
                <div className="formInput">
                    <label>Teléfono</label>
                    <input type="text" placeholder= "+51 985745358"></input>
                </div>
                <div className="formInput">
                    <label>Contraseña</label>
                    <input type="password"></input>
                </div>
                <div className="formInput">
                    <label>Dirección</label>
                    <input type = "text" placeholder="San Juan de Miraflores, Paradero. Arco"></input>
                </div>
                <div className="formInput">
                    <label>Ciudad</label>
                    <input type="text" placeholder="Lima"></input>
                </div>
                <button>Enviar</button>
            </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default New;
