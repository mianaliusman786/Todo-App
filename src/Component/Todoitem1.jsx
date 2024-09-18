function Todoitem1() {
  const todoname = "Milk";
  const tododate = "18/09/2024";

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">Danger</button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem1;
