---
title: Kaitiakitanga o ngā wāhi
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Whakawhanaungatanga Wāhi (Managing Sites) {#managing-sites}

Ngā Wāhi (or subsites) he te pito o te mahi i runga i te WaaS (WordPress as a Service) mō koe. He tino whānui ngā wāhi o Ultimate Multisite:

- **Customer-owned** — Ngā wāhi e whai ana ki ngā mea whānau (customers) tika
- **Site Templates** — Ngā wāhi e whai mo te whakatō, i te pūrere (template) he taea ai ngā customer te pilihero atu hei whakaaro ingoa
- **Main Site** — Te wāhi nui o te whānau/network mō koe

## Whakarongo i Ngā Wāhi (Viewing Sites) {#viewing-sites}

Pāinga ki **Ultimate Multisite → Sites** kia whakaahua i ngā wāhi katoa i te wāhi. He whakamārama ana i ngā wāhi e ngā wāhi, he taea ai koe te fili atu (filter) mō All Sites, Customer-Owned, Templates, or Pending.

![Sites list page](/img/admin/sites-list.png)

## Whakawhanaungatanga Wāhi Hou (Adding a New Site) {#adding-a-new-site}

Whakainga i te **Add Site** button kia whakatō wāhi hou. He tino nui ngā mea e toa koe:

- **Site Title** — Te ingoa o te wāhi hou
- **Site URL** — Te domain/path mō te wāhi
- **Site Type** — Mā te whakaaro, he wāhi o customer, template, or regular site.

He option **Copy Site** e hiahia koe ki te whakatō wāhi hou i runga i te template wāhi e pai anō. I roto i te whakatau i tēnei option, he taea ai koe te fili atu i te template hei whakaaro ingoa. Kia tiaki i te **Copy Media on Duplication** kia tika ake te whaiora ngā mga file o media.

## Whakawhanaungatanga Wāhi Ao (Managing an Existing Site) {#managing-an-existing-site}

Whakainga i **Manage** i ngā wāhi ahau ki te pahi atu ki te **Edit Site** page. I tēnei wā, he toa koe:

### Manawa Pūranga (Basic Information) {#basic-information}

Te ingoa o te wāhi, te wāhi, te site ID, me te whakatakī. He taea ai koe te whakaahua i te domain e whai ana, ngā membership e whai ana, me te customer account e ngāwā i te wāhi.

### Whakaritenga Wāhi (Site Options) {#site-options}

Whakaaro i ngā mea e taea ana me ngā pōtiki o te wāhi:

- **Visit limits** — Ngā pōtiki mō te pahi atu ki te wāhi
- **User account limits** — Ngā pōtiki mō ngā wāhi o user role
- **Disk space** — Te quota o te whakatakī mo te wāhi
- **Custom domain** — Whakaaro i te mapping o domain mō tēnei wāhi
- **Plugin and theme visibility** — Whakatau i ngā plugin me theme e taea te whakaahua, e pōtiki, or e pre-activated

E rite, e hoki mai ki te whakamārama mō tēnei mea.

E rite ana i te whakatūatanga, ka whai i ngā wāhi (sites) ngā raupawa (limits) kua katutaku ai i te rārangi membership. Ka whakapatakea (override) e ngā raupawa o te wāhi (site level) i ngā whakaritenga o te membership.

### Whakawhanake (Associations) {#associations}

I roto i te whakatūatanga o ngā wāhi, ka whai i ai koe i ngā mōhiohanga mō:

- **Mapped domains** (ngā domain kua whakahou) e whai ana ki te wāhi
- **Membership** (te membership) kua roa te wāhi
- **Customer account** (te aka o te mea mō te mea mō te wāhi) kua whai ana ki te wāhi

### Te Panel Kōrero (Right Sidebar) {#right-sidebar}

I te tangata whiti (right side), ka taea e koe:

- **Enable/disable the site** (whakawhanaungatanga/whakamutunga te wāhi) mō te toggled button
- **Change the site type** (whakaaro te wāhi) he tino, he whakaa i te ao (reassign ownership)
- **Set a site image/thumbnail** (whakawhiti te pēpi o te wāhi) (e whai ake ana i te frontend mō ngā templates o te wāhi)
- **Delete the site** (whakamutunga te wāhi) i te ao

:::warning
He tino nui te whakamutunga o te wāhi. Ka whakatū whakawhiti (permanently removed) te wāhi me ngā mea katoa i iho ana i iho.
:::
