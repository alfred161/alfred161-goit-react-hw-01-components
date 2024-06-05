import style from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => {
  return (
    <section className={style.statistics}>
      {title !== undefined && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {data.map(({ id, label, percentage }) => {
          return (
            <li
              className={style.item}
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={style.label}>{label}</span>
              <span className={style.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};