import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 195357456,
      product: "Lavadora",
      img: "https://electroluxpe.vtexassets.com/arquivos/ids/157292/Washer_LP18C_Perspective_Electrolux_Spanish.jpg?v=637459907739230000",
      customer: "John Smith",
      date: "1 Marzo",
      amount: 985,
      method: "Contra Entrega",
      status: "Pendiente",
    },
    {
      id: 123698547,
      product: "Microondas",
      img: "https://images.samsung.com/is/image/samsung/pe-microwave-oven-grill-mg32j5133am-mg32j5133am-pe-002-r-perspective?$720_576_PNG$",
      customer: "Paolo Cardenas",
      date: "25 Marzo",
      amount: 550,
      method: "Pago Online",
      status: "Aprobado",
    },
    {
      id: 154896357,
      product: "Plancha",
      img: "http://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/03/18122606/4119.jpg",
      customer: "Maria Zapata",
      date: "12 Febrero",
      amount: 95,
      method: "Contra Entrega",
      status: "Pendiente",
    },
    {
      id: 145896571,
      product: "Freidora",
      img: "https://osterpe.vteximg.com.br/arquivos/ids/157849-700-700/Freidora-de-aire-digital-de-4-litros_CKSTAF40M_-1000.jpg?v=637883988209000000/",
      customer: "Karla Correa",
      date: "18 Febrero",
      amount: 95,
      method: "Pago Online",
      status: "Aprobado",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID Venta</TableCell>
            <TableCell className="tableCell">Producto</TableCell>
            <TableCell className="tableCell">Comprador</TableCell>
            <TableCell className="tableCell">Fecha</TableCell>
            <TableCell className="tableCell">Cantidad</TableCell>
            <TableCell className="tableCell">Método de Pago</TableCell>
            <TableCell className="tableCell">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <div className="cellWrapper">
                    <img src={row.img} alt = "" className="image"></img>
                    {row.product}
                </div>
              </TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.method}</TableCell>
              <TableCell><span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
