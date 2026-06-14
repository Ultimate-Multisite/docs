---
title: Multisīta iestatījumu palīdzības vārti
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Iestatījumu Viedoklis

Ultimate Multisite ietver ir iebūvēts viedoklis, kas automātiski pārvērš standarta WordPress instalāciju uz WordPress Multisite tīklu. Tas atrodas nepieciešamība maniski rediģēt `wp-config.php` vai veikt databāzes komandas bez nepieciežības.

:::tip
Ja jūsu WordPress instalācija jau darbojas kā Multisite tīkls, varat šo solījumus pilnībā izkļūt. Viedoklis parādās tikai tad, kad Multisite vēl nav aktivizēts.
:::

## Kad Parādās Viedoklis?

Kad jūs aktivizējat Ultimate Multisite standarta (ne-Multisite) WordPress instalācijā, plāgiņš pamanās, ka Multisite nav aktivizēts, un automātiski novirzīja jūs uz Multisite Iestatījumu Viedokli instead of parastiem iestatījumu viedoklu.

Tā var arī piekļūt tieši caur **WP Admin > Ultimate Multisite > Multisite Setup**.

## Priekšnoteikumi

Pirms, kad runāt viedokli, pārliecinieties, ka:

- Jums ir **administratoriskais pieejamība** jūsu WordPress instalācijai
- Jūsu servera `wp-config.php` fail ir **rakstams** vebserveriem
- Jums ir **laicīgs kopējais rezerves kopi** jūsu failu un databāzes

:::warning
Viedoklis modifisē jūsu `wp-config.php` failu un izveido jaunas databāzes tabulas. Vienmēr veiciet kopēju rezerves kopi, pirms turpināt.
:::

## 1. Sveicieni

Pirmais ekrāns iepina, kas ir WordPress Multisite un ko viedoklis darīs:

- Activēt Multisite funkciju jūsu WordPress konfigurācijai
- Izveidot nepieciešamās tīkla databāzes tabulas
- Pievienot nepieciešamos multisite konstantes `wp-config.php` failā
- Aktivizēt Ultimate Multisite tīklā

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Noklikšķiniet uz **Turpināt** lai turpinātu.

## 2. Tīkla Konfigurācija

Šajā solūjumā jums ir jākonfiguro tīkla iestatījumi.

### Vietas Struktūra

Izvēlieties, kā organizēt savus tīmekļa vietnes:

- **Subdomēni** (Ieteikts) — Vietnēm tiek izveidots savs subdomēns, piemēram `site1.yourdomain.com`
- **Subdirektori** — Vietnes tiek izveidotas kā ceļi, piemēram `yourdomain.com/site1`

:::note
Ja izvēlaties subdomēnus, jums būs jākonfigūrē **wildcard DNS** un **wildcard SSL sertifikāts** savam domēniem. Lielākā daļa administrētu WordPress hostu to automātiski pārvaldī. Skarieties [Ultimate Multisite 101](./ultimate-multisite-101) detalizētākai salīdzinājumam.
:::

### Tīkla nosaukums (Network Title)

Ievadieties nosaukumu savai tīklam. Šis pēc defaulta ir jūsu pašreizējā vietnes nosaukums ar pievienotu vārdu "Network". To varat mainīt vēlāk no tīkla iestatījumiem.

### Tīkļa administratori e-pasta (Network Admin Email)

E-pasta adrese, kas tiek izmantota tīkla administrācijas paziņojumiem. Šis pēc defaulta ir pašreizējā lietotāja e-pasta adrese.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Pēc laiku, kad ievadījis laukus, klikšķiniet uz **Continue** (Turpināt), lai turpinātu.

## 3. Iestatījumi (Installation)

Klikšķiniet uz pogas **Install** (Iestatīt), lai sāktu. Wizard veic piecas automātiskās darbības sekvencē, katras parādīto savu progresu reālla laikā:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Krok | Apraksts |
|------|-------------|
| **Iespējot multisite** | Pievienojiet konstantu `WP_ALLOW_MULTISITE` failam `wp-config.php` |
| **Izveidot tīklu** | Izveido multisite datu tabulas (`wp_site`, `wp_sitemeta`, `wp_blogs` un tās atjaunojiet ar savu tīkla konfigurāciju) |
| **Atjaunināt konfigurāciju** | Pievienojiet galvenās multisite konstantas failam `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` un tās atjaucināt) |
| **Noregulēt sīkdatnes** | Nodrošiniet, ka vietnes adrese ir pareiza tīkla metadatus, lai novērstu autentifikācijas problēmas pēc aktivizēšanas |
| **Aktivizēt tīkla pluginu** | Aktivizējiet Ultimate Multisite tīklā, lai tas strādā visā tīklā |

