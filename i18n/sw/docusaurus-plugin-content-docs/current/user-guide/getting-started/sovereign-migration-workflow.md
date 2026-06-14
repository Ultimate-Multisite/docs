---
title: Mchakato wa Kuhamia wa Ufalme
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Mchakato wa Kuhamishwa kwa Utawala wa Uhuru (Sovereign Migration Workflow)

Ultimate Multisite: Multi-Tenancy 1.2.0 imeweka milango ya uthibitishaji wa kuhamisha ili kubadilisha subsite ya kawaida kwenda kwenye miundo ya mteja mwenyewe (sovereign tenant).

## Kabla ya kuanza

Hakikisha una yafuatayo:

- Nakala salama (backup) ya tovuti asilia.
- Addon ya Multi-Tenancy inakazi.
- Database, mfumo wa faili (filesystem root), na domain la mteja lengwa tayari.
- Muunganisho wa host ya database unaolingana na mazingira lengwa.
- Ufikiaji wa kutekeleza amri za WP-CLI kwa mtandao.

## Mchakato unaopendekezwa (Recommended workflow)

1. Andaa database na mfumo wa faili la mteja lengwa.
2. Jisajili au bonyeza kubadilisha mipangilio ya kutenganisha wateja (tenant isolation settings).
3. Tekeleza kuhamisha mteja (tenant migration).
4. Tengeneza au thibitisha watumiaji wa mteja.
5. Futa kazi za kuhamisha zisizozidi wakati (async migration jobs).
6. Tekeleza uthibitishaji wa kuhamishwa kwa uhuru (sovereign migration verification).
7. Tembelea mteja kwa kutumia SSO.
8. Badilisha DNS au routing tu baada ya uthibitishaji kukamilika.

## Milango ya Utthibitishaji (Verification gates)

Mchakato wa uthibitishaji unachunguza kuhamishwa kutoka mitazamo kadhaa:

- Muundo (schema) wa mteja unawepo na unaweza kuandikwa na mwandishi wa database la mteja.
- Host ya database iliyowekwa ina ruhusa sahihi.
- Watumiaji wa mteja wapo na wanalingana na idadi inayotarajiwa ya watumiaji wa usakinishaji wa uhuru (sovereign install user count).
- Habari za kuingia kwa kazi zisizozidi wakati zinaweza kufutwa kwa mafanikio.
- Njia za data za zamani za upande wa mtandao hazihitajiki tena kwa mteja mwenyewe (sovereign tenant).

Treated uthibitishaji kushindwa kama vikwazo vya awali kabla ya kuanza. Fikiri tatizo la database, mtumiaji, queue, au routing lililotajwa, na uendelee kutekeleza uthibitishaji tena kabla ya kuwafungulia wateja.

## Tembelea ya Kwanza ya Uzalishaji (First production visit)

Baada ya uthibitishaji kukamilika, tumia **Visit (SSO)** kutoka kwenye skrini ya usimamizi wa tovuti kwa ziara ya kwanza ya admin. Hii inathibitisha uendeshaji wa mteja (tenant routing), utendaji wa token la SSO, kuweka asili (origin pinning), na utengenezaji wa watumiaji upande wa mteja katika hatua moja iliyodhibitiwa.
