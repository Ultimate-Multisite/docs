---
title: Pag-set up sa Manwal nga mga Bayad
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Pag-set Up sa Manual Payments (v2)

_**IMPORTANT NOTE: Kini nga artikulo nagtumong sa Ultimate Multisite version 2.x.**_

Ang Manual payments usa ka paagi aron makatanyag ka og ubang mga pamaagi sa pagbayad kung ang **Stripe** o **PayPal** dili magamit para sa imong mga user. Mahimo kini nga wire o bank transfer o bisan unsang ubang pamaagi sa pagbayad nga magamit sa imong mga user sa lokal.

## Unsaon pag-enable sa Manual Payments

Ang pag-set up sa manual payment sayon kaayo. Kinahanglan ra nimo kining i-enable ubos sa payment gateways ug ibutang ang detalyadong mga instruksyon kung unsaon sa user pagpadala sa bayad.

Una, adto sa **Ultimate Multisite > Settings > Payments**. Ubos sa **Payment Gateways** , i-toggle ang **Manual** ngadto sa on. Makita nimo nga mogawas ang usa ka **Payment Instructions** box para nimo.

Idugang sa kini nga box ang impormasyon nga kinahanglan sa imong customer aron makahimo sa pagbayad. Mahimo kini nga mga detalye sa imong bank account ug imong email aron mapadala sa customer kanimo ang kumpirmasyon sa pagbayad, pananglitan.

![Toggle sa manual payment gateway uban ang Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Ania ang interface sa manual gateway settings:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Human kini ma-set up, i-click lang ang **Save Settings** ug human na. Kung ang mga user magparehistro sa imong network, makakita sila og mensahe nga nagsulti kanila nga madawat nila ang imong mga instruksyon aron makompleto ang pagpalit.

![Mensahe sa kumpirmasyon sa pagparehistro nga nagsulti sa user nga makadawat sila og mga instruksyon sa pagbayad](/img/frontend/registration-manual-notice.png)

Ug makadawat usab sila og mensahe sa imong **Thank You** page uban sa imong mga instruksyon sa pagbayad.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Pagkumpirma sa manual payments

Aron makumpirma ang manual payment, adto sa **Payments** menu sa wala nga bar. Didto makita nimo ang tanang mga bayad sa imong network ug ang ilang mga detalye, lakip ang ilang **status**. Ang manual payment kanunay nga adunay **Pending** status hangtod nga imo kining usbon sa kamut.

![Lista sa Payments nga nagpakita og pending manual payment](/img/admin/payments-list.png)

Sulod sa payment page pinaagi sa pag-click sa **reference code**. Niining panid adunay tanan nga mga detalye sa pending nga bayad, sama sa reference ID, mga product, timestamps ug uban pa.

![Panid sa mga detalye sa bayad nga nagpakita sa reference code, mga product, ug totals](/img/admin/payment-edit.png)

Sa tuo nga column, mahimo nimo usbon ang status sa bayad. Ang pag-usab niini ngadto sa **Completed** ug ang **pag-toggle sa Activate Membership** nga opsyon mag-enable sa site sa imong customer ug mahimong aktibo ang ilang membership.

![Panid sa pag-edit sa bayad nga ang Status gi-set sa Completed ug Activate Membership toggle](/img/admin/payment-activate-membership.png)
