import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Volunteer = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Make a difference in our community by volunteering with Oromo Resource Centre Inc
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Volunteer Information */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Why Volunteer With Us?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Make an Impact</h3>
                  <p className="text-muted-foreground">
                    Help preserve Oromo culture and language while supporting community members in their journey of integration and growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Build Connections</h3>
                  <p className="text-muted-foreground">
                    Connect with like-minded individuals and become part of a supportive community working towards common goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Develop Skills</h3>
                  <p className="text-muted-foreground">
                    Gain valuable experience in community service, event organization, education, and cultural preservation.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Flexible Opportunities</h3>
                  <p className="text-muted-foreground">
                    Choose from various volunteer roles that match your skills, interests, and availability.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Volunteer Application Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Volunteer Application</CardTitle>
              <p className="text-muted-foreground">
                Tell us about yourself and how you'd like to contribute to our community.
              </p>
            </CardHeader>
            <CardContent>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfW9M2mAltnGJv0-mOznaMYIt8136-sscVaTJNJFKz8wutGrw/viewform?embedded=true" 
                width="640" 
                height="824" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                style={{ minWidth: '100%', maxWidth: '100%', border: 'none' }}
              >
                Loading…
              </iframe>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Volunteer;