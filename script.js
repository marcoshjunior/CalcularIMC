function calcularIMC() {
  const peso = parseFloat(document.getElementById("ipeso").value);
  const altura = parseFloat(document.getElementById("ialtura").value);

  if (!peso || !altura) {
    alert("preencha os campos corretamente");
    return;
  }

  const imc = peso / (altura * altura);
  const imcFormatado = imc.toFixed(1);
  const resultado = document.getElementById("resultado");
  const tipoDoPeso = document.getElementById("tipoDoPeso");

  if (imc < 18.5) {
    resultado.innerHTML = imcFormatado;
    resultado.style.color = "#6ca0dc";
    tipoDoPeso.innerHTML = "Abaixo do peso";
    tipoDoPeso.style.color = "#6ca0dc";
  } else if (imc < 25) {
    resultado.innerHTML = imcFormatado;
    resultado.style.color = "#4caf50";
    tipoDoPeso.innerHTML = "Peso normal";
    tipoDoPeso.style.color = "#4caf50";
  } else if (imc < 30) {
    resultado.innerHTML = imcFormatado;
    resultado.style.color = "#ffc107";
    tipoDoPeso.innerHTML = "Sobrepeso";
    tipoDoPeso.style.color = "#ffc107";
  } else {
    resultado.innerHTML = imcFormatado;
    resultado.style.color = "#f44336";
    tipoDoPeso.innerHTML = "Obesidade";
    tipoDoPeso.style.color = "#f44336";
  }
}
