import React, {useEffect} from 'react';

const API_BASE = 'https://ultimatemultisite.com/wp-json/sd-ai-agent/v1';
// SHA-256 of the deployed assets. Immutable caches need a new URL when content
// changes; update these hashes and rebuild the docs after a widget deployment.
const SCRIPT_VERSION = '8e7753cbc04f25f810bce3203cc1cc7b36dd2a4e53cafecb3a41be938a95ed01';
const STYLE_VERSION = '61b442d0e8edac2be1d94c52e42245c9db06aa22c05c4f8ef67d5f5e719f0ac3';
const ASSET_BASE = 'https://ultimatemultisite.com/app/plugins/superdav-ai-agent/build';
const SCRIPT_SRC = `${ASSET_BASE}/embed-widget.js?ver=${SCRIPT_VERSION}`;
const STYLE_HREF = `${ASSET_BASE}/style-embed-widget.css?ver=${STYLE_VERSION}`;
const SCRIPT_ID = 'ums-docs-assistant-script';
const STYLE_ID = 'ums-docs-assistant-style';

function appendAssistantStylesheet() {
  if (document.getElementById(STYLE_ID)) {
    return;
  }

  const stylesheet = document.createElement('link');
  stylesheet.id = STYLE_ID;
  stylesheet.rel = 'stylesheet';
  stylesheet.href = STYLE_HREF;
  document.head.appendChild(stylesheet);
}

function appendAssistantScript() {
  const existingScript = document.getElementById(SCRIPT_ID);
  if (existingScript) {
    return existingScript;
  }

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.src = SCRIPT_SRC;
  script.defer = true;
  script.dataset.apiBase = API_BASE;
  script.dataset.embedId = 'ums-docs';
  script.dataset.theme = document.documentElement.dataset.theme || 'light';
  script.dataset.locale = document.documentElement.lang || 'en';
  script.dataset.greeting = 'Ask me about Ultimate Multisite docs.';
  document.body.appendChild(script);

  return script;
}

function syncAssistantTheme(script) {
  script.dataset.theme = document.documentElement.dataset.theme || 'light';
}

export default function Root({children}) {
  useEffect(() => {
    appendAssistantStylesheet();
    const script = appendAssistantScript();
    syncAssistantTheme(script);

    const observer = new MutationObserver(() => {
      syncAssistantTheme(script);
    });

    observer.observe(document.documentElement, {
      attributeFilter: ['data-theme'],
      attributes: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
