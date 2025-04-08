import RemoveButton from "./ui/RemoveButton";

export default function TransactionRow({id, type, amount}){
  return (
    <tr>
      <td>{id}</td>
      <td>{type}</td>
      <td>{amount}</td>
      <td><RemoveButton/></td>
    </tr>
  )
}
