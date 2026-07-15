---
title: GitHub-snutter
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Slik bruker du Ultimate Multisite-kodesnutter fra GitHub-repositoriet vårt

Det finnes kodesnutter tilgjengelig i GitHub-repositoriet som ofte etterspørres av Ultimate Multisite-brukere som ønsker å legge til små funksjoner, som for eksempel Google Analytics-script på registreringssider eller å skjule en metaboks fra admin-dashboardet.

Denne artikkelen viser deg hvordan du bruker disse kodene, og mer spesifikt hvor du skal plassere dem.

Du finner kodesnuttene på lenken nedenfor.

https://github.com/next-press/wp-ultimo-snippets/

Det finnes to måter å legge til koden på

  1. I temaets functions.php-fil.

  2. Must-Use Plugins (mu-plugins)

# Slik legger du til kodesnutten i temaets functions.php-fil

  1. Logg inn på WordPress-nettverkets admin-dashboard og gå til Utseende > Temaredigering (se skjermbildet nedenfor).

  2. På siden «Rediger temaer» må du sørge for at det aktive temaet ditt er valgt i nedtrekksmenyen øverst til høyre på skjermen (#3 på skjermbildet nedenfor).

  3. Klikk på functions.php-filen under «Temafiler»-seksjonen for å laste inn filen. Bla ned til bunnen og lim inn Ultimate Multisite-kodesnutten du hentet fra GitHub-repositoriet.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Slik oppretter du Must-Use Plugins (mu-plugins)

WordPress har en funksjon som lar deg laste inn egendefinert funksjonalitet kalt «Must-Use Plugins», eller «mu-plugins» for kort.

Disse spesielle mu-pluginsene lastes inn før alle andre vanlige plugins, og de kan ikke deaktiveres. I et multisite-nettverk vil koden i disse mu-pluginsene lastes inn på alle nettstedene i installasjonen din.

1\. Bruk FTP eller SSH for å få tilgang til filsystemet i WordPress-installasjonen din.

2\. Inne i wp-content-mappen i WordPress-installasjonen din oppretter du en ny mappe med navnet: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Opprett en ny PHP-fil på datamaskinen din med navnet wu-snippet.php ved hjelp av Notisblokk eller en annen kodeeditor.

4\. Legg inn Ultimate Multisite-kodesnutten du hentet fra GitHub-repositoriet i filen og lagre den. Du kan også legge til denne koden øverst i kodesnutten for å gi mu-pluginen din et navn.
