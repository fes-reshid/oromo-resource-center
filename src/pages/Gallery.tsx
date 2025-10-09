import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { ImageIcon, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  
  const albums = [
    {
      id: 1,
      title: t('galleryPage.saturdaySchoolAlbum'),
      image: '/lovable-uploads/gallery-1.jpg',
      count: 45
    },
    {
      id: 2,
      title: t('galleryPage.communityGatheringAlbum'),
      image: '/lovable-uploads/gallery-2.jpg',
      count: 32
    },
    {
      id: 3,
      title: t('galleryPage.culturalEventsAlbum'),
      image: '/lovable-uploads/gallery-3.jpg',
      count: 28
    },
    {
      id: 4,
      title: t('galleryPage.islamicEventsAlbum'),
      image: '/lovable-uploads/gallery-4.jpg',
      count: 38
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('galleryPage.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('galleryPage.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <Card 
              key={album.id} 
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedAlbum(album.id)}
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img 
                  src={album.image} 
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{album.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <ImageIcon className="h-4 w-4" />
                      <span>{album.count} photos</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-primary/10 px-8 py-4 rounded-lg">
            <p className="text-muted-foreground">
              {t('galleryPage.recentEvents')} - More photos coming soon!
            </p>
          </div>
        </div>
      </main>
      
      <Dialog open={selectedAlbum !== null} onOpenChange={() => setSelectedAlbum(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {albums.find(a => a.id === selectedAlbum)?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {selectedAlbum && (
              <div className="col-span-2 md:col-span-3">
                <img 
                  src={albums.find(a => a.id === selectedAlbum)?.image} 
                  alt={albums.find(a => a.id === selectedAlbum)?.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Gallery;
