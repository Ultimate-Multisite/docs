---
title: Klientų paskyros puslapis
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Jūsų Klientų Skaitmeninė Skelbimų Suna (v2) {#your-clients-account-page-v2}

_**SVARBUOTAS PRANEŠIMAS: Šis straipsnis taikomas Ultimate Multisite versijai 2.x.**_

Kai klientai užsiprenima planą jūsų tinklu, jie gauta prieiga svetainei ir jos įrankiu (dashboard), kurioje yra svarbi informacija apie jų mokėjimų istoriją, nuskaitas, domenus, planų apribojimus ir kitus dalykus...

Šiame tutoriale mes jums pateiksimos klientų skaitmeninės skelbimų puslapio peržiūrą ir pamatysite, ką jūsų klientai gali matyti ir daryti visoje sistemoje.

## Skaitmeninė Skelbimų Suna (Account Page) {#the-account-page}

Skaitmeninė skelbimų suna pasiekiama, spustelėję **Account** (Suna) jūsų klientų dashboard'e.

![Account menu in the customer dashboard](/img/account-page/account-menu.png)

Su suverenių tinklų (sovereign tenant networks), Ultimate Multisite v2.13.0 išlaiko šią klientų valdymą įrinktąje svetainėje. Jei klientas atidaro skaitmeninę suną, atlikia veiksmus kaip „checkout“ (pirkimas), „billing“ (mokėjimo informacija), „invoice“ (išskaitojimas), „site-management“ (svetainės valdymas), „template-switching“ (šablonų keitimas) ar „domain-mapping“ (domenų netyrimas) suvereniame tinklu, šie veiksmus grąžina į pagrindinės svetainės klientų panelį, kad tinklo mokėjimai ir nuskaitos būtų aukštesnės.

Kai klientas atsiranda iš suverinio tinklo, pagrindinė svetainės klientų panelis gali turėti linką grąžinti į suverinį tvarką (tenant site). Šis grąžinimo linkas rodomas tik tada, kai Ultimate Multisite gali patvirtinti grąžinimo vietą kaip vieną iš klientų svetaini, o tai užprekia klaidų redirekciją, palaikydama suverinio tinklo veiksmus.

![Customer account page overview](/img/account-page/overview.png)

Po to, kai klientas spustelės šį elementą, jis pamatys peržiūrą savo nuskaitos, mokėjimo adresą, išskaito, domenus ir svetainės apribojimus, o turės galimybę pakeisti ****Site Template** (jei tai leidžiam jūsų tinklu).

Ji gali taip pat pakeisti nuskaitą į kitą planą arba pirkti kitą paketą ar paslaugą, kurią jūs siū predominai. Pateikime kiekvieną dalį atskirai.

### Jūsų Abonentų Vaizdoapidbaida: {#your-membership-overview}

Jūsų klientų svetainės pavadinimo tik pojei matomas vaizdoapidbaida jų dabartinio planui ir pasiektos/pirto paketų. Ši blokas taip pat rodo abonentų numerį, pradines mokėtas sumą, kiek kainuoja planas ir bet kokis pasiektas/pirkta paketai, o kiek kartų buvo paskelbti už šį abonementą. Jūs galite pamatyti, ar abonementas yra **Aktyvus**, **Apsipirkęs** (Expired) ar **Atšalintas**.

![Membership overview showing plan, amount, and billing details](/img/account-page/membership-card.png)

Šio bloko pojei jūsų klientai mato blokus **Apie šią svetainę** ir **Svetainės ribos**. Šie blokai rodo visus apribojimus, kurie susiję su jų planu: diskų vietos, įrašai, puslapiai, apsilankymai ir kitas. Šie ribos galima nustatyti kiekviename planui langelyje **Ultimate Multisite > Products**.

![About This Site and Site Limits blocks showing plan limitations](/img/account-page/site-limits.png)

**Jūsų abonementas** dešinėje pusėje klientai gali paspausti **Pakeisti**. Tai rodo visus turimus planus ir paketus/paslaugas. Jei jie pasirinktų kitą planą, ribos bus nustatytos pagal naują planą, o ne dabartinius abonemento ribos – tai nesvarbu, ar jie laipsniai grįžta arba karoti.

Dabar, jei jūsų klientai pasirinksite pirkti paketus ar paslaugas šiam dabartiniam abonementui – pavyzdžiui daugiau diskų vietos ar apsilankymų – dabartinis abonementas nebus pakeistas, o tik nauji paketai bus pridėti prie jo.

Pagalba, kad įvestumą kodus negalite pridėti į šį abonemento pakeitimo puslapį. Jei klientas naudojo kupono kodą pirmo abonemento pirkimo metu, jis taip pat tinka šiam naujam abonementui.

### Mokytojo adresų atnaujinimas: {#updating-the-billing-address}

Na kontakte puslapyje jūsų klientai gali atnaujinti savo paskirties adresą. Jums viskas reikalinga – paspausti ant **Update** (Atnaujinti) šalia _Billing Address_ (Sąskaitos adresas).

![Billing Address section with Update button](/img/account-page/billing-address.png)

Jūsų klientui atidaryms naujas langas. Visai, kas reikalinga – įrašyti naują adresą ir paspausti **Save Changes** (Išsaugoti pakeitimus).

![Update billing address form](/img/account-page/billing-address-form.png)

### Svetmėto modelio keitimas: {#changing-the-site-template}

Norint leisti jūsų klientams keisti svetimo modelius, turite eiti į **Ultimate Multisite > Settings (Nustatymai) > Sites** ir įjungti pasirinkimą **Allow Template Switching** (Leisti modelio keitimo).

Taip pat, įeikiančiame **Ultimate Multisite > Products**, pasirinkite savo planus ir eikite į tvarką **Site Templates** (Svetimo modeliai). Įsitikinkite, kad pasirinkimas **Allow Site Templates** (Leisti svetimų modelių) yra įjungtas, o pasirinkime **Choose Available Site Templates** (Pasirinkti turimos svetimų modeliai) yra nustatytas.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Jūs pilsite visus turimus svetimų modelius savo svetainėje. Pasirinkite, kuriuos norite pateikti ir kuriuos jūsų klientams, susirinkusi šiu planu, nepatikslinti. Priežastai, kad šios nustatymai taip pat veikia užsakymo formą – bet jei modelis pasirinktas kaip **Not Available** (Nepateiktas), jis nepasirodys registracijos puslapyje šio plano.

Dabar jūsų klientai gali paspausti **Change Site Template** (Keisti svetimo modelį) savo paskirties puslapyje.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 rodo redizainuotą panelį keitimo modelio. Panelis prasideda su **current-template card** (aktuvalio modelio kortelė), kad klientai galėtų pamatyti, kuris modelis yra aktyvus prieš pasirenkdam naują.

Pagalvė, perscontinuedi skaitmeninis tinklas skirtų svetainės šablonų matyti, kol klientai peržiūri savo pasirinkimus. Tai padeda jiems nustatyti, kokie šablonai yra leidžiami jų planui, nepraradant aktyvumo dabartiniam pasirinkimui.

![Skirtų svetainės šablonų sąrašo matyti planui](/img/config/site-templates-list.png)

Pasirinkus tą, kurį norite pakeisti, jūsų pateikims klausimas patvirtinti pakeitimą.

![Skirtingos svetainės šablonų pakeitimo patvirtinimo dialogas](/img/account-page/template-switch-confirm.png)

Pas paleistavimą patvirtinimo ir paspaudimą **Process Switch**, naujas skirtas svetainės šablonas bus naudojamas jūsų klientų svetainėje.

Klientai taip pat gali naudoti funkciją **Reset current template** iš šio panelio, jei turėtų atnaujinti svetainę į dabartinį nurodytą šabloną. Taip kaip ir paspaudimas kitto šablonas, atnaujinimas gali perrašyti svetainės turinį, todėl klientai turėtų patvirtinti tik tada, kai suprantys atnaujinimo veiksmus.

### Personalizuojamų domenų pridėjimas: {#adding-custom-domains}

Jūsų klientams bus suteikta galimybė pridėti personalizuotą domeną šiam planui savo paskyrimo puslapyje. Kad jūsų klientai galėtų naudoti personalizuotus domenus, eikite į **Ultimate Multisite > Settings > Domain Mapping**.

Paleiskite funkciją **Enable Domain Mapping**. Tai leidžia jūsų klientams naudoti personalizuotus domenus lygio tinklo lauke.

Nepamirinkite patikrinti, ar domenų maptavimas yra paleistas pagrindiniu produktų bazę – nes galite apriboti produktą, kad neleidėte jūsų klientams naudoti personalizuotus domenus.

Eikite į **Ultimate Multisite > Products**. Pasirinkite savo planą ir eikite į tvarką **Custom Domains**. Paleiskite funkciją **Allow Custom Domains**.

![Custom Domains puslapio vizualizacija su paleistama funkcija Allow Custom Domains](/img/config/product-custom-domains.png)

Dėl toje įvykį visi klientai, susirinkę su šiuo specifiniu planu, turės galimybės naudoti pritaikytus domenus. Dabar, Arštrymo puslapyje (Account page), jūsų klientai gali pridėti pritaikytą domeną paspaudus **Pridėti domeną** (Add Domain).

![Pridėti domeną mygtukas Arštrymo puslapyje](/img/account-page/add-domain-button.png)

Pirmas atidarytas langas pateiks jūsų klientams pranešimą, informuojant, kaip naujeriaus DNS įrašus atnaujinti, kad šis pritaikytas domenas tiktų veikti jūsų tinkluose.

![DNS instrukcijos rodomos, kai pridėjamas pritaikytas domenas](/img/account-page/add-domain-dns.png)

Šį pranešimą galite redaguoti (jūs) puslapyje **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Pridėti naują domeną instrukcijos nustatymas Domenų mapavimui](/img/config/settings-domain-mapping.png)

