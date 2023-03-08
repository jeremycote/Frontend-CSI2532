import { getHotelRoute } from '@/src/config/routes';
import { Hotel } from '@/src/types/Hotel';
import { useRouter } from 'next/router';
import styles from './hotel-card.module.css';

interface HotelCardProps {
  className: string;
  hotel: Hotel;
}

const HotelCard = ({ className, hotel }: HotelCardProps) => {
  const router = useRouter();

  return (
    <div
      className={`${className} ${styles.hotelCard}`}
      onClick={(e) => {
        e.preventDefault();
        router.push(getHotelRoute(hotel.hotel_id));
      }}
    >
      <div className={styles.imageCarousel}>
        <img
          src={hotel.images?.length! > 0 ? hotel.images![0] : '/vercel.svg'}
        ></img>
      </div>
      <div className={styles.description}>
        <h1>{hotel.name}</h1>
        <p>{`0 per night`}</p>
      </div>
    </div>
  );
};

export default HotelCard;
