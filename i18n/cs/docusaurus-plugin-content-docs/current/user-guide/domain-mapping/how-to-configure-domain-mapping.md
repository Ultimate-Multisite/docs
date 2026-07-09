---
title: Jak nakonfigurovat mapování domén
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Jak nakonfigurovat mapování domén (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se týká Ultimate Multisite verze 2.x.**_

Jednou z nejvýkonnějších funkcí prémiové sítě je možnost nabídnout našim klientům připojení domény nejvyšší úrovně k jejich webům. Koneckonců, co vypadá profesionálněji: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) nebo [_**joesbikeshop.com**_](http://joesbikeshop.com)? Proto Ultimate Multisite nabízí tuto funkci vestavěnou, bez nutnosti používat pluginy třetích stran.

## Co je mapování domén?

Jak název napovídá, mapování domén je schopnost, kterou Ultimate Multisite nabízí: přijmout požadavek na vlastní doménu a namapovat tento požadavek na odpovídající web v síti, ke kterému je tato konkrétní doména připojena.

### Jak nastavit mapování domén ve vaší Ultimate Multisite Network

Mapování domén vyžaduje určité nastavení z vaší strany, aby fungovalo. Naštěstí Ultimate Multisite automatizuje těžkou práci za vás, takže můžete požadavky snadno splnit.

Během instalace Ultimate Multisite průvodce automaticky zkopíruje a nainstaluje **sunrise.php** do určené složky. **Průvodce vám nedovolí pokračovat, dokud tento krok nebude dokončen**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

To znamená, že jakmile instalační průvodce Ultimate Multisite dokončí nastavení vaší sítě, můžete okamžitě začít mapovat vlastní doménu.

Všimněte si, že mapování domén v Ultimate Multisite není povinné. Máte možnost použít nativní funkci mapování domén WordPress Multisite nebo jakékoli jiné řešení mapování domén.

Pokud potřebujete vypnout mapování domén Ultimate Multisite, abyste uvolnili místo jiným řešením mapování domén, můžete tuto funkci vypnout v části **Ultimate Multisite > Settings > Domain Mapping**.

![Stránka nastavení mapování domén zobrazující přesměrování administrace, zprávu mapování a možnosti DNS](/img/config/domain-mapping-settings.png)

Přímo pod touto možností můžete také vidět možnost **Force Admin Redirect**. Tato možnost vám umožňuje řídit, zda vaši zákazníci budou mít přístup ke svému administračnímu Dashboard jak na vlastní doméně a subdoméně, nebo pouze na jedné z nich.

Pokud vyberete **Force redirect to mapped domain** , vaši zákazníci budou mít přístup ke svému administračnímu Dashboard pouze na svých vlastních doménách.

Možnost **Force redirect to** **network domain** udělá přesný opak – vaši zákazníci budou mít povolený přístup ke svým Dashboardům pouze na své subdoméně, i když se pokusí přihlásit na svých vlastních doménách.

A možnost **Allow access to the admin by both mapped domain domain and network domain** jim umožňuje přístup k jejich administračním Dashboardům jak na subdoméně, tak na vlastní doméně.

![Rozbalovací nabídka Admin Redirect zobrazující tři možnosti přesměrování](/img/config/domain-mapping-redirect-options.png)

Existují dva způsoby, jak namapovat vlastní doménu. První je mapování názvu domény z administračního Dashboardu vaší sítě jako super admin a druhý je přes administrační Dashboard dílčího webu na stránce Account.

Než ale začnete mapovat vlastní doménu na jeden z dílčích webů ve vaší síti, budete se muset ujistit, že **nastavení DNS** názvu domény je správně nakonfigurováno.

###

### Ujistěte se, že nastavení DNS domény je správně nakonfigurováno

Aby mapování fungovalo, musíte se ujistit, že doména, kterou plánujete namapovat, směřuje na IP adresu vaší sítě. Všimněte si, že potřebujete IP adresu sítě – IP adresu domény, kde je nainstalován Ultimate Multisite – nikoli IP adresu vlastní domény, kterou chcete namapovat. Pro vyhledání IP adresy konkrétní domény doporučujeme například přejít na [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

Pro správné namapování domény musíte ve své konfiguraci **DNS** přidat **A RECORD**, který směřuje na tuto **IP adresu**. Správa DNS se mezi různými registrátory domén výrazně liší, ale online je spousta návodů, které se tomu věnují, pokud vyhledáte „ _Creating A Record on XXXX_ “, kde XXXX je váš registrátor domény (např.: „ _Creating A Record on_ _GoDaddy_ “).

Pokud budete mít potíže to zprovoznit, **kontaktujte podporu svého registrátora domény** a ta vám s touto částí pomůže.

Pokud plánujete umožnit svým klientům mapovat vlastní domény, budou si tuto část muset udělat sami. Pokud nebudou schopni vytvořit A Record, nasměrujte je na systém podpory jejich registrátora.

### Mapování vlastního názvu domény jako Super Admin

Když jste ve své síti přihlášeni jako super admin, můžete snadno přidávat a spravovat vlastní názvy domén tím, že přejdete do části **Ultimate Multisite > Domains**.

![Stránka seznamu domén v Ultimate Multisite](/img/admin/domains-list.png)

Na této stránce můžete nahoře kliknout na tlačítko **Add Domain** a tím se otevře modální okno, kde můžete nastavit a vyplnit **vlastní název domény** , **dílčí web**, na který chcete vlastní název domény použít, a rozhodnout, zda jej chcete nastavit jako **primární název domény**, nebo ne (všimněte si, že můžete namapovat **více názvů domén na jeden dílčí web**).

![Modální okno Add Domain s názvem domény, výběrem webu a přepínačem primární domény](/img/admin/domain-add-modal.png)

Po zadání všech informací můžete dole kliknout na tlačítko **Add Existing Domain**.

Tím se spustí proces ověření a načtení informací DNS vlastní domény. Ve spodní části stránky také uvidíte protokol, ve kterém můžete sledovat probíhající proces. Dokončení tohoto procesu může trvat několik minut.

Ultimate Multisite v2.13.0 také automaticky vytvoří interní doménový záznam při vytvoření nového webu na hostiteli, který má být považován za doménu pro konkrétní web. Pokud je hostitelem primární doména sítě nebo jedna ze sdílených základních domén formuláře pokladny nakonfigurovaných v poli **Site URL**, automatický záznam mapované domény se přeskočí, aby tato sdílená základní doména zůstala dostupná každému webu, který ji používá.

Když si zákazník zaregistruje novou doménu prostřednictvím Domain Seller v1.3.0 nebo novější, Ultimate Multisite ve výchozím nastavení automaticky namapuje registrovanou doménu na zákazníkův síťový web. Administrátoři už po úspěšné registraci nemusí přidávat samostatný záznam mapované domény, pokud nechtějí upravit možnosti, jako je příznak primární domény, stav aktivace nebo zpracování SSL.

**Fáze** nebo stav by se měl změnit z **Kontrola DNS** na **Připraveno**, pokud je vše správně nastaveno.

<!-- Snímek obrazovky není dostupný: Řádek domény zobrazující fázi Kontrola DNS v seznamu domén -->

<!-- Snímek obrazovky není dostupný: Řádek domény zobrazující fázi Připraveno se zeleným indikátorem stavu -->

Pokud kliknete na název domény, uvidíte v ní několik možností. Pojďme se na ně rychle podívat:

![Stránka detailu domény s přepínači fáze, webu, aktivního stavu, primární domény a SSL](/img/admin/domain-edit.png)

**Fáze:** Toto je fáze, ve které se doména nachází. Když doménu poprvé přidáte, pravděpodobně bude ve fázi **Kontrola DNS**. Proces zkontroluje záznamy DNS a potvrdí, že jsou správné. Poté bude doména přesunuta do fáze **Kontrola SSL**. Ultimate Multisite zkontroluje, zda doména má SSL, nebo ne, a zařadí vaši doménu jako **Připraveno** nebo **Připraveno (bez SSL)**.

**Web:** Subdoména, která je s touto doménou spojená. Mapovaná doména zobrazí obsah tohoto konkrétního webu.

**Aktivní:** Tuto možnost můžete zapnout nebo vypnout a tím doménu aktivovat nebo deaktivovat.

**Je primární doména?:** Vaši zákazníci mohou mít pro každý web více než jednu mapovanou doménu. Pomocí této možnosti vyberete, zda je toto primární doména pro konkrétní web.

**Je zabezpečená?:** I když Ultimate Multisite před povolením domény kontroluje, zda doména má SSL certifikát, nebo ne, můžete ručně zvolit načítání domény se SSL certifikátem nebo bez něj. Pamatujte, že pokud web nemá SSL certifikát a pokusíte se vynutit jeho načtení přes SSL, může to způsobit chyby.

### Mapování vlastního názvu domény jako uživatel dílčího webu

Administrátoři dílčích webů mohou také mapovat vlastní názvy domén ze svého administračního Dashboard dílčího webu.

Nejprve se musíte ujistit, že tuto možnost povolíte v nastavení **Mapování domén**. Podívejte se na snímek obrazovky níže.

<!-- Snímek obrazovky není dostupný: Nastavení mapování domén umožňující uživatelům dílčích webů mapovat domény pomocí přepínače Customer DNS Management -->

Tuto možnost můžete také nastavit nebo nakonfigurovat na úrovni **plánu** nebo v možnostech produktu v **Ultimate Multisite > Produkty**.

![Sekce Vlastní domény na stránce úprav produktu](/img/config/product-custom-domains.png)

Když je některá z těchto možností povolena a uživatel dílčího webu smí mapovat vlastní názvy domén, měl by uživatel dílčího webu na stránce **Account** vidět metabox s názvem **Domény**.

<!-- Snímek obrazovky není dostupný: Metabox Domény na stránce Account dílčího webu s tlačítkem Přidat doménu -->

Uživatel může kliknout na tlačítko **Přidat doménu** a zobrazí se modální okno s několika pokyny.

<!-- Snímek obrazovky není dostupný: Modální okno Přidat doménu zobrazující pokyny k DNS A záznamu pro uživatele dílčích webů -->

Uživatel pak může kliknout na **Další krok** a pokračovat v přidání vlastního názvu domény. Může také zvolit, zda to bude primární doména, nebo ne.

<!-- Snímek obrazovky není dostupný: Formulář Přidat doménu s polem vlastního názvu domény a přepínačem primární domény -->

<!-- Snímek obrazovky není dostupný: Potvrzovací krok Přidat doménu, který spustí ověření DNS -->

Kliknutí na **Přidat doménu** zahájí proces ověřování a načítání DNS informací vlastní domény.

### O synchronizaci domén

Synchronizace domén je proces, při kterém Ultimate Multisite přidá vlastní název domény do vašeho hostingového účtu jako doplňkovou doménu **aby mapování domény fungovalo**.

Synchronizace domén probíhá automaticky, pokud má váš poskytovatel hostingu integraci s funkcí mapování domén Ultimate Multisite. V současnosti jsou těmito poskytovateli hostingu _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ a _Cpanel._

Když je integrace poskytovatele hostingu aktivní, Ultimate Multisite může také zařadit úlohu vytvoření DNS nebo subdomény na straně poskytovatele pro nově vytvořené weby. Pokud žádná integrace tuto úlohu neposlouchá, úloha na pozadí se přeskočí, aby se předešlo záznamům ve frontě, které nic neprovedou. Kontroly DNS a SSL pro mapované domény nadále probíhají prostřednictvím běžného procesu fází domény.

Tuto integraci budete muset aktivovat v nastavení Ultimate Multisite na kartě **Integrace**.

![Karta Integrace v nastavení Ultimate Multisite zobrazující poskytovatele hostingu](/img/config/integrations-tab.png)

<!-- Snímek obrazovky není dostupný: Odkazy Konfigurace poskytovatele hostingu na kartě nastavení Integrace -->

_Všimněte si, že pokud váš poskytovatel hostingu není jedním z výše uvedených poskytovatelů, **budete muset název domény ručně synchronizovat nebo přidat** do svého hostingového účtu._
