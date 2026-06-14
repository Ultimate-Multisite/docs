---
title: Maniĝado de Sitoj
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Administri la Sitoj

Sitoj (aŭ subsitoj) estas la bazon de via WaaS (WordPress as a Service) bizneco. Ultimate Multisite havas 3 tipojn de sitoj:

- **Klianto-proprietaj** — Sitoj, kiuj aparatĝas specifajn klientojn
- **Sitoptemploj** — Predefinitaj sitoj, kiun klientoj povas elekti kiel komencajn punkto
- **Grupa Sitoj (Main Site)** — Via primara retoj sitaĵo

## Vidado de Sitioj

Navigu al **Ultimate Multisite → Sites**, por vidi ĉiuj subsitoj en via reto. Ĉiu sitio estas etiketita per tipo, kaj vi povas filtri per "Tio ĉiuj Sitoj", "Klianto-proprietaj", "Temploj" aŭ "Pendas".

![Sites list page](/img/admin/sites-list.png)

## Ado de Nova Sitio

Klaknu sur la butono **Add Site** (Adu Siton), por krei novan sito. Vi bezonas provizi:

- **Site Title** — La nomo de la nova sitio
- **Site URL** — La domeno/viavo por la sitio
- **Site Type** — Se ĝi estas klianto-sito, tempaĵo aŭ regula sito

La opcio **Copy Site** (Kopi Siton) permesas vi krei novan sito bazitajn sur ekzista sitoptemplo. Kiam ĝi estas aktiva, vi povas elekti, kiu tempaĵo uzu kiel komenco. Ĉu vi certigas, ke **Copy Media on Duplication** (Kopi Medion pri Duplikado) estas aktiva por inkluzi filojn de mediu?

## Administri Ekzistantan Siton

Klaknu sur **Manage** (Administri) sur ĉiu sito por ofiĉi la paginon **Edit Site** (Editi Sito). Tial vi trovos:

### Baza Informoj

La nomo de la sitio, tipo, site ID kaj deskripcio. Vi ankaŭ vidus la mapita domeno, la asociita membraĝo kaj la klianto-konto, kiu aparatĝas la sito.

### Opcioj de Sito

Konfiguri la kapablon kaj limojn de la sito:

- **Visit limits** (Limoj de vizitoj) — La maksima nulo de vizitoj al la sitio
- **User account limits** (Limoj de kontoj de uzantoj) — Limoj per uzanto rolaj
- **Disk space** (Diskoespaco) — La storo por la sito
- **Custom domain** (Domeno kaj mapado) — Aktivi domeno-mapadon por ĉi tiu sito
- **Plugin and theme visibility** (Vidiblaco de pluginoj kaj temoj) — Kontroli, kiuj pluginoj kaj temoj estas vidblaj, sekretaj aŭ antaŭaktiveblaj

Per defolto seguas la limigoj fixitaj en la nivel de membria. La definado limigoj en la nivel de sita ovorveras la konfiguracio de membria.

### Asociazioni

Sub la opcioj de sita, vi parvendis informacia pri:

- **Dominios mapitaj** asociitaj con el sita
- **Membria** sub la kiu estas la sita
- **Konta de klient** linkita al sita

### Dret Flankaj (Right Sidebar)

Sur la destra vi povas:

- **Aktivi/deaktivi la siton** per buton ŝaltilo
- **Mangi la tipon de sita** aŭ reasigni la proprietadon
- **Defini imago/minifamo de sita** (ekspresita sur la frontendo por modeloj de sitio)
- **Deletami la siton** persempre

:::warning
La deletado de sita estas ne reversabla. La sita kaj ĉio ĝia enhavo postulas persempre elfermiĝi.
:::
