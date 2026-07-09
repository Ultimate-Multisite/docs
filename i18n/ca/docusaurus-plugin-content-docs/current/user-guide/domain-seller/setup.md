---
title: Instal·lació i configuració del proveïdor
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: configuració inicial i configuració de proveïdors

L'addon Domain Seller inclou un assistent de configuració inicial guiat que et porta per cada pas necessari. Aquesta pàgina cobreix el flux de l'assistent i com configurar o reconfigurar proveïdors posteriorment.

## Requisits

- **Multisite Ultimate** v2.4.12 o superior, activat a la xarxa
- **PHP** 7.4+
- Credencials d'API per a almenys un registrador compatible

## Assistent de configuració inicial de primera execució

L'assistent de configuració inicial s'inicia automàticament la primera vegada que actives el plugin a la xarxa. També està disponible en qualsevol moment des de **Network Admin › Ultimate Multisite › Configuració de Domain Seller**.

### Pas 1 — Tria un proveïdor

Selecciona el registrador que vols connectar. Opcions compatibles:

| Proveïdor | Gestió de DNS | Privadesa WHOIS |
|---|---|---|
| OpenSRS | Sí | Sí |
| Namecheap | No | Sí (WhoisGuard, gratis) |
| HostAfrica | Sí | Sí (protecció d'ID) |
| Openprovider | Sí | Sí |
| Hostinger | Mitjançant el mapatge de dominis principal de Hostinger per a dominis allotjats | Sí |
| GoDaddy | No | No |
| ResellerClub | Sí | No |
| NameSilo | No | No |
| Enom | Sí | No |

### Pas 2 — Introdueix les credencials

Cada proveïdor té camps de credencials diferents:

**OpenSRS** — Nom d'usuari i clau privada (des del tauler de control de revenedor d'OpenSRS)

