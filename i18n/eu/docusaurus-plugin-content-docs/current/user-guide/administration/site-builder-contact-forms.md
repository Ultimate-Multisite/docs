---
title: Site Builder kontakto formularioak
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontak-formak le Site Builderra {#site-builder-contact-forms}

Superdav AI Agent v1.10.0-ek gabe duleko kontak-formak direktu chat interface-n batzuk jartzeko aukera da Site Builder agentaren erabilera. Horrek ematen du, chat-n ez kalan sansiz, edoze page-n funtzionalki jakin dituzten kontak-formak leitzapena leitzapen.

## Deskribapena {#overview}

Site Builder-ren kontak-formak jartzeko aukeraren (`create_contact_form`) da, plugin-ek instalatutakoa otomatikoki identifikatzen du eta hori plugin-en natibko aukerak erabiliz kontak-formak jartzen du. Udal form pluginak hauek dira suportatuak:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistenta-ek site-n dagoen lehen pluginaren espezial formak aukitzen du eta hori plugin-eko tailoratu kontak-formak jartzen du.

## Kontak-formak Jartzea {#creating-a-contact-form}

Site Builderra erabiliz kontak-formak jartzeko:

1. WordPress admin-n **Gratis AI Agent** chat panel-a irekitu.
2. Chat header-eko agentaren ikona dela klikiz **Site Builder** agentera iratu.
3. Jartzen duwan kontak-formak deskribatu. Adibidez:

   > "Contact page-an pertsona, email, testu mezuak eta telefono numerua edozein lekurak dituzten formak jartu."

   Mota simplea da:

   > "Contact page-ra kontak-formak jartu."

4. Site Builder-ek kontak-formak jartzen du eta embed egin dezakeena dagoen shortcode bat iradokituz itarretzen du.

## Jartutako Shortcodearen Erabilera {#using-the-generated-shortcode}

Site Builder-ek kontak-formak jartzen ondoren, shortcode bat (adibidez, `[contact-form-7 id="123"]`) iradokituz itarretzen du. Hau egin dezakezu:

1. **Page edo post-an embed egin** — Shortcodea kopiatu eta block editorra edo klassiko editorra erabiliz edoze page edo post-an haitzi ditu.
2. **Site Builderra bidez jartzea** — Site Builderra esatu dezakezu automatikoki formak lekurako page-an jartzeko:

   > "Kontak-formak Contact page-an jartu."

3. **Gureu in template bat** — Hau PHP-re konfortu dago, shortcodea tema template file batean ez dezake.

## Contact Formaren modifikazioa {#customizing-the-contact-form}

Site Builder-rek contact formak sortu ondoren, hori gehiago modifikatu ditzakezu:

### Chat Interface bidez {#via-the-chat-interface}

Site Builder-ri formak aldatzeko eskatzen dituzte:

> "Contact formak subject field bat gehien eta message fielda zorrotz egiteko aldatu."

Site Builder-rek formak aktualizatu eta updateatutako shortcodea itxaraziko du.

### Form Pluginaren Admin Interface bidez {#via-the-form-plugins-admin-interface}

Formak direktamente form pluginaren eskaintzian modifikatu ditzakezu:

1. WordPress admin batean **Contact Form 7** (edo, instalatutako form pluginak) zeisten jarri.
2. Site Builder-rek sortutako formak aurkitu.
3. Bezatz daiteke direla fieldak, validazio erreguntzak eta email notifikazioak beharrezko jakin batzuk aldatu.

## Form Plugins eta Kompatibilita {#form-plugins-and-compatibility}

Site Builder-rek automatikoki zehazki du zein form plugin dago instalatuta siturenan eta hori erabiltzen du contact formak sortzeko. Pluginak batek usteinstalatu dutenean, Site Builder-ren prioritatea hauek ditu:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Hau plugin bat ez dago instalatuta jakin nahi du, contact formak sortu baino lehen aurkitzea ematen du.

## Email Notifikazioak {#email-notifications}

Site Builder-rek sortutako contact formak default batean situen administralari email notifikazioak bidali eta aldatzeko modifikazioa ditzake duzu:

1. Form pluginaren admin interface zeisten jarri.
2. Site Builder-rek sortutako formak aurkitu.
3. Email notifikazioaren eskaintzak aldatu.

Mehatzeko instruktuz, form pluginaren dokumentazioan referentzia egin dezakezu:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Erroren Use Cases (Egun Erreguntzak) {#example-use-cases}

### Simple Contact Form (Forma Simple Kontakto) {#simple-contact-form}

> "Kontak formak sortuatu, edo pertsona, email eta testu iragailu lekuak hartuz."

### Multi-Step Form (Forma Kontinu/Ezartu-ezartu) {#multi-step-form}

> "Kontak formak sortuatu, kontak informazioa iragailu beste urtera eta testu eta kontak metodo preferitu edo ikusilean."

### Form with Conditional Logic (Forma Kondisionala Logika) {#form-with-conditional-logic}

> "Kontak formak sortuatu, erabiltzailearen dropdown-eko aukera erabiliz, ezberdina lekuak erakusten duena."

### Form with File Upload (Forma Arkidea Iragailu) {#form-with-file-upload}

> "Kontak formak sortuatu, erabiltzaileei arkidea edo agintuzu iragailu konponduena."

:::note
Kontak formak sortzea Superdav AI Agent v1.10.0 eta horrek ondoren disponible da. Site Builder agenta aktibo izan behar da hau erabilera.
:::
