---
title: Konfigire Peman Manyèl
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Mete Peman Manyèl An Plas (v2)

_**NÒT ENPÒTAN: Atik sa a refere a Ultimate Multisite vèsyon 2.x.**_

Peman manyèl yo se yon fason pou ou ofri lòt metòd peman si **Stripe** oswa **PayPal** pa disponib pou itilizatè ou yo. Li kapab yon transfè filè oswa transfè labank, oswa nenpòt lòt metòd peman ki disponib lokalman pou itilizatè ou yo.

## Kijan pou aktive Peman Manyèl {#how-to-enable-manual-payments}

Mete peman manyèl an plas trè fasil. Ou sèlman bezwen aktive li anba pasrèl peman yo epi mete enstriksyon detaye sou kijan itilizatè a ta dwe voye peman an.

Premyèman, ale nan **Ultimate Multisite > Anviwònman > Peman**. Anba **Pasrèl Peman** , aktive **Manyèl**. Ou pral wè yon bwat **Enstriksyon Peman** ap parèt pou ou.

Ajoute nan bwat sa a enfòmasyon kliyan ou a ap bezwen pou fè peman an. Sa ka detay kont labank ou ak imèl ou pou kliyan an ka voye konfimasyon peman an ba ou, pa egzanp.

![Bouton pasrèl peman manyèl ak zòn tèks Enstriksyon Peman](/img/config/manual-gateway-expanded.png)

Men entèfas anviwònman pasrèl manyèl la:

![Anviwònman pasrèl manyèl](/img/config/manual-gateway-settings.png)

Apre ou fin mete li an plas, jis klike sou **Sove Anviwònman** epi li fini. Lè itilizatè yo enskri nan rezo ou a, yo pral wè yon mesaj ki di yo y ap resevwa enstriksyon ou yo pou konplete acha a.

![Mesaj konfimasyon enskripsyon ki di itilizatè a li pral resevwa enstriksyon peman](/img/frontend/registration-manual-notice.png)

Epi yo pral resevwa tou yon mesaj sou paj **Mèsi** ou a ak enstriksyon peman ou yo.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Konfime peman manyèl yo {#confirming-manual-payments}

Pou konfime yon peman manyèl, ale nan meni **Peman** ki sou ba agoch la. La ou ka wè tout peman ki sou rezo ou a ak detay yo, ansanm ak **estati** yo. Yon peman manyèl ap toujou gen estati **Annatant** jiskaske ou chanje li manyèlman.

![Lis peman ki montre peman manyèl annatant](/img/admin/payments-list.png)

Antre nan paj peman an lè ou klike sou **kòd referans** lan. Sou paj sa a ou gen tout detay peman annatant lan, tankou ID referans, pwodwi yo, dat ak lè yo, ak plis ankò.

![Paj detay peman ki montre kòd referans, pwodwi yo, ak total yo](/img/admin/payment-edit.png)

Nan kolòn adwat la, ou ka modifye estati peman an. Lè ou chanje li pou **Konplete** epi **aktive opsyon Aktive Abònman** an, sa ap aktive sit kliyan ou a epi abònman li ap aktif.

![Paj modifye peman ak Estati mete sou Konplete ak bouton Aktive Abònman](/img/admin/payment-activate-membership.png)
