import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Building2, Check, ChevronDown, Copy, Heart, HelpCircle, LockKeyhole, ShieldCheck, Users } from 'lucide-react';
import { SiApplepay, SiGooglepay, SiVisa, SiMastercard, SiAmericanexpress, SiJcb, SiDiscover } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import content from '@/content/donate.json';

const Donate = () => {
  const activeOptions = content.onlinePayments.amountOptions.filter(option => option.paymentLink);
  const [selected, setSelected] = useState(activeOptions[0]?.paymentLink || '');
  const [copied, setCopied] = useState('');
  const [copyError, setCopyError] = useState('');
  const selectedOption = activeOptions.find(option => option.paymentLink === selected);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(''), 3000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copyDetail = async (label: string, value: string) => {
    setCopyError('');
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
    } catch {
      setCopyError('Please select and copy the bank details below.');
    }
  };
  const impact = [
    { icon: BookOpen, title: 'Nurture the next generation', text: 'Support educational programs that connect children with learning, language and Islamic heritage.' },
    { icon: Users, title: 'Keep our community connected', text: 'Help sustain a welcoming place for cultural activities, family gatherings and community connection.' },
    { icon: Heart, title: 'Stand beside our families', text: 'Support the facilities and essential services our community relies on, including Islamic burial services.' },
  ];
  const bankFields = [
    { label: 'Account name', value: content.bankTransfer.accountName },
    { label: 'BSB', value: content.bankTransfer.bsb },
    { label: 'Account number', value: content.bankTransfer.accountNumber },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="orc-donate-page">
        <section className="orc-donate-top" aria-labelledby="donate-heading">
          <div className="container mx-auto px-4">
            <div className="orc-donate-layout">
              <div className="orc-donate-story">
                <p className="orc-eyebrow"><Heart size={16} />A gift today. A stronger community tomorrow.</p>
                <h1 id="donate-heading">Help our community<br /><em>grow together.</em></h1>
                <p className="orc-donate-intro">When you give to Oromo Resource Centre, you support a place where children learn their heritage, families find connection, and our community cares for one another.</p>
                <a href="#donation-options" className="orc-donate-mobile-link">Make a donation<ArrowDown size={17} /></a>
                <figure className="orc-donate-photo">
                  <img src="/lovable-uploads/f306178b-014f-4630-8f80-7cb59f05f283.png" alt="Oromo Resource Centre grounds in Mount Cottrell, Victoria" width="1777" height="578" fetchPriority="high" />
                  <figcaption><span>ROOTED IN CULTURE. UNITED IN CARE.</span><strong>For our families.<br />For our future.</strong></figcaption>
                </figure>
                <p className="orc-donate-caption">Oromo Resource Centre · Mount Cottrell, Victoria</p>
              </div>

              <aside id="donation-options" className="orc-giving-card" aria-labelledby="giving-heading">
                <div className="orc-giving-heart"><Heart size={26} /></div>
                <p className="orc-eyebrow">BE PART OF THE GOOD</p>
                <h2 id="giving-heading">Your generosity matters.</h2>
                <p className="orc-giving-subtitle">Choose a way to give and help support the community we share.</p>
                {activeOptions.length > 0 ? <>
                  <fieldset className="orc-donation-amounts">
                    <legend>Choose your donation <span>AUD</span></legend>
                    <div className={activeOptions.length > 1 ? 'orc-amount-grid' : ''}>
                      {activeOptions.map(option => <label key={option.paymentLink} className={`orc-amount-option ${selected === option.paymentLink ? 'is-selected' : ''}`}>
                        <input type="radio" name="donation-amount" value={option.paymentLink} checked={selected === option.paymentLink} onChange={() => setSelected(option.paymentLink)} />
                        <span>{option.label}</span><Check size={19} aria-hidden="true" />
                      </label>)}
                    </div>
                  </fieldset>
                  <a href={selectedOption?.paymentLink} target="_blank" rel="noopener noreferrer" className="orc-donate-primary">
                    <Heart size={19} />{selectedOption?.label.startsWith('$') ? `Donate ${selectedOption.label}` : 'Continue to donate'}<ArrowUpRight size={20} />
                  </a>
                  <p className="orc-payment-note"><LockKeyhole size={14} />Continue to Zeller checkout in a new tab.</p>
                  <div className="orc-payment-methods" aria-label="Payment methods">
                    <SiApplepay aria-label="Apple Pay" /><SiGooglepay aria-label="Google Pay" /><SiVisa aria-label="Visa" /><SiMastercard aria-label="Mastercard" /><SiAmericanexpress aria-label="American Express" /><SiJcb aria-label="JCB" /><SiDiscover aria-label="Discover" />
                  </div>
                  <p className="orc-payment-availability">Available methods are shown at checkout.</p>
                </> : <p className="orc-giving-subtitle">Online donations are currently unavailable. You can donate by bank transfer below.</p>}
                <div className="orc-giving-divider"><span>or give by bank transfer</span></div>
                <a href="#bank-transfer" className="orc-bank-choice"><Building2 size={20} /><span>Give an amount that suits you<small>View our bank details</small></span><ArrowDown size={18} /></a>
                <div className="orc-giving-thanks"><ShieldCheck size={19} /><p>Supporting Oromo Resource Centre<br /><span>ABN {content.impact.abn}</span></p></div>
              </aside>
            </div>
          </div>
        </section>

        <section className="orc-donation-impact" aria-labelledby="impact-heading">
          <div className="container mx-auto px-4">
            <Reveal className="orc-donation-section-intro"><p className="orc-eyebrow">THE DIFFERENCE WE CAN MAKE TOGETHER</p><h2 id="impact-heading">A little generosity.<br /><em>A meaningful difference.</em></h2><p>{content.impact.text}</p></Reveal>
            <div className="orc-impact-grid">{impact.map(({ icon: Icon, title, text }, i) => <Reveal key={title} delayMs={i * 100}><article className={`orc-impact-item orc-impact-item-${i}`}><div className="orc-impact-icon"><Icon size={26} /></div><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
            <Reveal className="orc-giving-quote"><Heart size={23} /><p>Every contribution is an act of care.<br /><strong>Thank you for being part of our community’s future.</strong></p></Reveal>
          </div>
        </section>

        <section id="bank-transfer" className="orc-donation-details" aria-labelledby="bank-heading">
          <div className="container mx-auto px-4 orc-donation-details-grid">
            <div><p className="orc-eyebrow"><Building2 size={17} />ANOTHER WAY TO GIVE</p><h2 id="bank-heading">Your gift.<br /><em>Your choice.</em></h2><p>Prefer to donate directly from your bank? Choose an amount that feels right for you and use the details here.</p><p className="orc-transfer-reference">{content.bankTransfer.note}</p></div>
            <div className="orc-bank-card"><h3><Building2 size={21} />{content.bankTransfer.heading}</h3><dl>{bankFields.map(({ label, value }) => <div key={label}><div><dt>{label}</dt><dd>{value}</dd></div><button type="button" onClick={() => copyDetail(label, value)} aria-label={`Copy ${label}`}><span>{copied === label ? 'Copied' : 'Copy'}</span>{copied === label ? <Check size={17} /> : <Copy size={17} />}</button></div>)}</dl><p role="status" aria-live="polite" className="orc-copy-status">{copyError || (copied ? `${copied} copied to clipboard.` : 'Use these details in your banking app.')}</p></div>
          </div>
        </section>

        <section className="orc-donation-faq" aria-labelledby="donation-faq-heading">
          <div className="container mx-auto px-4 orc-donation-faq-grid">
            <div><p className="orc-eyebrow"><HelpCircle size={17} />HERE TO HELP</p><h2 id="donation-faq-heading">A few helpful details.</h2><p>Have a question before giving?<br /><a href="/#contact" className="orc-text-link">Get in touch with our team<ArrowRight size={17} /></a></p></div>
            <div className="orc-faq-list">
              <details><summary>What will my donation support?<ChevronDown size={19} /></summary><p>{content.aboutYourDonation.bullets[0]}. {content.aboutYourDonation.bullets[1]}.</p></details>
              <details><summary>Can I give a different amount?<ChevronDown size={19} /></summary><p>You can give any amount by bank transfer. The online button uses the payment amount shown on this page. Please review your details at checkout before completing your donation.</p><a href="#bank-transfer" className="orc-text-link">See bank details<ArrowDown size={16} /></a></details>
              <details><summary>How do I ask about a donation receipt?<ChevronDown size={19} /></summary><p>For tax receipts or donation queries, please contact our team with your name, donation date and payment reference.</p><a href="/#contact" className="orc-text-link">Contact Oromo Resource Centre<ArrowRight size={16} /></a></details>
              <details><summary>Can I contribute in another way?<ChevronDown size={19} /></summary><p>Your time and involvement matter too. Explore volunteering and community membership to find another way to help.</p><div className="flex gap-5 flex-wrap"><Link to="/volunteer" className="orc-text-link">Volunteer<ArrowRight size={16} /></Link><Link to="/membership" className="orc-text-link">Membership<ArrowRight size={16} /></Link></div></details>
            </div>
          </div>
        </section>
        <section className="orc-donation-closing"><div className="container mx-auto px-4"><Heart size={30} /><h2>Let’s build a stronger community.<br /><em>Together.</em></h2><p>Your support helps keep our community connected, learning and cared for.</p><a href="#donation-options" className="orc-button orc-button-gold">Make a donation<ArrowUpRight size={19} /></a></div></section>
      </main>
      <Footer />
    </div>
  );
};
export default Donate;
