---
title: Građevnik in sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 predstavlja **Plugin Builder & Sandbox System**, ki omogoča asistentu AI generirati, aktivirati in upravljati WordPress pluginami na vašeta mreži – vse to preko varnostnega, izoliranega sandbox okvira.

## Pregled {#overview}

Plugin Builder omogoča asistentu AI pisanje prilagojenih WordPress pluginov v odgovor na naravne besedne zahteve. Generirani pluginovi so validirani, shranjeni in aktivirani znotraj sloja sandbox pred tem, kot da bi vplivali na delovanje življenjskega spletnega mesta.

Primeri uporabe vključujejo:

- Generiranje lahkotnih uporabniških pluginov brez vključenega razvijalca.
- Prototipiranje funkcij, ki zahtevajo WordPress hooks ali prilagojene post tipe.
- Ustvarjanje kratkotrajnih avtomatizacijskih skript za batch operacije.

## Generiranje pluginov preko AI {#generating-a-plugin-via-ai}

Za generiranje pluginove ga odprite chat interfejs Gratis AI Agent in opišite, kaj potrebujete. Na primer:

> "Ustvari plugin, ki dodaje prilagojen admini obvestilo na dashboard."

AI bo:

1. Ustvaril PHP kod za plugin z uporabo strukturiranega generiranja kode.
2. Validiral rezultat na sintaksne napake in nespojne vzorce.
3. Shranil generirani plugin v sandbox storitev.
4. Vrnil potrdbo z slugom pluginove in gumbom **Aktiviraj v Sandbox**.

Rezultat lahko dopolnite, če nastavite nadaljnje v tej isti pogovorni niti pred aktiviranjem.

## Aktivacija v sandboxu {#sandbox-activation}

Aktivacija generiranega pluginove v sandboxu je drugačna od aktivacije na življenjski mreži. Sandbox:

- Predvajajo plugin v izolovanem WordPress okolju (wp-env).
- Uločuje vse PHP napake, opozorilne sporočila ali konflikte hookov.
- Pripomni rezultat aktivacije nazaj v pogovornem interfejsu.

Za aktivacijo pluginove v sandboxu kliknite gumb **Aktiviraj v Sandbox** v odgovoru AI čata, ali uporabite slash komando:

/activate-plugin <plugin-slug>
```

Status sporočilo potrjuje, ali je aktivacija uspešna ali neuspešna. Pri neuspešnem delu se v log napake prikazuje v chat threadu.

## Upravljanje generiranih pluginov

Generirani pluginov so na seznamu **Gratis AI Agent → Plugin Builder → Manage Plugins**. S tega zaslona lahko:

| Akcija | Opis |
|---|---|
| **View source** | Pregledate celoten PHP kodo pluginove. |
| **Re-activate in sandbox** | Ponovno vpličite preverjanje aktivacije v sandboxu. |
| **Install on network** | Razpostavite plugin na živo omrežje (zahteva ročno potrditev). |
| **Update** | Prinašite novo verzijo preko AI, ki zamenja obstoječo kodo. |
| **Delete** | Odstranite plugin iz skladišča sandboxa. Najprej ga deaktivirate na vseh spletnih strani. |

:::warning
**Install on network** razpostavlja generiranega plugin na vaše živo WordPress multisite. Pregledajte kodo pluginove pred nadaljnjo uporabo. Gratis AI Agent bo zahteval potrditev pred dokončanjem žive instalacije.
:::

## Instalacija generiranega pluginove na omrežju

Ko ste zadovoljni z pluginom v sandboxu, ga lahko instalirate na živo omrežje:

1. Pojdite na **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Kliknite na **Install on Network** ob pluginu, ki želite razpostaviti.
3. Potrdite dialog. Plugin se instalira v `wp-content/plugins/` in je aktiviran na omrežju.

Alternativno, uporabite slash komando v chat interfejsu:

```
/install-plugin <plugin-slug>
```

## Odklepanje pluginov (Plugin Updates)

Za odklenjanje generiranega pluginove opišite spremembo asistentu AI v novem pogovoru:

> "Odkleni plugin dashboard-notice tako, da prikazuje samo obvestilo za administratorje."

AI generira novo verzijo, ki se pojavlja v sandboxu ob trenutni verziji. Pregledate diff in potrdite pred uporabo odklenjanja.

## Integracija HookScanner

Plugin Builder uporablja integriran **HookScanner**, ki analizira hooke in filtere, ki jih je registrirala vsaka generirane pluginove. Rezultati HookScannera se prikazuje v odgovoru na sproščanje (chat response) in vključuje:

- Akcijske hooke, ki so registrirane (`add_action` pozivi).
- Filterne hooke, ki so registrirane (`add_filter` pozivi).
- Vsakehooke najdenih v zavisnikih pluginov (skidira direktorije `vendor/` in `node_modules/`).

To vam pomaga razumeti vedenje pluginove pred njihovim aktiviranjem.

## Varnostni razmerja

- Generirane pluginove so shranjene ločeno od ručno instaliranih pluginov in ne so dostopne preko standardnega zaslona za upravljanje pluginov WordPressa, dokler jih ne instalirate eksplicitno na mreži.
- Sandbox uporablja validacijo poti (path validation), da bi preprečil prehod po direktorijah (directory traversal) ob pisanju datotek pluginov.
- Pluginove z nevarnimi pozivami funkcij (npr. `eval`, `exec`, `system`) so označeni med validado in ne bodo aktivirani.
