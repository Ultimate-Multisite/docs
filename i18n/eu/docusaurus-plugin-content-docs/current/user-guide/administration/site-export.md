---
title: Site Exporta
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Saila Exportazioa {#site-export}

Ez dago **Site Export** administrazio lapen, zeinetarri administurietara eskuratu da site bat edo bulego guztia download egin dezaket migrazioa, backup edo hand-off (transferentzia) eragiketa duten arkibio bat.

## Site bat exportatzea {#exporting-one-site}

**Ultimate Multisite > Site Export** luzean jarraitu eta **Generate new Site Export** (Site Exporta berria generatu) aukeratu. Exportatzea erantzuten duen subsiteak aukeratu, eta arkibioak uploadak, plugins eta themes edo ez duela ikusi.

Exportazioa amaituta, ZIP-a aldatu listatik (**Existing Exports**) downloadatu. Export ZIP-ek orain `index.php` bat auto-bootatzean eta `readme.txt` bat eskaintzen du, gaur egun host berri batean uzaileko aurkitzea eta plugin importador bat ez instalatzen duen ere erantzute, arkibioa lehenik instalazioa egin behar izan gabe uzten dezake.

## Bulego guztia exportatzea {#exporting-the-whole-network}

Site Export luzean **Network Export** (Bulego Network Export) erabili horrek behar duzu bulego guztian dagoen site guztietan beste arkibio bat izango da. Host migrazioak, desastratzeko prooketua edo staging rebuilds (berria emateko testu-testuinguruak) lehenik iradokizuek aholkatzen du horrek, nahiz eta leku batean site guztiek berain ikusi behar diren.

Beste arkibio bat site bat exportatzea baino handiagoa izan dezake bulego network export-ek, denbora txikiak aurrera egin artean jarriyezu eta target storage-ek uploadak, plugins, themes eta generatu ZIP-ak barne eginduzko espazio libre izango duela konfirmatu.

### Network Import Bundles (Bulego Importa Bundles) {#network-import-bundles}

Ultimate Multisite 2.12.0-re iradokizuean, Site Exporterek **network import bundles** (bulego importak network-eko) generatzea posible da — bulego guztia site bat berri instalazio batean erantzute diseinatutako arkibio espezializatua. Network import bundle-ek site bat edo gehiagoa berria bulego network-ean erantzutzeko beharrezko fileak eta metadata guztiak ditu.

#### Network Import Bundle generatzea {#generating-a-network-import-bundle}

1. **Ultimate Multisite > Site Export** funtzi dira
2. **Generate new Network Export** klikatu
3. Exporta tipu gisa **Network Import Bundle** aldatu duzu
4. Uploadak, plugins eta themes ez daitezkeen jakin nahi duzu
5. **Generate** klikatu
6. ZIP bundle-a **Existing Exports** listatik downloadatu

#### Network Import Bundle bat restauratzeko {#restoring-from-a-network-import-bundle}

Network import bundle bat situak restauratzeko:

1. Ultimate Multisite-a hosta targetan instalatu
2. multisite setup wizard-a amaitu duzu
3. New network-an **Ultimate Multisite > Site Export** funduzu
4. **Import Network Bundle** klikatu
5. Network import bundle ZIP file-a uploadatu
6. On-screen import instruktuak jarraitu
7. Import process-ek situak, kontenian eta konfigurazioak guztiz restauratuko du

Network import bundles hauek ez dute gaurditu:
- Site content (posts, pages, custom post types)
- Site settings and options
- User roles and permissions
- Plugins and themes (bundlean sartu dutenean)
- Media uploads (bundlean sartu dutenean)
- Custom database tables and data

## Self-booting export ZIP instalatzeko {#installing-a-self-booting-export-zip}

Fresh host bat ZIP self-booting bat restauratzeko:

1. Exportatu ZIP kontenientziak target web root-era uploadatu duzu.
2. Uploadatutako `index.php`-a browser-ean deslatu duzu.
3. Bundled export package-aren on-screen installer instruktuak jarraitu duzu.
4. Ezago behar dituzko testuak (export-eko notizak) bundled `readme.txt` arautzen duzu, tempuei fileak hartzen aurretik.

Addon-ek instalatzeko eta importaren detaliak, [Site Exporter addon documentation](/addons/site-exporter)-a jartu duzu.

Ultimate Multisite 2.9.0-re sartutako single-site tool-a (Export & Import) arautzen duzu.
