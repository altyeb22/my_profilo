import React, { useEffect, useRef, useState, useMemo } from "react";
import hljs from "highlight.js";
import ClipboardJS from "clipboard";
import { IconClipboard, IconCheck } from "@tabler/icons-react";
import "highlight.js/styles/atom-one-dark.css";
import { useTranslation } from 'react-i18next';

const FlutterTutorialContent = () => {
  const { t, i18n } = useTranslation();

  const [copied, setCopied] = useState(null);
  const codeRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const setupClipboard = (buttonClassName, targetRef) => {
    const clipboard = new ClipboardJS(buttonClassName, {
      target: () => targetRef.current || document.body,
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
        {/* {copied === buttonClassName ? <IconCheck className="text-[5px]" /> : <IconClipboard />} */}
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
        code: `flutter create my_flutter_app`,
        index: 0,
      },
      {
        code: `cd my_flutter_app`,
        index: 1,
      },
      {
        code: `flutter run`,
        index: 2,
      },
      {
        code: `void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('${t('flutterTutorial.example1Title')}'),
        ),
        body: Center(
          child: Text(
            '${t('flutterTutorial.example1Text')}',
            style: TextStyle(fontSize: 24),
          ),
        ),
      ),
    );
  }
}
`,
        index: 3,
      },
    ],
    [t]
  );

  useEffect(() => {
    hljs.initHighlightingOnLoad();
    codeRefs.forEach((ref, index) => {
      if (ref.current) {
        hljs.highlightBlock(ref.current);
      }
    });

    codeRefs.forEach((ref, index) => setupClipboard(`.copy-button${index + 1}`, ref));
  }, [codeRefs, t]);

  return (
    <div className="mt-20">
      <h1 style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>{t('flutterTutorial.heading')}</h1>
      <p style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>{t('flutterTutorial.intro')}</p>
      <p style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>{t('flutterTutorial.steps')}</p>

      <p style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>
        {t('flutterTutorial.createFlutterApp')}
      </p>
      {generateCodeBlock(0)}

      <p className="mt-3" style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>
        {t('flutterTutorial.navigateToFolder')}
      </p>
      {generateCodeBlock(1)}

      <p className="mt-3" style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>
        {t('flutterTutorial.runApp')}
      </p>
      {generateCodeBlock(2)}

      <p style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>{t('flutterTutorial.editFiles')}</p>

      <h2 style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>{t('flutterTutorial.example1')}</h2>
      <pre>
        {generateCodeBlock(3)}
      </pre>

    </div>
  );
};

export default FlutterTutorialContent;
