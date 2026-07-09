---
title: Formijiet ta Kontatt għall-Site Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Formi Kontatt (Contact Forms) {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 id-ap il-possibilità ta creare formi kontatt direttament mill-chat interface u l-Site Builder agent. Dan itti jagħlek a aġġixxi formi kontatt kumpli għal kis-sigħa بلا ma tixleb mill-chat.

## Panoramika (Overview) {#overview}

Il-possibilità ta l-formi kontatt tal-Site Builder (`create_contact_form`) tiddetik awtomatik il-plugin ta form li għandek installat u tgħmli form kontatt u jografe b'il-kapacità nativa tal-plugin. Il-pluginijiet ta form supportati inklużew:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

L-assistenti jaċċedix awtomatik il-plugin ta form l-aħjar disponibbli fuq is-sajtu tiegħek u jografe form kontatt li huwa adatta għall-plugin.

## Kreawli Form Kontatt (Creating a Contact Form) {#creating-a-contact-form}

Biex tgħmli form kontatt u tista' l-Site Builder:

1. Ileb il pannell chat tal-**Gratis AI Agent** f il WordPress admin.
2. Switch għall-**Site Builder** agent billi tikkliċċi fuq l-icon tal-agent f il header tal-chat.
3. Deskrivi l-form kontatt li tista' tgħmli. Biex iż-żum, kif ukoll:

   > "Aggiungi form kontatt għall-Contact page b filtri għal ism, email, messaggi u num telefoni."

   Oppurt sempliċi:

   > "Ikreaw form kontatt għall-Contact page."

4. Il-Site Builder jografe l-form kontatt u jirritorna shortcode li jista' tiddissigna (embed).

## Użu tal-Shortcode Jografit (Using the Generated Shortcode) {#using-the-generated-shortcode}

Wara li l-Site Builder ikkreaw il-form kontatt, jirritorna shortcode (bħal, `[contact-form-7 id="123"]`). Tista' giddegja:

1. **Embed it f kis-sigħa jew post** — Kopja l-shortcode u tistgħu tiegħu f kis-sigħa jew post kull użu tal-block editor jew l-editor klassiku.
2. **Aggiungi biex tiġi aġġixit minn il Site Builder** — Ixtelliq l-Site Builder biex jiddeqi l-form għal kis-sigħa speċifiku awtomatikament:

   > "Aggiungi l-form kontatt għall-Contact page."

3. **Uża f it templating** — Jekk qed konfortabu ma PHP, puoi tieni il shortcode f un file template di tema.

## Personalizzazzjoni tal-Forma ta Kontatt {#customizing-the-contact-form}

Wara li l-Site Builder jagħdu l-forma ta kontatt, puoi personalizzazzola flis-post:

### Attra l-Interface tal-Chat {#via-the-chat-interface}

Itqaf l-Site Builder biex jmodifika l-form:

> "Ipprovvidi l-forma ta kontatt biex tista addix field ta sħaba u tgħmel il-field ta messa obbligatorju."

L-Site Builder jmodifika l-form u jirritorna l-shortcode ipprovvidi.

### Attra l-Interface Admin tal-Plugin ta Forma {#via-the-form-plugins-admin-interface}

Tista' personalizzazzola l-form direttament fil-settings tal-plugin ta forma tiegħek:

1. Irridi għal **Contact Form 7** (o il-plugin ta forma li għandek installat) f l-WordPress admin.
2. Iġbed l-forma li jagħdu l-Site Builder.
3. Edita l-fields tal-form, regole validazzjoni u notifikazzjonijiet tal-email kif għandek bżonn.

## Plugin ta Forma u Kompatibbiltà {#form-plugins-and-compatibility}

L-Site Builder jifhax awtomatik li qed installat qabel plugin ta forma fuq sitjek u jista' jografe l-forma ta kontatt. Jekk għandek party plugin ta forma, l-Site Builder jiddeqha b'dan l-ordina:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Jekk ma hemmx dan il-pluginijiet installati, l-Site Builder jista' jirracjuta li tinstall xi plugin qabel jagħdu l-forma ta kontatt.

## Notifikazzjonijiet tal-Email {#email-notifications}

Il-contact forms li jagħdu l-Site Builder huma konfigurat biex jgħattu notifikazzjonijiet tal-email għall-administrator tal-sit b'default. Tista' personalizzazzola l-indirizz ta l-email reċipiente u il-messa ta notifika:

1. Irridi għall-interface admin tal-plugin ta forma tiegħek.
2. Iġbed l-forma li jagħdu l-Site Builder.
3. Edita l-settings ta notifikazzjoni tal-email.

Biex tiġi informat b direttiviet dettaljati, irreferti għall-dokumentazzjoni tal-plugin ta forma tiegħek:

- [Notificazioni Email per Contact Form 7](https://contactform7.com/docs/)
- [Notificazioni Email per WPForms](https://wpforms.com/docs/)
- [Notificazioni Email per Fluent Forms](https://fluentforms.com/docs/)
- [Notificazioni Email per Gravity Forms](https://docs.gravityforms.com/)

## Esempi di Utilizzazioni {#example-use-cases}

### Form di Contatto Semplice {#simple-contact-form}

> "Crea un form di contatto semplice con campi per il nome, l'email e il messaggio."

### Form a Passi Multipli {#multi-step-form}

> "Crea un form di contatto con un primo passaggio per le informazioni di contatto e un secondo passaggio per il messaggio e il metodo di contatto preferito."

### Form con Logica Condizionale {#form-with-conditional-logic}

> "Crea un form di contatto che mostra campi diversi in base alla selezione dell'utente in un menu a tendina."

### Form con Caricamento File {#form-with-file-upload}

> "Crea un form di contatto che permette agli utenti di caricare un file o allegato."

:::note
La creazione di un form di contatto è disponibile in Superdav AI Agent v1.10.0 e versioni successive. L'agente Site Builder deve essere attivo per utilizzare questa funzionalità.
:::
