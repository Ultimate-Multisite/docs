---
title: Fanamarihana Fialana
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Fanamarihana Fanavaozana (Release Notes)

## Versio 2.13.0 — Natao tamin'ny 2026-06-05

- Vaovao: Nampiditra fanohanana ho "sovereign-tenant" (tenant manokana) ho an'ny kaonty mpanjifa, checkout, fandoavam-bola (billing), toerana (site), faktiora (invoice), fanovana template ary fametrahana domain. Izany dia ahafahan'ny tambajotra tenant mandefa ny mpanjifa hiverina amin'ny tranokala lehibe ho an'ny asa voatsabo.
- Vaovao: Nampiditra fanamarinana fiverenana (renewal-credential checks) ho an'ny fandraisana miverimberina (recurring memberships). Izany dia ahafahana manakana ny fampiasana auto-renewal rehefa tsy misy fifanarahana fandoavam-bola, fampandrenesana (subscription), na token vault voamarina.
- Vaovao: Nampiditra famoahana miverimberina (HMAC-verified loopback publishing) ho an'ny famoronana toerana mbola miandry mba hahatonga ny fanamboarana checkout-to-site ho azo antoka kokoa amin'ireo host izay misy fahatarana eo amin'ny asa mialoha (background jobs).
- Vaovao: Nampiditra ireo toerana fampandrosoana (developer extension points) ho an'ny SSO URLs, ny domain base domains an'ny checkout-form ary ny famoronana rek'asitry ny domain ho azy.
- Fanamboarana: Ho azo antoka kokoa ny SSO eo amin'ireo domain mifandray, ny fidinana an-tserasera (anonymous broker visits), ny fialana (logout), ary ny fifanolanana mampiasa plugin maromaro.
- Fanamboarana: Ny famoronana toerana miandry dia afaka mandray ny fanitsiana avy amin'ny "publish flags" efa lany sy manakana ny mpanjifa tsy ho tafavoaka eo amin'ny efijery famoronana toerana.
- Fanamboarana: Tsy novokarina intsony ireo rek'asitry ny domain ho an'ny checkout-form base domains miaraka, ary atao fialana ireo asa mialoha an'ny host-provider izay tsy misy fifandraisana mihitsy.
- Fanamboarana: Ireo toe-javatra manokana (edge cases) momba ny checkout, adiresin-dàlana fandoavam-bola, fanovana teny hoe "password reset", fanamarinana mail sy famoronana template dia tsy manakana intsony ny fidinana mahazatra an'ny mpanjifa.
- Fanamboarana: Ireo mail voirimana (broadcast emails) dia mitazona ny mpandray azy ho manokana izao, nefa miady amin'ny fahadisoana mafy amin'ny SMTP/plugin rehefa tsy mandeha tsara ireo lisitry ny mpandray na ny fampitana mail.
- Fanamboarana: Ireo toe-javatra manokana momba ny fanavaozana fandraisana (membership renewals), famantarana ny fahaverezan'ny fotoana, ary ny fandraisana vola dia miady amin'ny fahaverezana avy hatrany, ny fihanakalozana (crashes), na ny fahaverezana ny fandoavam-bola ilaina.
- Fanatsarana: Ny fampifanarahana amin'i WordPress dia voavaha hatramin'ny 7.0, ary ny zavatra vita amin'ny Vue ho an'ny famokarana (production) dia novokarina indray avy amin'ny loharanon'ny npm, ary ny Cypress end-to-end coverage dia manao fanazaran-tena bebe kokoa ireo fidinana checkout, setup, SSO ary gateway.

## Versio 2.12.0 — Nialana tamin'ny 2026-05-15

- Vaovao: Ampidirina ny Hostinger (hPanel) ho mpanome hosting ankasitrahana miaraka amin'ny fampifandraisana domain mapping
- Vaovao: Ny Site Exporter dia afaka mandray ireo bundle famindrana tambajotra (network import bundles) mba hahatonga ny fanavaozana ny toerana an-tserasera ho mora kokoa
- Fanitsiana: Ireo mailarana BCC broadcast dia mampiasa header tsy fantatra ny mpandray azy izao mba hisorohana ny fanehoana ny adiresin'ny mpandray
- Fanitsiana: Tsy voa-tsarotra intsony ny daty faran'ny fandraisana anjara rehefa mitahiry amin'ny sandana tsy daty
- Fanitsiana: Ny fanavaozana fandraisana anjara Stripe dia manadio tsara ireo fiantohana (discounts) nefa tsy mampiasa ny API deleteDiscount efa tsy ampiasaina intsony
- Fanitsiana: Ireo famindrana SSO amin'ny toerana misy domain mapping dia voafetra izao mba hisorohana ny fihodinana tsy tapaka
- Fanitsiana: Ny safidy fanendrika sary ao amin'ny setup wizard dia manavao tsara kokoa ny modely data fototra
- Fanitsiana: Ny Site Exporter CLI dia mitazona ny safidy toerana an-tserasera (network site selection) tokony ho eo fa tsy miova
- Fanatsarana: Esory ny wp-cli voafandaka ao amin'ny package plugin, ka mampihena ny haben'ny plugin

