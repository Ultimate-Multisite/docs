---
title: An t-amhasadh do chuid form ríomhphoistíochta
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Aistriúchán ar formáil an t-aonráin agat

Leat a bheith an t-aonráin agat ag teacht chun éadromtacht ó chuid eile SaaS a bhailte ar platform WordPress, leannítear Ultimate Multisite go léiríonn sé go bhfuil tú ag teacht. Le linn a bheith i gcónaí, is é sin curte ábhairt ar fáil agus foirfeach chun ardánacha nua a chothabhairt, ach is é sin an t-aonráin a bhailte leat chun formáid aistriúla a chur i gcomhthéacs. Tá an curte seo ag teacht chun aistriúcháin pearsantaithe a dhéanamh. Is é seo an t-amach a chosúil go bhfuil sé ag teacht.

## Páipéad login agus aistriúchán:

Ar dtús, tar éifeachtach a chur ar fáil Ultimate Multisite, curte ábhairt login agus aistriúchán pearsanta ar an site bunaithe agat. Is féidir leat an páipéadan seo athrú amach ag cur isteach ar **Ultimate Multisite > Settings > Login & Registration**.

![Páipéad login agus aistriúchán settings](/img/config/settings-general.png)

Seo curte fada ar an páipéadan setting login agus aistriúchán:

![Páipéad login agus aistriúchán settings full page](/img/config/settings-login-registration-full.png)

Déanannám chun an curte sin a fheiceáil ar chomh maith leis an curte sin a bheith agat ar an **Login & Registration**:

  * **Enable registration (Féachaint aistriúcháin):** Is é seo an curte a leagan nó a fhágáil aistriúchán ar do ngrú. Má tá sé ag fhágáil, ní féidir leis na chuid istireacha aistriúchán a dhéanamh agus a chur i gcomhthéacs ar do guthanna.

  * **Enable email verification (Féachaint e-mail):** Má tá an curte seo ag fháil, bbeidh na chuid istireacha a bhfuil siad ag teacht le plan gréimnéis nó plan le tairgseán ag tairgseán, beidh siad ag tairgseán e-mail agus beidh siad ag iarraidh cliceáil ar an link fháil chun na websites a chur i gcomhthéacs.

* **Páirc ro fáilte (Default registration page):** Is é an cur síne ro fáilte ar an cur síne de athchrua. Caithfidh an cur síne seo bheith ag cur síne ar do websait agus phải a fáil (a bheith ag cur síne) - léiri an cur síne seo a bhfaidh do chliachta a chur i gceol ar do rialta. Is féidir leat a chur arís cur síne ro fáilte agus form cur síne (a bheith ag cur síne) mar atá ag tú, ach é a bheith agat an cur síne de athchrua ar an cur síne ro fáilte, eile níl *wp-login.php*.

* **Use custom login page:** Le túin seo leat a bheith ag úsáid cur síne cur síne (login page) a bhuaite go hiomlán, eile níl an cur síne de athchrua ar *wp-login.php*. Má tá an cur síne seo ar fáil, is féidir leat a chosaint atá a chur i gceol chun cur síne a bheith ag úsáid ar **Default login page** (ar an bhfáth ar an cur síne de athchrua).

* **Obfuscate the original login url (wp-login.php)**: Má tá tú ag iarraidh a cheart an cur síne cur síne origialt (wp-login.php) a chosaint, is féidir leat an cur síne seo ar fáil a chur ar fáil. Is é seo ag cur isteach chun athrúcháin brute-force a cheart. Má tá an cur síne seo ar fáil, beidh Ultimate Multisite ag tairiscint an cur síne 404 nuair a dhéanann cur chliachta cur síne ar an línn *wp-login.php* ar chuid na duine.

* **Force synchronous site publication:** Tar éis lá a chur i gceol do chliach ar cur síne ar chuid rialta ar net, caithfidh an cur síne nua ag athrú chun cur síne rialta réel. Tá an t-aithris cur síne seo ag cur isteach tríd Job Queue, asínron. Féach ar an cur síne seo chun a bheith ag cur síne a dhéanamh i bhfíomha is éasta le cur chliachta ar an cur síne.

Anois, léimhseadh an cur síne eile a bhfuil an t-aithris ar an cur síne agus an cur síne de athchrua ar fáil: Tá siad ar an cur síne **Other options** ar an cur síne cur síne agus an cur síne de athchrua.

* **Default role:** Is é an ról a bhfaidh do chliachta ar do websait tar éis an cur síne a chur i gceol.

* **Féachail an Jumper:** Fáilte an Jumper (Jumper) ag fáilte an gcurtaí admin. Feicfidh an Jumper na hiontaí Ultimate Multisite, obairí ngréamhchaomhairleacha agus síosanna eile a bheith ag an t-amach ar chuid deicimní gan a bheith ag iarraidh a bheith ag iarraidh a bheith ag fáilte ar chuid deicimní. Déan é off if dóchas tú go bhfuil sin áit an t-amach i bhfíneadh an curtaí admin.

