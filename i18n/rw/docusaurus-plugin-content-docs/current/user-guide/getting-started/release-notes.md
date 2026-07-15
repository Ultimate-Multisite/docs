---
title: Inyandiko za Urugero
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Noter ya Urugero

## Versiyon 2.13.0 — Yemerwe ku 2026-06-05 {#version-2130--released-on-2026-06-05}

- Shya: Twifish yemezo ya sovereign-tenant ku kumenya imyanya y'abantu b'ubwoko bw'umwe (customer account), checkout, billing, site, invoice, gukoresha template, no gukoresha domain mapping. Ibi byagira ngo tenant networks zikoreshe imyanya y'abantu kugira ngo ziboneye mu site y'ingamba nyamukuru ku mishinga itandukanye.
- Shya: Twifish yemezo ya renewal-credential ku gukoresha uburyo bwo kumenya ko umuntu yashobora kuboneka mu gihe cy'umwe (recurring memberships) kugira ngo gateways ziboneye ko zikoresha auto-renewal iyo hari ibyo byashoboye kubonwa nk'ibyo bya billing, subscription, cyangwa vault token.
- Shya: Twifish yemezo ya HMAC-verified loopback publishing ku gukora site mu gihe cy'umwe (pending site creation) kugira ngo uburyo bwo gutangira site (checkout-to-site provisioning) bishoboye kuboneka neza kuri hosts aho ibyo byo gukora mu gihe cy'umwe byashobye.
- Shya: Twifish yemezo ya developer extension points ku SSO URLs, checkout-form base domains, no gukoresha domain-record kugira ngo hari uburyo bwo gukora domain-record mu gihe cy'umwe (automatic domain-record creation).
- Gukora: SSO iri neza cyane kuri mapped domains, ibyo byashoboye kuboneka mu gihe cy'umwe (anonymous broker visits), logout, no ubwoko bw'ibyo byo gukoresha plugin.
- Gukora: Gutangira site mu gihe cy'umwe bishobye kugira ngo bishoboye kwirinda ibyaha ku mishinga y'uburyo bwo gutangira site (site-creation screen).
- Gukora: Domain records ntibyo byo gukoresha checkout-form base domains, kandi ibyo byo gukora mu gihe cy'umwe (unused host-provider background jobs) byashobye kuboneka iyo nta integration itangwa.
- Gukora: Icyemezo cy'ubwoko bw'ibyo byo gutangira site (checkout), billing address, password reset, email verification, gukoresha template, tours, no edge cases zikoreshe mu customer dashboard ntiziboneye ibyo byo kubyara uburyo bwo umuntu gukora.
- Gukora: Icyemezo cy'email broadcast byashobye kwifashisha abantu bakoreshe mu gihe cy'umwe (broadcast emails) kugira ngo babone neza, kandi byashobye kubyara ibyo byo SMTP/plugin fatal errors iyo abantu bafashe cyangwa imyitwarire y'email byashobye kwibuka.
- Gukora: Icyemezo cy'renewal memberships, gukoresha expiration display, no edge cases zikoreshe mu gukoresha amafaranga ntiziboneye ibyo byo kubyara uburyo bwo gutangira imyitwarire (renewals), gukoresha expiration display, no edge cases.
- Gukora: Uburyo bwo gukoresha WordPress byashobye kwigishwa ku gihe cy'7.0, assets y'ubwoko Vue byashobye kuboneka mu gihe cy'npm sources, kandi Cypress end-to-end coverage iriho ibyo byo checkout, setup, SSO, no gateway flows byashobye kubyara uburyo bwo gukoresha.

## Versiyon 2.12.0 — Yisobanura ku giheye ku itirindwe ku gihe 2026-05-15 {#version-2120--released-on-2026-05-15}

- Shya: Wakarwa Hostinger (hPanel) nk'ubwoko bw'ibwoko bishobora gukoreshwa n'uburyo bwo gutandukanya domain.
- Shya: Site Exporter yitwa imbere uburyo bwo gukoresha network import bundles kugira ngo ugashobore guhindura site mu giti cyose mu buryo bwiza.
- Gukora (Fix): Email zikoreshwa ku BCC n'ibindi byo, zikoresheje header itarimo ubutumwa bwo abantu batarimo kubyitondera ibyo abantu bashobora kwihagarara.
- Gukora (Fix): Itariki yisobanuro y'ubwoko bw'ubwoko (Membership expiration date) ntibyo bitwarira mu gihe cyo ugashobora gukoresha uburyo bwo gufata ibyo n'ubwoko bwa itariki.
- Gukora (Fix): Ubutumwa bwa Stripe membership yitwa imbere kugira ngo yisobanura neza ibyo byo bitwarira discounts nta gukoresha API ya deleteDiscount itarimo.
- Gukora (Fix): Redirects z'SSO ku site zishobora guhinduka domain, zikoresheje uburyo bwo kwibanda kugira ngo zitangire mu buryo bwiza kandi zishoboye gukoreshwa cyane.
- Gukora (Fix): Uburyo bwo gukoresha panyura ibyo ku setup wizard yitwa imbere kugira ngo yisobanure neza uburyo bwo guhindura data mu gihe cyo.
- Gukora (Fix): Site Exporter CLI yitwa imbere kugira ngo itandukanye n'ubwoko bwiza bwo gukoresha site mu gihe cyo.
- Gutera (Improved): Wakarwa wp-cli wari mu plugin, byitwarira uburyo bwo gutera umubare w'plugin, byitwarira ibyo byo bitandukanye n'ibindi.

