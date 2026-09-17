# La FakeZom

Aplicacion web desarrollada con Angular 19 para explorar un catalogo de productos.
Los datos se obtienen desde la API publica [DummyJSON](https://dummyjson.com/docs/products).

## Demo

Visita la aplicacion desplegada en GitHub Pages:

[https://pistachopower.github.io/Proyecto_Angular/](https://pistachopower.github.io/Proyecto_Angular/)

## Funcionalidades

- Carrusel de productos destacados en la pagina de inicio.
- Listado de productos con imagen, nombre y precio.
- Busqueda por nombre desde la barra de navegacion.
- Orden alfabetico ascendente y descendente.
- Ordenacion por precio alternando menor y mayor precio.
- Vista de detalle de cada producto.
- Formulario de login conectado a DummyJSON Auth.
- Despliegue automatico en GitHub Pages mediante GitHub Actions.

La consulta de productos, el detalle y la navegacion publica funcionan sin iniciar sesion.

## Tecnologias

- Angular 19 y TypeScript.
- Bootstrap 5.
- RxJS y HttpClient.
- DummyJSON Products y Auth API.
- GitHub Pages y GitHub Actions.

## Ejecucion local

Requisitos: Node.js 22 o superior y npm.

```bash
npm install
npm start
```

Abre [http://localhost:4200](http://localhost:4200) en el navegador.

## Build de produccion

```bash
npm run build -- --base-href /Proyecto_Angular/
```

Los archivos generados se guardan en `dist/ang-app-v19`.

## API utilizada

- Listado: `https://dummyjson.com/products`
- Producto individual: `https://dummyjson.com/products/{id}`
- Login: `https://dummyjson.com/auth/login`

Credenciales de prueba de DummyJSON:

```text
Usuario: emilys
Contraseña: emilyspass
```

## Estructura principal

```text
src/app/
├── app.routes.ts
├── app.config.ts
└── mis_components/
	├── contacto/
	├── detalle/
	├── guards/
	├── header/
	├── home/
	├── login/
	├── productos/
	└── servicios/
		├── email.service.ts
		├── login.service.ts
		└── servicio.service.ts
```

## Despliegue

Cada push a la rama `main` ejecuta [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml), construye la aplicacion y la publica en GitHub Pages.
