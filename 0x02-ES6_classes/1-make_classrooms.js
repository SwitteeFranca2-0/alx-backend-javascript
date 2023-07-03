import classRoom from './0-classroom';

export default function initializeRooms() {
  return [new classRoom(19), new classRoom(20), new classRoom(34)]; // eslint-disable-line new-cap
}
