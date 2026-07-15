---
title: Ho Lefshoa
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Ho Lefshoa (v2)

_**TLHOKOMELISO EA BOHLOKOA: Sengoloa sena se bua ka Ultimate Multisite mofuta oa 2.x.**_

Ultimate Multisite e na le tsamaiso ea botho le tefiso e hahiloeng kahare. Hore tsamaiso ea rona ea tefiso e sebetse, re kopantse liheke tsa tefo tse tloaelehileng haholo tse sebelisoang khoebong ea inthanete. Liheke tsa tefo tsa kamehla ho Ultimate Multisite ke _Stripe_ , _PayPal_ , le Tefo ea Matsoho. U ka boela ua sebelisa _WooCommerce_ , _GoCardless_ le _Payfast_ ho amohela litefo ka ho kenya add-ons tsa tsona tse amehang.

## Litlhophiso tsa Motheo {#basic-settings}

U ka lokisa efe kapa efe ea liheke tsena tsa tefo tlasa litlhophiso tsa tefo tsa Ultimate Multisite. U ka e fumana ka ho ea ho **Ultimate Multisite menu > Settings > Payments.**

![Leqephe la litlhophiso tsa Payments ho Ultimate Multisite le bontšang phanele ea Payments](/img/config/payments-settings-page.png)

Pele u hloma heke ea hao ea tefo, ka kopo sheba litlhophiso tsa motheo tsa tefo tseo u ka li lokisang:

**Qobella nchafatso ea boikets** **o:** Sena se tla netefatsa hore tefo e tla ipheta ka bo eona qetellong ea potoloho e ’ngoe le e ’ngoe ea tefiso ho latela khafetsa ea tefiso eo mosebelisi a e khethileng.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 e hlahloba hore na heke e sebetsang e na le bopaki ba nchafatso bo ka sebelisoang hape pele e boloka botho bo iphetang bo nang le nchafatso ea boiketso e lumelletsoeng. Bopaki ba nchafatso e ka ba peeletso ea heke, tumellano ea tefiso, vault token e bolokiloeng, kapa mokhoa o tšoanang oa tefo o ka sebelisoang hape. Haeba heke e tlaleha hore ha ho bopaki bo ka sebelisoang bo teng, Ultimate Multisite e boloka botho empa e tima nchafatso ea boiketso ’me e rekota boemo ba bopaki bo sieo e le hore motsamaisi kapa phallo ea tšehetso e ka kopa moreki ho fana ka tumello hape ea tefo pele ho letsatsi la nchafatso.

Sena se thibela botho hore bo bonahale eka bo inchafatsa ka bo bona ha heke e ka bokella feela litefo tsa hanngoe. Gateway add-ons li lokela ho netefatsa hore li-checkout tse iphetang li boloka bopaki bo ka sebelisoang hape, haholo ha heke e tšehetsa bobeli mekhoa ea tefo ea ho nka tefo hanngoe le ea vaulted/subscription.

**Lumella liteko ntle le mokhoa oa tef** **o:** Ha khetho ena e lumelletsoe, client ea hao a ke ke a tlameha ho kenya tlhahisoleseling efe kapa efe ea lichelete nakong ea ts'ebetso ea ngoliso. Sena se tla hlokahala feela hang ha nako ea teko e fela.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Romela invoice ha tefo e netefatsoa:** Sena se u fa khetho ea hore na u romele invoice kapa che ka mor’a tefo. Hlokomela hore basebelisi ba tla ba le phihlello historing ea bona ea tefo tlasa Dashboard ea subsite ea bona. Khetho ena ha e sebetse ho Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Moralo oa dinomoro tsa invoice:** Mona, u ka khetha kapa khoutu ea tšupiso ea tefo kapa moralo oa nomoro e latellanang. Haeba u khetha ho sebelisa khoutu ea tšupiso ea tefo bakeng sa li-invoice tsa hao, ha ho hlokahale hore u lokise letho. Haeba u khetha ho sebelisa moralo oa nomoro e latellanang, u tla hloka ho lokisa **nomoro e latelang ea invoice** (Nomoro ena e tla sebelisoa e le nomoro ea invoice bakeng sa invoice e latelang e hlahisoang tsamaisong. E eketsoa ka e le ’ngoe nako le nako ha invoice e ncha e etsoa. U ka e fetola ’me ua e boloka ho seta bocha nomoro e latellanang ea invoice ho boleng bo itseng) le **sehlongwapele sa nomoro ea invoice.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Moo u ka fumanang liheke: {#where-to-find-the-gateways}

