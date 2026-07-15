---
title: Auto Search ug Palit-on sa mga Template sa Site
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Auto Search ug Replace sa Site Templates (v2)

_**Kini nga tutorial nagkinahanglan og WP UItimo version 2.x.**_

Usa sa pinakasiguro nga feature sa Ultimate Multisite kay ang abilidad nga magdugang og bisan unsang text, kolor, ug mga field sa registration form. Pagkuha nato ni nga data, pwede natong gamiton kini aron i-pre-populate ang content sa pipila ka bahin sa site template nga gipili. Unya, kung ma-publish na ang bag-ong site, ang Ultimate Multisite mag-replace sa mga placeholder sa aktuwal nga impormasyon nga giisulat panahon sa registration.

Pananglitan, pwede nimo buhaton ang imong mga template sites gamit ang placeholders. Ang mga placeholder kinahanglan i-surround og double curly braces - {{placeholder_name}}.

Dayon, pwede ka lang magdugang og matching registration field aron kuhaon na kana nga data.

Ang imong customer mahimong magpuno ni nga field panahon sa registration.

Unya, ang Ultimate Multisite mag-replace sa mga placeholders gamit ang data nga gihatag sa customer awtomatiko.

## **Pag-solve sa problema sa "template puno og placeholders"** {#solving-the-template-full-of-placeholders-problem}

Lahat na niana maayo, pero naa tay problema: karon ang atong site templates - nga pwedeng bisitaha sa atong mga customer - puno na og mga ugly placeholder nga dili daghan og sulti.

Aron masulbad kana, nagtanyag kami og option sa pagbutang og fake values para sa mga placeholders, ug gamiton namo ang mga value nga mao kini aron mag-search ug mag-replace sa ilang sulod sa template sites samtang bisitaha sa imong mga customer.

Pwede kang maka-access sa template placeholders editor pinaagi sa pagadto sa **Ultimate Multisite > Settings > Sites**, pag-scroll sa Site Template Options area, ug dayon pag-click sa link nga **Edit Placeholders**.

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

Dunay dad-an na nimo sa editor sa content sa placeholders, diin pwede kang magdugang og mga placeholders ug ang ilang mga sulod.

[Image: Template placeholders editor entry point]
