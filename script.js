const input = document.getElementById("binaryInput");
const button = document.getElementById("convertButton");
const result = document.getElementById("resultValue");

function convert() {
    const binary = input.value.trim();

    result.classList.remove("success", "error");

    if (binary === "") {
        result.textContent = "Digite um número";
        result.classList.add("error");
        return;
    }

    if (!/^[01]+$/.test(binary)) {
        result.textContent = "Apenas 0 e 1";
        result.classList.add("error");
        return;
    }

    const decimal = parseInt(binary, 2);

    result.textContent = `Resultado: ${decimal}`;
    result.classList.add("success");
}

button.addEventListener("click", convert);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        convert();
    }
});