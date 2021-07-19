import axios from 'axios';
import { FLICKER_API_KEY, FLICKER_URL } from '../config/flickr.config';
import { ImageList } from '../models/image-list.model';

interface IFlickrImageListAttr {
  category_id: string,
  flickr_image_id: string,
  title: string,
  thumbnail_url: string
}

interface IFlickrImageDetailAttr {
  category_id: string,
  title: string,
  description: string,
  views: number,
  creation_date: string,
  upload_date: string,
  tags: string,
  fullimage_url: string,
}

export const getImageList = async (category_id: string, title: string) => {
  const res = await axios.get(
    FLICKER_URL,
    {
      params: getParams(title),
      headers: getHeaders(),
    }
  ).then(response => {
    const { data } = response;
    let results: Array<any> = Array();

    if (data.stat === 'ok' && data.photos.photo && data.photos.photo.length > 0) {
      results = data.photos.photo.map((entry: any) => {
        return {
          list_attrs: getImageListObject(category_id, entry),
          detail_attrs: getImageDetailObject(category_id, entry)
        }
      
      });
    }
    return results;
  }).catch(error => console.log(error));
  return res;
}

const getParams = (title: string) => {
  return {
    method: 'flickr.photos.search',
    api_key: FLICKER_API_KEY,
    format: 'json',
    nojsoncallback: 1,
    tags: title,
    extras: 'url_m,description,url_l,date_upload,date_taken,tags,views',
    page: 1,
    per_page: 10
  };
}

const getHeaders = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}

const getImageListObject = (category_id: any, entry: any):IFlickrImageListAttr => {
  return {
    category_id: category_id,
    flickr_image_id: entry.id,
    title: entry.title,
    thumbnail_url: entry.url_m
  }
}

const getImageDetailObject = (category_id: any, entry: any):IFlickrImageDetailAttr => {
  return {
    category_id: category_id,
    title: entry.title,
    description: entry.description._content,
    views: parseInt(entry.views),
    creation_date: entry.datetaken,
    upload_date: entry.dateupload,
    tags: entry.tags,
    fullimage_url: entry.url_l,
  }
}