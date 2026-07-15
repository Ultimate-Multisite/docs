---
title: Site-ak jartzea
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Site-akordeak

Siteak (aldeak) da irudiari (subsites) da WaaS negihariaren garrantziarri parte. Ultimate Multisite-ek siteak 3 dainioa ditu:

- **Kunde-proprietatuko** — Pertsonak gertu dituzten siteak
- **Site Templateak** — Kundeak lehen puntua gisa elezailari daitezkeen siteak
- **Site Nagusia (Main Site)** — Itzultzairearen nagusi nettore

## Siteak ikustea {#viewing-sites}

Itzultzairearen network-eko site guztiet ikusteko, **Ultimate Multisite → Sites** funtziara jarraitu. Site lehen erabilera daitezkeen dainioa eta All Sites (Guztian Siteak), Customer-Owned (Kunde-proprietatuko), Templates (Templateak) edo Pending (Ireki dagoen) diren arabera filtrazio egin dezakezu.

![Sites list page](/img/admin/sites-list.png)

## Site berria hobetzea {#adding-a-new-site}

Site berria sortzeko, **Add Site** botoia klikatu. Mendiet hauek emate behar duzu:

- **Site Titulu (Site Title)** — Berria sitearen irudi
- **Site URL (Site URL)** — Sitearen domain/letrariak
- **Site Dainioa (Site Type)** — Kunde sitea, template edo site ordain bat da?

**Copy Site** opsioak aukera duzu beste site template bat erabiliz berria site sortzeko. Horren bitartean, zein templatea lehen puntua gisa erabil ezin duzu. Media fileak barne sartzeko **Copy Media on Duplication** funtziari aktiboa egitea ziurtatu.

## Site dagoen bat hobetzea {#managing-an-existing-site}

Site batean kliku **Manage** (Hobetzea) botoia ezarri, **Edit Site** (Site Hobetzea) lapuriko irudiak irekitu. Aiaure daude:

### Informazio esazierazkoak (Basic Information) {#basic-information}

Sitearen irudia, dainioa, site ID-ak eta deskribapena. Horrek barne ezagutuko duzu domain-ak, erabilera (membership)-k joan aurkezpenak eta sitea proprietatutako kunden kontua.

### Site Opzioak (Site Options) {#site-options}

Sitearen kapabilidadeak eta limitazioak konfiguraatu:

- **Visit limits** — Site berritzenaren maksimumko kopurua
- **User account limits** — Erabilera pertsona edo rolari limitazioak
- **Disk space** — Sitearen almacenak (storage) limitazioa
- **Custom domain** — Site batean domain-mapa aktiboa egitea
- **Plugin and theme visibility** — Zein plugin eta themeak erabilera, gizotzen edo lehen erabilera aktiboa egiteko kontrola

Defaultan, bizitzak membership lehen edo maila dauden limitazioak jarraitzen dute. Site maila nivelan limitazioak emateko, membership heniaren eskaintzak ez duendu (override) egiten dira.

### Asosiatzenak (Associations) {#associations}

Site opsioetan, hemen informazioa aurkitu:

- Sitearekin lotutako **Mapped domains**
- Sitearen arduratutako **Membership**
- Sitearekin lotutako **Customer account**

### Direitoa Iraultza (Right Sidebar) {#right-sidebar}

Adiak handiari anizlan da:

- Sitearen **Enable/disable** egin edo ez egin toggletu botontik.
- Sitearen **Site type** aldatu edo propopuntzazko (ownership) iragatik.
- Sitearekin **Site image/thumbnail** ematea (site template-etan frontend-ean erakusten da).
- Sitearen **Delete** permanente egin.

:::warning
Site bat hartzea ez da itxarri nahi duela. Sitea eta bere contenuto guztia permanente lekuan aurkituko da.
:::
