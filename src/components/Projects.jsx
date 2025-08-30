import Slider from "react-slick";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // show 2 at once (good for desktop)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    { id: 1, image: "/projects/p1.png", title: "Project One" },
    { id: 2, image: "/projects/p2.png", title: "Project Two" },
    { id: 3, image: "/projects/p3.png", title: "Project Three" },
    { id: 4, image: "/projects/p4.png", title: "Project Four" },
  ];

  return (
    <section className="py-16 bg-gray-50" id="projects">
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
