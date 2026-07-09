---
title: سيٽنگن جو حوالو
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# سيٽنگن جو حوالو {#settings-reference}

هي صفحو انهن سيٽنگن کي ٽريڪ ڪري ٿو جيڪي روزاني انتظاميا ۽ Ultimate Multisite ۾ تازين روين جي تبديلين تي اثر وجهن ٿيون.

## ٻيا آپشن {#other-options}

**ٻيا آپشن** وارو علائقو **Ultimate Multisite > Settings > Login & Registration** هيٺ ظاهر ٿئي ٿو.

| سيٽنگ | وضاحت |
|---|---|
| **Enable Jumper** | ايڊمن علائقي ۾ Jumper تڪڙو نيويگيشن اوزار ڏيکاري ٿو. ان کي Ultimate Multisite اسڪرينن، نيٽ ورڪ آبجيڪٽن، ۽ حمايت ٿيل ايڊمن منزلن ڏانهن سڌو ٽپو ڏيڻ لاءِ استعمال ڪريو. جيڪڏهن توهان نٿا چاهيو ته هي شارٽ ڪٽ ظاهر ٿئي ته ان کي بند ڪريو. |

## غلطي رپورٽنگ ۽ ٽيلي ميٽري {#error-reporting-and-telemetry}

اڳوڻي غلطي رپورٽنگ opt-in سيٽنگ کي سيٽنگن واري صفحي مان هٽايو ويو آهي. گمنام ٽيلي ميٽري بند آهي ۽ ان کي فعال ڪرڻ لاءِ ڪو UI toggle موجود ناهي.

جيڪڏهن توهان سيٽنگن واري صفحي لاءِ اندروني runbooks يا اسڪرين شاٽس سنڀاليندا آهيو، ته پراڻي غلطي رپورٽنگ opt-in فيلڊ جا حوالا هٽايو، ته جيئن منتظم اهڙي سيٽنگ نه ڳولين جيڪا هاڻي موجود ناهي.

## درآمد/برآمد سيٽنگون {#importexport-settings}

**درآمد/برآمد** سيٽنگن وارو ٽيب بيان ڪري ٿو ته اهو ڪهڙين سيٽنگن کي ڪنٽرول ڪري ٿو ۽ site ۽ network archive لاءِ سڌو **Ultimate Multisite > Site Export** سان ڳنڍي ٿو. درآمد/برآمد ترتيب لاءِ سيٽنگن وارو ٽيب استعمال ڪريو، single-site برآمد/درآمد workflow لاءِ **Tools > Export & Import** استعمال ڪريو، ۽ جڏهن توهان کي مڪمل Network Export archive گهربل هجي ته Site Export اوزار استعمال ڪريو.

## Domain Seller HostAfrica بيلنس خبرداري {#domain-seller-hostafrica-balance-warning}

جڏهن Domain Seller addon HostAfrica سان ڳنڍيل هجي، نيٽ ورڪ منتظم هاڻي هڪ dismissible balance-low خبرداري ڏسن ٿا جڏهن reseller account جو بيلنس ڀروسي جوڳي domain registration يا renewal processing لاءِ تمام گهٽ هجي.

هن اطلاع کي عملي خبرداري طور وٺو: وڌيڪ paid domain registrations قبول ڪرڻ کان اڳ HostAfrica reseller بيلنس وڌايو، پوءِ Domain Seller سيٽنگن يا domain-monitoring اسڪرين ڏانهن واپس وڃو ته تصديق ڪريو registrations ۽ renewals عام طور جاري رهي سگهن ٿا.

## AI provider connector سيٽنگون {#ai-provider-connector-settings}

AI provider connector سيٽنگون هاڻي صرف حمايت ٿيل OAuth account pools ظاهر ڪن ٿيون:

| Provider | Setup flow |
|---|---|
| **Anthropic Max** | OAuth بٽڻ سان هڪ يا وڌيڪ Anthropic Max اڪائونٽ ڳنڍيو. جڏهن sandboxed browser redirect پاڻمرادو مڪمل نه ڪري سگهي ته manual OAuth fallback استعمال ڪريو. |
| **OpenAI ChatGPT/Codex** | ساڳئي OAuth pool workflow ذريعي ChatGPT اڪائونٽ ڳنڍيو. Connector-supported operations اڪائونٽ ڳنڍجڻ کان پوءِ ChatGPT Codex tool calls استعمال ڪري سگهن ٿا. |
| **Google AI Pro** | OAuth ذريعي Google AI Pro اڪائونٽ ڳنڍيو، پوءِ جيڪڏهن account list فوراً اپڊيٽ نه ٿئي ته connector refresh ڪريو. |

Cursor Pro هاڻي حمايت ٿيل provider ناهي. پراڻا اندروني اسڪرين شاٽس، runbooks، يا onboarding قدم هٽايو جيڪي Cursor Pro setup fields يا connector paths جو ذڪر ڪن ٿا.

Provider اڪائونٽس شامل ڪرڻ يا هٽائڻ وقت، جنهن اڪائونٽ کي refresh يا delete ڪيو پيو وڃي ان لاءِ صحيح email address داخل ڪريو ۽ connector-backed operations جانچڻ کان اڳ provider سيٽنگون محفوظ ڪريو.