## Versiyon 2.11.0 — Yisobanura ku gihe cyo gufata ku gihe 2026-05-11 {#version-2110--released-on-2026-05-11}

- Shya: Site exports zishobora gukoresha self-booting `index.php` kugira ngo ZIP yitwa imbere mu buryo bwo gutandukanya site mu gihe cyo nta plugin itandukanye.
- Shya: Network export yishobora guhindura abagize ibyo bose by'ubwoko (subsites) mu archive runaka ku page ya Site Export admin.
- Shya: Kugira ngo uburyo bwo gukoresha Site Templates plan toggle yitwa imbere kugira ngo bitwarire mu buryo bwiza, byitwarira ibyo byo bitarimo ubwoko bw'plan (plan limits).
- Shya: Checkout form editor yishobora guhagarara iyo ugiye gukoresha product nta field itarimo kubyitwa.
- Shya: Tab ya Import/Export settings yisobanura neza ibyo byo bitwarira mu gihe cyo kandi yitwa imbere kugira ngo yoroshye guhagarara ku Site Export tool.

## Versiyon 2.10.0 — Yisobanura ku gihe cyo gufata ku gihe 2026-05-05 {#version-2100--released-on-2026-05-05}

- Shya: Urugero ya PayPal kwa uburyo bwa setup w'ubwujumbura (guided setup wizard) kwa kuingiza credentials kwa mkono na OAuth flag gate kumenyeshwa kwa ushirikizi wa gateway.
- Shya: Panel ya mteja iliyobadilishwa kwa kutumia template inayoitwa current-template, grid inayodumu (persistent grid), na kitufe cha **Reset current template**.
- Kurekebisha: Kubadilisha template hakuna tena kunasababisha UI isikie wakati AJAX inashindwa.
- Kurekebisha: Hali za ruhusa za kubadilisha template zimeimarishwa dhidi ya ufikiaji usiohalali.
- Kurekebisha: Mainguio ya site override yamehitimishwa kabla ya kuhifadhi.
- Kurekebisha: Ombi la anwani ya malipo sasa linawonekana wakati anwani haipo.
- Kurekebisha: Taarifa za kuondoa PHP 8.1 null-to-string zimefumbuliwa.
- Kurekebisha: Current lazy-loaded kabla ya init hook ili kuzuia matatizo ya wakati (timing issues).
- Kurekebisha: Itaratibu ya SSO iliyofiltri imepokelewa katika mitiririko yote ya kuingia.
- Kurekebisha: Chaguo za utambulisho wa site ambazo zimefuta zimehifadhi wakati wa kuhifadhi.

## Version 2.9.0 — Iliyotolewa tarehe 30-04-2026 {#version-290--released-on-2026-04-30}

- Shya: Export na import ya single-site imejaliwa chini ya **Tools > Export & Import**.
- Kurekebisha: Faili za ZIP sasa zinatolewa kupitia endpoint wa kupakua unaohitaji uthibitisho (authenticated download endpoint).
- Kurekebisha: Hatari ya SQL injection na masuala ya query katika maombi yaliyosubiri export/import yametolewa.
- Kurekebisha: Site inayosubiri haionyeshi wakati msimamizi anapohakikisha barua pepe ya mteja kwa mkono.
- Kurekebisha: Rekodi za pending_site zilizopotea zinafutwa wakati usajili (membership) haipo.
- Kurekebisha: Padding la navigation na anchor ya utafutaji limearekebishwa.
- Kurekebisha: Sites inayosubiri sasa inaonekana kwanza kwenye mwonekano wa All Sites.
- Kurekebisha: User-Agent header ya mtoa picha (mShots) imejaliwa ili kuzuia makosa ya 403.
- Kurekebisha: Circular dependency ya ratiba ya import cron imefumbuliwa.
- Kurekebisha: Tour IDs zimefanywa sawa na underscores kwenye keys za user settings.
- Kuboreshwa: ZipArchive sasa inatumika badala ya Alchemy/Zippy kwa utendaji bora wa utendaji (compatibility).

## Version 2.8.0 — Iliyotolewa tarehe 29-04-2026 {#version-280--released-on-2026-04-29}

- Nyaho: Jumper toggle yashyemo cyo gushyira mu settings UI ya Other Options.
- Nyaho: Kolamu (Status column) yashyirwaho mu list table ya checkout forms.
- Nyaho: Addon sunrise file loader ku mshobora w'ibyo mu custom MU-plugin sunrise extensions.
- Yitandukanye: Icyemezo cyo gushyira error-reporting kuri settings page yashyirwaho.
- Gufungura: Site card ya thank-you page — ishyenziye (image) yashobora gushyirwa mu bwoko kandi links yashobora guhindurwa neza.
- Gufungura: Screenshot provider yashoboraga ku thum.io yashoboraga ku WordPress.com mShots.
- Gufungura: Gukoresha Registration n Default Role yashobora gushyira defaults z'ibyo mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo gushyirwa mu gihe cyo

- Gukemura: Icyemezo cyo gukoresha email verification yitera umugambi w'ubwumvikane (site publish) kugira ngo umuthanda w'umukoresha atangire gukora ibindi.
- Gukemura: Uburyo bwo gukoresha SES v2 API endpoint base path n'uburyo bwo gukoresha identity yari yashyizwe mu buryo bwiza.
- Gukemura: Icyemezo cyo `wu_inline_login_error` cyari cyemererwa mu block cyo kumenya ibintu mbere yuko umukoresha atagize (pre-submit catch block).
