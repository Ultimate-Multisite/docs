---
title: Cyflwyniadau GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Sut i'rdefnyddio snippetau Ultimate Multisite ar gyfer y repository GitHub ein

Mae bydd ychwanegau cod yn y repository GitHub sydd yn cael eu gofyn yn aml gan benwyr Ultimate Multisite sy'n eisiau ychwanegu ffurfion bach fel ychwanegu script Google Analytics ar myneddau cyflwyniad neu gwahanu meta box o ddaearc admin.

Mae'r ail article hwn yn dangos i chi sut i ddefnyddio neu beth yw lle mae'r cod hyn yn cael ei leoli.

Gallwch dod o hyd i'r snippetau ar y linc isodol:

https://github.com/next-press/wp-ultimo-snippets/

Mae rhai fforddion i chi ddefnyddio'r cod hwnnwch:

  1. Ar fy ffylch `functions.php` o'ch theme.

  2. Pluginau "Must-Use" (mu-plugins).

# Sut i ddefnyddio'r snippet ar fy ffylch `functions.php` o'ch theme.

  1. Log in i'r dashboard admin y rhwydwaith WordPress eich a mynd i Themes > Theme Editor (gwylio'r screenshot isodol).

  2. Ar y peidiad "Edit Themes", sicrhewch bod fy theme gyflwyniadol wedi'i wybrio ar y ffordd drefn (dropdown) sydd yn lleoli ar y ochr oberwr o'r screen eich (#3 ar y screenshot isodol).

  3. Clic ar y ffylch `functions.php` o dan y sefyllfa "Theme Files" i chwarae'r ffylch. Swiithio i'r isel a gysylltu'r snippet Ultimate Multisite sydd yn cael ei gael o GitHub repository.

<!-- Screenshot bellach yn cael ei ddefnyddio: WordPress Theme Editor yn dangos redig ffylch functions.php -->

# Sut i creu Pluginau Must-Use (mu-plugins)

Mae WordPress gyda ffurf sy'n sylw'r gallwch chwarae ffurfion cyfathrebuol o'r gweithrediad, gan enwi "Must-Use Plugins", neu "mu-plugins" i'r cyffredinol.

Mae'r mu-plugins specialau hyn yn cael eu chwarae cyn holl pluginau cyffredinol arall, ac nid oes unrhyw un o'u deactivio. Yn y rhwydwaith multisite, bydd y cod mewn mu-plugins hyn yn cael ei chwarae ar holl weithgareddau eich cyflwyniad.

1. Defnyddiwch FTP neu SSH i cyffredinol y ffylch systemol o'r WordPress eich.

2. Yn ydyr yn wp-content directory o'ch WordPress, creu dyddor newydd gyda'r enw: mu-plugins.

<!-- Screenshot yn cael ei ddefnyddio: Ffynemau llwybr yn dangos y wp-content directory gyda'r ffolder mu-plugins -->

3. Creu fyliau PHP newydd ar eich cyfrifennol gyda'r enw wu-snippet.php gan ddefnyddio Notepad neu unrhyw editor codi.

4. Rheoliwch y snippet o'r code Ultimate Multisite sydd yn y repo GitHub i'r fyliau ac rhannwch yfory'r snippet i ddynnu eich mu plugin.
