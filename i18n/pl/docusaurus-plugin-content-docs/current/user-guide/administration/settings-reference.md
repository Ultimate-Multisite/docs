---
title: Dokumentacja ustawień
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Dokumentacja ustawień

Ta strona śledzi ustawienia, które wpływają na codzienną administrację oraz ostatnie zmiany zachowania w Ultimate Multisite.

## Inne opcje

Obszar **Inne opcje** pojawia się w **Ultimate Multisite > Settings > Login & Registration**.

| Ustawienie | Opis |
|---|---|
| **Włącz Jumper** | Pokazuje narzędzie szybkiej nawigacji Jumper w obszarze administracyjnym. Użyj go, aby przechodzić bezpośrednio do ekranów Ultimate Multisite, obiektów sieci i obsługiwanych miejsc docelowych administracji. Wyłącz je, jeśli nie chcesz, aby ten skrót był widoczny. |

## Raportowanie błędów i telemetria

Poprzednie ustawienie zgody na raportowanie błędów zostało usunięte ze strony ustawień. Anonimowa telemetria jest wyłączona i nie ma przełącznika UI, który by ją włączał.

Jeśli utrzymujesz wewnętrzne runbooki lub zrzuty ekranu strony ustawień, usuń odniesienia do starego pola zgody na raportowanie błędów, aby administratorzy nie szukali ustawienia, którego już nie ma.

## Ustawienia importu/eksportu

Karta ustawień **Import/Export** opisuje, które ustawienia kontroluje, i prowadzi bezpośrednio do **Ultimate Multisite > Site Export** dla archiwów witryny i sieci. Użyj karty ustawień do konfiguracji importu/eksportu, użyj **Tools > Export & Import** dla przepływu pracy eksportu/importu pojedynczej witryny, a narzędzia Site Export użyj, gdy potrzebujesz pełnego archiwum Network Export.

## Ostrzeżenie o saldzie Domain Seller HostAfrica

Gdy dodatek Domain Seller jest połączony z HostAfrica, administratorzy sieci widzą teraz możliwe do odrzucenia ostrzeżenie o niskim saldzie, gdy saldo konta resellera jest zbyt niskie do niezawodnego przetwarzania rejestracji lub odnowień domen.

Traktuj to powiadomienie jako ostrzeżenie operacyjne: doładuj saldo resellera HostAfrica przed akceptowaniem kolejnych płatnych rejestracji domen, a następnie wróć do ustawień Domain Seller lub ekranu monitorowania domen, aby potwierdzić, że rejestracje i odnowienia mogą normalnie kontynuować działanie.

## Ustawienia łącznika dostawcy AI

Ustawienia łącznika dostawcy AI pokazują teraz tylko obsługiwane pule kont OAuth:

| Dostawca | Przepływ konfiguracji |
|---|---|
| **Anthropic Max** | Połącz jedno lub więcej kont Anthropic Max za pomocą przycisku OAuth. Użyj ręcznej opcji awaryjnej OAuth, gdy przeglądarka w trybie sandbox nie może automatycznie ukończyć przekierowania. |
| **OpenAI ChatGPT/Codex** | Połącz konta ChatGPT przez ten sam przepływ pracy puli OAuth. Operacje obsługiwane przez łącznik mogą używać wywołań narzędzi ChatGPT Codex po połączeniu konta. |
| **Google AI Pro** | Połącz konta Google AI Pro przez OAuth, a następnie odśwież łącznik, jeśli lista kont nie zaktualizuje się natychmiast. |

Cursor Pro nie jest już obsługiwanym dostawcą. Usuń stare wewnętrzne zrzuty ekranu, runbooki lub kroki onboardingu, które wspominają pola konfiguracji Cursor Pro albo ścieżki łącznika.

Podczas dodawania lub usuwania kont dostawcy wprowadź prawidłowy adres e-mail dla konta, które jest odświeżane lub usuwane, i zapisz ustawienia dostawcy przed testowaniem operacji obsługiwanych przez łącznik.
