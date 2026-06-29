console.log("JS carregou!");

const input = document.getElementById("binaryInput");
const button = document.getElementById("convertButton");
const result = document.getElementById("resultValue");

button.addEventListener("click", () => {
    console.log("clicou");

    const binary = input.value;

    // validação básica
    if (!/^[01]+$/.test(binary)) {
        result.textContent = "Digite apenas 0 e 1";
        return;
    }

    const decimal = parseInt(binary, 2);
    result.textContent = decimal;
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        button.click();
    }
});

