---
title: Útbreytingarferli
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Útbreytingarferli

## Stjórnaraðil 2.13.0 — Útbreytt á 2026-06-05 {#version-2130--released-on-2026-06-05}

- Nýtt: Innleitt sjálfsemi-tenant støðu fyrir viðskiptavarmennaka, kaupferli, reikninga, vísitalinn, skiptingu temblaga og domænin mappa til að tenant netkunna geti leiða viðskiptavarmenn aftur til hlutina á hlutverfi sínum.
- Nýtt: Innleitt skrekkjastökunarþestu fyrir uppspretta meðferðar fyrir gjöfandi lán, svo að gateway-ir geti skilað sjálfvirkni viðskiptaferlisins af því að nota fanga eða vöndun.
- Nýtt: Innleitt HMAC-verifíkað loopback upplýsingar fyrir undirbúnað nýrra hlutverfa til að gera kaupferli og uppsetningu á hlutverfi meira traust á staðnum sem eru seint við bakgrunnssamsetningar.
- Nýtt: Innleitt þróunarþjónustu fyrir SSO URL-ar, grunn domænu kaupferlisformanna og sjálfvirka sköpun domænu-reksturinnar.
- Fíll: SSO er nánast traustari á mappaðum domænum, anóni brúkarviðskipta, logout og samþættingar við þróunarþjónustu.
- Fíll: Undirbúnaður nýrra hlutverfa hefur nú nauðsynlegt að komast út úr óstafnum upplýsingum og undanlegt að viðskiptavinir sé ekki fanga á skráningarskjanni.
- Fíll: Domænu-reksturinn eru ekki lengur sköpt fyrir sama grunn domænu kaupferlisformanna, og ónotuð bakgrunnssamsetningar staðnum verða að skoða þegar ekki er áfram samþætting.
- Fíll: Ágætiskerfi, reikningaheimildar, skipting í vörum, færðaruppfærð og öryggisskjálfurir við viðskiptavarmenn geta ekki lengur hindra venjanleg ferli viðskiptavina.
- Fíll: Breiðar e-postir halda nú viðtökvum persónulegum, en undanlega fyrir óþarfarnar feil í SMTP/pluginum þegar lista viðtöka eða tæki til að senda e-post eru ekki á ró.
- Fíll: Uppfærslur lánar, sýninga lausa og færðaruppfærð geta undanlegt strax lausn, kraspar eða missað nauðsynleg betalingar.
- Bætt: WordPress samþætting er teynnt upp til 7.0, produkteinu Vue áframhaldast að byggja úr npm kjelda, og Cypress end-to-end fangar nú skoða meira kaupferli, uppsetningu, SSO og gateway ferli.

## Útgáfa 2.12.0 — Lokað á 15.05.2026 {#version-2120--released-on-2026-05-15}

- Nýtt: Innleiðum Hostinger (hPanel) sem stöðugt staðila vinnuþjónustu með tengingu fyrir domænsmyndun
- Nýtt: Site Exporter nauðsynlegt nú skiptir með netkunar innfelum til að leysa upp site-tilheyti netverkssíða á ný, sem er einfaldlega og vel
- Fikningur: BCC broadcast eimaldir nota nú undskilja fyrir notendur sem ekki eru sýnilegar til að vernda notendastafn
- Fikningur: Notkun dagsmyndar fyrir lánningu er ekki lengur brotinn þegar við lagum færslur með ó-dagsmyndar gildi
- Fikningur: Uppfærslur lánninga í Stripe skila nú rétt án þess að kalla úrgangna API-n efnið deleteDiscount
- Fikningur: SSO leiðir á síðum með domænsmyndun eru nú takmarkaðar til að koma í veg fyrir óendanlega leiðir
- Fikningur: Val á myndavél í uppsetninguleiðari skilar nú rétt uppfærslu á undirdata modellinn

## Útgáfa 2.11.0 — Lokað á 11.05.2026 {#version-2110--released-on-2026-05-11}

- Nýtt: Site exports nauðsynlegt nú innfelur sjálfvirk `index.php` til að geta installað ZIP-fíli á nýr vinnuþjónustu án þess að þarf sérstaka plugin installation
- Nýtt: Netkunar export leyfir stjórnmenjum að exporta allar subsíða í einum arkiv frá admin síðunni Site Export
- Nýtt: Leyfi á skipti Site Templates plan er nú tryggt með fylgjaferli sem rétt takmarkar tilfari temblinda fyrir takmarkanir planins
- Nýtt: Efni leiðar fyrir færslur í checkout forminn varning nauðsynlegu velta ekki sett
- Nýtt: Flöki inn/út exportinn skýr nú nákvæmlega hvaða hóp er hans og tengist beint Site Export verkfæri

## Útgáfa 2.10.0 — Lokað á 05.05.2026 {#version-2100--released-on-2026-05-05}

