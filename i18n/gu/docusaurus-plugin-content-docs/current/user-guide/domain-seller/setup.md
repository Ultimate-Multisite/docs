---
title: સેટઅપ અને પ્રદાતા ગોઠવણી
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: સેટઅપ અને પ્રદાતા (Provider) કન્ફિગરેશન

Domain Seller એડઓન એક માર્ગદર્શિત સેટઅપ વિઝાર્ડ સાથે આવે છે જે તમને દરેક જરૂરી પગલાં દ્વારા લઈ જાય છે. આ પેજ વિઝાર્ડના ફ્લો અને ત્યારબાદ પ્રદાતાઓને કેવી રીતે કન્ફિગર અથવા ફરીથી કન્ફિગર કરવા તે આવરી લે છે.

## જરૂરિયાતો (Requirements)

- **Multisite Ultimate** v2.4.12 અથવા તેનાથી વધુ, નેટવર્ક-એક્ટિવેટેડ
- **PHP** 7.4+
- ઓછામાં ઓછા એક સપોર્ટેડ રજિસ્ટ્રાર માટે API credentials

## પ્રથમ-વપરાશ સેટઅપ વિઝાર્ડ (First-run setup wizard)

જ્યારે તમે પહેલીવાર પ્લગઇનને નેટવર્ક-એક્ટિવેટ કરો છો, ત્યારે સેટઅપ વિઝાર્ડ આપોઆપ શરૂ થઈ જાય છે. તે **Network Admin › Ultimate Multisite › Domain Seller Setup** માંથી કોઈપણ સમયે ઉપલબ્ધ છે.

### પગલું 1 — પ્રદાતા પસંદ કરો (Choose a provider)

તમે કયા રજિસ્ટ્રારને કનેક્ટ કરવા માંગો છો તે પસંદ કરો. સપોર્ટેડ વિકલ્પો:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### પગલું 2 — credentials દાખલ કરો (Enter credentials)

દરેક પ્રદાતાના અલગ-અલગ credential fields હોય છે:

**OpenSRS** — યુઝરનેમ અને પ્રાઇવેટ કી (OpenSRS Reseller Control Panel માંથી)

**Namecheap** — યુઝરનેમ અને API કી (Account › Tools › API Access માંથી)

**GoDaddy** — API કી અને secret (developer.godaddy.com માંથી)

**ResellerClub** — Reseller ID અને API કી (ResellerClub control panel માંથી)

**NameSilo** — API કી (namesilo.com › Account › API Manager માંથી)

**Enom** — Account ID અને API token

લાઈવ થતા પહેલા પ્રદાતાના ટેસ્ટ એન્વાયર્નમેન્ટ સામે ટેસ્ટ કરવા માટે જ્યાં ઉપલબ્ધ હોય ત્યાં **Sandbox mode** તપાસો.

### પગલું 3 — કનેક્શનનું પરીક્ષણ કરો (Test the connection)

**Test Connection** પર ક્લિક કરો. વિઝાર્ડ credentials અને કનેક્ટિવિટી ચકાસવા માટે એક હળવા API કૉલ મોકલે છે. આગળ વધતા પહેલા કોઈપણ credential સમસ્યાઓ સુધારો.

### પગલું 4 — TLDs ઇમ્પોર્ટ કરો (Import TLDs)

કનેક્ટેડ પ્રદાતા પાસેથી ઉપલબ્ધ તમામ TLDs અને હોલસેલ પ્રાઇસિંગ ખેંચવા માટે **Import TLDs** પર ક્લિક કરો. આ ડોમેન પ્રોડક્ટ્સ દ્વારા ઉપયોગમાં લેવાતી TLD યાદીને ભરે છે. મોટા TLD કેટલોગ ધરાવતા પ્રદાતાઓ માટે આ ઇમ્પોર્ટમાં 30–60 સેકન્ડ લાગી શકે છે.

TLDs દરરોજ એકવાર શેડ્યૂલ કરેલ cron job દ્વારા આપમેળે રી-sync પણ થાય છે.

### પગલું 5 — ડોમેન પ્રોડક્ટ બનાવો (Create a domain product)

