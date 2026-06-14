---
title: Visibilitas de capacité
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Visibilitas de Habilidad

Superdav AI Agent v1.12.0 introduce controles de **Visibilidad de Habilidad** que rigen qué superficies muestran cada habilidad. Esto permite a los administradores ajustar con precisión qué capacidades del agente están disponibles a través de REST APIs, servidores MCP, integraciones de WooCommerce y otras interfaces.

## ¿Qué es la Visibilidad de Habilidad?

La Visibilidad de Habilidad es un sistema de permisos que controla:

- **Qué habilidades** están disponibles para los agentes
- **Dónde se exponen** (REST API, MCP, WooCommerce, etc.)
- **Quién puede acceder a ellas** (a través de listas de permitidos de socios)
- **Cómo se clasifican** (reconocidas vs. no clasificadas)

Cada habilidad lleva un nivel de visibilidad que determina su disponibilidad en diferentes superficies.

## Niveles de Visibilidad

### Público

Las **habilidades públicas** están disponibles en todas partes:

- Endpoints REST API
- Servidores MCP
- Integraciones WooCommerce
- Interfaces de chat
- Todos los roles de usuario (con permisos apropiados)

Ejemplo: `scaffold-block-theme`, `activate-theme`, `send-email`

### Interno

Las **habilidades internas** solo están disponibles dentro de tu instalación de WordPress:

- Interfaces de chat
- Paneles de administración
- Solo usuarios registrados
- No expuestas a través de REST API ni integraciones externas

Ejemplo: `manage-settings`, `view-analytics`, `export-data`

### Socio

Las **habilidades de socio** solo están disponibles para socios en la lista blanca (whitelisted):

- Requiere una entrada explícita en la lista de permitidos de socios
- Disponible a través de REST API con credenciales de socio
- Disponible a través de MCP con autenticación de socio
- No disponible para usuarios regulares

Ejemplo: `bulk-import-users`, `modify-billing`, `access-analytics`

### Deshabilitado

Las **habilidades deshabilitadas** no están disponibles en ningún lugar:

- No expuestas a través de ninguna superficie
- No disponibles en el chat
- No disponibles en los paneles de administración
- Útil para habilidades obsoletas o experimentales

## Gestion de la Visibilidad de Habilidades

### Acceso a la Configuración de Visibilidad de Habilidades

1. Ve a **WordPress Admin** → **Superdav AI Agent** → **Settings** (Configuración)
2. Haz clic en la pestaña **Abilities** (Habilidades)
3. Verás una lista de todas las habilidades instaladas con sus niveles de visibilidad.

### Visualización de Detalles de Habilidad

Haz clic en cualquier habilidad para ver:

- **Name** (Nombre): El identificador de la habilidad.
- **Description** (Descripción): Lo que hace la habilidad.
- **Current visibility** (Visibilidad actual): Pública, Interna, Socio o Deshabilitada.
- **Partner allow-list** (Lista blanca de socios): Qué socios pueden acceder (si es visibilidad de socio).
- **Last updated** (Última actualización): Cuándo se cambió la visibilidad por última vez.
- **Status** (Estado): Reconocida o No clasificada.

### Modificación de Niveles de Visibilidad

Para cambiar la visibilidad de una habilidad:

1. Haz clic en la habilidad en la lista.
2. Selecciona un nuevo nivel de visibilidad del menú desplegable.
3. Si seleccionas "Partner" (Socio), añade los identificadores de socio a la lista blanca.
4. Haz clic en **Save** (Guardar).

Ejemplo:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operaciones Masivas

Para cambiar la visibilidad de varias habilidades:

1. Marca las casillas junto a las habilidades.
2. Selecciona un nuevo nivel de visibilidad del menú desplegable de acción masiva.
3. Haz clic en **Apply** (Aplicar).

## Lista Blanca de Socios (Partner Allow-List)

La **partner allow-list** controla qué socios externos pueden acceder a las habilidades de nivel socio.

### Añadir Socios

1. Ve a **Superdav AI Agent** → **Settings** → **Partners** (Socios)
2. Haz clic en **Add Partner** (Añadir Socio).
3. Introduce el identificador del socio (generalmente una clave API o ID de organización).
4. Opcionalmente añade un nombre y descripción del socio.
5. Haz clic en **Save** (Guardar).

### Asignación de Habilidades a Socios

Después de añadir un socio:

1. Adveniat ad tabulam **Abilities** (Capacitates)
2. Inveniat potentiam cum visibilia Partner (Partner)
3. Click ut edias (edire)
4. In sectione "Partner allow-list" (lista permissetum partner), marca quadros pro partneribus qui accessum habere debent
5. Click **Save** (Salva)

### Revocatio Accessus Partneris

Ad removendam accessum partneris:

1. Edias potentiam
2. Desmarca quadrum partneris in allow-list
3. Click **Save** (Salva)

Partner immediate access ad illam potentiam perdit.

## Abilities Non Classificatae

Cum installas potentiam tertii partis qui Superdav AI Agent non recognoscit, ea est marcata ut **Unclassified** (Non Classificata).

### Notitia Adminum de Abilities Unclassifiedis

Vides notitiam adminum:

