const catalogo = require('../data/catalogo');

function listarCamisetas(filtros = {}) {
  let resultado = [...catalogo];
  
  if (filtros.talla) {
    resultado = resultado.filter(c => c.tallas.includes(filtros.talla));
  }
  if (filtros.color) {
    resultado = resultado.filter(c => c.colores.includes(filtros.color));
  }
  if (filtros.tag) {
    resultado = resultado.filter(c => 
      c.tags.some(tag => tag.includes(filtros.tag))
    );
  }
  if (filtros.q) {
    const q = filtros.q.toLowerCase();
    resultado = resultado.filter(c => 
      c.nombre.toLowerCase().includes(q) || 
      c.descripcion.toLowerCase().includes(q)   
    );
  }
  
  // Ordenar
  if (filtros.sort === 'precio_asc') {
    resultado.sort((a,b) => a.precioBase - b.precioBase);
  } else if (filtros.sort === 'precio_desc') {
    resultado.sort((a,b) => b.precioBase - a.precioBase);
  }
  
  return resultado;
}

function getCamiseta(id) {
  return catalogo.find(c => c.id === id);
}

module.exports = {
  listarCamisetas,
  getCamiseta
};
