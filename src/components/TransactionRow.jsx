export default function TransactionRow({id, type, amount}) {
  return (
      <tr>
        <td>{id}</td>
        <td>{type}</td>
        <td>{amount}</td>
      </tr>
  );
}