* **Add users to the main site as well:** Beidh an tairgse seo ag iarraidh a bheith ag fáilte an chuid is móint a shonraithe ar an site máintireacht agat tar éis an t-amach de na iontaí. Má leagan tú an tairgse seo, beidh cur chun cinn a bheith ag fáilte an **role deart** seo ar an website atá agat ag an chuid is móint ag cur chun cinn ag cur chun cinn tar éis.

* **Enable multiple accounts:** Feicfidh na hiontaí go leor do chuidaithe i gcurtaí eile ar an chuid máintireacht agat le curte mailte amach. Má tá an t-amach seo off, ní féidir leis na chuidaithe a bheith ag curtais ar chuid deicimní eile ag cur chun cinn ar an chuid máintireacht agat le curte mailte amach.

Is é sin an curtaí a bhaineann le login agus registration a bhfuil tú féidir leat a thaispeáint! Ná bhfuisc an t-amach a shábháil tar éis a dhéanamh ar na stóirí atá agat.

## Aistriú curtaí registration go leor:

Tairgse Ultimate Multisite 2.0 ag curtaí checkout a bheith ag fáilte a bhfuil tú féidir leat a chur i bhfeidm, le feidhmeanna eile, agus curte ar fáil, is é sin an t-amach.

Tá curtaí login agus registration ag curte shortcodes: **[wu_login_form]** ar an curta login agus **[wu_checkout]** ar an curta registration. Is féidir leat an curta registration a chur i bhfeidm níos mó ag cur chun cinn checkout forms a bheith ag cur chun cinn nó a chur in bhfeidm.

Leat a fáil ar an curta seo, go dtí an curta **Checkout Forms**, ar an chuid deicimní.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Ar an curta seo, is féidir leat a fheiceáil gach curta checkout atá agat.

Má tá tú ag cur isteach nua, déan é go dtí **Add Checkout Form** ar an tairgse.

Leat é a fáilte! Beidh tú ag cur i bhfeidhm aon cheada seo mar páirt de athrúcháin. Déan sé go dtí an **Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Mar chuid eile, leat é a athrúchadh nó a dubhail na fómharí atá agat ag cur ar an t-aon cheada seo mar bhfáth. Beidh tú ag iarraidh a bheith ag cur i bhfeidhm ar na fómharí sin ag cur ar na cheadaí a leagan anois.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Má thug tú seachaint (single step) nó multi-step, beidh an fómhar de chuid cheada seo ag cur i bhfeidhm ar na cheadaí bunaithe a bheith ag eolais. Ansin, má tá tú ag iarraidh, leat é a chur i bhfeidhm extra cheadaí ar é.

### Athrúchadh an Fómhar Cheada:

Mar a dhéannta arís, leat a chur in féadh fómharí cheada ar chuid páirtí eile. I arr naois seo, beidh muid ag cur i bhfeidhm ar fómhar ríomhphoistí.

Tar é sin chun an editor fómhar cheada, déan leimear ar an fómhar (a bhrúchas a úsáidtear do chuid a bheith ag eolais anois) agus slug (a úsáidtear chun shortcodes a chur in féadh, dá réir).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Tá fómharí atá ag cheadaí agus ar chuid páirtí. Leat nua cheada a chur i bhfeidhm ag cur ar **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Ar an ábhar céanna de mo chuid window, dhéan an curthaí do cheada. Déan idirí an ID, an teann agus an curtha. Is é astain na curtha seo ag úsáidtear go ginearálach ar an t-aon cheada.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Ansin, déan an fhoireann (visibility) do cheada. Leat a bheith ag cur i bhfeidhm ar **Always show** , **Only show for logged in users** nó **Only show for guests**.

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

An de, féach an stíl na step. Is éiríseanna (optional fields) seo.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Anois, tá sé an t-am chun add fáilíocht i ar an áit ar bith. Cliom chun **Add New Field** agus déan chun an tairgseán (type of section) a bhfuil tú ag iarraidh.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Tá paraméatra eile ar chuid fáilíocht na fáilíocht. Do ardán seo, mbeidh méid **Username** (Username) ag cur chun cinn.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Is féidir leat add an gcultaí agus fáilíocht atá tú ag iarraidh. Chun a chur i seacht an t-aontúcháin do do chliachta a bhfáthfaidh siad aon cheann, usaigh an fáilíocht Pricing Table (Pricing Table) a úsáid. Má tá tú ag iarraidh a bheith leat do chliachta a chur ar chluainn (template), add an fáilíocht Template Selection (Template Selection). Agus sin agus sin.

