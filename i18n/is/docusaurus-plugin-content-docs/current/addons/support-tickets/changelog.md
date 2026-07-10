---
title: Breytingaskrá þjónustubeiðna
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Breytingaskrá Support Tickets {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Bætt: Fjarlægði vendor/ möppuna úr Git-rakningu (þegar fjallað um í .gitignore), sem minnkar stærð geymslu
* Bætt: Prófað upp að WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Lagfært: Samþykkja null-gildi í nullable ticket model setters
* Lagfært: Geyma alla miða í hnattrænum töflum fyrir allt netið til að tryggja réttan multisite stuðning
* Lagfært: Fela starfsmannareiti og laga auða-síðu endurvísun á nýs-miða eyðublaði viðskiptavinar
* Lagfært: Skipta óskilgreindum add_meta() köllum út fyrir rétt update_meta() fyrir geymslu lýsigagna
* Lagfært: Skipta óskráðri réttindaprófun út fyrir rétta wu_view_all_support_tickets
* Lagfært: Bæta við vöntuðum AJAX-handlers fyrir stöðu miða, úthlutun og quick-edit aðgerðir
* Lagfært: Leiðrétta heiti aðferðar fyrir greiningu starfsmannssvars í miðasýnum
* Lagfært: Sameina tvítekin svar-handlers og samræma nonce action nöfn
* Lagfært: Bæta við vöntuðu framendaviðmóti fyrir [wu_submit_ticket] shortcode
* Lagfært: Bæta við vöntuðum user_id dálki og laga Support_Ticket::get_user_id() aðferð
* Lagfært: Fjarlægja auka tvöfalda gæsalöpp í priority filter option tag
* Lagfært: Bæta við miðastjórnunarspjaldi í netkerfisstjórn fyrir super admins
* Bætt: Sameina CSS stjórnborðs í eitt ytra stílblað
* Bætt: Fjarlægja Settings undirvalmynd úr stjórnvalmynd undirsíðna
* Bætt: Hlaða framendaeignum skilyrt aðeins á support ticket síðum
* Bætt: Sleppa plugin autoloader þegar Bedrock root autoloader hefur þegar hlaðið ósjálfstæðum

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Bætt við: Full virkni til að skoða miða fyrir stjórnanda og framenda
* Bætt við: AJAX-handler fyrir innsendingar svara við miðum
* Bætt við: Stuðningur við virkni miðasvara með réttri meðhöndlun eyðublaða
* Bætt við: Rétt birting tilkynninga fyrir innsendingar miða og svör í stjórnborði
* Bætt við: Sjálfvirk tenging miða við núverandi notanda fyrir sjálfsinnsendingar viðskiptavina
* Bætt við: Öryggisbót til að koma í veg fyrir að viðskiptavinir yfirskrifi eignarhald miða
* Bætt við: Vöntuðum hjálparföllum (wu_format_date, wu_user_can_view_ticket, o.s.frv.)
* Bætt við: Rétt niðurhal og meðhöndlun skráarviðhengja
* Bætt við: Tölvupósttilkynningakerfi fyrir miðasvör og stöðubreytingar
* Lagfært: Eyðublað fyrir miðasvör inniheldur nú nauðsynlegt ticket ID
* Lagfært: Vandamál með sýnileika tilkynninga í miðasýnum stjórnborðs
* Lagfært: Málskipunarvillur í support ticket föllum
* Bætt: Gagnagrunnsskipulag með réttum query og schema klösum fyrir svör og viðhengi
* Bætt: Flutningur yfir í raunverulega eiginleika í stað attributes fyrir miðalíkön

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Uppfært: Endurnefndi forskeyti í ultimate-multisite til samræmis
* Uppfært: Stöðlun text domain
* Lagfært: Minniháttar villulagfæringar og úrbætur

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Fyrsta útgáfa
* Fullbúið miðastjórnunarkerfi
* Aðgangsstýring á mörgum stigum
* Þráðað samtalskerfi
* Stuðningur við skráarviðhengi
* Tölvupósttilkynningakerfi
* Viðmót fyrir stjórnendur og viðskiptavini
* Tölfræði og skýrslugerð
