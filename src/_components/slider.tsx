import React, { useEffect, useRef, useState } from 'react';

const Slider = () => {
  const [active, setActive] = useState(1);
  const countItem = 4;
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const getIndexes = (index: number) => {
    const other_1 = index - 1 < 0 ? countItem - 1 : index - 1;
    const other_2 = index + 1 >= countItem ? 0 : index + 1;
    return { other_1, other_2 };
  };

  const changeSlider = (direction: 'next' | 'prev') => {
    let newActive = active;
    if (direction === 'next') {
      newActive = active + 1 >= countItem ? 0 : active + 1;
    } else {
      newActive = active - 1 < 0 ? countItem - 1 : active - 1;
    }
    setActive(newActive);

    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      changeSlider('next');
    }, 5000);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      changeSlider('next');
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const { other_1, other_2 } = getIndexes(active);

  const slides = [
    {
      title: 'Caffe Latte',
      bg: '#9c4d2f',
      img: '',
    },
    {
      title: 'Strawberry mocha',
      bg: '#f5bfaf',
      img: 'https://res.cloudinary.com/dnxijnw0s/image/upload/v1743781722/3_dtrp9z.png',
    },
    {
      title: 'Doppio espresso',
      bg: '#dedfe1',
      img: 'images/3.png',
    },
    {
      title: 'Matcha latte macchiato',
      bg: '#7eb63d',
      img: 'images/4.png',
    },
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
          :root {
            --border-color: #fff5;
            --w-image: 500px;
            --calculate: calc(3 / 2);
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            background-color: #4f8b69;
          }
          .carousel {
            margin-top: -80px;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            position: relative;
          }
          .carousel .list {
            height: 100%;
            position: relative;
          }
          .carousel .list::before {
            position: absolute;
            width: var(--w-image);
            height: 100%;
            content: '';
            top: 0;
            left: calc(100% - calc(var(--w-image) * var(--calculate)));
            border-left: 1px solid var(--border-color);
            border-right: 1px solid var(--border-color);
            z-index: 10;
            pointer-events: none;
          }
          .carousel .list::after {
            position: absolute;
            top: 50px;
            left: 50px;
            content: '';
            background-color: red;
            width: 400px;
            height: 300px;
            z-index: 10;
            pointer-events: none;
            border-radius: 20px 50px 110px 230px;
            filter: blur(150px);
            opacity: .6;
          }
          .item {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: none;
          }
          .item.active,
          .item.other_1,
          .item.other_2 {
            display: block;
          }
          .item.active {
            z-index: 2;
          }
          .item .main-content {
            height: 100%;
            display: grid;
            grid-template-columns: calc(100% - calc(var(--w-image) * var(--calculate)));
          }
          .item .main-content .content {
            padding: 150px 20px 20px 80px;
            color: black;
          }
          .item .main-content .content h2 {
            font-size: 5em;
            font-family: 'Aboreto', cursive;
          }
          .item .main-content .content .price {
            font-family: 'Aboreto';
            font-size: 3em;
            margin: 20px 0;
          }
          .item .main-content .content .addToCard {
            background-color: #4f8b69;
            color: white;
            padding: 10px 30px;
            border-radius: 30px;
            border: none;
            font-size: large;
            font-weight: 500;
            margin-top: 20px;
            cursor: pointer;
          }
          .image {
            width: var(--w-image);
            height: 100%;
            position: absolute;
            top: 0;
            left: calc(100% - calc(var(--w-image) * var(--calculate)));
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: center;
            font-weight: 500;
          }
          .image img {
            width: auto;
            height: 100%;
            margin-bottom: 20px;
            filter: drop-shadow(0 150px 50px #9e0c0c55);
          }
          .image figcaption {
            font-family: 'Aboreto';
            font-weight: bold;
            font-size: 1.3em;
            text-align: right;
            margin-bottom: 30px;
            width: 70%;
          }
          .arrows {
            position: absolute;
            bottom: 20px;
            width: calc(100% - calc(var(--w-image) * var(--calculate)));
            display: grid;
            grid-template-columns: repeat(2, 50px);
            grid-template-rows: 50px;
            justify-content: end;
            gap: 10px;
            z-index: 10;
          }
          .arrows button {
            background-color: transparent;
            border: 1px solid var(--border-color);
            color: #fff;
            font-family: monospace;
            font-size: large;
            font-weight: bold;
            box-shadow: 0 10px 40px #5555;
            cursor: pointer;
            transition: 0.5s;
          }
          .arrows button:hover {
            background-color: #eee5;
          }
          .item.active .main-content {
            animation: showContent 1s ease-in-out 1 forwards;
          }
          @keyframes showContent {
            from {
              clip-path: circle(0% at 70% 50%);
            }
            to {
              clip-path: circle(100% at 70% 50%);
            }
          }
        `}
      </style>

      <section className="carousel next">
        <div className="list">
          {slides.map((item, index) => {
            let className = 'item';
            if (index === active) className += ' active';
            else if (index === other_1) className += ' other_1';
            else if (index === other_2) className += ' other_2';

            return (
              <article className={className} key={index}>
                <div className="main-content" style={{ backgroundColor: item.bg }}>
                  <div className="content">
                    <h2>{item.title}, a new product</h2>
                    <p className="price">$ 20</p>
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi...
                    </p>
                    <button className="addToCard">Add To Card</button>
                  </div>
                </div>
                <figure className="image">
                  <img src={item.img} alt={item.title} />
                  <figcaption>{item.title}, a new product</figcaption>
                </figure>
              </article>
            );
          })}
        </div>
        <div className="arrows">
          <button id="prev" onClick={() => changeSlider('prev')}>&lt;</button>
          <button id="next" onClick={() => changeSlider('next')}>&gt;</button>
        </div>
      </section>
    </>
  );
};

export default Slider;
