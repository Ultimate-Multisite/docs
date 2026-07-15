---
title: Eroare Fișier Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Eroare la Instalarea Fișierului Sunrise

Fișierul sunrise.php este un fișier special pe care WordPress îl caută în timpul procesului de inițializare. Pentru ca WordPress să poată detecta fișierul sunrise.php, acesta trebuie să fie localizat în **folderul wp-content**.

Când activezi Ultimate Multisite și parcurgi asistentul de configurare precum cel din captura de ecran, Ultimate Multisite încearcă să copieze fișierul nostru sunrise.php în folderul wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

De cele mai multe ori, reușim să copiem fișierul cu succes și totul funcționează. Totuși, dacă ceva nu este configurat corect (permisiunile folderului, de exemplu), te poți confrunta cu o situație în care Ultimate Multisite nu poate copia fișierul.

Dacă citești mesajul de eroare afișat de Ultimo, vei vedea că exact asta s-a întâmplat aici: **Copierea Sunrise a eșuat**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Pentru a rezolva această problemă, poți pur și simplu să copiezi fișierul sunrise.php din folderul pluginului wp-ultimo și să-l lipești în folderul tău wp-content. După ce faci asta, reîncarcă pagina asistentului și verificările ar trebui să treacă.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> În orice caz, această situație ar putea justifica o verificare generală a permisiunilor folderelor tale pentru a evita probleme în viitor (nu doar cu Ultimate Multisite, ci și cu alte pluginuri și teme).

Instrumentul **Health Check** care face parte din WordPress (îl poți accesa din **panoul de administrare al site-ului principal > Unelte > Health Check**) îți poate spune dacă ai permisiunile folderelor setate la valori care ar putea cauza probleme cu WordPress.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
