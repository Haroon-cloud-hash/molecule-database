const search = document.getElementById("search");
const results = document.getElementById("results");

async function searchMolecule() {
  const query = search.value.trim();

  if (!query) {
    results.innerHTML = "<p>Please enter a molecule name or formula.</p>";
    return;
  }

  results.innerHTML = "<p>🔎 Searching molecule...</p>";

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
    const molecule = data.PropertyTable.Properties[0];

    results.innerHTML = `
      <div class="molecule-card">
        <h2>🧪 ${molecule.IUPACName || query}</h2>

        <p>
          <strong>Formula:</strong>
          ${molecule.MolecularFormula || "Not available"}
        </p>

        <p>
          <strong>Molecular Weight:</strong>
          ${molecule.MolecularWeight || "Not available"} g/mol
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
        <p>Try another molecule name, such as Water, Oxygen or Methane.</p>
      </div>
    `;
  }
}

search.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    searchMolecule();
  }
});
