import React, {useEffect} from 'react';

const API_BASE = 'https://ultimatemultisite.com/wp-json/sd-ai-agent/v1';
const SCRIPT_SRC = 'https://ultimatemultisite.com/app/plugins/superdav-ai-agent/build/embed-widget.js';
const STYLE_HREF = 'https://ultimatemultisite.com/app/plugins/superdav-ai-agent/build/style-embed-widget.css';
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
  if (document.getElementById(SCRIPT_ID)) {
    return;
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
}

export default function Root({children}) {
  useEffect(() => {
    appendAssistantStylesheet();
    appendAssistantScript();
  }, []);

  return <>{children}</>;
}
