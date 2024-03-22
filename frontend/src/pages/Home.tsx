import Announcement from '@/components/Announcement';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import ImageSlider from '@/components/ImageSlider';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Products from '@/components/Products';
import { ImageSliderData } from '@/utils/data';

const Home = () => {
  return (
    <>
      <Announcement />
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <ImageSlider length={ImageSliderData.length}>
        {ImageSliderData.map((data) => (
          <ImageSlider.Wrapper
            key={data.id}
            image={data.image}
            info={data.info}
            index={data.id}
          />
        ))}
      </ImageSlider>
      <main className="grid gap-12">
        <Categories />
        <Products />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
