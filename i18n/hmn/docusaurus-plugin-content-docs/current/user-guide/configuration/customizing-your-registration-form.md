---
title: Kho Koj Daim Foos Sau Npe
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Kho koj daim Registration Form kom haum koj

Kom ua rau koj lub network zoo txawv ntawm txhua yam SaaS uas tsim rau saum WordPress platform, Ultimate Multisite tso cai rau koj kho koj cov nplooj ntawv sau npe thiab nkag mus nrog peb lub **Checkout Forms** feature.

Txawm hais tias lawv yog ib txoj kev yooj yim thiab yoog tau rau kev sim ntau hom kev thaum koj xav hloov cov neeg siv tshiab los ua customers, feem ntau lawv siv los tsim cov registration forms uas kho raws tus kheej. Kab lus no yuav qhia koj tias koj yuav ua tau li cas.

## Cov nplooj ntawv nkag mus thiab sau npe: {#login-and-registration-pages}

Thaum nruab Ultimate Multisite, nws yuav cia li tsim cov nplooj ntawv nkag mus thiab sau npe uas kho tau rau ntawm koj lub site tseem ceeb. Koj hloov tau cov nplooj ntawv pib no txhua lub sijhawm los ntawm mus rau koj nplooj ntawv **Ultimate Multisite > Settings > Login & Registration**.

![Nplooj ntawv teeb tsa Login and Registration](/img/config/settings-general.png)

Nov yog daim duab pom tag nrho ntawm nplooj ntawv teeb tsa nkag mus thiab sau npe:

![Nplooj ntawv teeb tsa Login and Registration tag nrho](/img/config/settings-login-registration-full.png)

Cia peb saib ib qho zuj zus ntawm cov kev xaiv uas koj kho tau rau ntawm nplooj ntawv **Login & Registration**:

  * **Qhib registration:** Qhov kev xaiv no yuav qhib lossis kaw kev sau npe ntawm koj lub network. Yog muab tua lawm, koj cov customers yuav sau npe tsis tau thiab subscribe tsis tau rau koj cov products.

  * **Qhib email verification:** Yog qhov kev xaiv no qhib, customers uas subscribe rau plan dawb lossis plan them nyiaj uas muaj sijhawm sim yuav tau txais email verification thiab yuav tsum nias rau verification link ces lawv cov websites mam raug tsim.

  * **Nplooj ntawv registration pib:** No yog nplooj ntawv pib rau registration. Nplooj ntawv no yuav tsum tau luam tawm rau ntawm koj lub website thiab muaj registration form (kuj hu ua checkout form) - qhov chaw uas koj cov clients yuav subscribe rau koj cov products. Koj tsim tau pes tsawg registration pages thiab checkout forms los tau raws li koj xav, tsuas nco ntsoov muab checkout form shortcode tso rau ntawm registration page, tsis li ntawd nws yuav tsis tshwm.

  * **Siv custom login page:** Qhov kev xaiv no tso cai rau koj siv ib nplooj ntawv nkag mus uas twb kho lawm, tsis yog nplooj ntawv wp-login.php pib. Yog qhov kev xaiv no qhib, koj xaiv tau nplooj ntawv twg yuav siv rau kev nkag mus hauv qhov kev xaiv **Default login page** (nyob hauv qab kiag).

  * **Nkaum tus login url qub (wp-login.php)** : Yog koj xav zais tus login URL qub, koj qhib tau qhov kev xaiv no. Qhov no pab thaiv brute-force attacks. Yog qhib qhov kev xaiv no, Ultimate Multisite yuav tso 404 error thaum tus user sim mus rau tus link wp-login.php qub

  * **Yuam kom site publication ua synchronous:** Tom qab customer subscribe rau ib product hauv ib lub network, lub site tshiab uas tseem pending yuav tsum hloov mus ua site tiag hauv network. Txoj kev publishing tshwm sim dhau Job Queue, ua asynchronously. Qhib qhov kev xaiv no kom yuam publication tshwm nyob hauv tib request li signup.

