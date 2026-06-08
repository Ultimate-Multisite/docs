---
title: 'Leksjon 6: Registreringsopplevelsen'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Leksjon 6: Opplevelsen ved registrering

Betalingsflyten er der interessen blir til inntekt. En forvirrende eller generisk registreringsprosess får kundene til å falle fra. En nisje-spesifikk flyt som snakker deres språk og føles uanstrengt, konverterer dem.

## Hvor vi slapp

FitSite har konfigurerte maler og planer. Nå bygger vi registrerings- og betalingsopplevelsen som forvandler treningsstudioeiere til betalende kunder.

## Forstå registreringsflyten

Ultimate Multisite sine kasse-skjemaer er fullt tilpassbare flertrinns-skjemaer. For FitSite ønsker vi en flyt som:

1. Føles som den er bygget for treningsvirksomheter
2. Samler inn kun det som er nødvendig
3. Får kunden til et fungerende nettsted så raskt som mulig

Se [The Registration Flow](/user-guide/configuration/the-registration-flow) for full teknisk referanse.

## Design av FitSite-kassen

Naviger til **Ultimate Multisite > Checkout Forms** og opprett et nytt skjema.

### Trinn 1: Planvalg

Det første en treningsstudioeier ser, bør være planene, presentert i termer de forstår.

- Legg til et felt for **Pricing Table**
- Konfigurer det til å vise alle tre FitSite-planene
- Planbeskrivelsene du skrev i Leksjon 5 vises her – sørg for at de appellerer til behovene til en treningsvirksomhet, ikke tekniske funksjoner

:::tip Nisjespråk betyr mye
"1 GB lagringsplass" betyr ingenting for en treningsstudioeier. "Alt du trenger for et profesjonelt studio-nettsted" betyr alt. Skriv planbeskrivelser i kundens språk.
:::

### Trinn 2: Malvalg

Etter at planen er valgt, velger kunden sin startmal.

- Legg til et felt for **Template Selection**
- De tilgjengelige malene filtreres basert på planen de har valgt (konfigurert i Leksjon 5)
- Hver mal bør ha et forhåndsvisningsbilde som viser et treningsstudio-spesifikt design

### Trinn 3: Kontoopprettelse

Hold dette minimalt. Samle kun inn:

- E-postadresse
- Passord
- Studio-/virksomhetsnavn (dette blir nettstednavnet deres)

Ikke spør om informasjon du ikke trenger ved registrering. Hvert ekstra felt reduserer konverteringen.

### Trinn 4: Nettstedoppsett

- **Site title**: Fyll inn automatisk fra studio-navnet som ble angitt i Trinn 3
- **Site URL**: Genereres automatisk fra studio-navnet (f.eks. `ironworks.fitsite.com`)

### Trinn 5: Betaling

- Legg til feltet **Payment**
- Konfigurer betalingsgatewayen din ([Stripe](/user-guide/payment-gateways/stripe) anbefales for abonnementer)
- Hvis du opprettet bestillings-tillegg i Leksjon 5, legg til et felt for **Order Bump** før betalingssteget

### Trinn 6: Bekreftelse

- Tilpass bekreftelsesmeldingen med treningsstudio-spesifikt språk
- Eksempel: "Nettstedet til treningsstudioet ditt blir opprettet. Du blir omdirigert til ditt nye nettsted om noen sekunder."

## Legge til en periodevelger (Toggle)

Hvis du har satt opp prisvariasjoner i planene dine (månedlig vs. årlig), legg til et felt for **Period Selection** i kasse-skjemaet slik at kundene kan bytte mellom betalingsperioder. Se [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) for instruksjoner.

## Konfigurere betaling

Hvis du ennå ikke har satt opp en betalingsgateway:

1. Naviger til **Ultimate Multisite > Settings > Payment Gateways**
2. Følg [Stripe setup guide](/user-guide/payment-gateways/stripe) eller din foretrukne gateway
3. Test en komplett kasseflyt med en testbetaling

Se [Getting Paid](/user-guide/payment-gateways/getting-paid) for detaljer om hvordan betalinger kommer til kontoen din.

## Testing av flyten

Før du går videre, fullfør en komplett testregistrering:

1. Åpne kasse-skjemaet i et inkognitovindu/privat nettleservindu
2. Velg en plan
3. Velg en mal
4. Opprett en konto
5. Fullfør betaling (bruk testmodus)
6. Verifiser at nettstedet er opprettet med riktig mal

Sjekk at:

- [ ] Planbeskrivelsene er klare og nisje-spesifikke
- [ ] Malforhåndsvisningene viser treningsstudio-passende design
- [ ] Nettsted-URL-en genereres korrekt fra studio-navnet
- [ ] Betalingen behandles vellykket
- [ ] Kunden lander på et fungerende nettsted med den valgte malen
- [ ] Bekreftelses-e-postene bruker treningsstudio-spesifikt språk

## FitSite Network så langt

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (konfigurert)
├── Hosting med wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## Hva vi bygde i denne leksjonen

- **Et flertrinns kasse-skjema** tilpasset treningsstudioeiere
- **Nisje-spesifikt språk** gjennom hele registreringsflyten
- **Minimal friksjon** – kun essensielle felt, rask vei til et fungerende nettsted
- **Betalingsintegrasjon** med testverifisering
- **En testet ende-til-ende flyt** fra planvalg til fungerende nettsted

---

**Neste:** [Leksjon 7: Gjør det ditt eget](lesson-7-branding) -- vi white-label plattformen og etablerer FitSite som et merkevarenavn.
