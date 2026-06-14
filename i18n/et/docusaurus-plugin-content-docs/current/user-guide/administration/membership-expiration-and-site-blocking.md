---
title: Liikmepäranduse lõppmine ja veebisaidi blokeerimine
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Liikmesriku lõppmine ja veebisaite blokeerimine

See juhend selgitab, kuidas Ultimate Multisite haldab liikmesriikude lõppmine, proovivõtud perioodide lõppmine ja veebisaite esile jäämist. See käsitleb liikmesriiku elukorra aktiivsetest lõppenudeni, sellele kontrolli oleva seadistusi ning mida kontrollida, kui veebisaid jääb pääsuraks pärast liikmesriikude lõppmine.

## Liikmesriiku staatuse elukord

Ultimate Multisite iga liikmesriikule on üks järgmised staatused:

:::note Vaba liikmesriikud on eluaegse
Vab liikmesriikud ei lõpnu automaatselt. Ultimate Multisite käsitleb neid kui eluaegset päässe, seega nad ei sisaldu lõppminekontrollides, välja arvatud kui administraator muuta nende staatust või ühest kasutajat teistele tootele liigutada.
:::

| Staatus | Tulekust |
|---|---|
| **Pending** (Ootamisel) | Ootab esimest maksut või e-posti kinnitust |
| **Trialing** (Proovivõtud) | Aktiivne proovivõtupäri, maksu ette ei võetud ole yetud |
| **Active** (Aktiivne) | Makitud ja aktiivne |
| **On Hold** (Pärinud) | Uuslikumaks maksut on ootamisel (innustuse luutumine teatud faktuuriga, maksu ootamine) |
| **Expired** (Lõppmine) | Lõppmisega lõppunud lõppmineaeg ja antud andlustuheperioodi ilma uuesti kinnitamata |
| **Cancelled** (Tühistatud) | Kasutajaks või administraatoril poolt otseselt tühistatud |

### Kuidas liikmesriikud lõppuvad?

