---
title: Weryfikacja migracji suwerennej
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Weryfikacja Migracji Suwerennej {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 zawiera komendy w WP-CLI do weryfikacji migracji suwerennych tenantów. Używaj ich, gdy migracja tenantów, wizyta SSO lub izolowana instalacja nie zachowują się zgodnie z oczekiwaniami.

## Komendy do uruchomienia {#commands-to-run}

Uruchom weryfikację z instalacji WordPress na sieci:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Użyj ID site dla tenantów, które migrujesz. Pierwsza komenda sprawdza, czy dany tenant nie zależy już od danych legacy z poziomu sieci. Druga komenda weryfikuje, czy zadania push suwerenne mogą być przetworzone i opróżnione (drained).

## Typowe błędy {#common-failures}

### Uwierzytelnianie w bazie danych się nie zgadza z hostem {#database-grants-do-not-match-the-host}

Jeśli weryfikacja zgłasza błędy przy uprawnieniach lub użytkownikach piszących, sprawdź skonfigurowany host bazy danych. `localhost`, `127.0.0.1` i nazwa usługi kontenera to różne hosty MySQL dla uprawnień. Zaktualizuj powiązanie hosta tenantów lub uprawnienia w bazie danych, a następnie uruchom ponownie weryfikację.

### Instalacje Bedrock lub lokalne nie mogą się połączyć {#bedrock-or-local-installs-cannot-connect}

Instalacje Bedrock i lokalne socket mogą zgłaszać bazę danych jako `localhost`, podczas gdy runtime łączy się przez znormalizowany adres. W wersji 1.2.0 normalizuje ciągi hostów na tej samej maszynie, ale niestandardowe nadpisy hosta nadal mogą kolidować z uprawnieniami w bazie danych.

### Kolejka asynchronicznego push nie jest opróżniana (drain) {#async-push-queue-does-not-drain}

Jeśli `verify-sovereign-push` się nie kończy, sprawdź Action Scheduler lub skonfigurowany runner asynchroniczny. Usuwaj nieudane zadania dopiero po upewnieniu się, że są bezpieczne do ponownego uruchomienia lub odrzucenia.

### Liczba użytkowników tenantów jest błędna {#tenant-user-count-is-wrong}

Migracja powinna tworzyć użytkowników dla suwerennego tenantu. Jeśli brak oczekiwanego użytkownika instalacyjnego, uruchom ponownie krok provisioningu użytkowników przed ponowną próbą SSO.

### Wizyta SSO jest odrzucana {#sso-visit-is-rejected}

Automatyczne logowanie gościa (stateless tenant autologin) wymaga dopasowania domenu tenanta, kodu PIN źródłowego (origin pin), celu tokena, nonce oraz terminu ważności. Upewnij się, że adres URL tenanta jest poprawny i spróbuj zalogować się wkrótce po wygenerowaniu wizyty SSO.

## Kiedy ponownie spróbować {#when-to-retry}

Ponownie sprawdź wszystko po każdej zmianie infrastruktury. Nie przełączaj ruchu produkcyjnego, nie usuwaj danych źródłowych ani nie usuwaj poświadczeń migracyjnych, dopóki wszystkie kontrole weryfikacyjne się nie powiedzie.
