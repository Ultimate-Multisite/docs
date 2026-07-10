---
title: Ofte stillede spørgsmål
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# Ofte stillede spørgsmål {#frequently-asked-questions}

Her er nogle **Ofte stillede spørgsmål**, som ofte dukker op i supportanmodninger.

  * **Hvad er Ultimate Multisite?**

Ultimate Multisite er en WordPress plugin, der er lavet til WordPress multisite installationer. Den forvandler din WordPress-installation til et premium netværk af sider – ligesom [WordPress.com](https://WordPress.com) – hvilket giver kunder mulighed for at oprette sider via månedlige, kvartalsvise eller årlige gebyrer (du kan også oprette Gratis planer).

  * **Vil Ultimate Multisite virke uden Multisite?**

Nej. Ultimate Multisite kræver WordPress multisite, undermappe eller subdomain.

  * **Hvad er kravene til Ultimate Multisite?**

Ultimate Multisite kræver:

**WordPress Version** : v5.3+ (Anbefalet: Sidste stabile version)
**PHP Version** : 7.4.x (Støtte til > 8.0 kommer snart)
**MySQL Version** : v5+ (Anbefalet: Version 5.6, hvis du ikke har 8.0 tilgængelig hos din hostingudbyder)

_Multisite (subdomæne eller undermappe) skal også aktiveres._ [Sådan installerer du WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **Vil Ultimate Multisite virke med Multisite med undermapper?**

Ja. Ultimate Multisite understøtter både undermappeinstallationer og multisiteinstallationer med undermapper.

  * **Vil Ultimate Multisite virke med Multisite med subdomæner?**

Ja. Ultimate Multisite understøtter både undermappeinstallationer og subdomaininstallationer.

  * **Kan jeg bruge Ultimate Multisite til at begrænse, hvilke Plugins og Themes brugere må bruge?**

Ja. Med Ultimate Multisite kan du vælge, hvilke plugins og themes der er tilgængelige for hver plan i dit netværk.

  * **Kan jeg bruge Ultimate Multisite til at begrænse antallet af opslag en bruger kan oprette på sin side?**

Ja. Med Ultimate Multisite kan du oprette postkvoter for **alle tilgængelige posttyper** på dit netværk. Du kan også begrænse antallet af brugere, som admin kan invitere, **mængden af diskplads**, og meget mere.

  * **Understøtter Ultimate Multisite Site Templates?**

Ja. Med Ultimate Multisite kan du oprette så mange Site Templates som du vil. Site Templates er ikke themes; de er almindelige sites på dit netværk. Du kan aktivere plugins, themes og tilpasse det Site Template på alle måder, du ønsker. Hvis en bruger vælger dette template, vil deres site blive oprettet som en kopi af template'en med alle tilpasninger på plads.

Du kan også sætte et bestemt template for en plan. Ved at gøre det vil enhver bruger, der tilmelder sig den plan, få sit site oprettet som en duplikat af det Site Template.

  * **Integrerer Ultimate Multisite med WooCommerce?**

Ja!

Hvis du ønsker, at dine netværksbrugere skal have WooCommerce tilgængeligt for dem, så de kan opsætte butikker, er det muligt ved hjælp af Ultimate Multisite. Du kan endda begrænse antallet af produkter, som dine kunder vil kunne oprette på hver plan-tier.

Når det kommer til abonnementsbetalinger for Ultimate Multisite, kan du bruge [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/) til at lade dine Ultimate Multisite kunder betale ved hjælp af WooCommerce gateways på din hovedsite. På den måde kan du udnytte den enorme bibliotek af betalingsgateways udviklet til WooCommerce og bruge dem til at fakturere dine Ultimate Multisite kunder.

  * **Er der en måde at migrere abonnementer fra WPMUDEV Pro Sites?**

Ja, Ultimate Multisite tilbyder nu [et nyttigt værktøj til at hjælpe dig med at migrere](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) din Pro Sites netværk.

  * **Hvorfor er fanen "Tilladte plugins" tom på min Plan Redigeringsside?**

Ultimate Multisite lader dig kun tillade eller nægte adgang til plugins, der ikke er aktiveret i dit netværk. Når et plugin er aktiveret i netværket, vil det af natur blive indlæst som standard på alle sider i dit netværk.

Hvis du ikke ser nogen plugins på fanen "Tilladte plugins", tjek om det ønskede plugin er aktivt i netværket eller ej.

  * **Kan jeg bruge min egen design til Prisseddel?**

Ja. Siden version 1.4.0 understøtter Ultimate Multisite skabelon-overstyringer (template overrides).

  * **Virker Ultimate Multisite med WP Engine?**

Ja. Ultimate Multisite har altid været understøttet af WP Engine, men for at få domænenavngivningen til at virke krævede det tidligere manuelle ekstra trin fra administrator (at tilføje domænet til WP Engine-panelet). **Dette er ikke længere tilfældet siden version 1.6.0.** Ultimate Multisite integreres direkte med WP Engine API'en, og domæner tilføjes automatisk til panelet efter mapping.

  * **Hvilken hostingudbyder anbefaler du?**

Ultimate Multisite bør fungere med enhver hostingudbyder. Den eneste forskel er, at nogle hostingfirmaer som Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane og [Runcloud.io](http://Runcloud.io) har en tættere integration for domænenavngivningsmuligheder, så de virker "out of the box". For andre hostings kan du skulle opsætte domænenavngivningen manuelt.
