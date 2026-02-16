---
title: Vanliga frågor
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# Vanliga frågor

Här är några **vanliga frågor** som ofta dyker upp i supportärenden.

  * **Vad är Ultimate Multisite?**

Ultimate Multisite är ett WordPress-plugin, skapat för WordPress multisite-installationer, som förvandlar din WordPress-installation till ett premium-nätverk av webbplatser – liknande [WordPress.com](https://WordPress.com) – där kunder kan skapa webbplatser mot månads-, kvartals- eller årsavgifter (du kan även skapa gratisplaner).

  * **Fungerar Ultimate Multisite utan Multisite?**

Nej. Ultimate Multisite kräver WordPress multisite, med underkatalog eller subdomän.

  * **Vilka krav finns för Ultimate Multisite?**

Ultimate Multisite kräver:

**WordPress-version**: v5.3+ (Rekommenderat: Senaste stabila versionen)  
**PHP-version**: 7.4.x (Stöd för > 8.0 kommer snart)  
**MySQL-version**: v5+ (Rekommenderat: Version 5.6, om du inte har 8.0 tillgängligt hos din webbhotellsleverantör)

_Multisite (subdomän eller underkatalog) måste också vara aktiverat._ [Så installerar du WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **Fungerar Ultimate Multisite med Multisite med underkataloger?**

Ja. Ultimate Multisite stöder både installationer med underkataloger och subdomäner.

  * **Fungerar Ultimate Multisite med Multisite med subdomäner?**

Ja. Ultimate Multisite stöder både installationer med underkataloger och subdomäner.

  * **Kan jag använda Ultimate Multisite för att begränsa vilka plugins och teman användare kan använda?**

Ja. Med Ultimate Multisite kan du välja vilka plugins och teman som är tillgängliga för varje plan i ditt nätverk.

  * **Kan jag använda Ultimate Multisite för att begränsa antalet inlägg en användare kan skapa på sin webbplats?**

Ja. Med Ultimate Multisite kan du sätta inläggskvoter för **alla tillgängliga inläggstyper** i ditt nätverk. Du kan också begränsa antalet användare som administratören kan bjuda in, **mängden diskutrymme** och mycket mer.

  * **Stöder Ultimate Multisite webbplatsmallar?**

Ja. Med Ultimate Multisite kan du skapa så många webbplatsmallar du vill. Webbplatsmallar är inte teman, de är vanliga webbplatser i ditt nätverk. Du kan aktivera plugins, teman och anpassa webbplatsmallen precis som du vill. Om en användare väljer den mallen kommer hans eller hennes webbplats att skapas som en kopia av mallen, med alla anpassningar på plats.

Du kan också koppla en specifik mall till en plan. Genom att göra det kommer varje användare som registrerar sig på den planen att få sin webbplats skapad som en kopia av den webbplatsmallen.

  * **Integrerar Ultimate Multisite med WooCommerce?**

Ja!

Om du vill att dina nätverksanvändare ska ha tillgång till WooCommerce och kunna skapa egna butiker, är det möjligt med Ultimate Multisite. Du kan till och med begränsa antalet produkter dina kunder kan skapa på varje plannivå.

När det gäller prenumerationsbetalningar för Ultimate Multisite kan du använda [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/) för att låta dina Ultimate Multisite-kunder betala via WooCommerce-betalningslösningar på din huvudwebbplats. På så sätt kan du dra nytta av det enorma biblioteket av betalningslösningar som utvecklats för WooCommerce och använda dem för att fakturera dina Ultimate Multisite-kunder.

  * **Finns det något sätt att migrera prenumerationer från WPMUDEV Pro Sites?**

Ja, Ultimate Multisite erbjuder nu [ett användbart verktyg för att hjälpa dig migrera](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) ditt Pro Sites-nätverk.

  * **Varför är fliken "Tillåtna plugins" tom på sidan för redigering av min plan?**

Ultimate Multisite låter dig endast tillåta eller neka åtkomst till plugins som inte är nätverksaktiverade i ditt nätverk. När ett plugin är nätverksaktiverat laddas det automatiskt på alla webbplatser i ditt nätverk.

Om du inte ser några plugins listade under fliken "Tillåtna plugins", kontrollera om det önskade pluginet är nätverksaktiverat eller inte.

  * **Kan jag använda min egen design för pristabellen?**

Ja. Sedan version 1.4.0 stöder Ultimate Multisite mallöverskridningar.

  * **Fungerar Ultimate Multisite med WP Engine?**

Ja. Ultimate Multisite har alltid stötts av WP Engine, men tidigare krävdes manuella extra steg från administratören för att få domänmappning att fungera (att lägga till domänen i WP Engine-panelen). **Detta krävs inte längre sedan version 1.6.0.** Ultimate Multisite integrerar direkt med WP Engine API och domäner läggs till automatiskt i panelen efter mappning.

  * **Vilken webbhotellsleverantör rekommenderar ni?**

Ultimate Multisite bör fungera med vilken webbhotellsleverantör som helst. Den enda skillnaden är att vissa webbhotell som Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane och [Runcloud.io](http://Runcloud.io) har en tätare integration för domänmappning, så det fungerar direkt ur lådan. För andra webbhotell kan du behöva konfigurera domänmappning manuellt.
