---
title: Soluppgångsfilfel
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Fel vid installation av Sunrise-filen

Filen sunrise.php är en specialfil som WordPress letar efter när det startar upp. För att WordPress ska kunna hitta sunrise.php måste filen ligga i **wp-content-mappen**.

När du aktiverar Ultimate Multisite och går igenom installationsguiden (som den på skärmbilden) försöker Ultimate Multisite kopiera vår sunrise.php-fil till wp-content-mappen.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

I de flesta fall lyckas kopieringen och allt fungerar som det ska. Men om något inte är korrekt konfigurerat (till exempel mappbehörigheter) kan du hamna i en situation där Ultimate Multisite inte kan kopiera filen.

Om du läser felmeddelandet som Ultimo visar ser du att det är precis det som har hänt här: **Sunrise copy failed** (Sunrise-kopieringen misslyckades).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

För att lösa problemet kan du helt enkelt kopiera sunrise.php-filen från plugin-mappen wp-ultimo och klistra in den i din wp-content-mapp. När du har gjort det laddar du om guidens sida och kontrollerna bör gå igenom.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Det kan ändå vara en bra idé att göra en generell kontroll av dina mappbehörigheter för att undvika problem i framtiden (inte bara med Ultimate Multisite utan även med andra plugins och teman).

**Hälsokontroll-verktyget** som ingår i WordPress (du hittar det via din huvudsajts **adminpanel > Verktyg > Hälsokontroll**) kan tala om för dig om du har mappbehörigheter som är inställda på värden som kan orsaka problem med WordPress.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
