---
title: Waraka wa Kutolewa
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Taarifa za Kutolewa

## Toleo 2.12.0 — Imetolewa tarehe 2026-05-15

- Jipya: Tumeongeza Hostinger (hPanel) kama mtoa huduma wa hosting anayefaa, ikiwa na uwezo wa kuunganisha nyanja (domain mapping).
- Jipya: Site Exporter sasa inashughulikia vikundi vya kuingiza mtandao (network import bundles) kwa ajili ya kurejesha tovuti nzima mtandaoni kwa urahisi.
- Kisahihisho: Barua pepe za matangazo za BCC sasa zinatumia kichwa cha `undisclosed-recipients` kuzuia kuonyesha anwani za wapokeaji.
- Kisahihisho: Tarehe ya kuisha kwa usajili haitafichwa tena wakati wa kuhifadhi kwa thamani lisilo wa tarehe.
- Kisahihisho: Sasisho za usajili wa Stripe sasa zinaondoa punguzo kwa usahihi bila kuitisha API ya `deleteDiscount` iliyopitwa.
- Kisahihisho: Uelekezaji wa SSO kwenye sites zilizo na nyanja zilizounganishwa sasa zimewekwa kikomo ili kuzuia mzunguko wa kurudi bila mwisho.
- Kisahihisho: Uchaguzi wa picha katika mwongozo wa kuweka mipangilio sasa unasasisha kwa usahihi mfumo wa data uliopo.
- Kisahihisho: Site Exporter CLI sasa inahifadhi uchaguzi sahihi wa tovuti ya msingi ya mtandao.
- Kuboresha: Tumefuta `wp-cli` iliyofungwa kutoka kwa kifurushi cha plugin, hivyo kupunguza ukubwa wa plugin.

## Toleo 2.11.0 — Imetolewa tarehe 2026-05-11

- Jipya: Site exports sasa zinakusanya `index.php` inayojitezesha kuwasha (self-booting) ili ZIP iweze kusakinishwa kwenye hosting jipya bila kusakinisha plugin tofauti.
- Jipya: Export ya mtandao inaruhusu wasimamizi kuleta (export) subsites zote katika hifadhi moja kutoka kwenye ukurasa wa admin wa Site Export.
- Jipya: Kuwezesha kubadilisha Site Templates sasa kunatekelezwa kupitia mnyororo wa msaada (fallback chain), likizuia kwa usahihi upatikanaji wa template kwa mipaka ya mpango.
- Jipya: Hariri ya fomu ya malipo inatoa onyo wakati bidhaa inaongezwa bila sehemu muhimu (required field) kuwekwa.
- Jipya: Tab ya mipangilio ya Import/Export sasa inaelezea wazi wengo lake na inalinganisha moja kwa moja na zana ya Site Export.

## Toleo 2.10.0 — Imetolewa tarehe 2026-05-05

- Jipya: Mwongozo wa kuweka mipangilio ya PayPal kwa kuingiza usahihi kwa mikono, na kizuizi cha bendera cha OAuth kwa ajili ya kuweka mipangilio ya gateway kwa urahisi.
- Jipya: Sehemu ya mteja ya kubadilisha template imerekebishwa upya na kadi ya template ya sasa, grid ya kudumu, na kitufe cha **Reset current template**.
- Kisahihisho: Kubadilisha template hakina tena kusababisha UI kukaa (hang) wakati wa kushindwa kwa AJAX.
- Kisahihisho: Hali za ruhusa za kubadilisha template zimehakikishwa dhidi ya ufikiaji usio halali.
- Kisahihisho: Vingiliaji vya kubadilisha tovuti (Site override inputs) vinathibitishwa kabla ya kuhifadhi.
- Kisahihisho: Onyo la anwani ya malipo sasa linaonyeshwa wakati anwani ni tupu.
- Kisahihisho: Notisi za kuondoa uthibitisho wa 'null' kuwa 'string' za PHP 8.1 zimehakikishwa.
- Kisahihisho: Currents inapakuliwa kwa uvivu kabla ya hook ya `init` ili kuzuia matatizo ya muda.
- Kisahihisho: Njia ya SSO iliyopunguzwa (Filtered SSO path) inheshimiwa katika mifumo yote ya kuingia.
- Kisahihisho: Chaguo za utambulisho wa tovuti tupu zinahifadhiwa wakati wa kuhifadhi.

## Toleo 2.9.0 — Imetolewa tarehe 2026-04-30

