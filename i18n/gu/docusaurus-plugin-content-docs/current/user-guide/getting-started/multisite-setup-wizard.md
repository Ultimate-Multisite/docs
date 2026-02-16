---
title: મલ્ટિસાઇટ સેટઅપ વિઝાર્ડ
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite સેટઅપ વિઝાર્ડ

Ultimate Multisite માં એક બિલ્ટ-ઇન વિઝાર્ડ છે જે સ્ટાન્ડર્ડ WordPress ઇન્સ્ટોલેશનને આપોઆપ WordPress Multisite નેટવર્કમાં બદલી નાખે છે. આનાથી તમારે `wp-config.php` ને મેન્યુઅલી એડિટ કરવાની કે database commands ચલાવવાની જરૂર રહેતી નથી.

:::tip
જો તમારું WordPress ઇન્સ્ટોલેશન પહેલેથી જ Multisite નેટવર્ક તરીકે ચાલી રહ્યું હોય, તો તમે આ સ્ટેપ સંપૂર્ણપણે છોડી શકો છો. વિઝાર્ડ ફક્ત ત્યારે જ દેખાય છે જ્યારે Multisite હજુ સુધી enable નથી.
:::

## વિઝાર્ડ ક્યારે દેખાય છે?

જ્યારે તમે સ્ટાન્ડર્ડ (non-Multisite) WordPress ઇન્સ્ટોલેશન પર Ultimate Multisite ને activate કરો છો, ત્યારે plugin ઓળખી કાઢે છે કે Multisite enable નથી અને તમને રેગ્યુલર સેટઅપ વિઝાર્ડની જગ્યાએ આપોઆપ Multisite Setup Wizard પર રીડાયરેક્ટ કરે છે.

તમે તેને સીધા **WP Admin > Ultimate Multisite > Multisite Setup** પર પણ એક્સેસ કરી શકો છો.

## પૂર્વ-આવશ્યકતાઓ

વિઝાર્ડ ચલાવતા પહેલા, ખાતરી કરો કે:

- તમારી પાસે તમારા WordPress ઇન્સ્ટોલેશન માટે **administrator access** છે
- તમારા સર્વરની `wp-config.php` ફાઇલ web server દ્વારા **writable** છે
- તમારી પાસે તમારી ફાઇલો અને database નું **તાજેતરનું backup** છે

:::warning
વિઝાર્ડ તમારી `wp-config.php` ફાઇલમાં ફેરફાર કરે છે અને નવા database tables બનાવે છે. આગળ વધતા પહેલા હંમેશા backup બનાવો.
:::

## સ્ટેપ 1: સ્વાગત

પહેલી સ્ક્રીન સમજાવે છે કે WordPress Multisite શું છે અને વિઝાર્ડ શું કરશે:

- તમારા WordPress configuration માં Multisite ફીચર enable કરશે
- જરૂરી network database tables બનાવશે
- `wp-config.php` માં જરૂરી multisite constants ઉમેરશે
- આખા નેટવર્કમાં Ultimate Multisite ને Network-activate કરશે

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

આગળ વધવા માટે **Continue** પર ક્લિક કરો.

## સ્ટેપ 2: નેટવર્ક Configuration

આ સ્ટેપ તમને તમારી network settings configure કરવા માટે કહે છે.

### સાઇટ Structure

તમારી network sites કેવી રીતે ગોઠવવામાં આવશે તે પસંદ કરો:

- **Sub-domains** (ભલામણ કરેલ) — સાઇટ્સને પોતાનું subdomain મળે છે, દા.ત. `site1.yourdomain.com`
- **Sub-directories** — સાઇટ્સ paths તરીકે બને છે, દા.ત. `yourdomain.com/site1`

:::note
જો તમે sub-domains પસંદ કરો, તો તમારે તમારા domain માટે **wildcard DNS** અને **wildcard SSL certificate** configure કરવાની જરૂર પડશે. મોટાભાગના managed WordPress hosts આ આપોઆપ સંભાળી લે છે. વિગતવાર સરખામણી માટે [Ultimate Multisite 101](./ultimate-multisite-101) જુઓ.
:::

### Network Title

તમારા network માટે એક નામ દાખલ કરો. આ તમારા વર્તમાન site title ને "Network" ઉમેરીને default રહે છે. તમે આને પછીથી network settings માંથી બદલી શકો છો.

### Network Admin Email

Network administration notifications માટે વપરાતું email address. આ વર્તમાન user ના email address પર default રહે છે.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

ફીલ્ડ્સ ભર્યા પછી, આગળ વધવા માટે **Continue** પર ક્લિક કરો.

## સ્ટેપ 3: Installation

