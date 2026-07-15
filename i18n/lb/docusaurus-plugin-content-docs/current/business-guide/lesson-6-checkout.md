---
title: 'Lektioun 6: D''Umeldungserfarung'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lektioun 6: D'Umeldungserfarung

De Checkout-Ablaf ass do, wou Interessi zu Recetten gëtt. En duercherneen oder genereschen Umeldungsprozess verléiert Clienten. En nischespezifeschen Ablaf, deen hir Sprooch schwätzt a sech ustrengungslos ufillt, konvertéiert se.

## Wou Mir Opgehalen Hunn {#where-we-left-off}

FitSite huet Schablounen a Pläng konfiguréiert. Elo baue mir d'Registréierungs- a Checkout-Erfarung, déi Fitnessstudio-Besëtzer zu bezuelende Clienten mécht.

## De Registréierungsablaf Verstoen {#understanding-the-registration-flow}

Ultimate Multisite seng Checkout-Formulairë si voll personaliséierbar Multi-Step-Formulairen. Fir FitSite wëlle mir en Ablaf, deen:

1. sech ufillt, wéi wann e fir Fitnessbetriber gebaut gouf
2. nëmmen dat sammelt, wat gebraucht gëtt
3. de Client esou séier wéi méiglech op eng funktionéierend Websäit bréngt

Kuckt [De Registréierungsablaf](/user-guide/configuration/the-registration-flow) fir déi komplett technesch Referenz.

## De FitSite Checkout Entwerfen {#designing-the-fitsite-checkout}

Navigéiert op **Ultimate Multisite > Checkout Forms** a erstellt en neie Formulaire.

### Schrëtt 1: Plangauswiel {#step-1-plan-selection}

Dat éischt, wat e Fitnessstudio-Besëtzer gesi soll, solle d'Pläng sinn, presentéiert a Begrëffer, déi hie versteet.

- Füügt e **Präistabell**-Feld dobäi
- Konfiguréiert et esou, datt all dräi FitSite-Pläng gewise ginn
- D'Plangbeschreiwungen, déi Dir an der Lektioun 5 geschriwwen hutt, erschéngen hei -- gitt sécher, datt se Fitnessbetribsbedierfnesser uschwätzen, net technesch Funktiounen

:::tip Nischesprooch Ass Wichteg
"1 GB Späicher" bedeit engem Fitnessstudio-Besëtzer näischt. "Alles, wat Dir fir eng professionell Studio-Websäit braucht" bedeit alles. Schreift Plangbeschreiwungen an der Sprooch vun Ärem Client.
:::

### Schrëtt 2: Schablounenauswiel {#step-2-template-selection}

Nodeems de Client e Plang gewielt huet, wielt hien seng Startschabloun.

- Füügt e **Schablounenauswiel**-Feld dobäi
- Déi verfügbar Schabloune ginn nom Plang gefiltert, deen hien ausgewielt huet (an der Lektioun 5 konfiguréiert)
- All Schabloun soll e Virschau-Bild hunn, dat en fitnessspezifeschen Design weist

### Schrëtt 3: Account-Erstellung {#step-3-account-creation}

Halt dëst minimal. Sammelt nëmmen:

- E-Mail-Adress
- Passwuert
- Studio-/Betribsnumm (dëst gëtt hire Websäitnumm)

Frot bei der Umeldung net no Informatiounen, déi Dir net braucht. All zousätzlecht Feld reduzéiert Konversiounen.

### Schrëtt 4: Websäit-Ariichtung {#step-4-site-setup}

- **Websäittitel**: Viraus ausfëllen mam Studionumm, deen am Schrëtt 3 aginn gouf
- **Websäit-URL**: Automatesch aus dem Studionumm generéieren (z. B. `ironworks.fitsite.com`)

### Schrëtt 5: Bezuelung {#step-5-payment}

- Füügt d'**Bezuelung**-Feld dobäi
- Konfiguréiert Äre Bezuelungsgateway ([Stripe](/user-guide/payment-gateways/stripe) gëtt fir Abonnement-Ofrechnung recommandéiert)
- Wann Dir an der Lektioun 5 Order Bumps erstallt hutt, füügt en **Order Bump**-Feld virum Bezuelungsschrëtt dobäi

### Schrëtt 6: Confirmatioun {#step-6-confirmation}

- Personaliséiert d'Confirmatiounsmeldung mat fitnessspezifescher Sprooch
- Beispill: "Är Fitnessstudio-Websäit gëtt erstallt. Dir gitt an e puer Sekonnen op Är nei Websäit weidergeleet."

## Eng Periodenauswiel-Ëmschaltung Dobäisetzen {#adding-a-period-selection-toggle}

Wann Dir Präisvariatiounen an Äre Pläng ageriicht hutt (méintlech vs. jäerlech), füügt e **Period Selection**-Feld an de Checkout-Formulaire dobäi, sou datt Clienten tëscht Ofrechnungsperioden ëmstelle kënnen. Kuckt [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) fir Instruktiounen.

## Bezuelung Konfiguréieren {#configuring-payment}

Wann Dir nach kee Bezuelungsgateway ageriicht hutt:

1. Navigéiert op **Ultimate Multisite > Settings > Payment Gateways**
2. Follegt dem [Stripe-Ariichtungsleedfuedem](/user-guide/payment-gateways/stripe) oder Ärem bevorzugte Gateway
3. Test e komplette Checkout-Ablaf mat enger Testbezuelung

Kuckt [Bezuelt Ginn](/user-guide/payment-gateways/getting-paid) fir Detailer doriwwer, wéi Bezuelungen op Ären Account fléissen.

## Den Ablaf Testen {#testing-the-flow}

Ier Dir weidermaacht, maacht eng voll Testumeldung:

1. Maacht de Checkout-Formulaire an enger Inkognito-/privater Browser-Fënster op
2. Wielt e Plang
3. Wielt eng Schabloun
4. Erstellt en Account
5. Schléisst d'Bezuelung of (benotzt den Testmodus)
6. Iwwerpréift, datt d'Websäit mat der richteger Schabloun erstallt gëtt

Kontrolléiert, datt:

- [ ] Plangbeschreiwunge kloer an nischespezifesch sinn
- [ ] Schablounevirschauen fitnesspassend Designen weisen
- [ ] D'Websäit-URL korrekt aus dem Studionumm generéiert gëtt
- [ ] Bezuelung erfollegräich veraarbecht gëtt
- [ ] De Client op enger funktionéierender Websäit mat der ausgewielter Schabloun ukënnt
- [ ] Confirmatiouns-E-Maile fitnessspezifesch Sprooch benotzen

## De FitSite Network Bis Elo {#the-fitsite-network-so-far}

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

## Wat Mir An Dëser Lektioun Gebaut Hunn {#what-we-built-this-lesson}

- **E Multi-Step-Checkout-Formulaire** ugepasst op Fitnessstudio-Besëtzer
- **Nischespezifesch Sprooch** duerch de ganzen Umeldungsablaf
- **Minimal Reiwung** -- nëmmen essentiell Felder, séiere Wee op eng funktionéierend Websäit
- **Bezuelungsintegratioun** mat Testverifizéierung
- **En getestenen End-to-End-Ablaf** vun der Plangauswiel bis zur funktionéierender Websäit

---

**Nächst:** [Lektioun 7: Maacht Et Zu Ärem](lesson-7-branding) -- mir white-labelen d'Plattform an etabléieren FitSite als Mark.
