---
title: Konfigire Pemanman Manèl
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Fè Meteman Manuel (v2)

_**NOTE IMPORTANT: Sa dokiman sa a refere a Ultimate Multisite v2.x.**_

Meteman manuel se yon fason ou ka ofri lòt metòd peman si **Stripe** oswa **PayPal** pa disponib pou itilizat ou yo. Li ka gen ladan transfer wire, transfè bank oswa nenpòt lòt metòd peman ki disponib pou itilizat ou lokalman.

## Kijan pou kòmanse Meteman Manuel

Konfigire meteman manuel se senp anpil. Ou jis bezwen aktif li sous "payment gateways" epi mete enstriksyon detaye sou kijan itilizat la dwe voye peman a.

Premye bagay, ale nan **Ultimate Multisite > Settings > Payments**. Anba **Payment Gateways**, switch **Manual** la an "on". Ou pral wè yon bo k ap parèt pou ou ki montre **Payment Instructions**.

Ajoute enfòmasyon sa yo nan bo a ki genyen pou kliyan ou bezwen pou fè peman an. Li ka gen ladan detay kont bank ou epi imèl ou pou kliyan an ka voye konfime peman la ba ou, pa egzanp.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Men entèfas konfigirasyon meteman manuel la:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Malgre ou fin configure li, jis klike sou **Save Settings** epi fini. Lè itilizat yo reyegrè nan rezo ou a, yo pral wè yon mesaj ki di yo ap resevwa enstriksyon ou pou konplete achte a.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

E yo ap resevwa tou yon mesaj sou paj **Thank You** ou a ak enstriksyon peman ou an.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Konfime meteman manuel

Pou konfime yon paman ki fèt manman, ale nan mennu **Payments** sou bar an valè a. La ou ka wè tout paman yo sou rezo ou ak detay yo, ki gen ladan **status** yo. Yon paman manman ap gen status **Pending** toujou jiskaske ou chanje li manman.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Klike sou **reference code** la pou w ale nan paj paman an. Sou paj sa a, ou gen tout detay paman ki ap tann yo, tankou reference ID, pwodwi, timestam ak plis chans.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Sou kolòn la a a, ou ka chanje status paman an. Chanje li pou **Completed** epi klike sou opsyon **Activate Membership** ap aktif sit ki gen kliyan ou a ak manman yo ap active.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
