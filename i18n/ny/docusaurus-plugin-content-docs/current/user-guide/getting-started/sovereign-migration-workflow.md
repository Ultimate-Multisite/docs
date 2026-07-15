---
title: Mwayi wa Kukhala kwa Mwayi
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Workflow ya Kutsja ya Sovereign

Ultimate Multisite: Multi-Tenancy 1.2.0 imapanga mabula (gates) ya kuthibitisha migiraki pa kupita kuhamisha subsite ya kawaida kwenda mazingira ya sovereign tenant.

## Mbele ya kuanza {#before-you-start}

Thibitisha kwamba una:

- Backup iliyopo ya tovuti ya chanzo.
- Addon ya Multi-Tenancy inafanya kazi.
- Database ya tenant inayolengwa, mizizi ya mfumo wa faili (filesystem root), na domain yame tayari.
- Binding la database host linalolingana na mazingira ya mwisho.
- Ufikiaji wa kutekeleza amri za WP-CLI kwa mtandao wote.

## Workflow inayopendekezwa {#recommended-workflow}

1. Andaa database ya tenant na mizizi ya mfumo wa faili (filesystem) ya mwisho.
2. Jisajili au badilisha mipangilio ya utengenezaji wa tenant (tenant isolation settings).
3. Tekeleza migiraki ya tenant migration.
4. Tengeneza au thibitisha watumiaji wa tenant.
5. Futa kazi za async migration jobs.
6. Tekeleza uthibitishaji wa migiraki ya sovereign migration.
7. Tembelea tenant kwa kutumia SSO (Single Sign-On).
8. Badilisha DNS au routing tu baada ya uthibitishaji kukamilika.

## Mabula ya uthibitishaji (Verification gates) {#verification-gates}

Workflow ya uthibitishaji inachunguza migiraki kutoka mitazamo kadhaa:

- Schema ya tenant ipo na inaweza kuandikwa na mwandishi wa database ya tenant.
- Database host iliyowekwa imepana ruhusa sahihi.
- Watumiaji wa tenant wapo na vinalingana na idadi inayotarajiwa ya watumiaji wa usakinishaji wa sovereign.
- Queue ya async push inaweza kufutwa kwa mafanikio.
- Njia za data za zamani za upande wa mtandao (network-side) hazihitajiki tena kwa tenant ya sovereign.

Tathmini kushindwa la uthibitishaji kama vizuizi vya kuanza. Fikirisha tatizo la database, mtumiaji, queue, au routing lililorejelewa na urekebishe, kisha fanya uthibitishaji tena kabla ya kuwapa wateja tenant.

## Tembelea ya kwanza ya uzinduzi (First production visit) {#first-production-visit}

Baada ya uthibitishaji kukamilika, tumia **Visit (SSO)** kutoka kwenye skrini ya usimamizi wa tovuti kwa ajili ya ziara ya kwanza ya admin. Hii inathibitisha routing ya tenant, utendaji wa SSO token, origin pinning, na utengenezaji wa watumiaji upande wa tenant katika hatua moja iliyodhibitiwa.
