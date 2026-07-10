---
title: Versionsinformation
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Versionsinformation {#release-notes}

## Version 2.13.0 — Släppt den 2026-06-05 {#version-2130--released-on-2026-06-05}

- Nytt: Lade till stöd för sovereign-tenant för kundens Account, checkout, fakturering, site, faktura, mallbyte och domänmappningsflöden så att tenant-nätverk kan dirigera kunder tillbaka till huvudwebbplatsen för hanterade åtgärder.
- Nytt: Lade till kontroller av förnyelseuppgifter för återkommande medlemskap så att gateways kan inaktivera automatisk förnyelse när ett sparat faktureringsavtal, en prenumeration eller en vault token saknas.
- Nytt: Lade till HMAC-verifierad loopback-publicering för väntande site-skapande för att göra provisionering från checkout till site mer tillförlitlig på hostar där bakgrundsjobb är fördröjda.
- Nytt: Lade till utvecklarutökningspunkter för SSO-URL:er, basdomäner för checkout-formulär och automatisk skapande av domänposter.
- Åtgärdat: SSO är mer tillförlitligt över mappade domäner, anonyma broker-besök, utloggning och beroendekonflikter mellan pluginer.
- Åtgärdat: Väntande site-skapande återhämtar sig nu från inaktuella publiceringsflaggor och undviker att lämna kunder fast på skärmen för site-skapande.
- Åtgärdat: Domänposter skapas inte längre för delade basdomäner för checkout-formulär, och oanvända bakgrundsjobb för host-leverantörer hoppas över när ingen integration är aktiv.
- Åtgärdat: Checkout, faktureringsadress, lösenordsåterställning, e-postverifiering, mallbyte, rundturer och kantfall i kundens dashboard blockerar inte längre normala kundflöden.
- Åtgärdat: Broadcast-e-post håller nu mottagare privata samtidigt som fatala SMTP-/plugin-fel undviks när mottagarlistor eller e-posttransporter misslyckas.
- Åtgärdat: Kantfall för medlemskapsförnyelser, visning av utgångsdatum och betalningsinsamling undviker nu omedelbara utgångar, krascher eller missade obligatoriska betalningar.
- Förbättrat: WordPress-kompatibilitet testas upp till 7.0, produktions-Vue-tillgångar byggs om från npm-källor, och Cypress-end-to-end-täckning testar nu fler checkout-, setup-, SSO- och gateway-flöden.

## Version 2.12.0 — Släppt den 2026-05-15 {#version-2120--released-on-2026-05-15}

- Nytt: Lade till Hostinger (hPanel) som en host-leverantör som stöds med integration för domänmappning
- Nytt: Site Exporter hanterar nu importpaket för nätverk för effektiv återställning av site över hela nätverket
- Åtgärdat: BCC-broadcast-e-post använder nu en undisclosed-recipients-header för att förhindra att mottagaradresser exponeras
- Åtgärdat: Medlemskapets utgångsdatum skadas inte längre när det sparas med ett värde som inte är ett datum
- Åtgärdat: Stripe-medlemskapsuppdateringar rensar nu korrekt rabatter utan att anropa det föråldrade deleteDiscount API
- Åtgärdat: SSO-omdirigeringar på domänmappade sites är nu begränsade för att förhindra oändliga omdirigeringsloopar
- Åtgärdat: Setup-guidens bildväljarmarkering uppdaterar nu korrekt den underliggande datamodellen
- Åtgärdat: Site Exporter CLI bevarar nu korrekt val av standardnätverks-site
- Förbättrat: Tog bort paketerat wp-cli från plugin-paketet, vilket minskar plugin-storleken

## Version 2.11.0 — Släppt den 2026-05-11 {#version-2110--released-on-2026-05-11}

- Nytt: Site-exporter paketerar nu en självstartande `index.php` så att ZIP-filen kan installeras på en ny host utan separat plugin-installation.
- Nytt: Nätverksexport låter administratörer exportera alla undersites i ett enda arkiv från Site Export-adminsidan.
- Nytt: Plan-växeln Allow Site Templates tillämpas nu via en fallback-kedja, vilket korrekt begränsar malltillgänglighet för plan-gränser.
- Nytt: Redigeraren för checkout-formulär varnar när en produkt läggs till utan ett obligatoriskt fält konfigurerat.
- Nytt: Fliken Import/Export-inställningar beskriver nu tydligt sitt omfång och länkar direkt till verktyget Site Export.

## Version 2.10.0 — Släppt den 2026-05-05 {#version-2100--released-on-2026-05-05}

- Nytt: PayPal-guidad setup-guide för manuell inmatning av autentiseringsuppgifter med OAuth-flagggrind för smidig gateway-konfiguration.
- Nytt: Kundpanelen för mallbyte har omdesignats med kort för aktuell mall, bestående rutnät och knappen **Återställ aktuell mall**.
- Åtgärdat: Mallbyte låser inte längre UI:t vid AJAX-fel.
- Åtgärdat: Behörighetslägen för mallbyte har säkrats mot obehörig åtkomst.
- Åtgärdat: Inmatningar för site-åsidosättning valideras före sparande.
- Åtgärdat: Prompt för faktureringsadress visas nu när adressen är tom.
- Åtgärdat: PHP 8.1-varningar om null-till-sträng-utfasning har lösts.
- Åtgärdat: Currents lazy-loadas före init-hook för att förhindra timingproblem.
- Åtgärdat: Filtrerad SSO-sökväg respekteras i alla inloggningsflöden.
- Åtgärdat: Tomma alternativ för site-identitet bevaras vid sparande.

## Version 2.9.0 — Släppt den 2026-04-30 {#version-290--released-on-2026-04-30}

- Nytt: Export och import för enskild site har lagts till under **Verktyg > Export och import**.
- Åtgärdat: Export-ZIP-filer levereras nu via en autentiserad nedladdningsendpoint.
- Åtgärdat: Risk för SQL-injektion och frågeproblem i väntande export-/importfrågor har korrigerats.
- Åtgärdat: Väntande site publiceras inte när admin manuellt verifierar kundens e-post.
- Åtgärdat: Föräldralösa pending_site-poster rensas upp när medlemskap saknas.
- Åtgärdat: Padding i inställningsnavigeringen och navigering till sökankare har korrigerats.
- Åtgärdat: Väntande sites visas nu först i vyn Alla Sites.
- Åtgärdat: Screenshot-leverantörens (mShots) User-Agent-header har lagts till för att förhindra 403-fel.
- Åtgärdat: Cirkulärt beroende i Import cron-schema har lösts.
- Åtgärdat: Rundturs-ID:n normaliseras till understreck i nycklar för användarinställningar.
- Förbättrat: ZipArchive används nu i stället för Alchemy/Zippy för bättre kompatibilitet.

## Version 2.8.0 — Släppt den 2026-04-29 {#version-280--released-on-2026-04-29}

- Nytt: Enable Jumper-växel tillagd i inställningsgränssnittet för Other Options.
- Nytt: Status-kolumn tillagd i listtabellen för checkout-formulär.
- Nytt: Addon sunrise-filladdare för anpassade MU plugin sunrise-tillägg.
- Förbättrat: Inställning för att välja in felrapportering borttagen från inställningssidan.
- Fix: Tack-sidans webbplatskort — bilden är nu begränsad och länkarna korrekt stylade.
- Fix: Skärmbildsleverantören bytt från thum.io till WordPress.com mShots.
- Fix: Enable Registration och Default Role ställer nu in korrekta standardvärden vid ny installation.
- Fix: `get_site_url()` returnerar inte längre tomt när domänen innehåller en port.
- Fix: Klonade mediefiler kopieras nu korrekt när inställningen `copy_media` var tom.
- Fix: Objektcache ogiltigförklaras korrekt efter network-activate sitemeta-skrivning.
- Fix: Anpassad domän markeras automatiskt som primär vid DNS-verifiering för domäner med tre delar.
- Fix: Väntande membership avbryts när utgången betalning rensas bort.
- Fix: Lösenordsstyrkekontrollen binds om efter att inline-inloggningsprompten avvisats.
- Fix: Oändlig sidomladdning stoppad på tack-sidan när webbplatsen redan skapats.
- Fix: Registreringsalternativet i WP-kärnan synkroniseras vid plugin-aktivering och när inställningar sparas.
- Fix: Null-utgångsskydd tillagt i `calculate_expiration` för PHP 8.4-kompatibilitet.
- Fix: Dubbletter av registreringar blockeras när kunden redan har ett aktivt membership.
- Fix: Null-kontroll tillagd för `date_expiration` i checkout.
- Fix: Webbplatsprovisionering härdad — begränsningar, membership-härledning, domänpromotering.
- Fix: Statusetikett för förinstallationskontroll korrigerad till NOT Activated när kontrollen misslyckas.
- Fix: Checkout-domän används för URL:er för e-postverifiering.
- Fix: Automatisk inloggning efter checkout när inget lösenordsfält finns.
- Fix: Gratis memberships upphör inte längre — behandlas som livstid.
- Fix: E-postverifieringsgrind håller webbplatspublicering tills kunden verifierar e-postadressen.
- Fix: Basväg för SES v2 API-endpoint och identitetsrutt korrigerade.
- Fix: `wu_inline_login_error`-hook skickas i catch-block före inskickning.
