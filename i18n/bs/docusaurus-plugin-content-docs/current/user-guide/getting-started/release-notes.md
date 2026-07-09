---
title: Bilješke o izdanju
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Bilješke o izdanju {#release-notes}

## Verzija 2.13.0 — Objavljeno 2026-06-05 {#version-2130--released-on-2026-06-05}

- Novo: Dodana je podrška za sovereign-tenant za tokove korisničkog accounta, checkouta, naplate, stranice, fakture, prebacivanja templatea i mapiranja domena kako bi tenant mreže mogle usmjeriti korisnike nazad na glavnu stranicu za upravljane radnje.
- Novo: Dodane su provjere vjerodajnica za obnovu za ponavljajuća članstva kako bi gatewayi mogli onemogućiti automatsku obnovu kada nedostaje sačuvani ugovor o naplati, pretplata ili vault token.
- Novo: Dodano je HMAC-verificirano loopback objavljivanje za kreiranje stranice na čekanju kako bi provisioning od checkouta do stranice bio pouzdaniji na hostovima gdje pozadinski poslovi kasne.
- Novo: Dodane su razvojne tačke proširenja za SSO URL-ove, bazne domene checkout-forme i automatsko kreiranje zapisa domena.
- Ispravka: SSO je pouzdaniji preko mapiranih domena, anonimnih posjeta brokera, odjave i konflikata zavisnosti između plugina.
- Ispravka: Kreiranje stranice na čekanju sada se oporavlja od zastarjelih oznaka objave i izbjegava da korisnici ostanu zaglavljeni na ekranu za kreiranje stranice.
- Ispravka: Zapisi domena se više ne kreiraju za zajedničke bazne domene checkout-forme, a neiskorišteni pozadinski poslovi host-providera se preskaču kada nijedna integracija nije aktivna.
- Ispravka: Rubni slučajevi checkouta, adrese za naplatu, resetovanja lozinke, verifikacije emaila, prebacivanja templatea, obilazaka i korisničkog dashboarda više ne blokiraju normalne korisničke tokove.
- Ispravka: Broadcast emailovi sada čuvaju primaoce privatnim, a istovremeno izbjegavaju fatalne SMTP/plugin greške kada liste primalaca ili mail transporti zakažu.
- Ispravka: Rubni slučajevi obnova članstva, prikaza isteka i naplate plaćanja sada izbjegavaju trenutne isteke, rušenja ili propuštena obavezna plaćanja.
- Poboljšano: WordPress kompatibilnost je testirana do verzije 7.0, produkcijski Vue asseti su ponovo izgrađeni iz npm izvora, a Cypress end-to-end pokrivenost sada testira više checkout, setup, SSO i gateway tokova.

## Verzija 2.12.0 — Objavljeno 2026-05-15 {#version-2120--released-on-2026-05-15}

- Novo: Dodan je Hostinger (hPanel) kao podržani host provider s integracijom mapiranja domena
- Novo: Site Exporter sada obrađuje pakete za mrežni uvoz radi pojednostavljene obnove stranica na nivou cijele mreže
- Ispravka: BCC broadcast emailovi sada koriste zaglavlje undisclosed-recipients kako bi se spriječilo otkrivanje adresa primalaca
- Ispravka: Datum isteka članstva se više ne oštećuje pri čuvanju s vrijednošću koja nije datum
- Ispravka: Stripe ažuriranja članstva sada ispravno uklanjaju popuste bez pozivanja zastarjelog deleteDiscount API-ja
- Ispravka: SSO preusmjeravanja na stranicama s mapiranim domenima sada su ograničena kako bi se spriječile beskonačne petlje preusmjeravanja
- Ispravka: Odabir u image pickeru setup wizarda sada ispravno ažurira osnovni model podataka
- Ispravka: Site Exporter CLI sada čuva ispravan izbor zadane mrežne stranice
- Poboljšano: Uklonjen je uključeni wp-cli iz paketa plugina, čime je smanjena veličina plugina

## Verzija 2.11.0 — Objavljeno 2026-05-11 {#version-2110--released-on-2026-05-11}

- Novo: Izvozi stranica sada uključuju self-booting `index.php` tako da se ZIP može instalirati na svjež host bez zasebne instalacije plugina.
- Novo: Mrežni izvoz omogućava administratorima da izvezu sve podstranice u jednoj arhivi sa stranice za administraciju Site Export.
- Novo: Prekidač plana Allow Site Templates sada se provodi putem fallback lanca, ispravno ograničavajući dostupnost templatea prema limitima plana.
- Novo: Editor checkout forme upozorava kada se proizvod doda bez konfigurisanog obaveznog polja.
- Novo: Kartica postavki Import/Export sada jasno opisuje svoj opseg i direktno povezuje na alat Site Export.

## Verzija 2.10.0 — Objavljeno 2026-05-05 {#version-2100--released-on-2026-05-05}

- Novo: PayPal vođeni setup wizard za ručni unos vjerodajnica s OAuth flag gateom za besprijekornu konfiguraciju gatewaya.
- Novo: Korisnički panel za prebacivanje templatea redizajniran je s karticom trenutnog templatea, trajnom mrežom i dugmetom **Reset current template**.
- Ispravka: Prebacivanje templatea više ne blokira UI pri AJAX neuspjehu.
- Ispravka: Stanja dozvola za prebacivanje templatea osigurana su protiv neovlaštenog pristupa.
- Ispravka: Unosi za nadjačavanje stranice validirani su prije čuvanja.
- Ispravka: Upit za adresu za naplatu sada se prikazuje kada je adresa prazna.
- Ispravka: PHP 8.1 obavještenja o zastarjelosti null-to-string su riješena.
- Ispravka: Currents se lazy-loaduju prije init hooka kako bi se spriječili problemi s tajmingom.
- Ispravka: Filtrirana SSO putanja poštuje se u svim tokovima prijave.
- Ispravka: Prazne opcije identiteta stranice čuvaju se pri spremanju.

## Verzija 2.9.0 — Objavljeno 2026-04-30 {#version-290--released-on-2026-04-30}

- Novo: Izvoz i uvoz jedne stranice dodani su pod **Alati > Izvoz i uvoz**.
- Ispravka: Export ZIP fajlovi sada se isporučuju preko autentificiranog endpointa za preuzimanje.
- Ispravka: Rizik od SQL injectiona i problemi s upitima u upitima za izvoz/uvoz na čekanju su ispravljeni.
- Ispravka: Stranica na čekanju se ne objavljuje kada admin ručno verificira korisnikov email.
- Ispravka: Siročad pending_site zapisi se čiste kada članstvo nedostaje.
- Ispravka: Padding navigacije postavki i navigacija preko sidra pretrage su ispravljeni.
- Ispravka: Stranice na čekanju sada se prikazuju prve u prikazu All Sites.
- Ispravka: Screenshot provideru (mShots) dodan je User-Agent header kako bi se spriječile 403 greške.
- Ispravka: Riješena je kružna zavisnost cron rasporeda uvoza.
- Ispravka: Tour ID-jevi normalizirani su na donje crte u ključevima korisničkih postavki.
- Poboljšano: ZipArchive se sada koristi umjesto Alchemy/Zippy za bolju kompatibilnost.

## Verzija 2.8.0 — Objavljeno 2026-04-29 {#version-280--released-on-2026-04-29}

- Novo: Prekidač Enable Jumper dodan u korisničko sučelje postavki Other Options.
- Novo: Kolona statusa dodana u tabelu liste obrazaca za checkout.
- Novo: Addon sunrise učitavač datoteka za prilagođene MU plugin sunrise ekstenzije.
- Poboljšano: Uklonjena postavka za uključivanje prijavljivanja grešaka sa stranice postavki.
- Ispravka: Kartica stranice za zahvalu — slika je sada ograničena, a linkovi ispravno stilizirani.
- Ispravka: Pružalac screenshotova prebačen sa thum.io na WordPress.com mShots.
- Ispravka: Enable Registration i Default Role sada postavljaju ispravne zadane vrijednosti pri svježoj instalaciji.
- Ispravka: `get_site_url()` više ne vraća prazno kada domen uključuje port.
- Ispravka: Klonirane medijske datoteke sada se ispravno kopiraju kada je postavka `copy_media` bila prazna.
- Ispravka: Object cache ispravno invalidiran nakon network-activate upisa sitemeta.
- Ispravka: Prilagođeni domen automatski unaprijeđen u primarni pri DNS verifikaciji za trodijelne domene.
- Ispravka: Članstvo na čekanju otkazano kada se istekla uplata očisti.
- Ispravka: Provjerivač jačine lozinke ponovo povezan nakon odbacivanja inline upita za prijavu.
- Ispravka: Beskonačno ponovno učitavanje stranice zaustavljeno na stranici zahvale kada je stranica već kreirana.
- Ispravka: WP core opcija registracije sinhronizirana pri aktivaciji plugin-a i spremanju postavki.
- Ispravka: Zaštita od null isteka dodana u `calculate_expiration` radi kompatibilnosti s PHP 8.4.
- Ispravka: Duplirane prijave blokirane kada kupac već ima aktivno članstvo.
- Ispravka: Null provjera dodana za `date_expiration` u checkoutu.
- Ispravka: Obezbjeđivanje stranice ojačano — ograničenja, zaključivanje članstva, unapređenje domena.
- Ispravka: Oznaka statusa provjere prije instalacije ispravljena na NOT Activated kada provjera ne uspije.
- Ispravka: Checkout domen korišten za URL-ove verifikacije emaila.
- Ispravka: Automatska prijava nakon checkouta kada polje za lozinku nije prisutno.
- Ispravka: Besplatna članstva više ne ističu — tretiraju se kao doživotna.
- Ispravka: Kapija za verifikaciju emaila zadržava objavu stranice dok kupac ne verificira email.
- Ispravka: SES v2 API endpoint osnovna putanja i ruta identiteta ispravljeni.
- Ispravka: `wu_inline_login_error` hook emitovan u pre-submit catch bloku.
