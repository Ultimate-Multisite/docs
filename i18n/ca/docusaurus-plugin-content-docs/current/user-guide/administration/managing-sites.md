---
title: Gestionar Llocs
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Gestió de Sites

Els Sites (o subsites) són el nucli del teu negoci WaaS. Ultimate Multisite té 3 tipus de sites:

- **De propietat del client** — Sites que pertanyen a clients específics
- **Plantilles de Site** — Sites predefinits que els clients poden seleccionar com a punt de partida
- **Site Principal** — El teu site principal de la xarxa

## Visualització de Sites

Navega a **Ultimate Multisite → Sites** per veure tots els subsites de la teva xarxa. Cada site està etiquetat per tipus i pots filtrar per Tots els Sites, De propietat del client, Plantilles o Pendents.

![Sites list page](/img/admin/sites-list.png)

## Afegir un Site nou

Fes clic al botó **Add Site** per crear un site nou. Hauràs de proporcionar:

- **Site Title** — El nom del site nou
- **Site URL** — El domini/camí del site
- **Site Type** — Si és un site de client, una plantilla o un site normal

L'opció **Copy Site** et permet crear un site nou basat en una plantilla de site existent. Quan està habilitat, pots seleccionar quina plantilla utilitzar com a punt de partida. Assegura't que **Copy Media on Duplication** estigui habilitat per incloure els fitxers multimèdia.

## Gestió d'un Site existent

Fes clic a **Manage** en qualsevol site per obrir la pàgina **Edit Site**. Aquí trobaràs:

### Informació bàsica

El nom, tipus, ID del site i descripció. També veuràs el domini mapejat, l'adesió associada i la compte de client que és propietaria del site.

### Opcions del Site

Configura les capacitats i límits del site:

- **Límits de visites** — Màxim nombre de visites al site
- **Límits de comptes d'usuari** — Límits per rol d'usuari
- **Espai en disc** — Quota de magatzematge per al site
- **Domini personalitzat** — Habilitar el mapeig de domini per a aquest site
- **Visibilitat de plugins i temes** — Controlar quins plugins i temes són visibles, ocults o preactivats

Per defecte, els sites segueixen els límits establerts al nivell d'adesió. Estableixer límits al nivell del site anularà les configuracions d'adesió.

### Associacions

A continuació de les opcions del site, trobaràs informació sobre:

- **Domínis mapejats** associats al site
- **Adesió** a la qual pertany el site
- **Compta de client** enllaçada al site

### Barra lateral dreta

A la dreta pots:

- **Habilitar/deshabilitar el site** amb un botó *toggle*
- **Canviar el tipus de site** o reassignar la propietat
- **Establir una imatge/miniatura del site** (mostrada a la interfície d'usuari per a plantilles de site)
- **Eliminar el site** de manera permanent

:::warning
Eliminar un site és irreversible. El site i tot el seu contingut s'eliminaran de manera permanent.
:::