## Versio 2.11.0 — Nialana tamin'ny 2026-05-11

- Vaovao: Ny Site exports dia afaka manome `index.php` mampandray azy (self-booting) mba azo apetraka ao amin'ny hostinger vaovao tsy mila apetraka plugin hafa
- Vaovao: Ny Network export dia mamela ny administrator handefa ireo subsites rehetra ao anaty archive iray avy amin'ny pejy Site Export admin
- Vaovao: Azo atao ny manome fanindroana (enforce) ny toggle Site Templates satria misy chain fampitahana, izay mifehy tsara ny fahafahan'ny template araka ny fetran'ny plan
- Vaovao: Ny checkout form editor dia manome fampitandremana rehefa misy vokatra ampiana nefa tsy voatendry ny champ ilaina
- Vaovao: Ny tab Import/Export dia manazava mazava kokoa ny fatra iainany ary mifandray mivantana amin'ny tool Site Export

## Versio 2.10.0 — Nialana tamin'ny 2026-05-05

- Vaovao: Fitaovana fanampiana (setup wizard) ho an'ny PayPal izay mitarika ny fidirana amin'ny fampahalalana manokana (manual credential entry) miaraka amin'ny fifehezana OAuth mba hahatonga ny gateway ho mora ampiasaina.
- Vaovao: Novana ny famolavolana ny panel an'ny mpanjifa rehefa mifindra template, misy card **current-template**, grid maharitra (persistent grid), ary bokotra **Reset current template**.
- Fanamboarana: Tsy mitazona intsony ny UI rehefa tsy mandeha tsara ny AJAX rehefa mifindra template.
- Fanamboarana: Voavahana ny fepetra ara-dalàna amin'ny fitindriana template mba hiarovana azy amin'ny fidirana tsy nahazo alalana.
- Fanamboarana: Ny fampidirana (inputs) ho an'ny override ny toerana dia voamarina alohan'ny hitahirizana azy.
- Fanamboarana: Atao atao ny fangatahana ny adiresy fandoavam-bola rehefa tsy misy adiresy no voasoratra.
- Fanamboarana: Nahazo ny fampahafantarana momba ny PHP 8.1 momba ny fanaovana string avy amin'ny null (null-to-string deprecation notices).
- Fanamboarana: Atao mialoha ny lazy-loaded ankehitriny alohan'ny hook init mba hisorohana olana mifandraika amin'ny fotoana.
- Fanamboarana: Voatandrina ny lalan'ny SSO (SSO path) ho an'ny fidirana rehetra.
- Fanamboarana: Atao mitazona ireo safidy momba ny maha-izy azy (site identity options) rehefa mitahiry.

## Version 2.9.0 — Nivoaka tamin'ny 2026-04-30

- Vaovao: Novana ny famoahana sy ny fampidirana ho an'ny site iray eo amin'ny **Tools > Export & Import**.
- Fanamboarana: Ny ZIP files dia azo omeny amin'ny alalan'ny endpoint download voamarina.
- Fanamboarana: Napetraka ny loza momba ny SQL injection sy ny olana amin'ny query ao anatin'ny export/import mbola miandry.
- Fanamboarana: Tsy ho nivoaka ny site mbola miandry rehefa manamarina manokana ny email ny administrator.
- Fanamboarana: Atao famafazana ireo `pending_site` izay tsy misy fandraisana anjara (membership).
- Fanamboarana: Naparahina ny fampidirana (padding) amin'ny navigation Settings ary ny anchor navigation ho an'ny fitadiavana.
- Fanamboarana: Atao voalohany ao amin'ny fomba fijery "All Sites" ireo site mbola miandry.
- Fanamboarana: Ampiana lohateny User-Agent (User-Agent header) ny mpamokatra screenshot (mShots) mba hisorohana ny fahadisoana 403.
- Fanamboarana: Voavahana ny fifandraisana miankina amin'ny tsindrim-peo (circular dependency) ho an'ny fandaharam-potoana import.
- Fanatsarana: Ampiasaina an'i ZipArchive fa tsy Alchemy/Zippy mba hahatonga azy ho mety kokoa.

