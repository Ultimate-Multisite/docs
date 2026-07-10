---
title: Kugara Mabhizimiso
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Kuratira Sites {#managing-sites}

Sites (kana subsites) ndiyo chinangwa chekuchengetedza business yako ye WaaS. Ultimate Multisite inengei matsviki anonyanya:

- **Customer-owned** — Sites dzakakodzera vachikuru vakati
- **Site Templates** — Sites dzakareva kuti vachikuru vanogona kuva chinangwa chekufamba
- **Main Site** — Site yako yavo yakapfura (primary network site)

## Kuti Unenge Uona Sites {#viewing-sites}

Ramba uyu **Ultimate Multisite → Sites** kuti uone subsites nevanhu vezvinangwa vako. Chiti chine zvinhu zvinoreva kana chinangwa uye unogona kuenda kune All Sites, Customer-Owned, Templates, kana Pending.

![Sites list page](/img/admin/sites-list.png)

## Kuti Ungeita Site Deri {#adding-a-new-site}

Chiramba uyu button **Add Site** kuti utore site deri. Utafana kuipa:

- **Site Title** — Zvinhu zvepamba rosite
- **Site URL** — Domain/path yekuti rorosite riri
- **Site Type** — Kana iri site yaichikuru, template, kana site yakareva

Option ye **Copy Site** inokubatsira kuita site deri yakareva kubva pa template yakaita. Kana iweita iye, unogona kutaura kuti upfungire sei template yakaiitika chekufamba. Zviona kuti **Copy Media on Duplication** inenge iramba imiitika kuti zvinhu zvemedia zvinoshandiswa zvisaririre.

## Kuti Unenge Ucheera Site Yakaita {#managing-an-existing-site}

Chiramba uyu button **Manage** pa site yese kuti utore page ya **Edit Site**. Panguine ungoita:

### Mabhuku Enyanya (Basic Information) {#basic-information}

Zvinhu zvepamba rosite, kana chinangwa chake, ID ye site, uye maunhu anogona kuita, uye chinyorwa chekufungira. Unogonawo kuona domain inoshandiswa, membership yakaita, uye account yaichikuru inoshandisa site iye.

### Zvinhu Zvinoreva Site (Site Options) {#site-options}

Rendeka zvinhu zvinoreva kana kufamba kwemweya:

- **Visit limits** — Kuratidza kuita site kune kunge kwakawanda
- **User account limits** — Kuratidza kuratidza kwaunogona kuita muna user role
- **Disk space** — Kufungira kubereki kwe storage yekuti rorosite riri
- **Custom domain** — Kuva nedomain mapping kuti rorosite riri
- **Plugin and theme visibility** — Kuratidza kana plugins uye themes dzinogona kuone, dzakavharwa, kana dzakareva

Nenzaniso, zvinotanga, nhaka sititi rinowanikira zvinhu zvakaita kuti vashandane pamusoro pemembership (membership level). Nekuti unenge uri kuita limits pamusoro pesite, izvi zvachipa zvinhu zvakasiyana nemembership.

### Associations {#associations}

Panguva unenge uri kuona options dzemweye pe site, uchaona nguva dzinotsanangura:

- **Mapped domains** dzine kugadzirwa nemweya (associated) nesite
- **Membership** inosikana sititi
- **Customer account** inosikana nesite

### Right Sidebar {#right-sidebar}

Pamapfumo pane, unogona:

- **Enable/disable the site** nekubata button
- **Change the site type** kana kuita reassign ownership (kuvawe nemunhu anoramba)
- **Set a site image/thumbnail** (izwi rinoonekwa munzvimbo dzefrontend kuti sititi rinogona kuonekwa kune templates dzemweye)
- **Delete the site** nekubata zvakare.

:::warning
Kupadaite site kunenge kuitika. Site uye zvinhu zake zvose zvachizara nekubatsirwa nekubuda.
:::
