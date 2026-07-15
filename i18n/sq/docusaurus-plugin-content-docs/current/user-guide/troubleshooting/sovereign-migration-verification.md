---
title: Verifikimi i Migrimit Sovran
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verifikimi i Migracionit Sovran

Ultimate Multisite: Multi-Tenancy 1.2.0 përfshin komanda verifikimi WP-CLI për migracione të qirave sovrane (sovereign tenant). Përdorni këto kur një migracione e qirës, vizita SSO ose instalimi i izoluar nuk funksionojnë siç pritet.

## Komanda për ekzekutimin {#commands-to-run}

Ekzekutoni verifikimin nga instalimi WordPress në rrjet:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Përdorni ID-n e qirës që po migrooni. Komanda e parë kontrollon se qira nuk varet më nga të dhënat e legjatura (legacy) në anën e rrjetit. Komanda e dytë verifikon nëse punimet e push-it sovrane mund të përpunojnë dhe të lepojnë (drain).

## Dështime të zakonshme {#common-failures}

### Leje të bazës së të dhënave nuk përputen me hostin {#database-grants-do-not-match-the-host}

Nëse verifikimi raporton dështime në lejet ose përdoruesit shkrimtarë, kontrolloni hostin e konfiguruit të bazës së të dhënave. `localhost`, `127.0.0.1` dhe emri i një servisi konteneri janë hoste MySQL grant të ndryshme. Përditësoni lidhjen e hostit të qirës ose lejet e bazës së të dhënave, pastaj ekzekutoni përsëri verifikimin.

### Instalimet Bedrock ose lokale nuk mund të lidhen {#bedrock-or-local-installs-cannot-connect}

Instalimet në Bedrock dhe socket lokale mund të raportojnë bazën e të dhënave si `localhost` ndërsa runtime-i lidhet përmes një adrese normalizuar. Versioni 1.2.0 normalizon stringjet e hostit të të njëjtës makinë, por ndryshimet e hostit të personalizuara mund të vazhdojnë të konfliktosh me lejet e bazës së të dhënave.

### Këshilla asinkrone e push-it nuk lepohet (does not drain) {#async-push-queue-does-not-drain}

Nëse `verify-sovereign-push` nuk përfundon, kontrolloni Action Scheduler ose ekzekutuesin asinkron konfiguruar. Fshini punët e dështuara vetëm pasi të konfirmoheni se janë të sigurta për të riprovuar ose për t'i shkelur (discard).

### Numri i përdoruesve të qirës është i gabuar {#tenant-user-count-is-wrong}

Migracioni duhet të providhojë përdorues për qirën sovrane. Nëse përdoruesi i pritshëm i instalimit mungon, ekzekutoni përsëri hapin e provizimit të përdoruesve para se të riprovoni SSO-n.

### Vizita SSO refuzohet {#sso-visit-is-rejected}

Për të qenit i sigurt me autentlimin automatik (autologin) të qirës së leirtjes (tenant), duhet që domeni i qirës, pin e origjinës (origin pin), qëllimi i tokenit (token purpose), nonce dhe data e përfaqësimit (expiry) të jenë të njëjtë. Siguroh që URL-i i qirës është i saktë dhe se ky hyrje do të provohet menjëherë pas krijimit të vizitës SSO (Single Sign-On).

## Kur të riprova {#when-to-retry}

Riprova verifikimin pas çdo ndryshimi infrastrukturor. Mos ndryshoni trafikut në prodhim, mos fshini të dhënat bazë ose mos hiq kredencialet e migrimit derisa të kalojnë të gjitha kontrollet e verifikimit.
