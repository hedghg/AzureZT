function updateValue(element, valueId) {
  document.getElementById(valueId).innerText = element.value;
}

function calculateScore() {
  const rhymes = parseInt(document.getElementById('rhymes').value, 10);
  const structure = parseInt(document.getElementById('structure').value, 10);
  const style = parseInt(document.getElementById('style').value, 10);
  const charisma = parseInt(document.getElementById('charisma').value, 10);
  const atmosphere = parseInt(document.getElementById('atmosphere').value, 10);

  const baseScore = rhymes + structure + style + charisma;

  const vibeBonus = baseScore * (atmosphere * 0.1239);

  let totalScore = baseScore + vibeBonus;

  if (totalScore > 90) {
    totalScore = 90;
  }

  document.getElementById('totalScore').innerText = `Текущая итоговая оценка: ${Math.round(totalScore)}`;
}

