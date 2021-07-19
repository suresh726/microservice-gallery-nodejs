import Link from 'next/link';

const SideBar = ({ categories, activeCategory }) => {
  return (
    <>
      <h4>All Categories</h4>
      <h4>
        <Link href={`/admin`}>
          <a className="nav-link">Admin</a>
        </Link>
      </h4>
      <div>
        <ul className="category-list">
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <Link href={`/image-list/${category.id}`}>
                  <a className={(activeCategory && (category.id === activeCategory.id)) ? "active": "" }>{category.title} </a>
                </Link>
              </li>
            );
          })}
    </ul>
      </div>
    </>
  );
}

export default SideBar;