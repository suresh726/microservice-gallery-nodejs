import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';

import SideBar from '../../components/sidebar';

const ImageList = ({ pageProps, categories, images, activeCategory }) => {
  return (
      <div className="container auth-form">
        <div className="row">
          <div className="col-md-2">
            <SideBar categories={categories} activeCategory={activeCategory} />
          </div>
          <div className="col-md-10">
            <div className="container">
              <h2 className="font-weight-light text-center text-lg-left mt-4 mb-0">Images of {activeCategory.title}</h2>
              <hr className="mt-2 mb-5" />
              <div className="row text-center text-lg-left">
                {images.map((image) => {
                  return (
                    <div className="col-lg-3 col-md-4 col-6 mb-3" key={image.id}>
                      <Link href={`/image-detail/${image.id}`}>
                        <img src={image.thumbnail_url} alt={image.title} height="200" />
                      </Link>
                    </div>
                  );
                })};
              </div>
            </div>            
          </div>
        </div>
      </div>
  );
};
ImageList.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/categories');
  const { categoryId } = context.query;
  const imageListResp = await client.get(`/api/image-list/${categoryId}`);
  console.log(imageListResp.data);
  return { 
    categories: data,
    activeCategory: imageListResp.data.category,
    images: imageListResp.data.images
  };
}

export default ImageList;