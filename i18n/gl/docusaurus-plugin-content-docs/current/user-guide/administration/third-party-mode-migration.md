---
title: Migración ao Modo de Terceiros
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migración ao Modo de Terceiros (Third-Party Mode)

A Superdav AI Agent v1.12.0 cambia a forma como se tratan as capacidades de terceiros. **O modo de terceiros agora é automático por defecto**, permitindo a integración nativa da WordPress Abilities API na WordPress 7.0+ sen configuración manual.

## O que mudou? {#what-changed}

### Antes da v1.12.0 {#before-v1120}

As capacidades de terceiros exigían configuración manual:

- Teria que activar explícitamente o "modo de terceiros" (third-party mode)
- As capacidades cargaban a partir dun rexistro personalizado
- A integración co WordPress Abilities API era opcional
- O modo legado era o predefecto

### Despois da v1.12.0 {#after-v1120}

As capacidades de terceiros funcionan automáticamente:

- O modo de terceiros é automático por defecto ("auto")
- As capacidades integran de forma nativa co WordPress Abilities API
- Non se necesita configuración manual na WordPress 7.0+
- O modo legado ata está disponible para versiones anteriores de WordPress

## Qui é afectado? {#who-is-affected}

### Novas Instalacións (WordPress 7.0+) {#new-installations-wordpress-70}

**Non se requiere ninguna acción.** O modo de terceiros está configurado automáticamente como "auto", e as capacidades funcionan de fábrica.

### Instalacións Existentes {#existing-installations}

**As túas configuracións están preservadas.** Seus casos son:

- **Modo legado**: Aínda estarás no modo legado (non hay cambio)
- **Modo de terceiros manual**: Aínda estarás no modo manual (non hay cambio)
- **Modo automático**: Continuarás con o modo automático (non hay cambio)

### Versións de WordPress Antes da 7.0 {#wordpress-versions-before-70}

**O modo legado ata está disponible.** Se estás en WordPress 6.x ou anterior:

- O modo de terceiros é automático por defecto ("legacy")
- Podes activar manualmente o modo de terceiros se queres
- Atualiza para WordPress 7.0+ para usar a Abilities API nativa

## Comprender os Modos {#understanding-the-modes}

### Modo Automático (Novo Predefecto) {#auto-mode-new-default}

**O modo automático** usa a integración nativa da WordPress Abilities API:

- As capacidades se registran vía hooks de WordPress
- Compatibilidade total coa Abilities API da WordPress 7.0+
- Descubriña automática das capacidades de terceiros
- Non se necesita configuración manual

**Cuándo usar**: WordPress 7.0+ con capacidades de terceros

### Modo Manual {#manual-mode}

O **modo manual** requiere configuración explícita:

- Especificas qué capacidades de terceros cargar
- Útil para probar o cargar capacidades seleccionadas
- Requiere editar archivos de configuración
- Más control, pero más configuración inicial

**Cuándo usar**: Pruebas, carga selectiva de capacidades o configuraciones personalizadas

### Modo Heredado (Legacy Mode) {#legacy-mode}

O **modo heredado** utiliza el antiguo sistema de capacidades de terceros:

- Registro de capacidades personalizado (no la API de Capacidades de WordPress)
- Compatible con versiones antiguas de WordPress
- Sin integración nativa con WordPress
- Obsoleto pero aún soportado

**Cuándo usar**: WordPress 6.x o anterior, o cuando necesites compatibilidad heredada

## Comprobar tu Modo Actual {#checking-your-current-mode}

### A través del Panel de Administración {#via-admin-panel}

1. Ve a **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Busca la configuración **Third-Party Mode** (Modo de Terceros)
3. Verás tu modo actual y opciones para cambiarlo

