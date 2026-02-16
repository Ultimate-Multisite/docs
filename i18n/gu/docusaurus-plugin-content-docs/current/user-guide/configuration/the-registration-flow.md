---
title: નોંધણી પ્રવાહ
sidebar_position: 3
_i18n_hash: 73484be47ec750747cb9d94ea874d97f
---
# રજિસ્ટ્રેશન ફ્લો (v2)

_**મહત્વની નોંધ: આ લેખ Ultimate Multisite વર્ઝન 2.x માટે છે.**_

યુઝર્સ તમારા નેટવર્ક પર અલગ-અલગ રીતે રજિસ્ટર કરી શકે છે. તેઓ તમારું રજિસ્ટ્રેશન ફોર્મ અથવા પહેલેથી પસંદ કરેલા પ્લાન માટેની શેર કરી શકાય તેવી લિંકનો ઉપયોગ કરી શકે છે. અહીં અમે તમને બતાવીશું કે તમારા ગ્રાહકો ઉપલબ્ધ રીતોનો ઉપયોગ કરીને તમારા નેટવર્ક પર કેવી રીતે રજિસ્ટર કરી શકે છે અને રજિસ્ટર કર્યા પછી શું થાય છે.

## રજિસ્ટ્રેશન ફોર્મનો ઉપયોગ કરવો:

આ સ્ટાન્ડર્ડ રજિસ્ટ્રેશન પ્રક્રિયા છે. તમે **checkout form** સાથે એક રજિસ્ટ્રેશન પેજ બનાવો છો અને આ તે જગ્યા હશે જ્યાં તમારા ગ્રાહકો તમારા નેટવર્ક પર રજિસ્ટર કરવા અને પ્લાન સબ્સ્ક્રાઇબ કરવા આવશે. તમે ઇચ્છો તો અલગ-અલગ રજિસ્ટ્રેશન ફોર્મ સાથે ઘણા રજિસ્ટ્રેશન પેજ રાખી શકો છો.