**Namecheap** — Nom d'usuari i clau d'API (des de Account › Eines › Accés a l'API)

**HostAfrica** — Endpoint de l'API de revenedor de dominis i credencials del mòdul de revenedor de HostAfrica. Actualment no hi ha documentat cap endpoint de sandbox separat; prova-ho amb comprovacions segures de només lectura abans d'executar registres en producció.

**Openprovider** — Nom d'usuari i contrasenya amb l'accés a l'API activat. El mode sandbox opcional utilitza l'API sandbox d'Openprovider, i es pot reutilitzar un identificador de client predeterminat opcional per als registres.

**Hostinger** — El token d'API compartit de l'hPanel de Hostinger de la integració principal de Hostinger. El mateix token impulsa el mapatge de dominis principal i les operacions de registre de Domain Seller.

**GoDaddy** — Clau d'API i secret (des de developer.godaddy.com)

**ResellerClub** — ID de revenedor i clau d'API (des del tauler de control de ResellerClub)

**NameSilo** — Clau d'API (des de namesilo.com › Account › API Manager)

**Enom** — ID d'Account i token d'API

Marca **Mode sandbox** quan estigui disponible per provar-ho amb l'entorn de proves del proveïdor abans de passar a producció.

### Pas 3 — Prova la connexió

Fes clic a **Prova la connexió**. L'assistent envia una crida lleugera a l'API per verificar les credencials i la connectivitat. Corregeix qualsevol problema de credencials abans de continuar.

### Pas 4 — Importa TLDs

Fes clic a **Importa TLDs** per obtenir tots els TLDs disponibles i els preus majoristes del proveïdor connectat. Això omple la llista de TLDs utilitzada pels productes de domini. La importació pot trigar entre 30 i 60 segons per als proveïdors amb catàlegs de TLDs grans.

Els TLDs també es tornen a sincronitzar automàticament un cop al dia mitjançant una tasca cron programada.

### Pas 5 — Crea un producte de domini

L'assistent crea un producte de domini predeterminat genèric amb un marge del 10%. Pots editar aquest producte immediatament o ometre-ho i crear productes manualment a **Ultimate Multisite › Productes**.

Consulta [Productes de domini i preus](./domain-products) per veure la guia completa de configuració de productes.

---

## Reconfiguració d'un proveïdor

Ves a **Network Admin › Ultimate Multisite › Configuració › Domain Seller** (o fes clic a **Configuració** a la llista de plugins).

La pàgina de configuració conté:

- **Activa la venda de dominis** — activa o desactiva tota la funcionalitat
- **Proveïdor predeterminat** — el proveïdor utilitzat per a cerques de dominis i productes nous
- **Màxim de TLDs per cerca** — quants TLDs s'han de comprovar quan un client cerca; els valors més alts mostren més opcions però són més lents
- **Durada de la memòria cau de disponibilitat** — quant de temps s'han d'emmagatzemar en memòria cau els resultats de disponibilitat i preus; els valors més baixos són més precisos però augmenten les crides a l'API
- **Gestiona els productes de domini** — enllaç ràpid a la llista de productes
- **Configura proveïdors** — obre l'assistent d'integració per afegir o reconfigurar proveïdors

### Afegir un segon proveïdor

Fes clic a **Configura proveïdors** i executa l'assistent de nou per al nou registrador. Pots tenir diversos proveïdors configurats simultàniament. Assigna cada producte de domini a un proveïdor específic, o deixa'l al predeterminat.

### Sincronització manual de TLDs

A la pàgina de configuració, fes clic a **Sincronitza TLDs** al costat de qualsevol proveïdor configurat per obtenir els preus més recents. Això és útil després que un proveïdor actualitzi els preus majoristes o afegeixi nous TLDs.

---

## Registres

Cada proveïdor escriu al seu propi canal de registre. Els registres es poden veure a **Network Admin › Ultimate Multisite › Registres**:

| Canal de registre | Contingut |
|---|---|
| `domain-seller-registration` | Tots els intents de registre (èxit i error) |
| `domain-seller-renewal` | Resultats de les tasques de renovació |
| `domain-seller-opensrs` | Activitat d'API d'OpenSRS en brut |
| `domain-seller-namecheap` | Activitat d'API de Namecheap en brut |
| `domain-seller-hostafrica` | Activitat d'API de HostAfrica en brut |
| `domain-seller-openprovider` | Activitat d'API d'Openprovider en brut |
| `domain-seller-hostinger` | Activitat d'API de Hostinger en brut |
| `domain-seller-godaddy` | Activitat d'API de GoDaddy en brut |
| `domain-seller-resellerclub` | Activitat d'API de ResellerClub en brut |
| `domain-seller-namesilo` | Activitat d'API de NameSilo en brut |
| `domain-seller-enom` | Activitat d'API d'Enom en brut |

---

## Notes sobre les capacitats dels proveïdors

No totes les APIs de registradors exposen les mateixes operacions. L'addon mostra les operacions no compatibles amb errors clars orientats als administradors en lloc de fallar silenciosament.

- **HostAfrica** admet el flux de treball de revenedor en viu més ampli, incloent-hi cerca, sincronització de TLD/preus, registre, renovació, transferència, actualitzacions de nameserver, registres DNS, codis EPP, bloqueig del registrador i protecció d’ID.
- **Openprovider** admet la sincronització de TLD amb preus de revenedor, registre, renovació, transferències, actualitzacions de nameserver, zones DNS, codis EPP, bloqueig del registrador i privadesa WHOIS. S’autentica amb un bearer token de curta durada que l’addon actualitza automàticament.
- **Hostinger** admet la cerca de disponibilitat, el registre, la consulta de cartera, les actualitzacions de nameserver, el bloqueig del registrador i la privadesa WHOIS mitjançant el token d’API hPanel compartit. L’API pública de dominis de Hostinger no exposa preus de revenedor/a l’engròs, transferència entrant, renovació explícita ni recuperació de codis EPP; les renovacions només són de renovació automàtica.