Tam sim no, cia saib lwm cov kev xaiv uas tseem cuam tshuam rau txheej txheem nkag mus thiab sau npe. Lawv nyob hauv qab **Other options** ntawm tib nplooj Login & registration:

  * **Default role:** Qhov no yog role uas koj cov customers yuav muaj ntawm lawv lub website tom qab signup process.

  * **Qhib Jumper:** Qhib Jumper shortcut hauv admin area. Jumper cia administrators dhia ceev mus rau Ultimate Multisite screens, network objects, thiab lwm yam supported destinations yam tsis tas mus tshawb txhua menu. Kaw nws yog koj xav zais lub cuab yeej quick navigation ntawd ntawm admin interface.

  * **Ntxiv users rau main site thiab:** Thaum qhib qhov kev xaiv no, nws tseem yuav ntxiv tus user rau lub main site ntawm koj lub network tom qab signup process. Yog koj qhib qhov kev xaiv no, ib qho kev xaiv los teeb **default role** rau cov users no ntawm koj lub website yuav tshwm hauv qab thiab.

  * **Qhib multiple accounts:** Tso cai rau users muaj accounts hauv ntau lub sites ntawm koj lub network nrog tib email address. Yog qhov kev xaiv no kaw, koj cov customers yuav tsim account tsis tau rau lwm cov websites uas khiav ntawm koj lub network nrog tib email address.

Thiab ntawd yog tag nrho cov kev xaiv cuam tshuam rau nkag mus thiab sau npe uas koj kho tau! Tsis txhob hnov qab khaws koj cov settings tom qab koj kho lawv tas.

## Siv ntau daim registration forms: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 muab checkout form editor uas tso cai rau koj tsim pes tsawg forms los tau raws li koj xav, nrog fields sib txawv, products uas muab rau, thiab lwm yam.

Ob nplooj login thiab registration puav leej embedded nrog shortcodes: **[wu_login_form]** rau ntawm login page thiab**[wu_checkout]** rau registration page. Koj tseem kho tau registration page ntxiv los ntawm kev tsim lossis ua checkout forms.

Kom nkag tau rau feature no, mus rau menu **Checkout Forms**, nyob ntawm sab laug side-bar.

![Checkout Forms menu hauv sidebar](/img/config/checkout-forms-list.png)

Ntawm nplooj ntawv no, koj pom tau tag nrho cov checkout forms uas koj muaj.

Yog koj xav tsim ib daim tshiab, cia li nias **Add Checkout Form** nyob saum nplooj ntawv.

Koj xaiv tau ib qho ntawm peb txoj kev xaiv no ua koj qhov pib: ib kauj ruam, ntau kauj ruam, lossis khoob. Tom qab ntawd, nias **Go to the Editor**.

![Ntxiv Checkout Form nrog single step, multi-step, lossis blank options](/img/config/checkout-forms-list.png)

Los yog, koj kho lossis duplicate tau cov forms uas koj twb muaj lawm los ntawm nias cov kev xaiv hauv qab nws lub npe. Nyob ntawd, koj tseem yuav pom cov kev xaiv los copy form’s shortcode lossis delete form.

![Checkout form hover actions nrog edit, duplicate, thiab delete](/img/config/checkout-form-hover-actions.png)

Yog koj xaiv single step lossis multi-step, daim checkout form yuav twb raug pre-populated nrog cov kauj ruam yooj yim kom nws ua haujlwm tau. Tom qab ntawd, yog koj xav, koj ntxiv tau kauj ruam ntxiv rau nws.

### Kho ib daim Checkout Form: {#editing-a-checkout-form}

Raws li peb tau hais ua ntej, koj tsim tau checkout forms rau ntau lub hom phiaj. Hauv qhov piv txwv no peb yuav ua haujlwm rau ib daim registration form.

Tom qab mus rau checkout form editor, muab ib lub npe rau koj daim form (uas yuav siv rau internal reference xwb) thiab ib slug (siv los tsim shortcakes, piv txwv).

![Tus kho daim foos them nyiaj nrog cov teb npe thiab slug](/img/config/checkout-form-name-slug.png)

Cov foos yog tsim los ntawm cov kauj ruam thiab cov teb. Koj tuaj yeem ntxiv ib kauj ruam tshiab los ntawm kev nias **Ntxiv Kauj Ruam Them Nyiaj Tshiab**.

