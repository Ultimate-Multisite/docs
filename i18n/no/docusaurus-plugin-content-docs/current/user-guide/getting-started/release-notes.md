---
title: Versjonsnotater
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Utgivelsesnotater

## Versjon 2.13.0 — Utgitt 2026-06-05 {#version-2130--released-on-2026-06-05}

- Nytt: La til støtte for sovereign-tenant for kundekonto, kasse, fakturering, nettsted, faktura, malbytte og domenekartleggingsflyter slik at leietakernettverk kan sende kunder tilbake til hovednettstedet for administrerte handlinger.
- Nytt: La til kontroller av fornyelseslegitimasjon for gjentakende medlemskap slik at gateways kan deaktivere automatisk fornyelse når en lagret faktureringsavtale, subscription eller vault token mangler.
- Nytt: La til HMAC-verifisert loopback-publisering for ventende nettstedopprettelse for å gjøre provisjonering fra kasse til nettsted mer pålitelig på verter der bakgrunnsjobber er forsinket.
- Nytt: La til utvidelsespunkter for utviklere for SSO-URL-er, basisdomener for kasseskjemaer og automatisk opprettelse av domeneoppføringer.
- Rettet: SSO er mer pålitelig på tvers av kartlagte domener, anonyme broker-besøk, utlogging og avhengighetskonflikter mellom plugins.
- Rettet: Ventende nettstedopprettelse gjenopprettes nå fra foreldede publiseringsflagg og unngår å la kunder bli sittende fast på skjermen for nettstedopprettelse.
- Rettet: Domeneoppføringer opprettes ikke lenger for delte basisdomener for kasseskjemaer, og ubrukte bakgrunnsjobber for vertsleverandører hoppes over når ingen integrasjon er aktiv.
- Rettet: Kanttilfeller for kasse, faktureringsadresse, tilbakestilling av passord, e-postbekreftelse, malbytte, omvisninger og kundedashboard blokkerer ikke lenger normale kundeflyter.
- Rettet: Masseutsendte e-poster holder nå mottakere private samtidig som SMTP/plugin-kritiske feil unngås når mottakerlister eller e-posttransporter feiler.
- Rettet: Kanttilfeller for medlemskapsfornyelser, visning av utløp og innkreving av betaling unngår nå umiddelbare utløp, krasj eller manglende påkrevde betalinger.
- Forbedret: WordPress-kompatibilitet er testet opptil 7.0, produksjonsressurser for Vue er bygget på nytt fra npm-kilder, og Cypress end-to-end-dekning tester nå flere flyter for kasse, oppsett, SSO og gateway.

## Versjon 2.12.0 — Utgitt 2026-05-15 {#version-2120--released-on-2026-05-15}

- Nytt: La til Hostinger (hPanel) som en støttet vertsleverandør med integrasjon for domenekartlegging
- Nytt: Site Exporter håndterer nå importpakker for nettverk for strømlinjeformet gjenoppretting av nettsteder på tvers av nettverket
- Rettet: BCC-masseutsendte e-poster bruker nå en undisclosed-recipients-header for å forhindre eksponering av mottakeradresser
- Rettet: Utløpsdato for medlemskap blir ikke lenger ødelagt ved lagring med en verdi som ikke er en dato
- Rettet: Stripe-medlemskapsoppdateringer tømmer nå rabatter korrekt uten å kalle den utdaterte deleteDiscount API
- Rettet: SSO-videresendinger på domenekartlagte nettsteder er nå begrenset for å forhindre uendelige videresendingsløkker
- Rettet: Valg i bildevelgeren i oppsettsveiviseren oppdaterer nå den underliggende datamodellen korrekt
- Rettet: Site Exporter CLI bevarer nå riktig standardvalg av nettverksnettsted
- Forbedret: Fjernet medfølgende wp-cli fra plugin-pakken, noe som reduserer plugin-størrelsen

## Versjon 2.11.0 — Utgitt 2026-05-11 {#version-2110--released-on-2026-05-11}

- Nytt: Nettstedseksporter pakker nå med en selvstartende `index.php`, slik at ZIP-filen kan installeres på en ny vert uten separat plugin-installasjon.
- Nytt: Nettverkseksport lar administratorer eksportere alle undernettsteder i ett enkelt arkiv fra administrasjonssiden Site Export.
- Nytt: Planveksleren Allow Site Templates håndheves nå via en reservekjede, noe som korrekt begrenser maltilgjengelighet for plangrenser.
- Nytt: Redigeringsprogrammet for kasseskjema varsler når et produkt legges til uten at et påkrevd felt er konfigurert.
- Nytt: Innstillingsfanen for import/eksport beskriver nå tydelig sitt omfang og lenker direkte til Site Export-verktøyet.

## Versjon 2.10.0 — Utgitt 2026-05-05 {#version-2100--released-on-2026-05-05}

