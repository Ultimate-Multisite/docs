---
title: Productes i preus de domini
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Productes de Domini i Preus

Els productes de domini són el mètode per controlar els preus, els TLDs, la privadesa WHOIS i la selecció de proveïdors. Cada producte de domini és un producte estàndard de Ultimate Multisite amb una pestanya addicional anomenada **Domain Settings**.

## Creació d'un producte de domini {#creating-a-domain-product}

1. Navegueu a **Network Admin › Ultimate Multisite › Products**
2. Cliqueu a **Add New**
3. Configureu el tipus de producte com a **Domain**
4. Configureu la pestanya **Domain Settings** (veure a continuació)
5. Guardeu

Els productes de domini apareixen amb un distintiu **Domain** de color púrpura a la llista de productes i es poden filtrar utilitzant la pestanya **Domain Products**.

## Pestanya de configuració de domini (Domain settings tab) {#domain-settings-tab}

### Proveïdor (Provider) {#provider}

Seleccioneu el registre que gestionarà la inscripció per a aquest producte. Per defecte, utilitza el **Default provider** global configurat a Domain Seller settings.

### TLDs suportats (Supported TLDs) {#supported-tlds}

Deixeu el camp buit per crear un **producte de captura general (catch-all product)** que s'aplica a tots els TLDs que no són coincidència d'un altre product.

Introduïu una llista de TLDs separats per coma (per exemple, `.com, .net, .org`) per crear un **producte específic de TLD** que s'aplica només a aquestes extensió.

**Com funciona la coincidència de productes:** Quan un client busca un domini, l'addon tria el producte de coincidència més específic. Un producte amb `.com` a la seva llista de TLDs té prioritat sobre un producte de captura general. Si cap producte específic de TLD coincideix, es fa servir el de captura general. Si no hi ha productes, la cerca de domini no s'exhibeix.

### Tipus de marg (Markup type) {#markup-type}

Tres modes controlen com es calcula el vostre preu de venda a partir del cost major:

| Mode | Com funciona |
|---|---|
| **Percentage** | Afegeu un percentatge al cost major. Un marg del 20% sobre un domini major de $10 dona $12. |
| **Fixed markup** | Afegeu una quantitat en dòlars fixa. Un marg de $5 sobre un domini de $10 dona $15. |
| **Fixed price** | Ignora completament el cost major. Sempre cobra la quantitat que introdueu. |

### Preu introductori (Introductory pricing) {#introductory-pricing}

Habilitar per oferir un preu de l'any primer de descompte. Configureu un **Introductory price** separat (el preu de l'any -1) juntament amb el **Renewal price** regular (any 2+). El client veurà ambdós preus durant el pagament per saber què esperar al renovar.

### Privadesa WHOIS (WHOIS privacy) {#whois-privacy}

Contròleu si es ofereix protecció de privadesa WHOIS per als domini registrats mitjançant aquest producte.

| Setting | Comportament |
| :--- | :--- |
| **Disabled** | La privadesa WHOIS mai s'ofereix ni s'activa. |
| **Always Included** | La privadesa WHOIS s'activa automàticament a la inscripció sense càrrec. |
| **Customer Choice** | Apareix una casella de marca durant el pagament. Configureu el **Privacy price** per cobrar per any, o deixeu-ho a $0 per oferirlo gratis. |

Per Namecheap, la privadesa WHOIS utilitza WhoisGuard (sempre gratis). Per OpenSRS, utilitza el servei de privadesa OpenSRS (pot tenir un cost al major).

---

## Importació i sincronització de TLDs {#tld-import-and-sync}

Els productes de domini mostren preus major en temps real recuperats del proveïdor connectat. Per que això funcione, els TLDs han de ser importats.

- **Sincronització manual:** Settings › Domain Seller › Sync TLDs (per proveïdor)
- **Sincronització automàtica:** S'executa diàriament mitjançant un cron job programat per tots els proveïdors configurats.

Després d'una sincronització, aneu a la pestanya de configuració de domini de qualsevol producte de domini i utilitzeu el selector de TLD per veure els TLDs disponibles amb els seus preus major actuals.

---

## Renovació automàtica (Auto-renewal) {#auto-renewal}

Les renovacions de domini estan vinculades al estat de membresia del client:

- Quan una membresia es renova i es vincula un domini, la renovació del domini es posa automàticament en cola
- Els intents de renovació utilitzen la passarela de pagament activa del client
- Les renovacions fallides es reintentan automàticament amb *exponential backoff*
- Es fan enviar notificacions per correu electrònic per a renovacions exitoses, fallades i expiracions pròxims.

ID de plantilles per esdeveniments del cicle de vida del domini:

| Event | Template ID |
| :--- | :--- |
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Administració: Registració manual de domini {#admin-manual-domain-registration}

Per registrar un domini en nom d'un client sense que aquest passi per el pagament:

1. Navegueu a **Network Admin › Ultimate Multisite › Register Domain**
2. Seleccioneu el client i introdueu el nom de domini
3. Ompliu els detalls de contacte del registrant (nom, adreça, telèfon)
4. Cliqueu a **Register**

El registre del domini es crea i es vincula a la compte del client.
