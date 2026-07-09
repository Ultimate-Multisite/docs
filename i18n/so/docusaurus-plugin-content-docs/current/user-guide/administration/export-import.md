---
title: Wax-soo-saar & Soo-saar
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import {#export--import}

Ultimate Multisite 2.9.0 waxay ku daraysaa qalab hal-site ah oo loo yaqaano **Export & Import** oo ku jira **Tools > Export & Import**. Waxaad isticmaali kartaa haddii aad u baahan tahay inaad hal WordPress site u qaaddo fayl ZIP, aad dib u soo celiso (restore) ZIP-kaas, ama aad u wareejiso site ka dhexeeya install Ultimate Multisite iyo single-site WordPress oo la isku dhafan.

## Oggolaanshaha loo baahan yahay {#required-permissions}

Waa inaad galaysaa sidii administrator oo heli kara menu-ga **Tools** ee WordPress-ka ku jira site-ka aad u qaaday ama aad dib u soo celinayso (import). Haddii aad isticmaalayso shabakad isku xiran (multisite network), isticmaal akoonka administrator-ka shabakadda marka aad ka qaadato ama ka soo dejiso subsites-ka iyadoo la isticmaalayo qalabka Ultimate Multisite ee heerka shabka.

Download-yada ZIP-ka loo qaado waxay si meel la oggolaaday (authenticated download endpoint) u diyaar yihiin, sidaas darteed ilaali session-ka admin-ka oo socda ilaa download-ka uu dhammaado oo ha wadaag URL-yada download-ka ee la soo saaray dadka awoowga.

## Site-ka soo saarista (Exporting a site to a ZIP) {#exporting-a-site-to-a-zip}

1. WordPress admin-ka bogga aad rabto inaad nuquliso, u socda **Tools > Export & Import** ku tag.
2. Fur qaybta export-ka oo dooro boggaga aad rabto inaad qabto (package).
3. Dooro waxyaabaha kale ee aad rabto inaad ku darto, sida faylasha la soo galiyay (uploads), plugins-yada, iyo themes-ka, marka ay fursaddu kuu siinayaan.
4. Bilow export-ka oo sug habka uu dhammaystiro. Boggaga weyn waxaa laga yaabaa inuu u dhammaado dibadda (background) inta aysan diyaar u ahayn ZIP-ka.
5. Soo soo dejiso ZIP-ka la dhammeeyay laga soo qaad list-ka export-ka.

Hubi inaad ZIP-ka ku kaydsato meel ammaan ah. Waxay ka qaban kartaa waxyaabaha bogga, settings-yada, faylasha media (media files), iyo koodka aad dooratay.

## Waa maxaca waxa lagu soo saaro (What the export includes) {#what-the-export-includes}

ZIP-ka la soo saarista wuxuu ka koobnaa:

---
**Macluumaadka la dooratay website-ka iyo qaabdhismeedkiisa (database content and configuration).**
**Faylasha media ee la soo geliyay haddii ay ku jiraan.**
**Plugins iyo themes haddii aad doorato qodobadaas.**
**Metadata-da loo isticmaalo Export & Import tool-ka si loo dib u dhiso website-ka install-ka la rabo.**

Cilmi-baariska saxda ah ee cabbirka ZIP-ka wuxuu ku xiran yahay inta media uu jiro, plugins iyo themes-ka la dooratay, iyo cabbiraada faylasha database-ka website-ka.

## Website-ka ka soo gelinta (Importing a site from a ZIP) {#importing-a-site-from-a-zip}

1. Ku tag **Tools > Export & Import** (Qalabka > Soo-saarista iyo Soo-dhaafid) ee website-ka WordPress-ka aad u socoto.
2. Fur qaybta soo dhaafta (import area) oo ku soo gali ZIP-ka aad ka samaysay Qalabka Export & Import.
3. Haddii aad rabto in website-ka uu isticmaalo ciwaan cusub, ku qor URL la beddel ah (replacement URL), ama u dhig meesha bannaan si aad u ilaasho URL-ka asalka ah.
4. Doorashada haddii aad rabto inaad ka saarto ZIP-ka soo dhashay markii import-ka uu dhammaado.
5. Guji **Begin Import** (Bilow Soo-dhaafid).
6. Raadi import-ka oo weli la filayo inuu dhammaado. Isticmaal **Cancel Import** (Daraadinta Soo-dhaafid) haddii aad u baahan tahay inaad joojiso habka ka hor inta aanu dhammaan.
7. Dib u eeg website-ka soo dhashay intaadan u oggolaanayn inuu helayo macmiilada ama isticmaalayaasha caadiga ah.

Marka aad ku samaynayso WordPress oo hal meel ah (single-site), in la soo dejiyo ZIP faylka ayaa beddelaya website-ka hadda ee website-ka la soo dejiyay. Ka hor intaadan bilaabin, samee backup buuxda ee website-ka aad rabo inaad beddesho, oo ka fogaan bilowga isku dhafka (multiple imports) website-ka isku midka ah isla markiiba.

## Xaddidda iyo talooyinka la xiriira isku-dubbarista (Limitations and compatibility notes) {#limitations-and-compatibility-notes}

* Faylasha soo gelinta aad u weyn ama kooxaha faylasha media (media libraries) waxay abuuri karaan faylasha ZIP oo aad u weyn. Ka hor intaadan si weyn u soo saarin ama u soo galiin (export/import) websites-ka waa inaad hubisaa xaddidaadda PHP upload, xaddidaadda fulinta (execution limits), meelaha diskiga (disk space), xusuusta (memory), iyo settings-ka server timeout.
* Kooxaha faylasha media ee aad u weyn waxay u baahan karaan in la wareejiyo inta lagu jiro wakhtiga diyaarinta (maintenance window) marka traffic-ga website-ka uu hooseeyo yahay.
* Warshadaha WordPress-ka aad u bartilmaantahay waa inay socdaan noocyada WordPress, PHP, Ultimate Multisite, plugin-yada, iyo theme-yada la jaanqaadaya.
* Soo galiinta hal website (single-site import) waxay beddeshaa website-ka bartilmaanta. Ma ahayn qalab lagu isku daro (merge tool).
* Wareejinta ka qaadista Multisite-ga u single-site iyo wareejinta single-site-ga u Multisite waa la taageeraa haddii deegaanka bartilmaanta uu socon karo plugin-yada, theme-yada, URLs-ka, iyo qaybaha Ultimate Multisite ee loo baahan yahay.

Waxaad ilaalin kartaa in ZIP-ka uu yahay mid gaar ah (private). Waxa laga yaaba inuu ku jiraan waxyaabo sida macluumaadka database-ka, faylasha la soo geliyay, iyo faahfaahinta qorsheynta (configuration details) ee website-ka la soo saaray.

Haddii aad rabto inaad aragto sida loo sameeyo export-ka iyadoo la adeegsanayo hababka hore ee xiriirka shirkadda (network-level export workflows), fadlan booqo [Site Export](/user-guide/administration/site-export).
