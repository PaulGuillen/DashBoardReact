export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar"></img>
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email", headerName: "Email", width: 230
  },
  {
    field: "age", headerName: "Age", width: 100
  },
  {
    field: "status", headerName: "Status", width: 160,
    renderCell:(params)=>{
        return(
            <div className={`cellWithStatus  ${params.row.status}`}>
            {params.row.status}
            </div>

        );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg?w=2000",
    status: "Activo",
    email: "snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Trent",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
    status: "Inactivo",
    email: "snow@gmail.com",
    age: 25,
  },
  {
    id: 3,
    username: "Arnold",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
    status: "Pendiente",
    email: "snow@gmail.com",
    age: 17,
  },

  {
    id: 4,
    username: "Van",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
    status: "Inactivo",
    email: "snow@gmail.com",
    age: 18,
  },

  {
    id: 5,
    username: "Snow",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
    status: "Activo",
    email: "snow@gmail.com",
    age: 20,
  },

  {
    id: 6,
    username: "DePolo",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
    status: "Pendiente",
    email: "snow@gmail.com",
    age: 15,
  },

  {
    id: 7,
    username: "Pedro",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
    status: "Inactivo",
    email: "snow@gmail.com",
    age: 15,
  },

  {
    id: 8,
    username: "Carro",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
    status: "Activo",
    email: "snow@gmail.com",
    age: 15,
  },

  {
    id: 9,
    username: "Jorge",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
    status: "Pendiente",
    email: "snow@gmail.com",
    age: 15,
  },
  {
    id: 10,
    username: "Marco",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
    status: "Inactivo",
    email: "snow@gmail.com",
    age: 15,
  },
];