```
⚠️ Abilities Unclassifiedas Detectae

Quod sequuntur potentiae installatae sunt sed non recognitae:
- custom-import-tool
- external-api-wrapper

Haec potentiae possunt pericula securitatis vel compatibilitatis.
Pergula et classifica.

[Review Abilities] [Dismiss]
```

### Revisio Abilities Unclassifiedis

1. Click **Review Abilities** (Revia Abilities) in notitia
2. Pro cada una ability non classificata, vides:
   - Nomen et descriptio potentiae
   - Fons (quae plugin/addon eam installavit)
   - Gradus visibilis suggeritus
   - Evaluatio securitatis

3. Eligite gradum visibilis:
   - **Publicus** (Públicus): Fide potestate; expone omni ubi
   - **Internalus** (Internus): Restringas ad usum internum solum
   - **Partner** (Partner): Restringas ad partneres specificos
   - **Disabled** (Disabilitatus): Hoc potentiam non uti

4. Click **Classify** (Classifica) ut decisionem tuam servias

### Quod Classificamus Abilities Unclassifiedas?

Classificare potentias:

- **Securitatem melior facit**: Explicite approbas quod exponebitur
- **Accidentia praecedit**: Abilities non classificatae sunt default uti disabilitatae sunt
- **Facilitat operationes**: Cum classificata est, potentia adhibenda est
- **Decisiones documentat**: Electio tua logoritur ad auditum



## Visibilitas in Superficies Diversas

### REST API

**Capacidades públicas** están disponibles a través de los endpoints REST:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Capacidades internas y de socios** no están disponibles a través de la REST API.

### Servidores MCP

**Capacidades públicas** están disponibles mediante MCP:

```
Servidor MCP: Superdav AI Agent
Capacidades disponibles:
- scaffold-block-theme
- activate-theme
- send-email
```

**Capacidades internas** no se exponen a través de MCP.

**Capacidades de socios** solo están disponibles con credenciales de socio.

### Integración WooCommerce

**Capacidades públicas** relacionadas con WooCommerce están disponibles:

- Gestión de productos
- Procesamiento de pedidos
- Comunicación con el cliente

**Capacidades internas** no se exponen a WooCommerce.

### Interfaz de Chat

**Todas las capacidades** (Públicas, Internas, de socios) están disponibles en el chat, dependiendo de los permisos del usuario:

- Los administradores ven todas las capacidades
- Los usuarios regulares ven solo las capacidades públicas
- Los socios ven capacidades públicas + de socios (si están permitidos por la lista blanca)

## Mejores Prácticas de Seguridad

### Principio de Mínimo Privilegio

- Establezca las capacidades con la visibilidad más restrictiva que aún permita su uso.
- Utilice la visibilidad de socio para operaciones sensibles.
- Deshabilite las capacidades que no utilice.

### Auditorías Regulares

- Revise la visibilidad de las capacidades mensualmente.
- Verifique si hay capacidades sin clasificar.
- Elimine el acceso a socios no utilizados.

### Registro y Monitoreo (Logging and Monitoring)

- Monitoree qué capacidades se utilizan más.
- Haga seguimiento de los patrones de acceso de los socios.
- Alerte sobre el uso inusual de capacidades.

### Capacidades de Terceros

- Revise las capacidades de terceros antes de habilitarlas.
- Clasifíquelas explícitamente.
- Comience con visibilidad Interna o de Socio.
- Promueva a Pública solo después de la verificación.

## Problemen y Soluciones

**Una habilidad no aparece en la lista**
- Verifica que la habilidad esté instalada y activa.
- Comprueba que el plugin/addon esté habilitado.
- Actualiza la página.

**No puedo cambiar la visibilidad de una habilidad**
- Confirma que tienes permisos de administrador.
- Revisa que ninguna habilidad esté bloqueada por un plugin.
- Intenta desactivar plugins que puedan estar causando conflictos.

**Un socio no puede acceder a una habilidad**
- Verifica que el socio esté en la lista de permitidos (allow-list).
- Comprueba que la visibilidad de la habilidad esté configurada como "Socio" (Partner).
- Confirma que las credenciales del socio sean correctas.
- Revisa los logs de API para errores de autenticación.

**Las habilidades sin clasificar siguen apareciendo**
- Revisa y clasifícalas en el aviso de administrador.
- Comprueba que tu clasificación se haya guardado correctamente.
- Verifica que el plugin que proporciona la habilidad esté actualizado.

## Migración desde Modo Heredado (Legacy Mode)

Si estás actualizando desde una versión anterior del Superdav AI Agent:

- Todas las habilidades existentes se clasifican automáticamente como Públicas (Public).
- Revisa y ajusta la visibilidad según sea necesario.
- No se requiere ninguna acción a menos que desees restringir el acceso.

Consulta **Migración al Modo de Terceros** para más detalles sobre la transición a la integración nativa de la API de Habilidades.

## Pasos Siguientes

Después de configurar la visibilidad de las habilidades:

1. **Revisa tus habilidades**: Audita todas las habilidades instaladas.
2. **Clasifica las habilidades sin clasificar**: Responde a los avisos del administrador.
3. **Configura socios**: Añade socios si estás utilizando la visibilidad de Socio (Partner).
4. **Monitoriza el uso**: Rastrea qué habilidades se utilizan más.
5. **Documenta decisiones**: Mantén notas sobre por qué elegiste cada nivel de visibilidad.
