import cssModule from './Card.module.css';

const Card = (props) => {
  return <div className={cssModule.card}>{props.children}</div>;
};

export default Card;
