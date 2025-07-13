import React from 'react';
import './Employment.scss';

export interface IEmployment {
  title: string;
  date: string;
  subtitle: string;
  id: number | string;
  achievements: { achievement: string; id: number | string, details?: string[]; }[];
}

const Employment: React.FC<IEmployment> = ({title, date, subtitle, achievements}) => {
  return (
    <div className="employment">
      <div className="employment__header">
        <p className="employment__header__title">{title}</p>
        <p className="employment__header__date">{date}</p>
      </div>

      <p className="employment__subtitle">{subtitle}</p>

      <ul className="employment__achievements">
        {achievements.map((item) => (
          <li className="employment__achievements__item" key={item.id}>
            <div className="employment__achievements__item__text">{item.achievement}</div>
            {item.details && item.details.length > 0 && (
              <ul className="employment__achievements__item__details">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Employment;