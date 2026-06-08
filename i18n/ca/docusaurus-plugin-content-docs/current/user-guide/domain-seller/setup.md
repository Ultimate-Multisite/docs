---
title: Configuració i Configuració del Proveïdor
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Configuració i Proveïdors

L'addon Domain Seller ven amb un assistent de configuració guiat que et guia a través de cada pas requerit. Aquesta pàgina cobreix el flux de l'assistent i com configurar o reconfigurar els proveïdors després.

## Requisits

- **Multisite Ultimate** v2.4.12 o més recent, activat a nivell de xarxa (network-activated)
- **PHP** 7.4+
- Credencials API per a almenys un registrador suportat

## Assistent de configuració inicial

L'assistent de configuració s'inicia automàticament la primera vegada que actives el plugin a nivell de xarxa. També és accessible en qualsevol moment des de **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Pas 1 — Triar un proveïdor

Selecciona el registrador que vols connectar. Opcions suportades:

| Proveïdor | Gestió DNS | Privacitat WHOIS |
|---|---|---|
| OpenSRS | Sí | Sí |
| Namecheap | No | Sí (WhoisGuard, gratuït) |
| GoDaddy | No | No |
| ResellerClub | Sí | No |
| NameSilo | No | No |
| Enom | Sí | No |

### Pas 2 — Introduir credencials

Cada proveïdor té camps de credencials diferents:

**OpenSRS** — Nom d'usuari i clau privada (des del OpenSRS Reseller Control Panel)

**Namecheap** — Nom d'usuari i clau API (des de Account › Tools › API Access)

**GoDaddy** — Clau API i secret (des de developer.godaddy.com)

**ResellerClub** — ID de Reseller i clau API (des del panell de control de ResellerClub)

**NameSilo** — Clau API (des de namesilo.com › Account › API Manager)

**Enom** — ID de compte i token API

Verifica el **Sandbox mode** (mode de prova) quan estigui disponible per provar contra l'entorn de prova del proveïdor abans de passar a l'operatiu.

### Pas 3 — Provar la connexió

Fes clic a **Test Connection**. L'assistent envia una crida API lleugera per verificar les credencials i la connectivitat. Corregiu qualsevol problema de credencials abans de continuar.

### Pas 4 — Importar TLDs

Fes clic a **Import TLDs** per obtenir tots els TLDs disponibles i els preus majoristes del proveïdor connectat. Això omple la llista de TLDs utilitzada pels productes de domini. L'importació pot trigar de 30 a 60 segons per proveïdors amb catàlegs de TLDs grans.

Els TLDs també es resincronitzen automàticament una vegada al dia mitjançant un cron job programat.

### Pas 5 — Crear un producte de domini

L'assistent crea un producte de domini predeterminat (catch-all) amb un marge del 10%. Pots editar aquest producte immediatament o saltar-ho i crear productes manualment des de **Ultimate Multisite › Products**.

Consulta [Domain Products and Pricing](./domain-products) per a la guia completa de configuració de productes.

---

## Reconfigurar un proveïdor

Va a **Network Admin › Ultimate Multisite › Settings › Domain Seller** (o fes clic a **Settings** a la llista de plugins).

La pàgina de configuració conté:

- **Enable domain selling** — activa o desactiva tot el funcionalitat
- **Default provider** — el proveïdor utilitzat per a les busques de domini i els productes nous
- **Max TLDs per search** — quantes TLDs comprovar quan un client busca; els valors més alts mostren més opcions però són més lents
- **Availability cache duration** — quan temps mantenir en cache els resultats de disponibilitat i preus; els valors més baixos són més exactes però augmenten les crides API
- **Manage domain products** — enllaç ràpid a la llista de Productes
- **Configure providers** — obre l'Integration Wizard per afegir o reconfigurar proveïdors

### Afegir un segon proveïdor

Fes clic a **Configure providers** i executa l'assistent de nou per al nou registrador. Pots tenir múltiples proveïdors configurats simultàniament. Assigna cada producte de domini a un proveïdor específic, o déixa que sigui el predeterminat.

### Sincronitzar TLDs manualment

A la pàgina de configuració, fes clic a **Sync TLDs** al costat de qualsevol proveïdor configurat per obtenir els preus més recents. Això és útil després que un proveïdor actualitzi els preus majoristes o afegeixi TLDs nous.

---

## Logs

Cada proveïdor escriu al seu propi canal de logs. Els logs són visibles des de **Network Admin › Ultimate Multisite › Logs**:

| Canal de logs | Contingut |
|---|---|
| `domain-seller-registration` | Tots els intents de registre (èxit i fracàs) |
| `domain-seller-renewal` | Resultats del treball de renovació |
| `domain-seller-opensrs` | Activitat bruta de l'API d'OpenSRS |
| `domain-seller-namecheap` | Activitat bruta de l'API de Namecheap |
| `domain-seller-godaddy` | Activitat bruta de l'API de GoDaddy |
| `domain-seller-resellerclub` | Activitat bruta de l'API de ResellerClub |
| `domain-seller-namesilo` | Activitat bruta de l'API de NameSilo |
| `domain-seller-enom` | Activitat bruta de l'API d'Enom |
