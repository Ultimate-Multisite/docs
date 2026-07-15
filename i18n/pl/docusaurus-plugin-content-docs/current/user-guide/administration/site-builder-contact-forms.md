---
title: Formularze kontaktowe w Site Builderze
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Formularze kontaktowe w Site Builderze

Superdav AI Agent v1.10.0 dodaje możliwość tworzenia formularzy kontaktowych bezpośrednio z interfejsu czatu za pomocą agenta Site Builder. Dzięki temu możesz dodać w pełni funkcjonalne formularze kontaktowe na dowolną stronę, nie opuszczając czatu.

## Przegląd {#overview}

Funkcja formularzy kontaktowych w Site Builderze (`create_contact_form`) automatycznie wykrywa zainstalowany plugin do formularzy i tworzy formularz kontaktowy, wykorzystując natywne możliwości tego pluginu. Obsługiwane pluginów do formularzy to:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asystent automatycznie wybiera najlepszy dostępny plugin do formularzy na Twojej stronie i generuje formularz kontaktowy dostosowany do tego pluginu.

## Tworzenie formularza kontaktowego {#creating-a-contact-form}

Aby utworzyć formularz kontaktowy za pomocą Site Buildera:

1. Otwórz panel czatu **Gratis AI Agent** w panelu administracyjnym WordPress.
2. Przełącz się na agenta **Site Builder**, klikając ikonę agenta w nagłówku czatu.
3. Opisz formularz kontaktowy, który chcesz utworzyć. Na przykład:

   > "Dodaj formularz kontaktowy na stronie Kontakt z polami na imię, e-mail, wiadomość i numer telefonu."

   Lub po prostu:

   > "Utwórz formularz kontaktowy na stronie Kontakt."

4. Site Builder wygeneruje formularz kontaktowy i zwróci shortcode gotowy do wklejenia.

## Używanie wygenerowanego shortcode {#using-the-generated-shortcode}

Po tym, jak Site Builder utworzy formularz kontaktowy, zwróci shortcode (np. `[contact-form-7 id="123"]`). Możesz:

1. **Wkleić go na stronie lub w poście** — Skopiuj shortcode i wklej go na dowolną stronę lub do posta za pomocą edytora bloków lub edytora klasycznego.
2. **Dodać go za pomocą Site Buildera** — Poproś Site Buildera o automatyczne dodanie formularza do konkretnej strony:

   > "Dodaj formularz kontaktowy na stronie Kontakt."

3. **Użyć go w szablonie** — Jeśli czujesz się komfortowo z PHP, możesz dodać shortcode do pliku szablonu motywu.

## Dostosowywanie formularza kontaktowego {#customizing-the-contact-form}

Po utworzeniu formularza przez Site Buildera możesz go jeszcze bardziej dostosować:

### Poprzez interfejs czatu {#via-the-chat-interface}

Poproś Site Buildera o zmodyfikowanie formularza:

> "Zaktualizuj formularz kontaktowy, dodając pole na temat i wymagając wypełnienia pola wiadomości."

Site Builder zaktualizuje formularz i zwróci zaktualizowany shortcode.

### Poprzez interfejs administracyjny pluginu do formularzy {#via-the-form-plugins-admin-interface}

Możesz również dostosować formularz bezpośrednio w ustawieniach swojego pluginu do formularzy:

1. Przejdź do **Contact Form 7** (lub zainstalowanego pluginu do formularzy) w panelu administracyjnym WordPress.
2. Znajdź formularz utworzony przez Site Buildera.
3. Edytuj pola formularza, reguły walidacji i powiadomienia e-mail, jeśli zajdzie taka potrzeba.

## Pluginy do formularzy i kompatybilność {#form-plugins-and-compatibility}

Site Builder automatycznie wykrywa, który plugin do formularzy jest zainstalowany na Twojej stronie i używa go do utworzenia formularza kontaktowego. Jeśli zainstalowano wiele pluginów do formularzy, Site Builder priorytetyzuje je w następującej kolejności:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Jeśli żaden z tych pluginów nie jest zainstalowany, Site Builder poleci zainstalowanie jednego przed utworzeniem formularza kontaktowego.

## Powiadomienia e-mail {#email-notifications}

Formularze kontaktowe utworzone przez Site Buildera domyślnie są skonfigurowane do wysyłania powiadomień e-mail administratorowi strony. Możesz dostosować adres e-mail odbiorcy i treść powiadomienia:

1. Przejdź do interfejsu administracyjnego swojego pluginu do formularzy.
2. Znajdź formularz utworzony przez Site Buildera.
3. Edytuj ustawienia powiadomień e-mail.

Aby uzyskać szczegółowe instrukcje, zapoznaj się z dokumentacją swojego pluginu do formularzy:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Przykładowe przypadki użycia {#example-use-cases}

### Prosty formularz kontaktowy {#simple-contact-form}

> "Utwórz prosty formularz kontaktowy z polami na imię, e-mail i wiadomość."

### Formularz wieloetapowy {#multi-step-form}

> "Utwórz formularz kontaktowy z pierwszym krokiem na dane kontaktowe i drugim krokiem na wiadomość oraz preferowany sposób kontaktu."

### Formularz z logiką warunkową {#form-with-conditional-logic}

> "Utwórz formularz kontaktowy, który wyświetla różne pola w zależności od wyboru użytkownika w rozwijanej liście."

### Formularz z przesyłaniem plików {#form-with-file-upload}

> "Utwórz formularz kontaktowy, który umożliwia użytkownikom załączenie pliku lub załącznika."

:::note
Tworzenie formularzy kontaktowych jest dostępne w Superdav AI Agent v1.10.0 i nowszych. Aby użyć tej funkcji, agent Site Builder musi być aktywny.
:::
