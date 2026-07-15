---
title: Habilidades del Constructor de Temas
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Capacidades del Constructor de Temas: Estructurar y Activar Temas de Bloques

Superdav AI Agent v1.12.0 introduce dos potentes capacidades que te permiten generar y desplegar temas de bloques personalizados directamente desde la interfaz de chat.

## Resumen {#overview}

Las capacidades **scaffold-block-theme** y **activate-theme** permiten a los agentes:
- Generar temas de bloques completos y listos para producción basados en tus especificaciones
- Activar temas automáticamente en tu sitio sin intervención manual
- Crear identidades visuales coherentes a través de decisiones de diseño guiadas

## Estructurar Tema de Bloques (Scaffold Block Theme) {#scaffold-block-theme}

La capacidad **scaffold-block-theme** genera un nuevo tema de bloques de WordPress con una estructura completa, incluyendo:

- Configuración `theme.json` con tokens de diseño
- Archivos de plantillas de bloques para diseños comunes
- Estilos y variaciones de bloques personalizados
- Metadatos del tema y declaraciones de soporte

### Cómo invocarlo {#how-to-invoke}

En tu chat con Superdav AI Agent, puedes solicitar la generación de un tema:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

El agente hará lo siguiente:
1. Recopilará tus preferencias de diseño a través de la conversación
2. Generará la estructura completa del tema
3. Creará todos los archivos de tema necesarios
4. Preparará el tema para su activación

### Salida esperada {#expected-output}

Cuando la capacidad se ejecute con éxito, verás:

- Confirmación de que el tema ha sido estructurado (scaffolded)
- El nombre y la ubicación del tema
- Un resumen de los tokens de diseño aplicados (colores, tipografía, espaciado)
- Estado listo para activar

Ejemplo de salida:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activar Tema (Activate Theme) {#activate-theme}

La capacidad **activate-theme** cambia tu sitio a un tema de bloques recién estructurado o existente.

### Cómo invocarlo {#how-to-invoke-1}

Después de estructurar un tema, puedes activarlo inmediatamente:

```
"Activate the Modern Agency theme"
```

O activar cualquier tema existente:

```
"Switch to the Twentytwentyfour theme"
```

### Salida esperada {#expected-output-1}

Cuando la activación tiene éxito:

- Confirmación del tema activo
- Nombre del tema anterior (para referencia)
- URL del sitio donde el tema está activo
- Cualquier nota de configuración específica del tema

Ejemplo de salida:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Flujo de trabajo: Estructurar y Activar {#workflow-scaffold-and-activate}

Un flujo de trabajo típico combina ambas capacidades:

1. **Solicitar generación de tema**: "Create a block theme for my SaaS landing page"
2. **El agente estructura el tema**: Genera archivos y tokens de diseño
3. **Revisar y refinar**: Discutir cambios de diseño si es necesario
4. **Activar**: "Activate the theme now"
5. **Verificar**: Visitar tu sitio para confirmar que el nuevo diseño está activo

## Tokens de Diseño y Personalización {#design-tokens-and-customization}

Los temas estructurados utilizan los tokens de diseño de WordPress (a través de `theme.json`) para:

- **Colores**: Paleta primaria, secundaria, de acento y neutra
- **Tipografía**: Familias de fuentes, tamaños, pesos, alturas de línea
- **Espaciado**: Escalas de relleno (padding), margen (margin) y separación (gap)
- **Bordes**: Tokens de radio y ancho
- **Sombras**: Niveles de elevación

Estos tokens están centralizados en `theme.json`, lo que facilita ajustar todo tu sistema de diseño desde un solo archivo.

## Limitaciones y Notas {#limitations-and-notes}

- Los temas se estructuran en `/wp-content/themes/` y deben seguir las convenciones de nomenclatura de WordPress
- La activación requiere permisos apropiados en tu sitio de WordPress
- El código PHP personalizado en los temas es mínimo; usa plugins para funcionalidades complejas
- Los temas de bloques funcionan mejor con WordPress 5.9 o posterior

## Solución de problemas {#troubleshooting}

**El tema no aparece después de estructurarlo**
- Verifica que el directorio del tema exista y tenga los permisos adecuados
- Asegúrate de que `theme.json` sea un JSON válido
- Confirma que el nombre del tema no entre en conflicto con temas existentes

**Falla la activación**
- Confirma que tienes permisos de administrador
- Verifica que el directorio del tema sea legible por WordPress
- Revisa los registros de errores de WordPress para obtener detalles

**Los tokens de diseño no se aplican**
- Verifica que la sintaxis de `theme.json` sea correcta
- Borra cualquier plugin de caché
- Asegúrate de que tu versión de WordPress soporte los tokens que estás utilizando

## Próximos pasos {#next-steps}

Después de activar tu tema, puedes:
- Usar la habilidad **Design System Aesthetics** para refinar tipografía, colores y espaciado
- Personalizar estilos de bloques individuales a través del editor de bloques de WordPress
- Añadir CSS personalizado en el archivo `style.css` del tema
- Crear plantillas de bloques personalizadas para tipos de página específicos
