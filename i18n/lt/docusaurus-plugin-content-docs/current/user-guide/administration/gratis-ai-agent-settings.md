---
title: Gratis AI Agent nustatymai
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent nustatymai

**Settings → Advanced** ekranas Gratis AI Agent suteikia administratoriaus lygio konfigūraciją backend integracijoms. Šiame puslapyje dokumentuojamas feedback persiuntimas, paieškos teikėjo raktai, valdomos Superdav paslaugos sąranka, Google Calendar valdikliai, TextBee SMS nustatymai ir viso tinklo funkcijų vėliavėlės.

## Prieiga prie nustatymų {#accessing-settings}

1. WordPress administravimo srityje eikite į **Gratis AI Agent → Settings**.
2. Spustelėkite skirtuką **Advanced**.

## Feedback endpoint konfigūracija {#feedback-endpoint-configuration}

Feedback endpoint gauna POST užklausas iš AI agento, kai naudotojas pateikia feedback per nykščio žemyn mygtuką, automatinio raginimo reklamjuostę arba `/report-issue` komandą.

| Laukas | Aprašymas |
|---|---|
| **Feedback Endpoint URL** | URL, kuris gauna feedback pateikimus kaip HTTP POST užklausas su JSON turiniu. |
| **Feedback API Key** | bearer token, siunčiamas kiekvienos feedback užklausos `Authorization` header. Palikite tuščią, jei jūsų endpoint nereikalauja autentifikavimo. |

### Tikėtinas JSON payload {#expected-json-payload}

Jūsų feedback endpoint turi priimti JSON turinį bent su šiais laukais:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Payload gali būti papildomų laukų, priklausomai nuo pokalbio konteksto.

### `triage_category` reikšmės {#triagecategory-values}

AI rūšiavimo sluoksnis priskiria vieną iš šių reikšmių `triage_category` prieš persiųsdamas payload:

| Reikšmė | Reikšmė |
|---|---|
| `factual_error` | Asistentas pateikė neteisingą faktinę informaciją. |
| `unhelpful_answer` | Atsakymas buvo techniškai teisingas, bet nenaudingas. |
| `inappropriate_content` | Atsakyme buvo turinio, kurio nereikėtų rodyti naudotojams. |
| `other` | Feedback neatitiko žinomos kategorijos. |

### Autentifikavimas {#authentication}

Jei jūsų endpoint reikalauja autentifikavimo, nustatykite **Feedback API Key** lauką į savo bearer token. Agentas siunčia:

```
Authorization: Bearer <your-api-key>
```

Jei **Feedback API Key** laukas tuščias, `Authorization` header nesiunčiamas.

### Feedback rinkimo išjungimas {#disabling-feedback-collection}

Palikite tiek **Feedback Endpoint URL**, tiek **Feedback API Key** laukus tuščius. Nykščio žemyn mygtukas ir feedback UI naudotojams lieka matomi, bet pateikimai nepersiunčiami jokiai išorinei paslaugai.

## Brave Search API Key {#brave-search-api-key}

Taip pat **Advanced** skirtuke **Brave Search API Key** laukas įjungia [interneto paieškos](../configuration/internet-search) galimybę.

| Laukas | Aprašymas |
|---|---|
| **Brave Search API Key** | Jūsų API raktas iš Brave Search kūrėjų Dashboard. Reikalingas norint įjungti interneto paiešką AI asistente. |

Lauko etiketėje yra spustelėjama nuoroda į Brave Search API registracijos puslapį. Palikite tuščią, kad išjungtumėte interneto paiešką.

Žr. [Interneto paieška](../configuration/internet-search) galutinių naudotojų dokumentacijai apie šią funkciją.

## Valdoma Superdav paslauga {#managed-superdav-service}

