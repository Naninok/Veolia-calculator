function calculate() {
  const dosage = parseFloat(document.getElementById("dosage").value);
  const flow = parseFloat(document.getElementById("flow").value);

  if (isNaN(dosage) || isNaN(flow)) {
    document.getElementById("result").textContent = "⚠️ Please enter both dosage and flow.";
    return;
  }

  const cost_per_m3 = 0.05; // บาทต่อลูกบาศก์เมตร
  const totalPrice = dosage * flow * 24 * cost_per_m3;

  document.getElementById("result").textContent = "Result: " + totalPrice.toFixed(2) + " Baht/day";
}