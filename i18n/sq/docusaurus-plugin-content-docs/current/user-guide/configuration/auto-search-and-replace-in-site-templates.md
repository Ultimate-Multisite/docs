---
title: Kërkim dhe Zëvendësim Automatik në Template të Sijetes
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Kërkimi dhe Zëvendësim Automatik në Shkurtimet e Sitet (v2)

_**Ky tutorial kërkon WP Uitimo version 2.x.**_

Një nga funksionet më të fuqishme të Ultimate Multisite është aftësia për të shtuar tekst, ngjyrë dhe fusha të zgjedhura në formularin e regjistrimit. Pasi kemi këtë të dhënë, mund ta përdorim atë për të mbushur para-përmbushur përmbajtjen në pjesë specifike të shkurtimit të vendosur. Pastaj, kur i publikohet sita e ri, Ultimate Multisite do të zëvendësojë placeholder-t (vendosjet) me informacionin aktual që është hyrë gjatë regjistrimit.

Për shembull, mund të bëni sitet tuaja me shkurtime (templates) me placeholder-e. Placeholder-t duhet të shtojnë rrethuar nga dy kllapa kurri - {{placeholder_name}}.

Pastaj, ju mund thjesht të shtoni një fushë regjistrimi që përputhet për të kapur atë të dhënë.

Këtu klientja juaj do të mund të plotësojë atë fushë gjatë regjistrimit.

Ultimate Multisite pastaj do të zëvendësojë placeholder-t me të dhënat që ofronin klienti automatikisht.

## **Zgjidhja e problemit "shkurtimi i plotë me placeholder-e"**

Kjo gjithçka është fantastike, por ne hasim me një problem të keq: tani shkurtimet e saj - që mund t'i vizitojnë klientët tanë - janë plot me placeholder-e të mprehta që nuk thonë shumë.

Për të zgjidhur këtë, ne ofrojmë opsionin për të vendosur vlerat e rreme (fake values) për placeholder-t, dhe ne përdorim ato vlerë për të kërkuar dhe zëvendësuar përmbajtjen e tyre në sitet e shkurtimeve gjatë vizitave të klientëve tuaj.

Ju mund të keni akses në redaktorin e placeholder-ve duke shkuar te **Ultimate Multisite > Settings > Sites**, duke scrolluar drejt zonës Site Template Options, dhe pastaj klikuar në linkun **Edit Placeholders**.

![Zona Opsione Shkurtimi i Sitet në faqen e cilësimeve të Sites](/img/config/settings-sites-templates-section.png)

Kjo do t'ju çojë te redaktori i përmbajtjes së placeholder-eve, ku mund të shtoni placeholder-e dhe përmbajtjen e tyre përkatëse.

![Template placeholders editor entry point](/img/config/settings-sites-templates-section.png)
