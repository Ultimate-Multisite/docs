---
title: Utgivelsesnotater
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Utgivelsesnotater

## Versjon 2.12.0 — Utgitt 2026-05-15

- Nytt: Hostinger (hPanel) er lagt til som en støttet vertleverandør med integrasjon for domenemapping.
- Nytt: Site Exporter håndterer nå nettverksimport-pakker for strømlinjeformet gjenoppretting av nettverksomfattende nettsteder.
- Feilretting: BCC-utsendte e-poster bruker nå en 'undisclosed-recipients'-header for å forhindre at mottakeradresser blir eksponert.
- Feilretting: Medlemskapsutløpsdatoen blir ikke lenger korrupt når den lagres med en ikke-datoverdi.
- Feilretting: Stripe-medlemskapsoppdateringer rydder nå korrekt rabatter uten å kalle den foreldede deleteDiscount API-en.
- Feilretting: SSO-videresendinger på domenemappede nettsteder er nå begrenset for å forhindre uendelige omdirigeringsløkker.
- Feilretting: Valg av bilde i oppsett-wizard oppdaterer nå korrekt det underliggende datamodellen.
- Feilretting: Site Exporter CLI bevarer nå det korrekte standardvalget for nettverksnettsted.
- Forbedret: Inkludert wp-cli er fjernet fra plugin-pakken, noe som reduserer plugin-størrelsen.

## Versjon 2.11.0 — Utgitt 2026-05-11

- Nytt: Site-eksport pakker nå med en selvstartende `index.php`, slik at ZIP-filen kan installeres på en ny vert uten separat plugin-installasjon.
- Nytt: Nettverks-eksport lar administratorer eksportere alle undernettstedene i én enkelt arkiv fra Site Export admin-siden.
- Nytt: Muligheten til å slå på Site Templates-planen er nå håndhevet via en fallback-kjede, noe som korrekt begrenser tilgjengeligheten av maler basert på planbegrensninger.
- Nytt: Redigereren for kasseformular advarer når et produkt legges til uten at et påkrevd felt er konfigurert.
- Nytt: Fanen for import/eksport-innstillinger beskriver nå tydelig sitt omfang og lenker direkte til Site Export-verktøyet.

## Versjon 2.10.0 — Utgitt 2026-05-05

- Nytt: PayPal veiledet oppsett-wizard for manuell oppføring av legitimasjon, med OAuth flag gate for sømløs gateway-konfigurasjon.
- Nytt: Kundepanelen for malbytte er redesignet med et 'current-template'-kort, et vedvarende rutenett og en **Tilbakestill gjeldende mal**-knapp.
- Feilretting: Malbytte henger ikke lenger brukergrensesnittet ved AJAX-feil.
- Feilretting: Tillatelsesstatusene for malbytte er sikret mot uautorisert tilgang.
- Feilretting: Site-overstyringsinput valideres før lagring.
- Feilretting: Prompt for faktureringsadresse vises nå når adressen er tom.
- Feilretting: PHP 8.1 null-til-streng-depresasjonsvarsler er løst.
- Feilretting: Currents lastes nå før init-hook for å forhindre tidsmessige problemer.
- Feilretting: Filtrert SSO-sti respekteres på tvers av alle innloggingsflyter.
- Feilretting: Tomme site-identitetsalternativer bevares ved lagring.

## Versjon 2.9.0 — Utgitt 2026-04-30

- Nytt: Enkeltnettsteds-eksport og -import er lagt til under **Verktøy > Eksport & Import**.
- Feilretting: Eksport-ZIP-filer sendes nå gjennom et autentisert nedlastingsendepunkt.
- Feilretting: Risiko for SQL-injeksjon og spørringsproblemer i ventende eksport-/importspørringer er korrigert.
- Feilretting: Ventende nettsted publiseres ikke når admin manuelt verifiserer kundens e-post.
- Feilretting: Gjenstrømmede `pending_site`-oppføringer ryddes opp når medlemskapet mangler.
- Feilretting: Padding i innstillingsnavigasjonen og søkeanker-navigasjonen er korrigert.
- Feilretting: Ventende nettsteder vises nå først i "Alle nettsteder"-visningen.
- Feilretting: Screenshot-leverandøren (mShots) User-Agent-header er lagt til for å forhindre 403-feil.
- Feilretting: Sirkulær avhengighet i import-cron-planen er løst.
- Feilretting: Tour-ID-er normaliseres til understreker i brukerinnstillingers nøkler.
- Forbedret: ZipArchive brukes nå i stedet for Alchemy/Zippy for bedre kompatibilitet.

## Versjon 2.8.0 — Utgitt 2026-04-29

- Nytt: Muligheten til å slå på Jumper er lagt til i Other Options-innstillingene.
- Nytt: Statuskolonne er lagt til i listen over kasseformularer.
- Nytt: Addon sunrise file loader for tilpassede MU-plugin sunrise-utvidelser.
- Forbedret: Valg for feilrapportering er fjernet fra innstillingssiden.
- Feilretting: Site-kortet på takk-siden — bildet er nå begrenset og lenkene er korrekt stilisert.
- Feilretting: Screenshot-leverandøren byttet fra thum.io til WordPress.com mShots.
- Feilretting: Enable Registration og Default Role setter nå korrekte standardverdier ved ny installasjon.
- Feilretting: `get_site_url()` returnerer ikke lenger tom når domenet inkluderer en port.
- Feilretting: Kloning av mediefiler kopieres nå korrekt når `copy_media`-innstillingen var tom.
- Feilretting: Object cache blir korrekt ugyldiggjort etter at sitemeta skrives via network-activate.
- Feilretting: Tilpasset domene blir automatisk promotert til primært ved DNS-verifisering for 3-delte domener.
- Feilretting: Ventende medlemskap kanselleres når utløpt betaling ryddes opp.
- Feilretting: Passordstyrkekontrolleren blir gjenkoblet etter at inline-påloggingsprompten er lukket.
- Feilretting: Uendelig side-oppdatering stoppet på takk-siden når nettstedet allerede var opprettet.
- Feilretting: WP core registreringsalternativ synkroniseres ved plugin-aktivering og lagring av innstillinger.
- Feilretting: Null-utløpsgaranti lagt til i `calculate_expiration` for kompatibilitet med PHP 8.4.
- Feilretting: Dupliserte registreringer blokkeres når kunden allerede har et aktivt medlemskap.
- Feilretting: Nullkontroll lagt til for `date_expiration` i kassen.
- Feilretting: Site-provisionering forsterket — begrensninger, medlemskapsinferens, domene-promotering.
- Feilretting: Statusetiketten for forhåndsinstallasjonskontroll korrigert til IKKE Aktivert når kontrollen feiler.
- Feilretting: Kasse-domenet brukes for e-postverifiserings-URL-er.
- Feilretting: Auto-pålogging etter kassen når ingen passordfelt er til stede.
- Feilretting: Gratis medlemskap utløper ikke lenger — behandles som livstids.
- Feilretting: E-postverifiseringsport holder nettstedet fra publisering til kunden verifiserer e-posten.
- Feilretting: SES v2 API-endepunktets basissti og identitetsrute er korrigert.
- Feilretting: `wu_inline_login_error` hook sendes i pre-submit catch-blokken.
