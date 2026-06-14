---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# A Prime Vista fu Webhooks (v2)

_**ATTENZIONE: Nota li li sta questa funzione o l-artikolu għall-utenti ewliem.*_

Il-**webhook** huwa mod biex app jew software kif Ultimate Multisite jgħaddi informazzjoni reġa'a l-applikazzjonijiet oħra. Il-webhook jiffri data jew payload għall-applikazzjonijiet oħra meta tkun qed tipprovdi, li significa li **tġib data immediatament.**

Dan huwa benefattxu biex għandek bżonn integrà o tgħallis dati speċifi min Ultimate Multisite għal CRM jew sistema oħra ma' ogni avveniment jipprovdi. Biex t-tħejjja, għall-um huma tfarri l-istmewla u l-indirizz email għall-lista ta mailing kbira ma' ogni creatur tal-kont njan.

## Come tgħmli webhook

Biex tgħmli webhook, tqgli għad dashboard tal-network admin tiegħek. Ikli fuq **Ultimate Multisite > Webhooks > Add New Webhook.**

![Empty Webhooks list page with Add New Webhook button](/img/admin/webhooks-list-empty.png)

Imkien qed tista' tgħmli l-webhook configuration:

![Add New Webhook form with Name, Event, and URL fields](/img/admin/webhook-add-modal.png)

Meta qed tgħmli webhook جديد, seġġu biex tiġi tqiegħda informazzjonijiet bħal **Name (Isem), URL,** u **Event (Avveniment).** Tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista

F'questa artikoli, nnaħna nqaslu il konsepti biex tfittex kif jopera un webhook u l-eventi li huma disponibili fil-Ultimate Multisite. Nista użaw sit tal-terzji jitlob [requestbin.com](https://requestbin.com/). Dan sit hu jilabbna nistawli endpoint u nqass il payload b'modi li ma nistawlu koding. _**Disclaimer: kull ħaġa li għandna nistawli hu li nistawli li d-data hija ricevuta.**_ Ma jkollnax xogħol jew aksjoni fattaqaw fuq il payload.

Irrid għal [requestbin.com](https://requestbin.com/) u għall click 'Create Request Bin'.

Wara li tikkli aktar, hu jistaqso biex ti loggi in se għandek account jew ti ssegwi. Jekk għandek account, hu jorrik dirett għad dashboard tiegħhom. Fil-dashboard tagħhom, tmur is-endpoint jew l-URL li tista' tista' użaw fil-kunsill tal-Ultimate Multisite webhook tiegħek.

Irrid u kopja l-URL u irritji lura għall-Ultimate Multisite. Ipplaċa l-endpoint fl-field URL u selezjoni event mill-dropdown. F'dan l-eżempju, nista' nselezzjoni **Payment Received**.

Dan l-event jitqagħd ogni mrid user jagħmel pagament. Kull l-eventi li huma disponibili, il-descrizzjoni tagħhom u l-payloads huma msemmijn f'il-posta taħt tal-pagina. Tikkli fuq il bott **Add New Webhook** biex tistawli l-webhook.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Nista' niffaċċju test event għall-endpoint biex nistawlu jifhidu se l-webhook li ħalna għandu jservi. Nista' naġġu dan biex tikkli fuq **Send Test Event** taħt il-webhook li ħalna ħalna għandu jservi.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Dan juri finestra konfirmazzjoni li tista' test kien mafiħqu.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Mentre nirtribru l-site _Requestbin_, li nnaqrabnu li l-payload jrecet, jkun huwa msemmi test data.

Dan huwa il-prinċip biex tiffaħqu kif idiraw webhook u endpoints. Jekk tixtiepx tagħmel endpoint kustom, għandek biex tgħmli funqjoni kustoma biex tiġib x-xef din iddata li tirċievi min Ultimate Multisite.
