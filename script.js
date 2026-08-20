function showReaction() {
    const first = document.getElementById("reactant1").value;
    const second = document.getElementById("reactant2").value;
    const result = document.getElementById("reaction-result");

    if (!first || !second) {
        result.innerHTML = "<p>⚠️ Please select both compounds.</p>";
        return;
    }

    const key = first + "+" + second;

    const reactions = {

        "hydrogen+oxygen": {
            equation: "2H₂ + O₂ → 2H₂O",
            info: "Hydrogen reacts with oxygen to form water."
        },

        "oxygen+hydrogen": {
            equation: "2H₂ + O₂ → 2H₂O",
            info: "Hydrogen reacts with oxygen to form water."
        },

        "hydrochloric-acid+sodium-hydroxide": {
            equation: "HCl + NaOH → NaCl + H₂O",
            info: "This is a neutralisation reaction between an acid and a base."
        },

        "sodium-hydroxide+hydrochloric-acid": {
            equation: "HCl + NaOH → NaCl + H₂O",
            info: "This is a neutralisation reaction between an acid and a base."
        },

        "carbon-dioxide+water": {
            equation: "CO₂ + H₂O ⇌ H₂CO₃",
            info: "Carbon dioxide dissolves in water and forms carbonic acid."
        },

        "water+carbon-dioxide": {
            equation: "CO₂ + H₂O ⇌ H₂CO₃",
            info: "Carbon dioxide dissolves in water and forms carbonic acid."
        },

        "calcium-oxide+water": {
            equation: "CaO + H₂O → Ca(OH)₂",
            info: "Calcium oxide reacts with water to form calcium hydroxide."
        },

        "water+calcium-oxide": {
            equation: "CaO + H₂O → Ca(OH)₂",
            info: "Calcium oxide reacts with water to form calcium hydroxide."
        },

        "sodium-carbonate+hydrochloric-acid": {
            equation: "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂",
            info: "An acid reacts with a carbonate to produce salt, water and carbon dioxide."
        },

        "hydrochloric-acid+sodium-carbonate": {
            equation: "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂",
            info: "An acid reacts with a carbonate to produce salt, water and carbon dioxide."
        }
    };

    if (reactions[key]) {

        result.innerHTML = `
            <div class="reaction-card">
                <h3>🧪 Reaction Found</h3>
                <p class="equation">
                    ${reactions[key].equation}
                </p>
                <p>
                    ${reactions[key].info}
                </p>
            </div>
        `;

    } else {

        result.innerHTML = `
            <div class="reaction-card">
                <h3>ℹ️ Reaction not available</h3>
                <p>
                    A known reaction for these two compounds
                    has not been added yet.
                </p>
            </div>
        `;
    }
                }
