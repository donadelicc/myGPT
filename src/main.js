import { Configuration, OpenAIApi } from "openai"; // får feil her i nettlesere...

const config = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(config);

export default function runPrompt(instruction) {
    const responsePromise = openai.createCompletion({
        model: "text-davinci-003",
        prompt: instruction,
        max_tokens: 2000,
        temperature: 0.5,
    });

    return responsePromise.then((response) => {
        return response.data.choices[0].text;
    });
}

const text = "I dag våknet jeg tidlig og bestemte meg for å ta en tur i skogen. Det var en fantastisk dag med solskinn og fuglesang. Jeg kunne høre bekken sildre og vinden som sakte beveget tretoppene. Jeg gikk og tenkte på livet mitt og hva jeg ønsker å oppnå i fremtiden. Jeg kom frem til en innsjø og satte meg ned på en stein for å ta en pause. Det var så fredelig der, og jeg følte meg helt alene med naturen. Etter en stund fortsatte jeg turen min og kom tilbake til virkeligheten, men jeg følte meg mer klar og fokusert enn før. Det er virkelig utrolig hva litt tid i naturen kan gjøre for sjelen.";

const test = `Summerize the following text:
    ${text}
    `;

const resultatPromise = runPrompt(test);
resultatPromise.then((resultat) => {
    console.log(resultat);
});



