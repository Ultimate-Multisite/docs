---
title: એડ-ઓન ટેમ્પલેટ
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# એડન ટેમ્પલેટ

{{ADDON_DESCRIPTION}}

## જરૂરીયાતો

- WordPress 5.3 અથવા તેનાથી ઉપર
- PHP 7.4 અથવા તેનાથી ઉપર
- Multisite Ultimate પ્લગઇન (એક્ટિવ)

## ઇન્સ્ટોલેશન

1. એડન ફાઇલોને તમારા `/wp-content/plugins/` ડિરેક્ટરીમાં અપલોડ કરો
2. વર્ડપ્રેસમાં 'Plugins' મેનુ દ્વારા પ્લગઇન એક્ટિવેટ કરો
3. નેટવર્ક એડમિનમાં એડન સેટિંગ્સ કન્ફિગર કરો

## ડેવલપમેન્ટ

### સેટઅપ

```bash
# ડિપેન્ડન્સીઝ ઇન્સ્ટોલ કરો
composer install
npm install

# ટેસ્ટ ચલાવો
npm run test

# કોડ સ્ટાન્ડર્ડ્સ ચેક કરો
vendor/bin/phpcs
vendor/bin/phpstan

# કોડ સ્ટાઇલની સમસ્યાઓ ઠીક કરો
vendor/bin/phpcbf

# પ્રોડક્શન માટે બિલ્ડ કરો
npm run build
```

### પ્રોજેક્ટ સ્ટ્રક્ચર

```
ultimate-multisite-addon-template/
├── inc/                          # PHP ક્લાસ અને ઇન્ક્લુડ્સ
│   ├── class-multisite-ultimate-updater.php  # અપડેટ હેન્ડલર
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # મુખ્ય કાર્યક્ષમતા
├── tests/                        # યુનિટ ટેસ્ટ્સ
│   ├── bootstrap.php            # ટેસ્ટ બૂટસ્ટ્રેપ
│   ├── class-*-base.php         # બેઝ ટેસ્ટ ક્લાસ
│   └── class-*-test.php         # ટેસ્ટ કેસ
├── views/                       # ટેમ્પલેટ ફાઇલો
├── assets/                      # સ્ટેટિક એસેટ્સ
│   ├── css/                     # સ્ટાઇલશીટ્સ
│   ├── js/                      # JavaScript ફાઇલો
│   └── images/                  # ઇમેજીસ
├── lang/                        # ભાષા ફાઇલો
├── composer.json                # PHP ડિપેન્ડન્સીઝ
├── package.json                 # Node.js ડિપેન્ડન્સીઝ
├── phpunit.xml.dist             # PHPUnit કન્ફિગરેશન
├── .phpcs.xml.dist              # કોડ સ્ટાન્ડર્ડ્સ કન્ફિગરેશન
└── rector.php                   # કોડ મોડર્નાઇઝેશન નિયમો
```

### ટેસ્ટિંગ

આ એડનમાં એક વ્યાપક ટેસ્ટિંગ ફ્રેમવર્ક શામેલ છે:

- **યુનિટ ટેસ્ટ્સ**: WordPress test suite સાથે PHPUnit-આધારિત ટેસ્ટ્સ
- **બેઝ ટેસ્ટ ક્લાસ**: સામાન્ય ટેસ્ટ сценариев માટે હેલ્પર મેથડ્સ પૂરી પાડે છે
- **ટેસ્ટ કવરેજ**: કોડ કવરેજ ટ્રેક કરવા માટે કન્ફિગર કરેલ છે
- **મલ્ટિસાઇટ ટેસ્ટિંગ**: ટેસ્ટ મલ્ટિસાઇટ એન્વાયર્નમેન્ટમાં ચાલે છે

### કોડ સ્ટાન્ડર્ડ્સ

- **WordPress Coding Standards**: PHPCS દ્વારા લાગુ કરવામાં આવે છે
- **PHP 7.4+ Compatibility**: આધુનિક PHP ફીચર્સને સપોર્ટ કરે છે
- **Static Analysis**: ટાઇપ ચેકિંગ માટે PHPStan ઇન્ટિગ્રેશન
- **Code Modernization**: PHP અપગ્રેડ માટે Rector નિયમો

### બિલ્ડ સિસ્ટમ

- **Asset Processing**: CSS/JS ફાઇલો માટે મિનિફિકેશન
- **Translation**: POT ફાઇલ જનરેશન
- **Packaging**: ડિસ્ટ્રિબ્યુશન માટે આર્કાઇવ બનાવવું
- **Development Mode**: ડીબગીંગ માટે અનમિનિફાઇડ એસેટ્સ

## કન્ફિગરેશન

આ એડન નેટવર્ક એડમિન ઇન્ટરફેસ દ્વારા ઉપલબ્ધ વિવિધ કન્ફિગરેશન વિકલ્પોને સપોર્ટ કરે છે.

## હૂક્સ અને ફિલ્ટર્સ

### એક્શન્સ

- `ultimate-multisite-addon-template_init` - એડન ઇનિશિયલાઇઝેશન પછી ટ્રિગર થાય છે
- `ultimate-multisite-addon-template_loaded` - બધા એડન ફાઇલો લોડ થયા પછી ટ્રિગર થાય છે

### ફિલ્ટર્સ

- `ultimate-multisite-addon-template_settings` - એડન સેટિંગ્સમાં ફેરફાર કરો
- `ultimate-multisite-addon-template_enabled` - એડન એનેબલ/ડિસેબલ સ્ટેટસને ઓવરરાઇડ કરો

## લાયસન્સ

આ એડન GPL v3 અથવા તેના પછીના વર્ઝન હેઠળ લાયસન્સ પ્રાપ્ત છે.

## સપોર્ટ

સપોર્ટ અને ડોક્યુમેન્ટેશન માટે, [MultisiteUltimate.com](https://multisiteultimate.com) ની મુલાકાત લો
## ચેન્જલોગ

- Version 1.0.1 (2025-09-28): પ્રીફિક્સને ultimate-multisite માં નામ બદલ્યું; ટેક્સ્ટ ડોમેન અપડેટ કર્યું; વર્ઝન બમ્પ.


- Version (2025-09-28): પ્રીફિક્સને ultimate-multisite માં નામ બદલ્યું; ટેક્સ્ટ ડોમેન અપડેટ કર્યું; વર્ઝન બમ્પ.