U ka hloma liheke tsa tefo leqepheng le tšoanang ( **Ultimate Multisite > Settings > Payments**). Hantle ka tlasa **liheke tsa tefo tse sebetsang** , u tla khona ho bona: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ le _Manual_.

![Karolo ea Active Payment Gateways e thathamisang Stripe, Stripe Checkout, PayPal le Manual](/img/config/payments-active-gateways.png)

Re na le sengoloa se khethehileng bakeng sa heke e ’ngoe le e ’ngoe ea tefo se tla u tataisa mehato ea ho e hloma, seo u ka se fumanang lihokelong tse ka tlase.

U ka sheba le ho hlophisa lintlha tsa tefo:

![Sehokelo sa ho hlophisa tefo](/img/admin/payment-edit.png)

Mona ke pono e feletseng ea leqephe la ho hlophisa tefo:

![Sehokelo se feletseng sa ho hlophisa tefo](/img/admin/payment-edit-full.png)

Mona hape ke pono e feletseng ea litlhophiso tsa liheke tsa tefo:

![Leqephe le feletseng la litlhophiso tsa liheke tsa tefo](/img/config/settings-payments-gateways-full.png)

**Ho hloma heke ea Stripe**

**Ho hloma heke ea PayPal**** **

**Ho hloma litefo tsa matsoho**

Joale, haeba u batla ho sebelisa _WooCommerce_ , _GoCardless_ kapa _Payfast_ e le heke ea hao ea tefo, u tla hloka ho **kenya le ho lokisa add-ons tsa tsona**.

### Mokhoa oa ho kenya WooCommerce add-on: {#how-to-install-the-woocommerce-add-on}

Re utloisisa hore _Stripe_ le _PayPal_ ha li fumanehe linaheng tse ling, e leng se lekanyetsang kapa se sitisang basebelisi ba Ultimate Multisite ho sebelisa plugin ea rona ka katleho. Kahoo re thehile add-on ho kopanya _WooCommerce,_ e leng plugin e tsebahalang haholo ea khoebo ea inthanete. Developers lefatšeng ka bophara ba thehile add-ons ho kopanya liheke tse fapaneng tsa tefo ho eona. Re sebelisitse monyetla ona ho atolosa liheke tsa tefo tseo u ka li sebelisang le tsamaiso ea tefiso ea Ultimate Multisite.

_**BOHLOKOA:** Ultimate Multisite: WooCommerce Integration e hloka hore WooCommerce e be e kentsoe tšebetsong bonyane ho site ea hao e kholo._

Pele, ka kopo e-ea leqepheng la add-ons. U ka le fumana ka ho ea ho **Ultimate Multisite > Settings**. U lokela ho bona tafole ea **Add-ons**. Tobetsa ho **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Ka mor’a ho tobetsa ho **Check our Add-ons** , u tla fetisetsoa leqepheng la add-ons. Mona u ka fumana add-ons tsohle tsa Ultimate Multisite. Tobetsa ho add-on ea **Ultimate Multisite: WooCommerce Integration**.

![Leqephe la add-ons le thathamisang add-ons tsa Ultimate Multisite ho kenyeletsa WooCommerce Integration](/img/addons/addons-page.png)

Fensetere e tla hlaha ka dintlha tsa tlatsetso. Tobetsa feela ho **Kenya Hona Jwale**.

