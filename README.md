# Pr02---TeeLab-API-Rest
## Instalación
npm install  
npm run dev


# Catalogo

GET /api/camisetas
  ?talla=S
  ?color=negro  
  ?tag=nuevo
  ?q=palabra
  ?sort=precio_asc|precio_desc|nombre_asc|nombre_desc

GET /api/camisetas/:id

# Comandas

POST /api/comandas
Body: 

{
  "cliente": {"nombre":"Ana","email":"ana@test.com"},
  "direccion": {...},
  "items": [
    {"camisetaId":"TSH01","talla":"M","color":"negro","cantidad":2}
  ]
}

GET /api/comandas
GET /api/comandas/:id
