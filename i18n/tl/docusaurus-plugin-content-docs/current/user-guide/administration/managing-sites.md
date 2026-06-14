---
title: Pamamahala ng mga Site
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Pamamahala ng mga Site

Ang mga Site (o subsites) ang pundasyon ng iyong WaaS business. Ang Ultimate Multisite ay may 3 uri ng site:

- **Customer-owned** — Mga site na pag-aari ng mga partikular na customer
- **Site Templates** — Mga pre-defined na site na pwedeng piliin ng mga customer bilang panimulang punto
- **Main Site** — Ang iyong pangunahing network site

## Pagtingin sa mga Site

Pumunta sa **Ultimate Multisite → Sites** para makita ang lahat ng subsites mo sa network. Bawat site ay may label batay sa uri nito at pwede kang mag-filter gamit ang All Sites, Customer-Owned, Templates, o Pending.

![Sites list page](/img/admin/sites-list.png)

## Pagdaragdag ng Bagong Site

I-click ang **Add Site** button para gumawa ng bagong site. Kailangan mong magbigay ng:

- **Site Title** — Ang pangalan ng bagong site
- **Site URL** — Ang domain/path para sa site
- **Site Type** — Kung ito ba ay customer site, template, o regular site

Ang opsyong **Copy Site** ay nagpapahintulot sa iyo na gumawa ng bagong site batay sa isang umiiral na site template. Kapag naka-enable ito, maaari mong piliin kung anong template ang gagamitin bilang simula. Siguraduhin na naka-enable ang **Copy Media on Duplication** para kasama ang mga media file.

## Pamamahala ng Umiiral na Site

I-click ang **Manage** sa anumang site para buksan ang pahina ng **Edit Site**. Dito mo makikita ang:

### Pangunahing Impormasyon

Ang pangalan ng site, uri nito, site ID, at deskripsyon. Makikita mo rin ang naka-map na domain, kaugnay na membership, at ang customer account na nagmamay-ari ng site.

### Mga Opsyon sa Site

I-configure ang mga kakayahan at limitasyon ng site:

- **Limitasyon sa pagbisita (Visit limits)** — Pinakamaraming bilang ng mga bisita sa site
- **Limitasyon sa user account (User account limits)** — Limitasyon para sa bawat role ng user
- **Disk space (Disk space)** — Quota ng storage para sa site
- **Custom domain (Custom domain)** — Pag-enable ng domain mapping para sa site na ito
- **Visibility ng Plugin at Theme (Plugin and theme visibility)** — Kontrol kung aling mga plugin at theme ang makikita, itatago, o awtomatikong i-activate

Sa default setting, sinusunod ng mga site ang limitasyon na itinakda sa membership level. Ang pagtatakda ng limitasyon sa lebel ng site ay magpapalampas (override) sa mga setting ng membership.

### Mga Kaugnayan (Associations)

Sa ibaba ng mga opsyon ng site, makikita mo ang impormasyon tungkol sa:

- **Mga naka-map na domain (Mapped domains)** na konektado sa site
- **Membership** kung sa ilalim ba ito ng anong membership
- **Customer account** na nakakonekta sa site

### Kanang Sidebar (Right Sidebar)

Sa kanang bahagi mo ay magagawa ang mga sumusunod:

- **I-on o I-off ang site** gamit ang toggle button
- **Palitan ang uri ng site** o muling italaga ang pagmamay-ari (ownership)
- **Magtakda ng larawan/thumbnail ng site** (ipapakita sa frontend para sa mga site template)
- **Burahin ang site** nang permanente

:::warning
Ang pagtanggal ng isang site ay hindi na mababawi. Ang site at lahat ng nilalaman nito ay permanenteng aalisin.
:::
