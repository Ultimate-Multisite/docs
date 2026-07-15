---
title: Plani uppdamine
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Plaan ülemine tõstamine (v2)

_**TÄHTIS NOTE: See artikli viitab Ultimate Multisite versioonile 2.x.**_

Kliendid saavad oma plaanide ülemine millalise ajal. Nad võivad ülemine teist plaani või osta lisate palvelid või pakette, mida teie võrku on saadaval.

Selle tutori juhendame neid, kuidas nad oma plaani üle laadida ja mis toimub pärast ülemineprotsessi.

Oma plaani ülemine jaoks peavad kliendid pääseda oma dashboardile ja minema **Account**-lehe.

![Kliendi subsite dashboard, kus on näha Account menüülink](/img/account-page/account-menu.png)

Account-lehel nad näevad oma praeguse li membershipi ja sellega seotud plaani. Teise plaani ülemine jaoks peavad nad klõpsama **Change**-leheks **Your Membership**-sekti paremalinnas.

![Account lehel Your Membership kaardiga Change-nupuga](/img/account-page/membership-change-button.png)

Nad suunatakse kassalehele, kus on näha kõik saadaval olevad plaadid.

Nad saavad ka näha **palved ja pakettid, mis on saatavad nende praeguse plaani jaoks**, juhul, kui nad lihtsalt soovivad osta konkreetse teenust või paketti (nt ilma igati kasutuste või diskruumide ruumi meie esimeses näites), mitte plaani ülemine.

![Upgrade picker, kus on saadaval olevad plaadid ja pakettid kliendi küljes](/img/account-page/upgrade-picker.png)

Kui nad valivad ostuda sooviva toote, näevad, kui palju nad praegu maksavad - eksklusi olemasoleva krediiti - ja kui palju neid lahkutatakse järgmise laskumise kuupäeval.

Üldiselt, kui toote on teine plaani ja maksumine toimub membershipi tasuma vahel, saab nad krediiti selle summa eest, mida esimesel plaanil on maksetud.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Kui valikates plaani või paketi, mis ei muuta mitte midagi praeguse abonnamentist, näevad teile selgitusiga selle kohta.

![Tehu küsimus, kui valitud plaan ei muuta abonnamentit](/img/account-page/upgrade-no-change.png)

Otsestamise lõpetamise pärast lisatakse uued tooted teie klientide kontodele ja kõik uusde tootete piirangud või funktsioonid lisatakse neile kohe: külastused, diskruum, sisu vb...

##

##

## Upgrade ja Downgrade väljad {#upgrade-and-downgrade-paths}

Iga oma toote juures on **Up & Downgrades** tab. Selle tabil esimese valikuna on välja nimetatud **Plan Group** (Plani gruppe).

**Plan groups** võimaldab teil Ultimate Multisite'ile teada, et mõned plaadid kuuluvad sama "familias", ja seega neid kasutatakse upgrade/downgrade väljendiste loomiseks.

![Toote redigeerimise Up and Downgrades tab Plan Group välja](/img/config/product-upgrades-plan-group.png)

Näiteks teil on saadaval **Free plan** (Vaba plaan), **Basic Plan** (Abiplaan) ja **Premium Plan** (Premium plaan). Soovite, et kasutajad, kes on abonneeritud Free Plaanile, saaksid upgrade'ida ainult Premium Plaanile ja ei soovi, et nad näeksid "Basic Plan"i upgrade võimalust. Kõik, mida peate teema, on selle sama plaani gruppe nime asendamine nii Free ja Premium plaanidele nagu allpool näidatud screenshots:

![Free Plan toote lehel High End plan group asendatud](/img/config/product-upgrades-free.png)

![Premium Plan toote lehel High End plan group asendatud](/img/config/product-upgrades-premium.png)

See sellega tuleb Ultimate Multisite'ile teada, et võrku all on "High End" nimega planeeride famili. Upgrade või downgrade korraldus pakkumisel näidatakse kasutajale ainult selle sama familiast planeeride võimalusi.
