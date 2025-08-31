import Slider from "react-slick";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear", // smooth sliding
    pauseOnHover: false, // keep sliding on hover
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    { id: 1, image: project1, title: "Netflix Clone" },
    { id: 2, image: project2, title: "Food Delivery app" },
    { id: 3, image: project3, title: "Movie Tickets Booking" },
    { id: 4, image: project4, title: "NFT store" },
  ];

  return (
    <section className="py-16 bg-white-50" id="projects">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Projects
      </h2>
      <div className="max-w-5xl mx-auto px-4">
        <Slider {...settings}>
          {projects.map((p) => (
            <div key={p.id} className="px-2">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
