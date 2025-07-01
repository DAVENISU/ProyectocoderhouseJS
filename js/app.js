
const form = document.getElementById('formGasto');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const descripcion = document.getElementById('descripcion').value.trim();
  const valor = parseFloat(document.getElementById('valor').value);
  const responsable = document.getElementById('responsable').value.trim();

  if (!descripcion || isNaN(valor) || valor <= 0 || !responsable) {
    resultadoDiv.innerHTML = `<div class="alert alert-danger">Por favor completa todos los campos con datos válidos.</div>`;
    return;
  }

  const gasto = { descripcion, valor, responsable };
  guardarGasto(gasto);

  resultadoDiv.innerHTML = `<div class="alert alert-success">Gasto agregado correctamente.</div>`;
  form.reset();
});

function guardarGasto(gasto) {
  let gastos = JSON.parse(localStorage.getItem('gastos')) || [];
  gastos.push(gasto);
  localStorage.setItem('gastos', JSON.stringify(gastos));
}

function consultarPorResponsable() {
  const responsable = document.getElementById('responsableConsulta').value.trim();
  if (!responsable) {
    resultadoDiv.innerHTML = `<div class="alert alert-danger">Ingrese un responsable válido para consultar.</div>`;
    return;
  }

  const gastos = JSON.parse(localStorage.getItem('gastos')) || [];
  const filtrados = gastos.filter(g => g.responsable.toLowerCase() === responsable.toLowerCase());

  if (filtrados.length === 0) {
    resultadoDiv.innerHTML = `<div class="alert alert-warning">No hay gastos registrados para ${responsable}.</div>`;
    return;
  }

  resultadoDiv.innerHTML = `
    <h5>Gastos de ${responsable}:</h5>
    <ul class="list-group">
      ${filtrados.map(g => `
        <li class="list-group-item">
          ${g.descripcion} - $${g.valor}
        </li>
      `).join('')}
    </ul>
  `;
}

function mostrarHistorial() {
  const gastos = JSON.parse(localStorage.getItem('gastos')) || [];
  if (gastos.length === 0) {
    resultadoDiv.innerHTML = `<div class="alert alert-warning">No hay gastos registrados aún.</div>`;
    return;
  }

  resultadoDiv.innerHTML = `
    <h5>Historial de gastos:</h5>
    <ul class="list-group">
      ${gastos.map(g => `
        <li class="list-group-item">
          ${g.descripcion} - $${g.valor} (Responsable: ${g.responsable})
        </li>
      `).join('')}
    </ul>
  `;
}
