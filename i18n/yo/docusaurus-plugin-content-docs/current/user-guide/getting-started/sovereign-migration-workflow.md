---
title: Ìṣàn iṣẹ́ ìṣílọ aládàáṣẹ
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Ìlànà Iṣipopada Sovereign

Ultimate Multisite: Multi-Tenancy 1.2.0 ṣàfikún àwọn ẹnu-ọ̀nà ìmúdájú ìṣipopada fún gbígbé abẹ́-ojúlé àtẹ̀yìnwá kan sínú amáyédẹrùn tenant sovereign.

## Kí o tó bẹ̀rẹ̀ {#before-you-start}

Jẹ́rìí pé o ní:

- Àfipamọ́ tuntun ti ojúlé orísun.
- Addon Multi-Tenancy tí ó ń ṣiṣẹ́.
- Database tenant ibi-ìrìn, filesystem root, àti domain tí ó ti ṣetán.
- Ìsopọ̀ host database tí ó bá àyíká ibi-ìrìn mu.
- Àyè láti ṣiṣẹ́ àwọn àṣẹ WP-CLI fún network.

## Ìlànà tí a dábàá {#recommended-workflow}

1. Pèsè database tenant ibi-ìrìn àti filesystem.
2. Forúkọsílẹ̀ tàbí ṣe àfikún àwọn ìṣètò ìyàsọ́tọ̀ tenant.
3. Ṣiṣe ìṣipopada tenant.
4. Pèsè tàbí jẹ́rìí àwọn oníṣe tenant.
5. Ṣàtúnsẹ àwọn iṣẹ́ ìṣipopada async.
6. Ṣiṣe ìmúdájú ìṣipopada sovereign.
7. Ṣàbẹ̀wò sí tenant pẹ̀lú SSO.
8. Yí DNS tàbí routing padà lẹ́yìn tí ìmúdájú bá kọjá nìkan.

## Àwọn ẹnu-ọ̀nà ìmúdájú {#verification-gates}

Ìlànà ìmúdájú ń ṣàyẹ̀wò ìṣipopada láti ọ̀pọ̀ igun:

- Schema tenant wà, database writer tenant sì lè kọ sínú rẹ̀.
- Host database tí a ṣètò ní grants tó wúlò.
- Àwọn oníṣe tenant wà, wọ́n sì bá iye oníṣe sovereign install tí a retí mu.
- Queue push async lè ṣàtúnsẹ ní àṣeyọrí.
- Àwọn ipa-ọ̀nà data legacy ní ẹgbẹ́ network kò ṣe pàtàkì mọ́ fún tenant sovereign.

Ka àwọn ìkùnà ìmúdájú sí ohun tó dá ìtẹ̀jáde dúró. Ṣe atunṣe ìṣòro database, oníṣe, queue, tàbí routing tí a ròyìn, lẹ́yìn náà ṣiṣẹ́ ìmúdájú lẹ́ẹ̀kansi kí o tó fi tenant hàn sí àwọn oníbàárà.

## Ìbẹ̀wò production àkọ́kọ́ {#first-production-visit}

Lẹ́yìn tí ìmúdájú bá kọjá, lo **Ṣàbẹ̀wò (SSO)** láti iboju ìṣàkóso ojúlé fún ìbẹ̀wò admin àkọ́kọ́. Èyí jẹ́rìí routing tenant, ìtọ́jú SSO token, pinning origin, àti pípèsè oníṣe ní ẹgbẹ́ tenant ní ìgbésẹ̀ kan tí a ṣàkóso.
