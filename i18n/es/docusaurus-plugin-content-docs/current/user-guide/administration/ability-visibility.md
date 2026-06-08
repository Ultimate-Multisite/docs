---
title: Visibilidad de capacidades
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Visibilidad de Habilidades

Superdav AI Agent v1.12.0 introduce controles de **Visibilidad de Habilidades** que determinan qué superficies exponen cada habilidad. Esto permite a los administradores ajustar con precisión qué capacidades del agente están disponibles a través de las REST APIs, servidores MCP, integraciones de WooCommerce y otras interfaces.

## ¿Qué es la Visibilidad de Habilidades?

La Visibilidad de Habilidades es un sistema de permisos que controla:

- **Qué habilidades** están disponibles para los agentes
- **Dónde se exponen** (REST API, MCP, WooCommerce, etc.)
- **Quién puede acceder a ellas** (a través de listas de permisos de socios)
- **Cómo se clasifican** (reconocidas vs. no clasificadas)

Cada habilidad lleva un nivel de visibilidad que determina su disponibilidad en diferentes superficies.

## Niveles de Visibilidad

### Público

Las **habilidades públicas** están disponibles en todas partes:

- Puntos finales de la REST API
- Servidores MCP
- Integraciones de WooCommerce
- Interfaces de chat
- Todos los roles de usuario (con los permisos apropiados)

Ejemplo: `scaffold-block-theme`, `activate-theme`, `send-email`

### Interno

Las **habilidades internas** están disponibles solo dentro de su instalación de WordPress:

- Interfaces de chat
- Paneles de administración
- Solo para usuarios registrados
- No se exponen a través de REST API ni integraciones externas

Ejemplo: `manage-settings`, `view-analytics`, `export-data`

### Socio

Las **habilidades de socio** están disponibles solo para socios en lista blanca:

- Requiere entrada explícita en la lista de permisos de socios
- Disponible a través de REST API con credenciales de socio
- Disponible a través de MCP con autenticación de socio
- No disponible para usuarios regulares

Ejemplo: `bulk-import-users`, `modify-billing`, `access-analytics`

### Deshabilitado

Las **habilidades deshabilitadas** no están disponibles en ninguna parte:

- No se exponen a través de ninguna superficie
- No están disponibles en el chat
- No están disponibles en los paneles de administración
- Útil para habilidades obsoletas o experimentales

## Gestión de la Visibilidad de Habilidades

### Acceder a la Configuración de Visibilidad de Habilidades

1. Vaya a **Administración de WordPress** → **Superdav AI Agent** → **Configuración**
2. Haga clic en la pestaña **Habilidades**
3. Verá una lista de todas las habilidades instaladas con sus niveles de visibilidad

### Ver Detalles de Habilidades

Haga clic en cualquier habilidad para ver:

- **Nombre**: El identificador de la habilidad
- **Descripción**: Qué hace la habilidad
- **Visibilidad actual**: Público, Interno, Socio o Deshabilitado
- **Lista de permisos de socios**: Qué socios pueden acceder (si es visibilidad de Socio)
- **Última actualización**: Cuándo se cambió la visibilidad por última vez
- **Estado**: Reconocida o No clasificada

### Cambiar Niveles de Visibilidad

Para cambiar la visibilidad de una habilidad:

1. Haga clic en la habilidad en la lista
2. Seleccione un nuevo nivel de visibilidad del menú desplegable
3. Si selecciona "Socio", añada los identificadores de los socios a la lista de permisos
4. Haga clic en **Guardar**

Ejemplo:

```
Habilidad: bulk-import-users
Visibilidad actual: Público
Cambiar a: Socio
Lista de permisos de socios: partner-123, partner-456
```

### Operaciones Masivas

Para cambiar la visibilidad de múltiples habilidades:

1. Marque las casillas junto a las habilidades
2. Seleccione un nuevo nivel de visibilidad del menú desplegable de acciones masivas
3. Haga clic en **Aplicar**

## Lista de Permisos de Socios

La **lista de permisos de socios** controla qué socios externos pueden acceder a las habilidades de nivel Socio.

### Añadir Socios

1. Vaya a **Superdav AI Agent** → **Configuración** → **Socios**
2. Haga clic en **Añadir Socio**
3. Ingrese el identificador del socio (generalmente una clave API o un ID de organización)
4. Opcionalmente, añada un nombre y una descripción del socio
5. Haga clic en **Guardar**

### Asignar Habilidades a Socios

Después de añadir un socio:

1. Vaya a la pestaña **Habilidades**
2. Encuentre una habilidad con visibilidad de Socio
3. Haga clic para editar
4. En la sección "Lista de permisos de socios", marque las casillas de los socios que deben tener acceso
5. Haga clic en **Guardar**

### Revocar Acceso de Socio

Para eliminar el acceso de un socio:

1. Edite la habilidad
2. Desmarque la casilla del socio en la lista de permisos
3. Haga clic en **Guardar**

El socio perderá inmediatamente el acceso a esa habilidad.

## Habilidades No Clasificadas

Cuando instala una habilidad de terceros que Superdav AI Agent no reconoce, se marca como **No clasificada**.

### Aviso de Administración para Habilidades No Clasificadas

Verá un aviso de administración:

