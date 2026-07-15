---
title: Zapier integracija
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integracija Ultimate Multisite su Zapieriu

Viename viename meselėje mes diskutavome apie [Webhooks](webhooks.md) ir kaip juos galima naudoti integracijai su trečiosiomis programomis.

Naudojant webhooks tai yra šiek tiek sudėtinga, nes ji reikalauja pažangios programavimo žinių ir įgūdžių užfiksuoti duomenų paketus (payloads). Naudojant **Zapier** jūs galite sužinoti, kaip to išvengti.

Zapier turi integracijas su daugiau nei 5000+ programomis, o tai padara komunikacijai tarp skirtingų programų lengva.

Jūs galite sukurti **Triggers**, kurie bus įvykti, kai įvyksios jūsų tinklu (pvz., sukurtas paskyba ir įvyksta `account_create` eventas) arba generuoti **Actions** jūsų tinklu, reaguojant į vidurinius įvykius (pvz., sukurti naują nuskaitą nuskaitą vėliau).

Tai yra įmanoma, nes **Ultimate Multisite Zapier's triggers** ir actions veikia pagal [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Kaip pradėti {#how-to-start}

Pirmiausia ieškokite Ultimate Multisite Zapier aplikacijų sąraše. Alternatyviai galite paspausti į [šią nuorodą](https://zapier.com/apps/wp-ultimo/integrations).

Perjunkite į savo dashboardą ir spauskite mygtuką **+** **Create Zap** (Sukurti Zap) dešinėje skirstymo linijoje, kad nustatytumėte naują Zapą.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Jūs būsite perdirbti į svetainę, kur sukuriate Zapą.

Į paieškos lauką įveskite "wp ultimo". Spauskite, kad pasirinkumėte **Beta** versijos opsinę.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Pasirinkus mūsų programą, pasirinkite prieinamą įvykį: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Dabar mums reikia suteikti Zapierui prieigą į **jūsų tinklą**. Spauskite **Sign in** (Prisijungti), atidarytos nauja langas, kurio reikalaujama **API kredencijos**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Eikite savo tinklo administratorio panelje ir nuskrieškitės į **Ultimate Multisite > Settings** > **API & Webhooks** ir ieškokite sekciją API Settings.

Pasirinkite pasirinkimą **Enable API**, nes tai yra būtina, kad šis ryšys tiktų veikti.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Naudokite ikoną **Copy to Clipboard** laukeliu API Key ir API Secret laukeliuose ir įkleiskite šiuos vertus į integracijos ekraną.

URL lauke įveskite savo tinklo pilną URL adresą, įskaitant protokolus (HTTP ar HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Spauskite mygtuką **Yes, Continue**, kad tęstumėte kitą žingsnį. Jei viskas veiks tinkamai, jūsų naujas susijęs paskyra jus sveikins! Spauskite **Continue**, kad sukurintumėte naują trigger.

## Kaip sukurti naują Trigger'ą {#how-to-create-a-new-trigger}

Dabar, kai jūsų paskyra bus susijusi, galite pamatyti pasirinktus įvykius. Šiuose tutoriale pasirinkime įvykį **payment_received**.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Kai įvykis bus pasirinktas ir paspausite **continue**, pasirodys **test step**.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Šiuo etape Zapier patikrinės, ar jūsų Zap gali **pašalinti konkrečios payload duomenys to įvykiui**. Ateityje kitų taškų tą pačiu tipu informacijos bus siuntama su šiuo pačiu struktūra.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

In mūsų tutoriale testas buvo **sėkmingai atliktas** ir atsiųsė pavyzdį informacijos įkrovimą (payload). Ši pavyzdinė informacija bus naudinga mums, kol kursimos veiksmus. Jūsų trigger dabar yra sukurtas ir pasiruošęs būti sujungtas su kitais programomis.

## Kaip sukurti Actions {#how-to-create-actions}

Actions naudo informaciją iš kitų trigger'ų, kad sukurtų naujus įrašus jūsų tinkluose.

**Sukurdami action step** pasirinksite Ultimate Multisite **Beta** ir pasirinksite parinktį **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Kito pasekimo metu arba sukurtosite savo autentifikavimą, kaip padaryme mygtuke **Kaip pradėti**, arba pasirinksite jau kurto autentifikavimą. Šio tutoriale pasirinksimos tą patį jau kurto autentifikavimą.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Action nustatymas (Setting up the Action) {#setting-up-the-action}

Tai yra **action'o pagrindinis žingsnis**, ir čia dalykai yra aštrę skirtingi. Pirmą informaciją, kurią pasirinksite, bus **Item**. Item yra jūsų tinklo **informacijos modelis**, pavyzdžiui **Klientai (Customers), Mokėjimai (Payments), Svetai (Sites), El. laišai** ir kiti.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Pasirinkdami itemą, forma **atsiranga, kad pateiktų reikalingus ir valstybinus laukus** pasirinkto itemo.

Pavyzdžiui, pasirinkdami itemą **Customer**, forma laukus atsiranda viską, kas reikalinga, kad sukurtumėte naują Klientą tinkluose.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Visos laukų, pažymėtos kaip **reikalingos**, užpildytus ir paspaudę "continue", paskutinis ekranas parodys jums užpildytus laukus ir tą laukus, kuriuos nenaudojama.

[Zapier akvizisų testas, rodant užpaližę ir neįvykę laukus](/img/admin/webhooks-list.png)

Kaip neturite testui, jis bus nustatytas. Tai taip pat svarbu patikrinti savo tinklą, ar jūsų akcija buvo sukurta naudojant jūsų akcijos testą.