Katrs kroks parāda vienu no šiem statuss:

- **Pending** — Gaidīts apstrāde
- **Installing...** — Aktuāli veicams
- **Success!** — veiksmīgi pabeigts
- **Kļūdas ziņojums** — Notikusi kļūda (ziņojums aprakstīs problēmu)

Kad visi kroki veiksmīgi pabeidz, jūs redziet zaļo "Success!" statusu katram elementam:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Pēc tam vizitgoste automātiski pārsniegs uz pabeigšanas ekrānu.

## 4. Pabeigt

Kad instalācija beidzties, jūs redziet veiksmīgu ziņojumu, kas apstiprina, ka WordPress Multisite ir ieslēgts.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Tagad varat turpināt Ultimate Multisite vizitgostes konfigurēšanu, lai iestatītu savu WaaS platformu (uzņēmuma detaļas, defaultais saturs, maksājumu portali un tās atjaucināšanas, etc.).

:::note
Pēc tam, ja multisite instalācija beidzoties, jūsu pārlūkprogramma novirzīsies cauri jaunajiem aktivizēti tīkla administratori. Vist vai jums var būt jālogējas vēlreiz, jo autentifikācijas sīkdatnes tiek atjauninātas multisite vidi.
:::

## Manas instrukcijas alternatīva (Fallback)

Ja konfidenciālais palīdzības programmators (wizard) nevar rakstīt savā `wp-config.php` failā (dvišķu iestatas vai servera ierobežojumu dēļ), tas parādīs tieši kodu, ko jums ir jāpievieno manas rokas:

1. **wp-config.php konstanți**, kas jāpievieno pirms līniju `/* Tas ir viss, stundu rediģēt! */`
2. **.htaccess atjauninājumu noteikumi** (rewrite rules), kas piemēroti jūsu izvēlētajai vietnes struktūrai (subdomēns vai subdirektori)

Pēc manas manuālās izmaiņu veidošanas atsaucies un palīdzības programmators pamanīs, ka multisite tagad ir aktīva.

## Kļūdu likums (Troubleshooting)

### Palīdzības programmators saka, ka wp-config.php nav rakstams

Jums vajadzīgs raksts atļaupa `wp-config.php` failam. Jūs varat:

- Atkarīgi pārmaiņot faila atļaupas uz `644` vai `666`
- Izmantot manas instrukcijas alternatīvas (fallback), kas sniegta palīdzības programmators
- Lūdzu, jautāt savam hostings pakalpojumu nodrošinājumu par palīdzību

### Vietnes nav pieejamas pēc instalācijas (subdomēni)

Ja jūs izvēlējāt subdomēnu struktūru, jums ir jākonfiguriē **wildcard DNS** jūsu domāina. Pievienojiet DNS ierakstu:

```
Type: A (vai CNAME)
Host: *
Value: [jūsu servera IP adrese]
```

Pārbaudiet ar savu hostings pakalpojumu, ja neesat droši, kā konfigūriēt to.

### Autentifikācijas problēmas pēc instalācijas

Ja jūs esat atslēgts vai redziet sīkdatņu kļūdas pēc multisite instalācijas:

1. Tīriet pārlūkprogrammas sīkdatnes šai vietnei
2. Logējas vēlreiz uz `yourdomain.com/wp-login.php`
3. Ja problēma tur paliek, pārbaudiet, vai jūsu `wp-config.php` nav noteikts `COOKIE_DOMAIN` vērtība `false` — tas ir zināms problēma subdomēnu multisite instalācijās

### Instalācijas laikā vienas darbības neizpildīšanās

Ja ja, ja, ja! Ja vienkārši, ja jums palīdzēšu ar šiem situācijām:

Ja kāds instalācijas soļos parādās kļūda:

1. Pievienojiet redzamo kļūdas ziņojumu.
2. Atgriezieties konfigurācijas soļam un mēģiniet vēlreiz.
3. Ja kļūda tur ir, pārbaudiet servera PHP kļūdu logu (PHP error log), lai saņemtu vairāk detaļu.
4. Soļi, kas jau ir pabeigti, neбуdzēsiet atkārtotās izpildījumos (instalētājs ir idemponts).
