function Addtodo() {
  return (
    <div className="row kg-row">
      <div className="col-6">
        <input type="text" placeholder="Enter todo here" /></div>
      <div className="col-4"><input type="date" /></div>
      <div className="col-2">
        <button type="button" className="btn btn-success kg-button">Success</button>
      </div>
    </div>
  );
}

export default Addtodo;
