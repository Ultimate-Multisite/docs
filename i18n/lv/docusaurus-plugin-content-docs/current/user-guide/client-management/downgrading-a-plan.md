---
title: Plāna samazināšana
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Plāna atkarīšana (v2)

_**SVITUMA ATMIŅAS: Šis raksts attiecas uz Ultimate Multisite versiju 2.x.**_

Plāna vai abonentēšanas plānu atkarīšana ir bieža darbība, ko jūsu klientiem var veikt, ja viņiem ierobežots budžets vai viņi izlūdzis, ka viņiem nav nepieciešams daudz resursu subsites vadīšanai.

## Kā atkarīt planu {#how-to-downgrade-a-plan}

Jūs varat atkarīt savu planu jebkurā laikā, logojoties uz savas subsites admin dashboard un noklikšķinot uz **Mainīt** (Change) aktais lapā.

![Klienta konta lapa ar Jūsu Uzņēmējdarbības kartiņu un Mainīt pogu](/img/account-page/membership-change-button.png)

Noklikšķinājot uz pogas **Mainīt**, lietotājs/klient tiks novirzīts uz kasina lapu, kurā viņš var izvēlēties planu, ar kuru vēlas mainīt abonentēšanu.

![Plāna atkarīšanas opcijas lapa klientam](/img/account-page/downgrade-picker.png)

Šajā piemēra mēs atkarim planu no **Premium** uz **Beidzami (Free)**.

Lai turpinātu, lietotājam pietiks noklikšķināt uz pogas **Pabeigt kasinu** (Complete Checkout). Tad viņu atrodīsies atkal konta lapā ar ziņojumu par nepiegādējošo izmaiņu abonentēšanai. Izmaiņas ietvarēs efektīvas no klienta **nākamajā fakturēšanas cikla**.

![Kontas lapa, kas redz nepiegādējošās izmaiņas banneri](/img/account-page/pending-change.png)

### Kas notiek, kad lietotājs atkar un planu? {#what-happens-when-a-user-downgrades-their-plan}

Līdzīgi ir svarīgi atzīmēt, ka plāna atkaršana neizvairina jau eksistējo konfigurāciju subsites.

Tā automātiski neizlaida vietnes šablona izmaiņas, jo vietnes šablona mainīšana pilnībā iztrinās un sāk no jauna subsaitas. Tas ir nodrošināts, lai izvairītos nepieciešamajām datu zaudējumiem. Tādēļ diskus telpa, temoi, pluginiem vēl nav izmaiņas, citādi, bet postiem var būt ietekme.

Mēs saprotam, ka jūsu galvenais jautājums ir par ierobežojumiem un kvotām, ko jūs iestatāt katrā plānā, bet mums jāņem vērā arī tas dainīto bojājumu lietotājam subsitei, ja mēs izslēdzim vai mainām kādu no tās konfigurācijām.

Lai gan posts pārsniedz plāna ierobežojumus, jums ir 3 dažādi variantas: **Saglabāt posts kā ir** *,* **Pārsūtīt posts iecienījumos (trash)** *,* vai **Pārsūtīt posts redaktēšanai (draft)** *. Šo var konfigūruēt Ultimate Multisite iestatījumos.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Kas notiek ar maksājumiem {#what-happens-to-the-payment}

Versijā 2.0 nepieciešams piešķirt pratorācijas (proration) attiecībā uz maksājumiem.

Tas ir tā, ka sistēma gaida, lai jau eksistējoša piegriešana **pabeigtu savu fakturēšanas ciklu pirms** ja jaunais plāns/piegriešana kļūs ietvarā. Jaunais maksājuma summa jauna piegriešanai automātiski tiks piemērota un būs attiecināta nākamajā fakturēšanas ciklā.
