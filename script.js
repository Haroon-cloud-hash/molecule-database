const search = document.getElementById("search");
const results = document.getElementById("results");

const reactant1 = document.getElementById("reactant1");
const reactant2 = document.getElementById("reactant2");
const reactionResult = document.getElementById("reaction-result");

/* ================================
   COMMON MOLECULE DATABASE
================================ */

const molecules = [
  { name: "Hydrogen", formula: "H₂", key: "hydrogen" },
  { name: "Oxygen", formula: "O₂", key: "oxygen" },
  { name: "Nitrogen", formula: "N₂", key: "nitrogen" },
  { name: "Water", formula: "H₂O", key: "water" },
  { name: "Carbon Dioxide", formula: "CO₂", key: "carbon-dioxide" },
  { name: "Carbon Monoxide", formula: "CO", key: "carbon-monoxide" },
  { name: "Carbon", formula: "C", key: "carbon" },
  { name: "Methane", formula: "CH₄", key: "methane" },
  { name: "Ethane", formula: "C₂H₆", key: "ethane" },
  { name: "Propane", formula: "C₃H₈", key: "propane" },
  { name: "Butane", formula: "C₄H₁₀", key: "butane" },
  { name: "Glucose", formula: "C₆H₁₂O₆", key: "glucose" },
  { name: "Ethanol", formula: "C₂H₆O", key: "ethanol" },

  { name: "Hydrochloric Acid", formula: "HCl", key: "hydrochloric-acid" },
  { name: "Sulfuric Acid", formula: "H₂SO₄", key: "sulfuric-acid" },
  { name: "Nitric Acid", formula: "HNO₃", key: "nitric-acid" },
  { name: "Acetic Acid", formula: "CH₃COOH", key: "acetic-acid" },

  { name: "Sodium Hydroxide", formula: "NaOH", key: "sodium-hydroxide" },
  { name: "Potassium Hydroxide", formula: "KOH", key: "potassium-hydroxide" },
  { name: "Calcium Hydroxide", formula: "Ca(OH)₂", key: "calcium-hydroxide" },

  { name: "Sodium Chloride", formula: "NaCl", key: "sodium-chloride" },
  { name: "Calcium Carbonate", formula: "CaCO₃", key: "calcium-carbonate" },
  { name: "Sodium Carbonate", formula: "Na₂CO₃", key: "sodium-carbonate" },
  { name: "Sodium Bicarbonate", formula: "NaHCO₃", key: "sodium-bicarbonate" },

  { name: "Ammonia", formula: "NH₃", key: "ammonia" },
  { name: "Chlorine", formula: "Cl₂", key: "chlorine" },
  { name: "Sulfur", formula: "S", key: "sulfur" },
  { name: "Sulfur Dioxide", formula: "SO₂", key: "sulfur-dioxide" },
  { name: "Sulfur Trioxide", formula: "SO₃", key: "sulfur-trioxide" },

  { name: "Magnesium", formula: "Mg", key: "magnesium" },
  { name: "Calcium", formula: "Ca", key: "calcium" },
  { name: "Sodium", formula: "Na", key: "sodium" },
  { name: "Potassium", formula: "K", key: "potassium" },

  { name: "Magnesium Oxide", formula: "MgO", key: "magnesium-oxide" },
  { name: "Calcium Oxide", formula: "CaO", key: "calcium-oxide" },
  { name: "Iron Oxide", formula: "Fe₂O₃", key: "iron-oxide" },

  { name: "Copper Sulfate", formula: "CuSO₄", key: "copper-sulfate" },
  { name: "Silver Nitrate", formula: "AgNO₃", key: "silver-nitrate" },
  { name: "Barium Chloride", formula: "BaCl₂", key: "barium-chloride" },

  { name: "Caffeine", formula: "C₈H₁₀N₄O₂", key: "caffeine" }
];


/* ================================
   KNOWN REACTIONS
================================ */

