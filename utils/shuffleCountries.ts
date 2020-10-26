import { Country } from "../types";

export default function shuffleCountries(countries: Country[]) {
  let output = [...countries];
  for (let i = 0; i < output.length; i++) {
    const randomPosition = Math.floor(Math.random() * output.length);
    output = [
      ...output.slice(0, randomPosition),
      ...output.slice(randomPosition + 1),
      output[randomPosition],
    ];
  }
  return output;
}
