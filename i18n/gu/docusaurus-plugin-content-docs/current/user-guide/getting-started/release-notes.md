---
title: પ્રકાશન નોંધો
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# રિલીઝ નોંધો {#release-notes}

## આવૃત્તિ 2.13.0 — 2026-06-05 પર રિલીઝ થયું {#version-2130--released-on-2026-06-05}

- નવું: ગ્રાહક Account, checkout, billing, સાઇટ, invoice, template switching, અને domain mapping પ્રવાહો માટે sovereign-tenant સપોર્ટ ઉમેરાયો, જેથી tenant networks સંચાલિત ક્રિયાઓ માટે ગ્રાહકોને મુખ્ય સાઇટ પર પાછા દોરી શકે.
- નવું: recurring memberships માટે renewal-credential ચકાસણીઓ ઉમેરાઈ, જેથી gateways સાચવેલ billing agreement, subscription, અથવા vault token ગાયબ હોય ત્યારે auto-renewal અક્ષમ કરી શકે.
- નવું: pending site creation માટે HMAC-verified loopback publishing ઉમેરાયું, જેથી જ્યાં background jobs વિલંબિત થાય છે એવા hosts પર checkout-to-site provisioning વધુ વિશ્વસનીય બને.
- નવું: SSO URLs, checkout-form base domains, અને automatic domain-record creation માટે developer extension points ઉમેરાયા.
- સુધારો: mapped domains, anonymous broker visits, logout, અને cross-plugin dependency conflicts પર SSO વધુ વિશ્વસનીય છે.
- સુધારો: Pending site creation હવે stale publish flagsમાંથી પુનઃપ્રાપ્ત થાય છે અને ગ્રાહકોને site-creation screen પર અટવાયેલા રહેતા ટાળે છે.
- સુધારો: shared checkout-form base domains માટે domain records હવે બનાવાતા નથી, અને કોઈ integration સક્રિય ન હોય ત્યારે unused host-provider background jobs છોડવામાં આવે છે.
- સુધારો: Checkout, billing address, password reset, email verification, template switching, tours, અને customer Dashboard edge cases હવે સામાન્ય ગ્રાહક પ્રવાહોને અવરોધતા નથી.
- સુધારો: Broadcast emails હવે recipientsને ખાનગી રાખે છે અને recipient lists અથવા mail transports નિષ્ફળ થાય ત્યારે SMTP/plugin fatal errors ટાળે છે.
- સુધારો: Membership renewals, expiration display, અને payment collection edge cases હવે તાત્કાલિક expirations, crashes, અથવા ચૂકી ગયેલ required payments ટાળે છે.
- સુધારેલું: WordPress સુસંગતતા 7.0 સુધી ચકાસવામાં આવી છે, production Vue assets npm sourcesમાંથી ફરી બનાવવામાં આવ્યા છે, અને Cypress end-to-end coverage હવે વધુ checkout, setup, SSO, અને gateway પ્રવાહો અજમાવે છે.

## આવૃત્તિ 2.12.0 — 2026-05-15 પર રિલીઝ થયું {#version-2120--released-on-2026-05-15}

- નવું: domain mapping integration સાથે supported host provider તરીકે Hostinger (hPanel) ઉમેરાયું
- નવું: Site Exporter હવે streamlined network-wide site restoration માટે network import bundles સંભાળે છે
- સુધારો: BCC broadcast emails હવે recipient addresses ખુલ્લા ન પડે તે માટે undisclosed-recipients header વાપરે છે
- સુધારો: non-date value સાથે save કરતી વખતે Membership expiration date હવે બગડતી નથી
- સુધારો: Stripe membership updates હવે deprecated deleteDiscount API બોલાવ્યા વિના discounts યોગ્ય રીતે clear કરે છે
- સુધારો: domain-mapped sites પર SSO redirects હવે infinite redirect loops અટકાવવા માટે મર્યાદિત છે
- સુધારો: Setup wizard image picker selection હવે underlying data modelને યોગ્ય રીતે update કરે છે
- સુધારો: Site Exporter CLI હવે યોગ્ય default network site selection જાળવે છે
- સુધારેલું: plugin packageમાંથી bundled wp-cli દૂર કરાયું, plugin size ઘટાડાઈ

