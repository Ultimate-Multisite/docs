---
title: Konstruktor Wtyczek i Piaskownica
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 wprowadza **System Plugin Builder & Sandbox**, który pozwala asystentowi AI generować, aktywować i zarządzać pluginami WordPress na Twojej sieci — wszystko to w bezpiecznym, izolowanym środowisku sandbox.

## Przegląd {#overview}

Plugin Builder umożliwia asystentowi AI pisanie niestandardowych pluginów WordPress w odpowiedzi na polecenia w języku naturalnym. Wygenerowane pluginy są walidowane, przechowywane i aktywowane w warstwie sandbox, zanim w ogóle wpłyną na działanie strony na żywo.

Przykładowe zastosowania to:

- Generowanie lekkich pluginów pomocniczych bez udziału dewelopera.
- Tworzenie prototypów funkcji, które wymagają użycia hooków WordPress lub niestandardowych typów treści (custom post types).
- Tworzenie krótkotrwałych skryptów automatyzacyjnych do operacji wsadowych.

## Generowanie Pluginu za Pomocą AI {#generating-a-plugin-via-ai}

Aby wygenerować plugin, otwórz interfejs czatu Gratis AI Agent i opisz, czego potrzebujesz. Na przykład:

> "Utwórz plugin, który doda niestandardowe powiadomienie administratora na dashboardzie."

AI wykona następujące kroki:

1. Wygeneruje kod PHP pluginu przy użyciu ustrukturyzowanego generowania kodu.
2. Waliduje wynik pod kątem błędów składniowych i niebezpiecznych wzorców.
3. Zapisze wygenerowany plugin do magazynu sandbox.
4. Zwróci potwierdzenie wraz ze slugiem pluginu i przyciskiem **Activate in Sandbox** (Aktywuj w Sandboxie).

Możesz dopracować wynik, kontynuując rozmowę w tym samym wątku, zanim dokonasz aktywacji.

## Aktywacja w Sandboxie {#sandbox-activation}

Aktywacja wygenerowanego pluginu w sandboxie różni się od aktywacji na żywej sieci. Sandbox:

- Uruchamia plugin w izolowanym środowisku WordPress (wp-env).
- Wyłapuje wszelkie błędy PHP, ostrzeżenia lub konflikty hooków.
- Zgłasza wynik aktywacji z powrotem w interfejsie czatu.

Aby aktywować plugin w sandboxie, kliknij przycisk **Activate in Sandbox** w odpowiedzi AI w czacie lub użyj polecenia ze znakiem ukośnika:

```
/activate-plugin <plugin-slug>
```

Statusowe komunikaty potwierdzą, czy aktywacja się powiodła, czy nie. W przypadku błędu, log błędów zostanie wyświetlony w wątku czatu.

## Zarządzanie Wygenerowanymi Pluginami {#managing-generated-plugins}

Wygenerowane pluginy są wymienione w sekcji **Gratis AI Agent → Plugin Builder → Manage Plugins**. Z tego ekranu możesz:

| Akcja | Opis |
|---|---|
| **View source** | Przejrzeć pełny kod PHP pluginu. |
| **Re-activate in sandbox** | Ponownie uruchomić sprawdzenie aktywacji w sandboxie. |
| **Install on network** | Wdrożyć plugin na żywej sieci (wymaga ręcznego potwierdzenia). |
| **Update** | Dostarczyć nową wersję za pomocą AI, zastępując istniejący kod. |
| **Delete** | Usunąć plugin ze magazynu sandbox. Najpierw dezaktywuje go ze wszystkich stron. |

:::warning
**Install on network** wdraża wygenerowany plugin na Twoją żywą sieć multisite WordPress. Przejrzyj kod pluginu, zanim przejdziesz dalej. Gratis AI Agent poprosi o potwierdzenie przed zakończeniem instalacji na żywo.
:::

## Instalowanie Wygenerowanego Pluginu na Sieci {#installing-a-generated-plugin-on-the-network}

Gdy jesteś zadowolony z pluginu z sandboxa, możesz zainstalować go na żywej sieci:

1. Przejdź do **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Kliknij **Install on Network** obok pluginu, który chcesz wdrożyć.
3. Potwierdź okno dialogowe. Plugin zostanie zainstalowany do `wp-content/plugins/` i aktywowany na poziomie sieci.

Alternatywnie, użyj polecenia ze znakiem ukośnika w interfejsie czatu:

```
/install-plugin <plugin-slug>
```

## Aktualizacje Pluginów {#plugin-updates}

Aby zaktualizować wygenerowany plugin, opisz zmianę asystentowi AI w nowej rozmowie:

> "Zaktualizuj plugin dashboard-notice tak, aby powiadomienie było widoczne tylko dla administratorów."

AI wygeneruje nową wersję, która pojawi się w sandboxie obok bieżącej wersji. Przejrzysz różnice (diff) i potwierdzisz, zanim aktualizacja zostanie zastosowana.

## Integracja HookScanner {#hookscanner-integration}

Plugin Builder używa zintegrowanego **HookScanner** do analizy hooków i filtrów zarejestrowanych przez każdy wygenerowany plugin. Wynik HookScanner jest wyświetlany w odpowiedzi czatu i zawiera:

- Zarejestrowane akcje (wywołania `add_action`).
- Zarejestrowane filtry (wywołania `add_filter`).
- Wszystkie hooki znalezione w zależnościach pluginu (pomija katalogi `vendor/` i `node_modules/`).

Pomaga to zrozumieć działanie pluginu, zanim zostanie on aktywowany.

## Rozważania dotyczące bezpieczeństwa {#security-considerations}

- Wygenerowane pluginy są przechowywane oddzielnie od ręcznie zainstalowanych i nie są dostępne za pomocą standardowego ekranu zarządzania pluginami WordPress, dopóki nie zostaną przez Ciebie jawnie zainstalowane na sieci.
- Sandbox używa walidacji ścieżek, aby zapobiec przejściu przez katalogi podczas zapisywania plików pluginów.
- Pluginy zawierające niebezpieczne wywołania funkcji (np. `eval`, `exec`, `system`) są oznaczane podczas walidacji i nie zostaną aktywowane.
