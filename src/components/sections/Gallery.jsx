import { motion } from 'framer-motion';
import { GoldDivider, SectionLabel, SectionHeading, GoldText } from '../ui/SectionHeader';
import { staggerContainer, staggerItem, fadeUp } from '../../utils/motionVariants';

const galleryImages = [
  { src: '/gallery/salon-04.jpeg', alt: 'Classic Trends styling stations with illuminated mirrors' },
  { src: '/gallery/salon-06.jpeg', alt: 'Classic Trends haircut chairs and product shelves' },
  { src: '/gallery/salon-05.jpeg', alt: 'Classic Trends mirror stations and salon chairs' },
  { src: '/gallery/salon-02.jpeg', alt: 'Classic Trends women salon seating and mirrors' },
  { src: '/gallery/salon-07.jpeg', alt: 'Classic Trends beauty salon seating area' },
  { src: '/gallery/salon-03.jpeg', alt: 'Classic Trends massage chair and wash area' },
  { src: '/gallery/salon-01.jpeg', alt: 'Classic Trends salon interior lounge and wash station' },
];

const GalleryImage = ({ image, index }) => (
  <motion.figure
    variants={staggerItem}
    className={`group overflow-hidden border border-gold-luxury/15 bg-salon-card/40 ${
      index === 0 || index === 5 ? 'lg:col-span-2' : ''
    }`}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative aspect-[16/9] overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        loading={index < 2 ? 'eager' : 'lazy'}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-salon-bg/30 via-transparent to-transparent opacity-60" />
    </div>
  </motion.figure>
);

export const Gallery = () => {
  return (
    <section id="gallery" className="relative overflow-hidden bg-salon-bg py-20 md:py-28">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-emerald-deep/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionLabel>Salon Interior</SectionLabel>
          <SectionHeading className="mb-4">
            Classic Trends <GoldText>Gallery</GoldText>
          </SectionHeading>
          <GoldDivider className="mx-auto mb-4 max-w-xs" />
          <p className="mx-auto max-w-md font-body text-sm text-salon-muted">
            A look inside our salon space, styling stations, seating, and service areas.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryImages.map((image, index) => (
            <GalleryImage key={image.src} image={image} index={index} />
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />
    </section>
  );
};
