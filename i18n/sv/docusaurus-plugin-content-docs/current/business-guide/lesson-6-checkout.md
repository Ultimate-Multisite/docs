---
title: 'Lektion 6: Registreringsupplevelsen'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lektion 6: Registreringsupplevelsen

Kassaproceduren är där intresset blir intäkt. En förvirrande eller generisk registreringsprocess får bort kunder. Ett flöde som är nischspecifikt, talar deras språk och känns smärtfritt konverterar dem.

## Var vi slutade

FitSite har konfigurerade mallar och planer. Nu bygger vi registrerings- och kassaproceduren som förvandlar träningsstudieägare till betalande kunder.

## Förstå registreringsflödet

Ultimate Multisites kassaformulär är helt anpassningsbara flerstegsformulär. För FitSite vill vi ha ett flöde som:

1. Känns byggt för träningsföretag
2. Samlar in endast det som behövs
3. Leder kunden till en fungerande webbplats så snabbt som möjligt

Se [The Registration Flow](/user-guide/configuration/the-registration-flow) för den fullständiga tekniska referensen.

## Designa FitSite-kassan

Navigera till **Ultimate Multisite > Checkout Forms** och skapa ett nytt formulär.

### Steg 1: Planval

Det första en träningsstudieägare ska se är planerna, presenterade i termer de förstår.

- Lägg till ett fält för **Pricing Table**
- Konfigurera det för att visa alla tre FitSite-planerna
- Planbeskrivningarna du skrev i Lektion 5 visas här – se till att de talar till träningsföretagens behov, inte tekniska funktioner

:::tip Nischspråket spelar roll
"1 GB lagring" betyder ingenting för en gymägare. "Allt du behöver för en professionell studiosida" betyder allt. Skriv produktbeskrivningar i dina kunders språk.
:::

### Steg 2: Mallval

Efter att ha valt en plan väljer kunden sin startmall.

- Lägg till ett fält för **Template Selection**
- De tillgängliga mallarna filtreras baserat på den plan de valde (konfigurerat i Lektion 5)
- Varje mall bör ha en förhandsgranskningsbild som visar en träningsspecifik design

### Steg 3: Kontoskapande

Håll detta minimalt. Samla endast in:

- E-postadress
- Lösenord
- Studio-/företagsnamn (detta blir deras sajtnamn)

Fråga inte efter information du inte behöver vid registreringen. Varje extra fält minskar konverteringarna.

### Steg 4: Webbplatsuppsättning

- **Site title**: Fyll i automatiskt från studienamnet som angavs i Steg 3
- **Site URL**: Genereras automatiskt från studienamnet (t.ex. `ironworks.fitsite.com`)

### Steg 5: Betalning

- Lägg till fältet **Payment**
- Konfigurera din betalningsgateway ([Stripe](/user-guide/payment-gateways/stripe) rekommenderas för prenumerationsfakturering)
- Om du skapade order bumps i Lektion 5, lägg till ett fält för **Order Bump** före betalningssteget

### Steg 6: Bekräftelse

- Anpassa bekräftelsemeddelandet med träningsspecifikt språk
- Exempel: "Din träningsstudie-webbplats skapas. Du kommer att omdirigeras till din nya sajt om några sekunder."

## Lägga till en periodval-toggle

Om du har ställt in prisvariationer i dina planer (månadsvis vs. årligen), lägg till ett fält för **Period Selection** på kassan så att kunderna kan växla mellan faktureringsperioder. Se [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) för instruktioner.

## Konfigurera betalning

Om du ännu inte har ställt in en betalningsgateway:

1. Navigera till **Ultimate Multisite > Settings > Payment Gateways**
2. Följ [Stripe setup guide](/user-guide/payment-gateways/stripe) eller din föredragna gateway
3. Testa ett komplett kassaprocedurflöde med en testbetalning

Se [Getting Paid](/user-guide/payment-gateways/getting-paid) för detaljer om hur betalningar når ditt konto.

## Testa flödet

Innan du går vidare, slutför en fullständig testregistrering:

1. Öppna kassan i ett inkognitoläge/privat webbläsarfönster
2. Välj en plan
3. Välj en mall
4. Skapa ett konto
5. Slutför betalningen (använd testläge)
6. Verifiera att webbplatsen skapas med rätt mall

Kontrollera att:

- [ ] Planbeskrivningarna är tydliga och nischspecifika
- [ ] Mallförhandsgranskningarna visar träningslämpliga designer
- [ ] Webbplats-URL:en genereras korrekt från studienamnet
- [ ] Betalningen går igenom framgångsrikt
- [ ] Kunden landar på en fungerande webbplats med den valda mallen
- [ ] Bekräftelsemailen använder träningsspecifikt språk

## FitSite Network hittills

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
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

## Vad vi byggde i denna lektion

- **Ett flerstegs kassaformulär** anpassat för träningsstudieägare
- **Nischspecifikt språk** genom hela registreringsflödet
- **Minimal friktion** – endast nödvändiga fält, snabb väg till en fungerande webbplats
- **Betalningsintegration** med testverifiering
- **Ett testat end-to-end flöde** från planval till fungerande webbplats

---

**Nästa:** [Lesson 7: Making It Yours](lesson-7-branding) -- vi white-labelar plattformen och etablerar FitSite som ett varumärke.
