---
title: Ustawianie stałej Sunrise na Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Ustawianie stałej Sunrise na true w Closte

Niektórzy dostawcy hostingu blokują plik wp-config.php ze względów bezpieczeństwa. Oznacza to, że Ultimate Multisite nie może automatycznie edytować tego pliku, aby dodać stałe niezbędne do działania mapowania domen i innych funkcji. Closte jest jednym z takich dostawców.

Na szczęście Closte oferuje bezpieczny sposób dodawania stałych do pliku wp-config.php. Wystarczy wykonać poniższe kroki:

## W panelu Closte

Najpierw [zaloguj się na swoje konto Closte](https://app.closte.com/), kliknij pozycję Sites w menu, a następnie kliknij link Dashboard przy stronie, nad którą aktualnie pracujesz:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Po lewej stronie ekranu pojawi się kilka nowych pozycji menu. Przejdź do strony **Settings** za pomocą tego menu:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Następnie na stronie **Settings** znajdź zakładkę WP-Config, a w niej pole „Additional wp-config.php content":

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Podczas instalacji Ultimate Multisite musisz dodać stałą sunrise w tym polu. Po prostu dodaj nową linię i wklej poniższy kod. Następnie kliknij przycisk **Save All**.

define('SUNRISE', true);

To wszystko — gotowe. Wróć do kreatora instalacji Ultimate Multisite i odśwież stronę, aby kontynuować proces.