const reactions = {

  "hydrogen+oxygen": {
    equation: "2H₂ + O₂ → 2H₂O",
    title: "Formation of Water",
    info: "Hydrogen reacts with oxygen to form water."
  },

  "hydrochloric-acid+sodium-hydroxide": {
    equation: "HCl + NaOH → NaCl + H₂O",
    title: "Neutralisation Reaction",
    info: "An acid reacts with a base to form salt and water."
  },

  "carbon+oxygen": {
    equation: "C + O₂ → CO₂",
    title: "Combustion of Carbon",
    info: "Carbon reacts with oxygen to form carbon dioxide."
  },

  "carbon-monoxide+oxygen": {
    equation: "2CO + O₂ → 2CO₂",
    title: "Oxidation of Carbon Monoxide",
    info: "Carbon monoxide reacts with oxygen to form carbon dioxide."
  },

  "methane+oxygen": {
    equation: "CH₄ + 2O₂ → CO₂ + 2H₂O",
    title: "Combustion of Methane",
    info: "Methane reacts with oxygen to form carbon dioxide and water."
  },

  "ethane+oxygen": {
    equation: "2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O",
    title: "Combustion of Ethane",
    info: "Ethane reacts with oxygen to form carbon dioxide and water."
  },

  "propane+oxygen": {
    equation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
    title: "Combustion of Propane",
    info: "Propane reacts with oxygen to form carbon dioxide and water."
  },

  "butane+oxygen": {
    equation: "2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O",
    title: "Combustion of Butane",
    info: "Butane reacts with oxygen to form carbon dioxide and water."
  },

  "glucose+oxygen": {
    equation: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
    title: "Cellular Respiration",
    info: "Glucose reacts with oxygen to release energy, producing carbon dioxide and water."
  },

  "sodium-bicarbonate+hydrochloric-acid": {
    equation: "NaHCO₃ + HCl → NaCl + H₂O + CO₂",
    title: "Acid–Carbonate Reaction",
    info: "Hydrochloric acid reacts with sodium bicarbonate to produce salt, water and carbon dioxide."
  },

  "calcium-carbonate+hydrochloric-acid": {
    equation: "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂",
    title: "Acid–Carbonate Reaction",
    info: "Hydrochloric acid reacts with calcium carbonate to produce a salt, water and carbon dioxide."
  },

  "sulfur+oxygen": {
    equation: "S + O₂ → SO₂",
    title: "Formation of Sulfur Dioxide",
    info: "Sulfur combines with oxygen to form sulfur dioxide."
  },

  "sulfur-dioxide+oxygen": {
    equation: "2SO₂ + O₂ → 2SO₃",
    title: "Oxidation of Sulfur Dioxide",
    info: "Sulfur dioxide can be oxidised to sulfur trioxide."
  },

  "calcium+oxygen": {
    equation: "2Ca + O₂ → 2CaO",
    title: "Formation of Calcium Oxide",
    info: "Calcium combines with oxygen to form calcium oxide."
  },

  "magnesium+oxygen": {
    equation: "2Mg + O₂ → 2MgO",
    title: "Formation of Magnesium Oxide",
    info: "Magnesium combines with oxygen to form magnesium oxide."
  },

  "sodium+chlorine": {
    equation: "2Na + Cl₂ → 2NaCl",
    title: "Formation of Sodium Chloride",
    info: "Sodium combines with chlorine to form sodium chloride."
  },

  "nitrogen+hydrogen": {
    equation: "N₂ + 3H₂ ⇌ 2NH₃",
    title: "Formation of Ammonia",
    info: "Nitrogen and hydrogen can combine reversibly to form ammonia."
  },

  "sodium-carbonate+hydrochloric-acid": {
    equation: "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂",
    title: "Acid–Carbonate Reaction",
    info: "Hydrochloric acid reacts with sodium carbonate to produce salt, water and carbon dioxide."
  }
};