## Version 2.8.0 — Nivoaka tamin'ny 2026-04-29

- Vaovao: Fanondroana Jumper (toggle) voafidy dia nampidirina ao amin'ny fampisehoana an'ny "Other Options" settings UI.
- Vaovao: Kolontsaina "Status" dia nampidirina tao amin'ilay tabilao fampisehoana ny forms checkout.
- Vaovao: Mpampiditra (Addon) sunrise file loader ho an'ny custom MU-plugin sunrise extensions.
- Nanatsara: Esory ny fepetra fanomezana tatitra fahadisoana (error-reporting opt-in setting) avy amin'ny pejy settings.
- Fanamboarana: Site card an'ny pejy "Thank-you" — ny sary dia voafetra ary ny rohy dia namboarina tsara kokoa.
- Fanamboarana: Ny mpamatsy screenshot dia novana avy amin'ny thum.io ho WordPress.com mShots.
- Fanamboarana: Ny Fandraisana (Registration) sy ny Anjara toerana Azo atao (Default Role) dia voafidy tsara kokoa rehefa manao fametrahana vaovao.
- Fanamboarana: Tsy mamerina intsony ny valin'ny `get_site_url()` raha misy port ao anatin'ny domain.
- Fanamboarana: Ny rakitra media dia voasokajy tsara rehefa tsy misy fepetra (setting) `copy_media`.
- Fanamboarana: Ny object cache dia voavaha tsara aorian'ny fanoratana sitemeta rehefa manao "network-activate".
- Fanamboarana: Ny domain manokana dia voafidy ho primary ho azy amin'ny DNS verification ho an'ny domain misy telo (3-part domains).
- Fanamboarana: Esory ny fandraisana anjara (membership) rehefa vita ny fandoavana izay efa harahina.
- Fanamboarana: Ny fanamarinana ny herin'ny teny (Password strength checker) dia niverina tamin'ny fampidirana login anaty (inline login prompt) voafetra.
- Fanamboarana: Nisy fampitsoana tsy tapaka (infinite page reload) tao amin'ny pejy "thank-you" rehefa vita ny site efa misy.
- Fanamboarana: Ny safidy fametrahana an'ny WP core dia mifandray tsara rehefa manao activation ny plugin sy mitahiry settings.
- Fanamboarana: Nampiditra fiarovana (Null expiration guard) tao amin'ny `calculate_expiration` ho an'ny fampifanarahana amin'ny PHP 8.4.
- Fanamboarana: Voafetra ny fametrahana miverimberina (Duplicate signups blocked) rehefa manana fandraisana anjara (membership) mavitrika ny mpanjifa efa misy.
- Fanamboarana: Nampiditra fanamarinana (Null check) ho an'ny `date_expiration` ao amin'ny checkout.
- Fanamboarana: Voatambatra tsara kokoa ny fametrahana toerana (Site provisioning) — ny fetra, ny fahalalana ny fandraisana anjara (membership inference), ary ny famoronana domain.
- Fanamboarana: Ny marika "Pre-install check status" dia voatonga hoe TSY Voafidy (NOT Activated) rehefa tsy mandeha ny fanamarinana.
- Fanamboarana: Ny domain ampiasaina ho an'ny URL email verification dia novana.
- Fanamboarana: Fandraisana anaty azy ho azy aorian'ny checkout raha tsy misy champ "password".
- Fanamboarana: Tsy harahina intsony ny fampandresena (Free memberships) — dinihina ho fiainana mandrakizay (lifetime).

- Fanamboarana: Ny varavarana fanamarinana mailaka dia mitazona ny famoahana ny tranokala mandra-pahatonga ny mpanjifa manamarina ny mailaka.
- Fanamboarana: Naparahina ny lalana fototra (base path) sy ny lalana famantarana (identity route) amin'ny SES v2 API.
- Fanamboarana: Nampidirina ny `wu_inline_login_error` hook ao anatin'ny pre-submit catch block.
