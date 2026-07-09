---
title: Demander yon plan anba
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Descente d'un plan (v2) {#downgrading-a-plan-v2}

_**NOTE IMPORTANTE : Sa dokiman refere a Ultimate Multisite version 2.x.**_

Descente d'un plan ou abonnement se pa n ap aksyon komen ki kliyan nou yo ka fè si yo gen yon bwat la limite oswa si yo deside ke yo pa bezwen anpil resous pou fè subsite yo mache.

## Kijan pou fè descente yon plan {#how-to-downgrade-a-plan}

Kliyan nou yo ka fè descente plan yo nenpòt lè yo konekte nan dashboard admin subsite yo epi klike sou **Change** (Chanje) sous paj kont yo.

![Paj kont kliyan ak kat Membwa ou e bouton Change](/img/account-page/membership-change-button.png)

Lè yo klike sou bouton **Change**, itilizatè a/kliyan an ap redirekti nan paj checkout kote yo ka chwazi plan ki vle chanje abònman yo pou l.

![Paj opsyon plan descente nan bò kliyan](/img/account-page/downgrade-picker.png)

Nan egzanp sa, nou ap fè descente plan an **Premium** a **Free**.

Pou kontinye, itilizatè a jis bezwen klike sou bouton **Complete Checkout** (Konplete Checkout). Lè sa fèt, li pral pote l tounen nan paj kont ki montre yon mesaj sou chanjman ki nan atansyon pou memwa a. Chanjman yo ap vin efektiv sou **sikli faktouring** (billing cycle) nouvo kliyan an.

![Paj kont ki montre bannè chanjman memwa ki nan atansyon](/img/account-page/pending-change.png)

### Kisa k ap pase lè yon itilizatè fè descente plan li {#what-happens-when-a-user-downgrades-their-plan}

Li enpòtan pou w note ke descente plan an pa chanje konfigirasyon ki egziste deja nan subsite itilizatè a.

Li pa chanje otomatikman template sit la paske chanje template sit la pral efase e resove tout subsite a nèt. Sa se pou evite pèdi done ki pa nesesè. Donk espas disk, themes, plugins elatriye ap rete entegrity yo eksepte post yo.

Nou kon nou konprann ke konsè mwen prensipal ou se limit yo ak quota ou mete sous chak plan, men nou dwe konsidere domaj sa ka lakoye sou subsite itilizat la si nou delete oswa chanje nenpòt konfigirasyon li.

Pou post ki depase limite ki mete sou plan an, ou gen 3 opsyon diferan: **Gade post yo tankou se** *,* **Mete post yo nan trash** *,* oubyen **Mete post yo nan draft** *. Ou ka configure sa la sous Ultimate Multisite settings.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Kisa ki rive ak paman an {#what-happens-to-the-payment}

Nan vèsyon 2.0, li pa mande plis ajisteman sou paman la nan fason proration ankò.

Sa se paske sistèm nan ap tann manmship ki egziste a **konplete sik faktur li anvan** nouvo plan/manmship sa yo ap mache. Montant faktura nouvo pou manmship nouvo a ap aplike otomatikman epi chaje sou sik faktur ankò.
