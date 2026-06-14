---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Një shihja e parë mbi Webhooks (v2)

_**Kujdes: Kjo veçori ose artikull është për përdorues me aftësi të avancuara.**_

Një **webhook** është një mënyrë që një aplikacion apo softuer si Ultimate Multisite mund t'i ofrojë tjera aplikacione informacion në kohë reale. Një webhook dërgon të dhëna ose payload-e te aplikacione të tjera sa ajo ndodh, që do të thotë se **mbloni të dhënat menjëherë.**

Kjo është e dobishme nëse keni nevojë t'i integroni apo t'i dërgoni të dhëna specifike nga Ultimate Multisite te një CRM ose sistem tjetër çdo herë që ndodh një ngjarje. Për shembull, ju duhet të dërgoni emrin dhe adresën e emailit të përdoruesit në një listë emailje çdo herë që krijohet një llogari i ri për përdoruesin.

## Si të krijoni një webhook

Për të krijuar një webhook, shkoni te dashboard-i juaj i administratorit të rrjetit (network admin dashboard). Klikoni te **Ultimate Multisite > Webhooks > Add New Webhook.**

![Karta e listës së Webhooks të zbehtë me butonin Shtojri Webhook](/img/admin/webhooks-list-empty.png)

Marrë më pas mund të modifikoni konfigurimin e webhook-ut:

![Forma për shtimin e një Webhook me fushat Name, Event dhe URL](/img/admin/webhook-add-modal.png)

Kur krijoni një webhook të ri, do t'ju kërkohen informacion si **Name (Emri), URL** dhe **Event (Ngjarja).** Mund të përdorni çdo emër që dëshironi për webhook-un tuaj. Fushat më të rëndësishme janë URL dhe Event.

![Interfesa e redaktimit të Webhook-ut duke shfaqur fushat URL dhe parimin (payload) paraqitjeje](/img/admin/webhook-url-field.png)

URL është **endpoint ose destinacioni** ku Ultimate Multisite do t'i dërgojë **payload-in ose të dhënave.** Kjo është aplikacioni që do të marrë të dhënat.

Zapier është zgjidhja më e zakonshme që përdorin përdoruesit për të bërë integrimin me aplikacione të pallejuara (3rd party application) më të lehtë. Pa një platformë si Zapier, do të duhet të krijoni manualisht një funksion të personalizuar që do të kapë të dhënat dhe do të i përpunojë ato. Shikoni këtë artikull se **si të përdorni webhook-un Ultimate Multisite me Zapier.**

Në këtë artikull, do të shohim konceptin bazë se si funksionon një webhook dhe ngjarjet e disponueshme në Ultimate Multisite. Do të përdorim një faqe të palëve të treta të quajtur [requestbin.com](https://requestbin.com/). Kjo faqe do të na lejojë të krijojmë një endpoint dhe të kapim payload-in pa bërë asnjë kodim. _**Kujdes: gjithçka që do të bën është të na tregojë se të dhënat janë marrë.**_ Nuk do të ketë asnjë përpunim apo ndonjë lloj veprimi ndaj payload-it._

Shkoni te [requestbin.com](https://requestbin.com/) dhe klikoni në Create Request Bin (Krijoni Webhook).

Pas klikimit në atë buton, do të ju kërkojë të hyeni në konton tuaj nëse tashmë keni një llogari ose të regjistroheni. Nëse tashmë keni një llogari, do t'ju çojë menjëherë te dashboard-i i tyre. Në dashboard-in e tyre, do të shihni menjëherë endpoint-in ose URL-in që mund ta përdorni në krijimin e webhook-ut tuaj Ultimate Multisite.

Mësoni dhe kopjoni URL-in dhe kthehu te Ultimate Multisite. Vendosni endpoint-in në fushën URL dhe zgjidhni një ngjarje nga lista me derrap (dropdown). Në këtë shembull, do të zgjedhim **Payment Received** (Pagimi i Marrë).

Kjo ngjarje ndodh çdo herë që një përdorues bën një pagesë. Të gjitha ngjarjet e disponueshme, përshkrimi dhe payload-t janë listuar në fund të faqes. Klikoni në butonin **Add New Webhook** (Shtoni Webhook) për të ruajtur webhook-un.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Tani mund të dërgojmë një ngjarje testuese te endpoint-in që ta shohim nëse webhook-u që kishim krijuar po punon. Mund ta bëjmë këtë duke klikuar në **Send Test Event** (Dërgo Ngjarje Testuese) nën webhook-un që kishim krijuar.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Kjo tregon një dritare konfirmimi duke thënë se testi ka qenë i suksesshëm.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Tani, nëse kthehemi te faqja _Requestbin_, do të shihni se ngarkesa (payload) është marrë duke përmbajtje disa të dhënash testuese.

Ky është principi bazë se si funksionojnë webhook dhe endpoint-et. Nëse dëshironi të krijoni një endpoint të personalizuar, do të duhet të krijoni një funksion të personalizuar për të përpunuar të dhënat që merrni nga Ultimate Multisite.
