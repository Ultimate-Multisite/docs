---
title: Planų pasiklaida
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Plana atnaujinimas (v2)

_**SVARBUOTAS PRANEŠIMAS: Šis straipsnis taikomas Ultimate Multisite versijai 2.x.**_

Plano ar prenumeratos atnaujinimas yra dažna veikla, kurią jūsų klientai gali atlikti, jei turėtų laimintų apribotą biudžetą arba je sužino, kad ne reikalauja daug resursų savo subsite veikti.

## Kaip atnaujinti planą

Jūsų klientai gali pakeisti planą bet kuriuo metu, suvardijant į savo subsite admin panelį ir paspaudus **Change** (Pakeiti) mygtuką savo paskyros puslapyje.

![Klientų paskyros puslapio nuotrauka su Jūsų narys kortele ir Change mygtuku](/img/account-page/membership-change-button.png)

Paspaudus **Change** mygtuką vartotojas/klientas bus nukreiptas į kasos puslapį, kurioje galės pasirinkti planą, kurį nori pakeisti savo prenumeratą.

![Planų atnaujinimo opsijų puslapio klientų pusėje](/img/account-page/downgrade-picker.png)

Šis pavyzdys rodo, kaip atnaujiname planą nuo **Premium** iki **Free** (Nemokamas).

Kad tęsti procesą vartotojui reikės paspausti mygtuką **Complete Checkout** (Pabaigti kasą). Vartotojas tada bus grįstas į paskyros puslapį, kurioje bus matyti pranešimas apie neįvykdytą pakeitimą narys. Pakeitimai įvyks vartotojo **kitame paskyrimo ciklo**.

![Paskyros puslapio nuotrauka su pranešimu apie neįvykdytą narys pakeitimą](/img/account-page/pending-change.png)

### Kas vyksta, kai vartotojas atnaujina planą

Svarbu paminėti, kad plano atnaujinimas nevertina esamų konfiguracijų vartotojo subsite.

Tai ne keičia automatiškai svetainės šabloono, nes svetainės šabloono pakeitimas visiškai ištrins ir atsisiųs (reset) subsite. Tai skirti išvengti nereikmingos duomenų praradimo. Taigi diskiojampas, temai, pluginai ir kitos dalys bus laisvai naudojami, išskirta tik įrašai (posts).

Sausiame, kad suprantame, kad jūsų pagrindinė rūpeslis būtų nustatytos ribos ir kvotas, kurius jūs nustate kiekvienam planui, bet turime laikytis to, kokį žalos tai gali sukelti vartotojo subsite, jei ištrinksite ar pakeisite jo konfigūras.

Jei įrašų skaičius pasieks ribą, nustatytą planui, jūsų yra 3 skirtingos galimybės: **Laikyti rašyli** *,* **Pakeisti į laisvą** *,* arba **Pakeisti į projektą** *. Jūs galite nustatyti tai Ultimate Multisite nustatymuose.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Kas su mokėjimu

Versijoje 2.0 tai ne reikalauja daugiau korekcijų dėl prastavimo (proration).

Tai ta, kad sistema laukia, kol esamasis nuskaitas **pabaigsite savo paskyros mokesčių ciklo prieš** kol naujas plan/nuskaita įsigalvoja. Naujoji mokėjimo suma naujam abonementui bus automatiškai pritaikoma ir įskaitoma kitame mokėjimo ciklo metu.
