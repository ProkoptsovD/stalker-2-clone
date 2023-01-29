import React from 'react';

import Button from '../common/components/button';
import Checkbox from '../common/components/checkbox';
import Divider from '../common/components/divider';
import Input from '../common/components/input';

import {
  agreementToRecieveNewsText,
  newsletterButtonText,
  newsletterHeadline,
  newsletterInputPlaceholder,
  newsletterText,
  privacyAgreementPhrasePartOne,
  privacyAgreementPhrasePartTwo,
  privacyPolicy,
  termsAndConditions
} from './constants/newsletter.const';

import styles from './newsletter.module.css';

const defaultFormData = {
  email: '',
  agreeToRecieveNews: false,
  agreeWithTermsAndConditions: false
};

function Newsletter({ onFormSubmit, className = '' }: NewsletterProps) {
  const [formData, setFormData] = React.useState<SubscriptionFormData>(defaultFormData);

  const isDisabled = Object.values(formData).some((value) => !value);

  function inputValueChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name, checked, type } = event.currentTarget;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: inputValue }));
  }

  function formSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isDisabled) return;

    onFormSubmit(formData);
  }

  return (
    <div className={[styles.newsletter, className].join(' ')}>
      <h3 className={styles.headline}>{newsletterHeadline}</h3>

      <Divider variant="hr-line" className={styles.divider} />

      <p className={styles.text}>{newsletterText}</p>

      <form className={styles.form} onSubmit={formSubmitHandler}>
        <Input
          name="email"
          placeholder={newsletterInputPlaceholder}
          wrapperClassName={styles.input}
          value={formData.email}
          onChange={inputValueChangeHandler}
        />
        <Checkbox
          name="agreeToRecieveNews"
          withContent={agreementToRecieveNewsText}
          checked={formData.agreeToRecieveNews}
          wrapperClassName={styles.agreement}
          onChange={inputValueChangeHandler}
        />
        <Checkbox
          name="agreeWithTermsAndConditions"
          checked={formData.agreeWithTermsAndConditions}
          withContent={TermAndConditionsText}
          onChange={inputValueChangeHandler}
        />

        <Button
          content={newsletterButtonText}
          as="button"
          variant="secondary"
          type="submit"
          className={styles.subscribe_btn}
          disabled={isDisabled}
        />
      </form>
    </div>
  );
}

export default Newsletter;

function TermAndConditionsText() {
  return (
    <p className={styles.agreement}>
      {privacyAgreementPhrasePartOne}&nbsp;
      <a className={styles.agreement_link}>{termsAndConditions}&nbsp;</a>
      {privacyAgreementPhrasePartTwo}
      <a className={styles.agreement_link}>&nbsp; {privacyPolicy}</a>
    </p>
  );
}

export interface NewsletterProps {
  onFormSubmit: (formData: SubscriptionFormData) => void;
  className?: string;
}

export type SubscriptionFormData = {
  email: string;
  agreeToRecieveNews: boolean;
  agreeWithTermsAndConditions: boolean;
};
