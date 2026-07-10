---
title: Građeni alat i sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0 uvodi **Plugin Builder & Sandbox System**, koji omogućuje asistentu umjetne inteligencije da generira, aktivira i upravlja WordPress pluginovima na vašoj mreži — sve to putem sigurnog, izoliranog okruženja sandboxa.

## Pregled {#overview}

Plugin Builder omogućuje asistentu AI da piše prilagođene WordPress pluginove kao odgovor na prirodno jezik upite. Generirani pluginovi se validiraju, spremaju i aktiviraju unutar sloja sandboxa prije nego što utječe na funkcionalnost živog sajta.

Primjeri upotrebe su:

- Generiranje laganih korisničkih pluginova bez angažmana programera.
- Prototipiranje značajki koje zahtijevaju WordPress hookove ili prilagođene tipove postova (custom post types).
- Kreiranje kratkotrajnih skripti za automatizaciju za masovne operacije.

## Generiranje Pluginova putem AI {#generating-a-plugin-via-ai}

Da biste generirali plugin, otvorite chat sučelje Gratis AI Agent i opišite što vam je potrebno. Na primjer:

> "Kreiraj plugin koji dodaje prilagođenu admin obavijest na dashboard."

AI će:

1. Proizvoditi PHP kod pluginova koristeći strukturirano generiranje koda.
2. Validirati rezultat na sintaksne greške i nesigurne obrasce.
3. Spremiti generirani plugin u sandbox skladište (sandbox store).
4. Vratiti potvrdu s slugom pluginova i gumbom **Aktiviraj u Sandboxu** (Activate in Sandbox).

Možete poboljšati rezultat nastavkom razgovora u istoj niti prije aktiviranja.

## Aktivacija u Sandboxu {#sandbox-activation}

Aktiviranje generiranog pluginova u sandbox okruženju je odvojeno od aktiviranja na živom sajtu. Sandbox:

- Pokreće plugin u izoliranom WordPress okruženju (wp-env).
- Captura sve PHP greške, upozorenja ili konflikte hookova.
- Izvještava rezultat aktivacije natrag u chat sučelje.

Da biste aktivirali plugin u sandboxu, kliknite na gumb **Aktiviraj u Sandboxu** (Activate in Sandbox) u odgovoru AI chata, ili koristite slajd komandu:

```
/activate-plugin <plugin-slug>
```

Poruka o statusu potvrđuje da je aktivacija uspješna ili neuspješna. U slučaju neuspjeha, log grešaka se prikazuje u chat niti.

## Upravljanje generiranim pluginovima {#managing-generated-plugins}

Generirani pluginovi su navedeni u **Gratis AI Agent → Plugin Builder → Manage Plugins**. S ove stranice možete:

| Akcija | Opis |
|---|---|
| **View source** (Prikaži izvor) | Pregledati cijeli PHP kod plugin-a. |
| **Re-activate in sandbox** (Ponovno aktiviraj u sandboku) | Ponovo pokrenuti provjeru aktivacije u sandboku. |
| **Install on network** (Instaliraj na mrežu) | Razmnožiti plugin na vašu živu mrežu (zahtijeva ručnu potvrdu). |
| **Update** (Ažuriraj) | Dostaviti novu verziju putem AI-ja, zamjenjujući postojeći kod. |
| **Delete** (Obriši) | Ukloniti plugin iz sandbok skladišta. Prvo ga deaktivira na svim stranicama. |

:::warning
**Install on network** razmnožava generirani plugin na vašu živu WordPress multisite. Pregledajte kod plugin-a prije nastavka. Gratis AI Agent će tražiti potvrdu prije dovršetka instalacije na uživo.
:::

## Instalacija generiranog plugin-a na mrežu {#installing-a-generated-plugin-on-the-network}

Kada ste zadovoljni sandbokom plugin-a, možete instalirati ga na živu mrežu:

1. Idite na **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Kliknite na **Install on Network** (Instaliraj na mrežu) pored plugin-a koji želite razmnožiti.
3. Potvrdite dijalog. Plugin se instalira u `wp-content/plugins/` i aktivira se na mreži.

Alternativno, koristite slash komandu u chat interfejsu:

```
/install-plugin <plugin-slug>
```

## Ažuriranje pluginova {#plugin-updates}

Da biste ažurirali generirani plugin, opišite promjenu asistentu AI-ju u novoj razgovoru:

> "Ažuriraj dashboard-notice plugin tako da prikazuje samo obavijest za administratora."

AI generira novu verziju koja se pojavljuje u sandboku pored trenutne verzije. Pregledate diff i potvrđujete prije primjene ažuriranja.

## Integracija HookScanner-a {#hookscanner-integration}

Plugin Builder koristi integrirani **HookScanner** za analizu hookova i filtera koje svaki generirani plugin registrirao. Rezultati HookScannera se prikazuju u chat odgovoru i uključuju:

- Akcijske hookove (pozivi `add_action`).
- Filter hookove (pozivi `add_filter`).
- Svaki hook pronađen u zavisnostima pluginova (skidira direktorije `vendor/` i `node_modules/`).

Ovo vam pomaže da razumijete ponašanje plugin-a prije aktiviranja.

## Razmatranja o sigurnosti {#security-considerations}

- Generirani pluginovi se čuvaju odvojeno od ručno instaliranih pluginova i nisu dostupni putem standardnog ekrana upravljanja pluginovima WordPress-a dok ih eksplicitno ne instalirate na mreži.
- Sandbox koristi validaciju putanja kako bi spriječio prolazak kroz direktorije (directory traversal) prilikom pisanja datoteka pluginova.
- Pluginovi s opasnim pozivima funkcija (npr. `eval`, `exec`, `system`) označavaju se tijekom validacije i neće biti aktivirani.
