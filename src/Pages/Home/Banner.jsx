// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';


const Banner = () => {
    return    (
        <div className='mt-0'>        <Swiper
        
        
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
       
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        
      >
        <SwiperSlide  >
    
    <div className="hero   w-full " style={{backgroundImage:`url(${banner1})`}}>
            <div className="hero-overlay bg-opacity-60 bg-[hsla(0,0%,0%,0.8)]"></div>
             <div className="hero-content text-center text-neutral-content ">
              <div className="w-full  text-center lg:pt-28 lg:pb-44 space-y-6 p-8 ">
              <h1 className="mt-6 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-6xl text-[#a3a160]">
              Savor Iconic  <br /> Flavors 
            </h1>

            <p className=' mb-10 w-full text-lg text-slate-200 dark:text-white'>Explore a world of taste with our selection of renowned brands like Coca-Cola, McDonald`s, Starbucks, PepsiCo, Nestlé, and Kellogg`s. Indulge in the iconic flavors that have become household names. </p>
           
            <a className="mb-2 inline-block rounded-full border-2 border-[#c3bd2e] px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
              data-te-ripple-init data-te-ripple-color="light" href="#!" role="button"  ><Link to='/register' >To Join us</Link></a>
            
               
               </div>
            </div>
          </div>
  
   
    
    </SwiperSlide>
        <SwiperSlide  >
       
      <div className="hero   w-full " style={{backgroundImage:`url(${banner2})`}}>
            <div className="hero-overlay bg-opacity-60 bg-[hsla(0,0%,0%,0.8)]"></div>
             <div className="hero-content text-center text-neutral-content ">
              <div className="w-full  text-center lg:pt-28 lg:pb-44 space-y-6 p-8 ">
              <h1 className="mt-6 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-6xl text-[#a3a160]">
              Global Culinary  <br /> Delights
            </h1>

                <p className='mb-16 w-full text-lg text-slate-200'>Embark on a culinary journey that spans the globe, brought to you by industry giants like Coca-Cola, McDonald`s, Starbucks, PepsiCo, Nestlé, and Kellogg`s. Taste the best in food and beverage innovation</p>
                <a className="mb-2 inline-block rounded-full border-2  border-[#c3bd2e] px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
              data-te-ripple-init data-te-ripple-color="light" href="" role="button"  >Get up to 20% discount</a>
               </div>
            </div>
          </div>
  

    </SwiperSlide>
        
        <SwiperSlide>
      
  
   
  <div className="hero   w-full " style={{backgroundImage:`url(${banner3})`}}>
            <div className="hero-overlay bg-opacity-60 bg-[hsla(0,0%,0%,0.8)]"></div>
             <div className="hero-content text-center text-neutral-content ">
              <div className="w-full  text-center lg:pt-28 lg:pb-44 space-y-6 p-8 ">
         
         <h1 className="mt-6 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-6xl text-[#a3a160]">
         From Classics to  <br /><span>Innovations</span>
            </h1>

                <p className='mb-16 w-full text-lg text-slate-200 '>Discover the classics you love and the latest innovations in the world of food and beverages with brands such as Coca-Cola, McDonald`s, Starbucks, PepsiCo, Nestlé, and Kellogg`s. Join us in celebrating the essence of flavor.</p>
                <a className=" inline-block rounded-full border-2 border-[#c3bd2e] px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
              data-te-ripple-init data-te-ripple-color="light" href="#!" role="button"   ><Link to='/'>Learn more</Link></a></div>
                          
            </div>
          </div>
        </SwiperSlide>
     
       
      </Swiper></div>
      
      
    );
};

export default Banner;