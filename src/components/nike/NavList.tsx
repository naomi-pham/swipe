import { navList } from '@/components/nike/Header';
import NavItem from '@/components/nike/NavItem';

const NavList = () => {
  return (
    <nav className='h-full'>
      <ul className='inline-flex h-full justify-between'>
        {navList.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
