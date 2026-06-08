---
title: Configuración y Configuración del Proveedor
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Configuración y configuración de proveedores

El addon Domain Seller viene con un asistente de configuración guiado que te lleva paso a paso por todos los requisitos. Esta página cubre el flujo del asistente y cómo configurar o reconfigurar los proveedores después.

## Requisitos

- **Multisite Ultimate** v2.4.12 o superior, activado a nivel de red
- **PHP** 7.4+
- Credenciales de API para al menos un registrador compatible

## Asistente de configuración inicial

El asistente de configuración se lanza automáticamente la primera vez que activas el plugin a nivel de red. También está disponible en cualquier momento desde **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Paso 1 — Elegir un proveedor

Selecciona el registrador que deseas conectar. Opciones compatibles:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### Paso 2 — Introducir credenciales

Cada proveedor tiene campos de credenciales diferentes:

**OpenSRS** — Nombre de usuario y clave privada (del OpenSRS Reseller Control Panel)

**Namecheap** — Nombre de usuario y clave API (de Account › Tools › API Access)

**GoDaddy** — Clave API y secreta (de developer.godaddy.com)

**ResellerClub** — ID de Reseller y clave API (del panel de control de ResellerClub)

**NameSilo** — Clave API (de namesilo.com › Account › API Manager)

**Enom** — ID de cuenta y token API

Marca **Sandbox mode** (modo de prueba) cuando esté disponible para probar contra el entorno de prueba del proveedor antes de ir en vivo.

### Paso 3 — Probar la conexión

Haz clic en **Test Connection** (Probar conexión). El asistente envía una llamada API ligera para verificar las credenciales y la conectividad. Soluciona cualquier problema de credenciales antes de continuar.

### Paso 4 — Importar TLDs

Haz clic en **Import TLDs** (Importar TLDs) para obtener todos los TLDs y precios mayoristas disponibles del proveedor conectado. Esto rellena la lista de TLDs utilizada por los productos de dominio. La importación puede tardar entre 30 y 60 segundos para proveedores con catálogos de TLDs grandes.

Los TLDs también se resincronizan automáticamente una vez al día mediante un cron job programado.

### Paso 5 — Crear un producto de dominio

El asistente crea un producto de dominio predeterminado (catch-all) con un margen de beneficio del 10%. Puedes editar este producto inmediatamente o saltarte este paso y crear productos manualmente en **Ultimate Multisite › Products**.

Consulta [Domain Products and Pricing](./domain-products) para obtener la guía completa de configuración de productos.

---

## Reconfigurar un proveedor

Ve a **Network Admin › Ultimate Multisite › Settings › Domain Seller** (o haz clic en **Settings** en la lista de plugins).

La página de configuración contiene:

- **Enable domain selling** (Habilitar venta de dominios) — para activar o desactivar la función completa
- **Default provider** (Proveedor predeterminado) — el proveedor utilizado para búsquedas de dominios y productos nuevos
- **Max TLDs per search** (Máximo TLDs por búsqueda) — cuántos TLDs comprobar cuando un cliente realiza una búsqueda; los valores más altos muestran más opciones, pero son más lentos
- **Availability cache duration** (Duración de caché de disponibilidad) — cuánto tiempo almacenar en caché los resultados de disponibilidad y precios; los valores más bajos son más precisos, pero aumentan las llamadas a la API
- **Manage domain products** (Administrar productos de dominio) — enlace rápido a la lista de Productos
- **Configure providers** (Configurar proveedores) — abre el Integration Wizard para añadir o reconfigurar proveedores

### Añadir un segundo proveedor

Haz clic en **Configure providers** y ejecuta el asistente de nuevo para el nuevo registrador. Puedes tener varios proveedores configurados simultáneamente. Asigna cada producto de dominio a un proveedor específico, o déjalo en el predeterminado.

### Sincronizar TLDs manualmente

En la página de configuración, haz clic en **Sync TLDs** junto a cualquier proveedor configurado para obtener los precios más recientes. Esto es útil después de que un proveedor actualice los precios mayoristas o añada nuevos TLDs.

---

## Logs

Cada proveedor escribe en su propio canal de registro (log). Los logs son visibles en **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Todos los intentos de registro (éxito y fallo) |
| `domain-seller-renewal` | Resultados del trabajo de renovación |
| `domain-seller-opensrs` | Actividad API sin procesar de OpenSRS |
| `domain-seller-namecheap` | Actividad API sin procesar de Namecheap |
| `domain-seller-godaddy` | Actividad API sin procesar de GoDaddy |
| `domain-seller-resellerclub` | Actividad API sin procesar de ResellerClub |
| `domain-seller-namesilo` | Actividad API sin procesar de NameSilo |
| `domain-seller-enom` | Actividad API sin procesar de Enom |
