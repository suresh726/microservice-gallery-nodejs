import Link from 'next/link';

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/admin/users/signup' },
    !currentUser && { label: 'Sign In', href: '/admin/users/signin' },
    currentUser && { label: 'Sign Out', href: '/admin/users/signout' },
    !currentUser && { label: 'Frontend', href: '/' },
    currentUser && { label: 'New Category', href: '/admin/categories' },
  ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href }) => {
      return <li key={href} className="nav-item">
        <Link href={href}>
          <a className="nav-link">{label}</a>
        </Link>
      </li>
    });
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/admin">
        <a className="nvbar-brand">GalleryAdmin</a>
      </Link>

      <div className="flex justify-content-end">
        <ul className="nav d-flex align-items-center">
          {links}
        </ul>
      </div>
    </nav>
  );
}

export default Header;