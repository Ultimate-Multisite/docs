---
title: A’ Faighinn Pàigheadh
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# A’ Faighinn Pàigheadh (v2)

_**NOTA CUDROMACH: Tha an artaigil seo a’ toirt iomradh air Ultimate Multisite tionndadh 2.x.**_

Tha siostam ballrachd is bileachaidh togte aig Ultimate Multisite. Gus am bi an siostam bileachaidh againn ag obair, tha sinn air na geataichean pàighidh as cumanta a thathar a’ cleachdadh ann am malairt-dhealain a thoirt a-steach. ’S iad na geataichean pàighidh bunaiteach ann an Ultimate Multisite _Stripe_ , _PayPal_ , agus Pàigheadh Làimhe. Faodaidh tu _WooCommerce_ , _GoCardless_ agus _Payfast_ a chleachdadh cuideachd gus pàighidhean fhaighinn le bhith a’ stàladh nan tuilleadan aca fhèin.

## Roghainnean Bunaiteach

Faodaidh tu gin de na geataichean pàighidh seo a rèiteachadh fo roghainnean pàighidh Ultimate Multisite. Gheibh thu e le bhith a’ dol gu **clàr-taice Ultimate Multisite > Roghainnean > Pàighidhean.**

![Duilleag roghainnean pàighidh ann an Ultimate Multisite a’ sealltainn pannal nam Pàighidhean](/img/config/payments-settings-page.png)

Mus suidhich thu an geata pàighidh agad, thoir sùil air na roghainnean pàighidh bunaiteach as urrainn dhut a rèiteachadh:

**Èignich fèin-ùrac** **hadh:** Nì seo cinnteach gun tig am pàigheadh air ais gu fèin-obrachail aig deireadh gach cearcall bileachaidh a rèir na tricead bileachaidh a thagh an cleachdaiche.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Bidh Ultimate Multisite v2.13.0 a’ sgrùdadh a bheil teisteanas ùrachaidh ath-chleachdte aig a’ gheata ghnìomhach mus sàbhail e ballrachd ath-chuairteach le fèin-ùrachadh air a chomasachadh. Faodaidh teisteanas ùrachaidh a bhith na fho-sgrìobhadh geata, aonta bileachaidh, tòcan tasgaidh sàbhailte, no dòigh pàighidh ath-chleachdte cho-ionann. Ma dh’aithriseas an geata nach eil teisteanas freagarrach ann, sàbhalaidh Ultimate Multisite a’ bhallrachd ach cuiridh e fèin-ùrachadh dheth agus clàraichidh e staid an teisteanais a tha a dhìth gus an urrainn do rianaire no sruth taice iarraidh air a’ chustamair pàigheadh ath-ùghdarrachadh ron cheann-latha ùrachaidh.

Bidh seo a’ cur casg air ballrachd bho bhith a’ nochdadh mar gum biodh i a’ fèin-ùrachadh nuair nach urrainn don gheata ach pàighidhean aon-ùine a chruinneachadh. Bu chòir do thuilleadan geata dearbhadh gu bheil pàighidhean ath-chuairteach a’ stòradh teisteanas ath-chleachdte, gu h-àraidh nuair a tha an geata a’ toirt taic do ghlacadh aon-ùine agus do mhodhan pàighidh tasgaidh/fo-sgrìobhaidh.

