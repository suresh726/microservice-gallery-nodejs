import {
  EventTypes,
  QueueNames,
  Publisher,
  UserRegisteredEvent
} from '@slcdemogallery/common';


export class UserRegisteredPublisher extends Publisher<UserRegisteredEvent> {
  type: EventTypes.UserRegistered = EventTypes.UserRegistered;
  queueName: QueueNames.Admin = QueueNames.Admin;
}