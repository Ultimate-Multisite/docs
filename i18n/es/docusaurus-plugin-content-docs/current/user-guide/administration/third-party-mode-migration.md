---
title: Migración a Modo de Terceros
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migración al Modo de Terceros

Superdav AI Agent v1.12.0 cambia la forma en que se manejan las capacidades de terceros. **El modo de terceros ahora por defecto es automático**, lo que permite la integración nativa con la API de Habilidades de WordPress en WordPress 7.0+ sin necesidad de configuración manual.

## ¿Qué ha cambiado? {#what-changed}

### Antes de v1.12.0 {#before-v1120}

Las capacidades de terceros requerían configuración manual:

- Tenías que habilitar explícitamente el "modo de terceros"
- Las capacidades se cargaban desde un registro personalizado
- La integración con la API de Habilidades de WordPress era opcional
- El modo heredado era el predeterminado

### Después de v1.12.0 {#after-v1120}

Las capacidades de terceros funcionan automáticamente:

- El modo de terceros por defecto es "automático"
- Las capacidades se integran de forma nativa con la API de Habilidades de WordPress
- No se requiere configuración manual en WordPress 7.0+
- El modo heredado sigue disponible para versiones anteriores de WordPress

## ¿A quién afecta? {#who-is-affected}

### Instalaciones nuevas (WordPress 7.0+) {#new-installations-wordpress-70}

**No es necesario realizar ninguna acción.** El modo de terceros se establece automáticamente en "automático" y las capacidades funcionan desde el primer momento.

### Instalaciones existentes {#existing-installations}

**Se conservan tus ajustes.** Si estabas utilizando:

- **Modo heredado (Legacy mode)**: Permaneces en modo heredado (sin cambios)
- **Modo de terceros manual**: Permaneces en modo manual (sin cambios)
- **Modo automático**: Continúas con el modo automático (sin cambios)

### Versiones de WordPress anteriores a 7.0 {#wordpress-versions-before-70}

**El modo heredado sigue disponible.** Si estás en WordPress 6.x o anterior:

- El modo de terceros por defecto es "heredado"
- Puedes habilitar manualmente el modo de terceros si lo deseas
- Actualiza a WordPress 7.0+ para usar la API de Habilidades nativa

## Entendiendo los modos {#understanding-the-modes}

### Modo automático (Nuevo predeterminado) {#auto-mode-new-default}

**El modo automático** utiliza la integración nativa con la API de Habilidades de WordPress:

- Las capacidades se registran mediante hooks de WordPress
- Compatibilidad total con la API de Habilidades de WordPress 7.0+
- Descubrimiento automático de capacidades de terceros
- No se requiere configuración manual

**Cuándo usarlo**: WordPress 7.0+ con capacidades de terceros

### Modo manual {#manual-mode}

**El modo manual** requiere configuración explícita:

- Especificas qué capacidades de terceros cargar
- Útil para pruebas o carga selectiva de capacidades
- Requiere editar archivos de configuración
- Más control, pero más configuración

**Cuándo usarlo**: Pruebas, carga selectiva de capacidades o configuraciones personalizadas

### Modo heredado (Legacy Mode) {#legacy-mode}

**El modo heredado** utiliza el antiguo sistema de capacidades de terceros:

- Registro de capacidades personalizado (no la API de Habilidades de WordPress)
- Compatible con versiones anteriores de WordPress
- Sin integración nativa con WordPress
- Obsoleto, pero aún soportado

**Cuándo usarlo**: WordPress 6.x o anterior, o cuando necesitas compatibilidad heredada

## Comprobar tu modo actual {#checking-your-current-mode}

### A través del Panel de administración {#via-admin-panel}

1. Ve a **Panel de administración de WordPress** → **Superdav AI Agent** → **Ajustes**
2. Busca la configuración **Modo de terceros**
3. Verás tu modo actual y opciones para cambiarlo

