const catalogo = require('../data/catalogo');
let comandas = [];
let nextId = 1;

function validarCliente(cliente) {
  if (!cliente.nombre || cliente.nombre.length < 2) {
    throw new Error('Nombre cliente mínimo 2 caracteres');
  }
  if (!cliente.email || !cliente.email.includes('@')) {
    throw new Error('Email inválido');
  }
}

function validarItem(item, index) {
  if (!item.camisetaId || item.cantidad < 1) {
    throw new Error(`Item ${index}: camisetaId y cantidad obligatorios`);
  }
  
  const camiseta = catalogo.find(c => c.id === item.camisetaId);
  if (!camiseta) {
    throw new Error(`Camiseta ${item.camisetaId} no existe`);
  }
  if (!camiseta.tallas.includes(item.talla)) {
    throw new Error(`Talla ${item.talla} inválida para ${item.camisetaId}`);
  }
  if (!camiseta.colores.includes(item.color)) {
    throw new Error(`Color ${item.color} inválido para ${item.camisetaId}`);
  }
}

exports.crearComanda = (datos) => {
  validarCliente(datos.cliente);
  if (!datos.items || datos.items.length === 0) {
    throw new Error('Items obligatorios');
  }
  
  datos.items.forEach((item, i) => validarItem(item, i+1));
  
  // Crear ticket
  const itemsConPrecio = datos.items.map(item => {
    const camiseta = catalogo.find(c => c.id === item.camisetaId);
    return {
      ...item,
      nombre: camiseta.nombre,
      precioUnitario: camiseta.precioBase,
      subtotal: item.cantidad * camiseta.precioBase
    };
  });
  
  const total = itemsConPrecio.reduce((sum, i) => sum + i.subtotal, 0);
  
  const comanda = {
    id: `ORD-${nextId++}`,
    fecha: new Date().toISOString(),
    estado: 'recibida',
    items: itemsConPrecio,
    total: parseFloat(total.toFixed(2))
  };
  
  comandas.push(comanda);
  return comanda;
};

exports.listarComandas = () => comandas;
exports.getComanda = (id) => comandas.find(c => c.id === id);