- Nytt: PayPal-veiviser for guidet oppsett for manuell inntasting av legitimasjon med OAuth-flaggport for sømløs gateway-konfigurasjon.
- Nytt: Kundepanel for malbytte redesignet med kort for gjeldende mal, vedvarende rutenett og **Tilbakestill gjeldende mal**-knapp.
- Rettet: Malbytte henger ikke lenger UI-et ved AJAX-feil.
- Rettet: Tillatelsestilstander for malbytte sikret mot uautorisert tilgang.
- Rettet: Overstyringsinndata for nettsted valideres før lagring.
- Rettet: Forespørsel om faktureringsadresse vises nå når adressen er tom.
- Rettet: PHP 8.1 null-til-streng-avskrivningsvarsler løst.
- Rettet: Currents lazy-loades før init-hook for å forhindre timingproblemer.
- Rettet: Filtrert SSO-sti respekteres i alle innloggingsflyter.
- Rettet: Tomme alternativer for nettstedsidentitet bevares ved lagring.

## Versjon 2.9.0 — Utgitt 2026-04-30 {#version-290--released-on-2026-04-30}

- Nytt: Eksport og import for enkeltnettsted lagt til under **Verktøy > Eksport og import**.
- Rettet: Eksporterte ZIP-filer leveres nå gjennom et autentisert nedlastingsendepunkt.
- Rettet: Risiko for SQL-injeksjon og spørringsproblemer i ventende eksport-/importspørringer korrigert.
- Rettet: Ventende nettsted publiseres ikke når administrator manuelt bekrefter kundens e-post.
- Rettet: Foreldreløse pending_site-oppføringer ryddes opp når medlemskap mangler.
- Rettet: Padding i innstillingsnavigasjon og navigasjon til søkeanker korrigert.
- Rettet: Ventende nettsteder vises nå først i Alle nettsteder-visningen.
- Rettet: User-Agent-header lagt til for skjermbildeleverandør (mShots) for å forhindre 403-feil.
- Rettet: Sirkulær avhengighet i cron-plan for import løst.
- Rettet: Omvisnings-ID-er normalisert til understreker i nøkler for brukerinnstillinger.
- Forbedret: ZipArchive brukes nå i stedet for Alchemy/Zippy for bedre kompatibilitet.

## Versjon 2.8.0 — Utgitt 2026-04-29 {#version-280--released-on-2026-04-29}

- Nytt: Aktiver Jumper-bryter lagt til i Other Options-innstillingsgrensesnittet.
- Nytt: Statuskolonne lagt til i listetabellen for checkout-skjemaer.
- Nytt: Addon sunrise-fillaster for tilpassede MU-plugin sunrise-utvidelser.
- Forbedret: Fjernet innstilling for opt-in til feilrapportering fra innstillingssiden.
- Fiks: Thank-you-side site-kort — bilde er nå begrenset og lenker er riktig stylet.
- Fiks: Skjermbildeleverandør byttet fra thum.io til WordPress.com mShots.
- Fiks: Enable Registration og Default Role setter nå riktige standardverdier ved ny installasjon.
- Fiks: `get_site_url()` returnerer ikke lenger tomt når domenet inkluderer en port.
- Fiks: Kloning av mediefiler kopieres nå riktig når `copy_media`-innstillingen var tom.
- Fiks: Objektbuffer ugyldiggjøres riktig etter network-activate sitemeta-skriving.
- Fiks: Tilpasset domene blir automatisk forfremmet til primært ved DNS-verifisering for 3-delte domener.
- Fiks: Ventende medlemskap kanselleres når utløpt betaling ryddes opp.
- Fiks: Sjekk av passordstyrke bindes på nytt etter at inline-login-melding avvises.
- Fiks: Uendelig sideinnlasting stoppet på thank-you-siden når site allerede er opprettet.
- Fiks: WP-kjernens registreringsalternativ synkroniseres ved plugin-aktivering og lagring av innstillinger.
- Fiks: Null-utløpsvern lagt til i `calculate_expiration` for PHP 8.4-kompatibilitet.
- Fiks: Dupliserte registreringer blokkeres når kunden allerede har et aktivt medlemskap.
- Fiks: Null-sjekk lagt til for `date_expiration` i checkout.
- Fiks: Site-klargjøring herdet — begrensninger, medlemskapsutledning, domeneforfremming.
- Fiks: Statusetikett for forhåndsinstallasjonssjekk korrigert til NOT Activated når sjekken mislykkes.
- Fiks: Checkout-domene brukt for URL-er til e-postverifisering.
- Fiks: Automatisk innlogging etter checkout når ingen passordfelt er til stede.
- Fiks: Gratis medlemskap utløper ikke lenger — behandles som livstid.
- Fiks: E-postverifiseringsport holder site-publisering tilbake til kunden verifiserer e-post.
- Fiks: SES v2 API endpoint-basebane og identitetsrute korrigert.
- Fiks: `wu_inline_login_error`-hook utløses i pre-submit catch-blokk.
