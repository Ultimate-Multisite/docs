---
title: سيٽنگن جو حوالو
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# سيٽنگن جو حوالو {#settings-reference}

هي صفحو انهن سيٽنگن کي ٽريڪ ڪري ٿو جيڪي روزمره جي انتظام ۽ Ultimate Multisite ۾ تازين رويي تبديلين تي اثر انداز ٿين ٿيون.

## ٻيا اختيار {#other-options}

**ٻيا اختيار** وارو علائقو **Ultimate Multisite > Settings > Login & Registration** هيٺ ظاهر ٿئي ٿو.

| سيٽنگ | وضاحت |
|---|---|
| **Jumper فعال ڪريو** | ايڊمن علائقي ۾ Jumper تڪڙي نيويگيشن اوزار ڏيکاري ٿو. ان کي Ultimate Multisite اسڪرينن، نيٽ ورڪ آبجيڪٽس، ۽ سپورٽ ٿيل ايڊمن منزلن ڏانهن سڌو وڃڻ لاءِ استعمال ڪريو. جيڪڏهن توهان نٿا چاهيو ته هي شارٽ ڪٽ نظر اچي، ته ان کي غير فعال ڪريو. |

## غلطي رپورٽنگ ۽ ٽيلي ميٽري {#error-reporting-and-telemetry}

اڳئين غلطي رپورٽنگ opt-in سيٽنگ کي سيٽنگن واري صفحي مان هٽايو ويو آهي. گمنام ٽيلي ميٽري غير فعال آهي ۽ ان کي فعال ڪرڻ لاءِ ڪو UI ٽوگل موجود ناهي.

جيڪڏهن توهان سيٽنگن واري صفحي لاءِ اندروني رن بڪ يا اسڪرين شاٽس سنڀاليو ٿا، ته پراڻي غلطي رپورٽنگ opt-in فيلڊ جا حوالا هٽايو ته جيئن منتظم اهڙي سيٽنگ نه ڳولين جيڪا هاڻي موجود ناهي.

## درآمد/برآمد سيٽنگون {#importexport-settings}

**درآمد/برآمد** سيٽنگن وارو ٽيب بيان ڪري ٿو ته اهو ڪهڙين سيٽنگن کي ڪنٽرول ڪري ٿو ۽ سائيٽ ۽ نيٽ ورڪ آرڪائيوز لاءِ سڌو **Ultimate Multisite > Site Export** ڏانهن لنڪ ڪري ٿو. درآمد/برآمد ترتيب لاءِ سيٽنگن وارو ٽيب استعمال ڪريو، اڪيلي سائيٽ جي برآمد/درآمد ورڪ فلو لاءِ **Tools > Export & Import** استعمال ڪريو، ۽ جڏهن توهان کي مڪمل Network Export آرڪائيو گهرجي ته Site Export اوزار استعمال ڪريو.

## Domain Seller HostAfrica بيلنس وارننگ {#domain-seller-hostafrica-balance-warning}

جڏهن Domain Seller addon کي HostAfrica سان ڳنڍيو وڃي ٿو، نيٽ ورڪ منتظم هاڻي هڪ dismissible گهٽ بيلنس وارننگ ڏسن ٿا جڏهن reseller Account جو بيلنس قابل اعتماد ڊومين رجسٽريشن يا تجديد پروسيسنگ لاءِ تمام گهٽ هجي.

هن نوٽيس کي هڪ آپريشنل وارننگ طور وٺو: وڌيڪ ادا ڪيل ڊومين رجسٽريشنون قبول ڪرڻ کان اڳ HostAfrica reseller بيلنس وڌايو، پوءِ Domain Seller سيٽنگن يا ڊومين مانيٽرنگ اسڪرين ڏانهن واپس وڃو ته جيئن تصديق ڪري سگهجي ته رجسٽريشنون ۽ تجديدون عام طور جاري رهي سگهن ٿيون.

## AI فراهم ڪندڙ connector سيٽنگون {#ai-provider-connector-settings}

AI فراهم ڪندڙ connector سيٽنگون هاڻي رڳو سپورٽ ٿيل OAuth Account پولز ظاهر ڪن ٿيون:

| فراهم ڪندڙ | سيٽ اپ وهڪرو |
|---|---|
| **Anthropic Max** | OAuth بٽڻ سان هڪ يا وڌيڪ Anthropic Max Accounts ڳنڍيو. جڏهن sandboxed برائوزر redirect پاڻمرادو مڪمل نه ڪري سگهي، ته دستي OAuth fallback استعمال ڪريو. |
| **OpenAI ChatGPT/Codex** | ساڳئي OAuth پول ورڪ فلو ذريعي ChatGPT Accounts ڳنڍيو. Account ڳنڍجڻ کان پوءِ connector-سپورٽ ٿيل آپريشنز ChatGPT Codex tool calls استعمال ڪري سگهن ٿا. |
| **Google AI Pro** | OAuth ذريعي Google AI Pro Accounts ڳنڍيو، پوءِ جيڪڏهن Account لسٽ فوري طور اپڊيٽ نه ٿئي ته connector کي refresh ڪريو. |

Cursor Pro هاڻي سپورٽ ٿيل فراهم ڪندڙ ناهي. پراڻا اندروني اسڪرين شاٽس، رن بڪس، يا onboarding قدم هٽايو جيڪي Cursor Pro سيٽ اپ فيلڊس يا connector paths جو ذڪر ڪن ٿا.

فراهم ڪندڙ Accounts شامل يا هٽائيندي، refresh يا delete ٿيندڙ Account لاءِ صحيح email address داخل ڪريو ۽ connector-backed آپريشنز ٽيسٽ ڪرڻ کان اڳ فراهم ڪندڙ سيٽنگون محفوظ ڪريو.
