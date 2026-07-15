---
title: Błąd pliku Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Błąd podczas instalacji pliku Sunrise

Plik sunrise.php to specjalny plik, którego WordPress szuka podczas uruchamiania. Aby WordPress mógł wykryć plik sunrise.php, musi on znajdować się w folderze **wp-content**.

Gdy aktywujesz Ultimate Multisite i przechodzisz przez kreator konfiguracji (taki jak na zrzucie ekranu), Ultimate Multisite próbuje skopiować nasz plik sunrise.php do folderu wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

W większości przypadków kopiowanie pliku przebiega pomyślnie i wszystko działa prawidłowo. Jednak jeśli coś nie jest właściwie skonfigurowane (na przykład uprawnienia do folderów), możesz napotkać sytuację, w której Ultimate Multisite nie jest w stanie skopiować pliku.

Jeśli przeczytasz komunikat o błędzie wyświetlany przez Ultimo, zobaczysz, że dokładnie to się tutaj stało: **Sunrise copy failed** (kopiowanie pliku Sunrise nie powiodło się).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Aby to naprawić, po prostu skopiuj plik sunrise.php z folderu pluginu wp-ultimo i wklej go do folderu wp-content. Po wykonaniu tej czynności odśwież stronę kreatora — wszystkie testy powinny zakończyć się pomyślnie.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> W każdym przypadku warto przeprowadzić ogólne sprawdzenie uprawnień do folderów, aby uniknąć problemów w przyszłości (nie tylko z Ultimate Multisite, ale także z innymi pluginami i motywami).

Narzędzie **Kondycja witryny**, które jest częścią WordPressa (możesz uzyskać do niego dostęp przez **panel administracyjny głównej witryny > Narzędzia > Kondycja witryny**), potrafi poinformować Cię, czy masz ustawione uprawnienia do folderów na wartości, które mogą powodować problemy z WordPressem.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
