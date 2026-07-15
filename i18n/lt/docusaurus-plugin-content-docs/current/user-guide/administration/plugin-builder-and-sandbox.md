---
title: Plankas kūrimas ir sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 įdaro įvedami **Plugin Builder & Sandbox System**, kuris leidžia AI asistentui generuoti, aktyvuoti ir valdyti WordPress pluginus jūsų tinklu – viską per saugų, izoliuotą sandbox aplinkvę.

## Pradžia {#overview}

Plugin Builder leidžia AI asistentui rašyti pritaikytus WordPress pluginus atsakymui į natūralų kalbos užklausas. Generuoti pluginai valandina, saugo ir aktyvuojami sandboksą laiekyje, kol jie bus įdaryti į tiesioginį svetainės veikimą.

Pavyzdžiui, naudojimo atvejais yra:

- Be programavimui generuoti lengvas pagalbiniai pluginai.
- Prototipuoti funkcijas, reikalaučias WordPress hook'ų ar pritaikytų post tipų.
- Sukurti trumpalaikis automatinis skriptus partiju operacijoms.

## Pluginų generavimas per AI {#generating-a-plugin-via-ai}

Norėdami generuoti pluginą, atidarykite kešio Gratis AI Agent čatis interface ir aprašykite, ką jums reikia. Pavyzdžiui:

> "Sukurti pluginą, kuris pridės pritaikytą admini pranešimą į dashboardą."

AI padary:

1. Generuos plugino PHP kodą naudojant struktūrinę kodų generavimą.
2. Valandina išvestį dėl sintaksos klaidos ir neapibrėžtų įrankių.
3. Saugo generuotą pluginą sandboksų depozitoje (sandbox store).
4. Atsiųs patvirtinimą su plugino slugu ir mygtuku **Aktyvuoti sandboksą**.

Jūs galite tobulinti rezultatą, vadovaukančiant tokio pokalbo sritis po generavimo, prieš aktyvuojant.

## Sandboksų aktyvavimas {#sandbox-activation}

Plugino aktyvavimas sandboksą laiekyje yra skirtas aktyvavimui tiesioginėje tinklu. Sandboksas:

- Veda pluginą izoliuotame WordPress aplinkve (wp-env).
- Įrengia bet kokius PHP klaidas, perspėjimus ar hookų konfliktus.
- Praneša aktyvavimo rezultatą atgal čatis interface.

Norėdami aktyvuoti pluginą sandboksą laiekyje, spustelėkite mygtuką **Aktyvuoti sandboksą** AI pokalbo atsakyme arba naudokite slash komandą:

```
/activate-plugin <plugin-slug>
```

Statusasmena patvirtina, ar ar didė sujungimas sėkmingai įvyko ar ne. Jei įvyksta klaida, klaidos logas pasirodys čate.

## Generuotų pluginų valdymas {#managing-generated-plugins}

Generuoti pluginai yra nurodyti skiltyje **Gratis AI Agent → Plugin Builder → Manage Plugins**. Šiuo ekrane galite:

| Veiksmas | Aprašymas |
|---|---|
| **Peržiūrėti šaltinį** | Peržiūrėti visą PHP kodą pluginui. |
| **Privaldoma įjungti sandbokse** | Atlikti sandboksą įjungimo patikrinimą. |
| **Įdėti į tinklą** | Įdėti pluginą į jūsų tiesų tinklą (reikalauja rankinio patvirtinimo). |
| **Atnaujinti** | Užtikrinti naują versiją per AI, keičiant esamą kodą. |
| **Ištrinti** | Ištrinti pluginą iš sandboksų depozito. Pirmiausia deaktivuoja jį visose svetainėse. |

:::warning
**Įdėti į tinklą** įdaro generuotą pluginą į jūsų tiesų WordPress multisite. Peržiūrėkite plugino kodą prieš pradėdami. Gratis AI Agent prašys patvirtinimo, kol atliksite tiesų įdaro instalaciją.
:::

## Generuotų plugino įdaro į tinklą {#installing-a-generated-plugin-on-the-network}

Kai būsite apšaukus sandboksą pluginą, galite jį įdėti į tiesų tinklą:

1. Eikite į **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Paspauskite **Install on Network** (Įdėti į tinklą) šalia to plugino, kurį norite įdėti.
3. Patvirtinkite dialogą. Pluginas bus įdėtas į `wp-content/plugins/` ir įjungs į tinklą.

Alternatyviai, naudokite slash komandą čate:

```
/install-plugin <plugin-slug>
```

## Plugin atnaujinimai {#plugin-updates}

Kad atnaujinti generuotą pluginą, aprašykite pakeitimą AI asistentui naujo pokalbio metu:

> "Atnaujinkite dashboard-notice pluginą, kad jis rodytų tik pranešimą administratoriams."

AI sukuria naują versiją, kuri pasirodys sandboksą pusėje šalia esamos versijos. Peržiūrėkite diffą ir patvirtinkite prieš taikant atnaujinimą.

## Integracija su HookScanner {#hookscanner-integration}

Plugin Builder na naujimo **HookScanner** įtraukiamą, kuris analizuoja visus registeredus hookus ir filterius kiekvienam generuotam pluginui. HookScanner rezultatai rodomas čate atsakymuose ir apima:

- Registruoti veiksmų hookus (`add_action` piktogramos).
- Registruoti filtras hookus (`add_filter` piktogramos).
- Kaip visoki kitas hookai rasti pluginų priklausomyje (skiriasi `vendor/` ir `node_modules/` katalogams).

Tai padeda jums suprasti plugino veikimą, kol jį aktyvuosite.

## Sauginimo atsižvelginkai {#security-considerations}

- Generuoti pluginai saugomi nepriklausomai nuo manuai įdėto pluginų ir nėra pasiekiami standartinėje WordPress meniu valdyti pluginus skrinio, kol jūs juos nustatytės tiesiogiai tinklu.
- Sandbox naudoja kelionės validaciją, kad užprengtų katalogų naršymą (directory traversal) būtų išvengta, kai rašoma pluginų failai.
- Pluginai su pavojingais funkcijomis (pvz., `eval`, `exec`, `system`) bus pažymėti naudojant validaciją ir nebus aktyvuoti.
