const molecules = [
  {name:"Water", formula:"H₂O", type:"Inorganic"},
  {name:"Carbon Dioxide", formula:"CO₂", type:"Inorganic"},
  {name:"Oxygen", formula:"O₂", type:"Element"},
  {name:"Hydrogen", formula:"H₂", type:"Element"},
  {name:"Nitrogen", formula:"N₂", type:"Element"},
  {name:"Ozone", formula:"O₃", type:"Element"},
  {name:"Ammonia", formula:"NH₃", type:"Inorganic"},
  {name:"Methane", formula:"CH₄", type:"Organic"},
  {name:"Ethane", formula:"C₂H₆", type:"Organic"},
  {name:"Propane", formula:"C₃H₈", type:"Organic"},
  {name:"Butane", formula:"C₄H₁₀", type:"Organic"},
  {name:"Ethanol", formula:"C₂H₆O", type:"Organic"},
  {name:"Methanol", formula:"CH₄O", type:"Organic"},
  {name:"Acetic Acid", formula:"C₂H₄O₂", type:"Organic"},
  {name:"Glucose", formula:"C₆H₁₂O₆", type:"Organic"},
  {name:"Sucrose", formula:"C₁₂H₂₂O₁₁", type:"Organic"},
  {name:"Benzene", formula:"C₆H₆", type:"Organic"},
  {name:"Toluene", formula:"C₇H₈", type:"Organic"},
  {name:"Acetone", formula:"C₃H₆O", type:"Organic"},
  {name:"Urea", formula:"CH₄N₂O", type:"Organic"},
  {name:"Hydrogen Peroxide", formula:"H₂O₂", type:"Inorganic"},
  {name:"Sodium Chloride", formula:"NaCl", type:"Salt"},
  {name:"Calcium Carbonate", formula:"CaCO₃", type:"Salt"},
  {name:"Sodium Hydroxide", formula:"NaOH", type:"Base"},
  {name:"Calcium Hydroxide", formula:"Ca(OH)₂", type:"Base"},
  {name:"Sulfuric Acid", formula:"H₂SO₄", type:"Acid"},
  {name:"Hydrochloric Acid", formula:"HCl", type:"Acid"},
  {name:"Nitric Acid", formula:"HNO₃", type:"Acid"},
  {name:"Carbon Monoxide", formula:"CO", type:"Inorganic"},
  {name:"Sulfur Dioxide", formula:"SO₂", type:"Inorganic"}
];

const list = document.getElementById("molecule-list");
const search = document.getElementById("search");

function displayMolecules(data) {
  list.innerHTML = "";

  if (data.length === 0) {
    list.innerHTML = "<p>No molecules found.</p>";
    return;
  }

  data.forEach(molecule => {
    const card = document.createElement("div");
    card.className = "molecule-card";

    card.innerHTML = `
      <h2>${molecule.name}</h2>
      <p><strong>Formula:</strong> ${molecule.formula}</p>
      <p><strong>Type:</strong> ${molecule.type}</p>
    `;

    list.appendChild(card);
  });
}

displayMolecules(molecules);

search.addEventListener("input", () => {
  const query = search.value.toLowerCase();

  const filtered = molecules.filter(molecule =>
    molecule.name.toLowerCase().includes(query) ||
    molecule.formula.toLowerCase().includes(query) ||
    molecule.type.toLowerCase().includes(query)
  );

  displayMolecules(filtered);
});
