import React, { useEffect, useRef, useState, useMemo } from "react";
import hljs from "highlight.js";
import ClipboardJS from "clipboard";
import { IconClipboard, IconCheck } from "@tabler/icons-react";
import "highlight.js/styles/atom-one-dark.css";
import { useTranslation } from 'react-i18next';

const ReactTutorial = () => {
  const { t, i18n } = useTranslation();

  const [copied, setCopied] = useState(null);

  const codeRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const setupClipboard = (buttonClassName, targetRef) => {
    const clipboard = new ClipboardJS(buttonClassName, {
      target: () => {
        // Check if targetRef.current is not null before returning it
        return targetRef.current ? targetRef.current : document.body;
      },
    });
  
    clipboard.on("success", () => {
      setCopied(buttonClassName);
      setTimeout(() => {
        setCopied(null);
      }, 1500);
    });
  
    return () => clipboard.destroy();
  };
  

  const generateCodeButton = (index) => {
    const buttonClassName = `.copy-button${index + 1}`;
    return (
      <button
        key={index}
        className={`copy-button${index + 1} items-center gap-1 justify-end p-2 text-[12px] text-white flex w-full bg-[#282c34] ${
          copied === buttonClassName ? "copied" : ""
        }`}
        data-clipboard-text={codeRefs[index].current?.textContent}
      >
        {copied === buttonClassName ? <IconCheck className="w-4" /> : <IconClipboard className="w-4" />}
        {copied === buttonClassName ? "Copied" : "Copy Code"}
      </button>
    );
  };

  const generateCodeBlock = (index) => {
    return (
      <div className="code-container" key={index}>
      {generateCodeButton(index)}
      <pre>
        <code ref={codeRefs[index]} className={index === 1 ? "bash" : "javascript"}>
          {codeExamples[index].code}
        </code>
      </pre>
    </div>
  );
  };

  const codeExamples = useMemo(
    () => [
      {
        code: `npx create-react-app my-react-app`,
        index: 0,
      },
      {
        code: `cd my-react-app`,
        index: 1,
      },
      {
        code: `npm start`,
        index: 2,
      },
      {
        code: `import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App!</h1>
      <p>Edit src/App.js and save to reload.</p>
    </div>
  );
}

export default App;`,
        index: 3,
      },
    ],
    []
  );

  useEffect(() => {
    hljs.initHighlightingOnLoad();
    codeRefs.forEach((ref, index) => setupClipboard(`.copy-button${index + 1}`, ref));
  }, [codeRefs]);

  return (
    <div className="mt-20">
      <h1 style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>{t('tutorial.heading')}</h1>
      <p style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>{t('tutorial.intro')}</p>
      <p style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>{t('tutorial.steps')}</p>

      <p style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>
        {t('tutorial.environmentSetup')}
      </p>
      {generateCodeBlock(0)}

      <p className="mt-3" style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>
        {t('tutorial.navigateToFolder')}
      </p>
      {generateCodeBlock(1)}

      <p style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>
        {t('tutorial.runApp')}
      </p>
      {generateCodeBlock(2)}

      <p style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>{t('tutorial.editFiles')}</p>

      <h2 style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>{t('tutorial.example1')}</h2>
      {generateCodeBlock(3)}
    </div>
  );
};

export default ReactTutorial;
