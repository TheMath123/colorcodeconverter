function convertColor() {
  let conversionType = document.getElementById("conversionType").value;

  if (conversionType === "hexToFlutter") {
    convertToFlutterFormat();
  } else if (conversionType === "rgbToHex") {
    convertRgbToHex();
  } else if (conversionType === "flutterToInverseHex") {
    flutterToInverseHex();
  }
}

function convertToFlutterFormat() {
  let hex = document.getElementById("colorInput").value;

  if (hex.charAt(0) === "#") {
    hex = hex.slice(1);
  }

  if (hex.length !== 6) {
    document.getElementById("result").innerText = "Entrada inválida";
    return;
  }

  let flutterColor = "0xFF" + hex.toUpperCase();
  document.getElementById("result").innerText = flutterColor;

  // Atualizar a cor do quadro
  document.getElementById("colorBox").style.backgroundColor = "#" + hex;
}

function convertRgbToHex() {
  let rgb = document.getElementById("colorInput").value.split(",");

  if (
    rgb.length !== 3 ||
    !rgb.every((value) => parseInt(value) >= 0 && parseInt(value) <= 255)
  ) {
    document.getElementById("result").innerText = "Entrada inválida";
    return;
  }

  let hex =
    "#" +
    rgb
      .map((value) => parseInt(value).toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase();
  document.getElementById("result").innerText = hex;

  // Atualizar a cor do quadro
  document.getElementById("colorBox").style.backgroundColor = hex;
}

function flutterToHex() {
  let flutter = document.getElementById("colorInput").value.trim();

  if (!flutter.startsWith("0xFF") || flutter.length !== 10) {
    document.getElementById("result").innerText = "Entrada inválida";
    return;
  }

  let hex = "#" + flutter.slice(4); // Remove o prefixo 0xFF

  document.getElementById("result").innerText = hex;

  // Atualizar a cor do quadro
  document.getElementById("colorBox").style.backgroundColor = hex;
}
