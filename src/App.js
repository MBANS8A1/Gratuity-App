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
      <SelectPercentage>How did you like the service?</SelectPercentage>
      <SelectPercentage>How did your friend like the service?</SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <div>
      <label htmlFor="bill">How much was the bill?</label>
      <input id="bill" type="text" placeholder="Bill Value..." />
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div>
      <label htmlFor="satisDegree">{children}</label>
      <select id="satisDegree">
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output() {
  <return>
    <h3>You pay X ($A + $B tip)</h3>
  </return>;
}

function Reset() {}

export default App;
