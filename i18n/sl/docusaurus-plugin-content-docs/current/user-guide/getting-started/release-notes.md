---
title: Naprave za izpis
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Izdelki {#release-notes}

## Verzija 2.13.0 — Izdana na 2026-06-05 {#version-2130--released-on-2026-06-05}

Novo: Dodana podpora za suverene tenante (sovereign-tenant) za tokove upravljanja računom stranke, plačilom, spletom, računima, preklapanjem obrazcev (template switching) in mapiranjem domenov, tako da lahko tenantske mreže uporabnike usmerjajo nazaj na glavni splet za upravljene dejanja.
Novo: Dodana preverjanja podatkov za obnovo dostopa (renewal-credential checks) za ponavljajoče naročnine, tako da gatewayji lahko onemogočijo avtomatsko obnovitev, če manjka shranjen pogodba o plačilu, pretplavine ali tokena v vaultu.
Novo: Dodana HMAC-verifikirana loopback objavna povezava (loopback publishing) za neobdelovano ustvarjanje spleta, da bi bilo konfiguriranje spleta bolj zanesljivo na hostih kjer so odločanja v pozadju (background jobs) zašcinani.
Novo: Dodana točke razvočnega dodatka (developer extension points) za SSO URL-e, osnovne domene obrazca plačila in avtomatsko ustvarjanje zapisov v domenih.
Popravljeno: SSO je zanesljivje boljše na mapiranih domenah, anonimnih obiskih brokerja, izključenju (logout) in konfliktih med dodatki.
Popravljeno: Ustvarjanje neobdelovanega spleta se zdaj pravilno obnavlja iz starih zastav za objavo (publish flags) in preprečuje, da uporabniki ostanejo zapuščeni na zasloni ustvarjanja spleta.
Popravljeno: Zapis v domenih ni več ustvarjen za deljene osnovne domene obrazca plačila, in neobdelovano pozadno delo dostavitelja hosta se preskoča, če ni aktivna integracija.
Popravljeno: Randveri (checkout), naslov plačila, ponovno postavljajo hesota, potrditev e-pošte, preklapanje obrazcev, turovi in tepišče uporabnika ne blokirajo več običajnih tokov delovanja stranke.
Popravljeno: E-poštne sporočila za pošiljanje (broadcast emails) zdaj ohranjajo zasebnost prejemnikov, hkrati pa izogibajo fatalnih napak SMTP/dodatkov, če gre za neuspešno seznam prejemnikov ali prenos pošte.
Popravljeno: Randveri naročin, prikaz poteka (expiration display) in tepišče plačanja zdaj preprečuje trenutno iztekanje, zmaganje (crash) ali izpadne zahtevane plačbe.
Uboljšano: WordPress kompatibilnost je preizkušana do verzije 7.0, produkcijski Vue aseti so ponovno sestavljeni iz npm virov, in Cypress end-to-end pokriva več tokov delovanja (checkout, setup, SSO, gateway).

## Verzija 2.12.0 — Izdana 2026-05-15 {#version-2120--released-on-2026-05-15}

- Novo: Dodan Hostinger (hPanel) kot podpornega host providerja z integracijo mapiranja domen.
- Novo: Site Exporter zdaj obravnava paketove za import omrežne povezave, kar omogoča bolj gladko obnovitev spletnih strani na celoti mreži.
- Popravka: E-poštne sporočila BCC broadcast zdaj uporabljajo zagotavljeno zagotovilcev header, da se ne razkrije naslovi prejemnikov.
- Popravka: Datum poteka članstva ni več poškodovan ob shranjevanju z datumom, ki ni datuma.
- Popravka: Obnovitve članstva Stripe zdaj pravilno odstranjujeta popuste brez pokličanja zastare API za brisanje popustov.
- Popravka: Preusmerjanja SSO na spletnih straneh z mapiranimi domeni so zdaj omejena, da se prepreči neskončno preusmerjanje.
- Popravka: Izbira slike v wizardu nastavitve jezdna (image picker) zdaj pravilno posodablja podlagano model podatkov.
- Popravka: CLI Site Exporter zdaj ohranja pravilno izbiro omrežne strani kot zadano.
- Uboljšanje: Odstranjen je paket wp-cli z paketa dodatka, kar je zmanjšalo velikost dodatka.

## Verzija 2.11.0 — Izdana 2026-05-11 {#version-2110--released-on-2026-05-11}

- Novo: Site exporti zdaj paketuje samobranjo `index.php`, tako da lahko ZIP lahko instalirate na nov host brez ločene instalacije dodatka.
- Novo: Omrežni export omogoča administratorjem, da izločijo vse podstrani v eni arhivski datoteci z strani za Site Export admin stran.
- Novo: Omogočitev preklopa načrta Site Templates je zdaj zagotovljena s rezervno verigo (fallback chain), kar pravilno omejuje dostop template na limite načrtov.
- Novo: Editor obrazca za checkout opozarja, če se dodaja produkt brez konfiguriranega obveznega polja.
- Novo: Tab nastavitve Import/Export zdaj jasno opisuje svoj obseg in je neposredno povezava z orodjem Site Export.

## Verzija 2.10.0 — Izdana 2026-05-05 {#version-2100--released-on-2026-05-05}

- Novo: Novi wizard za nastavo PayPal z uporabo ručnih podatkov s OAuth flagom za brezhibno konfiguracijo gatewayja.
- Novo: Template switch panel kupca preoblikovan z kartico current-template, trajnim gridom in gumbom **Reset current template**.
- Popravka: Preklapanje template ni več povzročilo zamke v UI zaradi neuspešnega AJAX poslovanja.
- Popravka: Določanja dovoljenja za preklapanje template so zagotovljena proti neoblaščenemu dostopu.
- Popravka: Vnosov za nadomestitev spletne strani so validirani pred shranjevanjem.
- Popravka: Pripomena o odstavljanju PHP 8.1 null-to-string je rešena.
- Popravka: Trenutni lazy-loaded podatki so vključeni pred init hookom, da se preprečijo problemi časovnega razpoložljivosti.
- Popravka: Filtrirovana SSO pot je počastljena na vseh tokovi prijav.
- Popravka: Opcje za prazno identiteto spletne strani so ohranjene ob shranjevanju.

## Verzija 2.9.0 — Izdana 30.04.2026 {#version-290--released-on-2026-04-30}

- Novo: Dodan je izvoz in import enega spletnega mesta pod **Tools > Export & Import**.
- Popravka: ZIP datoteke za izvoz so zdaj storjene preko endpointa za avtentificiran prenos.
- Popravka: Tveganje SQL injection in težave z vprašanjih pri neuspešnih zaprisah/importih sta popravljena.
- Popravka: Neobjavljeno spletno mesto ni objavljeno, ko admin ručno potrdi e-poštni naslov kupca.
- Popravka: Opreme pending_site rekordov je poskrbljena, če manjka članstva.
- Popravka: Padding navigacije nastavitve in kot naviga za iskanje so popravljeni.
- Popravka: Neobjavljena spletna mesta se zdaj prikazuje na vrhu v pregledu Vse strani.
- Popravka: User-Agent header dostavitelja zaslank (mShots) je dodan, da se preprečijo napake 403.
- Popravka: Koločna zagon za import cron je rešena.
- Popravka: Tour ID so normalizirani na podvučne v ključih nastavitvah uporabnika.
- Uboljšano: Zdaj se uporablja ZipArchive namesto Alchemy/Zippy za boljše kompatibilnosti.

## Verzija 2.8.0 — Izdana 29.04.2026 {#version-280--released-on-2026-04-29}

- Novo: Omogo Jumper toggle dodan v UI nastavitvah Drugih opcija.
- Novo: Stolp statusa dodan na seznam obrazcev za check-out.
- Novo: Dodan loader datoteke sunrise Addon za prilagodljive razširitev sunrise MU-pluginov.
- Uboljšano: Odstranjen nastavitveni možnost uporabe error-reporting z strani nastavitve.
- Popravljeno: Site kartica na stran z agradecingom — slika je zdaj omejena in povezave pravilno stilirane.
- Popravljeno: Spletni omogočevalec za snimke (screenshot provider) je preklopljen s thum.io na WordPress.com mShots.
- Popravljeno: Omogočitev registracije in predvsemne role so zdaj postavljene pravilno pri novih instalacijah.
- Popravljeno: `get_site_url()` ne vrne več praznih rezultatov, če domen vključuje port.
- Popravljeno: Kopiranje medijskih datotek se zdaj pravilno izvaja, ko je nastavitva `copy_media` prazna.
- Popravljeno: Object cache se pravilno invalidira po pisanju sitemeta nakon network-activate.
- Popravljeno: Avtomatizirana promocija prilagojenega domena na primarni pri verifikaciji DNS za domene z tri deli.
- Popravljeno: Oporabljanje odločene članarine se odzelo, ko je izbrisan neplačan termin.
- Popravljeno: Preverovalnik močenskosti gesla (password strength checker) se ponovno aktivira po odpravljanju prijazne vloge za prijavu.
- Popravljeno: Neomejeno prevare strani na stran z agradecingom je ustavljeno, če je spletna mesta že ustvarjeno.
- Popravljeno: Opcja registracije WP core se sinhronizira ob aktivaciji pluginov in shranjevanju nastavitv.
- Popravljeno: Dodan guard za prazno datum v `calculate_expiration` za kompatibilnost z PHP 8.4.
- Popravljeno: Duplikirani registraciji so blokirani, če ima uporabnik že aktivno članarino.
- Popravljeno: Dodana preverba na prazno vrednost za `date_expiration` v check-outu.
- Popravljeno: Omogočitev prostih članarin več ne izteče — tretira se kot doživen čas.

Popravke: E-poštna verifikacija blokira objavo spletnega mesta, dokler uporabnik e-pošto ne potrdi.
Popravke: Osnovni pot base path in identitetsna ruta za SES v2 API so pravilno popravljene.
Popravke: Hook `wu_inline_login_error` se zdaj emitira v bloku preprečevanja pred oddajo (pre-submit catch block).
