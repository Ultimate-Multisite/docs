---
title: Ho lula la registration
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Ho Fikiliso (v2)

_**LIPOTSO LIKHLELWE: Le tsela ena e fana ka Ultimate Multisite v2.x.**_

Ba ntlha ba ka fika ka mofuta orefa oa hau. Ba ka u sebelisa sefomula sa fikiliso sa hau kapa le link seka hlalosang ho plan ea e fetileng. Leha ho feta, re tla u bonela hore na ba ba ntlha ba ka fika ka mofuta orefa oa hau ka ho sebelisa tsela tse fapaneng tsa ho fika ka hau le hore na eng e fetang ha ba fika ka hau.

## Ho sebelisa sefomula sa fikiliso: {#using-the-registration-form}

Ke tla u bonela hore ke tla fana ka mofuta orefa oa ba ntlha. O tla hlalosa sefomula sa fikiliso (checkout form) le e tla ba leka ho fika ka hau le ho tsamaea ka plan ea hau. U ka u na le lipa tse fapaneng tsa ho fika, sehlopha se se fetileng se se fetileng se se fetileng ha u batla.

Lapa le fetileng la ho fika ke [_**yourdomain.com/register**_](http://yourdomain.com/register), empa u ka u fetola le lapa le tse fetileng le **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Ha morao oa ba ntlha a feta la lapa la fika (o rata ho tsamaea ka sehlopha sa **Sign in** kapa **Buy now**), ba tla bona sefomula sa fikiliso sa hau.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Ke na le sebaka se se fetileng sa sehlopha sa fikiliso se fetileng:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Ba ba ipa ho sebelisa lipa tse hlalosang—email, username, password, kapa tse ling...—le hore ba tsamaea ka plan kapa ba hloke ho hlalosa email ea bona ha ba fika ka plan e fetileng le nako ea tšepo (trial period) ha ba na le lipa tsa ho hlalosa.

Ha morao oa "Thank you" (Kea leboha), ba tla bona litšepo tse ntse li re, hore na ba hloka ho hlalosa email ea bona kapa hore website ea bona e fetileng le ba ka ho sebelisa e.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Ha ho! Ha le fa email address confirmation e hloka, ba ba tla ba kena ka inbox ya hae le ba tsamisa link ya verification. Ba ntlha website ya hae ha o tla fana ka ba e ntse a hloka email address.

Ha ba tsamisa ka plan e fetileng kapa ha ho hloka verification ya email ka sebahalo sa hau, ba tla fana ka website ya hae ka nako e fetileng ha ba feta checkout le ba tla bona link ya ho login ka dashboard ea hae.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Ho sebelisa Link e tsamaisang (Shareable Link): {#using-a-shareable-link}

Ho fana ka registration ka link e tsamaisang ha le fetileng la form ya registration, le fa ho sebelisa link e tsamaisang, ba bang ba bona sehlopha kapa template ea website e ntse e hloka ka checkout form (ba ntlha sebahalo sa Pre-selecting products and templates via URL parameters) kapa ba nka coupon code e fetileng (ba ntlha sebahalo sa Using URL Parameters).

Ho fana ka registration ho tla ba le fetileng: ba tla hloka ho fana le lemo la hae, username, email address, le lemo la website le lemo la title, kapa tse ling... empa plan kapa template ea site e tla ntse e hloka.

### Ho tsamisa ka Tlhaloso (Manual Payments): {#registering-using-manual-payments}

Ha u batla ho sebelisa PayPal, Stripe kapa gateway ea tšepetso e fetileng ea Ultimate Multisite kapa sehlopha sa hae, u ka sebelisa manual payments ba bang ba bona. Ka lehle tseba, u ka hlalosa invoice ho ba leba ho feta ha ba tsamisa ka network ea hau.

Ho fana ka registration ha le fetileng la maso a lebelo, empa ka page ea registration ba bang ba tla bona lemo le hloka ho fana le email le tsebo e fetileng ho feta ho fana ka tšepetso.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

Le fa ntlha le tšepo ya mokhoa oa mokhoa o tla fana ka ho tsamaiso ea registration, le ba tla bona litšepo tsa mokhoa o o setse (le ba tla li tšama ka email).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Litšepo tsa mokhoa o ka fetoa ka **Ultimate Multisite > Settings > Payments** ha u fana le boitshwaro oa mokhoa oa mokhoa (Manual) o tla ba ho tsamaea:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Ha ba feta mokhoa oa mokhoa o o setse le ba u tloha le confirmation, o tla hloka **ho fana ka mokhoa oa mokhoa** (manually confirm the payment) ho fa membership ea morao le website e fetole.

Ho etsa lena, aela **Ultimate Multisite > Payments** le hola mokhoa oa morao oa morao. O tla ba le litšepo tsa **Pending**.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Hloka ka ntlha ea mokhoa o o setse, u tla u le boitshwaro oa ho fetola se sehlopha sa **Completed**.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Ha u fetole litšepo tsa sehlopha sa **Completed**, o tla bona litšepo la ho fana ka membership (Activate membership). Tšama lena le **on** ho fa membership le website ea morao oa morao. Ha e le, hloka ho tsamaea ho **Save Payment**.

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Morao oa morao o tla ba le boitshwaro oa ho fana ka dashboard le litšepo hloekileng tse a tšamaisa.
