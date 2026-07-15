---
title: Kontaktni obliki za gradbo spletnih strani
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontaktforme za gradnjo spletne strani

Superdav AI Agent v1.10.0 omogoča ustvarjanje kontaktform, ki se neposredno naredi iz čata z uporabo agenta Site Builder. To vam omogoča dodajanje popolnoma funkcionalnih kontaktform na vsako stran brez odhajanja iz čata.

## Pregled {#overview}

Sposob ustvarjanja kontaktforme za gradnjo strani (`create_contact_form`) samodejno prepoznava vaš instaliran plugin za forme in ustvari kontaktform, ki uporablja nativne možnosti tega plugin-a. Podporani plugin-i za forme vključujejo:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistent samodajno izbere najboljši na voljo plugin za forme na vašem spletni strani in ustvari kontaktform, prilagojeno temu pluginu.

## Ustvarjanje kontaktforme {#creating-a-contact-form}

Za ustvarjanje kontaktforme z uporabo Site Builderja:

1. Odprite chat panel **Gratis AI Agent** v WordPress adminu.
2. Preklopite se na agent **Site Builder**, kliknjo na ikono agenta v zaglavju čata.
3. Opisujte kontaktform, ki jo želite ustvariti. Na primer:

   > "Dodaj kontaktform na stran Kontakt z polji za ime, e-poštno naslov, sporočilo in telefonsko številko."

   Ali preprosto:

   > "Ustvari kontaktform za stran Kontakt."

4. Site Builder ustvari kontaktform in vrne kratki kod (shortcode), pripravljen na vgrajevanje.

## Uporaba generiranega kratkega koda {#using-the-generated-shortcode}

Po temeljitv, ko Site Builder ustvari kontaktform, vrne kratki kod (na primer, `[contact-form-7 id="123"]`). Lahko:

1. **Vgrajite ga na stran ali post** — Kopirajte kratki kod in ga vstavite v vsako stran ali post z uporabo block editorja ali klasične editorje.
2. **Dodajete ga preko Site Builderja** — Vprašajte Site Builderja, da dodaj form na določeno stran samodejno:

   > "Dodaj kontaktform na stran Kontakt."

3. **Uporabite ga v templatih** — Če ste se počutno s PHP-jem, lahko kratko kod dodate do templatil teme.

## Uporaba pri prilagajanju kontaktnega oblika (Contact Form) {#customizing-the-contact-form}

Po temeljitvi zgraje Site Builder kontaktni oblik, ga lahko še bolj prilagodite:

### Spletno preko čata (Chat Interface) {#via-the-chat-interface}

Vprašajte Site Builder, da spremeni oblik:

> "Obnovi kontaktni oblik, da doda pol za predmet in naredi pol za sporočilo obvezno."

Site Builder bo obnovil oblik in vrnil obnovljen kratki kod.

### Spletno preko admin interfejsa vašega form plugin-a {#via-the-form-plugins-admin-interface}

Oblik lahko prilagodite tudi neposredno v nastavitvah vašega form plugin-a:

1. V WordPress admin sistemu gre do **Contact Form 7** (ali vaše instalirane form plugin)
2. Poiščite oblik, ki ga je ustvaril Site Builder.
3. Uporabite možnost za ureditev polja oblika, pravila validacije in e-poštne obvestave, če je potrebno.

## Form plugin-i in kompatibilnost {#form-plugins-and-compatibility}

Site Builder sam avtomatsko odkrije, kateri form plugin je na vašem spletnem mestu instaliran in ga uporablja za ustvarjanje kontaktnega oblika. Če je na voljo več form pluginov, Site Builder jih prioritizira v naslednji vrstvi:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Če ni nobena od teh pluginov instalirana, Site Builder bo priporočil, da jo instalirate pred ustvarjanjem kontaktnega oblika.

## E-poštne obvestave (Email Notifications) {#email-notifications}

Kontaktni obliki, ki jih ustvari Site Builder, so po podrazdelih namen konfigurirani za posredovanje e-poštnih obvestav administratorju spletnega mesta. Lahko prilagodite e-poštno naslov in sporočilo obvestave:

1. Gre do admin interfejsa vašega form plugin-a.
2. Poiščite oblik, ki ga je ustvaril Site Builder.
3. Uredite nastavitve e-poštnih obvestav.

Za podrobne navodila se pozivajte na dokumentacijo vašega form plugin-a:

- [Obvestila za e-poštna sporočila Contact Form 7](https://contactform7.com/docs/)
- [Obvestila za e-poštna sporočila WPForms](https://wpforms.com/docs/)
- [Obvestila za e-poštna sporočila Fluent Forms](https://fluentforms.com/docs/)
- [Obvestila za e-poštna sporočila Gravity Forms](https://docs.gravityforms.com/)

## Primeri uporabe {#example-use-cases}

### Preprosto kontaktno obrazec {#simple-contact-form}

> "Ustvarite preprosti kontaktni obrazec z polji za ime, e-poštno in sporočilo."

### Obrazec z več koraki {#multi-step-form}

> "Ustvarite kontaktni obrazec s prvim korakom za informacije o kontaktu in drugim korakom za sporočilo ter predvčene metodo kontakta."

### Obrazec z pogojnim logikom {#form-with-conditional-logic}

> "Ustvarite kontaktni obrazec, ki prikazuje različne polja na podlagi izbire uporabnika v sproščeni meni."

### Obrazec z obdelavo datoteka {#form-with-file-upload}

> "Ustvarite kontaktni obrazec, ki omogoča uporabnikom, da se nahajajo datoteke ali priloge."

:::note
Ustvarjanje kontaktnega obrazca je na voljo v Superdav AI Agent v1.10.0 in novih verzijah. Za uporabo te možnosti mora biti aktiv agent Site Builder.
:::
