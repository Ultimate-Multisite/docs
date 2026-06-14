---
title: Sande E-mails ak Transmisyon
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Voye E-mails ak Transmisyon (v2)

_**NOTE KRITIK: Artikel sa a refere a Ultimate Multisite v2.x.**_

Ultimate Multisite gen yon fonksyon ki pral pèmèt ou kominike avèk kliyan ou lè ou voye yon e-mail bay yon itilizatè espesifik oswa yon gwoup itilizatè, epi tou voye notifikasyon sou dashboard admin yo pou fè anons.

## Ajoute notifikasyon admin nan dashboard kliyan ou ak Transmisyon (Broadcasts)

Pou itilize fonksyon broadcast Ultimate Multisite la, ou ka ajoute **notifikasyon admin** sou dashboard admin subsite itilizatè w la.

Sa a trè itil pou ou bezwen fè yon anons tankou antreman sistèm oswa ofri nou pwodwi oswa sèvis nou yo bay itilizatè ki deja egziste ou. Sa se jan notifikasyon admin sa a ap parèt sou dashboard itilizatè w la.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Pou kòmanse yon notifikasyon admin, ale nan dashboard admin rezo ou an epi anba mennu **Ultimate Multisite**, ou pral jwenn opsyon **Broadcasts**.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Ou ka tou edite broadcast ki deja egziste:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

Soti nan paj sa a, klike sou bouton **Add Broadcast** anwo.

Sa ap montre yon fenèt modal Add broadcast kote ou ka chwazi kalite broadcast ou vle voye.

Ale epi chwazi **Message** apre sa klike sou bouton **Next Step**.

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Fenèt ki vini an ap mande ou pou w chwazi **Target customer** (Kliyan objektif) oswa **Target product** (Pwodwi objektif). Note ke ou ka chwazi plis pase yon itilizatè oswa plis pase yon pwodwi.

Pou chèche yon kont itilizat oswa yon pwodwi, ou bezwen kòmanse tape mo kle sa a nan fye a.

Anba fye **Message type**, ou ka chwazi koulè annotasyon an. Sa ap mete aksan sou enpòtans mesaj ou a.

Lè sa fini, ou ka klike sou **Next Step**.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

Fenèt ki vini an se la kote ou ka kòmanse prepare mesaj ou a lè ou tape sijè a epi kontni/mesaj ou vle voye bay itilizat yo.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Malgre ou fin kreye mesaj ou, ou ka klike sou bouton **Send**.

E se sa tout. Annotasyon admin an dwe parèt imedyatman sou dashboard itilizat la.

## Voye imèl bay kliyan ou yo

Avèk fonksyon broadcast Ultimate Multisite a, ou ka voye yon imèl bay itilizat ou yo. Ou gen opsyon pou voye imèl la sèlman bay itilizat espesifik oswa pou atake yon gwoup itilizat ki baze sou pwodwi oswa plan yo abone nan li an.

Pou kòmanse yon broadcast imèl, ale nan dashboard admin rezo ou a epi anba mennu Ultimate Multisite, ou pral jwenn opsyon Broadcast la.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Soti sou paj sa a, klike sou bouton **Add broadcast** anwo.

Sa ap montre fenèt modal Add broadcast kote ou ka chwazi kalite broadcast ou vle voye. Ale epi chwazi **Email** apre sa klike sou bouton **Next Step**.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Fenèt ki vini an ap mande ou pou w chwazi itilizat ki objektif la oswa pwodwi ki objektif la. Note ke ou ka chwazi plis pase yon itilizat oswa plis pase yon pwodwi.

Pou chèche yon kont itilizat oswa yon pwodwi ou bezwen kòmanse tape mo kle sa a nan fye a.

Yon fwa ou fin chwazi moun ki pral resevwa mesaj la, ou ka klike sou **Next Step**.

![Chwazi kliyan vyèti ak pwodwi vyèti pou yon emèl broadcast](/img/admin/broadcast-email-targets.png)

Fenèt ankò se kote ou ka kòmanse prepare imèl ou an ap mete sijè a epi kontni/mesaj ou vle voye bay itilizat yo.

<!-- Screenshot unavailable: Editè sijè ak kontni emèl broadcast la sou etap konpoze -->

Malgre ou fin kreye mesaj ou, ou ka klike sou bouton **Send**.

E se sa ki fasil pou voye yon imèl bay itilizat ou yo lè w ap itilize fonksyon broadcast la.

## Imèl sistèm (System emails)

Imèl sistèm nan nan Ultimate Multisite se sa yo rele **notifikasyon otomatik** ki sètifye pa sistèm nan apre kèk aksyon tankou enskripsyon, peman, map domain, elatriye. Ou ka edite oswa modify imèl sa yo nan rann Ultimate Multisite la. Li gen yon fonksyon ki pral pèmèt ou reponn epi importe konfigirasyon ki egziste deja soti nan yon lòt enstalasyon Ultimate Multisite.

### Resete ak Importe (Resetting & Importing)

Vèsyon nouvo Ultimate Multisite, ansanm ak add-ons yo, ka epi ap mete imèl nouvo chak fwa.

Pou evite konfli ak lòt pwoblèm, **nou p ap ajoute modèl imèl nouvo sa yo kòm Imèl Sistèm sou enstalasyon ou otomatikman**, sepandan si yo esansyèl pou fonksyone byen yon fonksyon espesifik la.

Sepandan, super admin ak agent yo ka importe imèl ki te mete nouvo sa yo atravè zouti importè a. Pwosesis sa a pral kreye yon nouvo imèl sistèm ak kontni ak konfigirasyon modèl imèl nouvo a, ki pèmèt super admin la fè nenpòt modifikasyon li vle oswa kenbe yo jan yo.

#### Kijan pou importe imèl sistèm (How to import system emails)

Ale gade nan paj Ultimate Multisite Settings ou ale nan tab la **Emails**.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Lè, sou sidebar la, klike sou bouton **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Sou paj System Emails la, ou pral wè bouton aksyon **Reset & Import** an lopital la. Klike sou bouton sa a ta louvri fenèt modal pou import ak reset.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Lè, ou ka toggle opsyon Import Emails yo pou w wè ki email sistèm yo disponib pou w import.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Resete System Emails

Nan lòt fwa, ou pral konprann ke chanjman ou fè sou yon template email espesifik pa fonksyone ankò pou ou epi ou vle resete li nan **kondisyon defòt** li yo.

Nan ka sa a, ou gen de opsyon: ou ka senp delete system email la epi import li ankò (fè wosou anwo a) - sa ap efface metriks voye ak lòt bagay, ki fè metòd sa a pi piti preferans.

Oswa ou ka itilize **Reset & Import tool** pou resete template email sa a.

Pou resete yon template email, ou ka swiv etap anwo yo jiska w rive nan Reset & Import tool la, epi apre sa, toggle opsyon **Reset** epi chwazi email ou vle resete ankò nan kontni defòt li yo.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
