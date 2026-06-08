---
title: Odwołanie do Hooków
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# Odniesienie do hooków

Automatycznie wygenerowana dokumentacja dla wszystkich **59 akcji** i **115 filtrów** w Ultimate Multisite.

## Akcje

- [auth_redirect](./Actions/auth_redirect) — Wyzwala się przed przekierowaniem związanym z uwierczeniem.
- [set_auth_cookie](./Actions/set_auth_cookie) — Wyzwala się natychmiast przed ustawieniem ciasteczka uwierczeniowego.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — Wyzwala się natychmiast przed ustawieniem ciasteczka uwierczeniowego dla zalogowanego użytkownika.
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — Pozwala deweloperom na dodanie własnych integracji dostawców hostingu za pomocą pluginów WordPress.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — Wyzwala się, gdy wszystkie zależności zostały załadowane.
- [wu_activation](./Actions/wu_activation) — Pozwala innym częściom pluginu dołączać swoje rutyny aktywacyjne.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — Pozwala deweloperom pluginów podpiąć funkcje, które mają być wyzwolone po zmianie szablonu witryny przez użytkownika lub superadmina.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — W niektórych przypadkach będziemy musieli załadować dodatkowe elementy, aby obsłużyć akcje.
- [wu_before_search_models](./Actions/wu_before_search_models) — Wyzwala się przed przetworzeniem zapytania wyszukiwania.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — Pozwala deweloperom na wprowadzenie dodatkowych zmian w obiekcie koszyka.
- [wu_cart_setup](./Actions/wu_cart_setup) — Pozwala deweloperom na wprowadzenie dodatkowych zmian w obiekcie koszyka.
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — Wyzwala się przed dodaniem pola do formularza płatności.
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — Pozwala deweloperom na wyzwolenie dodatkowych hooków.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — Przed przetworzeniem płatności.
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — Wyzwala się po pełnym złożeniu zamówienia płatności.
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab_widgets) — Pozwala deweloperom pluginów na dodanie widżetów do panelu rozszerzonego dashboardu sieci.
- [wu_dashboard_widgets](./Actions/wu_dashboard_widgets) — Pozwala deweloperom pluginów na dodanie widżetów do panelu rozszerzonego dashboardu sieci.
- [wu_deactivation](./Actions/wu_deactivation) — Pozwala innym częściom pluginu dołączać swoje rutyny dezaktywacyjne.
- [wu_delete_this-object_id](./Actions/wu_delete_this-object_id) — Pozwala deweloperom pluginów na dodanie akcji do procesu usuwania.
- [wu_domain_became_primary](./Actions/wu_domain_became_primary) — Wyzwala się, gdy domena staje się główną domeną dla witryny.
- [wu_domain_created](./Actions/wu_domain_created) — Wyzwala się, gdy dodawany jest nowy mapping domeny.
- [wu_domain_mapping_load](./Actions/wu_domain_mapping_load) — Wyzwala się po załadowaniu naszego głównego Domain Mapping.
- [wu_domain_mapping_register_filters](./Actions/wu_domain_mapping_register_filters) — Niektóre pluginów zapisują URL, zanim mapping był aktywny, lub budują URL w sposób, który nie jest uwzględniony.
- [wu_duplicate_site](./Actions/wu_duplicate_site) — Pozwala deweloperom na podpięcie hooka po skopiowaniu witryny.
- [wu_enqueue_extra_hooks](./Actions/wu_enqueue_extra_hooks) — Pozwala deweloperom pluginów na dodanie dodatkowych hooków.
- [wu_flush_known_caches](./Actions/wu_flush_known_caches) — Hook do dodatkowego czyszczenia.
- [wu_handle_add_new_domain_modal](./Actions/wu_handle_add_new_domain_modal) — Wyzwala się przed obsługą żądania modalu dodawania nowej domeny.
- [wu_handle_customer_meta_fields](./Actions/wu_handle_customer_meta_fields) — Pozwala deweloperom pluginów na zapisywanie metadanych na różne sposoby, jeśli zajdzie taka potrzeba.
- [wu_handle_user_meta_fields](./Actions/wu_handle_user_meta_fields) — Pozwala deweloperom pluginów na zapisywanie metadanych użytkownika na różne sposoby, jeśli zajdzie taka potrzeba.
- [wu_magic_link_invalid_token](./Actions/wu_magic_link_invalid_token) — Wyzwala się, gdy napotkano nieprawidłowy token magicznego linku.
- [wu_magic_link_login](./Actions/wu_magic_link_login) — Wyzwala się po zalogowaniu użytkownika za pomocą magicznego linku.
- [wu_maybe_create_customer](./Actions/wu_maybe_create_customer) — Pozwala deweloperom pluginów na wykonanie dodatkowych czynności, gdy dodawany jest klient.
- [wu_mcp_abilities_registered](./Actions/wu_mcp_abilities_registered) — Wyzwala się po zarejestrowaniu uprawnień.
- [wu_get_user_id_by_email] — Pozyskuje ID użytkownika na podstawie adresu e-mail.

---

## Wprowadzenie do API

API to zestaw reguł i protokołów, które pozwalają różnym programom i systemom komunikować się ze sobą. W kontekście WordPressa, API pozwala na programistyczne zarządzanie treścią, użytkownikami i funkcjonalnościami bez konieczności ręcznej interwencji.

### Kluczowe koncepcje

1. **Endpoint:** Jest to unikalny adres URL, który wskazuje na konkretną funkcjonalność API (np. `/wp/v2/posts`).
2. **Metoda HTTP:** Określa, jaką akcję chcemy wykonać (np. `GET` do pobierania danych, `POST` do tworzenia nowych danych, `PUT` do aktualizacji danych, `DELETE` do usuwania danych).
3. **Parametry:** Dodatkowe informacje przekazywane do endpointu, które filtrują lub modyfikują żądanie (np. `?status=publish`).
4. **Autoryzacja:** Mechanizm weryfikacji, czy użytkownik ma prawo do wykonania żądania (np. klucze API lub tokeny OAuth).

### Przykład użycia (Konceptualny)

Aby pobrać ostatnie 10 artykułów, wyślemy żądanie `GET` do endpointu `/wp/v2/posts` z parametrem `?per_page=10`.

---

## Struktura odpowiedzi JSON

Większość interakcji z API zwraca dane w formacie JSON (JavaScript Object Notation), który jest lekki i łatwy do parsowania.

**Przykład:**

```json
{
  "ok": true,
  "result": [
    {
      "id": 101,
      "title": "Jak używać API",
      "content": "Szczegółowy przewodnik po API.",
      "date": "2023-10-27"
    }
  ]
}
```

---

## Podsumowanie

API jest niezbędnym narzędziem dla nowoczesnego rozwoju webowego. Zamiast budować funkcjonalności od zera, można je "podpiąć" do istniejących systemów za pomocą API, co oszczędza czas i zwiększa skalowalność.

***

*(Uwaga: Powyższy tekst jest ogólnym wprowadzeniem do API i nie jest bezpośrednio powiązany z listą hooków/akcji, ale stanowi kontekst dla programistycznego wykorzystania tych mechanizmów.)*
