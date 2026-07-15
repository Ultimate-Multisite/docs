---
title: 'પાઠ ૬: નોંધણીનો અનુભવ'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lesson 6: The Signup Experience

ચેકઆઉટ ફ્લો એ જગ્યા છે જ્યાં રસ આવક (revenue) માં ફેરવાય છે. જો સાઇનઅપ પ્રક્રિયા ગૂંચવણભરી કે સામાન્ય હશે, તો ગ્રાહકો દૂર થઈ જશે. એક ચોક્કસ ક્ષેત્ર આધારિત (niche-specific) ફ્લો જે તેમની ભાષા બોલે અને સરળ લાગે, તે ગ્રાહકોને કન્વર્ટ કરે છે.

## Where We Left Off {#where-we-left-off}

FitSite માં ટેમ્પલેટ્સ અને પ્લાન સેટઅપ થઈ ગયા છે. હવે આપણે રજીસ્ટ્રેશન અને ચેકઆઉટ અનુભવ બનાવીશું, જે ફિટનેસ સ્ટુડિયો માલિકોને ચૂકવણી કરનારા ગ્રાહકોમાં ફેરવશે.

## Understanding the Registration Flow {#understanding-the-registration-flow}

Ultimate Multisite ના ચેકઆઉટ ફોર્મ સંપૂર્ણપણે કસ્ટમાઇઝ કરી શકાય તેવા મલ્ટી-સ્ટેપ ફોર્મ છે. FitSite માટે, આપણે એક એવો ફ્લો જોઈએ છે જે:

1. ફિટનેસ વ્યવસાયો માટે બનેલો લાગે
2. ફક્ત જરૂરી માહિતી જ એકત્રિત કરે
3. ગ્રાહકને શક્ય તેટલી ઝડપથી કામ કરતા સાઇટ પર પહોંચાડે

સંપૂર્ણ ટેકનિકલ સંદર્ભ માટે [The Registration Flow](/user-guide/configuration/the-registration-flow) જુઓ.

## Designing the FitSite Checkout {#designing-the-fitsite-checkout}

**Ultimate Multisite > Checkout Forms** પર જાઓ અને એક નવું ફોર્મ બનાવો.

### Step 1: Plan Selection {#step-1-plan-selection}

ફિટનેસ સ્ટુડિયો માલિકને સૌથી પહેલા પ્લાન દેખાય તે જરૂરી છે, અને તે એવા શબ્દોમાં રજૂ થવા જોઈએ જે તેઓ સમજે.

- એક **Pricing Table** ફીલ્ડ ઉમેરો
- તેને બધા ત્રણ FitSite પ્લાન બતાવવા માટે configure કરો
- જે પ્લાન વર્ણન તમે Lesson 5 માં લખ્યું હતું તે અહીં દેખાશે — ખાતરી કરો કે તે ફિટનેસ વ્યવસાયની જરૂરિયાતો વિશે વાત કરે, ન કે માત્ર ટેકનિકલ ફીચર્સ વિશે.

:::tip Niche Language Matters
"1 GB storage" એ Gym ના માલિક માટે કંઈ નથી. "તમારા પ્રોફેશનલ સ્ટુડિયો વેબસાઇટ માટે જરૂરી બધું" એ બધું છે. તમારા ગ્રાહકના ભાષામાં પ્લાનનું વર્ણન લખો.
:::

### Step 2: Template Selection {#step-2-template-selection}

પ્લાન પસંદ કર્યા પછી, ગ્રાહક પોતાનું સ્ટાર્ટિંગ ટેમ્પલેટ પસંદ કરે છે.

- એક **Template Selection** ફીલ્ડ ઉમેરો
- ઉપલબ્ધ ટેમ્પલેટ્સ જે પ્લાન પસંદ કરવામાં આવ્યો છે તેના દ્વારા ફિલ્ટર થાય છે (જે Lesson 5 માં configure કર્યું હતું)
- દરેક ટેમ્પલેટમાં એક પ્રિવ્યૂ ઇમેજ હોવી જોઈએ જે ફિટનેસ-વિશિષ્ટ ડિઝાઇન બતાવે.

### Step 3: Account Creation {#step-3-account-creation}

આને ઓછામાં ઓછું રાખો. ફક્ત આ એકત્રિત કરો:

- Email address
- Password
- Studio/business name (આ તેમનું સાઇટ નામ બનશે)

સાઇનઅપ વખતે જે માહિતીની જરૂર નથી તે ન પૂછો. દરેક વધારાનું ફીલ્ડ કન્વર્ઝનને ઘટાડે છે.

### Step 4: Site Setup {#step-4-site-setup}

- **Site title**: Step 3 માં દાખલ કરેલા સ્ટુડિયોના નામમાંથી આપમેળે ભરો (Pre-fill)
- **Site URL**: સ્ટુડિયોના નામમાંથી આપમેળે જનરેટ કરો (દા.ત., `ironworks.fitsite.com`)

### Step 5: Payment {#step-5-payment}

