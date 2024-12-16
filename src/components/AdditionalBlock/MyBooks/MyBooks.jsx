import "./my-books.scss"
import 'swiper/scss';
import 'swiper/scss/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';


const MyBooks = ({ books }) => {

	return (
		<div className="additional__books additional__part">
			<h2 className="additional__part-title">Мої книги</h2>
			<div className="additional__part-content">
				<Swiper
					modules={[Pagination, Autoplay]}
					autoplay={{
						delay: 3500,
						disableOnInteraction: false,
					}}
					spaceBetween={0}
					slidesPerView={1}
					onSlideChange={() => console.log('slide change')}
					pagination={{ clickable: true }}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{books.length > 0 && books.map((el) =>
						<SwiperSlide key={el.id}>
							<img src={el.img} alt="" />
							<h3>{el.title}</h3>
							<a href={el.link} target="blank" className="link btn">Читати</a>
						</SwiperSlide>)}
				</Swiper>
			</div>
		</div>
	)
}

export default MyBooks