---
title: Udgivelsesnoter
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Udgivelsesnotater {#release-notes}

## Version 2.13.0 — Udgivet den 2026-06-05 {#version-2130--released-on-2026-06-05}

Nyt tilføjet: Tilføjet suverænt-tenant understøttelse for kunde konto, betaling, faktura, site, skabelonbytning og domænemapping flow, så tenant-netværk kan sende kunder tilbage til hovedsitet for administrerede handlinger.
Nyt: Tilføjet genopfrisknings-credentials tjek for gentagne medlemskaber, så gateways kan deaktivere automatisk fornyelse, hvis en gemt betalingsaftale, abonnement eller vault token mangler.
Nyt: Tilføjet HMAC-verificeret loopback publicering for ventende site-oprettelser for at gøre provisioning fra checkout til site mere pålidelig på hosts, hvor baggrundsjobs er forsinkede.
Nyt: Tilføjet udviklerudvidelsespunkter for SSO URLs, grunddomæner for checkout-form og automatisk domæne-record oprettelse.
Fix: SSO er nu mere pålideligt på tværs af mappede domæner, anonyme broker-besøg, logout og konflikter mellem plugins.
Fix: Ventende site-oprettelser genopretter nu fra forældede publiceringsflag og undgår at lade kunder sidde fast på oprettelsessiden.
Fix: Domæne-records oprettes ikke længere for delte grunddomæner for checkout-form, og ubrugte host-provider baggrundsjobs springes over, når der ikke er aktiv integration.
Fix: Edge cases i checkout, faktureringsadresse, adgangskode nulstilling, e-mail verifikation, skabelonbytning, tours og kundedashboard blokerer ikke længere normale kundeflows.
Fix: Broadcast e-mails holder nu modtagere private, samtidig med at man undgår SMTP/plugin fejl ved manglende modtagerlister eller mailtransportfejl.
Fix: Edge cases i medlemsfornyelser, udløbsvisning og betalingsoverførsel undgår nu øjeblikkelig udløb, nedbrud eller oversete nødvendige betalinger.
Forbedret: WordPress-kompatibilitet testes op til 7.0, produktions-Vue assets genopbygges fra npm kilder, og Cypress end-to-end dækning udfører nu flere checkout-, opsætnings-, SSO- og gateway-flows.

## Version 2.12.0 — Udgivet den 15. maj 2026 {#version-2120--released-on-2026-05-15}

- **Nyt:** Hostinger (hPanel) er tilføjet som understøttet hostudbyder med domæne-mapping integration.
- **Nyt:** Site Exporter håndterer nu netværksimport-bundles, hvilket gør genoprettelse af hele sitet på netværksniveau mere strømlinet.
- **Fix:** BCC broadcast e-mails bruger nu en skjult modtager-header for at forhindre eksponering af modtageradresser.
- **Fix:** Medlemskabets udløbsdato korrumperes ikke længere, når man gemmer med en dato-værdi.
- **Fix:** Stripe medlemskabsopdateringer sletter nu korrekt rabatter uden at kalde den forældede deleteDiscount API.
- **Fix:** SSO-omdirigeringer på domæne-mappede sider er nu begrænset for at forhindre uendelige omdirigeringsløkker.
- **Fix:** Valg af billeder i opsætningswizardet opdaterer nu korrekt det underliggende datamodel.
- **Fix:** Site Exporter CLI bevarer nu den korrekte standardvalg af netværkssite.
- **Forbedret:** Bundlet wp-cli er fjernet fra plugin-pakken, hvilket reducerer pluginstørrelsen.

## Version 2.11.0 — Udgivet den 11. maj 2026 {#version-2110--released-on-2026-05-11}

- **Nyt:** Site exports inkluderer nu en selvstartende `index.php`, så ZIP'en kan installeres på en frisk host uden separat plugin-installation.
- **Nyt:** Netværks-export giver administrator mulighed for at eksportere alle undersider i én arkiv fra Site Export admin-siden.
- **Nyt:** Muligheden for plan-toggles for Site Templates håndhæves nu via en fallback-kæde, hvilket korrekt begrænser tilgængeligheden af skabeloner baseret på planbegrænsninger.
- **Nyt:** Checkout form-redigereren giver en advarsel, hvis et produkt tilføjes uden at være konfigureret med et obligatorisk felt.
- **Nyt:** Fanen Import/Export beskriver nu klart dens omfang og linker direkte til Site Export værktøjet.

## Version 2.10.0 — Udgivet den 5. maj 2026 {#version-2100--released-on-2026-05-05}

Nyt: Ny PayPal guided setup wizard til manuel indtastning af legitimationsoplysninger med OAuth flag gate for problemfri gateway konfiguration.
Nyt: Skift mellem skabeloner på kundepanel redesignet med nuværende-skabelon kort, persistent grid og knappen **Reset current template**.
Fix: Skift mellem skabeloner hænger ikke længere UI'en ved AJAX-fejl.
Fix: Tilladelsesstatus for skift mellem skabeloner sikret mod uautoriseret adgang.
Fix: Site override input valideres før gemning.
Fix: Prompt til faktureringsadresse vises nu, når adressen er tom.
Fix: PHP 8.1 deprecation notices om null-to-string løst.
Fix: Aktuelle lazy-loaded før init hook for at forhindre tidsmæssige problemer.
Fix: Filtreret SSO sti respekteres på tværs af alle login flows.
Fix: Tomme site identity muligheder bevares ved gemning.

## Version 2.9.0 — Udgivet den 30. april 2026 {#version-290--released-on-2026-04-30}

- Nyt: Single-site eksport og import tilføjet under **Tools > Export & Import**.
- Fix: Eksport ZIP filer serveres nu via et autentificeret download endpoint.
- Fix: Risiko for SQL injection og forespørgselsfejl i ventende eksport/import forespørgsler rettet.
- Fix: Ventende site bliver ikke publiceret, når admin manuelt bekræfter kundens e-mail.
- Fix: Forældede pending_site optegnelser renses, når medlemskab mangler.
- Fix: Indstillingsnavigationspadding og søgeanker-navigation rettet.
- Fix: Ventende sites vises nu først i visningen All Sites.
- Fix: Screenshot provider (mShots) User-Agent header tilføjet for at forhindre 403 fejl.
- Fix: Import cron schedule cirkulær afhængighed løst.
- Fix: Tour IDs normaliseret til understregninger i brugerindstillingsnøgler.
- Forbedret: ZipArchive bruges nu i stedet for Alchemy/Zippy for bedre kompatibilitet.

## Version 2.8.0 — Udgivet den 29. april 2026 {#version-280--released-on-2026-04-29}

- Ny: Jumper toggle tilføjet til indstillingerens UI under Andre Muligheder er aktiveret.
- Ny: Statuskolonne tilføjet til tabellen over checkout formularer.
- Ny: Addon sunrise filindlæser tilpassede MU-plugin sunrise udvidelser.
- Forbedret: Fjernet indstilling for fejlrapportering fra indstillingssiden.
- Fix: Takkeside site card – billede er nu begrænset og links er korrekt formateret.
- Fix: Skærmoptager leverandør skiftet fra thum.io til WordPress.com mShots.
- Fix: Registrering og standardrolle aktiveret sætter nu korrekte standardværdier ved ny installation.
- Fix: `get_site_url()` returnerer ikke længere tom værdi, når domænet inkluderer en port.
- Fix: Kloning af mediefiler kopieres nu korrekt, når indstillingen `copy_media` er tom.
- Fix: Object cache ugyldiggøres korrekt efter network-activate sitemeta skrivning.
- Fix: Custom domæne promoveres automatisk til primær ved DNS-verifikation for 3-delte domæner.
- Fix: Ventende medlemskab annulleres, når udløbet betalingen er blevet opryddet.
- Fix: Adgangskodestyrkecheck genstartes efter at inline login prompt er lukket.
- Fix: Uendelig sidegenindlæsning stoppet på takkesiden, hvis siden allerede er oprettet.
- Fix: WP core registreringsmulighed synkroniseres ved plugin-aktivering og indstillingsgemning.
- Fix: Null udløbsbeskyttelse tilføjet i `calculate_expiration` for PHP 8.4 kompatibilitet.
- Fix: Dobbeltregistrering blokeret, hvis kunden allerede har et aktivt medlemskab.
- Fix: Null tjek tilføjet for `date_expiration` i checkout.
- Fix: Siteprovisionering er blevet styrket – begrænsninger, medlemsinferens, domænepromotion.
- Fix: Statuslabel for pre-install check rettet til IKKE Aktiveret, når tjekket fejler.
- Fix: Checkout domæne bruges til e-mailverifikationslinks.
- Fix: Automatisk login efter checkout, hvis der ikke er et adgangskodefelt til stede.
- Fix: Gratis medlemskaber udløber ikke længere – behandles som livstidsmedlemskab.

Fejlrettelser: E-mail verifikationsporten holder sidens offentliggørelse, indtil kunden har bekræftet e-mailen.
Fejlrettelse: Basispath og identitetsruten for SES v2 API endpoint er rettet.
Fejlrettelse: `wu_inline_login_error` hook udsendes i catch-blokken før indsendelse.