![Khawm Ntxiv Kauj Ruam Them Nyiaj Tshiab](/img/config/checkout-form-add-step.png)

Nyob rau thawj tab ntawm lub qhov rais modal, sau cov ntsiab lus rau koj daim foos kauj ruam. Muab ib qho ID, ib lub npe thiab ib qho lus piav qhia rau nws. Cov no feem ntau siv sab hauv xwb.

![Tab cov ntsiab lus kauj ruam them nyiaj nrog ID, npe, thiab lus piav qhia](/img/config/checkout-form-step-content.png)

Tom ntej no, teeb qhov pom tau ntawm kauj ruam ntawd. Koj tuaj yeem xaiv ntawm **Qhia tas li** , **Tsuas qhia rau cov neeg siv uas twb nkag rau hauv lawm** lossis **Tsuas qhia rau cov qhua**.

![Cov kev xaiv pom tau rau kauj ruam them nyiaj](/img/config/checkout-form-step-visibility.png)

Thaum kawg, teeb tus qauv style rau kauj ruam ntawd. Cov teb no yog xaiv tau.

![Kev teeb tsa style rau kauj ruam them nyiaj](/img/config/checkout-form-step-style.png)

Tam sim no, txog sijhawm ntxiv cov teb rau peb thawj kauj ruam. Tsuas nias **Ntxiv Teb Tshiab** thiab xaiv hom ntu uas koj xav tau.

![Khawm Ntxiv Teb Tshiab](/img/config/checkout-form-add-field-button.png)![Dropdown xaiv hom teb](/img/config/checkout-form-field-type-dropdown.png)

Txhua teb muaj cov parameter sib txawv uas yuav tsum sau. Rau thawj qhov nkag no, peb yuav xaiv teb **Username**.

![Kev teeb tsa teb Username](/img/config/checkout-form-username-content.png)![Cov parameter ntawm teb Username](/img/config/checkout-form-username-visibility.png)![Cov chaw teeb ntxiv rau teb Username](/img/config/checkout-form-username-style.png)

Koj tuaj yeem ntxiv ntau kauj ruam thiab ntau teb raws li koj xav tau. Txhawm rau qhia koj cov khoom rau koj cov neeg yuav khoom xaiv ib qho, siv teb Daim Rooj Teev Nqi. Yog koj xav cia koj cov neeg siv xaiv ib qho qauv, ntxiv teb Kev Xaiv Qauv. Thiab lwm yam ntxiv.

![Tus kho daim foos them nyiaj nrog teb xaiv qauv](/img/config/checkout-form-with-template-field.png)

_**Nco tseg:** Yog koj tsim ib yam khoom tom qab tsim koj daim foos them nyiaj, koj yuav tsum ntxiv yam khoom ntawd rau hauv ntu Daim rooj teev nqi. Yog koj tsis ntxiv nws, yam khoom ntawd yuav tsis tshwm rau koj cov neeg yuav khoom ntawm nplooj ntawv sau npe._

_**Nco tseg 2:** username, email, password, lub npe vev xaib, site URL, cov ntsiab lus xaj, kev them nyiaj, thiab khawm xa yog cov teb yuav tsum muaj los tsim ib daim foos them nyiaj._

Thaum koj tab tom ua haujlwm rau koj daim foos them nyiaj, koj yeej siv tau khawm Saib Ua Ntej txhua lub sijhawm kom pom tias koj cov neeg siv yuav pom daim foos li cas. Koj kuj tseem hloov tau ntawm kev saib raws li tus neeg siv uas twb muaj lawm lossis ib tug qhua.

![Khawm Saib Ua Ntej ntawm tus kho daim foos them nyiaj](/img/config/checkout-form-preview-button.png)![Saib ua ntej daim foos them nyiaj raws li qhua lossis tus neeg siv uas twb muaj lawm](/img/config/checkout-form-preview-modal.png)

Thaum kawg, nyob rau **Cov Kev Xaiv Qib Siab** koj tuaj yeem teeb cov lus rau nplooj ntawv **Ua Tsaug**, ntxiv snippets los taug qab conversions, ntxiv CSS uas koj kho rau koj daim foos them nyiaj lossis txwv nws rau qee lub teb chaws.

