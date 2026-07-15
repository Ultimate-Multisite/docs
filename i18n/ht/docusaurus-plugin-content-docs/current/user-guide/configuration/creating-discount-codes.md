---
title: Kreye Kòd Rabais
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Kreye Kod Rabote (v2)

_**NOTE KRITIK: Sa tèks sa a refere a Ultimate Multisite v2.x.**_

Avèk Ultimate Multisite ou ka kreye discount codes pou ba kliyan ou desonkou pou abònman yo. E kreye yo fasil!

## Kreye ak Edite Discount Codes {#creating-and-editing-discount-codes}

Pou kreye oswa edite yon discount code, ale nan **Ultimate Multisite > Discount Codes**.

![Lòt li discount codes — eta vid ki gen okenn kòd deja egziste](/img/config/discount-codes-empty.png)

La ou pral gen yon lis discount codes ou te kreye deja.

Ou ka klike sou **Add Discount Code** pou kreye yon nou coupon oswa ou ka edite yo lè ou pase moso a epi klike sou **Edit**.

![Lòt li discount codes ak aksyon mouse ki montre link Edit ak Delete](/img/config/discount-codes-list-hover.png)

![Bouton Add Discount Code nan en-tèt paj la](/img/config/discount-codes-add-button.png)

Ou pral reoriyete sou paj kote ou pral kreye oswa edite kòd coupon ou a. Nan egzanp sa a, nou pral kreye yon nou an.

![Paj edisyon discount code ak tout seksyon yo vizib](/img/config/discount-code-edit.png)

Ann gade konfigirasyon ki disponib la:

**Enter Discount Code:** Sa se non kòd discount ou a. Sa pa kòd ki kliyan ou yo pral bezwen itilize sou fòm chèkout (checkout form).

**Description:** La, ou ka dekri bri an kisa coupon sa a ye pou.

![Non ak deskripsyon discount code nan anwo paj edisyon la](/img/config/discount-code-description.png)

Ou ka tou wè discount code a kòm aktif oswa inaktif:

![Status aktiv discount code a](/img/config/discount-code-active.png)

**Coupon code:** La se kote ou defini kòd ki kliyan ou yo pral bezwen antre pandan chèkout la.

![Champ de code de coupon où les clients entrent le code au moment du paiement](/img/config/discount-code-coupon-field.png)

**Réduction:** Ici, vous pouvez définir soit un **pourcentage** soit un **montant fixe** d'argent pour votre code de réduction.

![Paramètres du montant de la réduction avec menu déroulant pourcentage ou montant fixe](/img/config/discount-code-amount.png)

**Appliquer aux renouvellements:** Si cette option est désactivée, ce code de réduction ne sera appliqué qu'au **premier paiement**. Tous les autres paiements n'auront aucune réduction. Si cette option est activée, le code de réduction sera valable pour tous les paiements futurs.

**Réduction sur les frais d'installation:** Si cette option est désactivée, le code de coupon ne donnera **aucune réduction pour les frais d'installation** de la commande. Si cette option est activée, vous pouvez définir la réduction (pourcentage ou montant fixe) que ce code de coupon appliquera aux frais d'installation de vos plans.

![Options à bascule Appliquer aux renouvellements et réduction sur les frais d'installation](/img/config/discount-code-renewals.png)

**Actif:** Activez ou désactivez manuellement ce code de coupon.

![Bascule Actif pour activer ou désactiver manuellement le code de réduction](/img/config/discount-code-active.png)

Sous **Options avancées**, nous avons les réglages suivants :

![Options avancées du code de réduction](/img/config/discount-code-advanced.png)

**Limiter les utilisations:**

  * **Utilisations:** Ici, vous pouvez voir combien de fois le code de réduction a été utilisé.

  * **Utilisations maximales:** Cela limitera le nombre de fois où les utilisateurs peuvent utiliser ce code de réduction. Par exemple, si vous mettez 10 ici, le coupon ne pourra être utilisé que 10 fois. Après cette limite, le code de réduction ne pourra plus être utilisé.

![Réglage Limiter les utilisations avec le compteur d'utilisations actuel et le champ des utilisations maximales](/img/config/discount-code-limit-uses.png)

**Dat de début ak dat fini:** La kote sa a, ou ap gen opsyon pou ajoute yon dat kòmanse e/oswa yon dat fini pou bon ti kòpon ou an.

![Champs dat kòmansman ak dat fini pou planifikasyon kòd rabais](/img/config/discount-code-dates.png)

**Limite pwodwi:** Si ou mete **Select products** sou, tout pwodwi ou ap montre ou. Ou gen opsyon pou chwazi manman (pwa ou ap mete sou oswa sou) ki pwodwi ka aksepte kòd ti kòpon sa a. Pwodwi ki pa mete sou la pafè yo pa pral montre okenn chanjman si kliyan ou eseye itilize kòd ti kòpon sa a pou yo.

![Seksyon limite pwodwi ak switch pou chak pwodwi](/img/config/discount-code-limit-products.png)

Malgre w fin mete tout opsyon sa yo, klike sou **Save Discount Code** pou w mete kòpon ou an epi fini!

![Bouton Save Discount Code nan bout paj edisyon an](/img/config/discount-code-save.png)

Kòpon an kounye a sou lis ou e, men apre sa, ou ka klike pou **edite oswa delete** li.

![Liy kòd ti kòpon nan lis ak aksyon hover Edite ak Delete](/img/config/discount-codes-list-hover.png)

###

### Itilize Paramèt URL: {#using-url-parameters}

Si ou vle personalize tab pri ou yo oswa bati yon paj kòd ti kòpon ki chou pou sit entèn ou epi ou vle aplike yon kòd ti kòpon sou fòm checkout ou otomatikman, ou ka fè sa atravè paramèt URL.

Premye bagay la, ou bezwen jwenn lyen ki ka pataje pou plan ou an. Pou fè sa, ale nan **Ultimate Multisite > Products** epi chwazi yon plan.

Klike sou bouton **Click to Copy Shareable Link**. Sa ap ba ou lyen ki ka pataje pou plan espesifik sa a. Nan ka nou, lyen ki ka pataje la te [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Paj pwodwi ak bouton lyen ki ka pataje](/img/config/products-list.png)

Pou aplike ou kòd rabè ou pou plan espesifik sa a, senpleman ajoute paramèt **?discount_code=XXX** nan URL la. Kote **XXX** se kòd bonbon an.

Nan egzanp nou la, nou pral aplike kòd bonbon **50OFF** pou pwodwi espesifik sa a.

URL pou plan espesifik sa a ak kòd rabè 50OFF ap ye tankou: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.
