import { runPrompt } from "./main.js";

const instructionInput = document.getElementById("instruction-text");
const promptBtn = document.getElementById("prompt-btn");
const summarizeBtn = document.getElementById("summarize-btn");
const prompt = document.getElementById("prompt-text");
const output = document.getElementById("output-text");

promptBtn.addEventListener("click", function () {
    const prompt_text = instructionInput.value;
    prompt.textContent = prompt_text;
    console.log(prompt_text);
});

summarizeBtn.addEventListener("click", function () {
    const instruction = instructionInput.value;
    runPrompt(instruction).then((resultat) => {
        // Sett resultatet i output-elementet
        output.textContent = resultat;
    });
});
