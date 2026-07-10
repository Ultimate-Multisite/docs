---
title: Entegrasyon milti-lokatè
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Entegrasyon milti-lokatè {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 chanje plizyè pwen kontak entegrasyon pou lokatè souveren, verifikasyon migrasyon, ak otomatizasyon sik lavi lokatè.

## Koule demaraj lokatè {#tenant-bootstrap-flow}

Entegrasyon ki kreye oswa modifye lokatè yo ta dwe suiv lòd sa a:

1. Rezoud dosye rejis lokatè a ak modèl izolasyon an.
2. Kreye oswa verifye ekriven bazdone lokatè a.
3. Demare chema lokatè a.
4. Pwovizyone itilizatè lokatè yo.
5. Anrejistre woutaj lokatè a ak chemen sistèm fichye yo.
6. Kouri verifikasyon migrasyon anvan ou ekspoze lokatè a.

Pa sipoze yon lokatè souveren ka re-itilize koneksyon bazdone rezo a. Itilize rejis lokatè a ak abstraksyon ekriven addon lan bay yo.

## Kwòk SSO ak REST {#sso-and-rest-hooks}

Otològinn lokatè san eta itilize token ki dire kout ak yon reklamasyon objektif, pwoteksyon kont re-itilizasyon JTI, yon limit ekspirasyon, ak fikse orijin. Entegrasyon ki ajoute bouton koneksyon oswa lyen jesyon adistans ta dwe jenere vizit lokatè atravè koule SSO ki sipòte a olye yo konstwi URL koneksyon lokatè dirèkteman.

Evènman odit API bò rezo a ak rezime chak jou disponib pou pòtay lokatè souveren yo. Itilize jounal sa yo lè w ap deboge sistèm ekstèn ki rele pwen aksè sik lavi lokatè yo.

## URL aksyon kliyan souveren {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 woute aksyon kliyan lokatè souveren yo tounen sou sit prensipal la pou koule Account, peman, faktirasyon, fakti, sit, chanjman modèl, ak katografi domèn. Entegrasyon ki rann lyen jesyon bò lokatè ta dwe lonje aksyon sa yo sou panèl kliyan sit prensipal la epi enkli yon sib retou valide lè itilizatè a ta dwe kapab navige tounen sou lokatè a apre li fin konplete aksyon an.

Itilize anvlòp SSO debaz la pou lyen jesyon atravè domèn:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL ki jenere a rete filtrab atravè `wu_sso_url`, ki resevwa URL SSO a, itilizatè aktyèl la, ID sit sib la, ak kontèks redireksyon an. Add-on yo ka itilize filtè sa a pou ajoute kontèks espesifik pou founisè a oswa pou ranplase URL koutye a pandan y ap prezève validasyon token Ultimate Multisite la.

Pa diplike eta manm, fakti, adrès faktirasyon, modèl, oswa jesyon domèn andedan lokatè souveren an. Konsidere Dashboard lokatè a kòm lansè a epi panèl kliyan sit prensipal la kòm sistèm referans pou aksyon jere yo.

## Verifikasyon migrasyon {#migration-verification}

Apre yon entegrasyon migrasyon oswa sik lavi chanje done lokatè, kouri baryè verifikasyon yo:

- `wp tenant verify-no-legacy --site=<site-id>` konfime lokatè a pa depann ankò de ansyen chemen bò rezo yo.
- `wp tenant verify-sovereign-push --site=<site-id>` konfime travay pouse souveren yo ka trete epi vide.

Entegrasyon yo ta dwe trete verifikasyon ki echwe kòm yon blokè deplwaman epi evite make yon lokatè kòm aktif jiskaske echèk la rezoud.

## Sipresyon lokatè {#tenant-deletion}

Koule sipresyon yo ta dwe rele chemen demantèlman addon lan pou kalifikasyon bazdone lokatè yo netwaye. Entegrasyon ekstèn yo ka retire resous founisè apre demantèlman reyisi, men yo pa ta dwe efase bazdone oswa dosye lame pandan verifikasyon oswa travay pouse asenkron yo toujou ap kouri.

## Routè bazdone demode {#deprecated-database-router}

Ansyen `Database_Router` la te ranplase pa yon stub depresyasyon. Nouvo entegrasyon yo ta dwe rezoud lokatè yo atravè routè sit aktyèl la ak API rejis lokatè yo olye yo depann de ansyen klas routè a.
