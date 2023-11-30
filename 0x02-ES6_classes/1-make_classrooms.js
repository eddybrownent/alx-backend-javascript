// eslint-disable-next-line import/extensions
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const room = [];

  room.push(new ClassRoom(19));
  room.push(new ClassRoom(20));
  room.push(new ClassRoom(34));

  return room;
}
