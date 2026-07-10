---
title: Jere Sit
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Jere Mantye Sit {#managing-sites}

Sit (oswa subsites) se merke sitou biznis WaaS ou. Ultimate Multisite gen 3 kalite sit:

- **Customer-owned** — Sit ki genyen nan kèk kliyan espesifik
- **Site Templates** — Sit ki deja prepare, kliyan yo ka chwazi kòm kòmanse
- **Main Site** — Sit rezo prensipal ou a

## Gade Sit {#viewing-sites}

Ale nan **Ultimate Multisite → Sites** pou w wè tout subsites nan rezo ou an. Chak sit ap etiket pa kalite li epi ou ka filtre pa Tout Sit, Customer-Owned, Templates, oswa Pending.

![Sites list page](/img/admin/sites-list.png)

## Ajoute Yon Sit Nouvo {#adding-a-new-site}

Klike sou bouton **Add Site** pou kreye yon nouvo sit. Ou pral bezwen bay:

- **Site Title** — Non nouvo sit la
- **Site URL** — Domèn/path pou sit la
- **Site Type** — Si se sit kliyan, template, oswa sit regilye

Opsyon **Copy Site** pèmèt ou kreye yon nouvo sit baze sou yon site template ki egziste deja. Lè li aktif, ou ka chwazi ki template pou w itilize kòm kòmanse. Asire w ke **Copy Media on Duplication** active pou mete fichye medya yo ansanm.

## Jere Yon Sit Ki Egziste {#managing-an-existing-site}

Klike sou **Manage** sou nenpòt sit pou ouvri paj **Edit Site**. La ou pral jwenn:

### Enfòmasyon Baze {#basic-information}

Non sit la, kalite li, ID sit la, ak deskripsyon an. Ou ap wè domèn ki mapye a, membwa asosye yo, epi kont kliyan ki gen pwopriyete sit la.

### Opsyon Sit {#site-options}

Konfigire kapasite ak limit sit la:

- **Visit limits** — Maksimum kantite vizit sou sit la
- **User account limits** — Limit pou chak wòl itilizatè
- **Disk space** — Kote pou estoke sit la
- **Custom domain** — Aktive mapye domèn pou sit sa a
- **Plugin and theme visibility** — Kontwole ki plugin ak tem yo vizib, ka kache, oswa deja aktive

Par defo, yo swiv limit ki fèt nan nivo membership la. Mete limit sou nivo sit la ap balaje (override) tout sa ki nan limit membership la.

### Associations {#associations}

Anba opsyon sit la ou pral jwenn enfòmasyon sou:

- **Mapped domains** ki asosye ak sit la
- **Membership** sit la anba kèlke membership li ye
- **Customer account** ki konekte ak sit la

### Right Sidebar (Bok la a a drwa) {#right-sidebar}

Sou bò dwat ou ka:

- **Enable/disable site la** avèk yon bouton toggle
- **Chanje tip sit la** oswa redépaye pwopriyete li
- **Set yon imaj/thumbnail sit la** (ki parèt sou frontend pou template sit yo)
- **Delete sit la** pèmanan

:::warning
Delete yon sit se bagay ki pa ka retounen. Sit la ak tout kontni li pral retire pèmanan.
:::
