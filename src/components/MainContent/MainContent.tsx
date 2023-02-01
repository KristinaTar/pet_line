import React from 'react';
import './MainContent.scss';
import main1 from '../images/main1.svg';
import heart_white from '../images/heart_white.svg';
import pink_heart from '../images/heart.svg';


const MainContent: React.FC = () => {
  return (
    <>
      <div className="content">
        <div className="content__block1">
          <div className="content__mission">
            <div className="content__mission--header">Миссия компании</div>
            <div className="content__mission--text">
              Дать возможность европейским владельцам домашних животных проявить максимальную заботу о своих питомцах с
              максимальным комфортом и хорошим настроением.
              Продуты от M&F Pet Line обеспечат беспроблемный уход и заботу о своих любимых питомцах.
            </div>
            <div className="content__mission--btn">
              <img
                src={heart_white}
                alt="white heart icon"
                className="content__mission--icon"
              />
              Получите контакты
            </div>
          </div>
          <div className="content__mission--photo">
            <img src={main1} alt="boy with dog"/>
          </div>
          <img src={pink_heart} alt="pink heart" className="content__mission--heart"/>
        </div>
        <div className="content__block2">
          <div className="content__idea">
            <div className="content__idea--header">
              Компания M&F Pet Line была основана страстными энтузиастами, имеющими огромный опыт содержания кошек и
              собак,
              заботы и ухода за ними.
            </div>
          </div>
        </div>

      </div>


    </>


  );
};

export default MainContent;
