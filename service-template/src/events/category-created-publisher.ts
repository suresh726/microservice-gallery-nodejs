import { 
  EventTypes,
  QueueNames,
  Publisher,
  CategoryCreatedEvent 
} from '@slcdemogallery/common';


export class CategoryCreatedPublisher extends Publisher<CategoryCreatedEvent> {
  type: EventTypes.CategoryCreated = EventTypes.CategoryCreated;
  queueName: QueueNames.Admin = QueueNames.Admin;
}