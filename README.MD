# 🚀 Plantilla Web — Vite + Bootstrap + Font Awesome + SweetAlert2 + Axios

Plantilla base para iniciar proyectos web rápidamente con las herramientas más utilizadas ya configuradas y listas para usar.

## ✨ Tecnologías incluidas

| Tecnología                                    | Versión  | Carga | Uso                              |
| --------------------------------------------- | -------- | ----- | -------------------------------- |
| [Vite](https://vitejs.dev/)                   | 8.x      | npm   | Bundler y servidor de desarrollo |
| [Bootstrap](https://getbootstrap.com/)        | 5.3.8    | CDN   | Framework CSS responsive         |
| [Font Awesome](https://fontawesome.com/)      | 6.7.2    | CDN   | Iconos vectoriales               |
| [SweetAlert2](https://sweetalert2.github.io/) | 11.26.24 | CDN   | Alertas y modales elegantes      |
| [Axios](https://axios-http.com/)              | 1.13.x   | npm   | Cliente HTTP para APIs           |

## 📁 Estructura del proyecto

```
📦 PlantillaWeb/
├── index.html                  # Página principal (SEO + Open Graph)
├── vite.config.js              # Configuración Vite (multi-page)
├── package.json                # Dependencias npm
│
├── pages/                      # Páginas adicionales
│   └── contacto.html           # Ejemplo de página secundaria
│
├── src/                        # Código fuente
│   ├── main.js                 # Punto de entrada JavaScript
│   │
│   ├── styles/                 # Hojas de estilo
│   │   ├── style.css           # Hub central de imports CSS
│   │   ├── var.css             # Variables CSS + @font-face
│   │   ├── menuBar.css         # Estilos de navegación
│   │   ├── index.css           # Estilos página principal
│   │   └── contacto.css        # Estilos página contacto
│   │
│   ├── assets/                 # Recursos estáticos procesados por Vite
│   │   └── fonts/              # Fuentes personalizadas (.ttf, .otf)
│   │
│   ├── services/               # Servicios API (Axios)
│   ├── modules/                # Módulos JS reutilizables
│   ├── utils/                  # Funciones utilitarias
│   └── entities/               # Modelos y entidades de datos
│
├── public/                     # Archivos estáticos (servidos en raíz)
│   ├── favicon.svg             # Favicon principal
│   └── icons.svg               # Sprite de iconos SVG
│
├── site.webmanifest            # Manifest PWA
├── sitemap.xml                 # Mapa del sitio (SEO)
├── robots.txt                  # Reglas para crawlers
├── LICENCE                     # Licencia MIT
└── .gitignore                  # Exclusiones de Git
```

## 🛠️ Instalación y uso

### 1. Clonar o copiar la plantilla

```bash
git clone https://github.com/tu-usuario/PlantillaWeb.git mi-nuevo-proyecto
cd mi-nuevo-proyecto
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

El servidor se abrirá en `http://localhost:5173` con hot reload automático.

### 4. Construir para producción

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`.

### 5. Previsualizar el build

```bash
npm run preview
```

## 📝 Cómo personalizar para un nuevo proyecto

### Paso 1 — Datos del proyecto
- Cambiar `"name"` en `package.json`
- Actualizar `<title>`, `<meta description>`, y Open Graph en `index.html`
- Reemplazar `TU_DOMINIO` en `robots.txt` y `sitemap.xml`
- Actualizar datos en `site.webmanifest`
- Modificar copyright en `LICENCE`

### Paso 2 — Estilos
- Editar colores en `src/styles/var.css` dentro de `:root`
- Reemplazar fuentes en `src/assets/fonts/` y actualizar `@font-face` en `var.css`
- Agregar estilos por página en sus respectivos archivos CSS

### Paso 3 — Agregar nuevas páginas
1. Crear el archivo HTML en `pages/nueva-pagina.html`
2. Crear su archivo CSS en `src/styles/nueva-pagina.css`
3. Importar el CSS en `src/styles/style.css`:
   ```css
   @import url(nueva-pagina.css);
   ```
4. Registrar la página en `vite.config.js`:
   ```js
   input: {
     main: resolve(__dirname, "index.html"),
     contacto: resolve(__dirname, "pages/contacto.html"),
     nuevaPagina: resolve(__dirname, "pages/nueva-pagina.html")
   }
   ```

### Paso 4 — Favicons
Generar los favicons PNG desde `public/favicon.svg` usando [RealFaviconGenerator](https://realfavicongenerator.net/) y colocarlos en `public/`.

## 🎨 Sistema de estilos

### Variables CSS disponibles (`var.css`)

```css
:root {
    /* COLORES — Material Design palette */
    --dark-primary-color: #1976D2;
    --light-primary-color: #BBDEFB;
    --primary-color: #2196F3;
    --text-color: #FFFFFF;
    --accent-color: #00BCD4;
    --primary-text-color: #212121;
    --secundary-text-color: #757575;
    --divider-color: #BDBDBD;

    /* TAMAÑOS */
    --text: 25px;

    /* FUENTES */
    --seven: 'Seven', sans-serif;
    --prototype: 'Prototype', sans-serif;
    --sensations: 'Sensations', sans-serif;
    --le_your_script: 'Le Jour Script', sans-serif;
}
```

### Organización CSS

| Archivo        | Contenido                             |
| -------------- | ------------------------------------- |
| `style.css`    | Hub central — solo contiene `@import` |
| `var.css`      | Variables globales y `@font-face`     |
| `menuBar.css`  | Estilos de barra de navegación        |
| `index.css`    | Estilos exclusivos de `index.html`    |
| `contacto.css` | Estilos exclusivos de `contacto.html` |

## 🌐 SEO incluido

Cada página HTML viene pre-configurada con:
- Meta tags (`description`, `keywords`, `robots`)
- Open Graph (Facebook, LinkedIn)
- Twitter Card
- URL canónica
- `robots.txt` con reglas de crawling
- `sitemap.xml` con formato ISO 8601
- `site.webmanifest` para PWA

## 📜 Comandos disponibles

| Comando           | Descripción                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Inicia servidor de desarrollo con hot reload |
| `npm run build`   | Genera build de producción en `dist/`        |
| `npm run preview` | Previsualiza el build de producción          |

## 📋 Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- npm 9 o superior

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENCE).
