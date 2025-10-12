# 🐾 E-commerce de Mascotas — Inventario
# Estructura de carpetas
```bash
│
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 nest-cli.json
├── 📄 .env
├── 📄 Dockerfile
│
├── 📁 uploads/
│   ├── 📁 productos/       # Carpeta donde se guardan imágenes de productos
│   └── 📁 proveedores/     # Carpeta donde se guardan imágenes de proveedores
│
├── 📁 src/
│   ├── 📄 main.ts                 # Punto de arranque NestJS
│   ├── 📄 app.module.ts           # Módulo raíz del proyecto
|   |
│   ├── 📁 almacen/
│   │   ├── entities/
│   │   │   └── almacen.entity.ts
│   │   ├── dto/
│   │   │   ├── create-almacen.dto.ts
│   │   │   ├── update-almacen.dto.ts
│   │   ├── almacen.controller.ts
│   │   ├── almacen.service.ts
│   │   └── almacen.module.ts
│   |
│   ├── 📁 clasificacion/
│   │   ├── entities/
│   │   │   └── clasificacion.entity.ts
│   │   ├── dto/
│   │   │   ├── create-clasificacion.dto.ts
│   │   │   ├── update-clasificacion.dto.ts
│   │   ├── clasificacion.controller.ts
│   │   ├── clasificacion.service.ts
│   │   └── clasificacion.module.ts
|   |
│   ├── 📁 comercia/
│   │   ├── entities/
│   │   │   └── comercia.entity.ts
│   │   ├── dto/
│   │   │   ├── create-comercia.dto.ts
│   │   │   ├── update-comercia.dto.ts
│   │   ├── comercia.controller.ts
│   │   ├── comercia.service.ts
│   │   └── comercia.module.ts
│   |
|   ├── 📁 common
|   |
│   ├── 📁 database/
│   │   ├── database.providers.ts
│   │   └── database.module.ts
|   |
│   ├── 📁 producto/
│   │   ├── entities/
│   │   │   └── producto.entity.ts
│   │   ├── dto/
│   │   │   ├── create-producto.dto.ts
│   │   │   ├── update-producto.dto.ts
│   │   ├── producto.controller.ts
│   │   ├── producto.service.ts
│   │   └── producto.module.ts
│   |
│   ├── 📁 proveedor/
│   │   ├── entities/
│   │   │   └── proveedor.entity.ts
│   │   ├── dto/
│   │   │   ├── create-proveedor.dto.ts
│   │   │   ├── update-proveedor.dto.ts
│   │   ├── proveedor.controller.ts
│   │   ├── proveedor.service.ts
│   │   └── proveedor.module.ts
│   |
│   ├── 📁 sede/
│   │   ├── entities/
│   │   │   └── sede.entity.ts
│   │   ├── dto/
│   │   │   ├── create-sede.dto.ts
│   │   │   ├── update-sede.dto.ts
│   │   ├── sede.controller.ts
│   │   ├── sede.service.ts
│   │   └── sede.module.ts
│   |
│   └── 📁 stock/
│       ├── entities/
│       │   └── stock.entity.ts
│       ├── dto/
│       │   ├── create-stock.dto.ts
│       │   ├── update-stock.dto.ts
│       ├── stock.controller.ts
│       ├── stock.service.ts
│       └── stock.module.ts
|
│
│
└── 📄 README.md
```

# Actualizacion imagenes
Este módulo forma parte del backend del **E-commerce de Mascotas**, desarrollado con **NestJS** y **TypeORM**. 
Permite la **gestión de productos y proveedores**, incluyendo carga y actualización de imágenes mediante `Multer`.

---

## 🚀 Tecnologías principales

- **NestJS** (v10+)
- **TypeORM**
- **PostgreSQL**
- **Multer** (para manejo de imágenes)
- **UUID** (para nombres únicos de archivos)
- **Docker** (para despliegue local)

---
## 📁 Estructura de carpetas relevante

``` bash
src/
├── producto/
│ ├── dto/
│ ├── entities/
│ ├── producto.controller.ts
│ └── producto.service.ts
├── proveedor/
│ ├── dto/
│ ├── entities/
│ ├── proveedor.controller.ts
│ └── proveedor.service.ts
uploads/
├── productos/
└── proveedores/
```

Las imágenes se almacenan localmente dentro de la carpeta `uploads/`:

- `/uploads/productos/` → imágenes de productos  
- `/uploads/proveedores/` → imágenes de proveedores  

---

## 🧩 Módulo Producto

### 📌 Endpoints principales

| Método | Endpoint | Descripción |
|:------:|:----------|:-------------|
| **POST** | `/producto` | Crear producto sin imágenes |
| **POST** | `/producto/upload` | Crear producto con imágenes |
| **GET** | `/producto` | Obtener todos los productos |
| **GET** | `/producto/:id` | Obtener un producto por ID |
| **PATCH** | `/producto/:id` | Actualizar un producto |
| **PATCH** | `/producto/:id/imagenes` | Actualizar o agregar imágenes |
| **DELETE** | `/producto/:id` | Eliminar un producto |

---

### 🖼️ Carga de imágenes

Para crear o actualizar productos con imágenes se usa `Multer`.  
Cada imagen se guarda con un nombre único generado con `uuid`.

#### ⚠️ Importante:
> El comando `curl` **solo funciona si se ejecuta desde la misma carpeta donde están las imágenes**,  
> ya que `curl` necesita acceso local a los archivos con el prefijo `@`.

Ejemplo correcto (si estás en la carpeta donde están las imágenes):

```bash
curl -X POST http://localhost:3000/producto/upload \
  -H "Accept: application/json" \
  -F "prodCodigo=101" \
  -F "prodNombre=Collar de prueba" \
  -F "prodPrecio=25.5" \
  -F "prodTamano=10" \
  -F "prodDescripcion=Collar de cuero para perro" \
  -F "prodCantidad=50" \
  -F "catId=1" \
  -F "prodImagen=@Prueba1.jpeg" \
  -F "prodImagen=@Prueba2.jpeg"
```
### 📁 Las imágenes se guardarán en:

/uploads/productos/

### 🧹 Eliminar producto

curl -X DELETE http://localhost:3000/producto/5

### 🖼️ Carga de imágenes de proveedor:

```bash
curl -X POST http://localhost:3000/proveedor/upload \
  -H "Accept: application/json" \
  -F "provRazonSocial=Proveedor Canino" \
  -F "provNit=123456789" \
  -F "provResponsable=Juan Pérez" \
  -F "provCorreo=proveedor@canino.com" \
  -F "provTelefono=3120000000" \
  -F "imagenes=@foto1.jpeg" \
  -F "imagenes=@foto2.jpeg"
```

### 📁 Las imágenes se guardarán en:

/uploads/proveedores/

### 🧹 Eliminar proveedor

curl -X DELETE http://localhost:3000/proveedor/3

