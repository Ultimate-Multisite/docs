---
title: Sunrise Filfe fejl
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Fejl ved installation af Sunrise-filen

`sunrise.php`-filen er en særlig fil, som WordPress leder efter under opstartsprocessen (bootstrapping). For at WordPress kan finde `sunrise.php`-filen, skal den være placeret inde i **wp-content mappen**.

Når du aktiverer Ultimate Multisite og går igennem opsætningseguidens trin, som du ser på skærmbilledet, forsøger Ultimate Multisite at kopiere vores `sunrise.php`-fil til wp-content mappen.

<!-- Skærmbillede utilgængeligt: Opsætningseguide-side, der viser trinnet for installation af sunrise.php -->

De fleste gange lykkes det med at kopiere filen, og alt fungerer som forventet. Men hvis noget ikke er sat korrekt op (f.eks. mappe-tilladelser), kan du støde på en situation, hvor Ultimate Multisite ikke kan kopiere filen.

Hvis du læser fejlmeddelelsen fra Ultimo giver dig, vil du se præcis det her: **Sunrise copy failed** (Kopiering af Sunrise fejlede).

<!-- Skærmbillede utilgængeligt: Fejlmeddelelse, der viser at kopieringen af Sunrise fejlede -->

For at løse det kan du blot kopiere `sunrise.php`-filen inde i wp-ultimo plugin mappen og indsætte den i din wp-content mappe. Når du har gjort det, genindlæs opsætningsoversigten, og tjekene bør nu bestå.

<!-- Skærmbillede utilgængeligt: Filadministrator, der viser sunrise.php inde i wp-ultimo plugin mappen --> Uanset hvad, dette kan berettige til en generel gennemgang af dine mappe-tilladelser for at undgå problemer i fremtiden (ikke kun med Ultimate Multisite, men også med andre plugins og themes).

**Health Check tool** (Sundhedstjekværktøjet), som er en del af WordPress (du kan få adgang til det via din hovedsites **admin panel > Tools > Health Check**), kan fortælle dig, om du har mappe-tilladelser sat til værdier, der kan skabe problemer for WordPress.

<!-- Skærmbilledet er ikke tilgængeligt: WordPress Health Check værktøjet viser mappe-tilladelsesstatus -->
