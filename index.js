function drawFunnel(data) {
  const width = 400;
  const height = 300;

  const body = document.querySelector('body');
  body.innerHTML = '';

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  body.appendChild(svg);

  const values = [10000, 7500, 5000, 2500];
  const labels = ["Views", "Add to Cart", "Checkout", "Purchase"];

  const total = values.reduce((a, b) => a + b, 0);
  let currentY = 0;

  values.forEach((value, index) => {
    const barWidth = (value / total) * width;
    const barHeight = 50;

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute('x', (width - barWidth) / 2);
    rect.setAttribute('y', currentY);
    rect.setAttribute('width', barWidth);
    rect.setAttribute('height', barHeight);
    rect.setAttribute('fill', `rgb(${100 + index * 30}, ${150 - index * 20}, 200)`);
    svg.appendChild(rect);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute('x', width / 2);
    text.setAttribute('y', currentY + barHeight / 2);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'central');
    text.setAttribute('fill', '#fff');
    text.textContent = `${labels[index]}: ${value}`;
    svg.appendChild(text);

    currentY += barHeight + 10;
  });
}

drawFunnel({});
