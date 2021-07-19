import {
  EventTypes,
  QueueNames,
  Publisher,
  CategoryUpdatedEvent
} from '@slcdemogallery/common';


export class CategoryUpdatedPublisher extends Publisher<CategoryUpdatedEvent> {
  type: EventTypes.CategoryUpdated = EventTypes.CategoryUpdated;
  queueName: QueueNames.Category = QueueNames.Category;
}