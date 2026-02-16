---
title: Pamamahala ng mga Site
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Pamamahala ng mga Site

Ang mga site (o subsite) ang pundasyon ng iyong WaaS na negosyo. May 3 uri ng site ang Ultimate Multisite:

- **Pag-aari ng customer** — Mga site na pagmamay-ari ng mga partikular na customer
- **Site Templates** — Mga naka-handa nang site na pwedeng piliin ng mga customer bilang panimulang punto
- **Main Site** — Ang pangunahing site ng iyong network

## Pagtingin sa mga Site

Pumunta sa **Ultimate Multisite → Sites** para makita ang lahat ng subsite sa iyong network. Bawat site ay may label ayon sa uri at pwede mong i-filter ayon sa All Sites, Customer-Owned, Templates, o Pending.

![Sites list page](/img/admin/sites-list.png)

## Pagdagdag ng Bagong Site

I-click ang **Add Site** na button para gumawa ng bagong site. Kailangan mong ibigay ang:

- **Site Title** — Ang pangalan ng bagong site
- **Site URL** — Ang domain/path para sa site
- **Site Type** — Kung ito ba ay customer site, template, o regular na site

Ang **Copy Site** na opsyon ay nagbibigay-daan sa iyong gumawa ng bagong site batay sa isang kasalukuyang site template. Kapag naka-enable ito, pwede kang pumili kung aling template ang gagamitin bilang panimulang punto. Siguraduhing naka-enable ang **Copy Media on Duplication** para maisama ang mga media file.

## Pamamahala ng Kasalukuyang Site

I-click ang **Manage** sa kahit anong site para buksan ang **Edit Site** na page. Makikita mo rito ang:

### Pangunahing Impormasyon

Ang pangalan ng site, uri, site ID, at paglalarawan. Makikita mo rin ang naka-map na domain, kaugnay na membership, at ang customer account na nagmamay-ari ng site.

### Mga Opsyon ng Site

I-configure ang mga kakayahan at limitasyon ng site:

- **Visit limits** — Pinakamataas na bilang ng mga pagbisita sa site
- **User account limits** — Mga limitasyon kada user role
- **Disk space** — Quota ng storage para sa site
- **Custom domain** — I-enable ang domain mapping para sa site na ito
- **Plugin and theme visibility** — Kontrolin kung aling mga plugin at theme ang makikita, nakatago, o awtomatikong naka-activate

Bilang default, sinusunod ng mga site ang mga limitasyong nakatakda sa antas ng membership. Ang pagtatakda ng mga limitasyon sa antas ng site ay magso-override sa mga setting ng membership.

### Mga Kaugnayan

Sa ibaba ng mga opsyon ng site, makikita mo ang impormasyon tungkol sa:

- **Mga naka-map na domain** na kaugnay ng site
- **Membership** kung saan nasa ilalim ang site
- **Customer account** na naka-link sa site

### Kanang Sidebar

Sa kanang bahagi, pwede mong:

- **I-enable/disable ang site** gamit ang toggle button
- **Baguhin ang uri ng site** o ilipat ang pagmamay-ari
- **Maglagay ng site image/thumbnail** (ipinapakita sa frontend para sa mga site template)
- **I-delete ang site** nang permanente

:::warning
Ang pag-delete ng site ay hindi na pwedeng ibalik. Ang site at lahat ng nilalaman nito ay permanenteng tatanggalin.
:::
