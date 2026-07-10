---
title: Usimamizi wa Multi-Tenancy wa Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-Tenancy ya Hostinger {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 inafanya uwezo wa multi-tenancy wa Hostinger ili maeneo yaliyohostwa (hosted domains) yaweze kushiriki katika upatikanaji wa wateja (tenant provisioning) wenye uhuru pamoja na ushirikishwaji unao wepo wa mapendekezo ya domain za Hostinger.

Tumia uwezo huu wakati unatumia maeneo ya wateja (tenant domains) na miundo iliyopigwa mgawanyiko (isolated tenant infrastructure) kupitia hPanel ya Hostinger.

## Maelezo ya Kuandaa (Setup notes) {#setup-notes}

1. Weka mipangilio ya ushirikishwaji wa msingi (core integration) wa Hostinger chini ya **Ultimate Multisite > Settings > Host Integrations**.
2. Thibitisha kuwa token ya API ya Hostinger inaweza kusimamia domain au subdomain inayolengwa.
3. Washa addon ya Multi-Tenancy.
4. Weka mkakati wa kutenganisha wateja (tenant isolation strategy) kabla ya kuchapisha mteja huyo.
5. Endesha mfumo wa kuangalia migogoro ya uhamisho (migration verification workflow) kabla ya kutuma trafiki ya uzalishaji (production traffic) kwa mteja huyo.

Uwezo wa Hostinger unatumia muunganisho ulioshirikishwa wa Hostinger kwa shughuli za upande wa seva (host-side operations). DNS bado lazima iende kwenye akaunti sahihi ya Hostinger, na mipaka ya akaunti ya hPanel bado inatumika.

## Mabadiliko Maalum ya Uwezo (Capability-specific changes) {#capability-specific-changes}

- Wateja wenye uhuru (Sovereign tenants) wanaweza kuundwa kwa kutumia shughuli za domain zinazozingatia seva (host-aware).
- Strings za host database kwenye mashine moja zinapangwa upya kabla ya uthibitisho wa kutoa ruhusa (grant verification).
- Wateja wanaosimamiwa na Hostinger wanapaswa kutumia thamani ya host database inayowekewa kwenye hPanel isipokuwa kama WordPress runtime inahitaji kubadilisha ndani.
- Zitii za SSO zinategemea domain la mteja kuingia kwenye mteja aliyehostwa na Hostinger.

## Kutatua Matatizo Kuhusu Wateja wa Hostinger (Troubleshooting Hostinger tenants) {#troubleshooting-hostinger-tenants}

- Ikiwa usakinishaji wa mteja unashindwa, angalia kama domain tayari imewekwa kwenye akaunti ya Hostinger.
- Ikiwa uthibitisho wa database unashindwa, kulinganisha jina la mtumiaji wa DB, jina la database, na uunganisho wa host na hPanel.
- Ikiwa **Visit (SSO)** inashindwa, thibitisha kuwa DNS na SSL ziko active kwa domain la mteja.
- Ikiwa kuondoa (teardown) kunabaki rasilimali za seva nyuma, ondoa database, watumiaji, au folda zilizobaki kutoka hPanel baada ya kuthibitisha backups.
