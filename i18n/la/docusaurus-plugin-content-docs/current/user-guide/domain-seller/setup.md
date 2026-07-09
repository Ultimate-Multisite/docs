---
title: Configuratio et Configuratio Provisorii
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Venditor de Domene: Configuración e Instalación del Proveedor {#domain-seller-setup-and-provider-configuration}

El addon Domain Seller se entrega con un asistente guiado que te guía a través de cada paso necesario. Esta página cubre el flujo del asistente y cómo configurar o reconfigurar los proveedores después.

## Requisitos {#requirements}

- **Multisite Ultimate** v2.4.12 o superior, activado en red
- **PHP** 7.4+
- Credenciales de API para al menos un registrador compatible

## Asistente de configuración inicial {#first-run-setup-wizard}

El asistente se inicia automáticamente la primera vez que activas el plugin en tu red. También está disponible en cualquier momento desde **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Paso 1 — Elige un proveedor {#step-1--choose-a-provider}

Selecciona el registrador con el que deseas conectarte. Opciones compatibles:

| Proveedor | Gestión de DNS | Privacidad WHOIS |
|---|---|---|
| OpenSRS | Sí | Sí |
| Namecheap | No | Sí (WhoisGuard, gratis) |
| HostAfrica | Sí | Sí (Protección de ID) |
| Openprovider | Sí | Sí |
| Hostinger | A través del mapeo de dominio principal de Hostinger para dominios alojados | Sí |
| GoDaddy | No | No |
| ResellerClub | Sí | No |
| NameSilo | No | No |
| Enom | Sí | No |

### Paso 2 — Introduce las credenciales {#step-2--enter-credentials}

Cada proveedor tiene campos de credenciales diferentes:

**OpenSRS** — Nombre de usuario y clave privada (del Panel de Control del Reseller de OpenSRS)

**Namecheap** — Nombre de usuario y clave API (de Cuenta › Herramientas › Acceso a la API)

**HostAfrica** — Punto final de la API del Reseller de Dominios y credenciales del módulo de reseller de HostAfrica. Actualmente no se documenta un punto final de sandbox separado; prueba con verificaciones de solo lectura seguras antes de realizar registros en vivo.

**Openprovider** — Nombre de usuario y contraseña con acceso a la API habilitado. El modo sandbox opcional utiliza la API de sandbox de Openprovider, y un identificador de cliente predeterminado opcional se puede reutilizar para los registros.

**Hostinger** — Token de hPanel compartido de Hostinger para la integración principal. El mismo token impulsa el mapeo de dominios principales y las operaciones de registro de vendedores de dominio.

**GoDaddy** — Clave API y secreto (de developer.godaddy.com)

**ResellerClub** — ID de revendedor y clave API (del panel de control de ResellerClub)

**NameSilo** — Clave API (de namesilo.com › Account › API Manager)

**Enom** — ID de cuenta y token API

Verifique el **modo Sandbox** donde esté disponible para probar contra el entorno de prueba del proveedor antes de pasar a producción.

### Paso 3 — Probar la conexión {#step-3--test-the-connection}

Haga clic en **Test Connection**. El asistente envía una llamada API ligera para verificar las credenciales y la conectividad. Solucione cualquier problema con las credenciales antes de continuar.

### Paso 4 — Importar TLDs {#step-4--import-tlds}

Haga clic en **Import TLDs** para descargar todos los TLD disponibles y los precios al por mayor del proveedor conectado. Esto llena la lista de TLD utilizada por los productos de dominio. La importación puede tardar entre 30 y 60 segundos para proveedores con catálogos de TLD grandes.

Los TLD también se sincronizan automáticamente una vez al día a través de un trabajo cron programado.

### Paso 5 — Crear un producto de dominio {#step-5--create-a-domain-product}

El asistente crea un producto de dominio genérico predeterminado con un margen del 10%. Puede editar este producto inmediatamente o saltar y crear productos manualmente en **Ultimate Multisite › Products**.

Vea [Domain Products and Pricing](./domain-products) para la guía completa de configuración de productos.

---

## Reconfigurar un proveedor {#reconfiguring-a-provider}

Vaya a **Network Admin › Ultimate Multisite › Settings › Domain Seller** (o haga clic en **Settings** en la lista del plugin).

La página de configuración contiene:

- **Habilitare vendita domeniu** — accendi/spegni l'intera funzione
- **Fornitore predefinito** — il fornitore usato per le ricerche di dominio e i nuovi prodotti
- **Max TLD per ricerca** — quanti TLD controllare quando un cliente cerca; valori più alti mostrano più opzioni ma sono più lenti
- **Durata cache disponibilità** — quanto tempo tenere in cache i risultati di disponibilità e prezzo; valori più bassi sono più accurati ma aumentano le chiamate API
- **Gestisci prodotti dominio** — link rapido alla lista Prodotti
- **Configura fornitori** — apre l'Integration Wizard per aggiungere o riconfigurare i fornitori

### Aggiungere un secondo fornitore {#adding-a-second-provider}

Clicca su **Configure providers** e esegui di nuovo il wizard per il nuovo registrar. Puoi avere più fornitori configurati contemporaneamente. Assegna a ciascun prodotto dominio a un fornitore specifico, oppure lascialo sul predefinito.

### Sincronizzare i TLD manualmente {#syncing-tlds-manually}

Nella pagina delle impostazioni, clicca su **Sync TLDs** accanto a qualsiasi fornitore configurato per recuperare i prezzi più recenti. Questo è utile dopo che un fornitore aggiorna i prezzi all'ingrosso o aggiunge nuovi TLD.

---

## Log {#logs}

Ogni fornitore scrive nel proprio canale di log. I log sono visualizzabili sotto **Network Admin › Ultimate Multisite › Logs**:

| Canale log | Contenuto |
|---|---|
| `domain-seller-registration` | Tutti i tentativi di registrazione (successo e fallimento) |
| `domain-seller-renewal` | Risultati del lavoro di rinnovo |
| `domain-seller-opensrs` | Attività API grezza OpenSRS |
| `domain-seller-namecheap` | Attività API grezza Namecheap |
| `domain-seller-hostafrica` | Attività API grezza HostAfrica |
| `domain-seller-openprovider` | Attività API grezza Openprovider |
| `domain-seller-hostinger` | Attività API grezza Hostinger |
| `domain-seller-godaddy` | Attività API grezza GoDaddy |
| `domain-seller-resellerclub` | Attività API grezza ResellerClub |
| `domain-seller-namesilo` | Attività API grezza NameSilo |
| `domain-seller-enom` | Attività API grezza Enom |

---

## Note sulle capacità del provider {#provider-capability-notes}

Non tutti gli API dei registratori espongono le stesse operazioni. L'addon mostra le operazioni non supportate con errori chiari rivolti agli amministratori invece di fallire in silenzio.

- **HostAfrica** supporta il flusso di reseller live più ampio, inclusa la ricerca, la sincronizzazione TLD/prezzi, la registrazione, il rinnovo, il trasferimento, gli aggiornamenti dei server di nomi (nameserver), i record DNS, i codici EPP, il blocco del registratore e la protezione dell'ID.
- **Openprovider** supporta la sincronizzazione TLD a prezzo reseller, la registrazione, il rinnovo, i trasferimenti, gli aggiornamenti dei server di nomi, le zone DNS, i codici EPP, il blocco del registratore e la privacy WHOIS. Si autentica con un bearer token a breve durata che l'addon aggiorna automaticamente.
- **Hostinger** supporta la ricerca di disponibilità, la registrazione, la ricerca del portafoglio (portfolio lookup), gli aggiornamenti dei server di nomi, il blocco del registratore e la privacy WHOIS tramite il token API condiviso hPanel. L'API Domini pubblica di Hostinger non espone i prezzi reseller/wholesale, il trasferimento in entrata, il rinnovo esplicito o il recupero dei codici EPP; i rinnovi sono solo automatici.
