---
title: Darmowe Ustawienia Agent AI
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Ustawienia Agenta Gratis AI

Ekran **Ustawienia → Zaawansowane** (Settings → Advanced) w Gratis AI Agent umożliwia administratorom konfigurację integracji backendowych wprowadzonych w wersji v1.5.0. Ta strona dokumentuje pola **Endpointu Informacji Zwrotnej** (Feedback Endpoint) i oczekiwany format danych.

## Dostęp do Ustawień

1. W panelu administracyjnym WordPress przejdź do **Gratis AI Agent → Ustawienia**.
2. Kliknij zakładkę **Zaawansowane** (Advanced).

## Konfiguracja Endpointu Informacji Zwrotnej

Endpoint informacji zwrotnej otrzymuje żądania POST od agenta AI za każdym razem, gdy użytkownik przesyła informację zwrotną za pomocą przycisku kciuka w dół, baneru z automatycznym poleceniem (auto-prompt banner) lub polecenia `/report-issue`.

| Pole | Opis |
|---|---|
| **Feedback Endpoint URL** | Adres URL, który otrzymuje przesłane informacje zwrotne jako żądania HTTP POST z ciałem JSON. |
| **Feedback API Key** | Token nosiciela (bearer token) wysyłany w nagłówku `Authorization` każdego żądania informacji zwrotnej. Pozostaw pole puste, jeśli Twój endpoint nie wymaga uwierczytelniania. |

### Oczekiwane Obciążenie JSON (Expected JSON Payload)

Twój endpoint informacji zwrotnej musi akceptować ciało JSON zawierające co najmniej następujące pola:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Odpowiedź była nieprawidłowa w kwestii cen.",
  "triage_category": "factual_error"
}
```

Dodatkowe pola mogą być obecne w obciążeniu w zależności od kontekstu rozmowy.

### Wartości `triage_category`

Warstwa kategoryzacji (triage layer) AI przypisuje jedną z poniższych wartości do `triage_category` przed przekazaniem obciążenia:

| Wartość | Znaczenie |
|---|---|
| `factual_error` | Asystent podał nieprawidłowe informacje faktyczne. |
| `unhelpful_answer` | Odpowiedź była technicznie poprawna, ale nieprzydatna. |
| `inappropriate_content` | Odpowiedź zawierała treści, które nie powinny być pokazywane użytkownikom. |
| `other` | Informacja zwrotna nie pasowała do znanej kategorii. |

### Uwierzytelnianie (Authentication)

Jeśli Twój endpoint wymaga uwierzytelniania, ustaw pole **Feedback API Key** na swój token nosiciela. Agent wysyła:

```
Authorization: Bearer <your-api-key>
```

Jeśli pole **Feedback API Key** jest puste, nie wysyłany jest nagłówek `Authorization`.

### Wyłączanie Zbierania Informacji Zwrotnej

Pozostaw pola **Feedback Endpoint URL** i **Feedback API Key** puste. Przycisk kciuka w dół i interfejs użytkownika informacji zwrotnej pozostają widoczne dla użytkowników, ale przesłane dane nie są przekazywane do żadnej zewnętrznej usługi.

## Klucz API Brave Search

Na zakładce **Zaawansowane** znajduje się również pole **Brave Search API Key**, które umożliwia funkcjonalność [Wyszukiwania w Internecie](../configuration/internet-search).

| Pole | Opis |
|---|---|
| **Brave Search API Key** | Twój klucz API z pulpitu dewelopera Brave Search. Wymagany do włączenia wyszukiwania w internecie w asystencie AI. |

Etykieta pola zawiera klikalny link do strony rejestracji API Brave Search. Pozostaw pole puste, aby wyłączyć wyszukiwanie w internecie.

Zobacz [Wyszukiwanie w Internecie](../configuration/internet-search) w celu uzyskania dokumentacji dla końcowych użytkowników na temat tej funkcji.

## Flagi Funkcjonalności (Feature Flags)

Flagi Funkcjonalności, wprowadzone również w wersji v1.9.0, na zakładce **Ustawienia → Flagi Funkcjonalności** (Settings → Feature Flags) zapewniają przełączniki dla opcjonalnej funkcjonalności. Każda flaga jest albo włączona, albo wyłączona na poziomie całej sieci; obecnie nie ma możliwości nadpisania ustawień dla poszczególnych stron.

### Dostęp do Flagi Funkcjonalności

1. W panelu administracyjnym WordPress przejdź do **Gratis AI Agent → Ustawienia**.
2. Kliknij zakładkę **Flagi Funkcjonalności** (Feature Flags).

### Flagi Kontroli Dostępu (Access Control Flags)

| Flaga | Domyślnie | Opis |
|---|---|---|
| **Restrict to Administrators** | Wyłączony | Po włączeniu tylko użytkownicy z rolą `administrator` mogą otwierać panel czatu Agenta AI. Wszystkie inne role zobaczą zamiast tego komunikat „Skontaktuj się z administratorem”. |
| **Restrict to Network Admins** | Wyłączony | Po włączeniu w sieci multisite tylko Super Admini mogą korzystać z agenta. Blokuje to indywidualnych administratorów stron. Ma pierwszeństwo nad „Restrict to Administrators”, jeśli obie są włączone. |
| **Allow Subscriber Access** | Wyłączony | Po włączeniu użytkownicy z rolą `subscriber` mogą korzystać z interfejsu czatu, ale są ograniczeni do możliwości tylko do odczytu (nie mogą tworzyć postów ani zmieniać ustawień). |
| **Disable for Non-Members** | Wyłączony | Integruje się ze statusem członkostwa Ultimate Multisite. Po włączeniu czat jest ukryty dla stron, które nie mają aktywnego członkostwa. |

### Flagi Brandingowe (Branding Flags)

| Flaga | Domyślnie | Opis |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Wyłączony | Usuwa linię atrybucji marki widoczną na dole widgetu czatu. Zalecane w przypadku wdrożeń typu white-label. |
| **Custom Agent Name** | *(puste)* | Zastępuje domyślny napis „Gratis AI Agent” w nagłówku czatu i menu administracyjnym nazwą Twojego produktu. Pozostaw puste, aby użyć domyślnej nazwy. |
| **Hide Agent Picker** | Wyłączony | Po włączeniu użytkownicy nie mogą przełączać się między pięcioma wbudowanymi agentami. Aktualny agent jest ustawiony na ten, który jest domyślnie skonfigurowany w Ustawienia → Ogólne. |
| **Use Site Icon as Chat Avatar** | Wyłączony | Zastępuje domyślną ikonę AI w nagłówku widgetu czatu ikoną witryny WordPress (ustawioną w Wygląd → Dostosuj → Identyfikacja witryny). |

### Zastosowanie Zmian

Kliknij **Zapisz Ustawienia** (Save Settings) po przełączeniu dowolnej flagi. Zmiany mają zastosowanie natychmiast — nie jest wymagane czyszczenie pamięci podręcznej ani ponowne aktywowanie pluginu.
