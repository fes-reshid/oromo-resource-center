import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Laptop, 
  Languages, 
  School as SchoolIcon,
  Clock,
  MapPin,
  Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const School = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const programs = [
    {
      icon: BookOpen,
      title: 'Quranic Studies',
      description: 'Comprehensive Quran and Iqra classes for all ages, teaching proper recitation, memorization, and understanding of the Holy Quran.',
      features: [
        'Quran recitation (Tajweed)',
        'Iqra foundation program',
        'Quran memorization (Hifz)',
        'Tafsir (Quranic interpretation)'
      ],
      color: 'primary'
    },
    {
      icon: Languages,
      title: 'Oromo Language Classes',
      description: 'Preserving our cultural heritage through comprehensive Oromo language education for children and adults.',
      features: [
        'Reading and writing in Oromo',
        'Grammar and vocabulary',
        'Cultural stories and traditions',
        'Conversational practice'
      ],
      color: 'primary'
    },
    {
      icon: GraduationCap,
      title: 'Children\'s Homework Club',
      description: 'After-school support helping children with their homework and building strong academic foundations.',
      features: [
        'Homework assistance',
        'Reading support',
        'Math tutoring',
        'Study skills development'
      ],
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Adult Education Programs',
      description: 'Educational opportunities for adults to continue learning and developing new skills.',
      features: [
        'English language classes',
        'Computer literacy training',
        'Islamic studies for adults',
        'Professional development workshops'
      ],
      color: 'primary'
    },
    {
      icon: BookOpen,
      title: 'Hadith Studies',
      description: 'Deep understanding of the Prophet\'s teachings through systematic study of Hadith literature.',
      features: [
        'Authentic Hadith collections',
        'Understanding Sunnah',
        'Application in daily life',
        'Hadith terminology'
      ],
      color: 'primary'
    },
    {
      icon: Laptop,
      title: 'Computer & Technology',
      description: 'Essential digital skills training to help community members thrive in the modern world.',
      features: [
        'Basic computer skills',
        'Internet and email usage',
        'Microsoft Office training',
        'Digital safety and literacy'
      ],
      color: 'primary'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <SchoolIcon className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Saturday School Programs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quality education in Islamic studies, Oromo language, and essential life skills for all ages
          </p>
        </div>

        {/* Schedule Information */}
        <Card className="mb-16 bg-primary/5 border-primary/20">
          <CardContent className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-lg">Every Saturday</h3>
                <p className="text-muted-foreground">Weekly classes during school term</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-lg">9:00 AM - 3:00 PM</h3>
                <p className="text-muted-foreground">Full day program with breaks</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-lg">Victoria</h3>
                <p className="text-muted-foreground">Multiple locations available</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Programs Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Our Educational Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card 
                  key={index}
                  className="relative overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {program.description}
                    </p>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Choose Our School Section */}
        <Card className="mb-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <CardContent className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Why Choose Our School?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Qualified Teachers</h3>
                  <p className="text-muted-foreground">Experienced educators dedicated to quality Islamic and academic education</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Small Class Sizes</h3>
                  <p className="text-muted-foreground">Individual attention for each student to ensure effective learning</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Languages className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Cultural Preservation</h3>
                  <p className="text-muted-foreground">Maintaining Oromo language and Islamic heritage for future generations</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Comprehensive Curriculum</h3>
                  <p className="text-muted-foreground">Well-rounded education covering religious, cultural, and practical skills</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enrollment CTA */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="py-12 text-center">
            <SchoolIcon className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Enroll Your Child Today</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Give your children the gift of quality Islamic education and cultural heritage preservation
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8"
              onClick={() => navigate('/enrollment')}
            >
              Register Now
            </Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default School;
