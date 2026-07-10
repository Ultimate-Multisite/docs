---
title: Dirección de Diseño
sidebar_position: 2
_i18n_hash: 0a55afffd66ffad6930c7794d4074971
---
# Dirección de Diseño {#design-direction}

El paso de **Dirección de Diseño** le permite revisar, refinar y finalizar el diseño visual de su tema antes de que Theme Builder genere el tema completo.

## Resumen {#overview}

Después de completar la Entrevista de Descubrimiento, Theme Builder presenta su dirección de diseño con **previsualización de renderizado para escritorio y móvil**. Esto le permite ver exactamente cómo se verá su diseño en diferentes dispositivos antes de comprometerse con el tema.

## Componentes de la Dirección de Diseño {#design-direction-components}

### 1. Paleta de Colores {#1-color-palette}

El esquema de color de su tema, que incluye:

- **Color principal** — color de marca principal utilizado para botones, enlaces y acentos
- **Color secundario** — color complementario para variedad
- **Color de acento** — color de resaltado para elementos importantes
- **Colores neutros** — grises y blancos para fondos y texto
- **Color de texto** — color de texto principal para la legibilidad

### 2. Tipografía {#2-typography}

Selecciones de fuentes para:

- **Fuente de encabezado** — utilizada para títulos de página y encabezados de sección
- **Fuente de cuerpo** — utilizada para texto de párrafo y contenido
- **Tamaños de fuente** — dimensionamiento adaptable para diferentes tamaños de pantalla
- **Interlineado** — espaciado entre líneas para mejorar la lectura
- **Pesos de fuente** — variaciones negrita, regular y ligera

### 3. Diseño y Espaciado {#3-layout-and-spacing}

- **Ancho del contenedor** — ancho máximo para el contenido
- **Relleno y márgenes** — espaciado alrededor de los elementos
- **Sistema de cuadrícula** — diseño de columnas para un diseño adaptable
- **Espaciado de componentes** — distancia entre elementos de la interfaz de usuario

### 4. Elementos Visuales {#4-visual-elements}

- **Estilos de botones** — diseños de botones primarios, secundarios y terciarios
- **Diseños de tarjetas** — diseños para bloques de contenido
- **Iconos** — estilo y dimensionamiento de iconos
- **Bordes y sombras** — profundidad visual sutil
- **Efectos al pasar el ratón (Hover effects)** — estilos de estado interactivo

## Previsualización de Renderizado {#preview-rendering}

### Previsualización de Escritorio {#desktop-preview}

La previsualización de escritorio muestra su diseño en ancho completo (típicamente 1200px o más):

- Menú de navegación completo
- Diseño completo con todas las columnas
- Tipografía y espaciado grandes
- Todos los elementos visuales a tamaño completo

### Previsualización de Móvil {#mobile-preview}

La previsualización de móvil muestra su diseño en ancho móvil (típicamente 375px):

- Navegación adaptable (menú hamburguesa)
- Diseño de columna única
- Tipografía y espaciado ajustados
- Tamaños de botones aptos para tacto

### Puntos de Interrupción Adaptativos (Responsive Breakpoints) {#responsive-breakpoints}

Theme Builder renderiza previsualizaciones en estos puntos de interrupción:

| Dispositivo | Ancho | Previsualización |
|--------|-------|---------|
| **Móvil** | 375px | Teléfono vertical |
| **Tablet** | 768px | Tablet horizontal |
| **Escritorio** | 1200px | Escritorio de ancho completo |
| **Escritorio Grande** | 1920px | Pantalla ultraancha |

## Refinando su Diseño {#refining-your-design}

### Realizando Ajustes {#making-adjustments}

Puede refinar su dirección de diseño mediante:

1. **Ajustar colores** — cambie cualquier color de la paleta
2. **Cambiar fuentes** — seleccione diferentes tipografías
3. **Modificar espaciado** — ajuste el relleno y los márgenes
4. **Actualizar diseño** — cambie los anchos del contenedor y las columnas de la cuadrícula
5. **Personalizar elementos** — modifique estilos de botones, diseños de tarjetas, etc.

### Actualizaciones de Previsualización {#preview-updates}

Los cambios se reflejan en tiempo real:

- La previsualización de escritorio se actualiza inmediatamente
- La previsualización de móvil se actualiza inmediatamente
- Todos los puntos de interrupción adaptativos se actualizan
- Puede cambiar entre previsualizaciones para verificar los cambios

### Vista de Comparación {#comparison-view}

Compare su dirección de diseño con:

- **Diseño original** — vea qué ha cambiado
- **Diseños de la competencia** — compare con sitios de inspiración
- **Versiones anteriores** — revierta a direcciones de diseño anteriores

## Aprobación de la Dirección de Diseño {#design-direction-approval}

Una vez que esté satisfecho con su diseño:

1. **Revise ambas previsualizaciones** — verifique que el escritorio y el móvil se vean bien
2. **Verifique todos los colores** — asegúrese de contraste y accesibilidad
3. **Pruebe la tipografía** — verifique la legibilidad en todos los tamaños
4. **Confirme el diseño** — revise el espaciado y la alineación
5. **Aprobar diseño** — proceda a la generación del tema

## Próximos Pasos {#next-steps}

Después de aprobar su dirección de diseño:

1. Theme Builder genera su tema completo
2. El tema se instala en su sitio de WordPress
3. Puede personalizar más usando el customizer de WordPress
4. Proceda a [Hospitality Menus](./hospitality-menus.md) u otras funciones

## Mejores Prácticas {#best-practices}

- **Probar en dispositivos reales** — use teléfonos y tabletas reales si es posible
- **Verificar la legibilidad** — asegúrese de que el texto sea legible en todos los tamaños
- **Comprobar el contraste** — use [Validate Palette Contrast](../abilities/validate-palette-contrast.md) para la accesibilidad
- **Considerar el rendimiento** — optimice imágenes y fuentes para la velocidad
- **Planificar el contenido** — asegúrese de que el diseño funcione con su contenido real

## Solución de Problemas {#troubleshooting}

### La Previsualización No Se Actualiza {#preview-not-updating}

- Actualice la página
- Borre la caché del navegador
- Intente un navegador diferente
- Verifique la conexión a internet

### Los Colores Se Ven Diferentes {#colors-look-different}

- Verifique la configuración de color del monitor
- Intente en diferentes dispositivos
- Verifique el contraste de color con herramientas de accesibilidad
- Considere simuladores de daltonismo

### Problemas de Tipografía {#typography-issues}

- Verifique que los archivos de fuente se estén cargando
- Compruebe el tamaño de la fuente en diferentes puntos de interrupción
- Pruebe con contenido real
- Considere la longitud de la línea para la legibilidad

## Documentación Relacionada {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — recopile información de diseño
- [Hospitality Menus](./hospitality-menus.md) — cree páginas de menú estructuradas
- [Validate Palette Contrast](../abilities/validate-palette-contrast.md) — compruebe la accesibilidad del color
- [Generate Logo SVG](../abilities/generate-logo-svg.md) — cree logotipos personalizados