રજિસ્ટ્રેશન માટેનું ડિફોલ્ટ પેજ [_**yourdomain.com/register**_](http://yourdomain.com/register) છે, પરંતુ તમે આને ગમે ત્યારે **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** માં બદલી શકો છો.

જ્યારે યુઝર તમારા રજિસ્ટ્રેશન પેજ પર આવે (સામાન્ય રીતે **Sign in** અથવા **Buy now** બટન પર ક્લિક કરીને), ત્યારે તેઓ તમારું રજિસ્ટ્રેશન ફોર્મ જોશે.

![રજિસ્ટ્રેશન પેજ પર દેખાતું રજિસ્ટ્રેશન ફોર્મ](/img/config/checkout-forms-list.png)

તેમણે ફક્ત બધા ફરજિયાત ફીલ્ડ્સ ભરવાના છે - ઈમેઈલ, યુઝરનેમ, પાસવર્ડ, વગેરે... - અને પ્લાન માટે પેમેન્ટ કરવાનું છે અથવા જો તેઓ ફ્રી પ્લાન અથવા પેમેન્ટ માહિતી વગરના ટ્રાયલ પીરિયડ સાથેના paid plan માટે રજિસ્ટર કરી રહ્યા હોય તો તેમના ઈમેઈલ એડ્રેસની પુષ્ટિ કરવાની છે.

"Thank you" પેજ પર, તેઓ એક મેસેજ જોશે જે તેમને જણાવશે કે તેમને તેમના ઈમેઈલ એડ્રેસની પુષ્ટિ કરવાની જરૂર છે કે તેમની વેબસાઇટ પહેલેથી જ એક્ટિવેટ થઈ ગઈ છે અને તેઓ તેનો ઉપયોગ શરૂ કરી શકે છે.

![રજિસ્ટ્રેશન પછીનું Thank You પેજ](/img/config/checkout-form-editor.png)

જો ઈમેઈલ એડ્રેસની પુષ્ટિ જરૂરી હોય, તો તેમણે તેમના ઈમેઈલ ઇનબોક્સમાં જઈને verification link પર ક્લિક કરવાની જરૂર પડશે. જો તેમના ઈમેઈલ એડ્રેસની verify ન થાય તો તેમની વેબસાઇટ એક્ટિવેટ નહીં થાય.

જો તેઓ paid plan પર રજિસ્ટર થયા હોય અથવા તમારા નેટવર્ક પર email verification ફરજિયાત ન હોય, તો checkout પછી તરત જ તેમની વેબસાઇટ એક્ટિવેટ થઈ જશે અને તેમને તેમના dashboard માં sign in કરવા માટેની લિંક બતાવવામાં આવશે.

![Dashboard માં sign in કરવાની લિંક સાથે એક્ટિવેટ થયેલી સાઇટ](/img/config/checkout-form-editor.png)

## શેર કરી શકાય તેવી લિંકનો ઉપયોગ કરવો:

શેર કરી શકાય તેવી લિંકનો ઉપયોગ કરીને રજિસ્ટર કરવાની પ્રક્રિયા મૂળભૂત રીતે રજિસ્ટ્રેશન ફોર્મ જેવી જ છે, ફક્ત એટલો ફરક છે કે શેર કરી શકાય તેવી લિંકનો ઉપયોગ કરીને, તમારા ગ્રાહકો checkout form પર પહેલેથી પસંદ કરેલું product અથવા website template રાખી શકે છે (URL parameters દ્વારા products અને templates પહેલેથી પસંદ કરવા વિભાગ જુઓ) અથવા કદાચ coupon code ઉમેરી શકે છે (URL Parameters નો ઉપયોગ કરવો વિભાગ જુઓ).

રજિસ્ટ્રેશન પ્રક્રિયા એ જ રહેશે: તેમણે તેમનું નામ, યુઝરનેમ, ઈમેઈલ એડ્રેસ, વેબસાઇટનું નામ અને ટાઇટલ, વગેરે ભરવાની જરૂર પડશે... પરંતુ plan અથવા site template તેમના માટે પહેલેથી જ પસંદ કરેલું હશે.

### Manual Payments નો ઉપયોગ કરીને રજિસ્ટર કરવું:

જો તમે PayPal, Stripe અથવા Ultimate Multisite અથવા તેના add-on integrations દ્વારા આપવામાં આવતી કોઈ અન્ય payment gateway નો ઉપયોગ કરવા માંગતા નથી, તો તમે તમારા ગ્રાહકો માટે manual payments નો ઉપયોગ કરી શકો છો. આ રીતે, તમે તમારા નેટવર્ક પર રજિસ્ટર થયા પછી તમારા પસંદગીના payment processor પર પેમેન્ટ કરવા માટે તેમના માટે invoice જનરેટ કરી શકો છો.

રજિસ્ટ્રેશન પ્રક્રિયા ઉપર જણાવ્યા મુજબ જ હશે, પરંતુ રજિસ્ટ્રેશન પેજ પર તમારા ગ્રાહકો એક મેસેજ જોશે જે જણાવશે કે તેમને પેમેન્ટ પૂર્ણ કરવા માટે વધુ સૂચનાઓ સાથે ઈમેઈલ મળશે.

![રજિસ્ટ્રેશન દરમિયાન Manual payment મેસેજ](/img/config/settings-payment-gateways.png)

અને રજિસ્ટ્રેશન પૂર્ણ થયા પછી, તેઓ તમે સેટ કરેલી payment instructions જોશે (અને તેમના ઈમેઈલ પર પણ મેળવશે).

![રજિસ્ટ્રેશન પછી દેખાતી Payment instructions](/img/config/settings-payment-gateways.png)

Payment instructions **Manual** payment option ચાલુ કર્યા પછી **Ultimate Multisite > Settings > Payments** માં બદલી શકાય છે:

![Payment instructions ફીલ્ડ સાથે Manual payment toggle](/img/config/settings-payment-gateways.png)

તમારા ગ્રાહકો manual payment પૂર્ણ કરે અને તમને confirmation મોકલે તે પછી, તમારે ગ્રાહકની membership અને website એક્ટિવેટ કરવા માટે **manually payment confirm** કરવાની જરૂર છે.

આ કરવા માટે, **Ultimate Multisite > Payments** પર જાઓ અને ગ્રાહકનું payment શોધો. તે હજુ પણ **Pending** status બતાવતું હોવું જોઈએ.

![Pending manual payment સાથે Payments list](/img/admin/payments-list.png)

Payment number પર ક્લિક કરો અને તમે તેનો status **Completed** માં બદલી શકશો.

![Payment details પેજ](/img/admin/payments-list.png)

![Payment status Completed માં બદલવું](/img/admin/payments-list.png)

Status **Completed** માં બદલ્યા પછી, તમે **Activate membership** મેસેજ જોશો. આ ગ્રાહક સાથે સંકળાયેલી membership અને website એક્ટિવેટ કરવા માટે આ option **on** કરો. પછી, **Save Payment** પર ક્લિક કરો.

![Activate membership toggle અને Save Payment બટન](/img/admin/payments-list.png)

તમારો ગ્રાહક હવે dashboard અને તેણે subscribe કરેલા બધા features ઍક્સેસ કરી શકશે.
