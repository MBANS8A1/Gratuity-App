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

function BillInput() {}

function SelectPercentage() {}

function Output() {}

function Reset() {}

export default App;