Superdav AI Agent v1.18.0 prideda valdomus Superdav paslaugos endpoint ir automatinį ryšio parengimą palaikomoms svetainėms. Naudokite šiuos valdiklius, kai jūsų svetainė turėtų jungtis prie hostingo teikėjo, o ne prie rankiniu būdu sukonfigūruoto paslaugos endpoint.

| Laukas | Aprašymas |
|---|---|
| **Managed Superdav Service** | Įjungia hostingo Superdav paslaugos ryšį palaikomoms svetainėms. |
| **Provision Connection** | Paleidžia automatinį endpoint ir prisijungimo duomenų parengimą. Naudokite tai patvirtinę, kad svetainė turėtų naudoti valdomą teikėją. |
| **Service Endpoint / Connection Status** | Rodo dabartinį endpoint arba ryšio būseną po parengimo. |

Po parengimo išsaugokite nustatymus ir patikrinkite ryšio būseną prieš pasikliaudami valdomos paslaugos darbo eigomis. Jei parengimas nepavyksta, peržiūrėkite rodomas pakartotinio bandymo gaires ir patvirtinkite, kad svetainė turi leidimą naudoti hostingo teikėją.

## Google Calendar konfigūracija {#google-calendar-configuration}

Kai įjungtos Superdav AI Agent v1.18.0 kalendoriaus funkcijos, agentas gali skaityti sukonfigūruotus kalendorius ir įvykių informaciją. Kalendoriaus įrankiai orientuoti į skaitymą ir naudingi tvarkaraštį įvertinantiems priminimams, dalyvių tolesniems veiksmams ir kontaktų atitikimui.

| Laukas | Aprašymas |
|---|---|
| **Google Calendar Credentials** | Saugo prisijungimo duomenis arba token ryšį, reikalingą kalendoriaus duomenims skaityti. |
| **Calendar Selection** | Apriboja, kuriuos sukonfigūruotus kalendorius agentas gali tikrinti. |
| **Calendar Connection Status** | Patvirtina, ar dabartiniai prisijungimo duomenys gali skaityti kalendorius ir įvykius. |

Laikykite kalendoriaus prisijungimo duomenis apribotus tik tais kalendoriais, kurių agentui reikia. Prisijunkite iš naujo arba pakeiskite prisijungimo duomenis, jei būsena nurodo pasibaigusį token.

## TextBee SMS pranešimai {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 prideda TextBee kaip SMS teikėją sukonfigūruotoms pranešimų darbo eigoms. SMS pranešimai turėtų būti derinami su žmogaus patvirtinimo vartais jautrioms arba naudotojams skirtoms žinutėms.

| Laukas | Aprašymas |
|---|---|
| **TextBee API Key** | Autentifikuoja užklausas TextBee SMS teikėjui. |
| **TextBee Device / Sender** | Parenka TextBee siuntėją arba įrenginį, naudojamą išeinančioms žinutėms, kai to reikalauja teikėjas. |
| **SMS Notifications Enabled** | Leidžia patvirtintoms darbo eigoms siųsti tekstinių žinučių pranešimus. Palikite išjungta, kad būtų išvengta SMS siuntimo. |

Siųskite bandomąją žinutę tik administratoriui priklausančiu numeriu, tada patvirtinkite patvirtinimo vartų veikimą prieš įjungdami suplanuotus arba dalyviams skirtus priminimus.

## Funkcijų vėliavėlės {#feature-flags}

Taip pat pristatytas v1.9.0, **Settings → Feature Flags** skirtukas suteikia perjungiklius pasirenkamai funkcionalumui. Kiekviena vėliavėlė yra įjungta arba išjungta visame tinkle; šiuo metu nėra atskiros svetainės lygio perrašymo.

### Prieiga prie funkcijų vėliavėlių {#accessing-feature-flags}

1. WordPress administravimo srityje eikite į **Gratis AI Agent → Settings**.
2. Spustelėkite skirtuką **Feature Flags**.

### Prieigos valdymo vėliavėlės {#access-control-flags}

