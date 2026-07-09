---
title: Indstilling af Sunrise Constant på Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Indstilling af konstanten Sunrise til sand på Closte {#setting-the-sunrise-constant-to-true-on-closte}

Nogle hostingudbydere låser wp-config.php for sikkerhedens skyld. Det betyder, at Ultimate Multisite ikke automatisk kan redigere filen for at inkludere de nødvendige konstanter til at få domænemapping og andre funktioner til at virke. Closte er en sådan udbyder.

Men Closte tilbyder en måde at tilføje konstanter til wp-config.php på en sikker måde. Du skal blot følge trinene nedenfor:

## På Closte dashboardet {#on-the-closte-dashboard}

Først, [log ind på din Closte konto](https://app.closte.com/), klik på menupunktet Sites, og klik derefter på linket Dashboard for den side, du arbejder på:

<!-- Skærmbillede utilgængeligt: Closte dashboard der viser Sites menu og Dashboard link -->

Du vil blive præsenteret for en række nye menupunkter på venstre side af skærmen. Naviger til siden **Settings** ved hjælp af den menu:

<!-- Skærmbillede utilgængeligt: Closte venstre side menu der viser Settings mulighed -->

Derefter, i **Settings**, find fanen WP-Config, og derefter feltet "Additional wp-config.php content" på den fane:

<!-- Skærmbillede utilgængeligt: Closte Settings side med WP-Config fane der viser Additional wp-config.php content felt -->

I forbindelse med installation af Ultimate Multisite skal du tilføje sunrise konstanten til dette felt. Tilføj blot en ny linje og indsæt linjen nedenfor. Klik derefter på knappen **Save All**.

define('SUNRISE', true);

Det er det, der skal til. Gå tilbage til Ultimate Multisite installationsvejledningen og opdater siden for at fortsætte processen.