**Ceadaich deuchainnean às aonais dòigh** **pàighidh:** Leis an roghainn seo air a chomasachadh, cha bhi aig a’ chliant agad ri fiosrachadh ionmhasail sam bith a chur ris rè pròiseas a’ chlàraidh. Cha bhi seo riatanach ach nuair a dh’fhalbhas ùine na deuchainn seachad.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Cuir fàirdeal air dearbhadh pàighidh:** Bheir seo roghainn dhut am bu chòir no nach bu chòir fàirdeal a chur às dèidh pàighidh. Thoir an aire gum bi cothrom aig luchd-cleachdaidh air an eachdraidh pàighidh aca fo Dashboard an fho-làraich aca. Chan eil an roghainn seo a’ buntainn ris a’ Gheata Làimhe.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Sgeama àireamhachaidh fhàirdealan:** An seo, faodaidh tu còd iomraidh pàighidh no sgeama àireamhan leantainneach a thaghadh. Ma thaghas tu còd iomraidh pàighidh a chleachdadh airson do fhàirdealan, chan fheum thu dad a rèiteachadh. Ma thaghas tu sgeama àireamhan leantainneach a chleachdadh, feumaidh tu an **ath àireamh fàirdeil** a rèiteachadh (Thèid an àireamh seo a chleachdadh mar àireamh na fàirdeil airson an ath fhàirdeal a thèid a chruthachadh air an t-siostam. Thèid a mheudachadh le aon gach turas a thèid fàirdeal ùr a chruthachadh. Faodaidh tu atharrachadh agus a shàbhaladh gus àireamh leantainneach na fàirdeil ath-shuidheachadh gu luach sònraichte) agus **ro-leasachan àireamh na fàirdeil.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Far am faighear na geataichean:

Faodaidh tu na geataichean pàighidh a shuidheachadh air an aon duilleag ( **Ultimate Multisite > Roghainnean > Pàighidhean**). Dìreach fo **geataichean pàighidh gnìomhach** , chì thu: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ agus _Làimhe_.

![Earrann Geataichean Pàighidh Gnìomhach a’ liostadh Stripe, Stripe Checkout, PayPal agus Làimhe](/img/config/payments-active-gateways.png)

Tha artaigil sònraichte againn airson gach geata pàighidh a stiùireas tu tro na ceumannan airson a shuidheachadh, agus gheibh thu iad air na ceanglaichean gu h-ìosal.

Faodaidh tu mion-fhiosrachadh pàighidh fhaicinn agus a dheasachadh:

![Eadar-aghaidh deasachaidh pàighidh](/img/admin/payment-edit.png)

Seo sealladh slàn de dhuilleag deasachaidh a’ phàighidh:

![Eadar-aghaidh slàn deasachaidh pàighidh](/img/admin/payment-edit-full.png)

Seo cuideachd sealladh slàn de roghainnean nan geataichean pàighidh:

![Duilleag slàn roghainnean nan geataichean pàighidh](/img/config/settings-payments-gateways-full.png)

**A’ suidheachadh geata Stripe**

**A’ suidheachadh geata PayPal**** **

**A’ suidheachadh phàighidhean làimhe**

A-nis, ma tha thu airson _WooCommerce_ , _GoCardless_ no _Payfast_ a chleachdadh mar do gheata pàighidh, feumaidh tu **na tuilleadan aca a stàladh agus a rèiteachadh**.

### Mar a stàlaicheas tu an tuilleadan WooCommerce:

Tha sinn a’ tuigsinn nach eil _Stripe_ agus _PayPal_ rim faighinn ann an cuid de dhùthchannan, rud a chuireas cuingealachadh air no a chuireas bacadh air luchd-cleachdaidh Ultimate Multisite bho bhith a’ cleachdadh ar plugin gu h-èifeachdach. Mar sin chruthaich sinn tuilleadan gus _WooCommerce,_ a thoirt a-steach, plugin malairt-dhealain a tha gu math mòr-chòrdte. Chruthaich luchd-leasachaidh air feadh an t-saoghail tuilleadan gus diofar gheataichean pàighidh a thoirt a-steach dha. Ghabh sinn brath air seo gus na geataichean pàighidh as urrainn dhut a chleachdadh le siostam bileachaidh Ultimate Multisite a leudachadh.

_**CUDROMACH:** Feumaidh Ultimate Multisite: WooCommerce Integration WooCommerce a bhith air a ghnìomhachadh co-dhiù air a’ phrìomh làrach agad._

An toiseach, rach gu duilleag nan tuilleadan. Gheibh thu i le bhith a’ dol gu **Ultimate Multisite > Roghainnean**. Bu chòir dhut clàr nan **Tuilleadan** fhaicinn. Briog air **Thoir sùil air na Tuilleadan againn**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Às dèidh dhut briogadh air **Thoir sùil air na Tuilleadan againn** , thèid do ath-stiùireadh gu duilleag nan tuilleadan. An seo gheibh thu a h-uile tuilleadan Ultimate Multisite. Briog air an tuilleadan **Ultimate Multisite: WooCommerce Integration**.

