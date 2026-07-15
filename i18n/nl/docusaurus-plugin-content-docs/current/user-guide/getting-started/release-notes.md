---
title: Releaseopmerkingen
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Release-opmerkingen

## Versie 2.13.0 — Uitgebracht op 2026-06-05 {#version-2130--released-on-2026-06-05}

- Nieuw: Ondersteuning voor sovereign-tenants toegevoegd voor klantaccount-, checkout-, facturering-, site-, factuur-, templatewissel- en domeinkoppelingsflows, zodat tenantnetwerken klanten kunnen terugsturen naar de hoofdsite voor beheerde acties.
- Nieuw: Controles voor vernieuwingsreferenties toegevoegd voor terugkerende memberships, zodat gateways automatische verlenging kunnen uitschakelen wanneer een opgeslagen factureringsovereenkomst, subscription of vault-token ontbreekt.
- Nieuw: HMAC-geverifieerde loopback-publicatie toegevoegd voor het aanmaken van sites in behandeling om provisioning van checkout naar site betrouwbaarder te maken op hosts waar achtergrondtaken vertraagd zijn.
- Nieuw: Uitbreidingspunten voor ontwikkelaars toegevoegd voor SSO-URL's, basisdomeinen van checkout-formulieren en automatische aanmaak van domeinrecords.
- Oplossing: SSO is betrouwbaarder over gekoppelde domeinen, anonieme brokerbezoeken, uitloggen en afhankelijkheidsconflicten tussen plugins.
- Oplossing: Het aanmaken van sites in behandeling herstelt nu van verouderde publicatievlaggen en voorkomt dat klanten vast blijven zitten op het scherm voor het aanmaken van een site.
- Oplossing: Domeinrecords worden niet langer aangemaakt voor gedeelde basisdomeinen van checkout-formulieren, en ongebruikte achtergrondtaken van hostproviders worden overgeslagen wanneer er geen integratie actief is.
- Oplossing: Randgevallen bij checkout, factuuradres, wachtwoordreset, e-mailverificatie, templatewisseling, rondleidingen en het klantdashboard blokkeren normale klantflows niet langer.
- Oplossing: Broadcast-e-mails houden ontvangers nu privé en vermijden tegelijk fatale SMTP-/pluginfouten wanneer ontvangerslijsten of e-mailtransporten falen.
- Oplossing: Randgevallen bij membershipverlengingen, vervaldatumweergave en betalingsinning voorkomen nu onmiddellijke vervaldatums, crashes of gemiste vereiste betalingen.
- Verbeterd: WordPress-compatibiliteit is getest tot en met 7.0, productie-Vue-assets zijn opnieuw gebouwd vanuit npm-bronnen, en Cypress-end-to-enddekking test nu meer checkout-, setup-, SSO- en gatewayflows.

## Versie 2.12.0 — Uitgebracht op 2026-05-15 {#version-2120--released-on-2026-05-15}

- Nieuw: Hostinger (hPanel) toegevoegd als ondersteunde hostprovider met integratie voor domeinkoppeling
- Nieuw: Site Exporter verwerkt nu netwerkimportbundels voor gestroomlijnd siteherstel in het hele netwerk
- Oplossing: BCC-broadcast-e-mails gebruiken nu een undisclosed-recipients-header om te voorkomen dat adressen van ontvangers worden blootgesteld
- Oplossing: De vervaldatum van een membership raakt niet langer beschadigd bij opslaan met een waarde die geen datum is
- Oplossing: Stripe-membershipupdates wissen nu correct kortingen zonder de verouderde deleteDiscount API aan te roepen
- Oplossing: SSO-omleidingen op domeingekoppelde sites zijn nu begrensd om oneindige omleidingslussen te voorkomen
- Oplossing: Selectie in de afbeeldingskiezer van de setupwizard werkt nu correct het onderliggende datamodel bij
- Oplossing: Site Exporter CLI behoudt nu de juiste selectie van de standaard netwerksite
- Verbeterd: Meegeleverde wp-cli verwijderd uit het pluginpakket, waardoor de plugin kleiner is

## Versie 2.11.0 — Uitgebracht op 2026-05-11 {#version-2110--released-on-2026-05-11}

- Nieuw: Site-exports bundelen nu een zelfstartende `index.php`, zodat de ZIP op een nieuwe host kan worden geïnstalleerd zonder aparte plugininstallatie.
- Nieuw: Met netwerkexport kunnen beheerders alle subsites exporteren in één archief vanaf de beheerpagina Site Export.
- Nieuw: De plantoggle Allow Site Templates wordt nu afgedwongen via een fallbackketen, waardoor templatebeschikbaarheid correct wordt beperkt volgens planlimieten.
- Nieuw: De editor voor checkout-formulieren waarschuwt wanneer een product wordt toegevoegd zonder een verplicht veld dat is geconfigureerd.
- Nieuw: Het tabblad Import-/exportinstellingen beschrijft nu duidelijk het bereik en linkt rechtstreeks naar de Site Export-tool.

## Versie 2.10.0 — Uitgebracht op 2026-05-05 {#version-2100--released-on-2026-05-05}

