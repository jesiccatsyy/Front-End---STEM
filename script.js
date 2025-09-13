document.getElementById("convertBtn").addEventListener("click", () => {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const input = document.getElementById("inputValue").value.trim();

    if (!input) {
        document.getElementById("result").textContent = "Please enter a number!!!.";
        document.getElementById("steps").textContent = "";
        return;
    }

    if (from === to) {
        document.getElementById("result").textContent = "Choose diffent number system!!!.";
        document.getElementById("steps").textContent = "";
        return;
    }

    document.getElementById("result").textContent = "Conversion logic coming soon...";
    document.getElementById("steps").textContent = "";
});
