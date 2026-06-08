---
title: Opinie klientów i zgłaszanie problemów
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Informacja zwrotna i zgłaszanie problemów

Gratis AI Agent v1.5.0 wprowadza wbudowany system zbierania informacji zwrotnych i zgłaszania problemów, który pozwala użytkownikom końcowym oznaczać nieprzydatne odpowiedzi oraz zgłaszać problemy bezpośrednio z interfejsu czatu. System ten obejmuje zarządzanie zgodą, automatyczne polecenie zgłoszenia oraz wstępną kategoryzację (triage) wspomaganą przez AI na backendzie.

## Przycisk „Kciuk w dół”

Każda wiadomość wysłana przez asystenta AI wyświetla przycisk **„kciuk w dół”** (👎). Kliknięcie go pozwala użytkownikowi oznaczyć odpowiedź jako nieprzydatną lub nieprawidłową.

- Przycisk pojawia się po najechaniu kursorem na każdą wiadomość asystenta.
- Kliknięcie otwiera **Modal Zgody na Informację Zwrotną**.
- Informacja zwrotna jest powiązana z wątkiem konwersacji i konkretną wiadomością.

## Modal Zgody na Informację Zwrotną

Gdy użytkownik kliknie przycisk kciuk w dół, zanim zostaną przesłane jakiekolwiek dane, pojawi się modal z prośbą o zgodę. Modal ten:

- Wyjaśnia, jakie informacje zostaną zebrane (fragment konwersacji, kontekst przeglądarki).
- Prosi użytkownika o potwierdzenie zgody na udostępnienie tych danych.
- Zawiera pole tekstowe, w którym użytkownik może opisać, co poszło nie tak.
- Oferuje opcję **Anuluj**, aby zamknąć modal bez wysyłania danych.

Żadna informacja zwrotna nie zostanie zapisana, dopóki użytkownik nie potwierdzi tego wyraźnie.

## Baner Informacji Zwrotnej z Auto-Promptem

Pod koniec konwersacji asystent może wyświetlić **baner informacji zwrotnej z auto-promptem** — nieinwazyjną wiadomość pytającą, czy sesja była pomocna.

Baner ten pojawia się automatycznie na podstawie długości i wyników konwersacji. Łączy się z tym samym procesem zbierania informacji zwrotnych co przycisk kciuk w dół. Użytkownicy mogą zamknąć baner, nie podając żadnej informacji zwrotnej.

## Polecenie `/report-issue`

Użytkownicy mogą uruchomić proces informacji zwrotnej, wpisując bezpośrednio w pole czatu polecenie `/report-issue`. To polecenie:

- Natychmiast otwiera Modal Zgody na Informację Zwrotną.
- Wstępnie wypełnia pole opisu kontekstem bieżącej konwersacji.
- Pozwala użytkownikom dodać dodatkowe szczegóły przed wysłaniem.

Polecenie `/report-issue` jest dostępne we wszystkich trybach czatu (inline, pływający widget, pełny ekran).

## Wstępna Kategoryzacja (Triage) Wspomagana przez AI

Przesłana informacja zwrotna trafia do warstwy wstępnej kategoryzacji (triage) wspomaganej przez AI, która:

- Kategoryzuje zgłoszenie (błąd faktyczny, nieprzydatna odpowiedź, nieodpowiednia treść itp.).
- Dołącza istotne metadane konwersacji.
- Przekazuje podsumowanie kategoryzacji do skonfigurowanego **Endpointu Informacji Zwrotnej** (patrz [Ustawienia > Zaawansowane](#settings-advanced)).

Dzięki temu skraca się czas ręcznej weryfikacji, ponieważ najpierw pojawiają się najbardziej krytyczne problemy.

## Ustawienia > Zaawansowane {#settings-advanced}

Aby włączyć backend informacji zwrotnej, skonfiguruj poniższe pola w sekcji **Gratis AI Agent → Ustawienia → Zaawansowane**:

| Pole | Opis |
|---|---|
| **Feedback Endpoint URL** | Adres URL, który otrzymuje żądania POST z ładunkami informacji zwrotnej (JSON). |
| **Feedback API Key** | Token Bearer wysyłany w nagłówku `Authorization` w celu uwierzytelnienia zgłoszeń informacji zwrotnej. |

Pozostaw oba pola puste, aby wyłączyć zbieranie informacji zwrotnych. Pojedyncze przyciski informacji zwrotnej pozostają widoczne dla użytkowników, ale zgłoszenia nie zostaną przekazane.

:::tip
Endpoint informacji zwrotnej musi akceptować ciało JSON zawierające co najmniej pola `message_id`, `conversation_id`, `feedback_text` i `triage_category`. Sprawdź dokumentację dostawcy Twojego endpointu, aby poznać oczekiwaną schematę.
:::