![Cov Kev Xaiv Qib Siab nrog nplooj ntawv Ua Tsaug, kev taug qab conversion, thiab CSS kho](/img/config/checkout-form-advanced.png)

Koj kuj tuaj yeem qhib lossis tua koj daim foos them nyiaj manually los ntawm kev toggle qhov kev xaiv no ntawm kem sab xis, lossis rho tawm daim foos mus tas li.

![Toggle qhib thiab kev xaiv rho tawm rau daim foos them nyiaj](/img/config/checkout-form-active.png)

Tsis txhob hnov qab khaws koj daim foos them nyiaj!

![Khawm Khaws Daim Foos Them Nyiaj](/img/config/checkout-form-save.png)

Txhawm rau tau koj daim foos shortcode nias **Tsim Shortcode** thiab luam qhov tshwm sim uas qhia hauv lub qhov rais modal.

![Modal Tsim Shortcode nrog shortcode los luam](/img/config/checkout-form-editor.png)

_**Nco tseg:** Koj yuav tsum ntxiv shortcode no rau koj nplooj ntawv sau npe kom daim foos them nyiaj no thiaj raug ntxiv rau hauv nws._

## Xaiv cov khoom thiab cov qauv ua ntej los ntawm URL parameters: {#pre-selecting-products-and-templates-via-url-parameters}

Yog koj xav tsim cov daim rooj teev nqi uas kho tshwj xeeb rau koj cov khoom thiab xaiv ua ntej hauv daim foos them nyiaj yam khoom lossis qauv uas koj tus neeg yuav khoom xaiv ntawm koj daim rooj teev nqi lossis nplooj ntawv cov qauv, koj tuaj yeem siv URL parameters rau qhov no.

### **Rau cov pob npaj:** {#for-plans}

Mus rau **Ultimate Multisite > Cov Khoom > Xaiv ib pob npaj**. Koj yuav tsum pom khawm **Nias los luam Shareable Link** nyob rau saum nplooj ntawv. Qhov no yog qhov link uas koj siv tau los xaiv ua ntej pob npaj tshwj xeeb no hauv koj daim foos them nyiaj.

![Nplooj ntawv khoom nrog khawm shareable link](/img/config/products-list.png)

Nco ntsoov tias shareable link no tsuas siv tau rau **Cov Pob Npaj** xwb. Koj siv tsis tau shareable links rau cov packages lossis services.

### Rau cov qauv: {#for-templates}

Yog koj xav xaiv cov qauv vev xaib ua ntej hauv koj daim foos them nyiaj, koj tuaj yeem siv parameter: **?template_id=X** ntawm koj nplooj ntawv sau npe URL. Tus "X" yuav tsum hloov nrog **tus lej ID ntawm qauv vev xaib**. Txhawm rau tau tus lej no, mus rau **Ultimate Multisite > Cov Vev Xaib**.

Nias **Tswj** nyob ncaj hauv qab tus qauv vev xaib uas koj xav siv. Koj yuav pom tus lej SITE ID. Tsuas siv tus lej no rau tus qauv vev xaib tshwj xeeb no kom raug xaiv ua ntej hauv koj daim foos them nyiaj. Hauv peb qhov piv txwv ntawm no, URL parameter yuav yog **?template_id=2**.

![Daim ntawv teev cov vev xaib uas qhia ID ntawm qauv vev xaib](/img/config/site-templates-list.png)

Cia hais tias peb lub vev xaib network yog [**www.mynetwork.com**](http://www.mynetwork.com) thiab peb nplooj ntawv sau npe nrog peb daim foos them nyiaj nyob rau ntawm nplooj ntawv **/register**. Tag nrho URL nrog tus qauv vev xaib no raug xaiv ua ntej yuav zoo li [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Thiab yog koj xav tau, koj tuaj yeem xaiv ua ntej tib si cov khoom thiab cov qauv rau koj daim foos them nyiaj. Yam koj yuav tsum ua yog luam shareable link ntawm pob npaj thiab muab template parameter lo rau thaum kawg. Nws yuav zoo li [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