- Jipya: Export na Import ya tovuti moja zimeongezwa chini ya **Tools > Export & Import**.
- Kisahihisho: Faili za ZIP za export sasa zinatolewa kupitia endpoint ya upakaji mtandaoni iliyothibitishwa.
- Kisahihisho: Hatari ya SQL injection na matatizo ya queries katika queries za export/import zilizosubiri zimehakikishwa.
- Kisahihisho: Tovuti iliyosubiri haitajulikani (published) wakati msimamizi anathibitisha kwa mikono barua pepe ya mteja.
- Kisahihisho: Rekodi za `pending_site` zilizopotea zinasafishwa wakati usajili haupo.
- Kisahihisho: Padding ya navigasi ya mipangilio na navigasi ya kiungo cha utafutaji zimehakikishwa.
- Kisahihisho: Tovuti zilizosubiri sasa zinaonyeshwa kwanza katika mtazamo wa All Sites.
- Kisahihisho: Kichakataji cha picha (Screenshot provider) (mShots) User-Agent header kimeongezwa ili kuzuia makosa ya 403.
- Kisahihisho: Utegemezi wa mzunguko wa ratiba ya cron ya import umarekebishwa.
- Kisahihisho: ID za Tour zimerekebishwa kuwa underscores katika vitu vya keys vya mipangilio ya mtumiaji.
- Kuboresha: ZipArchive sasa inatumika badala ya Alchemy/Zippy kwa urahisi zaidi wa kutumia.

## Toleo 2.8.0 — Imetolewa tarehe 2026-04-29

- Jipya: Kuwezesha Jumper toggle kimeongezwa kwenye UI ya mipangilio ya Other Options.
- Jipya: Sehemu ya 'Status' imoongezwa kwenye jedwali la orodha ya fomu za malipo.
- Jipya: Addon sunrise file loader kwa ajili ya upanuzi wa MU-plugin sunrise maalum.
- Kuboresha: Chaguo la kuondoa taarifa za makosa (error-reporting opt-in) limeondolewa kutoka kwenye ukurasa wa mipangilio.
- Kisahihisho: Kadi ya tovuti ya ukurasa wa shukrani — picha sasa imewekwa mipaka na viungo vimepambwa kwa usahihi.
- Kisahihisho: Kichakataji cha picha kimebadilishwa kutoka thum.io kwenda WordPress.com mShots.
- Kisahihisho: Enable Registration na Default Role sasa huweka values za kiwango cha kawaida wakati wa usakinishaji mpya.
- Kisahihisho: `get_site_url()` hairudishi tupu tena wakati nyanja inajumuisha bandari (port).
- Kisahihisho: Faili za media za kloni sasa zinakopwa kwa usahihi wakati mipangilio ya `copy_media` ilikuwa tupu.
- Kisahihisho: Object cache inafutishwa kwa usahihi baada ya kuandika sitemeta ya network-activate.
- Kisahihisho: Nyanja maalum inapopandishwa kiotomatiki kuwa ya kwanza wakati wa uthibitisho wa DNS kwa nyanja za sehemu 3.
- Kisahihisho: Usajili wa usajili (membership) unakasishwa wakati malipo yaliyokwisha kufika yanapofutwa.
- Kisahihisho: Kifuatilia nguvu ya neno la siri kimeunganishwa tena baada ya kuondolewa kwa onyo la kuingia mtandaoni.
- Kisahihisho: Upya wa ukurasa wa mwisho (infinite page reload) umesimamishwa kwenye ukurasa wa shukrani wakati tovuti tayari imeundwa.
- Kisahihisho: Chaguo la usajili wa WP core limeunganishwa wakati wa kuwezesha plugin na kuhifadhi mipangilio.
- Kisahihisho: Kinga ya 'null' ya muda wa kuisha imoongezwa katika `calculate_expiration` kwa urahisi wa PHP 8.4.
- Kisahihisho: Usajili mara mbili unazuiliwa wakati mteja tayari ana usajili hai.
- Kisahihisho: Uthibitisho wa 'null' wa `date_expiration` katika malipo.
- Kisahihisho: Uwekaji wa tovuti (Site provisioning) umarahishwa — mipaka, uthibitisho wa usajili, na kupandishwa kwa nyanja.
- Kisahihisho: Hali ya lebo ya ukaguzi wa awali (Pre-install check) imarekebishwa kuwa SIO Activated wakati ukaguzi unashindikana.
- Kisahihisho: Nyanja ya malipo inatumika kwa URL za uthibitisho wa barua pepe.
- Kisahihisho: Ku-login kiotomatiki baada ya malipo wakati hakuna sehemu ya neno la siri.
- Kisahihisho: Usajili wa bure hauzishia tena — unachakatwa kama wa maisha yote.
- Kisahihisho: Kizuizi cha uthibitisho wa barua pepe kinashikilia kuchapishwa kwa tovuti hadi mteja atithibitisha barua pepe.
- Kisahihisho: Njia ya msingi ya API ya SES v2 na njia ya utambulisho zimehakikishwa.
- Kisahihisho: Hook ya `wu_inline_login_error` inatolewa katika block ya kukamata kabla ya kuwasilisha.
