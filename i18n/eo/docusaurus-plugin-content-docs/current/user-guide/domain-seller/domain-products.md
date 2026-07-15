---
title: Domeno Produktaj kaj Precoj
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domeno Produktaj kaj Precoj

Domeno produktaj estas la maniero, kiel vi kontrolas precojn, TLD-ojn (Top-Level Domain), WHOIS-privancon kaj proveedor selekton. Ĉiu domeno produkto estas standarda Ultimate Multisite produkto kun ekstrema **Domain Settings** tabo.

## Krei domeno produkton {#creating-a-domain-product}

1. Aliri **Network Admin › Ultimate Multisite › Products**
2. Kliki sur **Add New** (Añadi Novan)
3. Definiti la tipon de produkto kiel **Domain** (Domeno).
4. Konfiguri la **Domain Settings** tabon (vidabove).
5. Salvi

Domeno produktaj aparas kun purpura **Domain** badge en la produkto listo kaj povas esti filtritaj per la **Domain Products** tabon.

## Domain settings tabo {#domain-settings-tab}

### Provider (Proveedor) {#provider}

Selekti, kiu registriĝon por ĉi tiu produkto maneblebleĝos. Defaulto estas la globala **Default provider**, kiun vi stavas en Domain Seller settingaj.

### Supported TLDs (Subtenitaj TLD-oj) {#supported-tlds}

Laboreti blankan liston por krei **catch-all product** (produkton, kiu aplika al ĉiuj TLD-oj, kiuj ne estas matĉita de alia produkto).

Intri koma-separitan liston de TLD-oj (ekz., `.com, .net, .org`) por krei **TLD-specifan produkton**, kiun vi aplikiĝas nur al tiuj ekstensionoj.

**Kiel funkcias la matĉo de produktoj:** Kiam klientas serĉas domenon, la addon elektas la plej specifan matĉan produkton. Produkto kun `.com` en sin TLD-listo havas prioriteton super catch-all produkton. Se ne ekzistas nuna TLD-specifa produkto, la catch-all estas uzata. Se ne ekzistas produktoj, la serĉo de domeno ne sera montrita.

### Markup type (Tip de marĝento) {#markup-type}

Tres modoj kontrolas, kiel vi kalkulas vian detalan precon por la grosvendon koston:

| Mode (Modo) | Kiel ĝi funkcias |
|---|---|
| **Percentage** (Procento) | Adozas procenton al grosvendon koston. 20% marĝento sur $10 grosvende domeno donas $12. |
| **Fixed markup** (Fiksa marĝento) | Adozas fiksan dolaran monton. $5 marĝento sur $10 domeno donas $15. |
| **Fixed price** (Fiksa preco) | Ignoras la grosvendon koston tute. Ĉiam chargeblas la monton, kiun vi intriasis. |

### Introductory pricing (Introduca preco) {#introductory-pricing}

### Kuj la WHOIS konfideco (WHOIS privacy) {#whois-privacy}

Kontrolas, ĉu WHOIS konfideco estas oferte por domenoj registritaj per ĉi tiu produkto.

| Konfigurado | Kompatajo |
|---|---|
| **Disabilitita** | WHOIS konfideco ne oferte ni nekondukas. |
| **Spermes inkluziva** | WHOIS konfideco estas aŭtomate aktiva pri registriĝo sen kostado. |
| **Klastro de klientoj** | Kontroliĝas ĉe checkout. Atendigu la **Priva caŭzo** (la prix per jaro), aŭ ŝanĝu ĝin al $0 por oferti ĝin liberan. |

Por Namecheap, WHOIS konfideco uzas WhoisGuard (sempre libere). Por OpenSRS, ĝi uzas la servon de konfideco de OpenSRS (eble havi koston ĉe grosvendado).

---

## TLD importo kaj sincronigo {#tld-import-and-sync}

Domeno-produktoj prezentas reala grosvendaj priçojn ak hetgetajn datumojn de la konektita providanto. Por tio funkcii, TLD'oj devas esti importitaj.

- **Manua sincronigo:** Settings › Domain Seller › Sync TLDs (per providanto)
- **Automata sincronigo:** Funkcias ĉiujn diesan per planita cronjobo sur ĉiuj konfigiitaj providantoj.

Post sincronigo, al ĉiu domeno-produkto tabelo "Domain Settings" kaj uzu la TLD-selektadon por vidi la disponiblajn TLD'ojn kun iliaj aktualaj grosvendaj priçoj.

---

## Auto-renovado {#auto-renewal}

Domeno-renovado estas ligita al la statuso de la klientaj membraj:

- Kiam membraĝo renoviĝas kaj domeno estas linkita, la renovado de la domeno estas aŭtomate en la fila (queued).
- Renovadoj uzas la aktivan pagamentan porton de la klientaj.
- Neurenovitaj renovadoj rejarĝas aŭtomate kun eksponenca reveno (exponential backoff).
- Elektronaj notoj estas senditaj por sukcesaj renovadoj, nekompletoj kaj venindaj expiradoj.

ID-oj de elektronaj mallatologioj por eventoj de la jiveco de domeno:

| Event | Template ID |
|---|---|
| Domeno registriita | `domain_registered` |
| Domeno renoviita | `domain_renewed` |
| Renovado nesuccedita | `domain_renewal_failed` |
| Domeno proksime expirera | `domain_expiring_soon` |

---

## Administratio: Registriĝo de domeno manu {#admin-manual-domain-registration}

Por registri domeno por klienton sen ke ili per la checkout (pagamenton) pasu, sekvi ĉi tiuj paŝojn:

1. Aliri **Network Admin › Ultimate Multisite › Register Domain**
2. Selekti la klienton kaj intali la nomon de la domeno
3. Pleni la kontakton detalojn de la registristanto (nombo, adreso, telefona numero)
4. Kliki sur **Register**

La reko de la domeno wird creata kaj linkita al la konto de la klienton.
