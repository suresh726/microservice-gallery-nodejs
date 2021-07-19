import { Listener, Event, EventTypes, NotFoundError } from "@slcdemogallery/common";
import { v4 as uuidv4 } from 'uuid';
import { User } from "../models/user.model";

export class AdminListener extends Listener<Event> {
  
  async onMessage(data: Event, msg: any) {
    if (this.handleEvent(data.type, data.data)) {
      this.channel.ack(msg);
    }
  }

  handleEvent(eventType: EventTypes, data: any) {
    if (eventType === EventTypes.UserRegistered) {
      console.log(`Processing ${eventType}`);
    } else {
      console.log('Unknown event');
      return false;
    }
    return true;
  }
}