- Nieuw: Begeleide PayPal-setupwizard voor handmatige invoer van referenties met OAuth-vlagpoort voor naadloze gatewayconfiguratie.
- Nieuw: Klantpaneel voor templatewisseling opnieuw ontworpen met huidige-templatekaart, blijvend raster en knop **Huidige template resetten**.
- Oplossing: Templatewisseling laat de UI niet langer hangen bij AJAX-fout.
- Oplossing: Toestemmingsstatussen voor templatewisseling beveiligd tegen ongeautoriseerde toegang.
- Oplossing: Invoer voor site-overschrijvingen gevalideerd vóór opslaan.
- Oplossing: Prompt voor factuuradres wordt nu getoond wanneer het adres leeg is.
- Oplossing: PHP 8.1 null-naar-string deprecation notices opgelost.
- Oplossing: Currents lazy-loaded vóór init-hook om timingproblemen te voorkomen.
- Oplossing: Gefilterd SSO-pad gerespecteerd in alle loginflows.
- Oplossing: Lege opties voor site-identiteit blijven behouden bij opslaan.

## Versie 2.9.0 — Uitgebracht op 2026-04-30 {#version-290--released-on-2026-04-30}

- Nieuw: Export en import voor één site toegevoegd onder **Gereedschap > Exporteren & importeren**.
- Oplossing: Export-ZIP-bestanden worden nu aangeboden via een geauthenticeerd downloadendpoint.
- Oplossing: SQL-injectierisico en queryproblemen in queries voor export/import in behandeling gecorrigeerd.
- Oplossing: Site in behandeling wordt niet gepubliceerd wanneer beheerder handmatig de e-mail van de klant verifieert.
- Oplossing: Verweesde pending_site-records worden opgeschoond wanneer membership ontbreekt.
- Oplossing: Padding van instellingennavigatie en navigatie via zoekankers gecorrigeerd.
- Oplossing: Sites in behandeling worden nu eerst getoond in de weergave Alle sites.
- Oplossing: User-Agent-header van screenshotprovider (mShots) toegevoegd om 403-fouten te voorkomen.
- Oplossing: Circulaire afhankelijkheid in import-cronplanning opgelost.
- Oplossing: Tour-ID's genormaliseerd naar underscores in sleutels voor gebruikersinstellingen.
- Verbeterd: ZipArchive wordt nu gebruikt in plaats van Alchemy/Zippy voor betere compatibiliteit.

## Versie 2.8.0 — Uitgebracht op 2026-04-29 {#version-280--released-on-2026-04-29}

- Nieuw: Enable Jumper-schakelaar toegevoegd aan de Other Options-instellingen-UI.
- Nieuw: Statuskolom toegevoegd aan de lijsttabel met checkout-formulieren.
- Nieuw: Addon-sunrise-bestandslader voor aangepaste MU-plugin-sunrise-uitbreidingen.
- Verbeterd: Opt-in-instelling voor foutrapportage verwijderd van de instellingenpagina.
- Fix: Sitekaart op bedanktpagina — afbeelding nu begrensd en links correct gestyled.
- Fix: Screenshotprovider overgeschakeld van thum.io naar WordPress.com mShots.
- Fix: Enable Registration en Default Role stellen nu correcte standaardwaarden in bij een nieuwe installatie.
- Fix: `get_site_url()` geeft niet langer leeg terug wanneer het domein een poort bevat.
- Fix: Clone-mediabestanden worden nu correct gekopieerd wanneer de `copy_media`-instelling leeg was.
- Fix: Objectcache correct ongeldig gemaakt na sitemeta-schrijfactie bij netwerkactivatie.
- Fix: Aangepast domein automatisch gepromoveerd tot primair bij DNS-verificatie voor driedelige domeinen.
- Fix: Lopend lidmaatschap geannuleerd wanneer verlopen betaling wordt opgeschoond.
- Fix: Wachtwoordsterktecontrole opnieuw gebonden nadat inline login-prompt is gesloten.
- Fix: Oneindige paginaherlaad gestopt op bedanktpagina wanneer site al is aangemaakt.
- Fix: WP core-registratieoptie gesynchroniseerd bij plugin-activatie en opslaan van instellingen.
- Fix: Null-verloopbewaking toegevoegd in `calculate_expiration` voor PHP 8.4-compatibiliteit.
- Fix: Dubbele aanmeldingen geblokkeerd wanneer klant al een actief lidmaatschap heeft.
- Fix: Null-controle toegevoegd voor `date_expiration` in checkout.
- Fix: Site-provisioning robuuster gemaakt — beperkingen, lidmaatschapsafleiding, domeinpromotie.
- Fix: Statuslabel van pre-installatiecontrole gecorrigeerd naar NOT Activated wanneer controle mislukt.
- Fix: Checkout-domein gebruikt voor e-mailverificatie-URL's.
- Fix: Auto-login na checkout wanneer geen wachtwoordveld aanwezig is.
- Fix: Gratis lidmaatschappen verlopen niet langer — behandeld als levenslang.
- Fix: E-mailverificatiepoort houdt sitepublicatie tegen totdat klant e-mail verifieert.
- Fix: SES v2 API-eindpunt-basispad en identiteitsroute gecorrigeerd.
- Fix: `wu_inline_login_error`-hook uitgezonden in pre-submit-catchblok.
