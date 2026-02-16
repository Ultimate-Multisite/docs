---
title: ચુકવણીઓ અને ઇન્વૉઇસનું સંચાલન
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# ચુકવણીઓ અને ઇન્વોઇસનું સંચાલન

## ચુકવણી સેટિંગ્સ

ચુકવણીઓ પ્રાપ્ત કરવાનું શરૂ કરતા પહેલાં, તમારે ચુકવણી-સંબંધિત સેટિંગ્સ ગોઠવવાની જરૂર પડશે. **Ultimate Multisite → Settings** પર જાઓ અને **Payment** ટેબ પર ક્લિક કરો.

![Payment settings tab](/img/admin/settings-payments-top.png)

### સામાન્ય ચુકવણી વિકલ્પો

સામાન્ય સેટિંગ્સમાં તમે આ ગોઠવી શકો છો:

- **Currency** — વ્યવહારો માટે વપરાતી ડિફોલ્ટ કરન્સી
- **Currency Position** — કરન્સી સિમ્બોલ ક્યાં દેખાય છે (રકમ પહેલાં/પછી)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Payment Gateways

Ultimate Multisite બહુવિધ payment gateways ને સપોર્ટ કરે છે. તમે Payment settings ટેબમાંથી દરેકને enable અને configure કરી શકો છો.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

ઉપલબ્ધ gateways માં સમાવેશ થાય છે:

- **Stripe** — Stripe દ્વારા ક્રેડિટ કાર્ડ ચુકવણીઓ
- **PayPal** — PayPal ચુકવણીઓ
- **Manual** — ઓફલાઇન અથવા કસ્ટમ ચુકવણી પ્રોસેસિંગ માટે

દરેક gateway નો પોતાનો configuration વિભાગ છે જ્યાં તમે API keys અને અન્ય સેટિંગ્સ દાખલ કરો છો.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode

લાઇવ થતા પહેલાં તમારા payment integration ને ટેસ્ટ કરવા માટે તમે **Sandbox Mode** enable કરી શકો છો. જ્યારે sandbox mode સક્રિય હોય, ત્યારે કોઈ વાસ્તવિક ચાર્જ કરવામાં આવશે નહીં.

## ચુકવણીઓ જોવી

તમારા નેટવર્કમાં બધા વ્યવહારો જોવા માટે Ultimate Multisite હેઠળ **Payments** પેજ પર જાઓ.

![Payments list](/img/admin/payments-list.png)

તમે સ્ટેટસ (completed, pending, failed, refunded) દ્વારા ચુકવણીઓ ફિલ્ટર કરી શકો છો અને ચોક્કસ વ્યવહારો શોધી શકો છો.

તેની સંપૂર્ણ વિગતો જોવા માટે ચુકવણી પર ક્લિક કરો, જેમાં line items, સંકળાયેલ membership, ગ્રાહક માહિતી અને payment gateway ડેટાનો સમાવેશ થાય છે.

## ઇન્વોઇસ

Ultimate Multisite ચુકવણીઓ માટે આપોઆપ ઇન્વોઇસ જનરેટ કરી શકે છે. તમે Payment settings માંથી ઇન્વોઇસ ટેમ્પલેટ અને નંબરિંગ ફોર્મેટ કસ્ટમાઇઝ કરી શકો છો.

ઇન્વોઇસ કસ્ટમાઇઝેશન વિકલ્પોમાં સમાવેશ થાય છે:

- ઇન્વોઇસ પર દર્શાવવામાં આવતું **કંપનીનું નામ અને સરનામું**
- **ઇન્વોઇસ નંબરિંગ** ફોર્મેટ અને ક્રમ
- ઇન્વોઇસ હેડરમાં દર્શાવવામાં આવતો **લોગો**
- શરતો, નોંધો અથવા કાનૂની માહિતી માટે **કસ્ટમ ફૂટર ટેક્સ્ટ**

ઇન્વોઇસ ટેમ્પલેટ કસ્ટમાઇઝ કરવા માટે, **Ultimate Multisite → Settings → Payment** પર જાઓ અને ઇન્વોઇસ-સંબંધિત સેટિંગ્સ શોધો.
