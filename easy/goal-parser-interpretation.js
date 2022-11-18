function interpret(command) {
  let parsedText = "";

  for (let i = 0; i < command.length; i++) {
    const character = command[i];
    if (character === "G") {
      parsedText += "G";
    } else if (character === "(" && command[i + 1] === ")") {
      parsedText += "o";
      i++;
    } else if (character === "(" && command[i + 1] === "a") {
      parsedText += "al";
      i += 3;
    }
  }

  return parsedText;
}

interpret("G()(al)");
