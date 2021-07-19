import {
  EventTypes,
  QueueNames,
  Publisher,
  CategoryDeletedEvent
} from '@slcdemogallery/common';


export class CategoryDeletedPublisher extends Publisher<CategoryDeletedEvent> {
  type: EventTypes.CategoryDeleted = EventTypes.CategoryDeleted;
  queueName: QueueNames.Category = QueueNames.Category;
}