## આવૃત્તિ 2.11.0 — 2026-05-11 પર રિલીઝ થયું {#version-2110--released-on-2026-05-11}

- નવું: Site exports હવે self-booting `index.php` bundle કરે છે જેથી ZIP અલગ plugin install વિના fresh host પર install કરી શકાય.
- નવું: Network export administratorsને Site Export admin pageમાંથી એક જ archiveમાં તમામ subsites export કરવાની મંજૂરી આપે છે.
- નવું: Allow Site Templates plan toggle હવે fallback chain મારફતે enforced છે, plan limits માટે template availability યોગ્ય રીતે મર્યાદિત કરે છે.
- નવું: required field configured કર્યા વિના product ઉમેરાય ત્યારે Checkout form editor ચેતવણી આપે છે.
- નવું: Import/Export settings tab હવે તેનો scope સ્પષ્ટ રીતે વર્ણવે છે અને Site Export tool સાથે સીધી links આપે છે.

## આવૃત્તિ 2.10.0 — 2026-05-05 પર રિલીઝ થયું {#version-2100--released-on-2026-05-05}

- નવું: seamless gateway configuration માટે OAuth flag gate સાથે manual credential entry માટે PayPal guided setup wizard.
- નવું: current-template card, persistent grid, અને **વર્તમાન template reset કરો** button સાથે Template switch customer panel ફરી ડિઝાઇન કરાયું.
- સુધારો: AJAX failure પર Template switching હવે UIને અટકાવતું નથી.
- સુધારો: Template switching permission states unauthorized access સામે સુરક્ષિત કરાયા.
- સુધારો: Site override inputs save કરતાં પહેલાં validate કરાયા.
- સુધારો: address ખાલી હોય ત્યારે Billing address prompt હવે બતાવવામાં આવે છે.
- સુધારો: PHP 8.1 null-to-string deprecation notices ઉકેલાયા.
- સુધારો: timing issues અટકાવવા માટે Currents init hook પહેલાં lazy-loaded કરાયા.
- સુધારો: Filtered SSO path તમામ login flowsમાં માન્ય રાખ્યો.
- સુધારો: Blank site identity options save પર જાળવાયા.

## આવૃત્તિ 2.9.0 — 2026-04-30 પર રિલીઝ થયું {#version-290--released-on-2026-04-30}

- નવું: **Tools > Export & Import** હેઠળ Single-site export અને import ઉમેરાયા.
- સુધારો: Export ZIP files હવે authenticated download endpoint મારફતે serve થાય છે.
- સુધારો: pending export/import queriesમાં SQL injection risk અને query issues સુધારાયા.
- સુધારો: admin ગ્રાહક email manually verify કરે ત્યારે Pending site publish થતી નથી.
- સુધારો: membership ગાયબ હોય ત્યારે Orphaned pending_site records સાફ કરાયા.
- સુધારો: Settings nav padding અને search anchor navigation સુધારાયા.
- સુધારો: Pending sites હવે All Sites viewમાં પહેલા બતાવવામાં આવે છે.
- સુધારો: 403 errors અટકાવવા Screenshot provider (mShots) User-Agent header ઉમેરાયો.
- સુધારો: Import cron schedule circular dependency ઉકેલાઈ.
- સુધારો: user settings keysમાં Tour IDs underscoresમાં normalised કરાયા.
- સુધારેલું: વધુ સારી compatibility માટે Alchemy/Zippy બદલે ZipArchive હવે વપરાય છે.

## આવૃત્તિ 2.8.0 — 2026-04-29 {#version-280--released-on-2026-04-29}

