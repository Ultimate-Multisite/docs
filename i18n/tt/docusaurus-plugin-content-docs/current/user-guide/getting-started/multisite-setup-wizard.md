---
title: Мәгълүмат җирле системаны куллану wizardsы
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Мультисайт Нарды (Multisite Setup Wizard)

Бу документте WordPress-те мультисайтны настройка процессче турында сөйләшәбез. Бу wizards (нардылар) булыргач, сапсы ачыклачак һәм сиздергә тулы ярдәм итәчәк.

Ultimate Multisite standart WordPress quraşmalyny avtomatik kazan (wizard) bilen WordPress Multisite şəbəkəsinə çevirýän bir funksiyona eýedir. Bu, sizden `wp-config.php`-i elle dizelemek ýa-da maşınsanlyk komandalar işlemek gerekdigini ortadan kaldırýar.

:::tip
Если у вас уже настроена сеть Multisite в WordPress, вы можете пропустить этот шаг полностью. Мастер появляется только тогда, когда Multisite еще не включен.
:::

## Когда появляется мастер?

Ultimate Multisite-ı standart (Multisite olmayan) WordPress quraşımına aktivasiya edildikdə, plugin Multisite-ın aktif olmadığını görür və sizi adi quraşdırma wizardı əvəzinə Multisite qurma wizardına avtomatik olaraq yönləndirir.

Сыртәге да барырга да **WP Admin > Ultimate Multisite > Multisite Setup** аркылуу китере аласыз.

## Шартлар (Prerequisites)

Мастерни іске қоралардан өндөннөңүз, төмнөләрне текшерегез:

Сиз WordPress инсталлясьоныгызга **администратор сыйлы укутырганы** (administrator access) барсыз
Серверлеренең `wp-config.php` файлы веб-сервер тарафын **укута** (writable) дип белгиленми
Файлларыгыз һәм базасыннан **соңгы резервләлек** (recent backup) бар

:::warning
Буруан (wizard) сизнең `wp-config.php` файлыгызны өзгөртә һәм янәчә базалык теракүбләр яса. Әйдә анда берничә резервлә (backup) ясагыз!
:::

## 1-нче кадам: Саламу

Бирнәчә экран WordPress Multisite нинди булалыгы турында һәм бу буруан нинди эшләргә тиеш дип аңлата.

WordPress конфигурациясында Мультисайт (Multisite) функциясын etkinleştirin
Зарыналык сеть базасы таблицаларны oluşturun
`wp-config.php` dosyasına gerekli мультисайт константаларын ekleyin
Сетьде Ultimate Multisite'ı tüm ağ için etkinleştirin

![Мултисайт Сәләштерү Визард - Саламу сәгезе]
**Продоллау**-ны сыйныч باش.

## 2-нче кадам: Сеть конфигурациясе

Бу кадам сизгә сеть настройкаларын даргалыйчак.

### Сайт структурасы

Сайтларыңызды ничек тартипләштермелекче сайлагыз:

- **Субдомены** (Рекомендуется) — Әлбәттә әйтеп калабыз, сайтлар өзара субдомен алачак, мисалы `site1.yourdomain.com`
- **Субкаталоглар** — Сайтлар каталог сыяк ясалачак, мисалы `yourdomain.com/site1`

:::note
Если вы поддомены (sub-domains) seçсеңиз, дименцияләр өчен **wildcard DNS** һәм дименциядәге **wildcard SSL сертификаты** нигезләп теркәүе кирәк. Көп гачи турылган WordPress хостлар буны автомат түгел. Аңартау өчен [Ultimate Multisite 101](./ultimate-multisite-101) документын карагыз.

### Сеть Название (Network Title)

Сетіңиз өчен сетәгегез өчен яки аты өчен кулланылачак. Бу дефолт якын сайтыгызның атыга "Сеть" (Network) сурәлеше белән китерә. Буны позже сетәгеләрнең настройкаларынан өзгере аласыз.

### Сеть Администратор Эмейлы (Network Admin Email)

Сете администрациясы хабарламалар өчен кулланылачак электрон почта адресе. Бу яңадан иседелнең электрон почтасы белән бәйлеге кабул итә.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Биллерни doldurmadan sonra ilerlemek için **Devam et** butonuna tıklayın.

## 3-нче шаг: Устаnement

Башкарма (wizard) işə başlamaq üçün **Установить** düyməsinə basın. O, beş avtomatlaşdırılmış addımı ardınca yerin göstərən bir prosesdə hər birini real vaxtda göstərəcək:

