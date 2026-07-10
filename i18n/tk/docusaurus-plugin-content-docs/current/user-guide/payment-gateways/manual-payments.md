---
title: El bilen tölegleri sazlamak
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# El bilen tölegleri sazlamak (v2) {#setting-up-manual-payments-v2}

_**MÖHÜM BELLIK: Bu makala Ultimate Multisite 2.x wersiýasyna degişlidir.**_

El bilen tölegler, **Stripe** ýa-da **PayPal** ulanyjylaryňyz üçin elýeterli bolmadyk ýagdaýynda, başga töleg usullaryny hödürlemegiň bir ýoludyr. Bu bank geçirimi ýa-da ulanyjylaryňyz üçin ýerli derejede elýeterli bolan islendik başga töleg usuly bolup biler.

## El bilen tölegleri nädip işjeňleşdirmeli {#how-to-enable-manual-payments}

El bilen tölegi sazlamak örän aňsat. Diňe ony töleg geçelgeleriniň aşagynda işjeňleşdirmeli we ulanyjynyň tölegi nädip ibermelidigi barada jikme-jik görkezmeleri girizmeli.

Ilki bilen, **Ultimate Multisite > Sazlamalar > Tölegler** bölümine gidiň. **Töleg geçelgeleri** aşagynda **El bilen** açyň. Siziň üçin **Töleg görkezmeleri** gutusynyň peýda bolandygyny görersiňiz.

Bu gutujyga müşderiňiziň tölegi amala aşyrmak üçin gerek boljak maglumatlaryny goşuň. Mysal üçin, bu bank hasabyňyzyň maglumatlary we müşderiniň size töleg tassyklamasyny ibermegi üçin e-poçta salgyňyz bolup biler.

![Töleg görkezmeleri tekst meýdany bilen el bilen töleg geçelgesini açyp-ýapmak düwmesi](/img/config/manual-gateway-expanded.png)

Ine, el bilen geçelge sazlamalarynyň interfeýsi:

![El bilen geçelge sazlamalary](/img/config/manual-gateway-settings.png)

Ony sazlap bolanyňyzdan soň, diňe **Sazlamalary ýatda sakla** düwmesine basyň, şonuň bilen tamamlanýar. Ulanyjylar ulgamyňyza hasaba alnanda, satyn alşy tamamlamak üçin siziň görkezmeleriňizi aljakdyklaryny aýdýan habary görerler.

![Ulanyja töleg görkezmelerini aljakdygyny aýdýan hasaba alyş tassyklama habary](/img/frontend/registration-manual-notice.png)

Şeýle hem olar siziň **Sag boluň** sahypaňyzda töleg görkezmeleriňiz bilen habar alarlar.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## El bilen tölegleri tassyklamak {#confirming-manual-payments}

El bilen tölegi tassyklamak üçin, çep paneldäki **Tölegler** menýusyna gidiň. Ol ýerde ulgamyňyzdaky ähli tölegleri we olaryň jikme-jikliklerini, şol sanda olaryň **ýagdaýyny** görüp bilersiňiz. El bilen töleg, siz ony el bilen üýtgedýänçäňiz, hemişe **Garaşylýar** ýagdaýynda bolar.

![Garaşylýan el bilen tölegi görkezýän tölegler sanawy](/img/admin/payments-list.png)

**Salgylanma koduna** basyp, töleg sahypasyna giriň. Bu sahypada garaşylýan tölegiň ähli jikme-jiklikleri bar, meselem salgylanma ID-si, önümler, wagt bellikleri we başgalar.

![Salgylanma koduny, önümleri we jemi mukdarlary görkezýän töleg jikme-jiklikleri sahypasy](/img/admin/payment-edit.png)

Sag sütünde tölegiň ýagdaýyny üýtgedip bilersiňiz. Ony **Tamamlandy** diýip üýtgetmek we **Agzalygy işjeňleşdir** opsiýasyny açmak müşderiňiziň saýtyny işjeňleşdirer we olaryň agzalygy aktiw bolar.

![Ýagdaýy Tamamlandy edilip bellenen we Agzalygy işjeňleşdir açyk bolan tölegi redaktirleme sahypasy](/img/admin/payment-activate-membership.png)