- **Payment** ફીલ્ડ ઉમેરો
- તમારા પેમેન્ટ ગેટવેને configure કરો ([Stripe](/user-guide/payment-gateways/stripe) સબ્સ્ક્રિપ્શન બિલિંગ માટે ભલામણ કરવામાં આવે છે)
- જો તમે Lesson 5 માં ઓર્ડર બમ્પ્સ (order bumps) બનાવ્યા હોય, તો પેમેન્ટ સ્ટેપ પહેલા એક **Order Bump** ફીલ્ડ ઉમેરો.

### Step 6: Confirmation {#step-6-confirmation}

- ફિટનેસ-વિશિષ્ટ ભાષા સાથે કન્ફર્મેશન મેસેજને કસ્ટમાઇઝ કરો.
- ઉદાહરણ: "તમારી ફિટનેસ સ્ટુડિયો વેબસાઇટ બની રહી છે. થોડી સેકન્ડમાં તમને તમારી નવી સાઇટ પર રીડાયરેક્ટ કરવામાં આવશે."

## Adding a Period Selection Toggle {#adding-a-period-selection-toggle}

જો તમે તમારા પ્લાનમાં પ્રાઇસ વેરીએશન્સ (માસિક વિરુદ્ધ વાર્ષિક) સેટ કર્યા હોય, તો ચેકઆઉટ ફોર્મમાં એક **Period Selection** ફીલ્ડ ઉમેરો જેથી ગ્રાહકો બિલિંગ સમયગાળા વચ્ચે ટૉગલ કરી શકે. સૂચનાઓ માટે [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) જુઓ.

## Configuring Payment {#configuring-payment}

જો તમે હજી સુધી કોઈ પેમેન્ટ ગેટવે સેટ કર્યો નથી:

1. **Ultimate Multisite > Settings > Payment Gateways** પર જાઓ.
2. [Stripe setup guide](/user-guide/payment-gateways/stripe) અથવા તમારા પસંદ કરેલા ગેટવેને અનુસરો.
3. ટેસ્ટ પેમેન્ટ સાથે સંપૂર્ણ ચેકઆઉટ ફ્લોનું પરીક્ષણ કરો.

પેમેન્ટ તમારા એકાઉન્ટમાં કેવી રીતે ફરે છે તેની વિગતો માટે [Getting Paid](/user-guide/payment-gateways/getting-paid) જુઓ.

## Testing the Flow {#testing-the-flow}

આગળ વધતા પહેલા, એક સંપૂર્ણ ટેસ્ટ સાઇનઅપ પૂર્ણ કરો:

1. એક incognito/private બ્રાઉઝર વિન્ડોમાં ચેકઆઉટ ફોર્મ ખોલો.
2. એક પ્લાન પસંદ કરો.
3. એક ટેમ્પલેટ પસંદ કરો.
4. એક એકાઉન્ટ બનાવો.
5. પેમેન્ટ પૂર્ણ કરો (ટેસ્ટ મોડનો ઉપયોગ કરો).
6. ચકાસો કે સાઇટ યોગ્ય ટેમ્પલેટ સાથે બની છે.

તપાસો કે:

- [ ] પ્લાનનું વર્ણન સ્પષ્ટ અને ચોક્કસ ક્ષેત્ર આધારિત છે.
- [ ] ટેમ્પલેટ પ્રિવ્યૂ ફિટનેસ-યોગ્ય ડિઝાઇન બતાવે છે.
- [ ] સાઇટ URL સ્ટુડિયોના નામમાંથી યોગ્ય રીતે જનરેટ થાય છે.
- [ ] પેમેન્ટ સફળતાપૂર્વક પ્રક્રિયા થાય છે.
- [ ] ગ્રાહક પસંદ કરેલા ટેમ્પલેટ સાથે કામ કરતા સાઇટ પર પહોંચે છે.
- [ ] કન્ફર્મેશન ઈમેલ ફિટનેસ-વિશિષ્ટ ભાષાનો ઉપયોગ કરે છે.

## The FitSite Network So Far {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## What We Built This Lesson {#what-we-built-this-lesson}

- ફિટનેસ સ્ટુડિયો માલિકો માટે તૈયાર કરેલું **મલ્ટી-સ્ટેપ ચેકઆઉટ ફોર્મ**
- સાઇનઅપ ફ્લોમાં **ચોક્કસ ક્ષેત્ર આધારિત ભાષા**
- **ઓછો અવરોધ** — ફક્ત આવશ્યક ફીલ્ડ્સ, કામ કરતા સાઇટ સુધી ઝડપી માર્ગ
- ટેસ્ટ વેરિફિકેશન સાથે **પેમેન્ટ ઇન્ટિગ્રેશન**
- પ્લાન પસંદગીથી કામ કરતા સાઇટ સુધીનો **પરીક્ષિત end-to-end ફ્લો**

---

**Next:** [Lesson 7: Making It Yours](lesson-7-branding) — આપણે પ્લેટફોર્મને white-label કરીશું અને FitSite ને એક બ્રાન્ડ તરીકે સ્થાપિત કરીશું.
