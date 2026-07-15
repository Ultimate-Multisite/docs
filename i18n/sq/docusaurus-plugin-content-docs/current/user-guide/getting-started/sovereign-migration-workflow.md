---
title: Përqendrimi i migrimit Sovran
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Proces Migrimi Sovran

Ultimate Multisite: Multi-Tenancy 1.2.0 shtoi dyporta gate të verifikimit të migrimit për lëvizjen e një subsite standard në infrastrukturën e qytetarit sovræn.

## Para se të filloni {#before-you-start}

Sigurohuni se keni:

- Një rezervëim aktual të sitit burimor (source site).
- Addon Multi-Tenancy aktiv.
- Bazën e të dhënave, rrënjën e sistemit të skurtës dhe domenit të qytetarit destinacion.
- Bashkimin e hostit të bazës së të dhënave që përputhet me mjedisin destinacion.
- Qasjen për të ekzekutuar komandat WP-CLI për rrjetin.

## Proces i rekomanduar {#recommended-workflow}

1. Përgatisni bazën e të dhënave dhe sistemin e skurtës (filesystem) të qytetarit destinacion.
2. Regjistroni ose përditësoni cilësimet e izolimit të qytetarit (tenant isolation settings).
3. Ekzekutoni migrimin e qytetarit (tenant migration).
4. Providroni ose verifikoni përdoruesit e qytetarit.
5. Zgjatni (drain) jobet e migrimit asinkroni.
6. Ekzekutoni verifikimin e migrimit sovræn (sovereign migration verification).
7. Vizitoni qytetarin me SSO.
8. Ndryshoni DNS ose rrugën (routing) vetëm pasi verifikimi të kalojë.

## Gate-t e verifikimit {#verification-gates}

Procesi i verifikimit kontrollon migrimin nga disa kënde:

- Skema e qytetarit ekziston dhe mund të shkruhet nga shkripti i bazës së të dhënave të qytetarit (tenant database writer).
- Host-i i bazës së të dhënave i konfiguruar ka leje të vlefshme.
- Përdoruesit e qytetarit janë të pranishëm dhe përputhen me numrin e përdoruesve të instalimit sovræn të pritshëm.
- Kënia që pushon (async push queue) mund të zgatohet me sukses.
- Rrugët e të dhënave të vjetra nga pala e rrjetit nuk janë më të nevojshme për qytetarin sovræn.

Trajtur dështimet e verifikimit si pengesa para se lëshimin në prodhim (pre-launch blockers). Riparroni problemin e raportuar të bazës së të dhënave, përdoruesit, kuerit ose rrugimit, pastaj ekzekutoni verifikimin përsëri para se ta ekspozoni qytetarin ndaj klientëve.

## Vizita e parë në prodhim {#first-production-visit}

Pas kur verifikimi kalon, përdorni **Visit (SSO)** nga ekranin menaxhimi i sitit për vizitën administrative të parë. Kjo konfirmojnë rrugimin e qytetarit, trajtimin e tokenit SSO, pinimin e origjinës (origin pinning) dhe providherimin e përdoruesve në anën e qytetarit në një hap kontrolluar.
