import PropTypes from 'prop-types'; // ES6
import {
  Container,
  Title,
  StatList,
  Item,
  Text,
  Number,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ label, percentage, id }) => (
          <Item key={id}>
            <Text>{label}</Text>
            <Number>{percentage}%</Number>
          </Item>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