શરૂ કરવા માટે **Install** બટન પર ક્લિક કરો. વિઝાર્ડ ક્રમમાં પાંચ automated steps કરે છે, દરેક real-time માં તેની પ્રગતિ બતાવે છે:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| સ્ટેપ | વર્ણન |
|------|-------------|
| **Enable Multisite** | `wp-config.php` માં `WP_ALLOW_MULTISITE` constant ઉમેરે છે |
| **Create Network** | Multisite database tables (`wp_site`, `wp_sitemeta`, `wp_blogs`, વગેરે) બનાવે છે અને તેમાં તમારું network configuration ભરે છે |
| **Update Configuration** | `wp-config.php` માં final multisite constants ઉમેરે છે (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, વગેરે) |
| **Fix Cookies** | Activation પછી authentication issues ટાળવા network metadata માં site URL સાચું છે તેની ખાતરી કરે છે |
| **Network Activate Plugin** | Ultimate Multisite ને Network-activate કરે છે જેથી તે આખા network માં ચાલે |

દરેક step આમાંથી એક status બતાવે છે:

- **Pending** — Process થવાની રાહ જોઈ રહ્યું છે
- **Installing...** — હાલમાં ચાલી રહ્યું છે
- **Success!** — સફળતાપૂર્વક પૂર્ણ થયું
- **Error message** — કોઈ error થયો (message issue વર્ણવશે)

બધા steps સફળતાપૂર્વક પૂર્ણ થયા પછી, તમે દરેક item માટે લીલો "Success!" status જોશો:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

ત્યારબાદ વિઝાર્ડ આપોઆપ completion સ્ક્રીન પર જશે.

## સ્ટેપ 4: પૂર્ણ

Installation પૂર્ણ થયા પછી, તમે WordPress Multisite enable થયું છે તેની પુષ્ટિ કરતો success message જોશો.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

હવે તમે તમારા WaaS platform ને configure કરવા (company details, default content, payment gateways, વગેરે) Ultimate Multisite setup wizard સાથે ચાલુ રાખી શકો છો.

:::note
Multisite installation પૂર્ણ થયા પછી, તમારું browser નવા-enabled network admin દ્વારા redirect થશે. Multisite environment માટે authentication cookies અપડેટ થતી હોવાથી તમારે ફરીથી log in કરવાની જરૂર પડી શકે છે.
:::

## Manual Setup Fallback

જો વિઝાર્ડ તમારી `wp-config.php` ફાઇલમાં write કરી શકતું નથી (file permissions કે server restrictions ને કારણે), તો તે તમારે manually ઉમેરવા માટેનો ચોક્કસ code બતાવશે:

1. **wp-config.php constants** જે `/* That's all, stop editing! */` લાઇનની ઉપર ઉમેરવાના છે
2. તમારા પસંદ કરેલા site structure (subdomain કે subdirectory) માટે યોગ્ય **.htaccess rewrite rules**

Manual changes કર્યા પછી, page refresh કરો અને વિઝાર્ડ ઓળખી લેશે કે multisite હવે active છે.

## Troubleshooting

### વિઝાર્ડ કહે છે કે wp-config.php writable નથી

તમારા web server process ને `wp-config.php` ફાઇલ પર write permission ની જરૂર છે. તમે કાં તો:

- File permissions ને અસ્થાયી રૂપે `644` કે `666` માં બદલો
- વિઝાર્ડ દ્વારા આપવામાં આવેલી manual setup fallback instructions નો ઉપયોગ કરો
- તમારા hosting provider ને મદદ માટે પૂછો

### Setup પછી Sites accessible નથી (subdomains)

જો તમે subdomain structure પસંદ કર્યું હોય, તો તમારે તમારા domain માટે **wildcard DNS** configure કરવાની જરૂર છે. DNS record ઉમેરો:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

જો તમને ખાતરી ન હોય કે આ કેવી રીતે configure કરવું, તો તમારા hosting provider સાથે ચકાસો.

### Setup પછી Authentication issues

જો multisite setup પછી તમે log out થઈ ગયા હો કે cookie errors અનુભવી રહ્યા હો:

1. Site માટે તમારી browser cookies clear કરો
2. `yourdomain.com/wp-login.php` પર ફરીથી log in કરો
3. જો issue ચાલુ રહે, તો ચકાસો કે તમારી `wp-config.php` માં `COOKIE_DOMAIN` `false` પર set નથી — subdomain multisite installations પર આ એક જાણીતી issue છે

### Installation દરમિયાન કોઈ step fail થયું

જો installation steps માંથી કોઈ error બતાવે:

1. બતાવવામાં આવેલો error message નોંધો
2. Configuration step પર પાછા જાઓ અને ફરી પ્રયાસ કરો
3. જો error ચાલુ રહે, તો વધુ details માટે તમારા server નો PHP error log ચકાસો
4. જે steps પહેલેથી પૂર્ણ થઈ ગયા છે તે પછીના runs માં skip થશે (installer idempotent છે)
