---
title: Instalacja wtyczki Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instalacja Ultimate Multisite

:::note
Niniejszy samouczek zakłada, że masz już zainstalowany i skonfigurowany WordPress Multisite. Aby dowiedzieć się, jak to zrobić, zapoznaj się z tym poradnikiem [https://www.wpbeginner.com/glossary/multisite/](https://www.wpbeginner.com/glossary/multisite/) autorstwa WP Beginner.
:::

## Instalacja wtyczki

Ultimate Multisite jest dostępny bezpłatnie na stronie [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

W **Panelu administratora sieci** przejdź do **Wtyczki → Dodaj nową wtyczkę**.

![Strona „Dodaj nową wtyczkę” w panelu administratora sieci](/img/installation/add-new-plugin.png)

Wyszukaj **„Ultimate Multisite”** (w cudzysłowach, aby uzyskać dokładne dopasowanie), a pojawi się jako pierwszy wynik. Kliknij **Zainstaluj teraz**.

![Wyniki wyszukiwania pokazujące Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Po zainstalowaniu kliknij **Aktywuj w sieci**, aby aktywować wtyczkę w całej Twojej sieci.

![Wtyczka zainstalowana z przyciskiem „Aktywuj w sieci”](/img/installation/plugin-installed.png)

Po aktywacji zostaniesz automatycznie przekierowany do kreatora konfiguracji.

![Wtyczka aktywowana i przekierowanie do kreatora](/img/installation/plugin-activated.png)

## Kreator konfiguracji

Kreator konfiguracji poprowadzi Cię przez proces konfigurowania Ultimate Multisite w około 10 minut.

### Witamy

Kliknij **Rozpocznij**, aby rozpocząć.

![Ekran powitalny kreatora konfiguracji](/img/installation/wizard-welcome.png)

### Wstępne sprawdzenie

Ten krok sprawdza informacje o Twoim systemie i instalacji WordPress, aby upewnić się, że spełniają one wymagania Ultimate Multisite. Jeśli wszystko wygląda dobrze, kliknij **Przejdź do następnego kroku**.

![Wstępne sprawdzanie pokazujące wymagania systemu](/img/installation/wizard-pre-install-checks.png)

:::note Przycisk „Aktywuj w sieci” (wersja 2.6.1+)
Jeśli Ultimate Multisite został zainstalowany, ale **jeszcze nie aktywowany w sieci** — na przykład, jeśli kliknąłeś **Aktywuj** (dla pojedynczej witryny) zamiast **Aktywuj w sieci** z ekranu wtyczek sieciowych — krok wstępnego sprawdzania to wykryje i wyświetli przycisk **Aktywuj w sieci**.

Kliknięcie **Aktywuj w sieci** aktywuje wtyczkę w całej Twojej sieci multisite. Po aktywacji kreator przejdzie normalnie do kroku instalacji. Nie musisz opuszczać kreatora, aby naprawić stan aktywacji.
:::

### Instalacja

Instalator utworzy niezbędne tabele bazy danych i zainstaluje plik `sunrise.php`, który jest potrzebny do działania Ultimate Multisite. Kliknij **Zainstaluj**, aby kontynuować.

![Krok instalacji pokazujący tabele bazy danych i plik sunrise.php](/img/installation/wizard-installation.png)

### Twoja firma

Wprowadź informacje o swojej firmie i ustaw domyślną walutę. Te informacje będą używane w całej platformie WaaS. Kliknij **Kontynuuj**, gdy skończysz.

![Krok konfiguracji „Twoja firma”](/img/installation/wizard-your-company.png)

### Domyślne treści

Ten krok pozwala zainstalować wstępnie zdefiniowane szablony, produkty i inne przykładowe treści. To świetny sposób na zapoznanie się z funkcjami Ultimate Multisite. Kliknij **Zainstaluj**, aby dodać domyślne treści lub pomiń ten krok, jeśli wolisz zacząć od zera.

![Krok instalacji domyślnych treści](/img/installation/wizard-default-content.png)

### Zalecane wtyczki

Opcjonalnie zainstaluj zalecane wtyczki uzupełniające. Kliknij **Zainstaluj**, aby je dodać, lub pomiń ten krok, aby kontynuować.

![Krok z zalecanymi wtyczkami](/img/installation/wizard-recommended-plugins.png)

### Gotowe!

To wszystko! Instalacja Ultimate Multisite została zakończona. Możesz teraz zacząć tworzyć platformę Website as a Service z **Panelu administratora sieci**.

![Konfiguracja ukończona — ekran „Gotowe”](/img/installation/wizard-ready.png)

![Panel administratora sieci z aktywnym Ultimate Multisite](/img/installation/network-dashboard.png)

Śmiało, baw się dobrze!