![Duilleag tuilleadan a’ liostadh tuilleadan Ultimate Multisite, a’ gabhail a-steach WooCommerce Integration](/img/addons/addons-page.png)

Nochdaidh uinneag leis na mion-fhiosrachadh mun tuilleadan. Dìreach briog air **Stàlaich an-dràsta**.

<!-- Glacadh-sgrìn ri fhaighinn: còmhradh mion-fhiosrachaidh tuilleadan Ultimate Multisite WooCommerce Integration leis a’ phutan Stàlaich an-dràsta -->

Nuair a bhios an stàladh deiseil, thèid do ath-stiùireadh gu duilleag nam plugan. An seo, dìreach briog air **Cuir an gnìomh air an lìonra** agus thèid an tuilleadan WooCommerce a chur an gnìomh air an lìonra agad.

<!-- Glacadh-sgrìn ri fhaighinn: duilleag nam plugan leis a’ cheangal Cuir an gnìomh air an lìonra airson an tuilleadan WooCommerce Integration -->

Às dèidh dhut a chur an gnìomh, mura h-eil am plugan WooCommerce agad fhathast air a stàladh agus air a chur an gnìomh air an làrach-lìn agad, gheibh thu cuimhneachan.

<!-- Glacadh-sgrìn ri fhaighinn: brath rianachd a’ cur an cuimhne an rianaire am plugan WooCommerce a stàladh agus a chur an gnìomh -->

Gus barrachd a leughadh mun tuilleadan WooCommerce Integration, **briog an seo**.

### Mar a stàlaicheas tu an tuilleadan GoCardless:

Tha na ceumannan gus an tuilleadan _GoCardless_ a stàladh gu math coltach ris an tuilleadan _WooCommerce_. Rach gu duilleag nan tuilleadan agus tagh an tuilleadan **Ultimate Multisite: GoCardless Gateway**.

<!-- Glacadh-sgrìn ri fhaighinn: duilleag nan tuilleadan leis an tuilleadan Ultimate Multisite GoCardless Gateway air a chomharrachadh -->

Nochdaidh uinneag an tuilleadain. Briog air **Stàlaich an-dràsta**.

<!-- Glacadh-sgrìn ri fhaighinn: còmhradh mion-fhiosrachaidh tuilleadan Ultimate Multisite GoCardless Gateway leis a’ phutan Stàlaich an-dràsta -->

Nuair a bhios an stàladh deiseil, thèid do ath-stiùireadh gu duilleag nam plugan. An seo, dìreach briog air **Cuir an gnìomh air an lìonra** agus thèid an tuilleadan _GoCardless_ a chur an gnìomh air an lìonra agad.

<!-- Glacadh-sgrìn ri fhaighinn: duilleag nam plugan leis a’ cheangal Cuir an gnìomh air an lìonra airson an tuilleadan GoCardless Gateway -->

Gus ionnsachadh mar a thòisicheas tu leis a’ gheata _GoCardless_, **leugh an artaigil seo**.

### Mar a stàlaicheas tu an tuilleadan Payfast:

Rach gu duilleag nan tuilleadan agus tagh an tuilleadan **Ultimate Multisite: Payfast Gateway**.

<!-- Glacadh-sgrìn ri fhaighinn: duilleag nan tuilleadan leis an tuilleadan Ultimate Multisite Payfast Gateway air a chomharrachadh -->

Nochdaidh uinneag an tuilleadain. Briog air **Stàlaich an-dràsta.**

<!-- Glacadh-sgrìn ri fhaighinn: còmhradh mion-fhiosrachaidh tuilleadan Ultimate Multisite Payfast Gateway leis a’ phutan Stàlaich an-dràsta -->

Nuair a bhios an stàladh deiseil, thèid do ath-stiùireadh gu duilleag nam plugan. An seo, dìreach briog air **Cuir an gnìomh air an lìonra** agus thèid an tuilleadan _Payfast_ a chur an gnìomh air an lìonra agad.

<!-- Glacadh-sgrìn ri fhaighinn: duilleag nam plugan leis a’ cheangal Cuir an gnìomh air an lìonra airson an tuilleadan Payfast Gateway -->
