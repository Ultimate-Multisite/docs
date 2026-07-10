---
title: Қажеттілік көру мүмкіндігі
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Иштерүү көрүнүшү (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 жаңы **Иштерүү көрүнүшү** контролдорун киргизет, алар ар бир иште эмнелерди көрсөтөөрүн аныктайт. Бул администраторлорго REST API, MCP серверлери, WooCommerce интеграциялары жана башка интерфейстер аркылуу кайсы агент мүмкүнчүлүктөрү жеткиликтүү экенин тактырууга мүмкүндүк берет.

## Иштерүү көрүнүшү деген эмне? {#what-is-ability-visibility}

Иштерүү көрүнүшү — бул укук системасы, ал төмөнкүлөрдү контроллайт:

- **Агенттерге кайсы иштер** жеткиликтүү экени
- **Алар кайсы жерде көрсөтүлгөнү** (REST API, MCP, WooCommerce ж.б.)
- **Ким аларды киргизип алса болот** (шарапарттары аркылуу)
- **Алар кандайча классификацияланат** (таанылган же таанылбаган)

Ар бир иштердин көрүнүш деңгээли бар, ал ар кандай интерфейстерде алардын жеткиликтүүлүгүн аныктайт.

## Көрүнүш деңгээлдери {#visibility-levels}

### Публик (Public) {#public}

**Публик иштер** артында бардык жерде жеткиликтүү:

- REST API эндпоинттары
- MCP серверлери
- WooCommerce интеграциялары
- Чат интерфейстери
- Бардык колдонуучу ролдору (ти겁데 тиешелүү укуктар менен)

Мисал: `scaffold-block-theme`, `activate-theme`, `send-email`

### Ички (Internal) {#internal}

**Ички иштер** сиздин WordPress орносоңуз гана жеткиликтүү:

- Чат интерфейстери
- Администратордук панелдер
- Кирген колдонуучулар гана
- REST API же сырткы интеграциялар аркылуу көрсөтүлбөйт

Мисал: `manage-settings`, `view-analytics`, `export-data`

### Шара (Partner) {#partner}

**Шара иштер** чектөөлүү шарапарттар үчүн гана жеткиликтүү:

- Шара партнердин тизмесине ачык киргизилиши керек
- Шара сертификаттары аркылуу REST API аркылуу жеткиликтүү
- Шара аутентификациясы менен MCP аркылуу жеткиликтүү
- Адаттагы колдонуучуларга жеткиликтүү эмес

Мисал: `bulk-import-users`, `modify-billing`, `access-analytics`

### Жок (Disabled) {#disabled}

**Жок иштер** эч жерде жеткиликтүү эмес:

- Эч кандай интерфейсте көрсөтүлбөйт
- Чатта жеткиликтүү эмес
- Администратордук панелдерде жеткиликтүү эмес
- Маанилүү же эксперименттик иштер үчүн колдонулат

## Иштин мүмкүнчүлүктөрдү башкаруу {#managing-ability-visibility}

### Мүмкүнчүлүктөрдүн көрүнүүсүн жөнгө салуу {#accessing-ability-visibility-settings}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings**-ке кириңиз
2. **Abilities** (Иштин мүмкүнчүлүктөр) табына басыңыз
3. Бардык орнотулган мүмкүнчүлүктөрдүн тизмесин жана алардын көрүнүү деңгээлдерин көрөсүз

### Мүмкүнчүлүктүн маалыматтарын карап чыгуу {#viewing-ability-details}

Кезказды мүмкүнчүлүкке басып, төмөнкүлөрдү көрө аласыз:

- **Name** (Аталышы): Мүмкүнчүлүктүн аныктамасы
- **Description** (Сүрөттөмө): Бул мүмкүнчүлүк эмне кылат
- **Current visibility** (Учурдагы көрүнүүсүн): Публик, Ички, Партнер же Аждалдырылган
- **Partner allow-list** (Партнерлердин уруксат тизмеси): Кайсы партнерлер кирүүгө мүмкүнчүлүк ээ? (Эгерде "Партнер" көрүнүшү болсо)
- **Last updated** (Соңсо жумулган): Көрүнүү кайсы учурда өзгөртүлгөн
- **Status** (Статус): Таанылган же Классификацияланбаган

### Көрүнүү деңгээлин өзгөртүү {#changing-visibility-levels}

Мүмкүнчүлүктүн көрүнүүсүн өзгөртүү үчүн:

1. Тизмедеги мүмкүнчүлүккүккө басыңыз
2. Дропдаундон жаңы көрүнүү деңгээлин тандаңыз
3. Эгер "Partner" (Партнер) тандай кылсаңыз, уруксат тизмесине партнер идентификаторлорун кошуңуз
4. **Save** (Саفوظу) басыңыз

Мисал:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Топтук операциялар {#bulk-operations}

Бир нече мүмкүнчүлүктүн көрүнүүсүн өзгөртүү үчүн:

1. Мүмкүнчүлүктөрдүн жанындагы чагылдыруучу саптарды белгилеңиз
2. Топтук аракеттердин (bulk action) дропдаундон жаңы көрүнүү деңгээлин тандаңыз
3. **Apply** (Колдонуу) басыңыз

## Партнерлердин уруксат тизмеси (Partner Allow-List) {#partner-allow-list}

**Partner allow-list** — бул кандай тышкы партнерлор "Partner" деңгээлидеги мүмкүнчүлүктөргө кирүүгө мүмкүнчүлүк ээ экенин аныктоого алат.

### Партнерлерди кошуу {#adding-partners}

1. **Superdav AI Agent** → **Settings** → **Partners**-ке кириңиз
2. **Add Partner** (Партнерди кошуу) басыңыз
3. партнер идентификаторун киргизиңиз (көбүнчө API ключу же уюм IDси болот)
4. Милдеттүү түрүндө партнердин аты жана сүрөттөмөсү кошуңуз
5. **Save** (Саفوظу) басыңыз

### Мүмкүнчүлүктөрдү партнерлорго тағайындау {#assigning-abilities-to-partners}

Партнерди кошуп алгандан кийин:

1. **Abilitetler** sekmesine gidin
2. Partner görünürlüğüne sahip bir yetenek bulun
3. Düzenlemek için tıklayın
4. "Partner izin listesi" bölümünde erişim olması gereken partnerler için kutucukları işaretleyin
5. **Kaydet**'e tıklayın

### Partner Erişimi Kaldırma {#revoking-partner-access}

Bir partnerin erişimini kaldırmak için:

1. Yeteneği düzenleyin
2. İzin listesindeki partnerin kutucuğunu işaretlemeyi kaldırın
3. **Kaydet**'e tıklayın

Partner o yeteneğe anında erişemez hale gelir.

## Sınıflandırılmamış Yetenekler {#unclassified-abilities}

Superdav AI Agent tanımayan üçüncü taraf bir yetenek kurduğunuzda, bu yetenek **Sınıflandırılmamış** olarak işaretlenir.

### Sınıflandırılmamış Yetenekler İçin Yönetici Bildirimi {#admin-notice-for-unclassified-abilities}

Yönetici bildirimini göreceksiniz:

```
⚠️ Sınıflandırılmamış Yetenekler Tespit Edildi

Aşağıdaki yetenekler kuruldu ancak tanınmıyor:
- custom-import-tool
- external-api-wrapper

Bu yetenekler güvenlik veya uyumluluk riski oluşturabilir.
Lütfen inceleyin ve sınıflandırın.

[Yetenekleri İncele] [Reddet]
```

### Sınıflandırılmamış Yetenekleri İnceleme {#reviewing-unclassified-abilities}

1. Bildirimdeki **Yetenekleri İncele**'ye tıklayın
2. Her sınıflandırılmamış yetenek için şunları göreceksiniz:
   - Yetenek adı ve açıklaması
   - Kaynak (hangi eklenti/addonini kurdu)
   - Önerilen görünürlük seviyesi
   - Güvenlik değerlendirmesi

3. Bir görünürlük seviyesi seçin:
   - **Public** (Herkese Açık): Yeteneğe güvenin; her yerde açın
   - **Internal** (Dahili): Yalnızca dahili kullanım için kısıtlayın
   - **Partner**: Belirli partnerlere kısıtlayın
   - **Disabled** (Devre Dışı): Bu yeteneği kullanmayın

4. Kararınızı kaydetmek için **Sınıflandır**'a tıklayın

### Sınıflandırılmamış Yetenekleri Neden Sınıflandırmalıyız? {#why-classify-unclassified-abilities}

Yetenekleri sınıflandırmak:

- **Güvenliği artırır**: Ne açıldığını siz açıkça onaylarsınız
- **Kazaları önler**: Sınıflandırılmamış yetenekler varsayılan olarak devre dışı bırakılır
- **Özellikleri etkinleştirir**: Sınıflandırıldıktan sonra yetenek kullanılabilir hale gelir
- **Kararları belgeleyerek**: Seçimleriniz denetim amaçlı kaydedilir

## Көрсөтүүлүк ар кандай беттерде {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Жалпы мүмкүнчүлүктөр** REST эндерлери аркылуу жеткилет:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Ички жана өнөктөштүк мүмкүнчүлүктөр** REST API аркылуу жеткитилбейт.

### MCP Серверлери {#mcp-servers}

**Жалпы мүмкүнчүлүктөр** MCP аркылуу жеткилет:

```
MCP Server: Superdav AI Agent
Майкыла белгилүү мүмкүнчүлүктөр:
- scaffold-block-theme
- activate-theme
- send-email
```

**Ички мүмкүнчүлүктөр** MCP аркылуу көрсөтүлбөйт.

**Өнөктөштүк мүмкүнчүлүктөр** гана өнөктөштүн кирүү маалыматтары менен жеткилет.

### WooCommerce Интеграциясы {#woocommerce-integration}

WooCommerce менен байланышкан **жалпы мүмкүнчүлүктөр** бар:

- Маалымкатты башкаруу
- Буйруктарды иштетүү
- Кардарлар менен байланышуу

**Ички мүмкүнчүлүктөр** WooCommerceге көрсөтүлбөйт.

### Чат Интерфейси {#chat-interface}

**Бардык мүмкүнчүлүктөр** (Жалпы, Ички, Өнөктөштүк) чатта жеткилет, бул колдонуучу укуктарына жараша:

- Администраторлор бардык мүмкүнчүлүктөрдү көрүшөт
- Кадимки колдонуучулар гана Жалпы мүмкүнчүлүктөрдү көрүшөт
- Өнөктөштөр (эгер тизмеде болсо) Жалпы + Өнөктөштүк мүмкүнчүлүктөрүн көрүшөт

## Коопсуздук эрежелери {#security-best-practices}

### Эң аз ыйгарым укук принциби {#principle-of-least-privilege}

- Мүмкүнчүлүктөрдү алардын колдонулушуна мүмкүндүк берген эң тыгыз көрсөткүчтөргө коюңуз
- Сезимтал операциялар үчүн Өнөктөштүк көрсөткүчтөрүн колдонуңуз
- Колдонулбаган мүмкүнчүлүктөрдү өчүрүңүз

### Кезекте текшерүү {#regular-audits}

- Мүмкүнчүлүктөрдүн көрүнүшүн ай сайын карап чыгыңыз
- Классификациясы жок мүмкүнчүлүктөрдү текшериңиз
- Колдонулбаган өнөктөштөр үчүн кирүү укугун алып салыңыз

### Журналдоо жана көзөмөл {#logging-and-monitoring}

- Кайсы мүмкүнчүлүктөр эң көп колдонулганын көзөмөлдөңүз
- Өнөктөштөрдүн кирүү үлгүсүн баалооңуз
- Адаттан эмес мүмкүнчүлүктөрдүн колдонулушу боюнча билдирме бериңиз

### Үч-үч-буйруктуу мүмкүнчүлүктөр (Third-Party Abilities) {#third-party-abilities}

- Ички киргизүү алдында үчүнчү тараптын мүмкүнчүлүктөрүн карап чыгыңыз
- Аларды ачык түрдө классификациялаңыз
- Ички же Өнөктөштүк көрсөткүчтөр менен баштаңыз
- Текшерүүден өткөндөн кийин гана Жалпыга көтөрүү сунуш кылыңыз

## Уюлдук маселелерди чечүү {#troubleshooting}

**Иштер тизмеде көрсөтүлбөйт**
- Иштер орнотулган экенин жана активдүү экенин текшериңиз
- Плагин/аддон күйүп жаткандыгын текшериңиз
- Баракты жаңылаңыз

**Иштердин көрүнүүсүн өзгөртө албайм**
- Администратор укуктары бар экенине көңүл буруңуз
- Плагин тарабынан атайын иштер блоктолбаганын текшериңиз
- Конфликтттуу плагиндерди өчүрүүнү аракетեք

**Өрткөн (партнер) иштерге кирүү мүмкүн эмес**
- Өрткөн адамдын алга коюлган тизмеде (allow-list) экенин текшериңиз
- Иштердин көрүнүүсүн "Partner" деп белгилегендигине көңүл буруңуз
- Өрткөн адамдын кирүү маалыматтары туура экенин тастыктаңыз
- Аутентификация каталары үчүн API логдорун текшериңиз

**Классификациясы жок иштер кайрадан пайда болуп жатат**
- Администратордун билдирүүлөрүн карап чыгып, аларды классификациялаңыз
- Классификацияңыз сакталып калганын текшериңиз
- Иштерди берген плагин жаңылангандыгын текшериңиз

## Эски режимден миграциялоо {#migration-from-legacy-mode}

Эгер сиз Superdav AI Agent'тин эски версиясынан жаңылап жатсаңыз:

- Бардык бардык иштер автоматтык түрдө "Public" (Улуттук) катары классификацияланат
- Зарыл болгон учурда көрүнүүсүн карап чыгып, жөнгө салыңыз
- Кирүү мүмкүнчүлүгүн чектөө каалабасаңыз эч нерсе кылууга болбойт

Натыйжалуу Иштер API интеграциясына өтүү жөнүндө көбүрөөк маалымат үчүн **Third-Party Mode Migration** бөлүмүн карап чыгыңыз.

## Кийинки кадамдар {#next-steps}

Иштердин көрүнүүсүн конфигурациялоодон кийин:

1. **Иштерди карап чыгуу**: Орнотулган бардык иштерди аудитордук текшериңиз
2. **Классификациясы жок иштерди классификациялоо**: Администратордун билдирүүлөрүн жооп бериңиз
3. **Өрткөн адамдарды уюштуруу**: Эгерде "Partner" көрүнүүсүн колдонсоңуз, өрткөн адамдарды кошуңуз
4. **Колдонууну көзөмөлдөө**: Кайсы иштер эң көп колдонулганын баалоо бериңиз
5. **Чечимдерди документтештирүү**: Ар бир көрүнүү деңгээлин эмне үчүн тандаганыңызды эскертүүлөрдү сактап туруңуз
