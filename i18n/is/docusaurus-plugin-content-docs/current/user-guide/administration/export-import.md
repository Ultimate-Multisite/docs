---
title: Útlunni og innluni
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Exporter og Importer

Ultimate Multisite 2.9.0 leggur ein enkelt-site **Export & Import** verktúfn undir menyn **Tools > Export & Import**. Bruk það þegar þú þarft að pakka eina WordPress síti í ZIP-file, að skila því upp, eða flytja síti milli samræmdra Ultimate Multisite og single-site WordPress innreiðslum.

## Nauðsynlegir réttur {#required-permissions}

Þú verður að logga in sem administrator sem getur aðgang til **Tools** menyinn í WordPress síti sem er að exporta eða importera. Á netverkssíti (multisite) þarf þú að nota reikning netverksadministratorsins við export eða import subsites frá netverkstólum Ultimate Multisite.

Export ZIP-n afhendingar eru með ábyrgðarlegur nedlunsempóndi, svo halda admin sessionin vélbúinn til nedlunni er færd av og þú þarf ekki að deila gerðar nedlunarslóðir alþjóðlega.

## Exporting síti í ZIP {#exporting-a-site-to-a-zip}

1. Í WordPress admin fyrir sítið sem þú vilt kopya, ferstur yfir **Tools > Export & Import**.
2. Opna export ábyrgðarhöfund og veldu sítið sem þú vilt pakka.
3. Veldu valfræðan innihald sem skal skila í með, eins og uppladdunir (uploads), plugins og themes, þegar þessar valkostir eru til staðar.
4. Starta export og halda þér á meðan ferlið er færd av. Stórar síti gæti verið að þau þurfi að ferða í bakgrunni fyrir því að ZIP-n sé klár.
5. Nedlun ZIP-ins sem er færd av listans yfir exportar.

Halda ZIP-inn á öruggum staedi. Hann getur haldi síti innihaldi, settir, media fíl og valtuð kóða eignir.

## Hva exportin inniheldur {#what-the-export-includes}

Ein export ZIP getur halda:

- Database innihald og uppsetninga valtuðs sítis insum.
- Uppladdar media fílar þegar uppladdunir eru skilar í með.
- Plugins og themes þegar þessar valkostir eru veldu.
- Import metadata sem er notað af Export & Import verkfæri til að byggja síti á nýttum innreiðslunum.

Nákvæm ZIP-stærðin er afhängist af mengdun á myndum, valdum pluginum og temum, og stærðar skýrslueininga (database tables) á viðbótandi vefsíðunni.

## Inningur síða í ZIP {#importing-a-site-from-a-zip}

1. Gangi yfir í **Tools > Export & Import** á fjarska WordPress síðu.
2. Opna inningurmyndina og hleðdu upp ZIP-fílin sem varðar Export & Import verkfæri.
3. Skráðu inn ný URL ef síðan skal nota nýtt heiti, eða láttu feltið beint blankt til að halda upprunalegu URL-inni á við.
4. Veldu hvort þú vélum úr hleðingu ZIP-fílin eftir að inningurinn er fullyrði.
5. Klikkaðu á **Begin Import** (Byrja inning).
6. Fylgjandi með pending inningi til þess sem er fullyrði. Notaðu **Cancel Import** (Stoppa inning) einungis ef þú þarft að stoppa ferlið áður en það er fullfarið.
7. Sjáðu í inninguna síðan fyrir því að leysa framlegan ferli eða að leysa framlegan aðgang fyrir viðskiptavini.

Á einn-síða WordPress innreiðslu skiftar inningur ZIP núverandi síðuna með inningunni. Skapa fullt upphaflegu uppfærslu (backup) á tölvum fyrir þá sem byrjar, og láttu ekki byrja fleiri inningurferli fyrir sama síðuna á sama tíma.

## Begræðingar og athugasemdir um samþættingar {#limitations-and-compatibility-notes}

Þegar uppladdar fyrir stórar myndasafn eða meira þarf til að skapa stórar ZIP-filar. Staðfestu PHP uppladdarætlindi (upload limits), framkvæmdætlindi (execution limits), skráninga (disk space), minni (memory) og tímaploturveitingar (server timeout settings) á serverinum áður en þú exportar eða importir stórar vísðar.
- Uppladdar fyrir mjög stórar myndasafn geta þarf að flytja í vefslokki með lítilli trafiki við viðhaldstíma.
- Lífandi WordPress-innstillingin á målvi-innstillingunni (target installation) þarf að nota samræmdur WordPress, PHP, Ultimate Multisite, plugin og theme vísðar.
- Import af einu síðu skiptir fyrir målvi-síðuna. Það er ekki verkfæri til samþætting (merge tool).
- Flytningar frá Multisite í einu síða og einu síða í Multisite eru aðeins stöðugt staðfestar þegar målvi-umhverfið getur framkvæmt plugin, theme, URL-ir og nauðsynleg Ultimate Multisite hluti sem er exportaður.
- Halda ZIP-fílin persónulegum. Það gæti innihalda verið database innihald, uppladdar filar og upplýsingar um uppsetningu frá exportaða síðunni.

For eldri vísðar fyrir export ferli á nálaganetverkstíma, sjá [Site Export](/user-guide/administration/site-export).
