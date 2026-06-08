---
title: Support Tickets Changelog
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Ändringslogg för Supportärenden

### 1.0.4 - 2026-05-05
* Förbättrat: Tog bort `vendor/`-katalogen från Git-spårning (detta täcks redan av `.gitignore`), vilket minskar storleken på repositoryt.
* Förbättrat: Testat upp till WordPress 7.0.

### 1.0.3 - 2026-05-01
* Fixat: Accepterar nollvärden i sätarna för nollvärdesacceptabla ticket-modeller.
* Fixat: Lagrar alla ärenden i globala, nätverksövergripande tabeller för korrekt multisite-stöd.
* Fixat: Döljer personalfält och åtgärdar omdirigering till blanka sidor på formuläret för nya ärenden från kunder.
* Fixat: Ersätter ogiltiga `add_meta()`-anrop med korrekt `update_meta()` för metadataförvaring.
* Fixat: Ersätter okänd capability-kontroll med korrekt `wu_view_all_support_tickets`.
* Fixat: Lägger till saknade AJAX-hanterare för ärendestatus, tilldelning och snueredigering.
* Fixat: Korrigerar metoden för att upptäcka personalrespons i ärendevyerna.
* Fixat: Konsoliderar dubbla svarhanterare och synkroniserar nonce-aktornamn.
* Fixat: Lägger till saknad frontend-vy för shortcoden `[wu_submit_ticket]`.
* Fixat: Lägger till saknad `user_id`-kolumn och fixar metoden `Support_Ticket::get_user_id()`.
* Fixat: Tar bort extra dubbelcitat i prioriteringsfilteralternativet.
* Fixat: Lägger till panel för hantering av ärenden för nätverksadministratörer för superadministratörer.
* Förbättrat: Konsoliderar admin-CSS i ett enda externt stilblad.
* Förbättrat: Tar bort "Settings"-underkatalogen från subsite-adminmenyn.
* Förbättrat: Laddar endast frontend-resurser villkorligt på supportärendesidor.
* Förbättrat: Hoppar över pluginets autoloader när Bedrock root autoloader redan har laddat beroenden.

### 1.0.2 - 2025-12-11
* Tillagt: Fullständig visningsfunktionalitet för ärenden i både admin och frontend.
* Tillagt: AJAX-hanterare för inlämning av svar på ärenden.
* Tillagt: Stöd för funktionalitet att svara på ärenden med korrekt formulärhantering.
* Tillagt: Korrekt visning av meddelanden för ärendeinlämningar och svar i admin.
* Tillagt: Automatisk koppling av ärenden till den inloggade användaren vid kundens egna inlämningar.
* Tillagt: Säkerhetsförbättring för att förhindra att kunder kan ändra ägandeskap över ärenden.
* Tillagt: Saknade hjälpfunktioner (`wu_format_date`, `wu_user_can_view_ticket`, etc.).
* Tillagt: Korrekt nedladdning och hantering av bilagor.
* Tillagt: E-postmeddelandesystem för svar på ärenden och statusändringar.
* Fixat: Ärendesvarsformuläret inkluderar nu nödvändigt ärendets ID.
* Fixat: Problem med synlighet av meddelanden i admin-vyer för ärenden.
* Fixat: Syntaxfel i supportärendefunktioner.
* Förbättrat: Databasstruktur med korrekt fråge- och schemaklass för svar och bilagor.
* Förbättrat: Migration till riktiga egenskaper istället för attribut för ticket-modeller.

### 1.0.1 - 2025-09-28
* Uppdaterat: Bytt namn på prefix till `ultimate-multisite` för konsistens.
* Uppdaterat: Standardisering av textdomänen.
* Fixat: Mindre buggfixar och förbättringar.

### 1.0.0 - 2025-09-01
* Initial utgivning.
* Komplett system för ärendehantering.
* Flernivååtkomstkontroll.
* Trådad konversationssystem.
* Stöd för bilagor.
* E-postmeddelandesystem.
* Admin- och kundgränssnitt.
* Statistik och rapportering.
