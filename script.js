const search = document.getElementById("search");
const results = document.getElementById("results");
const reactionResult = document.getElementById("reaction-result");

// ===============================
// MOLECULE SEARCH - PUBCHEM
// ===============================

async function searchMolecule() {
    const query = search.value.trim();

    if (!query) {
        results.innerHTML = "<p>⚠️ Please enter a molecule name.</p>";
        return;
    }

    results.innerHTML = "<p>🔎 Searching PubChem...</p>";

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
            throw new Error("Molecule not found");
        }

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
                <p>
                    Try another name, such as Water, Oxygen,
                    Glucose, Methane or Caffeine.
                </p>
            </div>
        `;
    }
}


// ===============================
// ENTER KEY SEARCH
// ===============================

search.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchMolecule();
    }
});


// ===============================
// CHEMICAL REACTIONS
// ===============================

function showReaction() {

    const first = document.getElementById("reactant1").value;
    const second = document.getElementById("reactant2").value;

    if (!first || !second) {
        reactionResult.innerHTML =
            "<p>⚠️ Please select both compounds.</p>";
        return;
    }

    let reaction = null;

    // Hydrogen + Oxygen → Water
    if (
        (first === "hydrogen" && second === "oxygen") ||
        (first === "oxygen" && second === "hydrogen")
    ) {
        reaction = {
            equation: "2H₂ + O₂ → 2H₂O",
            name: "Formation of Water",
            info: "Hydrogen reacts with oxygen to form water."
        };
    }

    // Sodium Hydroxide + Hydrochloric Acid
    else if (
        (first === "sodium-hydroxide" &&
            second === "hydrochloric-acid") ||
        (first === "hydrochloric-acid" &&
            second === "sodium-hydroxide")
    ) {
        reaction = {
            equation: "NaOH + HCl → NaCl + H₂O",
            name: "Neutralization Reaction",
            info: "Sodium hydroxide reacts with hydrochloric acid to form sodium chloride and water."
        };
    }

    // No known reaction
    if (!reaction) {
        reactionResult.innerHTML = `
            <div class="reaction-card">
                <h3>ℹ️ Reaction not available</h3>
                <p>
                    A known reaction for these two compounds
                    has not been added yet.
                </p>
            </div>
        `;
        return;
    }

    reactionResult.innerHTML = `
        <div class="reaction-card">
            <h3>⚗️ ${reaction.name}</h3>

            <p>
                <strong>Equation:</strong>
                ${reaction.equation}
            </p>

            <p>${reaction.info}</p>
        </div>
    `;
}
