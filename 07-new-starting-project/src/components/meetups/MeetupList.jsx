import MeetupItem from './MeetupItem';
import cssModule from './MeetupList.module.css';

const MeetupList = (props) => {
  return (
    <ul className={cssModule.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
