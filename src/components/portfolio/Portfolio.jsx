import React, { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss";
import { featuredPortfolio, learningPortfolio, personalPortfolio } from '../../data';

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "En vedette",
    },
    {
      id: "learningProjects",
      title: "Projets d'apprentissage",
    },
    {
      id: "personalProjects",
      title: "Projets personnels",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured" :
        setData(featuredPortfolio);
        break;
      case "learningProjects" :
        setData(learningPortfolio);
        break;
      case "personalProjects" :
        setData(personalPortfolio);
        break;
      default :
        setData(featuredPortfolio);
    }
  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item=>(
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d=> (
          <div className="item" key={d.id}>
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>

        ))}
      </div>
    </div>
  )
}
