---
title: An t-saoghaladh a tha a' chluainteach
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# An tòr fhaisg an t-registeradh (v2)

_**NOTE CRUCIAL: Tha an tòr seo a' tuairt do chuid Ultimate Multisite version 2.x.**_

Caithedh na h-uilean faic a registeradh anns a gcnàidhean as fhaic. Gall sinn aigse a' sgairidh an t-fòram registeradh agad no liath a tha a' sharadh airson plan a tha a' tòiseachadh air. Tha sinn ag tòiseachadh gu sàmhach a tha a' tuairt do chuid a registeradh anns a gcnàidhean a ghabhair, agus gu sàmhach a tha a' tòiseachadh an uilean agad air a registeradh.

## A' sgairidh an fòram registeradh:

Tha seo an t-uisge registeradh a tha a' tòiseachadh. Tha thu a' sgairidh pàipear registeradh le **checkout form** agus tha seo an t-àite sin a ghaidheann a chuid a registeradh anns a gcnàidhean agad agus a' sgairidh plan. Gallach thu de dhèanamh mòr fhaisg pàipear registeradh, a chlàraich air a chùrsain registeradh foirfe a tha a' tòiseachadh air.

Tha an pàipear a' tòiseachadh airson registeradh a tha a' tòiseachadh gu **yourdomain.com/register**, ach leabhair thu an sin a' mìneachadh air **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

An uileach, nuair a thig an uilean air a pàipear registeradh (a tha a' tòiseachadh gu dìreach air 'Sign in' no 'Buy now'), salmhainn thu a fhaisg pàipear registeradh.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Seo e an eisimpleir de checkout form mar tha e a' tòiseachadh air an frontend:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Tha sin a' sgairidh a tha a' tòiseachadh gu mòr – a' chlàraich a gach fhaisg a tha a' tòiseachadh - email, username, password, agus eile... - agus a' sgairidh plan no a' chlàradh an t-email air thu mar a tha e ag registeradh airson plan fada air a bharrachd a tha sealladh fhaisg.

Air 'Thank you' page, salmhainn sinn a' chluas a tha a' tuairt do iad gu sàmhach a tha a' tòiseachadh an t-email a chlàradh air no gu sàmhach a tha an uilean agad a' tòiseachadh agus is e cheann a thig a' sgairidh.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Tha thaithichean air a' chuidh a' sgaidh, tha thuir iad go thaobh a' chluich air an e-mail a' fhaighinn agus a' chluich air an lìn a' faighinn. Bid a bheil an sinne a' chluich a' fhaighinn, bid a thar a' chluich a' sgaidh an sinne a' chluich. Bid a bheil an e-mail a' chluich a' fhaighinn, bid a thar a' chluich a' sgaidh an sinne a' chluich.

Tha iad a stad an sinne a' chluich gu am faighinn an plan a' chluich air an t-sgaidh agus tha an chluich a' fhaighinn ann an sinne a' chluich. Bid a bheil iad a' stad an sinne a' chluich, bid a thar a' chluich a' sgaidh an sinne a' chluich air an dashboard a' faighinn.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## A' chluich a' sgaidh le lìn a' sharailte:

Tha an t-sgaidh a' chluich a' sgaidh a' chluich gu am faighinn an fòram a' chluich, tha an t-sgaidh a' chluich air a' chluich, tha an t-sgaidh a' chluich le lìn a' sharailte, tha thuir iad a bhith ag obair deàrchaid (product) no template a' chluich air an fòram a' chluich (teicireachd air theamaichean agus templates a' chluich - seabhac an seachdain). No thar a' chluich a' tòiseachadh air co-dheann (coupon code) a' chluich a' fhaighinn ann (teicireachd air URL parameters a' chluich).

Tha an t-sgaidh a' chluich a' sgaidh gu am faighinn an sinne a' chluich: bid iad a bhith ag obair namh, username, e-mail address, ainm an sinne agus tilleadh (title), is dòla... ach tha an plan no template a' chluich air a bhith air a' chluich airson iad.

### A' chluich a' sgaidh le fìor-fhaighinn:

Tha thuir iad a bhith a' fàgail a' chluich PayPal, Stripe no bith eile de dhèanamh gu Ultimate Multisite no na h-àrdanasan a' chluich. Is dòla, bid a tha thuir iad a bhith ag obair namh airson fìor-fhaighinn air a' chluich a' faighinn air an t-sgaidh a' chluich. Tha an sinne a' chluich gu am faighinn an sgaidh a' chluich, ach bid iad a bhith ag obair namh air an fòram a' chluich, bid tha an sinne a' chluich a' tòiseachadh air meil a' chluich le fìor-fhaighinn eile airson a' chluich a' fàgail.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

Rà th'ann a tha a' chluainteachd an t-sgrìobhaidh (registration), tha thuair a' faicinn an amras airson fhaighinn a' chluainteachd sin a tha thu air a' setheann (agus tha thu a' faicinn e ar e-mail).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Is eadar a tha an amras airson fhaighinn a' chluainteachd a' atharrachadh air **Ultimate Multisite > Settings > Payments** air a chluainteachd an amras **Manual** a bhith air a' tòisich.

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

An uair a tholpais a tha eadar a tha a' chluainteachd manual agus a tha thu a' faicinn an fhaighinn, tha thu ag iarraidh **a chluainteachd a bhith air a' tòisich** airson a bhith a' chluainteachd an amras agus an seòl.

Tha sin a' cheannach: Ràidh gu **Ultimate Multisite > Payments** agus tha thu a' faicinn an fhaighinn a' chluainteachd. Bheir e freagairt **Pending**.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Thoir air a' chluainteachd sin agus tha thu a' faicinn an amras a bhith air a' tòisich **Completed**.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Tha eadar a tha eair a chluainteachd sin a bhith air a' tòisich **Completed**, tha thu a' faicinn an amras **Activate membership**. Tholpais an amras sin **on** airson a bhith a' chluainteachd an amras agus an seòl a tha a' chluainteachd sin. An uair a h-eadar, thoir air a' chluainteachd a' setheann.

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Bhaidh a chluainteachd a tha thu a' faicinn an dashboard agus àmraithean a tha thu a' chluainteachd air a bhith a' tòisich.
