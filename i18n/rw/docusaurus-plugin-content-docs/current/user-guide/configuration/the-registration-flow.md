---
title: Urugero rw'Ubukorera
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Uburyo mu gukoresha (v2)

_**Urugero Murage: Icyo cyacu cyerekana kuri Ultimate Multisite version 2.x.**_

Abantu bashobora gushyira umuryango wanyu mu buryo runaka. Bashobora gukoresha uburyo bwo gukoresha (registration form) cyangwa link yashobora guhindurwa ku plan yakoreshwa mu gukoresha. Hano twakwibwire uko abantu bashobora gushyira umuryango wanyu mu buryo runaka bafite uburyo bwo gukoresha (registration form) cyangwa link yashobora guhindurwa ku plan yakoreshwa.

## Gukoresha Uburyo Bwo Gukoresha (Using the Registration Form): {#using-the-registration-form}

Iyi ni uburyo bwizamo bwo gukoresha. Urahindura ipage y'uburyo bwo gukoresha (registration page) neza n'ibyo bishobora kuba ari **checkout form**. Icyo ni aho abantu bashobora guhindurwa mu gukoresha umuryango wanyu kandi bakoresha plan yakoreshwa. Ushobora gutera ipage z'uburyo bwo gukoresha nyinshi, kandi y'imwe n'imwe hari uburyo bw'uburyo bwo gukoresha runaka cyane.

Ipage ishyirwaho mu gihe cyiza cyo gukoresha ni [_**yourdomain.com/register**_](http://yourdomain.com/register), ariko ushobora guhindura iki mu gihe cyose kuri **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Icyiza cyane cyangwa se abantu bashobora gukoresha (gukoresha "Sign in" cyangwa "Buy now"), bakwumva uburyo bwo gukoresha (registration form) kuri ipage.

![Uburyo bwo gukoresha bishirwa ku page y'uburyo bwo gukoresha](/img/frontend/registration-form.png)

Iyi ni inama ya checkout form nk'uko ikoreshwa mu gihe cyiza (frontend):

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Inshingano yabo ni gukora ibyo byose byo kwiga - email, username, password, n'ibindi... - kandi bakorera plan cyangwa bafite uburyo bwo gukoresha (free plan) cyangwa plan yakoreshwa yakoresheye (paid plan) y'umwihariko (trial period) nta mbere yo gukora ubunyangamugayo.

Ku page ya "Thank you", bakwumva ubutumwa buvuga niba bafite ikibazo cyo kwiga email, cyangwa niba website yabo yari yakoreshejwe kandi bashobora gufata gukoresha.

![Ururu ruwo mu gihe cyo mu gihe cyo guhagarara](/img/frontend/registration-thank-you.png)

Kugira ngo umuyobozi y'email yashobora gukorwa, ugiye ku inbox yawe kandi ugukoresha link y'ubwujgwa (verification link). Uruwo rwawe rutagira ubushobozi bwo gukorwa niba email y'umuyobozi yashobora guhagarara.

Niba yashobora guhagarara ku mpamvu y'ubwugwa cyangwa ko umemail y'ubwujgwa si ikoresho (mandatory) ku rurimi rwawe, uza gukorera urwo rwawe imbere y'uko wari ukoresheje (checkout), kandi uzabona link yo guhagarara mu dashboard yawe.

![Uruwo rwawe rugerageje n'ubwoko bwo guhagarara mu dashboard](/img/frontend/site-activated.png)

## Gukoresha Link Y'ubwujgwa (Shareable Link): {#using-a-shareable-link}

Uburyo bwo gukorera uburyo bwo guhagarara bishobora kuba nk'uko umufugije yashobora gukoresha form ya guhagarara, ariko igisobanuro ni ko kugira link y'ubwujgwa, abakoresha bvawe bashobora gushyira uburyo cyangwa template y'urwo rwawe mu checkout (shobora kubona isobanuro mu gihe cyo guhagarara ibintu n'amashobora (Pre-selecting products and templates via URL parameters) cyangwa kugira coupon code kuko (Using URL Parameters)).

Uburyo bwo guhagarara bishobora kuba nk'uko byari, kandi bakwibona ubwoko cyangwa plan y'urwo rwawe yashobora gukorwa mbere.

### Gukoresha Uburyo Bwo Guhagarara n'Uruko (Manual Payments): {#registering-using-manual-payments}

Niba ushaka guhagarara mu buryo bwo guhindura (manual payments) kandi ushaka kugira uburyo bwo gutera umuyobozi wako gukorera PayPal, Stripe cyangwa ikoresho kirekire kuko Ultimate Multisite cyangwa ibyo byari bikoreshwa n'ibindi. Uza kuba ufite ubushobozi bwo gukora invoice ku muntu ugiye guhagarara mu gihe cyo guhagarara ku koresho yawe y'ubwujgwa (payment processor) nyuma y'uko yashobora guhagarara ku rurimi rwawe.

Uburyo bwo guhagarara bishobora kuba nk'uko byari, ariko ku form ya guhagarara abakoresha bvawe bazabona ubutumwa bwo kuvuga ko bazabona email ikoresheje ibindi byo gukorera umwanya (payment).

![Urugero w'ubwujyu mu gihe umukono mu gukoresha](https://example.com/img/frontend/registration-manual-notice.png)

Kugera nyuma y'ukoziwe, bashobora kubona inama ko ushobora kugura (payment instructions) uyo wakoze (n'ibindi bintu byo mu email).

![Inama z'ubwujyu zishoborwa gukoresha nyuma y'ukoziwe](https://example.com/img/frontend/registration-payment-instructions.png)

Ushobora gushyira inama z'ubwujyu mu **Ultimate Multisite > Settings > Payments** nyuma yo kwigira ngo ugera (toggle on) uburyo bwo kugura **Manual**:

![Uburyo bwo kugura manual n'umugambi w'ubwujyu](https://example.com/img/config/manual-gateway-settings.png)

Nyuma y'ukoziwe, mu gihe umukono (manual payment) uyo gukora kandi uya kunda (confirm), ugomba **gukora umukono w'ubwujyu** kugira ngo umukono w'umukoresha (customer membership) n'umwebwe (website) uyo ushobore.

Kugera ibi, gaha ku **Ultimate Multisite > Payments** kandi utera umukono w'umukoresha. Ugiye kubona ko hari igice cyo kumenya (status) cyo **Pending**.

![Inyandiko z'ubwujyu n'umukono w'ubwujyu wakoze](https://example.com/img/admin/payments-list.png)

Gaha ku numero ya umukono uyo, ushobora gushyira status yayo kuri **Completed**.

![Uburyo bwo gukoresha status y'umukono kuri Completed](https://example.com/img/admin/payment-status-completed.png)

Nyuma yo gushyira status yayo kuri **Completed**, ushobora kubona inama ko ugomba **gukora umukono w'umukoresha** (Activate membership). Yera uburyo bwo kwigira ngo umukono n'umwebwe uyo ushobore. Nyuma, gaha kugira ngo utera **Save Payment**.

![Uburyo bwo gukoresha umukono w'umukoresha no Save Payment](https://example.com/img/admin/payment-activate-membership.png)

Umukoresha wawe yashobora gukoresha dashboard n'ibindi byose byo yashoboye (subscribed).
