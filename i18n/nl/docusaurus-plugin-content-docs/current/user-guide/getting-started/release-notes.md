---
title: Release Notes
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Release Notes

## Version 2.12.0 — Released on 2026-05-15

- New: Hostinger (hPanel) toegevoegd als ondersteunde hostprovider met domeinmapping-integratie
- New: Site Exporter kan nu netwerkimportbundels verwerken voor een gestroomlijnde siteherstel over het hele netwerk
- Fix: BCC-broadcast e-mails gebruiken nu een 'undisclosed-recipients'-header om het tonen van ontvangeradressen te voorkomen
- Fix: De verl่องingsdatum van een lidmaatschap wordt niet langer beschadigd bij opslaan met een niet-datumwaarde
- Fix: Stripe-lidmaatschapupdates wissen nu correct kortingen zonder de verouderde deleteDiscount API aan te roepen
- Fix: SSO-redirects op domein-gemappedde sites worden nu beperkt om oneindige redirect-lussen te voorkomen
- Fix: De selectie van de afbeelding in de setup wizard werkt nu correct de onderliggende data model bij
- Fix: De Site Exporter CLI behoudt nu de correcte standaard netwerk-site-selectie
- Improved: De ingebouwde wp-cli is verwijderd uit het plugin-pakket, waardoor de plugin kleiner wordt

## Version 2.11.0 — Released on 2026-05-11

- New: Site-exports bundelen nu een zelfstartende `index.php`, zodat het ZIP-bestand op een nieuwe host kan worden geïnstalleerd zonder een aparte plugin-installatie.
- New: Netwerkexport stelt beheerders in staat om alle subsites in één archief te exporteren vanaf de Site Export admin pagina.
- New: De optie om Site Templates in te schakelen, wordt nu afgedwongen via een fallback-keten, waardoor de beschikbaarheid van templates correct wordt beperkt op basis van planlimieten.
- New: De checkout form editor waarschuwt wanneer een product wordt toegevoegd zonder dat een verplicht veld is geconfigureerd.
- New: Het tabblad Import/Export beschrijft nu duidelijk zijn reikwijdte en linkt direct naar de Site Export tool.

## Version 2.10.0 — Released on 2026-05-05

- New: PayPal-geleide setup wizard voor handmatige credentieleing met een OAuth-vlagpoort voor naadloze gatewayconfiguratie.
- New: Het customer panel voor template-wisseling is opnieuw ontworpen met een 'current-template'-kaart, een persistent grid en een knop **Reset current template**.
- Fix: Template-wisseling hangt de UI niet langer bij AJAX-fouten.
- Fix: De toegangsrechten voor template-wisseling zijn beveiligd tegen ongeautoriseerde toegang.
- Fix: Site override inputs worden gevalideerd voordat ze worden opgeslagen.
- Fix: De prompt voor het factuuradres wordt nu getoond wanneer het adres leeg is.
- Fix: PHP 8.1 null-to-string deprecation notices zijn opgelost.
- Fix: Currents wordt nu lazy-loaded voordat de init-hook wordt aangeroepen om timingproblemen te voorkomen.
- Fix: Het gefilterde SSO-pad wordt gerespecteerd in alle login-workflows.
- Fix: Lege site-identiteitsopties worden behouden bij het opslaan.

## Version 2.9.0 — Released on 2026-04-30

- New: Single-site export en import toegevoegd onder **Tools > Export & Import**.
- Fix: Export ZIP-bestanden worden nu via een geauthenticeerd download-endpoint geserveerd.
- Fix: Risico op SQL-injectie en queryproblemen in wachtende export/import-queries zijn gecorrigeerd.
- Fix: De site wordt niet gepubliceerd wanneer de admin het e-mailadres van de klant handmatig verifieert.
- Fix: Verwaarloosde `pending_site`-records worden opgeruimd wanneer het lidmaatschap ontbreekt.
- Fix: De padding van de instellingennavigatie en de zoekankernavigatie zijn gecorrigeerd.
- Fix: Wachtende sites worden nu als eerste weergegeven in de All Sites view.
- Fix: Screenshot provider (mShots) User-Agent header toegevoegd om 403-fouten te voorkomen.
- Fix: De circulaire afhankelijkheid van de import-cron-planning is opgelost.
- Fix: Tour IDs worden genormaliseerd naar underscores in de gebruikersinstellingen.
- Improved: ZipArchive wordt nu gebruikt in plaats van Alchemy/Zippy voor betere compatibiliteit.

## Version 2.8.0 — Released on 2026-04-29

- New: De toggle 'Enable Jumper' is toegevoegd aan de Other Options settings UI.
- New: De statuskolom is toegevoegd aan de lijsttabel van checkout forms.
- New: Addon sunrise file loader voor aangepaste MU-plugin sunrise extensies.
- Improved: De optie voor error-reporting is verwijderd van de instellingenpagina.
- Fix: Sitekaart op de bedankpagina — de afbeelding is nu beperkt en de links correct gestyled.
- Fix: De screenshot provider is gewijzigd van thum.io naar WordPress.com mShots.
- Fix: Enable Registration en Default Role worden nu correcte standaardwaarden ingesteld bij een nieuwe installatie.
- Fix: `get_site_url()` retourneert niet langer een lege waarde wanneer het domein een poort bevat.
- Fix: Mediabestanden worden nu correct gekopieerd wanneer de `copy_media` instelling leeg was.
- Fix: Object cache wordt correct ongeldig gemaakt na het schrijven van sitemeta via network-activate.
- Fix: Het custom domain wordt automatisch gepromoveerd naar primair bij DNS-verificatie voor 3-onderdeel-domeinen.
- Fix: Het wachtende lidmaatschap wordt geannuleerd wanneer een verlopen betaling wordt opgeruimd.
- Fix: De wachtwoordsterktechecker wordt opnieuw gekoppeld nadat de inline login prompt is gesloten.
- Fix: Oneindig paginaladen wordt gestopt op de bedankpagina wanneer de site al is aangemaakt.
- Fix: De WP core registratieoptie wordt gesynchroniseerd bij plugin-activatie en het opslaan van instellingen.
- Fix: Null expiration guard toegevoegd in `calculate_expiration` voor PHP 8.4 compatibiliteit.
- Fix: Dubbele aanmeldingen worden geblokkeerd wanneer de klant al een actief lidmaatschap heeft.
- Fix: Null check toegevoegd voor `date_expiration` in checkout.
- Fix: Site provisioning is versterkt — beperkingen, lidmaatschapinferentie, domeinpromotie.
- Fix: De statuslabel voor de pre-installatiecheck is gecorrigeerd naar NOT Activated wanneer de check faalt.
- Fix: Het checkout-domein wordt gebruikt voor e-mailverificatie-URL's.
- Fix: Auto-login na checkout wanneer er geen wachtwoordveld aanwezig is.
- Fix: Gratis lidmaatschappen verlopen niet meer — worden behandeld als levenslang.
- Fix: De e-mailverificatiepoort houdt de site gepubliceerd totdat de klant het e-mailadres heeft geverifieerd.
- Fix: SES v2 API endpoint base path en identity route zijn gecorrigeerd.
- Fix: `wu_inline_login_error` hook wordt uitgezonden in de pre-submit catch block.
