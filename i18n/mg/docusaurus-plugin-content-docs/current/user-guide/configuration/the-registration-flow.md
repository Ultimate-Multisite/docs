---
title: Ny Fandefasana
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Fandramba (v2)

_**FANAM-PAHANA MANAN-TSI: Io lahatsoratra ity dia manondro ny Ultimate Multisite version 2.x.**_

Mety misy fomba maro ahafahana mavitrika amin'ny tambajotra anareo ny mpampiasa. Afaka mampiasa ny *registration form* anareo na rohy azo ampahany (shareable link) ho an'ny toromarika efa voafidy. Ity dia hasehonay aminao aho hoe ahoana no fomba ahafahan'ireo mpanjifa anareo mavitrika amin'ny tambajotranareo miaraka amin'ny lalana azo atao ary inona no mitranga rehefa mavitrika izy ireo.

## Fampiasana ny Registration Form:

Ity no fomba fanao mahazatra ny famavitrika. Mamorona pejy fampidirana (registration page) misy **checkout form** ianao, ary eto no handehan'ireo mpanjifa anareo mba havitrika amin'ny tambajotranareo sy handray toromarika (subscribe) ho an'ny plan iray. Afaka manana pejy fampidirana maromaro ianao, samy misy *registration form* hafa raha tianao.

Ny pejy fototra ho an'ny famavitrika dia [_**yourdomain.com/register**_](http://yourdomain.com/register), saingy afaka ovaina izany amin'ny fotoana rehetra ao amin'ny **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Rehefa tonga eo amin'ny pejy fampidirana anareo ny mpampiasa (matetika rehefa tsindrio ny bokotra **Sign in** na **Buy now**), dia hahita ny *registration form* anareo izy.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Ity ohatra ity ny *checkout form* toa miseho eo amin'ny lafiny roa (frontend):

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Ny tokony hataonareo dia fenoana ireo toerana tsy azo iainana rehetra - toy ny email, username, teny anarana (password), sns... - ary mandoa ho an'ny plan na manamarina ny adiresin-mail-izy ireo raha mavitrika ho an'ny plan maimaim-poana na plan nandoavam-bola misy fotoana fanandramana (trial period) nefa tsy mila fampahalalana momba ny fandoavam-bola.

Ao amin'ny pejy "Misaotra" (Thank you page), dia hahita hafatra miteny hoe raha mila manamarina ny adiresin-mail-izy ireo ve na raha efa voasokajy ny tranokalanareo ary afaka manomboka mampiasa azy izy.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Raha mila fanamarinana ny adiresy mailaka izy, dia mila mandeha ao amin'ny inbox an'izy ireo sy manindry ilay link famakafakana (verification link) izy. Tsy ho azo ampiasana ny tranokalan'izy ireo raha tsy voamarina ny adiresy mailaka.

Raha nanao registration tamin'ny toromarika fandoavam-bola na raha tsy voatery ny fanamarinana mailaka eo amin'ny tambajy anareo, dia ho azo ampiasana avy hatrany ny tranokalan'izy ireo rehefa vita ny checkout ary hasehon'izy ireo link mba miditra ao amin'ny dashboard (dashboard).

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Fampiasana Link azo ampahafantarina (Shareable Link):

Ny fomba fanaovana registration amin'ny alalan'ny shareable link dia mitovy amin'ny taratasy fanaovana registration, ny hafa dia ny fa rehefa mampiasa shareable link ianao, dia afaka misafidy mialoha vokatra na template website ho an'ny mpanjifa anao eo amin'ny checkout form (jereo ny fizarana Pre-selecting products and templates via URL parameters) na mety nampiditra kody coupon (jereo ny fizarana Using URL Parameters).

Ny dingana fanaovana registration dia mitovy: mila mametraka ny anarana, username, adiresy mailaka, anaran'ny website sy ny lohateny iainana... fa ny plan na template site dia efa voafidy mialoha ho azy ireo.

### Fandraisana Registration Amin'ny Alalan'ny Fandoavam-bola Manokana (Manual Payments):

Raha tsy te-handray anjara amin'i PayPal, Stripe na fitaovana fandoavam-bola hafa atolotra avy amin'ny Ultimate Multisite na ny fiarahan'izy ireo ianao, dia afaka mampiasa fandoavam-bola manokana ho an'ny mpanjifanao ianao. Amin'izay fomba izany, afaka mamorona invoice (facture) ianao mba handoavany amin'ny mpandray anjara amin'ny fandoavam-bola tianao indrindra rehefa nanao registration tao amin'ny tambajy anareo.

Ny dingana fanaovana registration dia mitovy tanteraka toy ny teo aloha, fa eo amin'ny pejy registration dia hahita hafatra iainana ny mpanjifanao hoe handray mailaka misy toromarika hafa mba hanatanterahana ny fandoavam-bola.

![Fampan-teny manokana fandoana mandritra an-drano](/img/frontend/registration-manual-notice.png)

Ary aorian'ny fametrahana dia ho hitany ny toromarika fandoana an-drano izay napetrakao (ary ho azo avy amin'ny mailaka koa izy).

![Toromarika fandoana an-drano haseho aorian'ny fametrahana](/img/frontend/registration-payment-instructions.png)

Afaka ovaina ny toromarika fandoana an-drano ao amin'ny **Ultimate Multisite > Settings > Payments** rehefa manao ny fanindriana ny safidy **Manual**:

![Fanindriana ny fampasongadiana manual miaraka amin'ny toerana toromarika fandoana an-drano](/img/config/manual-gateway-settings.png)

Rehefa vita ny fandoan'ny mpanjifa an-drano sy nomena antoka anao, dia mila **manamarina manokana ny fandoana** ianao mba hampandehanana ny fandraisana an-tanana (membership) sy ny tranokala ho an'io mpanjifa io.

Mba hanaovana izany, mandehin'ny **Ultimate Multisite > Payments** ary tadiava ny fandoan'ny mpanjifa. Tokony mbola haneho ny sata hoe **Pending** izy.

![Lisitra fandoana an-drano misy pending manual payment](/img/admin/payments-list.png)

Tsindrio eo amin'ny laharan'ny fandoana ary afaka ovaina ny sata ho **Completed** ianao.

![Pejy antsipiriany momba ny fandoana](/img/admin/payment-edit.png)

![Fanovana ny sata fandoana ho Completed](/img/admin/payment-status-completed.png)

Rehefa ovainao ny satany ho **Completed**, dia tokony hahita hafatra hoe **Activate membership** ianao. Ampifio ity safidy ity **on** mba hampandehanana ny fandraisana an-tanana sy ny tranokala mifandray amin'ity mpanjifa ity. Avy eo, tsindrio mba **Save Payment**.

![Fanindriana ny activation membership sy Save Payment button](/img/admin/payment-activate-membership.png)

Afaka miditra ao anaty dashboard sy hahita ny fahaiza-manao rehetra izay nividianareo izy mpanjifa anao izao.
