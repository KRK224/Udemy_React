import Card from '../ui/Card';
import cssModule from './MeetupItem.module.css';
const MeetupItem = (props) => {
  return (
    <li className={cssModule.item}>
      <Card>
        <div className={cssModule.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={cssModule.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={cssModule.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
