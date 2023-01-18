import React from 'react';

import type { Language } from '../../types/languages.type';
import { ICON_NAME } from '../../types/icon.type';

import Icon from '../icon';
import styles from './lang-switcher.module.css';

function LangSwitcher({ onLanguageChange, languages, className }: LangSwitcherProps) {
  const [lang, setLang] = React.useState<string>('en_US');

  React.useEffect(() => {
    onLanguageChange(lang);
  }, [lang]);

  function langSelectHandler({ currentTarget: { value } }: React.ChangeEvent<HTMLSelectElement>) {
    setLang(value);
  }

  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
      <select
        id="language-select-button"
        className={styles.switcher}
        value={lang}
        onChange={langSelectHandler}
      >
        {languages.map(({ langProperName, locale }) => (
          <option value={locale} key={locale} className={styles.option}>
            {langProperName}
          </option>
        ))}
      </select>

      <Icon name={ICON_NAME.LANG} className={styles.icon} />
    </div>
  );
}

export default LangSwitcher;

export interface LangSwitcherProps {
  onLanguageChange: (lang: string) => void;
  languages: Language[];
  className?: string;
}
