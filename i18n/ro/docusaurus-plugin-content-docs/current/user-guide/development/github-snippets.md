---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Cum să folosești fragmentele de cod Ultimate Multisite din repository-ul nostru GitHub

În repository-ul GitHub există fragmente de cod solicitate frecvent de utilizatorii Ultimate Multisite care doresc să adauge funcționalități simple, cum ar fi integrarea unui script Google Analytics pe paginile de înregistrare sau ascunderea unei casete meta din dashboard-ul de administrare.

Acest articol îți va arăta cum să folosești aceste coduri și, mai exact, unde să le plasezi.

Poți găsi fragmentele de cod accesând link-ul de mai jos.

https://github.com/next-press/wp-ultimo-snippets/

Există 2 modalități de a adăuga codul:

  1. În fișierul functions.php al temei tale.

  2. Plugin-uri Must-Use (mu-plugins)

# Cum să adaugi fragmentul de cod în fișierul functions.php al temei tale

  1. Conectează-te la dashboard-ul de administrare al rețelei WordPress și navighează la Teme > Editor temă (vezi captura de ecran de mai jos).

  2. Pe pagina „Editare teme", asigură-te că ai selectată tema activă în câmpul dropdown situat în partea dreaptă sus a ecranului (nr. 3 în captura de ecran de mai jos).

  3. Dă clic pe fișierul functions.php din secțiunea „Fișiere temă" pentru a-l încărca. Derulează până jos și lipește fragmentul de cod Ultimate Multisite pe care l-ai obținut din repository-ul GitHub.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Cum să creezi Plugin-uri Must-Use (mu-plugins)

WordPress dispune de o funcționalitate care îți permite să încarci cod personalizat numit „Plugin-uri Must-Use" sau, pe scurt, „mu-plugins".

Aceste mu-plugins speciale sunt încărcate înaintea tuturor celorlalte plugin-uri obișnuite și nu pot fi dezactivate. Într-o rețea multisite, codul din aceste mu-plugins va fi încărcat pe toate site-urile din instalarea ta.

1\. Folosește FTP sau SSH pentru a accesa sistemul de fișiere al instalării tale WordPress.

2\. În directorul wp-content al instalării tale WordPress, creează un nou director numit: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Creează un nou fișier PHP pe computerul tău numit wu-snippet.php folosind Notepad sau orice editor de cod.

4\. Plasează fragmentul de cod Ultimate Multisite pe care l-ai obținut din repository-ul GitHub în fișier și salvează-l. Poți adăuga și acest cod în partea de sus a fragmentului pentru a eticheta mu plugin-ul tău.