![Мултисайт Нардылаш Ассистент - Установка күтәлелә](https://example.com/images/installation/multisite-wizard/wizard-installation-pending.png)

| Шаг | Описание |
|------|-------------|
| **Мультисайт'ı Etkinleştirme** | `wp-config.php` dosyasına `WP_ALLOW_MULTISITE` sabitini ekleyin |
| **Ağ Oluşturma** | Çoklu site veritabanı tablolarını (`wp_site`, `wp_sitemeta`, `wp_blogs` vb.) oluşturun ve bunları ağ yapılandırmanızla doldurun |

| **Конфигурацию обновить** | Мультисайты константы (например, `MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` и т.д.) в файле `wp-config.php`-ага əlavə etməkdir. |

| **Cookie'ları Düzeltme** | Sitenin URL'sinin ağ meta verilerinde doğru olmasını sağlar, böylece etkinleştirildikten sonra kimlik doğrulama sorunları oluşmaz. |
| **Network Activate Plugin** | Ultimate Multisite'ı ağ düzeyinde etkinleştirir, böylece tüm ağ boyunca çalışır hale gelir. |

Әлбәттә, әлеудеге булган әлеуделәрнең һәр бир шагыйты аер-аерле мәгълүмат белән көрәбез:

- **Pending** — Процессе китергә күтәлә (Идел)
- **Installing...** — Хәзер дип ярайла (Көчкә карый)
- **Success!** — Успех! — Идел яхшы булды.
- **Error message** — Хәлеллек хатасы — Яки бер мәселә тулы булды (мәселәне аңлау өчен булган хата).

Бүлек барлык шаклы успешно tamamlandардан соң, һәр объектнең зеленый "Успех!" статусын күрегез:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Сыртма (wizard) да автоматски да перейдет на екрана за заврѣшение.

## Шаг 4: Завършване

Когато инсталацията свърши, ще видите съобщение за успех, което потвърждава, че WordPress Multisite е активиран.

![Мултисайт Нардылаш Ассистент - Нардылаш Битәме](https://example.com/images/installation/multisite-wizard/wizard-complete.png)

Итеңләрнең Ultimate Multisite kurulum wizardsын итеп, WaaS платформыгызны (компания мәгълүматы, стандарт контент, төлөм вороталары ясау һәм башкалар) конфигурацияләүне үзегез.

:::note
Мултисайт тасвирламасы диптергә соң, браузердә янәчәлек администратор аркында йортланачак. Мултисайт чегенге карата идентификация кукиләре күрүчеләр өчен гамәлгә ашырылгандыктан, инде кайгыру кирәк بولغانча кайгыруны яиндырып китәргә мөмкин.
:::

## Ручной настройка как запасной вариант

Если мастер не сможет записать данные в ваш файл `wp-config.php` (из-за проблем с правами доступа к файлу или ограничений сервера), он покажет вам точный код, который нужно добавить вручную:

1. `/* Хәл, редакциягә торуның өчен бундый кодлар бар */` уңышлы файлдан өчрәңдәге `/* That's all, stop editing! */` сапынан мухирләп китәрлекле **wp-config.php константалары**.
2. Сез танлый сайт структурагызга (субдомен ва директория) мөһерләнгән **.htaccess ревайт (rewrite) каулы**.

Ручную изменения yaptıktan sonra sayfayı yenileyin ve sihirbaz artık çoklu sitenin aktif olduğunu algılayacaktır.

## Sorun Giderme

### Sihirbaz `wp-config.php` dosyasının yazılabilir olmadığını söylüyor



Веб-сервер процессингке `wp-config.php` файлына билиш (write) истәлегенге кажет. Буны сиз төмнөй вариантлардан бирене исәптә аласыз:

Сайт настройкадан соң ачыламый (субдомены)

* Файл пермишнни уақытша `644` немесе `666`-ға өзгәңиз.
* Визуалды құрал арқылы берілген қолмен орнату нұсқауларын пайдаланың.
* Хостинг провайдериден көмек сұраңыз.

Если вы структуру поддомена выбрали, вам нужно настроить **wildcard DNS** для вашего домена. Добавьте запись DNS:

```
Type: A (или CNAME)
Host: *
Value: [ваш IP-адрес сервера]
```

Уточните у своего хостинг-провайдера, если вы не уверены, как это настроить.

### Настройка после входа в систему

Если вы вышли из системы или сталкиваетесь с ошибками куки после настройки мультисайта:

1. Сайт үчүн браузер кукилерин temizleyin
2. Янағын `yourdomain.com/wp-login.php` даログイン жасаңыз
3. Мәселе уажайды сакласа, `wp-config.php` файлында `COOKIE_DOMAIN` параметрлере `false` емес екеніне көріңіз — бұл поддомендегі мультисайт орнатылуында белгілі мәселе.

### Установка sırasında bir adım başarısız oldu

Eğer kurulum adımlarından biri hata veriyorsa:

1. Экранада görünen xatayı қарайтыңыз
2. Конфигурацияланған қадамға қайтып оралыңыз және қайтадан deneyңіз
3. Хәл қалса, сервердің PHP қате журналын (error log) тексеріп көріңіз, бұл туралы қосымша ақпарат таба аласыз

4. Авылдандырган шатлар кейнә мәсьәләләрнең кайта ителмәс (инсталлятор идемпотент).
