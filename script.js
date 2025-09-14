document.getElementById("convertBtn").addEventListener("click", () => {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const input = document.getElementById("inputValue").value.trim();

    if (!input) {
        document.getElementById("result").textContent = "⚠ Please enter a number!.";
        document.getElementById("steps").textContent = "";
        return;
    }

    if (from === to) {
        document.getElementById("result").textContent = "⚠ Choose diffent number system!.";
        document.getElementById("steps").textContent = "";
        return;
    }

    let decimalValue = parseInt(input, getBase(from));
    if (isNaN(decimalValue)) {
        document.getElementById("result").textContent = "⚠ Invalid unput for " + from + "!";
        document.getElementById("steps").textContent = "";
        return;
    }

    let convertedValue = decimalValue.toString(getBase(to)).toUpperCase();

    document.getElementById("result").textContent = convertedValue;
    document.getElementById("steps").textContent =
    `Step 1: Convert ${input} (${from}) → ${decimalValue} (decimal)\n` +
    `Step 2: Convert ${decimalValue} (decimal) → ${convertedValue} (${to})`;
});

function getBase(system) {
    switch (system) {
        case "binary": return 2;
        case "octal": return 8;
        case "decimal": return 10;
        case "hexadecimal": return 16;
    }
}
