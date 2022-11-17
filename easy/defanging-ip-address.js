function defangIPaddr(address) {
  let defangedIPAddress = "";

  for (const letter of address) {
    if (letter === ".") {
      defangedIPAddress += "[.]";
    } else {
      defangedIPAddress += letter;
    }
  }

  return defangedIPAddress;
}

function defangIPaddr(address) {
  return address.replaceAll(".", "[.]");
}

function defangIPaddr(address) {
  return address.split(".").join("[.]");
}

defangIPaddr("1.1.1.1");
