import React, { useEffect, useState, useRef } from 'react';
import './style.scss';

const people = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    name: 'maria ferguson',
    title: 'office manager',
    quote:
      'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'john doe',
    title: 'regular guy',
    quote:
      'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    name: 'peter smith',
    title: 'product designer',
    quote:
      'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'susan andersen',
    title: 'the boss',
    quote:
      'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
  },
];

export const App = () => {
  const [active, setActive] = useState(0);
  const [img, showImage] = useState(people[0]);

  const interval = useRef(null);

  useEffect(() => {
    start();
    return () => clearInterval(interval.current);
  }, [active]);

  const start = () => {
    interval.current = setInterval(() => {
      if (active === 0) {
        setActive((prev) => {
          showImage(people?.[prev + 1]);
          return prev + 1;
        });
      } else if (active === people.length - 1) {
        setActive(0);
        showImage(people?.[0]);
      } else {
        setActive((prev) => {
          showImage(people?.[prev + 1]);
          return prev + 1;
        });
      }
    }, 3000);
  };

  const prevSlide = () => {
    if (active === 0) {
      showImage(people?.[people.length - 1]);
      setActive(3);
    } else {
      setActive((prev) => {
        showImage(people?.[prev - 1]);
        return prev - 1;
      });
    }
  };

  const nextSlide = () => {
    if (active === people.length - 1) {
      showImage(people?.[0]);
      setActive(0);
    } else {
      setActive((prev) => {
        showImage(people?.[prev + 1]);
        return prev + 1;
      });
    }
  };
  return (
    <div className="p-2">
      {[img]?.map((item, index) => (
        <>
          <div key={index} className="card-container">
            <img src={item.image} alt="img" />
            <h3>{item.name}</h3>
            <h4>{item.title}</h4>
            <button className="prev" onClick={prevSlide}>
              &lt;
            </button>
            <button className="next" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </>
      ))}
    </div>
  );
};
