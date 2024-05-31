document.getElementById('triangleForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const sideA = document.getElementById('sideA').value;
  const sideB = document.getElementById('sideB').value;
  const sideC = document.getElementById('sideC').value;

  if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
      if (sideA === sideB && sideB === sideC) {
          document.getElementById('result').textContent = "Это равносторонний треугольник.";
      } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
          document.getElementById('result').textContent = "Это равнобедренный треугольник.";
      } else {
          document.getElementById('result').textContent = "Это разносторонний треугольник.";
      }
  } else {
      document.getElementById('result').textContent = "Это прямоугольный треугольник";
  }
});