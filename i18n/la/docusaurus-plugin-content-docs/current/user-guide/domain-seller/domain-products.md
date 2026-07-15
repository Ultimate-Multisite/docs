---
title: Producta et Preti
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Producta de Dominio y Precios

Las productos de dominio son la forma en que controlas los precios, las TLDs (extensiones de dominio), la privacidad WHOIS y la selección del proveedor. Cada producto de dominio es un producto Ultimate Multisite estándar con una pestaña extra llamada **Domain Settings** (Configuración de Dominio).

## Creación de un producto de dominio {#creating-a-domain-product}

1. Ve a **Network Admin › Ultimate Multisite › Products**
2. Haz clic en **Add New** (Añadir Nuevo)
3. Configura el tipo de producto como **Domain** (Dominio)
4. Configura la pestaña **Domain Settings** (Configuración de Dominio) (ver abajo)
5. Guarda

Los productos de dominio aparecen con una insignia morada llamada **Domain** (Dominio) en la lista de productos y se pueden filtrar usando la pestaña **Domain Products** (Productos de Dominio).

## Pestaña de configuración de dominio {#domain-settings-tab}

### Proveedor {#provider}

Selecciona qué registrador se encargará del registro para este producto. Por defecto, es el **Default provider** (Proveedor predeterminado) global configurado en la configuración del Vendedor de Dominios (Domain Seller settings).

### TLDs compatibles {#supported-tlds}

Déjalo en blanco para crear un **catch-all product** (producto comodín) que se aplique a todas las TLDs que no coincidan con otro producto.

Introduce una lista separada por comas de TLDs (por ejemplo, `.com, .net, .org`) para crear un **TLD-specific product** (producto específico de TLD) que solo se aplique a esas extensiones.

**Cómo funciona la coincidencia de productos:** Cuando un cliente busca un dominio, el addon elige el producto que mejor coincida. Un producto con `.com` en su lista de TLD tiene prioridad sobre un producto comodín. Si no hay ningún producto específico de TLD que coincida, se usa el comodín. Si no existen productos, la búsqueda de dominio no se muestra.

### Tipo de margen (Markup type) {#markup-type}

Tres modos controlan cómo se calcula tu precio minorista a partir del costo mayorista:

| Modo | Cómo funciona |
|---|---|
| **Percentage** (Porcentaje) | Añade un porcentaje sobre el costo mayorista. Un margen del 20% sobre un dominio con costo mayorista de $10 da $12. |
| **Fixed markup** (Margen fijo) | Añade una cantidad fija en dólares. Un margen de $5 sobre un dominio de $10 da $15. |
| **Fixed price** (Precio fijo) | Ignora por completo el costo mayorista. Siempre cobra la cantidad que ingreses. |

### Precios introductorios {#introductory-pricing}

Permite offrire un preț scontat per il primo anno. Imposta un **Prezzo introduttivo** (il prezzo del primo anno) separato dal **Prezzo di rinnovo** regolare (per l'anno 2 e successivi). Il cliente vede entrambi i prezzi visualizzati durante il checkout, così sa cosa aspettarsi al momento del rinnovo.

### Privacy WHOIS {#whois-privacy}

Controlla se viene offerta la protezione della privacy WHOIS per i domini registrati tramite questo prodotto.

| Impostazione | Comportamento |
|---|---|
| **Disabilitato** | La privacy WHOIS non viene mai offerta o abilitata. |
| **Incluso Sempre** | La privacy WHOIS è abilitata automaticamente alla registrazione senza costi aggiuntivi. |
| **Scelta del Cliente** | Appare una casella durante il checkout. Imposta il **Prezzo di privacy** per addebitare per anno, oppure lascialo a $0 per offrirlo gratuitamente. |

Per Namecheap, la privacy WHOIS utilizza WhoisGuard (sempre gratuita). Per OpenSRS, utilizza il servizio di privacy OpenSRS (potrebbe avere un costo al dettaglio).

---

## Importazione e sincronizzazione TLD {#tld-import-and-sync}

I prodotti di dominio mostrano i prezzi all'ingrosso in tempo reale recuperati dal provider collegato. Affinché questo funzioni, le TLD devono essere importate.

- **Sincronizzazione manuale:** Impostazioni › Venditore di Domini › Sincronizza TLD (per provider)
- **Sincronizzazione automatica:** Esegue quotidianamente tramite un cron job programmato su tutti i provider configurati.

Dopo una sincronizzazione, vai alla scheda Impostazioni del Dominio di qualsiasi prodotto di dominio e usa il selettore TLD per vedere le TLD disponibili con i loro attuali prezzi all'ingrosso.

---

## Rinnovo automatico {#auto-renewal}

I rinnovi dei domini sono collegati allo stato di iscrizione del cliente:

- Quando un abbonamento viene rinnovato e un dominio è collegato, il rinnovo del dominio viene messo in coda automaticamente
- I tentativi di rinnovo utilizzano il gateway di pagamento attivo del cliente
- I rinnovi falliti vengono riproposti automaticamente con backoff esponenziale
- Vengono inviate notifiche via email per i rinnovi riusciti, i fallimenti e le prossime scadenze

| Event | Template ID |
|---|---|
| Dominium registratum | `domain_registered` |
| Dominium renovatum | `domain_renewed` |
| Renovatio non successit | `domain_renewal_failed` |
| Dominium prope expirans | `domain_expiring_soon` |

---

## Admin: Registratio manualis dominii {#admin-manual-domain-registration}

Ut dominium in nomine clientis registrare sine per itinerarium ordinis (checkout) transire:

1. Ir ad **Network Admin › Ultimate Multisite › Register Domain**
2. Selecta clientem et nomen dominii insera
3. Plena detaillia contacti registrantis (nomen, locus, telefonum)
4. Cliura in **Register**

Registrum dominii creatur et cum account clientis vinculum est.
