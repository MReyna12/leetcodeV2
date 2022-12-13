function uniqueMorseRepresentations(words) {
  const morseCode = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  let transformations = {};
  let numberOfTransformations = 0;

  for (let i = 0; i < words.length; i++) {
    let tempMessage = "";
    for (let j = 0; j < words[i].length; j++) {
      tempMessage += morseCode[words[i][j]];
    }
    if (transformations[tempMessage] === undefined) {
      transformations[tempMessage] = true;
      numberOfTransformations++;
    }
  }

  return numberOfTransformations;
}

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
