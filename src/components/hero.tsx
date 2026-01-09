import video from "../assets/videos/video.mp4"

const Hero = () => {

  return (
    <section className="hero container-layout flex flex-col gap-5 overflow-hidden relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full mt-20 object-cover z-0">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </section>
  );
};

export default Hero;
