---
title: Pagdumala sa mga Site
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Pagdumala sa mga Sites

Ang mga Site (o subsites) mao ang sentro sa imong WaaS business. Ang Ultimate Multisite adunay 3 klase sa sites:

- **Customer-owned** — Mga site nga gikan sa mga piho nga customer
- **Site Templates** — Mga pre-define nga sites nga pwede pilion sa mga customer isip nagsugod
- **Main Site** — Imong pangunang network site

## Pagtan-aw sa mga Sites

Magsulod sa **Ultimate Multisite → Sites** para makita ang tanang subsites sa imong network. Ang matag site gi-label base sa klase ug pwede ka magfilter base sa All Sites, Customer-Owned, Templates, o Pending.

![Sites list page](/img/admin/sites-list.png)

## Pagdugang og Bag-ong Site

I-click ang **Add Site** button para makakabukod og bag-ong site. Kinahanglan nimo ihatag:

- **Site Title** — Ang ngalan sa bag-ong site
- **Site URL** — Ang domain/path para sa site
- **Site Type** — Kung kini customer site, template, o regular site

Ang **Copy Site** option nagtugot kanimo sa paghimo og bag-ong site base sa naay existing site template. Kung i-enable nimo, pwede nimong pilion kung unsang template ang gamiton isip nagsugod. Siguraduhon nga i-enable ang **Copy Media on Duplication** para apil ang mga media files.

## Pagdumala sa Nagigikan nga Site

I-click ang **Manage** sa bisan unsang site aron maabli ang **Edit Site** page. Dinhi nimo makita:

### Basic Information

Ang ngalan sa site, klase, site ID, ug deskripsyon. Makita usab nimo ang domain nga gipa-mapa (mapped domain), konektadong membership, ug ang customer account nga nagpanag-iya sa site.

### Site Options

I-configure ang mga abilidad ug limitasyon sa site:

- **Visit limits** — Pinakataas nga gidaghanon sa pagbisita sa site
- **User account limits** — Mga limitasyon kada user role
- **Disk space** — Quota sa storage para sa site
- **Custom domain** — I-enable ang domain mapping para niining site
- **Plugin and theme visibility** — Kontrol kung unsang plugins ug themes ang makita, itago, o pre-activated

Sa default, ang mga website nagasunod sa mga limitasyon nga ghitak sa membership level. Ang pagset og limits sa lebel sa site maoy mag-override sa mga setting sa membership.

### Mga Koneksyon (Associations)

Sa ubos sa mga opsyon sa site makita nimo ang impormasyon bahin sa:

- **Mapped domains** nga konektado sa site
- **Membership** kung unsa ang membership level sa site
- **Customer account** nga konektado sa site

### Right Sidebar (Pahapos nga Bahin sa Sayda)

Sa tuig sa tuo, mahimo nimo:

- **I-enable/i-disable ang site** gamit ang toggle button
- **Usbon ang site type** o i-reassign ang pagpanag-iya (ownership)
- **Mag-set og site image/thumbnail** (nga ipakita sa frontend para sa mga site templates)
- **I-delete ang site** permanenteng

:::warning
Ang pag-delete sa usa ka site dili na maibalik. Ang site ug tanang iyang sulod permanente nga mawala.
:::
