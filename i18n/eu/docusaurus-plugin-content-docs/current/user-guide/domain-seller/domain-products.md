---
title: Domainak eta prezioak
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domain Produkzio eta Prezioak

Domain produkzioak daude horrek kontrolatzen duzu prezioak, TLD-ak (Top-Level Domains), WHOIS gizaldia eta proveedorak (provider) aukeratu. Domain product batek Multisite Ultimate standard product bat da, baina bereziki **Domain Settings** tab bat ez du.

## Domain product bat sortzea {#creating-a-domain-product}

1. **Network Admin › Ultimate Multisite › Products** funtziara jarraitu.
2. **Add New** (Leitu bera) klikatu.
3. Product typeak **Domain** (Domain) batean ematea.
4. **Domain Settings** tabak konfiguruatu (debajo sartu).
5. Saldu (Save) egin.

Domain produkzioak product listan purpuru **Domain** badge bat du eta **Domain Products** tabia erabiliz filtratuta daitezke.

## Domain settings tab {#domain-settings-tab}

### Provider (Proveedora) {#provider}

Zer registrarraren (registrarearen) aurrera egin behar duen aukeratu. Default batez, Domain Seller settings-ean ematen **Default provider** globala da.

### Supported TLDs (TLD-ak suportatuak) {#supported-tlds}

Ez lekuan izatea da, hau da **catch-all product** bat sortzeko, zehatzen ez duten TLD guztietan aplikatuz.

TLD-ak (adibidez: `.com, .net, .org`) erlistak koma-erlistatu eta ematen duzu bereziki **TLD-specific product** batekin, hori aukera batzuk ere aplikatzen duen produktua sortzeko.

**Product matching (Produktuen jatorpokoa) ondo jakinarazteko:** Kudeatzaile bat domain bat bilatzen duenean, addon-ek lehen aurkitutako produktuaren espezifikoen produkua ematen du. TLD erlistan `.com` duen produktuak catch-all product batek aldiz gehiago prioritatea hartzen du. TLD-specific product ez aurkitu nahi du, hori erabiltzen da. Produktuak ez dagoenean, domain bilapilduak ez erakusten dira.

### Markup type (Prezioa sortzeko modua) {#markup-type}

Wholesale cost (wholesola kostua) gabe prezio handia kalkulatzen duen modua tresna bat du:

| Mode (Modua) | Ondo jakinarazteko |
|---|---|
| **Percentage** (Pertsentua) | Wholesale cost-ean pertsentua bat gehitu du. $10 wholesale domain batean 20% markup bat ematen du $12. |
| **Fixed markup** (Prezio handia ezarrituta) | Prezioa ezarritutako dollar betikoa gehitu du. $10 domain batean $5 markup bat ematen du $15. |
| **Fixed price** (Prezio ezarrituta) | Wholesale cost-a guztiz ignora du. Hau da zure erabilduko zehaztuaren betalu. |

### Introductory pricing (Introduktori prezioak) {#introductory-pricing}

Discount offered to offer a prezzioa de primeiro año. Establezca un **Precio introductorio** (el precio del primer año) aparte del **Precio de renovación** regular (año 2+). El cliente verá ambos precios mostrados durante el pago para saber qué esperar al renovar.

### Privacidad WHOIS {#whois-privacy}

Controla si se ofrece protección de privacidad WHOIS para los dominios registrados a través de este producto.

| Configuración | Comportamiento |
|---|---|
| **Deshabilitado** | La privacidad WHOIS nunca se ofrece ni habilita. |
| **Siempre incluido** | La privacidad WHOIS se habilita automáticamente al registrarse sin coste alguno. |
| **Elección del cliente** | Aparece una casilla durante el pago. Establezca el **Precio de privacidad** para cobrar por año, o déjelo en $0 para ofrecerlo gratis. |

Para Namecheap, la privacidad WHOIS utiliza WhoisGuard (siempre gratuita). Para OpenSRS, utiliza el servicio de privacidad de OpenSRS (puede tener coste al por mayor).

---

## Importación y sincronización de TLD {#tld-import-and-sync}

Los productos de dominio muestran precios al por mayor en tiempo real obtenidos del proveedor conectado. Para que esto funcione, los TLD deben importarse.

- **Sincronización manual:** Configuración › Vendedor de dominios › Sincronizar TLDs (por proveedor)
- **Sincronización automática:** Se ejecuta diariamente a través de un trabajo cron programado en todos los proveedores configurados.

Después de una sincronización, vaya a la pestaña Configuración del Dominio de cualquier producto de dominio y use el selector de TLD para ver los TLD disponibles con sus precios al por mayor actuales.

---

## Renovación automática {#auto-renewal}

Las renovaciones de dominios están vinculadas al estado de membresía del cliente:

- Cuando una membresía se renueva y un dominio está vinculado, la renovación del dominio se pone en cola automáticamente
- Los intentos de renovación utilizan la pasarela de pago activa del cliente
- Las renovaciones fallidas se reintentan automáticamente con retroceso exponencial (exponential backoff)
- Se envían notificaciones por correo electrónico para renovaciones exitosas, fallos y próximas expiraciones

IDs de plantillas de correo electrónico para eventos del ciclo de vida del dominio:

| Akatsa | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Administrazioa: Manual domain registroatu {#admin-manual-domain-registration}

Kunde bat iriketa egin behar baduzu, eta checkout-a ez egin behar benetan:

1. **Network Admin › Ultimate Multisite › Register Domain** (Administrazioa > Ultimate Multisite > Domain registroatu) funtziokoan jarraitu.
2. Kundeak desebutatu eta domainaren naizleana (domain name) inputatu.
3. Irregistroaren datu-dantza ditu (naizlearen irizketa, leku, telefono).
4. **Register** (Irregistroatu) boltua klikatu.

Domainaren irregistroa sortuta da eta kundearen kontuan lotuta dago.
