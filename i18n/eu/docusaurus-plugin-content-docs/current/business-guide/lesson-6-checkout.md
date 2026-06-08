---
title: 'Lehena-lehenak: Deskabidearen er Bilbao'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lehen 6: Esperientziaren Registrazioa

Checkout flow-na da hori interesak merkatu gain dira. Prosesua irritatu edo generikoa izan bada, kliuntzak haserazten dira. Niche-ko garrantzi eta horiek batzuk ezagutzen dituzten erantzunak ematen flujo batek konvertizio egiten du.

## Naurri Onde Zuztuta Itzuten Dugu

FitSite-ek template eta planak konfiguratuta dira. Arriba, fitness studio nagusiak merkatuen iragailuak bilatzen diren zahliduen bizitoriak ematen registration eta checkout esperientziaren konstruzioa egin dugu.

## Registrazio Flujoaren Erraztasuna

Ultimate Multisite-n checkout formak multi-étape (nurtura) forma bat da, guztiz konfiguratzen dituz. FitSite-ko kasuan, flujo batekin irakurri dugu:

1. Fitness negozioak dira zitu bezala erdatu da.
2. Bezatzek beharrezkoa diren datuak lehenik ezberdinetan hartzen du.
3. Kliuntzak posible webgune bat jarraitzea hasten du hasten daiteena.

Erabiltzen dituz [The Registration Flow](/user-guide/configuration/the-registration-flow) edozein tekniko referentziaren beste parteak.

## FitSite Checkout Designa

**Ultimate Multisite > Checkout Forms** funtziokoan jarraitu eta formua berri bat sortu duzu.

### Irrenditua 1: Planak Alegatu

Fitness studio nagusiari lehenik ikusten beharko luke planak, horiek bere erantzunak ematen denean.

- **Pricing Table** (Prezioaren Laguntza) field bat gehitu
- Horrek FitSite-ko plan guztietan erakusteko konfiguratatu duzu
- Lehen Lesson 5-ean jakinarazituta duten plan deskribizi horretan erakusten dira -- tekniko aukerak ez, fitness negozioaren beharrak ezagutzen dituzten erantzunak ematen ditu.

:::tip Niche-ko Lengua Importantea da
"1 GB storage" (1 GB almacenazioa) gym nagusiari ez du beste garrantziaren. "Professional studio website-eko beharrezkoa diren guztia" da guztia. Plan deskribizi kliuntzakaren lenglekin jakinarazituta ematen ditu.
:::

### Irrenda 2: Selektua Moduleta (Template)

Plan bat aukeratara, erabiltzaileak moduleta (template) gertatzen dute.

- **Moduleta Irrendatzea** (Template Selection) leku bat gehitu.
- Arrako moduleta plan bat aukeratara filtratzen dira (Lehen Itzuli 5-ean konfiguratutakoa).
- Moduleta guztiek fitness-eko diseinua erakusten duen previsualizazio imagen bat hartzen duzu.

### Irrenda 3: Kontua("$Account Creation")

Hau minimala izan behar da. Hau lekuak aurkitu:

- Email adresa
- Paslora (Password)
- Studio/negrazioaren irudi (hona izango da diseinua)

Signup-era behar ez duten informazioak ez gautu. Erroren leku guztiek konversioak murriztatzen dute.

### Irrenda 4: Lehen Orokorra("$Site Setup")

- **Lehen Titulu** (Site title): Irrenda 3-an ematen studioaren irudiaren bat pre-rellatzea.
- **Lehen URL** (Site URL): Studioaren irudiari lotuta auto-generatu (adibidez, `ironworks.fitsite.com`).

### Irrenda 5: Pagamendu("$Payment")

- **Pagamendu** (Payment) leku bat gehitu.
- Pagamendu bideak konfiguratatu (subscription billing-eko irudien bitartean [Stripe](/user-guide/payment-gateways/stripe) erabiltzea ematen da).
- Irrenda 5-ean order bumpak (order bumps) sortu duzu, pagamendu lekuaren aurrera **Order Bump** leku bat gehitu.

### Irrenda 6: Bote("$Confirmation")

- Confirmazio meilearen testuaren fitness-eko hizkuntza erabiliz personalizatu.
- Adibidez: "Studio fitness-ko webstea sortzen da. Ezkerren segundea berri web lailariak aurrera irekitu dira."

## Bote Moduleta Irrendatzea (Adding a Period Selection Toggle)

Planak leen price variationak (mensual vs. anual) planetan, **Period Selection** field bat checkout forman gehitu, eta klientek iraupener periodetan ireki dezaten. Erregistroak [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) anpasatu da.

## Pagamenduak konfiguratzea

Pagamendu portal bat ez duzu:

1. **Ultimate Multisite > Settings > Payment Gateways** lueraan jarraitu
2. [Stripe setup guide](/user-guide/payment-gateways/stripe) edo irudiak garrantzitsuak duen gatewaya eratu
3. Test pagamendu bat dauden checkout flow batean eratu

Pagamenduak zure kontuan nola iristen diote zorten, [Getting Paid](/user-guide/payment-gateways/getting-paid) lueraan eratu.

## Flowaren testea

Aurrera jarraitzea baino lehen, testarekin signup batez amaitu:

1. Checkout formak incognito/private browser windowan ireki duzu
2. Plan bat iratu duzu
3. Template bat eratu duzu
4. Kontua bat jartu duzu
5. Pagamendu amaitu (test modua eratu)
6. Sitea template mailaileko bidez sortutako kontua jakinarazten

Ezkutai:

- [ ] Plan deskribioak nalamak eta pertsona-spazioan espezifikoak izan behar dira
- [ ] Template previewak fitness-ekonbo designak erakusten duzu
- [ ] Site URL-ak studioaren nabarren batetik lehen dauden
- [ ] Pagamendu prosesuak ondo amaitu ditu
- [ ] Klientela template iratu duen site batean jarraitu duzu
- [ ] Confirmazio mailak fitness-ekonbo hizkuntza erabiltzen duzu

FitSite Networka zehatuta

FitSite Network
├── WordPress Multisite (subdomain modua)
├── Ultimate Multisite (konfiguratu)
├── Hosting wildcard SSL + domain mapoaketa
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Produkzioak (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan zeintzera niche-spedifik deskribapenak
│   ├── Template zeintzera fitness previsualizazioak
│   ├── Minimal kontua dezaltzea
│   ├── Stripe bidezko mugiketa
│   └── Fitness-spedifik konfirmazioa
└── Branding-eriketa (iraki eta lehena)

## Zer egin dugu hori lehenaren

- **Checkout form bat zein-etapen** fitness studio nagusiak jasotzeko diseinatuta
- **Niche-spedifik hizkuntza** signup prozesu guztian
- **Minimal mugiketa** -- gaur egun beharrezko ezaugarriak, webgune funtzionatzen duen lehiakoa bidea
- **Stripe integrazioa** test bidezko biderbide
- **End-to-end flow bat probatuta dagoen** plan zeintzera webgune funtzionatzeko

---

**Irudi:** [Lehenaren 7. Lehenaren: Itzultzea](lesson-7-branding) -- plataforma bidezko lehiaketa eta FitSite-a brand bat gisa etablamentu dugu.
