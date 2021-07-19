import { 
  EventTypes,
  QueueNames,
  Publisher,
  ImageCreatedEvent 
} from '@slcdemogallery/common';


export class ImageCreatedPublisher extends Publisher<ImageCreatedEvent> {
  type: EventTypes.ImageCreated = EventTypes.ImageCreated;
  queueName: QueueNames.Admin = QueueNames.Admin;
}