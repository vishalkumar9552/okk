import React from 'react';
import Header from './Header';
import DateColumn from './DateColumn';
import ActivityCard from './ActivityCard';
import PriceSummary from './PriceSummary';

const GangtokExploration = () => {
  const activities = [
    {
      date: "Feb 22, 2025",
      title: "Gangtok Exploration",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/44b424ba58024d9ba328ef359de01864/73e7ed2dbb0f265c962d025d32e54e2457a1411ce3f7a2a5a46448fd8af4a771?apiKey=44b424ba58024d9ba328ef359de01864&",
      location: "Tsongmo Lake",
      description: "The lake is surrounded by snow-capped mountains, adding to its picturesque charm. The reflection of the surrounding landscape on the crystal-clear waters creates a mesmerizing view."
    },
    {
      date: "Feb 23, 2025",
      title: "Gangtok Exploration",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/44b424ba58024d9ba328ef359de01864/d5a11d90f32e082edfa0e887602012de4531e3372c5232c38693ec1757ff31d8?apiKey=44b424ba58024d9ba328ef359de01864&",
      location: "MG Marg",
      description: "This bustling market is a major attraction for both tourists and locals, offering a mix of shopping, dining, and cultural experiences. The street is lined with numerous shops selling a variety of goods"
    },
    {
      date: "Feb 24, 2025",
      title: "Gangtok Exploration",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/44b424ba58024d9ba328ef359de01864/5a21396b213d0738e9986ac3a5a2df58a89df075d09d946e5ce651e1d0ff540a?apiKey=44b424ba58024d9ba328ef359de01864&",
      location: "Nathu La",
      description: "The ideal time to visit Nathu La is between May and October when the weather is pleasant, with clear skies and moderate temperatures."
    }
  ];

  return (
    <div className="flex overflow-hidden relative flex-col min-h-[1024px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/44b424ba58024d9ba328ef359de01864/7c9d29f4223f601ada315c95af63d090ad1895cd17fa0a29739d59f0149d093f?apiKey=44b424ba58024d9ba328ef359de01864&"
        className="object-cover absolute inset-0 size-full"
        alt="Background image of Gangtok"
      />
      <div className="flex relative flex-col pb-28 w-full bg-white max-md:pb-24 max-md:max-w-full">
        <Header />
        <div className="self-center mt-1 mb-0 w-full max-w-[1383px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                <div className="self-start text-4xl font-bold text-black">
                  2025
                </div>
                <div className="flex flex-wrap gap-10 mt-8">
                  <DateColumn dates={["Feb 13", "Feb 14"]} />
                  <ActivityCard activity={activities[0]} />
                </div>
                <div className="flex flex-wrap gap-10 mt-16 max-md:mt-10">
                  <DateColumn dates={["Feb 15", "Feb 16", "Feb 17", "Feb 18"]} />
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                    {activities.slice(1).map((activity, index) => (
                      <ActivityCard key={index} activity={activity} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <PriceSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GangtokExploration;