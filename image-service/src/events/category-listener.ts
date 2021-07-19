import { Listener, Event, EventTypes, NotFoundError } from "@slcdemogallery/common";
import { v4 as uuidv4 } from 'uuid';
import { Category } from "../models/category.model";
import { ImageDetail } from "../models/image-detail.model";
import { ImageList } from "../models/image-list.model";
import { getImageList } from "../services/flicker";

export class CategoryListener extends Listener<Event> {
  
  async onMessage(data: Event, msg: any) {
    if (this.handleEvent(data.type, data.data)) {
      this.channel.ack(msg);
    }
  }

  handleEvent(eventType: EventTypes, data: any) {
    if (eventType === EventTypes.CategoryCreated) {
      console.log(`Processing ${eventType}`);
      this.handleCategoryCreateEvent(data);
    } else if (eventType === EventTypes.CategoryUpdated) {
      console.log(`Processing ${eventType}`);
      this.handleCategoryUpdateEvent(data);
    } else if (eventType === EventTypes.CategoryDeleted) {
      console.log(`Processing ${eventType}`);
      this.handleCategoryDeletedEvent(data);
    } else {
      console.log('Unknown event');
      return false;
    }
    return true;
  }

  async handleCategoryCreateEvent(data: any) {
    const { id, title } = data;
    // await Category.destroy({ where: { }, truncate: true });
    // await ImageList.destroy({ where: { }, truncate: true });
    // await ImageDetail.destroy({ where: { }, truncate: true });
    const category = await Category.create({ id, title });
    
    if (!category) {
      throw new Error('Error replicating category');
    }
    const images = await getImageList(id, title);
    
    if (!images || images.length === 0) {
      throw new Error('No images in this category');
    }
    
    for (let entry of images) {
      const { list_attrs, detail_attrs } = entry;
      const id = uuidv4();
      const image_list_obj = await ImageList.create({id, ...list_attrs});

      let image_list_id = await image_list_obj.getDataValue('id');
      const detail_id = uuidv4();
      const image_detail_obj = await ImageDetail.create({
        id: detail_id,
        image_list_id: image_list_id,
        ...detail_attrs
      });
    }
  }

  async handleCategoryUpdateEvent(data: any) {
    const { id, title } = data;
    const category = await Category.findOne({ where: { id } });

    if (!category) {
      throw new NotFoundError();
    }

    await category!.update({ title });

  }

  async handleCategoryDeletedEvent(data: any) {
    const id = data.id;
    const category = await Category.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundError();
    }
    await ImageList.destroy({ where: { category_id: id }, truncate: true });
    await ImageDetail.destroy({ where: { category_id: id }, truncate: true });
    await category!.destroy();
  }

}