/* ================================
   CREATE REACTION OPTIONS
================================ */

function populateReactionSelects() {

  if (!reactant1 || !reactant2) {
    return;
  }

  reactant1.innerHTML =
    '<option value="">Select first compound</option>';

  reactant2.innerHTML =
    '<option value="">Select second compound</option>';

  molecules.forEach(molecule => {

    const option1 = document.createElement("option");
    option1.value = molecule.key;
    option1.textContent =
      molecule.name + " (" + molecule.formula + ")";

    const option2 = option1.cloneNode(true);

    reactant1.appendChild(option1);
    reactant2.appendChild(option2);

  });
}


/* ================================
   REACTION SEARCH
================================ */

function showReaction() {

  if (!reactant1 || !reactant2 || !reactionResult) {
    return;
  }

  const first = reactant1.value;
  const second = reactant2.value;

  if (!first || !second) {

    reactionResult.innerHTML = `
      <div class="reaction-card">
        <h3>⚠️ Select two compounds</h3>
        <p>Please select both compounds to check a reaction.</p>
      </div>
    `;

    return;
  }

  if (first === second) {

    reactionResult.innerHTML = `
      <div class="reaction-card">
        <h3>ℹ️ Same compound selected</h3>
        <p>Please select two different compounds.</p>
      </div>
    `;

    return;
  }

  const key1 = first + "+" + second;
  const key2 = second + "+" + first;

  const reaction =
    reactions[key1] || reactions[key2];

  if (!reaction) {

    reactionResult.innerHTML = `
      <div class="reaction-card">
        <h3>ℹ️ Reaction not available</h3>
        <p>
          A known reaction for these two compounds has not
          been added to our current reaction database yet.
        </p>
      </div>
    `;

    return;
  }

  reactionResult.innerHTML = `
    <div class="reaction-card">
      <h3>⚗️ ${reaction.title}</h3>

      <p>
        <strong>Balanced Equation:</strong>
      </p>

      <div class="equation">
        ${reaction.equation}
      </div>

      <p>
        <strong>About:</strong>
        ${reaction.info}
      </p>
    </div>
  `;
}


/* ================================
   PUBCHEM MOLECULE SEARCH
================================ */

async function searchMolecule() {

  const query = search.value.trim();

  if (!query) {

    results.innerHTML =
      "<p>🔎 Please enter a molecule name or formula.</p>";

    return;
  }

  results.innerHTML =
    "<p>🔎 Searching PubChem...</p>";

  try {

    const url =
      "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/" +
      encodeURIComponent(query) +
      "/property/MolecularFormula,MolecularWeight,IUPACName/JSON";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Molecule not found");
    }

    const data = await response.json();

    if (
      !data.PropertyTable ||
      !data.PropertyTable.Properties ||
      data.PropertyTable.Properties.length === 0
    ) {
      throw new Error("No molecule data");
    }

    const molecule =
      data.PropertyTable.Properties[0];

    results.innerHTML = `
      <div class="molecule-card">

        <h2>
          🧪 ${molecule.IUPACName || query}
        </h2>

        <p>
          <strong>Formula:</strong>
          ${molecule.MolecularFormula || "Not available"}
        </p>

        <p>
          <strong>Molecular Weight:</strong>
          ${molecule.MolecularWeight || "Not available"}
          g/mol
        </p>

        <p>
          <strong>Source:</strong>
          PubChem
        </p>

      </div>
    `;

  } catch (error) {

    results.innerHTML = `
      <div class="molecule-card">

        <h2>❌ Molecule not found</h2>

        <p>
          Try another molecule name, such as
          Water, Oxygen, Glucose, Methane or Caffeine.
        </p>

      </div>
    `;
  }
}


/* ================================
   ENTER KEY SEARCH
================================ */

if (search) {

  search.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
      searchMolecule();
    }

  });

}


/* ================================
   START WEBSITE
================================ */

populateReactionSelects();
