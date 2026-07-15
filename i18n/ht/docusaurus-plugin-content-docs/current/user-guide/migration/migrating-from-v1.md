---
title: Migre de V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrasyon soti nan V1

## Ultimate Multisite a chanje depi seri lansman 1.x orijinal li li 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite vèsyon 2.0 ak pi wo se yon total refè (complete rewrite) kòd la, sa vle di gen trè piti bagay ki pataje ant vèsyon anvan an ak nouvo a. Pou rezon sa a, lè ou ap fè upgrade soti nan 1.x pou rive nan 2.x, done ou pral bezwen migre (transferi) nan yon fòma ke nouvo vèsyon yo ka konprann li.

Kontrèman, Ultimate Multisite 2.0+ **ki vini ak yon migratè** ki bati nan kò a ki kapab detekte done soti nan vèsyon anvan an epi konvèti l nan fòma nouvo a. Migrasyon sa a fèt pandan **Setup Wizard** vèsyon 2.0+.

Leson sa a ap montre kijan migratè a fonksyone, kisa pou w fè si gen yon erè, e kijan pou rezoud pwoblèm ki ka parèt pandan pwosesis sa a.

_**ENPÒTAN: Anvan ou kòmanse upgrade soti nan vèsyon 1.x pou rive nan vèsyon 2.0, asire w ke ou fè yon backup ba baz done sit ou an.**_

## Premye etap {#first-steps}

Premye etap la se telechaje fichye .zip plugin la epi enstale vèsyon 2.0 sou dashboard administrasyon rezo ou a.

Apou aprè ou [enstale ak aktive vèsyon 2.0](../getting-started/installing-ultimate-multisite.md), sistèm nan ap detekte otomatikman ke Multisite ou a ap mache sou vèsyon anvan an epi ou pral wè mesaj sa a an liy anwo paj plugin la.

_**NOT:** Si ou gen Ultimate Multisite 1.x enstale sou Multisite ou, ou gen opsyon pou ou ranplase plugin la ak vèsyon ou te telechaje la. Tanpri, ale epi klike pou **Ranplase ki genyen ak ki te telechaje**._

<!-- Screenshot indisponible: Paj plugin an montre opsyon pou ranplase v1 ak v2 ki te telechaje -->

Pajman answit la paj ankò a pral montre w ki legacy add-ons ou genyen ansanm ak vèsyon 1.x yo. Li ap bay enstriksyon sou si vèsyon ou ap itilize kompatib avec vèsyon 2.0 oubyen si ou bezwen mete yon vèsyon upgrade add-on an apre migrasyon an.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Lè w pare pou kontinye, ou ka klike sou bouton ki di **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Li ap mennen ou nan paj wizard enstalasyon ak kèk mesaj byen benyen. Ou jis bezwen klike sou **Get Started** pou deplase nan paj ankò a.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Apre klike sou **Get Started**, li pral redirekti ou nan Pre-install Checks_._ Sa ap montre enfòmasyon sistèm ou ak enstalasyon WordPress la epi di w si li byen atann **Ultimate Multisite's requirements**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Pa etap ankò se pou ou tape key lisans Ultimate Multisite ou epi aktive plugin an. Sa ap asire ke tout fonksyon yo, ki gen ladan add-ons yo, pral disponib sou sit ou a.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Apou mete key ou la, klike sou **Agree & Activate**.

Apou aprè aktive lisans la, ou ka kòmanse enstalasyon an reyèl la lè w klike sou **Install** sou paj ankò a. Sa ap kreye otomatikman fichye ak baz done ki nesesè pou vèsyon 2.0 fonksyone.

## Kounye, migrasyon an {#now-the-migration}

Migrator la gen yon fonksyon sekirite ki ap kontni li k ap verifi tout multisite ou pou asire ke tout done Ultimate Multisite ou ka migre san okenn pwoblèm. Klike sou bouton **Run Check** pou kòmanse pwosesis la.

Ap fini ranpli check la, ou gen de posiblite: rezilta a ka genyen yon erè oswa li pa gen anyen erè.

### Ak Erè {#with-error}

Si ou jwenn yon mesaj erè, ou pral bezwen kontakte ekip sipò nou an pou yo ka ede w reponn erè a. Asire w **bay log erè a** lè ou ap kreye yon ticket. Ou ka telechaje log la oswa ou ka klike sou link ki di "contact our support team". Li pral ouvri widget èd la nan bò dwat paj ou ak fòm yo deja rempli pou ou, ki genyen log erè anba deskripsyon an.

_**Puis ke sistèm nan fin jwenn yon erè, ou p ap ka kontinye migre nan vèsyon 2.0. Ou ka demenke (roll back) nan vèsyon 1.x pou w ka kontinye itilize rezo ou jiskaske erè a fini fikse.**_

### San Erè {#without-error}

Si sistèm nan pa jwenn okenn erè, ou pral wè yon mesaj siksè epi gen yon bouton **Migrate** anba ki p ap pèmèt ou kontinye migrasyon an. Sou paj sa a, li pral raple ou pou ou kreye yon backup ba baz done ou anvan ou monte l, nou rekouvèman ankouraje ou fè sa. Klike sou **Migrate** si ou genyen deja yon backup.

E se tout sa ki nesesè!

Ou ka kontinye ranmase Setup Wizard la pou mete nouvo logo ak lòt bagay sou rezo ou a, oswa ou ka kòmanse navige nan mennu Ultimate Multisite v2.0 la ak entèfas ki gen nouvo fòm. Pran chans epi fè kèk amizman!
