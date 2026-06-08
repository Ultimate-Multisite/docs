---
title: Export & Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Exportera & Importera

Ultimate Multisite 2.9.0 lägger till ett verktyg för **Export & Import** för en enskild webbplats under **Tools > Export & Import**. Använd det när du behöver packa en WordPress-webbplats som en ZIP-fil, återställa den ZIP-filen eller flytta en webbplats mellan kompatibla Ultimate Multisite- och enskilda WordPress-installationer.

## Nödvändiga behörigheter

Du måste logga in som en administratör som har tillgång till WordPress-menyn **Tools** på den webbplats som ska exporteras eller importeras. På ett multisite-nätverk ska du använda ett nätverksadministratörskonto när du exporterar eller importerar sub-sajter från nätverksnivåverktyg i Ultimate Multisite.

ZIP-nedladdningar från exporten serveras via en autentiserad nedladdningspunkt, så håll admin-sessionen aktiv tills nedladdningen är klar och dela inte genererade nedladdnings-URL:er offentligt.

## Exportera en webbplats till en ZIP

1. I WordPress-admin för den webbplats du vill kopiera, gå till **Tools > Export & Import**.
2. Öppna exportområdet och välj den webbplats du vill packa.
3. Välj det valfria innehållet du vill inkludera, till exempel uppladdningar, plugins och teman, när dessa alternativ finns tillgängliga.
4. Starta exporten och vänta tills processen är klar. Stora webbplatser kan behöva slutföras i bakgrunden innan ZIP-filen är redo.
5. Ladda ner den färdiga ZIP-filen från exportlistan.

Förvara ZIP-filen på en säker plats. Den kan innehålla webbplatsinnehåll, inställningar, mediefiler och valda kodresurser.

## Vad exporten inkluderar

En export-ZIP kan innehålla:

- Webbplatsens valda datainnehåll och konfiguration.
- Uppladdade mediefiler när uppladdningar inkluderas.
- Plugins och teman när dessa alternativ väljs.
- Importmetadata som används av Export & Import-verktyget för att återuppbygga webbplatsen på målinstallationen.

Den exakta storleken på ZIP-filen beror på mängden media, de valda plugins och teman, och storleken på webbplatsens databassistabeller.

## Importera en webbplats från en ZIP

1. Gå till **Tools > Export & Import** på den destinationens WordPress-webbplats.
2. Öppna importområdet och ladda upp ZIP-filen som skapades av Export & Import-verktyget.
3. Ange en ersättnings-URL om webbplatsen ska använda en ny adress, eller lämna fältet tomt för att behålla den ursprungliga URL:en.
4. Välj om du vill ta bort den uppladdade ZIP-filen efter att importen är klar.
5. Klicka på **Begin Import**.
6. Övervaka den pågående importen tills den är klar. Använd **Cancel Import** endast om du behöver avbryta processen innan den är slutförd.
7. Granska den importerade webbplatsen innan du tillåter normal trafik eller kundåtkomst.

På en enskild WordPress-installation ersätter import av en ZIP-fil den nuvarande webbplatsen med den importerade webbplatsen. Skapa en fullständig backup av målsajten innan du börjar, och undvik att starta flera importer för samma webbplats samtidigt.

## Begränsningar och kompatibilitetsanteckningar

- Mycket stora uppladdningskataloger eller medielbibliotek kan resultera i stora ZIP-filer. Bekräfta PHP-uppladdningsgränser, exekveringsgränser, diskutrymme, minne och servertimeout-inställningar innan du exporterar eller importerar stora webbplatser.
- Mycket stora medielbibliotek kan behöva flyttas under ett underhållsfönster med låg trafik.
- Den målsättande WordPress-installationen bör köra kompatibla versioner av WordPress, PHP, Ultimate Multisite, plugins och teman.
- En import till en enskild webbplats ersätter målsajten. Det är inget sammanslagningsverktyg.
- Flyttar från multisite till enskild webbplats och från enskild webbplats till multisite stöds endast när målmiljön kan köra de exporterade webbplatsens plugins, teman, URL:er och nödvändiga Ultimate Multisite-komponenter.
- Håll ZIP-filen privat. Den kan innehålla datainnehåll, uppladdade filer och konfigurationsdetaljer från den exporterade webbplatsen.

För äldre nätverksnivå-exportflöden, se [Site Export](/user-guide/administration/site-export).
