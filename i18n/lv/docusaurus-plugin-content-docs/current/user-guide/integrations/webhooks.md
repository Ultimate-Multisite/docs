---
title: Webhooki
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Uzraksts par Webhookiem (v2)

_**PIEŠANJAS: Atzīmē, ka šī funkcija vai raksts ir paredzēts ieviešniekiem lietotājiem.**_

**Webhook** ir veids, kā aplikācija vai programmatūra, piemēram Ultimate Multisite, nodrošina citām aplikācijām reāllaiku informāciju. Webhook nosūtī data vai datumu (payload) citām aplikācijām tieši tā, kad tas notiek, kas nozīmē, ka **jūs saņemiet datus neatkarīgi no laika.**

Tas ir noderīgs, ja jums ir nepieciešams integrēt vai pārsūtīt noteiktus datus no Ultimate Multisite citai CRM vai sistēmā katru reizi, kad notiek kāds notikums. Piemēram, jums ir jānosūtīs lietotāja vārds un e-pasta adrese sarakstam, katru reizi, kad tiek izveidots jauns lietotāja konts.

## Kā izveidot webhooku {#how-to-create-a-webhook}

Lai izveidotu webhooku, pārvietojies uz savas tīkla administrācijas dashboardu. Nospressiet **Ultimate Multisite > Webhooks > Pievienot jaunu webhooku.**

![Nav ir vārdzīga Webhooka saraksta lapa ar pogu "Pievienot jaunu webhooku"](/img/admin/webhooks-list-empty.png)

Tad jūs varat rediģēt webhooka konfigurāciju:

![Jaunas webhooka pievienošanas forma ar laukiem Nosaukums, Notikums un URL](/img/admin/webhook-add-modal.png)

Izveidojot jaunu webhooku jums tiks jautāti informācijām kā **Nosaukums, URL** un **Notikums**. Jūs varat izmantot jebkuru nosaukumu savam webhookam. Visbiežāk svarīgi ir URL un Notikums lauki.

![Webhooka rediģēšanas interfeisa, kas parāda URL lauku un datumu previews](/img/admin/webhook-url-field.png)

URL ir **punkts vai galamērķis**, kur uz kuru Ultimate Multisite nosūtīs **datu vai payload**. Tas ir aplikācija, kas saņems datus.

Zapier ir visbiežākais risinājums, ko lietotāji izmanto, lai vieglāk veikt integrāciju ar tretiem pusēm (3rd party application). Bez platformas kā Zapier jums būs nepieciešams manuāli izveidot custom funkciju, kas saņems datus un apstrādās tos. Skarojiet šo rakstu par **kā izmantot Ultimate Multisite webhooku ar Zapier.**

Šajā rakstā apskatīsim webhooka pamatu koncepciju un lietojumus, kas ir pieejami Ultimate Multisite. Mēs izmantosim tretspēju vietni [requestbin.com](https://requestbin.com/). Šajā vietnē mēs varēsiet izveidot endpointu un saņemt datumu (payload) bez kodēšanas. _**Atteiktjum: tas tikai parādīs, ka dati ir saņemti.**_ Uz to nepieciešams nekāds apstrāde vai jebkāda veida darbība datam._

Naviğini [requestbin.com](https://requestbin.com/) un nospressiet "Create Request Bin".

Pēc tam, kad spressat šo pogu, jums būs jāiekļauj (login) vai jāreģistrējas, ja jums jau ir konts. Ja jums jau ir konts, tas visbiežāk ļaus jums tieši uz savu dashboardu. Savā dashboardā jūs nekavējoties redzēs endpointu vai URL, ko varat izmantot veidot savam Ultimate Multisite webhook.

Noklikšķiniet uz URL-a un atgriezties Ultimate Multisite. Ievadiet endpointu URL laukā un izvēlieties notikumu no dropdowna. Šajā piemēra mēs izvēlamies **Payment Received** (Platība saņemta).

Šis notikums tiek izraisīts, kad lietotājs veic maksājumu. Visas pieejamas notikumi, to apraksti un datu saraksti ir redzami lapas galvā. Nospressiet pogu **Add New Webhook**, lai saglabātu webhooka.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Tagad mēs varam nosūtīt tests notikumu uz endpointu, lai redzētu, vai tas veiksmīgi darbojas, kas mums izveidots webhook. Mēs to varam darīt nospressot **Send Test Event** (Nosūtīt tests notikumu) zem tajā webhooka, ko izveidojām.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Tas parāda konfirmatīvo logu, kas pateic, ka tests veiksmīgi veicās.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Vēlre, ja atgriešos uz _Requestbin_ vietni, pēriņojums satura sūtīto informāciju, kas ir testdata.

Šis ir pamats, kā webhooki un endpoints darbojas. Ja vēlaties izveidot savu viedprioritālu endpointu (custom endpoint), jums būs jāizveido savas funkcijas, lai apstrādātu datus, ko jūs saņem no Ultimate Multisite.
