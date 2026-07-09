---
title: Preklicanje načrta
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Prehod na nižji paket (v2) {#downgrading-a-plan-v2}

_**POMEMBNE OPOMENJE: Ta članek se nanaša na Ultimate Multisite verzijo 2.x.**_

Prehod na nižji paket ali pretplavo je pogosta dejanje, ki ga lahko storijo vaši klienci, če imajo omejen proračun ali so se odločili, da ne bodo potrebovali veliko resursov za delovanje svoje subsite.

## Kako prehoditi na niži paket {#how-to-downgrade-a-plan}

Vaši klienci lahko v kateri koli čas preprečajo svoj paket zmanjšanjem, tako jim se prijavo v admin dashboard njihove subsite in kliknejo na **Change** (Izberi) pod stranjo računa.

![Stranica računa z vašo kartico članstva in gumbom Change](/img/account-page/membership-change-button.png)

Ob kliku na gumb **Change** bo uporabnik/klient preusmerjen na stran za plačilo, kjer lahko izbere paket, ki želite spremeniti svoje pretplavo.

![Stranica z možnostmi prehodov na niži paket](/img/account-page/downgrade-picker.png)

V tem primer preprečamo paket s **Premium** na **Free**.

Da bi nadaljeval uporabnik samo mora klikniti na gumb **Complete Checkout** (Preprosto plačaj). Nato ga bo vrnil na stran računa, kjer se prikazuje sporočilo o odločeni spremembi za članstvo. Spremembe bodo vplivale na **naslednji cikel plačanja** uporabnika.

![Stranica računa z bannerjem o odločeni spremembi](/img/account-page/pending-change.png)

### Kaj se zgodi, ko uporabnik preprečuje paket? {#what-happens-when-a-user-downgrades-their-plan}

Je pomembno opozoriti, da preprečevanje paketa ne spreminja obstoječih konfiguracij v subsite uporabnika.

Ne spremeni avtomatsko templat site, ker sprememba templat site popolnoma obriše in resetira subsite. To je zato, da se izognemo nepotrebnemu izgubi podatkov. Zato bodo diski, teme, pluginji itd. vseh ostalega ohranjeni, razen postov.

Razumemo da je vaša glavna zabava omejitev in kvote, ki jih nastavite pod vsako načrt, vendar moramo tudi upoštevati škodo, ki bi lahko povzročila, če bi izbrisali ali spremenili kakva koli njihova konfiguracija.

Za objave, ki presegajo limit, ki je nastavljen na načrtu, imate tri možnosti: **Ohraniti objave kot so** *,* **Preberi objave v košarico** *,* ali **Preberi objave v pripravo**. To lahko konfigurirate pod nastavitvami Ultimate Multisite.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Kaj se dogaja z plačilom {#what-happens-to-the-payment}

V verziji 2.0 ni več potrebno prilagajanje plačila glede proračevalne dostave (proration).

To je zato, ker sistem bo počakal, da obstoječe članstvo **prepravi svoj cikel plačevanja pred tem**, ko bodo nova načrt/članstvo začela delovati. Nova količina za novo članstvo se bo avtomatsko uporabila in obložila na naslednjem ciklusu plačevanja.
