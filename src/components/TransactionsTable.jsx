import TransactionRow from "./TransactionRow";
export default function TransactionsTable() {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      <TransactionRow id="1" type="Withdraw" amount="5,000"/>
      <TransactionRow id="2" type="Deposit" amount="3,000,000"/>
      </tbody>
    </table>
  );
}
