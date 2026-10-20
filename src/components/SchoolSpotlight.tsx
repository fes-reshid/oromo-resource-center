import { ArrowRight, BookOpen, Compass, GraduationCap, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Reveal from '@/components/Reveal';
import courses from '@/content/featured-courses.json';

const SchoolSpotlight = () => {
  const { language, t } = useLanguage();
  const om = language === 'om';
  return (
    <section id="saturday-school" className="orc-school-spotlight">
      <div className="container mx-auto px-4">
        <Reveal className="orc-section-heading">
          <div><p className="orc-eyebrow"><GraduationCap size={17} />{t('hero.saturdaySchool')}</p><h2>{om ? 'Barnoota har’aaf.' : 'Little learners.'}<br /><em>{om ? 'Bu’uura boruuf.' : 'Lifelong foundations.'}</em></h2></div>
          <div className="max-w-md"><p className="text-muted-foreground leading-relaxed mb-5">{om ? 'Qur’aana, afaan Oromoo fi barnoota Islaamaan ijoolleen keenya haa guddatan. Tuhfatul Atfaal fi Seeraa sagantaa barnootaa keenya keessatti baradhaa.' : 'A place to learn, belong and grow. Explore Quran, Oromo language and Islamic studies, including Tuhfatul Atfaal and Seeraa in our Saturday School program.'}</p><Link className="orc-text-link" to="/school">{om ? 'Sagantaalee hunda ilaali' : 'Explore all school programs'}<ArrowRight size={18} /></Link></div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => {
            const Icon = index === 0 ? BookOpen : Compass;
            return <Reveal key={course.id} delayMs={index * 120}><article className={`orc-course-card orc-course-${index}`}>
              <div className="orc-course-top"><div className="orc-course-icon"><Icon size={30} /></div><span>0{index + 1}</span></div>
              <p className="orc-course-category">{om ? course.categoryOm : course.category}</p>
              <h3>{course.title}</h3><p className="orc-course-description">{om ? course.descriptionOm : course.description}</p>
              <ul>{(om ? course.featuresOm : course.features).slice(0, 3).map(feature => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
              <Link to={`/school#${course.id}`} className="orc-text-link">{om ? 'Waa’ee barnootaa' : 'Discover this class'}<ArrowRight size={18} /></Link>
            </article></Reveal>;
          })}
        </div>
        <Reveal className="orc-school-invitation"><span>{om ? 'Imala barnootaa isaanii waliin haa jalqabnu.' : 'Help your child take their next step.'}</span><Link to="/enrollment" className="orc-text-link">{om ? 'Galmee mana barumsaa' : 'Saturday School enrolment'}<ArrowRight size={18} /></Link></Reveal>
      </div>
    </section>
  );
};
export default SchoolSpotlight;