Štai visas vaizdas domenų mapavimo nustatyjimo puslapyje:

![Domenų mapavimo nustatyjimo puslapio viskas](/img/config/settings-domain-mapping-full.png)

Passpaudus **Kiti žingsnis** (Next Step), jūsų klientai galės pridėti savo pritaikytą domenų vardą ir pasirinkti, ar šis pritaikytas domenas bus pagrindinis. Priežastojama, kad jūsų klientai gali naudoti daugiau nei vieną pritaikytą domeną savo svetainėms, todėl galia pasirinkti, kuris iš jų bus pagrindinis.

![Pritaikyto domeno vardas įvedimas su pagrindinio domeno variantu](/img/account-page/add-domain-primary.png)

Passpaudus **Pridėti domeną** (Add Domain), domenas bus pridėtas jūsų klientų skelbimui. Visai, kas reikalinga daryti dabar, yra pakeisti šio pritaikyto domeno DNS įrašus savo domenų registratorioje (domain registrar).

### Pavarodyti slaptažodį: {#changing-password}

Arštrymo paneliu jūsų klientai taip pat gali pakeisti savo slaptažodį paspaudus **Pakeisti slaptažodį** (Change Password).

![Pakeisti slaptažodį mygtukas Arštrymo puslapyje](/img/account-page/change-password-button.png)

Pokažys naują okenklinę, kurioje jūsų klientai turės įvesti savo dotą slaptažodį ir tada nurodyti naują slaptažodį, kurį nori naudoti.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Pavojingas zona: {#danger-zone}

Meistame dujį pasirinkimą, kuris yra pateiktas **Pavojingo josono** dalyje: **Ištrinti svetainę** ir **Ištrinti paskyrą**. Jame yra tiek šios dvi veiklos, nes jos yra pavojingos zona, o šie veiksmai negali būti atvirkščiai geri. Jei jūsų klientai ištrins savo svetainę arba paskyrą, jie nebus gali ją atgauti.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Jei jūsų klientai paspaudos į bet vieną šių dviejų pasirinkimų, jiems bus pateikta okenklinė, kurioje jie turės įjungti pasirinkimą pašalinti svetainę arba paskyrą ir bus perspėti, kad šis veiksmas negali būti atvirkščiai geri.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Jei jie ištrins savo svetainę, jų paskyra ir narys vis tiek bus neapaličiami. Jie tik prarūpins visą turinį savo svetainėje. Jei jie ištrins savo paskyrą, bus prarūpinti visi svetainiai, narystai ir informacija susijusi su šiuo paskyro.
