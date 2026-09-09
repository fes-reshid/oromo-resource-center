import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { ImageIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface GalleryPhoto {
  image: string;
  album: string;
  caption?: string;
}

// Every file dropped into src/content/gallery-photos/ (via the CMS's
// "Gallery Photos" collection, or directly) is picked up automatically at
// build time — adding a photo never requires a code change.
const photoModules = import.meta.glob<GalleryPhoto>('/src/content/gallery-photos/*.json', {
  eager: true,
  import: 'default',
});
const allPhotos = Object.values(photoModules);

const ALBUM_ORDER = [
  'Saturday School',
  'Community Gatherings',
  'Cultural Events',
  'Islamic Events',
];

function groupByAlbum(photos: GalleryPhoto[]) {
  const groups = new Map<string, GalleryPhoto[]>();
  for (const photo of photos) {
    const list = groups.get(photo.album) ?? [];
    list.push(photo);
    groups.set(photo.album, list);
  }
  const orderedNames = [
    ...ALBUM_ORDER.filter((name) => groups.has(name)),
    ...[...groups.keys()].filter((name) => !ALBUM_ORDER.includes(name)),
  ];
  return orderedNames.map((name) => ({ name, photos: groups.get(name)! }));
}

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);

  const albums = groupByAlbum(allPhotos);
  const activeAlbum = albums.find((a) => a.name === selectedAlbum);

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

        {albums.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No photos yet — check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <Card
                key={album.name}
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedAlbum(album.name)}
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={album.photos[0].image}
                    alt={album.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">{album.name}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <ImageIcon className="h-4 w-4" />
                        <span>{album.photos.length} photo{album.photos.length === 1 ? '' : 's'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Dialog open={selectedAlbum !== null} onOpenChange={() => setSelectedAlbum(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{activeAlbum?.name}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {activeAlbum?.photos.map((photo, i) => (
              <figure key={i} className="space-y-1">
                <img
                  src={photo.image}
                  alt={photo.caption || activeAlbum.name}
                  className="w-full h-auto rounded-lg"
                />
                {photo.caption && (
                  <figcaption className="text-xs text-muted-foreground">{photo.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
