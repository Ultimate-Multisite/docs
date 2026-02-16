---
title: Zarządzanie stronami
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Zarządzanie stronami

Strony (lub podstrony) to fundament Twojego biznesu WaaS. Ultimate Multisite obsługuje 3 typy stron:

- **Strony klientów** — Strony należące do konkretnych klientów
- **Szablony stron** — Gotowe strony, które klienci mogą wybrać jako punkt wyjścia
- **Strona główna** — Główna strona Twojej sieci

## Przeglądanie stron

Przejdź do **Ultimate Multisite → Sites**, aby zobaczyć wszystkie podstrony w sieci. Każda strona jest oznaczona typem, a dostępne filtry to: Wszystkie strony, Strony klientów, Szablony i Oczekujące.

![Lista stron](/img/admin/sites-list.png)

## Dodawanie nowej strony

Kliknij przycisk **Add Site**, aby utworzyć nową stronę. Musisz podać:

- **Site Title** — Nazwa nowej strony
- **Site URL** — Domena lub ścieżka strony
- **Site Type** — Typ strony: strona klienta, szablon lub zwykła strona

Opcja **Copy Site** pozwala utworzyć nową stronę na podstawie istniejącego szablonu. Po jej włączeniu możesz wybrać szablon, który posłuży jako punkt wyjścia. Upewnij się, że opcja **Copy Media on Duplication** jest włączona, jeśli chcesz skopiować również pliki multimedialne.

## Zarządzanie istniejącą stroną

Kliknij **Manage** przy dowolnej stronie, aby otworzyć stronę **Edit Site**. Znajdziesz tam:

### Podstawowe informacje

Nazwa strony, typ, identyfikator strony oraz opis. Zobaczysz też przypisaną domenę, powiązane członkostwo i konto klienta, do którego należy strona.

### Opcje strony

Tutaj konfigurujesz możliwości i limity strony:

- **Limity odwiedzin** — Maksymalna liczba wizyt na stronie
- **Limity kont użytkowników** — Limity dla poszczególnych ról użytkowników
- **Przestrzeń dyskowa** — Limit miejsca na dane strony
- **Własna domena** — Włączenie mapowania domeny dla tej strony
- **Widoczność pluginów i motywów** — Określ, które pluginy i motywy mają być widoczne, ukryte lub automatycznie aktywowane

Domyślnie strony korzystają z limitów ustawionych na poziomie członkostwa. Ustawienie limitów na poziomie strony nadpisuje ustawienia członkostwa.

### Powiązania

Poniżej opcji strony znajdziesz informacje o:

- **Przypisanych domenach** powiązanych ze stroną
- **Członkostwie**, do którego należy strona
- **Koncie klienta** przypisanym do strony

### Prawy panel boczny

Po prawej stronie możesz:

- **Włączyć lub wyłączyć stronę** za pomocą przełącznika
- **Zmienić typ strony** lub przypisać ją do innego właściciela
- **Ustawić obrazek/miniaturę strony** (wyświetlany na frontendzie dla szablonów stron)
- **Usunąć stronę** na stałe

:::warning
Usunięcie strony jest nieodwracalne. Strona i cała jej zawartość zostaną trwale usunięte.
:::
