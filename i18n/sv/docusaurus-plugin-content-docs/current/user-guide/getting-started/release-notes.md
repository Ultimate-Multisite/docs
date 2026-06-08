---
title: Versioneringsanteckningar
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Release Notes

## Version 2.12.0 — Released on 2026-05-15

- Nytt: Lägger till Hostinger (hPanel) som ett stödd värdleverantör med integration för domänmappning
- Nytt: Site Exporter hanterar nu nätverksimportpaket, vilket förenklar återställningen av webbplatser över hela nätverket
- Fix: BCC-utskick använder nu ett `undisclosed-recipients`-huvud för att förhindra att mottagarnas adresser exponeras
- Fix: Medlemskapets utgångsdatum korrumperas inte längre vid sparande med ett icke-datumvärde
- Fix: Stripe-uppdateringar för medlemskap rensar nu korrekt rabatter utan att anropa den föråldrade `deleteDiscount` API:n
- Fix: SSO-omdirigeringar på domänmappade webbplatser är nu begränsade för att förhindra oändliga omdirigeringsloopar
- Fix: Valet av bild i uppsättningsguiden uppdaterar nu korrekt den underliggande datamodellen
- Fix: Site Exporter CLI bevarar nu det korrekta standardvalet av nätverkswebbplats
- Förbättrat: Borttagit inbäddad wp-cli från plugin-paketet, vilket minskar pluginets storlek

## Version 2.11.0 — Released on 2026-05-11

- Nytt: Webbplats-exportar paketer nu en självstartande `index.php`, så att ZIP-filen kan installeras på en ny värd utan separat plugin-installation.
- Nytt: Nätverksexport låter administratörer exportera alla underwebbplatser i ett enda arkiv från Site Export-adminpanelen.
- Nytt: Möjligheten att växla Site Templates är nu tvingad via en fallback-kedja, vilket korrekt begränsar tillgängligheten av mallar baserat på planbegränsningar.
- Nytt: Redigeraren för kassan varnar nu när en produkt läggs till utan att ett obligatoriskt fält har konfigurerats.
- Nytt: Fliken för Import/Export beskriver nu tydligt sitt omfång och länkar direkt till Site Export-verktyget.

## Version 2.10.0 — Released on 2026-05-05

- Nytt: PayPal-guidad uppsättning för manuell inmatning av behörigheter med OAuth flag gate för sömlös gateway-konfiguration.
- Nytt: Kundpanelen för mallväxling har omdesignats med ett "current-template"-kort, ett beständigt rutnät och knappen **Återställ nuvarande mall**.
- Fix: Mallväxling hänger inte längre UI:t vid AJAX-fel.
- Fix: Tillåtelsekontrollerna för mallväxling säkras mot obehörigt åtkomst.
- Fix: Site override-inmatningar valideras innan sparande.
- Fix: Prompten för faktureringsadress visas nu när adressen är tom.
- Fix: PHP 8.1 null-till-sträng avskrivningsmeddelanden har åtgärdats.
- Fix: Currents laddas nu via `lazy-loaded before init` hook för att förhindra tidsrelaterade problem.
- Fix: Filtrerad SSO-sökväg respekteras över alla inloggningsflöden.
- Fix: Tomma webbplatsidentitetsalternativ bevaras vid sparande.

## Version 2.9.0 — Released on 2026-04-30

- Nytt: Enkelwebbplats-export och import lagts till under **Tools > Export & Import**.
- Fix: Export-ZIP-filer serveras nu via en autentiserad nedladdningspunkt.
- Fix: Risk för SQL-injektion och frågeproblem i utestående export-/importfrågor korrigerade.
- Fix: Utestående webbplats publiceras inte när administratören manuellt verifierar kundens e-post.
- Fix: Föräldraförteckningar (`pending_site`) rensas upp när medlemskapet saknas.
- Fix: Padding i inställningsnavigeringen och sökankarenavigeringen korrigerade.
- Fix: Utestående webbplatser visas nu först i vyn "All Sites".
- Fix: Skärmdumpleverantören (mShots) User-Agent-huvud tillagd för att förhindra 403-fel.
- Fix: Cirkulär beroende i importcron-schemat löst.
- Fix: Tour-ID:n normaliseras till understreck i användarinställningsnycklar.
- Förbättrat: ZipArchive används nu istället för Alchemy/Zippy för bättre kompatibilitet.

## Version 2.8.0 — Released on 2026-04-29

- Nytt: Möjligheten att aktivera Jumper lagd till Other Options-inställnings-UI.
- Nytt: Statuskolumn tillagd i listtabellen för kassan.
- Nytt: Addon sunrise file loader för anpassade MU-plugin sunrise-utökningar.
- Förbättrat: Borttagit inställningen för opt-in av felrapportering från inställningssidan.
- Fix: Webbplatskortet på tack-sidan — bilden är nu begränsad och länkarna är korrekt stiliserade.
- Fix: Skärmdumpleverantören bytt från thum.io till WordPress.com mShots.
- Fix: Enable Registration och Default Role ställer nu korrekta standardvärden vid ny installation.
- Fix: `get_site_url()` returnerar inte längre tomt när domänen inkluderar ett portnummer.
- Fix: Kloning av mediefiler kopieras nu korrekt när inställningen `copy_media` var tom.
- Fix: Objektcache inaktiveras korrekt efter network-activate sitemeta-skrivning.
- Fix: Anpassad domän uppgraderas automatiskt till primär vid DNS-verifiering för 3-delade domäner.
- Fix: Utestående medlemskap avbryts när utgången betalning rensas upp.
- Fix: Lösenordstyrka-kontroll återkopplas efter att inline-inloggningsprompten stängts.
- Fix: Oändlig siduppdatering stoppad på tack-sidan när webbplatsen redan skapats.
- Fix: WP core-registreringsalternativ synkroniseras vid pluginaktivering och sparande av inställningar.
- Fix: Null-utgångsvakt tillagd i `calculate_expiration` för kompatibilitet med PHP 8.4.
- Fix: Dubbla registreringar blockeras när kunden redan har ett aktivt medlemskap.
- Fix: Nullkontroll tillagd för `date_expiration` i kassan.
- Fix: Webbplatsprovisionering har stärkts — begränsningar, medlemskapsinferens, domänuppgradering.
- Fix: Statusetiketten för förinstallationskontroll korrigerad till INTE Aktiverad när kontrollen misslyckas.
- Fix: Kassan använder domänen för e-postverifierings-URL:er.
- Fix: Auto-login efter kassan när inget lösenordsfält finns.
- Fix: Gratis medlemskap går inte längre ut — behandlas som livstidsmedlemskap.
- Fix: E-postverifieringsport håller webbplatsen från att publiceras tills kunden verifierar sin e-post.
- Fix: SES v2 API endpoint base path och identitetsrutt korrigerad.
- Fix: `wu_inline_login_error` hook emitteras i pre-submit catch block.