_**Note:** Má a chur i seacht sản (product) tar éis féach an fáilíocht ar fáil, bíodh tú ag cur an sản i ar an tairgseán Pricing Table. Má níl tú é seo ag cur i seacht, ní bhfaidh an sản a bheith agat do do chliachta ar an cur chuimhne (registration page)._

_**Note 2:** Username, email, password, site title, site URL, order summary, payment, agus nút an tairgseán (submit button) is fáilíocht iadach (mandatory fields) chun fáilíocht a chur in seacht._

Agus rud éigin ag cur ar do fáilíocht, leat semper é a úsáid chun an Preview a fheiceáil conas beidh do chliachta ag fheiceáil an fáilíocht. Is féidir leat hefyd athrú idir view as an existing user (view mar chuidistí) agus visitor (visitor).

![Button Preagraithe ar foirme cheolais an chuidhe](/img/config/checkout-form-preview-button.png)![Preagraithe foirme cheolais as ghráiste nó duine a bheith ag iarraidh](/img/config/checkout-form-preview-modal.png)

Go raibh tú ag **Advanced Options** inbh, leat ormúint an meán ar na stárta ar an cur tiúch **Thank You**, add snippets chun teachtais a chur ar fáil (track conversions), add CSS a mhaith agat do foirme cheolais go hiomlán nó a chruthú éifeachtach do chontailte.

![Advanced Options le Thank You page, conversion tracking, agus CSS mhaith agat](/img/config/checkout-form-advanced.png)

Is féidir leat hefyd a chruinneáil nó a chruthú an foirme cheolais go hiomlán ag teacht ar an option seo ar an chuid uile, nó éifeachtach a dhéanamh ar na hontailte. Nóchaidh tú a bheith ag cur an t-aon seo ar foirme cheolais a bhaint ag cur an t-aon seo ar foirme cheolais.

![Togailt activ agus option de chruinneáil le foirme cheolais](/img/config/checkout-form-active.png)

Ná bhfuisc an cur tiúch an foirme cheolais!

![Button Save Checkout Form](/img/config/checkout-form-save.png)

Leat a fháil ar do shortcode, cur isteach ar **Generate Shortcode** agus coinnigh an t-aon a bhaineann ar an seomra modal.

![Modal Generate Shortcode le shortcode chun coinnigh](/img/config/checkout-form-editor.png)

_**Note:** Beidh tú ag cur an t-aon seo ar do cur tiúch registration chun an foirme cheolais seo a chomhcheangail go éifeachtach._

## Preagraithe púdacha agus templatach trí paramhaidéir URL:

Má tá tú ag iarraidh cur teachtais áitneamhaithe ar na tabhairteas a bhaineann le púdacha a bhfuil tú ag cur an t-aon seo ar foirme cheolais, nó preagraithe an púdach nó templat a bhíonn an chontailte ag iarraidh de do tabhairteas a bhaineann le púdacha nó templat a bhíonn ag iarraidh de do cur tiúch tabhairteas nó tabhairteas templat, leat a bheith ag úsáid paramhaidéir URL ar an cheolais seo.

### **Do chlána:**

Go dtí **Ultimate Multisite > Products > Select a plan**. Ba cheart tú a fheiceáil an nútair **Click to copy Shareable Link** ar an cur uile. Is é sin an link atá agat chun an plan a bhfuil tú ag preagraithe seo ar do foirme cheolais a úsáid.

![Púdach page le nútair shareable link](/img/config/products-list.png)

Nóta goint mbe an link shareable seo shamta an tairgí **Plans** an curtha. Níl féidir a bheith ag úsáid liomha shareable ar package nó ar service.

### Do chuiditeanna (templates):

Má tá tú ag iarraidh seachaint site templates ar fáil ar fómhar checkout agat, leat a bheith ag úsáid an paraméar: **?template_id=X** ar URL de do cur chuimhneacht. Ba cheart a chur an "X" go cur isteach an **núm ID site template**. Leat a fháil an cuid seo ag cur isteach, go dtí **Ultimate Multisite > Sites**.

Cliceáil ar **Manage** leathanach ar chuid site template atá tú ag úsáid. Beidh tú ag fheiceáil an n-nóm ID SITE. Use an n-nóm seo do seo-site template chun é a bheith ag cur chuimhneacht ar fómhar checkout dearmad. Ag naionán seo, beidh an paraméar URL ag bheith mar **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Le gcurchu, leat a bheith ag cur chuimhneacht ar dual product agus templates ar fómhar checkout dearmad. Is é seo an t-amach atá tú ag déanamh: tapaidh liomha shareable de **plan** agus tapaidh an paraméar template ar dheasc. Ba cheannach mar **www.mynetwork.com/register/premium-plan/?template**_id=2**.