| Žyma | Numatytoji reikšmė | Aprašymas |
|---|---|---|
| **Apriboti administratoriams** | Išjungta | Įjungus tik naudotojai su `administrator` role gali atidaryti AI Agent pokalbio skydelį. Visi kiti role vietoj to mato pranešimą „Susisiekite su savo administratoriumi“. |
| **Apriboti Network Admins** | Išjungta | Įjungus multisite tinkle tik Super Admins gali naudoti agentą. Atskiri svetainių administratoriai blokuojami. Turi pirmenybę prieš „Apriboti administratoriams“, jei įjungti abu. |
| **Leisti Subscriber prieigą** | Išjungta | Įjungus naudotojai su `subscriber` role gali naudoti pokalbio sąsają, bet yra apriboti tik skaitymo galimybėmis (be įrašų kūrimo ar nustatymų keitimo). |
| **Išjungti ne nariams** | Išjungta | Integruojama su Ultimate Multisite narystės būsena. Įjungus pokalbis paslepiamas svetainėse, kurios neturi aktyvios narystės. |

### Prekės ženklo žymos {#branding-flags}

| Žyma | Numatytoji reikšmė | Aprašymas |
|---|---|---|
| **Slėpti „Powered by Gratis AI Agent“ poraštę** | Išjungta | Pašalina prekės ženklo priskyrimo eilutę, rodomą pokalbio valdiklio apačioje. Rekomenduojama diegimams su nuosavu prekės ženklu. |
| **Pasirinktinis agento pavadinimas** | *(tuščia)* | Pakeičia numatytąją „Gratis AI Agent“ etiketę pokalbio antraštėje ir administravimo meniu jūsų paties produkto pavadinimu. Palikite tuščią, jei norite naudoti numatytąją reikšmę. |
| **Slėpti agento parinkiklį** | Išjungta | Įjungus naudotojai negali perjungti tarp penkių įtaisytųjų agentų. Dabartinis agentas fiksuojamas pagal tai, kas sukonfigūruota kaip numatytoji reikšmė skiltyje Settings → General. |
| **Naudoti svetainės piktogramą kaip pokalbio avatarą** | Išjungta | Pakeičia numatytąją AI piktogramą pokalbio valdiklio antraštėje WordPress svetainės piktograma (nustatoma skiltyje Appearance → Customize → Site Identity). |

### Automatizavimo saugos žymos {#automation-safety-flags}

Superdav AI Agent v1.18.0 įveda žmogaus patvirtinimo vartus ir priminimų įrašus saugesniems automatizavimo paleidimams. Šie valdikliai gali būti rodomi funkcijų žymose arba išplėstiniuose automatizavimo nustatymuose, priklausomai nuo įdiegto paketo.

| Žyma | Numatytoji reikšmė | Aprašymas |
|---|---|---|
| **Reikalauti žmogaus patvirtinimo** | Rekomenduojama įjungta | Sustabdo jautrius automatizavimus, kol įgaliotas naudotojas peržiūri ir patvirtina siūlomą veiksmą. |
| **Priminimų deduplikacija** | Įjungta | Įrašo išsiųstus priminimus, kad pakartotiniai bandymai ar suplanuoti paleidimai nesiųstų pasikartojančių pranešimų. |
| **Įjungti kalendoriaus įrankius** | Išjungta, kol sukonfigūruota | Leidžia agentui skaityti sukonfigūruotus Google kalendorius ir įvykius. |
| **Įjungti SMS pranešimus** | Išjungta, kol sukonfigūruota | Leidžia patvirtintoms darbo eigoms siųsti TextBee SMS pranešimus po to, kai kredencialai išsaugomi. |

### Pakeitimų taikymas {#applying-changes}

Spustelėkite **Save Settings** perjungę bet kurią žymą. Pakeitimai įsigalioja iš karto — nereikia nei išvalyti talpyklos, nei iš naujo aktyvuoti plugin.
