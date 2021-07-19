import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';

import SideBar from '../../components/sidebar';

const ImageList = ({ pageProps, categories, image, activeCategory }) => {
  return (
      <div className="container auth-form">
        <div className="row">
          <div className="col-md-2">
            <SideBar categories={categories} activeCategory={activeCategory} />
          </div>
          <div className="col-md-10">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <img src={image.fullimage_url} alt={image.title} className="image-detail-b" />
                </div>
                <div className="col-md-4 image-detail">
                  <span className="image-heading">Image Details</span>
                  <Link href={`/image-list/${image.category_id}`}>
                    <a className="back-gallery-link">Back</a>
                  </Link><br/><br/>
                  <strong>Title:</strong> <span>{image.title}</span><br/>
                  <strong>Description:</strong> <span>{image.description}</span><br/><br/>
                  <strong>Views:</strong> <span>{image.views}</span><br/>
                  <strong>Date taken:</strong> <span>{image.creation_date}</span><br/><br/>
                  <strong>Tags</strong><br/>
                  {image.tags.split(' ').map(tag => {
                    return (<span key={tag}>{`* ${tag}`} </span>);
                  })}
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
  );
};
ImageList.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/categories');
  const { imageId } = context.query;
  const imageDetailResp = await client.get(`/api/image-detail/${imageId}`);
  console.log(imageDetailResp.data);
  return { 
    categories: data,
    activeCategory: imageDetailResp.data.category,
    image: imageDetailResp.data.image
  };
}

export default ImageList;