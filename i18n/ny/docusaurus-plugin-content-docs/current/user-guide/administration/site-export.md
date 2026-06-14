---
title: Kupanga kwa Site
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Kutsira kwa Site (Site Export)

Page ya admin ya **Site Export** inalipa administrators wa mtandao kuweka site moja, au mtandao wote, katika archive inayoweza kupakuliwa kwa ajili ya kusogeza (migration), backup, au kazi za kukabidhi.

## Kusogeza site moja

Nenda kwenye **Ultimate Multisite > Site Export** na chagua **Generate new Site Export**. Chagua subsite unayotaka kusogeza, kisha chagua kama archive inapaswa kujumuisha uploads, plugins, na themes.

Wakati export inapoisha, pakua ZIP kutoka orodha ya **Existing Exports**. ZIPs za export zinaweza kuwepo `index.php` inayojitokeza (self-booting) na `readme.txt`, hivyo archive inaweza kupakuliwa kwenye host mpya na kuanza bila lazima kusakinisha plugin ya importer tofauti kwanza.

## Kusogeza mtandao wote

Tumia **Network Export** kwenye ukurasa wa Site Export wakati unahitaji archive moja inayojumuisha subsites zote katika mtandao. Hii ni muhimu kabla ya kubadilisha host, majaribio ya kurudisha hali (disaster-recovery drills), au ujenzi upya wa staging ambapo kila subsite inahitaji kusafiri pamoja.

Kwa sababu network export inaweza kuwa kubwa kuliko site moja export, fanya wakati wa kipindi cha mtandao kinachokuwa na msongamano mdogo (low-traffic window) na thibitisha kwamba storage yako ya lengo ina nafasi ya kutosha kwa uploads, plugins, themes, na ZIP files zilizotengenezwa.

### Network Import Bundles

Kuanzia Ultimate Multisite 2.12.0, Site Exporter inaweza kutengeneza **network import bundles** — archives maalum zilizoundwa kwa ajili ya kurudisha site wote wa mtandao kwa urahisi. Network import bundle inajumuisha faili na metadata yote yanayohitajika ili kurudisha sites nyingi kwenye usakinishaji mpya wa mtandao.

#### Kutengeneza Network Import Bundle

1. Tenda ku **Ultimate Multisite > Site Export**
2. Kulela **Generate new Network Export**
3. Chita **Network Import Bundle** monga chidziwitsa cha export
4. Chita kuti mupereke nji mupereke uploads, plugins, ndi themes
5. Kulela **Generate**
6. Idonda bundle ZIP ku list ya **Existing Exports**

#### Kukhazikitsa kuchokera kwa Network Import Bundle

Kuti mukhazikitseni sites kuchokera kwa network import bundle:

1. Kulela Ultimate Multisite pa host yanu yomwe mukuwoneza
2. Kukulitsa multisite setup wizard
3. Kulela **Ultimate Multisite > Site Export** pa network yanu yetsopano
4. Kulela **Import Network Bundle**
5. Idonda ZIP file la network import bundle
6. Kufunsa mafunso a import omwe mukuwoneza
7. Kukhazikitsa kulipeza sita lonse, malo onse, ndi zinthu zomwezi

Network import bundles zimapangalala:
- Zinthu za site (posts, pages, custom post types)
- Zinthu za site ndi options
- Roles ndi permissions za users
- Plugins ndi themes (njelanso zikati m'bundle)
- Media uploads (njelanso zikati m'bundle)
- Custom database tables ndi data

## Kukhazikitsa ZIP la export lomwe limakula pafupi (self-booting) pa host yetsopano

Kuti mukhazikitseni ZIP lomwe limakula pafupi pa host yetsopano:

1. Idonda zinthu za ZIP zomwe zimapangidwa ku web root ya site yomwe mukuwoneza
2. Kulela `index.php` yomwe idondawira mu browser.
3. Kufunsa mafunso a installer omwe mukuwoneza kuchokera kwa package la export lomwe limakula pafupi.
4. Kukhudza `readme.txt` lomwe limakula pafupi kuti mupereke zinthu zomwe zimapangidwa pa site kuti mupereke zinthu zina monga kupanga files zosiyanasiyana m'malo omwe mukuwoneza.

Poyamba kukhazikitsa ndi mafozo a import kwa addon-specific, chonde thandizirani [Site Exporter addon documentation](/addons/site-exporter).

Poyamba kuti mu tool ya single-site yomwe imapangidwa m'Ultimate Multisite 2.9.0, chonde thandizirani [Export & Import](/user-guide/administration/export-import).
