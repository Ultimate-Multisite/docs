---
title: Hostinger Ìgbàlejò-Pupọ̀
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 ṣafikun agbára Hostinger multi-tenancy kí àwọn domains tí a gbàlejò lè kópa nínú sovereign tenant provisioning pẹ̀lú Hostinger domain-mapping integration tó wà tẹ́lẹ̀.

Lo agbára yìí nígbà tí tenant domains àti tenant infrastructure tí a ya sọ́tọ̀ bá ń jẹ́ iṣakoso nípasẹ̀ Hostinger hPanel.

## Àwọn àkíyèsí ìṣètò {#setup-notes}

1. Ṣètò Hostinger integration pàtàkì lábẹ́ **Ultimate Multisite > Settings > Host Integrations**.
2. Jẹ́rìí pé Hostinger API token lè ṣakoso target domain tàbí subdomain.
3. Mú Multi-Tenancy addon ṣiṣẹ́.
4. Ṣètò tenant isolation strategy kí o tó tẹ tenant jáde.
5. Ṣiṣe migration verification workflow kí o tó fi production traffic ránṣẹ́ sí tenant.

Agbára Hostinger ń lo Hostinger connection tí a pín fún àwọn iṣẹ́ host-side. DNS gbọ́dọ̀ ṣì tọ́ka sí Hostinger account tó tọ́, àti pé àwọn ààlà hPanel account ṣi wúlò.

## Àwọn ìyípadà tó dá lórí agbára pàtó {#capability-specific-changes}

- A lè dá sovereign tenants pẹ̀lú host-aware domain operations.
- Same-machine database host strings ni a ṣe normalize kí grant verification tó wáyé.
- Hostinger-managed tenants yẹ kí wọ́n lo database host value tí hPanel fi hàn àyàfi tí WordPress runtime bá nílò local override.
- Àwọn ìbẹ̀wò SSO gbẹ́kẹ̀lé tenant domain tí ń resolve sí Hostinger-hosted tenant.

## Yíyanjú ìṣòro Hostinger tenants {#troubleshooting-hostinger-tenants}

- Tí tenant install bá kùnà, jẹ́rìí pé domain náà ti so mọ́ Hostinger account tẹ́lẹ̀.
- Tí database verification bá kùnà, fi tenant DB username, database name, àti host binding wé hPanel.
- Tí **Visit (SSO)** bá kùnà, jẹ́rìí pé DNS àti SSL ń ṣiṣẹ́ fún tenant domain.
- Tí teardown bá fi host resources sílẹ̀, yọ àwọn databases, users, tàbí folders tó kù kúrò ní hPanel lẹ́yìn tí o bá ti jẹ́rìí backups.
