---
title: Builder i Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Izgradnja i Sandbox za Pluginove

Gratis AI Agent v1.5.0 uvodi **Sistem za Izgradnju i Sandbox za Pluginove**, koji omogućava AI asistantu da generiše, aktivira i upravlja WordPress pluginovima na vašoj mreži — sve to kroz sigurno, izolirano sandbox okruženje.

## Pregled {#overview}

Plugin Builder omogućava AI asistantu da piše prilagođene WordPress pluginove na osnovu zahtjeva prirodnim jezikom. Generisani pluginovi se validiraju, pohranjuju i aktiviraju unutar sandbox sloja prije nego što uopće utiču na funkcionalnost uživoog sajta.

Primjeri upotrebe uključuju:

- Generisanje laganih utilitarnih pluginova bez učešća developera.
- Prototipisanje funkcionalnosti koje zahtijevaju WordPress hookove ili prilagođene tipove postova.
- Kreiranje kratkoročnih skripti za automatizaciju za operacije u serijama.

## Generisanje Plugin-a putem AI {#generating-a-plugin-via-ai}

Da biste generisali plugin, otvorite chat interfejs Gratis AI Agent-a i opišite šta vam je potrebno. Na primjer:

> "Kreiraj plugin koji dodaje prilagođenu administratorsku obavijest na dashboard."

AI će:

1. Proizvesti PHP kod plugin-a koristeći strukturirano generisanje koda.
2. Validirati izlaz na prisutnost sintaksnih grešaka i nesigurnih obrazaca.
3. Sačuvati generisani plugin u sandbox skladište.
4. Vratiti potvrdu sa slug-om plugin-a i dugmetom **Activate in Sandbox** (Aktiviraj u Sandboxu).

Možete usavršiti rezultat nastavkom razgovora u istoj niti prije aktivacije.

## Sandbox Aktivacija {#sandbox-activation}

Aktivacija generisanog plugin-a u sandboxu je drugačija od aktivacije na uživooj mreži. Sandbox:

- Pokreće plugin u izolovanom WordPress okruženju (wp-env).
- Hvata sve PHP greške, upozorenja ili konflikte hookova.
- Izvještava rezultat aktivacije nazad u chat interfejs.

Da biste aktivirali plugin u sandboxu, kliknite na dugme **Activate in Sandbox** u odgovoru AI chata, ili koristite slash komandu:

```
/activate-plugin <plugin-slug>
```

Statusna poruka potvrđuje je li aktivacija uspjela ili ne. U slučaju neuspjeha, log grešaka se prikazuje u chat niti.

## Upravljanje Generisanim Pluginovima {#managing-generated-plugins}

Generisani pluginovi su navedeni na lokaciji **Gratis AI Agent → Plugin Builder → Manage Plugins**. Sa ovog ekrana možete:

| Akcija | Opis |
|---|---|
| **View source** | Pregledati kompletan PHP kod plugin-a. |
| **Re-activate in sandbox** | Ponovo pokrenuti provjeru aktivacije u sandboxu. |
| **Install on network** | Implementirati plugin na uživooj mreži (zahtijeva ručnu potvrdu). |
| **Update** | Pružiti novu verziju putem AI-ja, zamjenjujući postojeći kod. |
| **Delete** | Ukloniti plugin iz sandbox skladišta. Prvo ga deaktivira sa svih sajtova. |

:::warning
**Install on network** implementira generisani plugin na vašu uživo WordPress multisite mrežu. Pregledajte kod plugin-a prije nastavka. Gratis AI Agent će tražiti potvrdu prije završetka uživo instalacije.
:::

## Instalacija Generisanog Plugin-a na Mreži {#installing-a-generated-plugin-on-the-network}

Kada ste zadovoljni pluginom u sandboxu, možete ga instalirati na uživooj mreži:

1. Idite na **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Kliknite na **Install on Network** pored plugin-a koji želite implementirati.
3. Potvrdite dijalog. Plugin se instalira u `wp-content/plugins/` i aktivira se na nivou mreže.

Alternativno, koristite slash komandu u chat interfejsu:

```
/install-plugin <plugin-slug>
```

## Ažuriranje Pluginova {#plugin-updates}

Da biste ažurirali generisani plugin, opišite promjenu AI asistantu u novom razgovoru:

> "Ažuriraj dashboard-notice plugin tako da obavijest prikazuje samo administratorima."

AI generiše novu verziju, koja se pojavljuje u sandboxu pored trenutne verzije. Vi pregledate razlike (diff) i potvrdite prije nego što se ažuriranje primijeni.

## Integracija HookScanner-a {#hookscanner-integration}

Plugin Builder koristi integrisani **HookScanner** za analizu hookova i filtera koje registruje svaki generisani plugin. Izlaz HookScanner-a prikazuje se u odgovoru chata i uključuje:

- Registrovane akcione hookove (`add_action` pozivi).
- Registrovane filter hookove (`add_filter` pozivi).
- Sve hookove pronađene u zavisnostima pluginova (izuzima direktorijume `vendor/` i `node_modules/`).

Ovo vam pomaže da razumijete ponašanje plugin-a prije nego što ga aktivirate.

## Bezbednosne Napomene {#security-considerations}

- Generisani pluginovi se skladište odvojeno od ručno instaliranih pluginova i nisu dostupni putem standardnog ekrana za upravljanje pluginovima WordPress-a sve dok ih eksplicitno ne instalirate na mrežu.
- Sandbox koristi validaciju putanja kako bi spriječio pretraživanje direktorijuma prilikom pisanja plugin fajlova.
- Pluginovi sa opasnim pozivima funkcija (npr. `eval`, `exec`, `system`) označavaju se tokom validacije i neće biti aktivirani.