Ultimate Multisite käib iga tund **tagasi kontrolli**, et leida liikmesriikuid, mis peaksid märkimine kui lõppenud. See kontroll kasutab [Action Scheduler](https://actionscheduler.org/) (ei otse WP-Cronit) ja käib nagu `wu_membership_check` nimetatud scheduled action.

Lõppminekontrollil on **teadlik andlustuheperiood 3 päeva** poolt. Liikmesriikut ei märkita kui `expired`, kuni 3 päeva pärast selle `date_expiration`-päeva ületamist, et maksu tegemiseks kasutajatele antakse aeg enne staatuse muutmist.

:::info
3 päeva lajuva ajakohangus on eraldatud allpool kirjeldatud Etüütik blokki lajuva ajakohanguse seadistusest. Lajuva ajakohangus kontrollib, millal **status muutub** aktiivne/pausitud olekuks lajuvaniks. Etüütik blokki lajuva ajakohangus kontrollib, millal **sait blokeeritakse**, pärast seda, kui status on juba muudunud.
:::

#### Auto-renewing vs. Non-auto-renewing jäsenlust

See eraldamine on oluline mõista lajuvaajutuse käitumist:

- **Ei auto-jäsenlusi (non-auto-renewing memberships)** (`auto_renew = false`): Tunnilinn cron töötab kogu eluaik – see luuakse uue uuenduse maksed, ületab jäsenluse paussitud olekuks ja märgib seda lõpuks lajuvaniks, kui maksu ei saada.

- **Auto-jäsenlusi (auto-renewing memberships)** (`auto_renew = true`): Croni lajuvaajutuse kontroll **niiestab neid täiesti**. Makseportaal (Stripe, PayPal jne.) on odavat teavitama Ultimate Multisite'i webhookidega, kui jäsenluse uuendamine ebaõnnestub või tühistatakse. Kui webhookit ei saada – konfiguratsiooniga valitud lõpppunktiga viga, portali ületusega või jäsenluse tühistamise süsteemi väljaspool – võib jäsenlus jätta olla `active` ajaltes igavajalikku lajuvaajutust pärast lajuvaajutuse kuupäeva üle.

### Kuidas proovikud lõenduvad

Kui proovikujäsenluse prooviaja lõpeb, teeb süsteem:

1. Uue uuenduse maksukohasti paigutatud makse
2. Jäsenluse statusi `trialing` (proovik) olekust `on-hold` (pausitud) muutmine
3. Uue uuenduse maksutise teavituse e-posti saamine kliendile

See protsess toimib sama tundlikku ajakavast kui regulaarne lajuvaajutuse kontroll, kuid **vain ei auto-jäsenlusi**. Auto-jäsenluste prooviaja üleandmisest makseportaal on vastutav.

## Etüütik pääsude blokeerimine

Oletodolla, kun jäsenyys päättyy tai siirtyy tauolle, **rajoitetaan vain wp-admin -paneeli**. Sivuston julkinen etuosa pysyy saatavilla vierailijoille. Julkisen pääsyn estämiseksi sinun on käytettävä **Block Frontend Access** -asetusta.

### Asetuksen konfigurointi

Siirry kohtaan **Ultimate Multisite > Settings > Memberships** ja aktivoi **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Tässä on koko jäsenyysasetusten näkymä:

![Membership settings full page](/img/config/settings-membership-full.png)

Kolme yhteen liittyvää asetusta hallitsee tätä käyttäytymistä:

| Asetus | Kuvaus | Oletusarvo |
|---|---|---|
| **Block Frontend Access** | Pääkytkin. Kun käytössä, estää verkko-sivustojen julkisen etuosat, kun niiden jäsenyys ei ole enää aktiivinen. | Off |
| **Frontend Block Grace Period** | Päivien määrä odotettava aika sen jälkeen, kun jäsenyys on poistettu käytöstä ennen estämistä. Aseta `0` estämään välittömästi. | 0 |
| **Frontend Block Page** | Sivu pääsivustolla, johon vierailijoita ohjataan, kun sivusto estetään. Jos sitä ei ole asetettu, vierailijat näkevät yleisen viestin "Sivua ei ole tällä hetkellä saatavilla" ja linkin sisäänkirjautumissivulle sivuston ylläpitäjän käyttöön. | None |

### Mitä vierailijat näkevät, kun sivu estetään

Kun etuosan pääsy on estetty, vierailijat saavat joko:

1. **Ohjauksen** valitsemaasi **Frontend Block Page** -sivulle (jos sitä on konfiguroitu), tai
2. **Oletusviestin**: "Tämä sivu ei ole tällä hetkellä saatavilla" ja linkki sivuston ylläpitäjän sisäänkirjautumissivulle.

Sivuston ylläpitäjät voivat silti kirjautua sisään – sisäänkirjautumissivu ei koskaan esty.

### Mitä estetään ja milloin

Estämiskäyttäytyminen riippuu jäsenyysstatusesta:

| Liikmesoleku staat | Etis blokitud? | Lõpukordik kasutatud? |
|---|---|---|
| Aktiivne | Ei | -- |
| Proovimisel | **Ei** (vaata alla oleva tähna) | -- |
| Pausitud | Aktiivseks arvatakse – ei blokitud | -- |
| Lõppunud | **Jah**, kui "Block Frontend Access" on sisse | Jah |
| Tühistatud | **Jah**, alati (ühenduse seadete huvides) | **Ei** – blokeeritakse kohe |
| Ootamisel | Ei blokitud liikmesoleku kontrolli abil | -- |

:::warning Proovimisel olev liikmesolekud ei ole blokitud
Vaikimata, et proovimisaeg on lõppenud, `trialing` staatusega liikmesolek **ei** blokeeritakse esimesena. Proovimiseks tuleb kõigepealt muutuda teise staatuseks (nt croni töö abil `on-hold`-iks, seejärel `expired`-iks, kui maksutust ei ole tehtud). Kui näete proovimisel olevat liikmesoleki, mis pole muutunud, kontrollige alla oleva probleemide lahendamise osast.
:::

:::note Tühistatud liikmesolekud ületavad lõppukordiku
Tühistatud liikmesolekud blokeeritakse alati pärast lõppuväalu üleminemist, kas "Block Frontend Access" on sisse või mitte. Etis blokitud lõppukordik ei ole tühistatud liikmesolekude jaoks.
:::

## Probleemide lahendamine: Situsid jäävad pääsaks pärast lõppuväalu

Kui situsid jäävad avalikuks kättesaadavaks pärast liikmesoleku lõppumist, käige läbi need kontrollid järgmisel järjekorras:

### 1. Kontrollige "Block Frontend Access" seaduse aktiveerimine

Minimeerige **Ultimate Multisite > Settings > Memberships** ja kinnitage, et **Block Frontend Access** lühend on sisse. See seade on **oletuks välja selle**, mida tähendab see, et ainult `wp-admin` on piiratud liikmesoleku inaktiivseks muutudes.

### 2. Kontrollige lõppukordiku blokki

Kontrollige seistustelguselele seadistuslehel **Frontend Block Grace Period** väärtust. Kui see on asetatud 7 päevale, näiteks ei peaks frontend blokeerimast enne 7 päeva pärast jälgimise perioodi lõppu – isegi kui liiklusstatus on juba `expired`.

Asetage see `0`, kui soovite kohe blokeerida pärast seda, kui liiklus muutub inaktiivseks.

### 3. Lõpetage Liiklusstatus tõesti Muutatud
Minimeerige **Ultimate Multisite > Memberships** ja kontrollige mõjatu liiklusstatus. Kui see näitab endiselt `active` kuigi lõpppäev on juba möödunud, on statusi üleliikumine mitte toimunud. Üldised põhjust:

- **Liiklus uuestiautoboomitub**: Kontrollige `auto_renew`-väljaust liiklusredakteerimise lehel. Kui auto-renew on aktiveeritud, järelevalve cron ühistab seda liiklust – see sõltub maksukeskuse raportiroimest. Kontrollige oma käsitluse dashboardi (Stripe, PayPal) kinnitamiseks, kas jälgimisstatus vastab Ultimate Multisite näitlevale.

- **Cron töö ei käinud**: Vaadake järgmist samm.

### 4. Kontrollige Action Scheduler käitumist
Ultimate Multisite kasutab croni tööde jaoks Action Schedulerit. Minimeerige **Tools > Scheduled Actions** võrku administratiivse juures ja otsige:

- **`wu_membership_check`** – See peaks ilmbumise korduvaks toiminguks, mis käib kundi iga tundi. Kui see puudub, ei ole liikluskontrolli ühistatud.
- **`wu_async_mark_membership_as_expired`** – Need on eraldi ülesanded, mis markeerivad konkreetseid liiklust `expired`-iks. Kui näete siin ebaõnnestunud toiminguid, võivad need sisaldada väärtusid, mis selgitavad, miks.

Kui näete paigutatud või ebaõnnestunud toiminguid, võib teil olla Action Scheduleri probleem. Üldised põhjust:

- **`DISABLE_WP_CRON` on** `wp-config.php` ohne system-level cron replacement
- **Niedriger Seitenverkehr** -- WP-Cron läuft nur, wenn jemand die Seite besucht

Um eine zuverlässige Cronausführung zu gewährleisten, richten Sie einen System-Cronjob ein:

```bash
# Alle 5 Minuten über wget ausführen
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Oder über WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Überprüfen Sie Gateway Webhook-Probleme (Automatische Verlängerung von Mitgliedschaften)

Wenn die Mitgliedschaft automatisch verlängert wird und das Gateway-Abonnement jedoch gekündigt wurde oder fehlgeschlagen ist, aber Ultimate Multisite es immer noch als `aktiv` anzeigt:

- **Stripe**: Gehen Sie zum Stripe Dashboard > Kunden und überprüfen Sie den Abonnementstatus. Überprüfen Sie dann unter Entwickler > Webhooks, ob der Webhook-Endpunkt aktiv ist. Der Endpunkt sollte auf Ihre Seite zeigen und erfolgreiche Lieferungen anzeigen.
- **PayPal**: Überprüfen Sie den Abonnementstatus in Ihrem PayPal Business-Konto und verifizieren Sie die IPN/Webhook-Lieferung.

Wenn das Gateway die Mitgliedschaft als gekündigt anzeigt, aber Ultimate Multisite dies nicht tut, wurde die Webhook-Benachrichtigung wahrscheinlich verloren. Sie können den Mitgliedschaftsstatus manuell in **Ultimate Multisite > Mitglieder > [Mitgliedschaft bearbeiten]** ändern.

### 6. Überprüfen Sie die Ablauf-Pufferzeit (Cron-Ebene)

Die Cronprüfung hat eine eigene Pufferzeit (Standard: 3 Tage), bevor eine Mitgliedschaft als abgelaufen markiert wird. Dies ist getrennt von der Pufferzeit für den Frontend-Block. Die Gesamtzeit, bis eine Seite gesperrt wird, beträgt:

**Ablaufpufferzeit (3 Tage)** + **Frontend-Blockpufferzeit (Ihre Einstellung)** = Gesamte Verzögerung

Näiteks olet poolt puudutatud seadistustega ja 7-päevase esilehooleperioodi, võib veebileht blokeerimiseks korduvusest `date_expiration` pärast kuni 10 päeva keda.

### 7. Liiklikuks lülitamine liiklusstatusi

Kui vajad seiti kohe blokeerida ilma cron-tsykli ootamata, saad manuaalselt muuta liiklusstatus:

1. Minenda **Ultimate Multisite > Memberships** sekkiooni.
2. Klõpsake mõjatu liiklusstatusi peale.
3. Muuda status **Expired** (Lõppunud) või **Cancelled** (Tühistatud).
4. Klõpsake **Save** (Salvesta).

Esilehooleperioodi blokeerimine hakab toimida järgmise lehtlaadimise ajal (lõppunud liiklusstatuside jaoks on esilehooleperiood, või tühistatud liiklusstatuside jaoks kohe).

## Kokkuvõte

Kogu ajakava lõppusest kuupäevast seiti blokeerimisse:

```text
date_expiration läheb üle
       |
       v
  [3-päevase cron esilehooleperiood]     <-- liiklusstatus näitab endiselt aktiivse/pausitudena
       |
       v
  Cron märgib liiklusstatusi "expired" (lõppunud)iks
       |
       v
  [Esilehooleperiood blokeerimiseks]  <-- konfiguratsioon Settings > Memberships-is
       |
       v
  Veebilehti esilehine osa on blokeeritud
```

Tühistatud liiklusstatuside puhul on teelõpp lühem:

```text
  Liiklusstatus tühistatud
       |
       v
  date_expiration läheb üle (esilehooleperioodi puudumine)
       |
       v
  Veebilehti esilehine osa on kohe blokeeritud
```

## Arengutööde viidend

Järgnev hook'id ja filterid võimaldavad teil seadistada lõppumise ja blokeerimise käitumist:

| Hook/Filter | Kirjeldus |
|---|---|
| `wu_membership_grace_period_days` | Suuregevalt filteri grace period päevade arvutamiseks enne jälgimist liiklus lõpetamise ajal (oletus: 3) |
| `wu_schedule_membership_check_interval` | Filter, mis on väli aja membership-kontrollide vahel (oletus: 1 tundi) |
| `wu_membership_renewal_days_before_expiring` | Filter, kui palju päeva enne lõpetamist uusi kasutusejuhtimise maksutuse luomiseks kasutada (oletus: 3) |
| `wu_blocked_site_reactivation_url` | Filter, mis annab oma ülikujutus URL-i, kui siit on blokeeritud |
| `wu_membership_is_active` | Filter, kas membership on aktiivne peetav |
| `wu_membership_expired_check_query_params` | Filter, mida kasutatakse lõpetatud membershipide leidmiseks kasutatavate küsimuse parametrite jaoks |
| `wu_membership_trial_check_query_params` | Filter, mida kasutatakse lõpetatud proovikogude leidmiseks kasutatavate küsimuse parametrite jaoks |