```
⚠️ Se detectaron habilidades no clasificadas

Las siguientes habilidades se instalaron, pero no son reconocidas:
- custom-import-tool
- external-api-wrapper

Estas habilidades pueden plantear riesgos de seguridad o compatibilidad.
Por favor, revíselas y clasifíquelas.

[Revisar Habilidades] [Descartar]
```

### Revisar Habilidades No Clasificadas

1. Haga clic en **Revisar Habilidades** en el aviso
2. Para cada habilidad no clasificada, verá:
   - Nombre y descripción de la habilidad
   - Fuente (qué plugin/addon lo instaló)
   - Nivel de visibilidad sugerido
   - Evaluación de seguridad

3. Elija un nivel de visibilidad:
   - **Público**: Confíe en la habilidad; expóngala en todas partes
   - **Interno**: Restringir solo para uso interno
   - **Socio**: Restringir a socios específicos
   - **Deshabilitado**: No usar esta habilidad

4. Haga clic en **Clasificar** para guardar su decisión

### ¿Por qué clasificar habilidades no clasificadas?

Clasificar habilidades:

- **Mejora la seguridad**: Usted aprueba explícitamente lo que se expone
- **Previene accidentes**: Las habilidades no clasificadas están deshabilitadas por defecto
- **Habilita funciones**: Una vez clasificadas, la habilidad está disponible
- **Documenta decisiones**: Sus elecciones se registran con fines de auditoría

## Visibilidad en Diferentes Superficies

### REST API

Las **habilidades públicas** están disponibles a través de puntos finales REST:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Las habilidades internas y de socio** no están disponibles a través de REST API.

### Servidores MCP

**Las habilidades públicas** están disponibles a través de MCP:

```
Servidor MCP: Superdav AI Agent
Habilidades disponibles:
- scaffold-block-theme
- activate-theme
- send-email
```

**Las habilidades internas** no se exponen a través de MCP.

**Las habilidades de socio** están disponibles solo con credenciales de socio.

### Integración de WooCommerce

Están disponibles las **habilidades públicas** relacionadas con WooCommerce:

- Gestión de productos
- Procesamiento de pedidos
- Comunicación con clientes

**Las habilidades internas** no se exponen a WooCommerce.

### Interfaz de Chat

**Todas las habilidades** (Públicas, Internas, de Socio) están disponibles en el chat, dependiendo de los permisos del usuario:

- Los administradores ven todas las habilidades
- Los usuarios regulares ven solo las habilidades Públicas
- Los socios ven habilidades Públicas + de Socio (si están en lista blanca)

## Mejores Prácticas de Seguridad

### Principio de Privilegio Mínimo

- Configure las habilidades con la visibilidad más restrictiva que aún permita su uso
- Utilice la visibilidad de Socio para operaciones sensibles
- Deshabilite las habilidades que no utiliza

### Auditorías Regulares

- Revise la visibilidad de las habilidades mensualmente
- Busque habilidades no clasificadas
- Elimine el acceso a socios que no están utilizando

### Registro y Monitoreo

- Monitoree qué habilidades se utilizan más
- Rastree los patrones de acceso de los socios
- Alerte sobre usos inusuales de habilidades

### Habilidades de Terceros

- Revise las habilidades de terceros antes de habilitarlas
- Clasifíquelas explícitamente
- Comience con visibilidad Interna o de Socio
- Promueva a Público solo después de una verificación exhaustiva

## Solución de Problemas

**Una habilidad no aparece en la lista**
- Verifique que la habilidad esté instalada y activa
- Compruebe que el plugin/addon esté habilitado
- Actualice la página

**No puedo cambiar la visibilidad de una habilidad**
- Verifique que tiene permisos de administrador
- Compruebe que la habilidad no esté bloqueada por un plugin
- Intente deshabilitar plugins en conflicto

**Un socio no puede acceder a una habilidad**
- Verifique que el socio esté en la lista de permisos
- Compruebe que la visibilidad de la habilidad esté configurada como Socio
- Confirme que las credenciales del socio sean correctas
- Revise los registros de la API en busca de errores de autenticación

**Las habilidades no clasificadas siguen apareciendo**
- Revíselas y clasifíquelas en el aviso de administración
- Compruebe que su clasificación se guardó
- Verifique que el plugin que proporciona la habilidad esté actualizado

## Migración desde Modo Heredado

Si está actualizando desde una versión anterior de Superdav AI Agent:

- Todas las habilidades existentes se clasifican automáticamente como Públicas
- Revise y ajuste la visibilidad según sea necesario
- No se requiere ninguna acción a menos que desee restringir el acceso

Consulte **Migración del Modo de Terceros** para más detalles sobre la transición a la integración nativa de la API de Habilidades.

## Próximos Pasos

Después de configurar la visibilidad de las habilidades:

1. **Revise sus habilidades**: Audite todas las habilidades instaladas
2. **Clasifique habilidades no clasificadas**: Responda a los avisos de administración
3. **Configure socios**: Añada socios si utiliza visibilidad de Socio
4. **Monitoree el uso**: Rastree qué habilidades se utilizan más
5. **Documente decisiones**: Mantenga notas sobre por qué eligió cada nivel de visibilidad
