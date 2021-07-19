import { Listener, Event, EventTypes } from "@slcdemogallery/common";

export class AdminListener extends Listener<Event> {
  
  async onMessage(data: Event, msg: any) {
    this.handleEvent(data.type, data.data);
    this.channel.ack(msg);
  }

  handleEvent(eventType: EventTypes, data: any) {
    if (eventType === EventTypes.CategoryCreated) {
      console.log(`Processing ${eventType}`);
    } else if (eventType === EventTypes.CategoryDeleted) {
      console.log(`Processing ${eventType}`);
    } else if (eventType === EventTypes.ImageCreated) {
      console.log(`Processing ${eventType}`);
    } else {
      console.log('Unknown event');
    }
  }


}