### A través del código {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', o 'legacy'
```

## Cambiar tu modo {#changing-your-mode}

### Cambiar a Modo automático {#switch-to-auto-mode}

Si estás en WordPress 7.0+ y deseas usar el modo automático:

1. Ve a **Superdav AI Agent** → **Ajustes**
2. Busca **Modo de terceros**
3. Selecciona **Automático (API de Habilidades de WordPress)**
4. Haz clic en **Guardar**

Superdav AI Agent descubrirá y registrará automáticamente las capacidades de terceros.

### Cambiar a Modo manual {#switch-to-manual-mode}

Si deseas controlar manualmente qué capacidades se cargan:

1. Ve a **Superdav AI Agent** → **Ajustes**
2. Busca **Modo de terceros**
3. Selecciona **Manual**
4. Haz clic en **Guardar**
5. Edita tu archivo de configuración para especificar qué capacidades cargar

### Cambiar a Modo heredado {#switch-to-legacy-mode}

Si necesitas compatibilidad heredada:

1. Ve a **Superdav AI Agent** → **Ajustes**
2. Busca **Modo de terceros**
3. Selecciona **Heredado**
4. Haz clic en **Guardar**

## Beneficios del Modo automático {#benefits-of-auto-mode}

### Descubrimiento automático {#automatic-discovery}

Las capacidades se descubren automáticamente de:

- Plugins instalados
- Tema activo
- Plugins de uso obligatorio (must-use)
- Plugins de inserción (drop-in)

No es necesaria la inscripción manual.

### Integración nativa {#native-integration}

Las capacidades se integran con la API de Habilidades de WordPress:

- Consistente con el núcleo de WordPress
- Funciona con el panel de administración de WordPress
- Compatible con otros plugins que usan la API de Habilidades
- A prueba de futuro a medida que evoluciona WordPress

### Gestión simplificada {#simplified-management}

- No hay archivos de configuración que editar
- No hay registro manual de capacidades
- Los controles de Visibilidad de Capacidades funcionan automáticamente
- Los avisos del administrador te alertan sobre capacidades no clasificadas

### Mejor rendimiento {#better-performance}

- Las capacidades se almacenan en caché
- Se cargan de forma perezosa (lazy-loaded) bajo demanda
- Optimizado para WordPress 7.0+

## Ruta de migración {#migration-path}

### Si estás en WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Actualiza a WordPress 7.0+** (cuando estés listo)
2. **Actualiza Superdav AI Agent** a v1.12.0+
3. **Cambia el modo de terceros a Automático** (opcional; el modo heredado sigue funcionando)
4. **Revisa la visibilidad de las capacidades** para asegurar los controles de acceso adecuados

### Si estás en WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Actualiza Superdav AI Agent** a v1.12.0+
2. **Verifica que el modo de terceros esté configurado en Automático** (debería serlo por defecto)
3. **Revisa la visibilidad de las capacidades** para asegurar los controles de acceso adecuados
4. **Prueba las capacidades de terceros** para confirmar que funcionan

## Solución de problemas {#troubleshooting}

### Las capacidades no se cargan en modo automático {#abilities-arent-loading-in-auto-mode}

- Verifica que estás en WordPress 7.0+
- Comprueba que el modo de terceros esté configurado en "Automático"
- Verifica que el plugin que proporciona la capacidad esté activo
- Revisa los registros de errores de WordPress en busca de errores de registro

### Quiero mantener el modo heredado {#i-want-to-keep-legacy-mode}

- Ve a **Ajustes** → **Modo de terceros**
- Selecciona **Heredado**
- Haz clic en **Guardar**
- El modo heredado seguirá funcionando

### Mis capacidades personalizadas no se muestran {#my-custom-abilities-arent-showing}

- Verifica que estén registradas mediante hooks de WordPress
- Comprueba que implementen correctamente la API de Habilidades
- Revisa los registros de errores de WordPress
- Utiliza la página de administración **Visibilidad de Capacidades** para ver todas las capacidades registradas

### Estoy recibiendo avisos de "capacidad no clasificada" {#im-getting-unclassified-ability-notices}

- Esto es normal para las capacidades de terceros nuevas
- Revisa y clasifícalas en el aviso del administrador
- Consulta **Visibilidad de Capacidades** para obtener detalles sobre la clasificación

## Compatibilidad con versiones anteriores {#backward-compatibility}

### Configuraciones existentes {#existing-configurations}

Si tienes configuraciones de capacidades de terceros existentes:

- **Modo heredado**: Tu configuración sigue funcionando
- **Modo manual**: Tu configuración sigue funcionando
- **Modo automático**: Tu configuración es ignorada (el modo automático toma el control)

Para mantener tu configuración personalizada, quédate en modo Manual o Heredado.

### Cronograma de obsolescencia {#deprecation-timeline}

- **v1.12.0**: Los modos Heredado y Manual siguen totalmente soportados
- **v1.13.0+**: El modo Heredado puede mostrar avisos de obsolescencia
- **v2.0.0**: El modo Heredado podría eliminarse (Por determinar)

## Mejores prácticas {#best-practices}

### Para instalaciones nuevas {#for-new-installations}

- Usa el modo automático (es el predeterminado)
- Deja que Superdav AI Agent descubra las capacidades automáticamente
- Usa Visibilidad de Capacidades para controlar el acceso

### Para instalaciones existentes {#for-existing-installations}

- Actualiza a WordPress 7.0+ cuando sea posible
- Cambia a modo automático para una gestión simplificada
- Revisa y clasifica las capacidades usando Visibilidad de Capacidades

### Para capacidades personalizadas {#for-custom-abilities}

- Registra las capacidades mediante hooks de WordPress (API de Habilidades)
- Evita los registros de capacidades personalizados
- Prueba en WordPress 7.0+ con modo automático

## Próximos pasos {#next-steps}

1. **Comprueba tu versión de WordPress**: Verifica que estás en 7.0+ para el modo automático
2. **Revisa tu modo de terceros**: Ve a Ajustes y comprueba tu modo actual
3. **Actualiza si es necesario**: Cambia a modo automático si estás en WordPress 7.0+
4. **Clasifica las capacidades**: Revisa y clasifica cualquier capacidad no clasificada
5. **Prueba**: Verifica que tus capacidades de terceros funcionan correctamente

## Temas relacionados {#related-topics}

- **Visibilidad de Capacidades**: Controla qué capacidades se exponen y dónde
- **API de Habilidades de WordPress**: Aprende sobre el registro nativo de habilidades de WordPress
- **Desarrollo de Capacidades de Terceros**: Crea capacidades que funcionen con el modo automático