Nýtt: PayPal stjórnarskrá fyrir manuelle innri skráningu með OAuth flag gate til smáanna samþættingar við gatewayinn.
Nýtt: Samþættingstakknir (Template switch) á kundapanninum er aðlagað með kortinni current-template, stöðugum gridi og knapp **Reset current template**.
Lögð fram: Samþættingstakknir (Template switching) hringja ekki enn í UI þegar AJAX er ekki lögð fram.
Lögð fram: Rétturstaðir samþættingstakknina eru tryggð fyrir ólögmandi aðgang.
Lögð fram: Inngangsstöðvar síðar (Site override inputs) eru valdið á við áður en skráning er lögð fram.
Lögð fram: Spurning um reikningarsíða sýnist nú þegar staðsetningurinn er beint.
Lögð fram: Notkun PHP 8.1 null-til-string deprecation notuð til að lausa.
Lögð fram: Lazy-loaded síður eru lögð fram áður en init hookinn er lögð fram til að koma í veg fyrir tveimur tímaáhyggjum.
Lögð fram: SSO ferðar eru viðeigandi í öllum inngangsstraumum.
Lögð fram: Blank site identity valkostir eru varðveitt á skráningu.

## Stjórnverslun 2.9.0 — Lögð fram á 2026-04-30 {#version-290--released-on-2026-04-30}

Nýtt: Útboð og inniholefni (export and import) fyrir eininguna er lögð fram undir **Tools > Export & Import**.
Lögð fram: ZIP lausnar eru nú leitt með staðfestu launiðar endurteknum endurteknum.
Lögð fram: Riski SQL injection og spurningar í pending export/import spurningum eru lausa.
Lögð fram: Pending site er ekki lögð fram þegar administrator mannvæti kundarinnar er staðfest á handbúnaðar hátt.
Lögð fram: Orphaned pending_site skráir eru hreinsað þegar samþætting er hlutfallin.
Lögð fram: Padda í nákvæmni nákvæmni stjórnunarleiðnum og leita-ankara eru lausa.
Lögð fram: Pending sites eru nú sýnd first í All Sites sjónum.
Lögð fram: Notkun screenshot provider (mShots) User-Agent header er lögð fram til að koma í veg fyrir 403 villur.
Lögð fram: Circular dependency í import cron schedule er lausa.
Lögð fram: Tour IDs eru normlaga í undirstreymi í user settings keys.
Bætt: ZipArchive er nú notað í stað Alchemy/Zippy til betri samþættingar.

## Stjórnverslun 2.8.0 — Lögð fram á 2026-04-29 {#version-280--released-on-2026-04-29}

- Nýtt: Engað Jumper toggle er sett í úrvali Aðferða (Other Options) innstillingum.
- Nýtt: Staðarstóllinn (Status column) er sett í lista skjalsins fyrir betalingsform.
- Nýtt: Addon sunrise file loader er sett upp fyrir sérstök sunrise mótunir á MU-pluginum.
- Forbetri: Engin innstilling til að skrá hversu vill viðbót (error-reporting opt-in) er fjarlægð úr innstillingum.
- Fikningur: Skjaldar fyrir þakkarsíðuna — myndir eru nú hættar og tengingar eru stíllegar rétt.
- Fikningur: Myndstafnandi (Screenshot provider) er skilað frá thum.io til WordPress.com mShots.
- Fikningur: Skráning og vinnuþáttur (Registration and Default Role) eru nú settir rétt á nýr uppsetningu.
- Fikningur: `get_site_url()` er ekki lengur null þegar doménin hefur port.
- Fikningur: Kopíar myndafildin í raun þegar innstilling `copy_media` er null.
- Fikningur: Object cache er rétt valdið úr kraft eftir að sitemeta er skráð eftir nálgun netverkans (network-activate).
- Fikningur: Auto-promotering fyrir sérstök doménar eru nú settar sem primära á DNS staðfestingu.
- Fikningur: Skráning er aflokkuð þegar betalingsskipti er hreinsað eftir að tengdum lán eru laukið.
- Fikningur: Prófa styrkur í lykillinu (Password strength checker) er rétt eftir að innri inniheldni (inline login prompt) er fjarlægð.
- Fikningur: Óendurinn skipti á síðuna er stoppað á þakkarsíðunni þegar staðsetningurinn hefur verið skorið.
- Fikningur: Skráning í WP core er synk í viðbótum og skráningu innstillingar.
- Fikningur: Nullskilningur er sett í `calculate_expiration` fyrir PHP 8.4 samræmi.
- Fikningur: Dubbelskráningar eru stoppað þegar viðskiptavinur hefur jákvæða lán áfram.
- Fikningur: Nullskilningur er sett í `date_expiration` í betalingsform.
- Fikningur: Skráning staðsetningar er styrkt — takmarkanir, skráning lán og doménar.
- Fikningur: Staðsetningu fyrir pre-install skráningin er rétt sett sem NOT Activated þegar skráningin misslykkjast.
- Fikningur: Doméninn sem notar á betalingsformum er notaður til tölvupósts staðfestingar.
- Fikningur: Auto-login eftir betalingsskipti er sett upp þegar ekki er til stað setningar fyrir lykillinn (password field).
- Fikningur: Frelandi lán eru ekki lengur laukið — þeir eru meðvitað sem óendanlegar.

- Fikning: E-postverifiseringa gætur ekki fram á þjónustuátheldingu þar sem viðskiptavinurinn hefur ekki staðfest e-postann sitt.
- Fikning: Basissti og íðunarssti fyrir SES v2 API endpoint eru rétta.
- Fikning: `wu_inline_login_error` hook er sendur í pre-submit catch block.
