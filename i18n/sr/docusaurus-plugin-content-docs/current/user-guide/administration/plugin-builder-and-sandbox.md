---
title: Građeni plugin i sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 uvodi **Plugin Builder & Sandbox System**, koji omogućava asistentu AI da generiše, aktivira i upravlja WordPress pluginovima na vašoj mreži – sve kroz siguran, izolovani sandbox okruženje.

## Pregled {#overview}

Plugin Builder omogućava asistentu AI da piše prilagođene WordPress pluginove kao odgovor na prirodno jezik upite. Generisani pluginovi se validiraju, čuvaju i aktiviraju unutar sloja sandboksa pre nego što utiču na funkcionalnost live sajta.

Primeri upotrebe uključuju:

- Generisanje laganih korisnih pluginova bez angažovanja developera.
- Prototipiranje funkcija koje zahtevaju WordPress hookove ili prilagođene post tipove.
- Kreiranje kratkotrajnih skripti za automatizaciju za masovne operacije.

## Generisanje Plugin-a putem AI {#generating-a-plugin-via-ai}

Da biste generisali plugin, otvorite čet interfejs Gratis AI Agent i opišite šta vam je potrebno. Na primer:

> "Kreiraj plugin koji dodaje prilagoženu admin notifikaciju na dashboard."

AI će:

1. Proizvesti PHP kod plugin-a koristeći strukturiran generisanje koda.
2. Validirati izlaz na sintaksne greške i nebezpečne obrasce.
3. Sačuvati generisani plugin u sandboks skladištu (sandbox store).
4. Vratiti potvrdu sa slug-om plugin-a i dugmetom **Aktiviraj u Sandboxu** (Activate in Sandbox).

Možete dopuniti rezultat praćanjem u istoj konverzaciji pre aktiviranja.

## Aktivacija u Sandboksu {#sandbox-activation}

Aktivacija generisanog plugin-a u sandboksu je odvojena od aktivacije na live mreži. Sandboks:

- Pokreće plugin u izolovanom WordPress okruženju (wp-env).
- Hvata sve PHP greške, upozorenja ili konflikte hookova.
- Javni rezultat aktivacije vraća u čet interfejs.

Da biste aktivirali plugin u sandboksu, kliknite dugme **Aktiviraj u Sandboxu** (Activate in Sandbox) u odgovoru AI četa, ili koristite slash komandu:

/activate-plugin <plugin-slug>
```

Poruka o statusu potvrđuje da li je aktivacija uspešna ili neuspešna. U slučaju neuspeha, log grešaka se prikazuje u chat niti.

## Upravljanje generisanim pluginovima

Generisani pluginovi su navedeni u **Gratis AI Agent → Plugin Builder → Manage Plugins**. Sa ovog ekrana možete:

| Akcija | Opis |
|---|---|
| **View source** (Prikaži izvor) | Pregledati ceo PHP kod plugin-a. |
| **Re-activate in sandbox** (Ponovo aktiviraj u sandboksu) | Ponoviti proveru aktivacije u sandboksu. |
| **Install on network** (Instaliraj na mrežu) | Razmnožiti plugin na vašu aktivnu WordPress multisite (zahteva ručnu potvrdu). |
| **Update** (Ažuriraj) | Pružiti novu verziju putem AI-ja, zamenjujući postojeći kod. |
| **Delete** (Obriši) | Ukloniti plugin iz sandbok skladišta. Prvo ga deaktivira sa svih sajtova. |

:::warning
**Install on network** raznožava generisani plugin na vašu aktivnu WordPress multisite. Pregledajte kod plugin-a pre nego što nastavite. Gratis AI Agent će tražiti potvrdu pre završetka instalacije na live mreži.
:::

## Instalacija generisanog plugin-a na mrežu

Kada ste zadovoljni sandboksu pluginom, možete da ga instalirate na aktivnu mrežu:

1. Idite na **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Kliknite na **Install on Network** pored plugin-a koji želite da raznožavate.
3. Potvrdite dijalog. Plugin se instalira u `wp-content/plugins/` i aktivira se na mreži.

Alternativno, koristite slash komandu u interfejsu za chate:

```
/install-plugin <plugin-slug>
```

## Ažuriranje pluginova

Da biste ažurirali generisani plugin, opišite promenu asistentu AI-ju u novom razgovoru:

> "Ažuriraj dashboard-notice plugin tako da prikazuje samo obaveštenje za administrator."

AI generiše novu verziju koja se pojavljuje u sandboksu pored trenutne verzije. Pregledajte diff i potvrdite pre primene ažuriranja.

## Integracija HookScanner-a

Plugin Builder koristi integrisan **HookScanner** da analizira hookove i filtere koje svaki generisani plugin registruje. Rezultati HookScannera se prikazuju u odgovoru u chatu i uključuju:

- Akcijske hookove (pozivi `add_action`).
- Filter hookove (pozivi `add_filter`).
- Bilo koji hookovi pronađeni u zavisnostima pluginova (skiduje direktorijume `vendor/` i `node_modules/`).

Ovo vam pomaže da razumete ponašanje plugin-a pre nego što ga aktivirate.

## Bezbednosne napomene

- Generisani pluginovi se čuvaju odvojeno od ručno instaliranih pluginova i nisu dostupni putem standardnog ekrana upravljanja pluginovima u WordPressu dok ih eksplicitno ne instalirate na mreži.
- Sandbox koristi validaciju putanja kako bi se sprečilo prelazak kroz direktorijume (directory traversal) prilikom pisanja fajlova plugin-a.
- Pluginovi sa opasnim pozivima funkcija (npr. `eval`, `exec`, `system`) označavaju se tokom validacije i neće biti aktivirani.
