import './Home.scss'
import Icon from "../../components/Icon";
import Employment, {IEmployment} from "../../components/employment/Employment.tsx";
import { useAppSelector } from "../../store/hooks";

function Home() {
  const { email, phone, employment, skillsData } = useAppSelector((state) => state.home);

  return (
    <div className="home-container">
      <div className="home-container__header">
        <div className="home-container__header__title">Mykola Korotkyi</div>
        <div className="home-container__header__contact">
          <div className="home-container__header__contact__item">
            <Icon
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email icon"
              size={20}
              className="home-container__header__contact__item__icon"
            />
            <span className="home-container__header__contact__item__text">{email}</span>
          </div>
          <div className="home-container__header__contact__item">
            <Icon
              src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
              alt="Phone icon"
              size={20}
              className="home-container__header__contact__item__icon"
            />
            <span className="home-container__header__contact__item__text">{phone}</span>
          </div>
        </div>
      </div>

      <div className="home-container__resume">
        <div className="home-container__resume__main">
          <div className="resume-block">
            <div className="resume-block__title">Professional Summary</div>
            <div className="resume-block__subtitle">
              Frontend Developer with over 3.5 years of experience in modern web development.
              Skilled in Vue.js, React, and TypeScript with a strong focus on creating scalable,
              maintainable applications. Looking for a full-time opportunity in an international
              team, open to relocation and hybrid or on-site work environments.
            </div>
          </div>

          <div className="resume-block">
            <div className="resume-block__title">Education</div>
            <div className="resume-block__subtitle--container">
              <div className="resume-block__subtitle">
                <strong>Kharkiv National Academy of Municipal Economy</strong><br />
                Bachelor's Degree in Computer Science
              </div>
              <div className="resume-block__subtitle--years">2015 - 2019</div>
            </div>
          </div>

          <div className="resume-block">
            <div className="resume-block__title">Professional Experience</div>
            {employment.map((item: IEmployment) => (
              <Employment key={item.id} {...item} />
            ))}
          </div>
        </div>

        <div className="home-container__resume__sidebar">
          <div className="personal-details">
            <div className="personal-details__title">Personal Information</div>

            <div className="personal-details__section">
              <div className="personal-details__item">
                <div className="personal-details__item__title">Date of Birth</div>
                <div className="personal-details__item__subtitle">1 February 1995</div>
              </div>

              <div className="personal-details__item">
                <div className="personal-details__item__title">Location</div>
                <div className="personal-details__item__subtitle">Manchester, UK</div>
              </div>

              <div className="personal-details__item">
                <div className="personal-details__item__title">LinkedIn</div>
                <div className="personal-details__item__subtitle">
                  <a href="https://linkedin.com/in/nick-korotkyi" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/nick-korotkyi
                  </a>
                </div>
              </div>
            </div>

            <div className="personal-details__skills">
              {skillsData.map((category) => (
                <div key={category.id} className="personal-details__skills__section">
                  <div className="personal-details__skills__title">{category.name}</div>
                  <div className="personal-details__skills__items">
                    {category.skills.map((skill, index) => (
                      <span key={index} className="personal-details__skills__item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