<!-- Setshwantsho ha se fumanehe: puisano ya dintlha tsa tlatsetso ya Ultimate Multisite WooCommerce Integration e nang le konopo ya Kenya Hona Jwale -->

Kamora hore ho kenya ho phethoe, o tla fetisetswa leqepheng la dikenyelletso. Mona, tobetsa feela ho **Kenya Tshebetsong ho Netweke** mme tlatsetso ya WooCommerce e tla kenngwa tshebetsong netwekeng ya hao.

<!-- Setshwantsho ha se fumanehe: Leqephe la dikenyelletso le nang le sehokelo sa Kenya Tshebetsong ho Netweke bakeng sa tlatsetso ya WooCommerce Integration -->

Kamora ho e kenya tshebetsong, haeba o ntse o sena plugin ya WooCommerce e kentsweng le ho kenngwa tshebetsong websaeteng ya hao, o tla fumana kgopotso.

<!-- Setshwantsho ha se fumanehe: Tsebiso ya motsamaisi e hopotsang motsamaisi ho kenya le ho kenya tshebetsong plugin ya WooCommerce -->

Ho bala haholwanyane ka tlatsetso ya WooCommerce Integration, **tobetsa mona**.

### Mokgwa wa ho kenya tlatsetso ya GoCardless: {#how-to-install-the-gocardless-add-on}

Mehato ya ho kenya tlatsetso ya _GoCardless_ e batla e tshwana hantle le ya tlatsetso ya _WooCommerce_. Ka kopo eya leqepheng la ditlatsetso mme o kgethe tlatsetso ya **Ultimate Multisite: GoCardless Gateway**.

<!-- Setshwantsho ha se fumanehe: Leqephe la ditlatsetso le nang le tlatsetso ya Ultimate Multisite GoCardless Gateway e totobaditsweng -->

Fensetere ya tlatsetso e tla hlaha. Tobetsa ho **Kenya Hona Jwale**.

<!-- Setshwantsho ha se fumanehe: puisano ya dintlha tsa tlatsetso ya Ultimate Multisite GoCardless Gateway e nang le konopo ya Kenya Hona Jwale -->

Kamora hore ho kenya ho phethoe, o tla fetisetswa leqepheng la dikenyelletso. Mona, tobetsa feela ho **Kenya Tshebetsong ho Netweke** mme tlatsetso ya _GoCardless_ e tla kenngwa tshebetsong netwekeng ya hao.

<!-- Setshwantsho ha se fumanehe: Leqephe la dikenyelletso le nang le sehokelo sa Kenya Tshebetsong ho Netweke bakeng sa tlatsetso ya GoCardless Gateway -->

Ho ithuta hore na o ka qala jwang ka gateway ya _GoCardless_, **bala sengolwa sena**.

### Mokgwa wa ho kenya tlatsetso ya Payfast: {#how-to-install-the-payfast-add-on}

Eya leqepheng la ditlatsetso mme o kgethe tlatsetso ya **Ultimate Multisite: Payfast Gateway**.

<!-- Setshwantsho ha se fumanehe: Leqephe la ditlatsetso le nang le tlatsetso ya Ultimate Multisite Payfast Gateway e totobaditsweng -->

Fensetere ya tlatsetso e tla hlaha. Tobetsa ho **Kenya Hona Jwale.**

<!-- Setshwantsho ha se fumanehe: puisano ya dintlha tsa tlatsetso ya Ultimate Multisite Payfast Gateway e nang le konopo ya Kenya Hona Jwale -->

Kamora hore ho kenya ho phethoe, o tla fetisetswa leqepheng la dikenyelletso. Mona, tobetsa feela ho **Kenya Tshebetsong ho Netweke** mme tlatsetso ya _Payfast_ e tla kenngwa tshebetsong netwekeng ya hao.

<!-- Setshwantsho ha se fumanehe: Leqephe la dikenyelletso le nang le sehokelo sa Kenya Tshebetsong ho Netweke bakeng sa tlatsetso ya Payfast Gateway -->
