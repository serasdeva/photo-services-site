// src/app/portfolio/page.tsx
import PhotoGallery from '@/components/PhotoGallery';

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-2814507c4a69?w=800&auto=format&fit=crop&q=80',
    alt: 'Свадебная пара на закате',
    width: 800,
    height: 1200,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1567532939604-c928b3f7b7ec?w=800&auto=format&fit=crop&q=80',
    alt: 'Семья с ребёнком на природе',
    width: 800,
    height: 533,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1505751171719-91b7a1f31tar?w=800&auto=format&fit=crop&q=80',
    alt: 'Портрет беременной женщины',
    width: 800,
    height: 1067,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fe4726?w=800&auto=format&fit=crop&q=80',
    alt: 'Свадебный поцелуй',
    width: 800,
    height: 1200,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80',
    alt: 'Молодая семья',
    width: 800,
    height: 1200,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=80',
    alt: 'Портрет невесты',
    width: 800,
    height: 1067,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1567532939604-c928b3f7b7ec?w=800&auto=format&fit=crop&q=80',
    alt: 'Семейная съёмка в парке',
    width: 800,
    height: 533,
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1519741497674-2814507c4a69?w=800&auto=format&fit=crop&q=80',
    alt: 'Свадьба на пляже',
    width: 800,
    height: 1200,
  },
  // Добавь ещё 4–8 своих фото аналогично
];

export default function Portfolio() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-8">Портфолио</h1>
      <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Здесь собраны мои любимые работы: свадьбы, семейные съёмки, портреты, maternity и love story.
      </p>

      <PhotoGallery photos={photos} />
    </div>
  );
}