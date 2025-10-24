function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage />
      <SelectPercentage />
      <Output />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <div>
      <label for="bill">How much was the bill?</label>
      <input id="bill" type="text" placeholder="Bill Value..." />
    </div>
  );
}

function SelectPercentage() {}

function Output() {}

function Reset() {}

export default App;