વિઝાર્ડ 10% માર્કઅપ સાથે એક ડિફોલ્ટ કેચ-ઓલ ડોમેન પ્રોડક્ટ બનાવે છે. તમે આ પ્રોડક્ટને તરત જ એડિટ કરી શકો છો અથવા સ્કીપ કરીને **Ultimate Multisite › Products** હેઠળ પ્રોડક્ટ્સ મેન્યુઅલી બનાવી શકો છો.

સંપૂર્ણ પ્રોડક્ટ કન્ફિગરેશન ગાઇડ માટે [Domain Products and Pricing](./domain-products) જુઓ.

---

## પ્રદાતાને ફરીથી કન્ફિગર કરવો (Reconfiguring a provider)

**Network Admin › Ultimate Multisite › Settings › Domain Seller** પર જાઓ (અથવા પ્ગઇન લિસ્ટમાં **Settings** પર ક્લિક કરો).

સેટિંગ્સ પેજમાં નીચેની વસ્તુઓ હોય છે:

- **Enable domain selling** — આખી સુવિધાને ઓન/ઓફ કરવા માટે ટૉગલ કરો
- **Default provider** — ડોમેન સર્ચ અને નવી પ્રોડક્ટ્સ માટે વપરાતો પ્રદાતા
- **Max TLDs per search** — જ્યારે કોઈ ગ્રાહક સર્ચ કરે ત્યારે કેટલા TLDs તપાસવા; ઊંચા મૂલ્યો વધુ વિકલ્પો બતાવે છે પરંતુ ધીમા હોય છે
- **Availability cache duration** — ઉપલબ્ધતા અને પ્રાઇસિંગ પરિણામોને કેટલા સમય સુધી કેશ કરવું; નીચા મૂલ્યો વધુ સચોટ હોય છે પરંતુ API કૉલ્સ વધારે છે
- **Manage domain products** — પ્રોડક્ટ્સ લિસ્ટ પર ઝડપી લિંક
- **Configure providers** — પ્રદાતાઓ ઉમેરવા અથવા ફરીથી કન્ફિગર કરવા માટે Integration Wizard ખોલે છે

### બીજો પ્રદાતા ઉમેરવો (Adding a second provider)

**Configure providers** પર ક્લિક કરો અને નવા રજિસ્ટ્રાર માટે વિઝાર્ડ ફરીથી ચલાવો. તમે એકસાથે અનેક પ્રદાતાઓ કન્ફિગર કરી શકો છો. દરેક ડોમેન પ્રોડક્ટને ચોક્કસ પ્રદાતાને એサイン કરો, અથવા તેને ડિફોલ્ટ પર છોડી દો.

### TLDs મેન્યુઅલી sync કરવા (Syncing TLDs manually)

સેટિંગ્સ પેજમાં, કોઈપણ કન્ફિગર કરેલ પ્રદાતાની બાજુમાં **Sync TLDs** પર ક્લિક કરો જેથી લેટેસ્ટ પ્રાઇસિંગ ખેંચી શકાય. આ ત્યારે ઉપયોગી છે જ્યારે કોઈ પ્રદાતા હોલસેલ પ્રાઇસિંગ અપડેટ કરે અથવા નવા TLDs ઉમેરે.

---

## Logs

દરેક પ્રદાતા તેના પોતાના log channel માં લખે છે. Logs **Network Admin › Ultimate Multisite › Logs** હેઠળ જોઈ શકાય છે:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | તમામ રજીસ્ટ્રેશન પ્રયાસો (સફળ અને નિષ્ફળ) |
| `domain-seller-renewal` | રિન્યુઅલ જોબના પરિણામો |
| `domain-seller-opensrs` | કાચો OpenSRS API એક્ટિવિટી |
| `domain-seller-namecheap` | કાચો Namecheap API એક્ટિવિટી |
| `domain-seller-godaddy` | કાચો GoDaddy API એક્ટિવિટી |
| `domain-seller-resellerclub` | કાચો ResellerClub API એક્ટિવિટી |
| `domain-seller-namesilo` | કાચો NameSilo API એક્ટિવિટી |
| `domain-seller-enom` | કાચો Enom API એક્ટિવિટી |
