const molecules = [
  {
    name: "Oxygen",
    formula: "O₂",
    type: "Element",
    info: "Oxygen is a gas essential for respiration and combustion."
  },
  {
    name: "Water",
    formula: "H₂O",
    type: "Compound",
    info: "Water is essential for life and is made of hydrogen and oxygen."
  },
  {
    name: "Methane",
    formula: "CH₄",
    type: "Compound",
    info: "Methane is a simple hydrocarbon and a major component of natural gas."
  },
  {
    name: "Carbon Dioxide",
    formula: "CO₂",
    type: "Compound",
    info: "Carbon dioxide is produced during respiration and combustion."
  },
  {
    name: "Hydrogen",
    formula: "H₂",
    type: "Element",
    info: "Hydrogen is the lightest element and is highly flammable."
  },
  {
    name: "Nitrogen",
    formula: "N₂",
    type: "Element",
    info: "Nitrogen is the most abundant gas in Earth's atmosphere."
  }
];

const search = document.getElementById("search");
const results = document.getElementById("results");

function showResults(text) {
  const query = text.trim().toLowerCase();

  if (query === "") {
    results.innerHTML = "";
    return;
  }

  const found = molecules.filter(molecule =>
    molecule.name.toLowerCase().includes(query) ||
    molecule.formula.toLowerCase().includes(query) ||
    molecule.type.toLowerCase().includes(query)
  );

  if (found.length === 0) {
    results.innerHTML = "<p>No molecule found.</p>";
    return;
  }

  results.innerHTML = found.map(molecule => `
    <div class="molecule-card">
      <h2>${molecule.name}</h2>
      <p><strong>Formula:</strong> ${molecule.formula}</p>
      <p><strong>Type:</strong> ${molecule.type}</p>
      <p>${molecule.info}</p>
    </div>
  `).join("");
}

search.addEventListener("input", function () {
  showResults(this.value);
});
