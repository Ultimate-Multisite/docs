---
title: Site Builder Kontakvorms
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Site Builder Kontakvorms

Superdav AI Agent v1.10.0 voeg die vermoë by om kontakvorms direk vanaf die chat-koppelvlak te skep met die Site Builder agent. Dit laat jou toe om volkome funksionele kontakvorms by enige bladsy te voeg sonder om die chat te verlaat.

## Oorsig {#overview}

Die Site Builder kontakvormvermoë (`create_contact_form`) herken outomaties jou geïnstalleerde form plugin en skep 'n kontakvorm met behulp van daardie plugin se ingebooide funksionaliteite. Ondersteunde form plugins sluit in:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Die assistent kies outomaties die beste beskikbare form plugin op jou webwerf en genereer 'n kontakvorm wat aangepas is vir daardie plugin.

## Skep 'n Kontakvorm {#creating-a-contact-form}

Om 'n kontakvorm te skep met behulp van die Site Builder:

1. Maak die **Gratis AI Agent** chatpaneel in die WordPress-administrasie.
2. Skakel oor na die **Site Builder** agent deur op die agent-ikoon in die chat-kop te klik.
3. Beskryf die kontakvorm wat jy wil skep. Byvoorbeeld:

   > "Voeg 'n kontakvorm by die Kontakbladsy met velde vir naam, e-pos, boodskap en telefoonnommer."

   Of eenvoudig:

   > "Skep 'n kontakvorm vir die Kontakbladsy."

4. Die Site Builder sal die kontakvorm genereer en 'n shortcode teruggee wat gereed is om ingebed te word.

## Gebruik die Ge genereerde Shortcode {#using-the-generated-shortcode}

Nadat die Site Builder die kontakvorm geskep het, gee dit 'n shortcode terug (byvoorbeeld, `[contact-form-7 id="123"]`). Jy kan:

1. **Dit in 'n bladsy of plasing inbed** — Kopieer die shortcode en plak dit in enige bladsy of plasing met behulp van die block editor of klassieke editor.
2. **Dit via die Site Builder byvoeg** — Vra die Site Builder om die vorm outomaties by 'n spesifieke bladsy by te voeg:

   > "Voeg die kontakvorm by die Kontakbladsy by."

3. **Dit in 'n sjabloon gebruik** — As jy gemaklik is met PHP, kan jy die shortcode by 'n tema-sjabloon lêer voeg.

## Aanpas die Kontakvorm {#customizing-the-contact-form}

Nadat die Site Builder die kontakvorm geskep het, kan jy dit verder aanpas:

### Via die Chat-koppelvlak {#via-the-chat-interface}

Vra die Site Builder om die vorm te wysig:

> "Pas die kontakvorm aan om 'n onderwerpveld by te voeg en die boodskapveld verpligtend te maak."

Die Site Builder sal die vorm opdateer en die opgedateerde shortcode teruggee.

### Via die Form Plugin se Admin-koppelvlak {#via-the-form-plugins-admin-interface}

Jy kan die vorm ook direk in jou form plugin se instellings aanpas:

1. Gaan na **Contact Form 7** (of jou geïnstalleerde form plugin) in die WordPress-administrasie.
2. Vind die vorm wat deur die Site Builder geskep is.
3. Wysig die vormvelde, valideringsreëls en e-poskennisgewings soos nodig.

## Form Plugins en Kompatibiliteit {#form-plugins-and-compatibility}

Die Site Builder herken outomaties watter form plugin op jou webwerf geïnstalleer is en gebruik dit om die kontakvorm te skep. As verskeie form plugins geïnstalleer is, prioritiseer die Site Builder hulle in hierdie volgorde:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Indien nie een van hierdie plugins geïnstalleer is nie, sal die Site Builder aanbeveel om een te installeer voordat die kontakvorm geskep word.

## E-poskennisgewings {#email-notifications}

Kontakvorms wat deur die Site Builder geskep word, word standaard gekonfigureer om e-poskennisgewings aan die webwerfbeheerder te stuur. Jy kan die ontvanger e-posadres en kennisgewingsboodskap aanpas:

1. Gaan na jou form plugin se admin-koppelvlak.
2. Vind die vorm wat deur die Site Builder geskep is.
3. Wysig die e-poskennisgewingsinstellings.

Vir gedetailleerde instruksies, verwys na jou form plugin se dokumentasie:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Voorbeeld Gebruiksvlakke {#example-use-cases}

### Eenvoudige Kontakvorm {#simple-contact-form}

> "Skep 'n eenvoudige kontakvorm met velde vir naam, e-pos en boodskap."

### Meerdere Stappe Vorm {#multi-step-form}

> "Skep 'n kontakvorm met 'n eerste stap vir kontakbesonderhede en 'n tweede stap vir die boodskap en verkiesde kontakmetode."

### Vorm met Kondisionele Logika {#form-with-conditional-logic}

> "Skep 'n kontakvorm wat verskillende velde wys gebaseer op die gebruiker se keuse in 'n dropdown."

### Vorm met Bestandoplaai {#form-with-file-upload}

> "Skep 'n kontakvorm wat gebruikers toelaat om 'n lêer of byvoeging te oplaai."

:::note
Kontakvormskepping is beskikbaar in Superdav AI Agent v1.10.0 en nuwer. Die Site Builder agent moet aktief wees om hierdie vermoë te gebruik.
:::