- નવું: Other Options સેટિંગ્સ UIમાં Enable Jumper ટોગલ ઉમેરાયું.
- નવું: ચેકઆઉટ ફોર્મ્સની યાદી ટેબલમાં સ્થિતિ કૉલમ ઉમેરાઈ.
- નવું: કસ્ટમ MU-plugin sunrise એક્સટેન્શન્સ માટે એડઓન sunrise ફાઇલ લોડર.
- સુધાર્યું: સેટિંગ્સ પૃષ્ઠમાંથી એરર-રિપોર્ટિંગ ઑપ્ટ-ઇન સેટિંગ દૂર કર્યું.
- સુધારો: આભાર પૃષ્ઠની સાઇટ કાર્ડ — છબી હવે મર્યાદિત છે અને લિંક્સ યોગ્ય રીતે સ્ટાઇલ થયેલી છે.
- સુધારો: સ્ક્રીનશૉટ પ્રદાતા thum.ioમાંથી WordPress.com mShots પર બદલાયો.
- સુધારો: Enable Registration અને Default Role હવે નવા ઇન્સ્ટોલ પર યોગ્ય ડિફૉલ્ટ્સ સેટ કરે છે.
- સુધારો: ડોમેનમાં પોર્ટ હોય ત્યારે `get_site_url()` હવે ખાલી પરત કરતું નથી.
- સુધારો: `copy_media` સેટિંગ ખાલી હોય ત્યારે ક્લોન મીડિયા ફાઇલો હવે યોગ્ય રીતે કૉપિ થાય છે.
- સુધારો: નેટવર્ક-એક્ટિવેટ sitemeta લખાણ પછી ઑબ્જેક્ટ કૅશ યોગ્ય રીતે અમાન્ય કરવામાં આવે છે.
- સુધારો: 3-ભાગવાળા ડોમેઇન્સ માટે DNS ચકાસણી પર કસ્ટમ ડોમેન આપમેળે પ્રાથમિક તરીકે પ્રમોટ થાય છે.
- સુધારો: સમાપ્ત થયેલું ચુકવણી સાફ કરવામાં આવે ત્યારે બાકી સભ્યપદ રદ થાય છે.
- સુધારો: ઇનલાઇન લૉગિન પ્રોમ્પ્ટ બંધ કર્યા પછી પાસવર્ડ મજબૂતી ચેકર ફરીથી બાઇન્ડ થાય છે.
- સુધારો: સાઇટ પહેલેથી બનાવાઈ હોય ત્યારે આભાર પૃષ્ઠ પર અનંત પૃષ્ઠ રીલોડ બંધ કરવામાં આવ્યું.
- સુધારો: પ્લગિન સક્રિયકરણ અને સેટિંગ્સ સાચવતી વખતે WP કોર નોંધણી વિકલ્પ સિંક થાય છે.
- સુધારો: PHP 8.4 સુસંગતતા માટે `calculate_expiration`માં નલ સમાપ્તિ ગાર્ડ ઉમેરાયો.
- સુધારો: ગ્રાહક પાસે પહેલેથી સક્રિય સભ્યપદ હોય ત્યારે ડુપ્લિકેટ સાઇનઅપ્સ અવરોધાય છે.
- સુધારો: ચેકઆઉટમાં `date_expiration` માટે નલ ચેક ઉમેરાયો.
- સુધારો: સાઇટ પ્રોવિઝનિંગ મજબૂત બનાવાયું — મર્યાદાઓ, સભ્યપદ અનુમાન, ડોમેન પ્રમોશન.
- સુધારો: તપાસ નિષ્ફળ જાય ત્યારે પ્રી-ઇન્સ્ટોલ ચેક સ્થિતિ લેબલ NOT Activated તરીકે સુધારાયું.
- સુધારો: ઇમેઇલ ચકાસણી URLs માટે ચેકઆઉટ ડોમેન વપરાયું.
- સુધારો: પાસવર્ડ ફીલ્ડ હાજર ન હોય ત્યારે ચેકઆઉટ પછી આપમેળે લૉગિન.
- સુધારો: મફત સભ્યપદો હવે સમાપ્ત થતા નથી — જીવનભર તરીકે ગણવામાં આવે છે.
- સુધારો: ગ્રાહક ઇમેઇલ ચકાસે ત્યાં સુધી ઇમેઇલ ચકાસણી ગેટ સાઇટ પ્રકાશન રોકે છે.
- સુધારો: SES v2 API endpoint આધાર પાથ અને ઓળખ માર્ગ સુધારાયા.
- સુધારો: `wu_inline_login_error` હૂક પ્રી-સબમિટ કૅચ બ્લૉકમાં એમિટ થયો.