### A través del Código {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', o 'legacy'
```

## Cambiar tu Modo {#changing-your-mode}

### Cambiar a Modo Automático (Auto Mode) {#switch-to-auto-mode}

Si estás en WordPress 7.0+ y quieres usar el modo automático:

1. Ve a **Superdav AI Agent** → **Settings**
2. Busca **Third-Party Mode**
3. Selecciona **Auto (WordPress Abilities API)**
4. Haz clic en **Save** (Guardar)

El Superdav AI Agent descubrirá y registrará automáticamente las capacidades de terceros.

### Cambiar a Modo Manual (Manual Mode) {#switch-to-manual-mode}

Si quieres controlar manualmente qué capacidades se cargan:

1. Ve a **Superdav AI Agent** → **Settings**
2. Busca **Third-Party Mode**
3. Selecciona **Manual**
4. Haz clic en **Save** (Guardar)
5. Edita tu archivo de configuración para especificar qué capacidades cargar

### Cambiar a Modo Heredado (Legacy Mode) {#switch-to-legacy-mode}

Si necesitas compatibilidad heredada:

1. Ve a **Superdav AI Agent** → **Configuradores (Settings)**
2. Busca **Modo de Terceiros (Third-Party Mode)**
3. Selecciona **Legado (Legacy)**
4. Clica en **Guardar (Save)**

## Beneficios do Modo Automático (Auto Mode) {#benefits-of-auto-mode}

### Descubrizo Automático (Automatic Discovery) {#automatic-discovery}

As capacidades son descubiertas automáticamente a partir de:

- Plugins instalados
- Tema activo
- Plugins obligatorios (Must-use plugins)
- Plugins de inyección (Drop-in plugins)

Non hai que registras manualmente.

### Integración Nativa (Native Integration) {#native-integration}

As capacidades se integran con a API das Capacidades de WordPress:

- Coerente con o núcleo do WordPress
- Funciona con o administrador do WordPress
- Compatível con outros plugins que usen a API das Capacidades
- A prova de futuro, xa que o WordPress evolúase

### Gestión Simplificada (Simplified Management) {#simplified-management}

- Non hai ficheiros de configuración para editar
- Non hai registos manuais de capacidades
- Os controles de visibilidade das capacidades traballan automáticamente
- As notificaciones do administrador alertan sobre as capacidades non clasificadas

### Melhor Rendemento (Better Performance) {#better-performance}

- As capacidades son cacheadas (cached)
- Carregación preguiçosa (lazy-loaded) só no momento necesario
- Optimizado para WordPress 7.0+

## Percorso de Migración (Migration Path) {#migration-path}

### Se estás en WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Actualiza para WordPress 7.0+** (cando este sexa)
2. **Actualiza o Superdav AI Agent** para v1.12.0+
3. **Cambia o modo de terceiros para Auto** (opcional; o modo legado tamén funciona)
4. **Revisa a visibilidade das capacidades** para asegurar os correctos controles de acceso

### Se estás en WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Actualiza o Superdav AI Agent** para v1.12.0+
2. **Verifica que o modo de terceiros está en Auto** (debería estar por defecto)
3. **Revisa a visibilidade das capacidades** para asegurar os correctos controles de acceso
4. **Térese as capacidades de terceiros** para confirmar que funcionan

## Solución de Problemas (Troubleshooting) {#troubleshooting}

### As capacidades non cargan no modo automático {#abilities-arent-loading-in-auto-mode}

- Verifica que estás en WordPress 7.0+
- Comprueba que o modo de terceiros está en "Auto"
- Verifica que o plugin que proporciona a capacidade está activo
- Revisa os logs de erro do WordPress para erros de registo

### Quero manter o modo legado {#i-want-to-keep-legacy-mode}

- Ve a **Configuradores (Settings)** → **Modo de Terceiros (Third-Party Mode)**
- Selecciona **Legado (Legacy)**
- Clica en **Guardar (Save)**
- O modo legado continuará a funcionar

### As mine capacidades personalas non se ven {#my-custom-abilities-arent-showing}

- Verifica que están registadas a través de los hooks de WordPress
- Comprueba que implementan la Abilities API correctamente
- Revisa los registros de errores de WordPress
- Utiliza la página de administración **Ability Visibility** para ver todas las capacidades registradas

### Estoy recibiendo avisos de "capacidad no clasificada" {#im-getting-unclassified-ability-notices}

- Esto es normal para nuevas capacidades de terceros
- Revisa y clasifícalas en el aviso de administración
- Consulta **Ability Visibility** para obtener detalles sobre la clasificación

## Compatibilidad hacia atrás (Backward Compatibility) {#backward-compatibility}

### Configuraciones existentes {#existing-configurations}

Si tienes configuraciones de capacidad de terceros existentes:

- **Modo Legacy**: Tu configuración sigue funcionando
- **Modo Manual**: Tu configuración sigue funcionando
- **Modo Auto**: Tu configuración se ignora (el modo auto toma el control)

Para mantener tu configuración personalizada, quédate en el modo Manual o Legacy.

### Cronología de desuso (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Los modos Legacy y Manual siguen totalmente soportados
- **v1.13.0+**: El modo Legacy puede mostrar avisos de desuso
- **v2.0.0**: El modo Legacy puede ser eliminado (Pendiente de definir)

## Mejores Prácticas (Best Practices) {#best-practices}

### Para nuevas instalaciones {#for-new-installations}

- Usa el modo Auto (es el predeterminado)
- Deja que el Superdav AI Agent descubra las capacidades automáticamente
- Utiliza Ability Visibility para controlar el acceso

### Para instalaciones existentes {#for-existing-installations}

- Actualiza a WordPress 7.0+ cuando sea posible
- Cambia al modo Auto para una gestión simplificada
- Revisa y clasifica las capacidades usando Ability Visibility

### Para capacidades personalizadas {#for-custom-abilities}

- Registra las capacidades a través de los hooks de WordPress (Abilities API)
- Evita registros de capacidad personalizados
- Prueba en WordPress 7.0+ con el modo Auto

1. **Verifique a súa versión de WordPress**: Asegúrese de estar en 7.0+ para o modo Auto.
2. **Revise o seu modo de terceiros (third-party)**: Vaya a Configuración (Settings) e verifique o modo que está en uso.
3. **Actualíse se for necesario**: Mude para o modo Auto se está en WordPress 7.0+.
4. **Clasifique as capacidades**: Revise e clasifique todas as capacidades que non estén clasificadas.
5. **Teste**: Verifique que as súas capacidades de terceiros funcionan correctamente.

## Tópicos Relacionados {#next-steps}

- **Visibilidade das Capacidades (Ability Visibility)**: Controle onde se expóan as capacidades.
- **API de Capacidades de WordPress (WordPress Abilities API)**: Aprenda sobre a registración nativa das capacidades de WordPress.
- **Desarrollar Capacidades de Terceiros (Third-Party Ability Development)**: Crie capacidades que funcionen con o modo Auto.
