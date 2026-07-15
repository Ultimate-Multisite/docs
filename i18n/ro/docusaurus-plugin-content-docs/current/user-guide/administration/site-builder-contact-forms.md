---
title: Formulare de contact pentru Site Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Formulare de Contact cu Site Builder

Superdav AI Agent v1.10.0 adaugă posibilitatea de a crea formulare de contact direct din interfața de chat, folosind agentul Site Builder. Acest lucru îți permite să adaugi formulare de contact complet funcționale oricărei pagini, fără a părăsi chat-ul.

## Prezentare {#overview}

Funcționalitatea de formular de contact a Site Builder (`create_contact_form`) detectează automat plugin-ul de formulare pe care l-ai instalat și creează un formular de contact folosind capacitățile native ale acelui plugin. Plugin-urile de formulare suportate includ:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistentul selectează automat cel mai bun plugin de formulare disponibil pe site-ul tău și generează un formular de contact adaptat acelui plugin.

## Crearea unui Formular de Contact {#creating-a-contact-form}

Pentru a crea un formular de contact folosind Site Builder:

1. Deschide panoul de chat **Gratis AI Agent** în dashboard-ul WordPress.
2. Comută la agentul **Site Builder** făcând clic pe iconița agentului din antetul chat-ului.
3. Descrie formularul de contact pe care vrei să îl creezi. De exemplu:

   > "Adaugă un formular de contact pe pagina de Contact cu câmpuri pentru nume, email, mesaj și număr de telefon."

   Sau pur și simplu:

   > "Creează un formular de contact pentru pagina de Contact."

4. Site Builder va genera formularul de contact și va returna un shortcode gata de incorporare.

## Utilizarea Shortcode-ului Generat {#using-the-generated-shortcode}

După ce Site Builder creează formularul de contact, acesta returnează un shortcode (de exemplu, `[contact-form-7 id="123"]`). Tu poți:

1. **Integra-l într-o pagină sau postare** — Copiază shortcode-ul și lipește-l în orice pagină sau postare folosind editorul de blocuri sau editorul clasic.
2. **Adăuga-l prin Site Builder** — Roagă Site Builder să adauge formularul pe o pagină specifică automat:

   > "Adaugă formularul de contact pe pagina de Contact."

3. **Folosi-l într-un template** — Dacă ești familiarizat cu PHP, poți adăuga shortcode-ul într-un fișier de template al temei.

## Personalizarea Formularului de Contact {#customizing-the-contact-form}

După ce Site Builder creează formularul de contact, îl poți personaliza și mai mult:

### Prin Interfața de Chat {#via-the-chat-interface}

Roagă Site Builder să modifice formularul:

> "Actualizează formularul de contact pentru a adăuga un câmp pentru subiect și pentru a face câmpul mesaj obligatoriu."

Site Builder va actualiza formularul și va returna shortcode-ul actualizat.

### Prin Interfața de Administrare a Plugin-ului de Formulare {#via-the-form-plugins-admin-interface}

Poți personaliza și tu formularul direct în setările plugin-ului tău de formulare:

1. Mergi la **Contact Form 7** (sau la plugin-ul de formulare instalat) în dashboard-ul WordPress.
2. Găsește formularul creat de Site Builder.
3. Editează câmpurile formularului, regulile de validare și notificările de email după necesitate.

## Plugin-uri de Formulare și Compatibilitate {#form-plugins-and-compatibility}

Site Builder detectează automat ce plugin de formulare este instalat pe site-ul tău și îl folosește pentru a crea formularul de contact. Dacă sunt instalate mai multe plugin-uri de formulare, Site Builder le prioritizează în această ordine:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Dacă niciunul dintre aceste plugin-uri nu este instalat, Site Builder va recomanda instalarea unui plugin înainte de a crea formularul de contact.

## Notificări prin Email {#email-notifications}

Formularele de contact create de Site Builder sunt configurate să trimită notificări prin email administratorului site-ului ca implicit. Poți personaliza adresa de email destinatară și mesajul de notificare:

1. Mergi la interfața de administrare a plugin-ului tău de formulare.
2. Găsește formularul creat de Site Builder.
3. Editează setările de notificare prin email.

Pentru instrucțiuni detaliate, referă-te documentației plugin-ului tău de formulare:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Cazuri de Utilizare Exemplu {#example-use-cases}

### Formular de Contact Simplu {#simple-contact-form}

> "Creează un formular de contact simplu cu câmpuri pentru nume, email și mesaj."

### Formular cu Pași Multipli {#multi-step-form}

> "Creează un formular de contact cu un prim pas pentru informațiile de contact și un al doilea pas pentru mesaj și metoda preferată de contact."

### Formular cu Logică Condițională {#form-with-conditional-logic}

> "Creează un formular de contact care afișează câmpuri diferite în funcție de selecția utilizatorului într-un meniu derulant."

### Formular cu Încărcare de Fișiere {#form-with-file-upload}

> "Creează un formular de contact care permite utilizatorilor să încarce un fișier sau o atașament."

:::note
Crearea formularului de contact este disponibilă începând cu Superdav AI Agent v1.10.0 și versiuni mai noi. Agentul Site Builder trebuie să fie activ pentru a folosi această funcționalitate.
:::
