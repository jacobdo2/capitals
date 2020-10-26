export default function secondsToTimer(seconds: number): string {
  let secondsLeft = seconds;
  let timer = "";
  [3600, 60].forEach((unit) => {
    const wholeUnits = Math.floor(secondsLeft / unit);
    secondsLeft = secondsLeft % unit;

    if (wholeUnits || (!wholeUnits && timer !== "")) {
      timer += `${wholeUnits < 10 ? `0${wholeUnits}` : `${wholeUnits}`}:`;
    }
  });

  return timer + `${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`;
}
