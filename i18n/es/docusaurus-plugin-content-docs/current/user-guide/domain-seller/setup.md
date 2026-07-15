---
title: Instalación y configuración del proveedor
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: configuración inicial y configuración del proveedor

El addon Domain Seller incluye un asistente de configuración guiado que te guía por cada paso requerido. Esta página cubre el flujo del asistente y cómo configurar o reconfigurar proveedores después.

## Requisitos {#requirements}

- **Multisite Ultimate** v2.4.12 o superior, activado en la red
- **PHP** 7.4+
- Credenciales de API para al menos un registrador compatible

## Asistente de configuración de primera ejecución {#first-run-setup-wizard}

El asistente de configuración se inicia automáticamente la primera vez que activas el plugin en la red. También está disponible en cualquier momento desde **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Paso 1 — Elige un proveedor {#step-1--choose-a-provider}

Selecciona el registrador que quieres conectar. Opciones compatibles:

| Proveedor | Gestión de DNS | Privacidad de WHOIS |
|---|---|---|
| OpenSRS | Sí | Sí |
| Namecheap | No | Sí (WhoisGuard, gratis) |
| HostAfrica | Sí | Sí (protección de ID) |
| Openprovider | Sí | Sí |
| Hostinger | Mediante el mapeo de dominios central de Hostinger para dominios alojados | Sí |
| GoDaddy | No | No |
| ResellerClub | Sí | No |
| NameSilo | No | No |
| Enom | Sí | No |

### Paso 2 — Introduce credenciales {#step-2--enter-credentials}

Cada proveedor tiene campos de credenciales diferentes:

**OpenSRS** — Nombre de usuario y clave privada (desde el panel de control de revendedor de OpenSRS)

**Namecheap** — Nombre de usuario y clave de API (desde Account › Tools › API Access)

**HostAfrica** — Endpoint de API de revendedor de dominios y credenciales desde el módulo de revendedor de HostAfrica. Actualmente no hay documentado un endpoint de sandbox separado; prueba con comprobaciones seguras de solo lectura antes de ejecutar registros en vivo.

**Openprovider** — Nombre de usuario y contraseña con acceso a la API habilitado. El modo sandbox opcional usa la API de sandbox de Openprovider, y se puede reutilizar un identificador de cliente predeterminado opcional para los registros.

**Hostinger** — El token de API compartido de Hostinger hPanel desde la integración central de Hostinger. El mismo token impulsa el mapeo de dominios central y las operaciones de registro de Domain Seller.

**GoDaddy** — Clave de API y secreto (desde developer.godaddy.com)

**ResellerClub** — ID de revendedor y clave de API (desde el panel de control de ResellerClub)

**NameSilo** — Clave de API (desde namesilo.com › Account › API Manager)

**Enom** — ID de Account y token de API

Marca **Modo sandbox** donde esté disponible para probar con el entorno de pruebas del proveedor antes de pasar a producción.

### Paso 3 — Prueba la conexión {#step-3--test-the-connection}

Haz clic en **Test Connection**. El asistente envía una llamada ligera a la API para verificar credenciales y conectividad. Corrige cualquier problema de credenciales antes de continuar.

### Paso 4 — Importa TLDs {#step-4--import-tlds}

Haz clic en **Import TLDs** para obtener todos los TLDs disponibles y los precios mayoristas del proveedor conectado. Esto rellena la lista de TLDs usada por los productos de dominio. La importación puede tardar entre 30 y 60 segundos para proveedores con catálogos de TLD grandes.

Los TLDs también se resincronizan automáticamente una vez al día mediante una tarea cron programada.

### Paso 5 — Crea un producto de dominio {#step-5--create-a-domain-product}

El asistente crea un producto de dominio predeterminado general con un margen del 10 %. Puedes editar este producto inmediatamente u omitirlo y crear productos manualmente en **Ultimate Multisite › Products**.

Consulta [Productos de dominio y precios](./domain-products) para ver la guía completa de configuración de productos.

---

## Reconfigurar un proveedor {#reconfiguring-a-provider}

Ve a **Network Admin › Ultimate Multisite › Settings › Domain Seller** (o haz clic en **Settings** en la lista de plugins).

La página de ajustes contiene:

- **Enable domain selling** — activa o desactiva toda la función
- **Default provider** — el proveedor usado para búsquedas de dominios y nuevos productos
- **Max TLDs per search** — cuántos TLDs comprobar cuando un cliente busca; los valores más altos muestran más opciones, pero son más lentos
- **Availability cache duration** — cuánto tiempo almacenar en caché los resultados de disponibilidad y precios; los valores más bajos son más precisos, pero aumentan las llamadas a la API
- **Manage domain products** — enlace rápido a la lista de productos
- **Configure providers** — abre el Integration Wizard para añadir o reconfigurar proveedores

### Añadir un segundo proveedor {#adding-a-second-provider}

Haz clic en **Configure providers** y ejecuta el asistente de nuevo para el nuevo registrador. Puedes tener varios proveedores configurados simultáneamente. Asigna cada producto de dominio a un proveedor específico o déjalo en el predeterminado.

### Sincronizar TLDs manualmente {#syncing-tlds-manually}

En la página de ajustes, haz clic en **Sync TLDs** junto a cualquier proveedor configurado para obtener los precios más recientes. Esto es útil después de que un proveedor actualice los precios mayoristas o añada nuevos TLDs.

---

## Registros {#logs}

Cada proveedor escribe en su propio canal de registro. Los registros se pueden ver en **Network Admin › Ultimate Multisite › Logs**:

| Canal de registro | Contenido |
|---|---|
| `domain-seller-registration` | Todos los intentos de registro (correctos y fallidos) |
| `domain-seller-renewal` | Resultados de tareas de renovación |
| `domain-seller-opensrs` | Actividad sin procesar de la API de OpenSRS |
| `domain-seller-namecheap` | Actividad sin procesar de la API de Namecheap |
| `domain-seller-hostafrica` | Actividad sin procesar de la API de HostAfrica |
| `domain-seller-openprovider` | Actividad sin procesar de la API de Openprovider |
| `domain-seller-hostinger` | Actividad sin procesar de la API de Hostinger |
| `domain-seller-godaddy` | Actividad sin procesar de la API de GoDaddy |
| `domain-seller-resellerclub` | Actividad sin procesar de la API de ResellerClub |
| `domain-seller-namesilo` | Actividad sin procesar de la API de NameSilo |
| `domain-seller-enom` | Actividad sin procesar de la API de Enom |

---

## Notas sobre las capacidades del proveedor {#provider-capability-notes}

No todas las API de registrador exponen las mismas operaciones. El addon muestra las operaciones no compatibles con errores claros orientados al administrador en lugar de fallar silenciosamente.

- **HostAfrica** admite el flujo de trabajo de revendedor en vivo más amplio, incluyendo búsqueda, sincronización de TLD/precios, registro, renovación, transferencia, actualizaciones de servidores de nombres, registros DNS, códigos EPP, bloqueo de registrador y protección de ID.
- **Openprovider** admite sincronización de TLD con precios de revendedor, registro, renovación, transferencias, actualizaciones de servidores de nombres, zonas DNS, códigos EPP, bloqueo de registrador y privacidad WHOIS. Se autentica con un bearer token de corta duración que el complemento actualiza automáticamente.
- **Hostinger** admite búsqueda de disponibilidad, registro, consulta de cartera, actualizaciones de servidores de nombres, bloqueo de registrador y privacidad WHOIS mediante el token de API hPanel compartido. La Domains API pública de Hostinger no expone precios de revendedor/mayorista, transferencia entrante, renovación explícita ni recuperación de códigos EPP; las renovaciones son solo de renovación automática.
