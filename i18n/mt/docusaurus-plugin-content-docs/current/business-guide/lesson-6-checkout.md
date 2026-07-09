---
title: 'Lezzjoni 6: L-Esperjenza tar-Reġistrazzjoni'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lezzjoni 6: L-Esperjenza tar-Reġistrazzjoni {#lesson-6-the-signup-experience}

Il-fluss tal-ħlas huwa fejn l-interess isir dħul. Proċess ta' reġistrazzjoni konfuż jew ġeneriku jitlef il-klijenti. Fluss speċifiku għan-niċċa li jitkellem bil-lingwa tagħhom u jinħass bla tbatija jikkonvertihom.

## Fejn Ħallejna {#where-we-left-off}

FitSite għandu mudelli u pjanijiet ikkonfigurati. Issa nibnu l-esperjenza tar-reġistrazzjoni u tal-ħlas li ddawwar lis-sidien ta' studios tal-fitness f'klijenti li jħallsu.

## Nifhmu l-Fluss tar-Reġistrazzjoni {#understanding-the-registration-flow}

Il-formoli tal-ħlas ta' Ultimate Multisite huma formoli b'diversi passi kompletament personalizzabbli. Għal FitSite, irridu fluss li:

1. Jinħass bħallikieku nbena għan-negozji tal-fitness
2. Jiġbor biss dak li hemm bżonn
3. Iwassal lill-klijent għal sit li jaħdem malajr kemm jista' jkun

Ara [Il-Fluss tar-Reġistrazzjoni](/user-guide/configuration/the-registration-flow) għar-referenza teknika sħiħa.

## Niddisinjaw il-Ħlas ta' FitSite {#designing-the-fitsite-checkout}

Mur f'**Ultimate Multisite > Formoli tal-Ħlas** u oħloq formola ġdida.

### Pass 1: Għażla tal-Pjan {#step-1-plan-selection}

L-ewwel ħaġa li għandu jara sid ta' studio tal-fitness għandha tkun il-pjanijiet, ippreżentati b'termini li jifhmu.

- Żid qasam **Tabella tal-Prezzijiet**
- Ikkonfigurah biex juri t-tliet pjanijiet kollha ta' FitSite
- Id-deskrizzjonijiet tal-pjanijiet li ktibt fil-Lezzjoni 5 jidhru hawn -- kun żgur li jitkellmu dwar il-ħtiġijiet tan-negozji tal-fitness, mhux dwar karatteristiċi tekniċi

:::tip Il-Lingwa tan-Niċċa Tgħodd
"1 GB storage" ma tfisser xejn għal sid ta' gym. "Dak kollu li għandek bżonn għal sit web professjonali ta' studio" tfisser kollox. Ikteb id-deskrizzjonijiet tal-pjanijiet bil-lingwa tal-klijent tiegħek.
:::

### Pass 2: Għażla tal-Mudell {#step-2-template-selection}

Wara li jagħżel pjan, il-klijent jagħżel il-mudell tal-bidu tiegħu.

- Żid qasam **Għażla tal-Mudell**
- Il-mudelli disponibbli jiġu ffiltrati skont il-pjan li għażlu (ikkonfigurat fil-Lezzjoni 5)
- Kull mudell għandu jkollu immaġni ta' preview li turi disinn speċifiku għall-fitness

### Pass 3: Ħolqien tal-Account {#step-3-account-creation}

Żomm dan minimu. Iġbor biss:

- Indirizz tal-email
- Password
- Isem tal-istudio/negozju (dan isir l-isem tas-sit tagħhom)

Titlobx informazzjoni li m'għandekx bżonn waqt ir-reġistrazzjoni. Kull qasam żejjed inaqqas il-konverżjonijiet.

### Pass 4: Tħejjija tas-Sit {#step-4-site-setup}

- **Titlu tas-sit**: Imla minn qabel mill-isem tal-istudio mdaħħal fil-Pass 3
- **URL tas-sit**: Iġġenera awtomatikament mill-isem tal-istudio (eż., `ironworks.fitsite.com`)

### Pass 5: Ħlas {#step-5-payment}

- Żid il-qasam **Ħlas**
- Ikkonfigura l-gateway tal-ħlas tiegħek ([Stripe](/user-guide/payment-gateways/stripe) huwa rakkomandat għall-kontijiet ta' subscriptions)
- Jekk ħloqt żidiet mal-ordni fil-Lezzjoni 5, żid qasam **Żieda mal-Ordni** qabel il-pass tal-ħlas

### Pass 6: Konferma {#step-6-confirmation}

- Ippersonalizza l-messaġġ ta' konferma b'lingwa speċifika għall-fitness
- Eżempju: "Is-sit web tal-istudio tal-fitness tiegħek qed jinħoloq. Se tiġi ridirezzjonat lejn is-sit il-ġdid tiegħek fi ftit sekondi."

## Inżidu Swiċċ għall-Għażla tal-Perjodu {#adding-a-period-selection-toggle}

Jekk waqqaft varjazzjonijiet fil-prezzijiet fil-pjanijiet tiegħek (kull xahar vs. kull sena), żid qasam **Għażla tal-Perjodu** mal-formola tal-ħlas sabiex il-klijenti jkunu jistgħu jaqilbu bejn perjodi tal-kontijiet. Ara [Formoli tal-Ħlas](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) għall-istruzzjonijiet.

## Nikkonfiguraw il-Ħlas {#configuring-payment}

Jekk għadek ma waqqaftx gateway tal-ħlas:

1. Mur f'**Ultimate Multisite > Settings > Payment Gateways**
2. Segwi l-[gwida tat-tħejjija ta' Stripe](/user-guide/payment-gateways/stripe) jew il-gateway preferut tiegħek
3. Ittestja fluss sħiħ tal-ħlas b'ħlas tat-test

Ara [Kif Tirċievi l-Ħlas](/user-guide/payment-gateways/getting-paid) għad-dettalji dwar kif il-ħlasijiet jgħaddu għall-account tiegħek.

## Nittestjaw il-Fluss {#testing-the-flow}

Qabel tkompli, lesti reġistrazzjoni sħiħa tat-test:

1. Iftaħ il-formola tal-ħlas f'tieqa tal-browser incognito/privata
2. Agħżel pjan
3. Agħżel mudell
4. Oħloq account
5. Imla l-ħlas (uża l-mod tat-test)
6. Ivverifika li s-sit jinħoloq bil-mudell it-tajjeb

Iċċekkja li:

- [ ] Id-deskrizzjonijiet tal-pjanijiet huma ċari u speċifiċi għan-niċċa
- [ ] Il-previews tal-mudelli juru disinji xierqa għall-fitness
- [ ] Il-URL tas-sit jiġi ġġenerat b'mod korrett mill-isem tal-istudio
- [ ] Il-ħlas jiġi pproċessat b'suċċess
- [ ] Il-klijent jasal fuq sit li jaħdem bil-mudell magħżul
- [ ] L-emails ta' konferma jużaw lingwa speċifika għall-fitness

## In-Network ta' FitSite S'Issa {#the-fitsite-network-so-far}

```
Network ta' FitSite
├── WordPress Multisite (modalità ta' subdomain)
├── Ultimate Multisite (ikkonfigurat)
├── Hosting b'wildcard SSL + immappjar tad-domain
├── Mudelli tas-Sit (Studio Essential, Gym Pro, Fitness Chain)
├── Prodotti (Starter, Growth, Pro + Żidiet mal-Ordni)
├── Fluss tal-Ħlas
│   ├── Għażla tal-pjan b'deskrizzjonijiet speċifiċi għan-niċċa
│   ├── Għażla tal-mudell bi previews tal-fitness
│   ├── Ħolqien minimu ta' account
│   ├── Ħlas permezz ta' Stripe
│   └── Konferma speċifika għall-fitness
└── Lest għall-branding (il-lezzjoni li jmiss)
```

## Dak li Bnejna f'Din il-Lezzjoni {#what-we-built-this-lesson}

- **Formola tal-ħlas b'diversi passi** imfassla għas-sidien ta' studios tal-fitness
- **Lingwa speċifika għan-niċċa** tul il-fluss tar-reġistrazzjoni
- **Frizzjoni minima** -- oqsma essenzjali biss, triq rapida għal sit li jaħdem
- **Integrazzjoni tal-ħlas** b'verifika tat-test
- **Fluss ittestjat minn tarf sa tarf** mill-għażla tal-pjan sas-sit li jaħdem

---

**Li jmiss:** [Lezzjoni 7: Nagħmluh Tiegħek](lesson-7-branding) -- nagħmlu white-label tal-pjattaforma u nistabbilixxu lil FitSite bħala brand.
