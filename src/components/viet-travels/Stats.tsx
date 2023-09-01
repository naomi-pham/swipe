import { IconStarFilled, IconStarOutlined } from '@/components/common/Icons';

const Stats = () => {
  return (
    <section id='stats' className='container mx-auto mt-20 lg:mt-24'>
      <div className='flex max-w-5xl flex-col items-center justify-between gap-y-6 lg:flex-row'>
        <div className='text-center md:text-left'>
          <p className='text-viet-travels-primary-200 text-6xl font-semibold'>
            10.4k{' '}
            <span className='mt-3 block text-xl font-medium text-white/80'>
              Global Customers
            </span>
          </p>
          <div className='text-viet-travels-primary-200 mt-2 inline-flex items-center gap-1'>
            <i>
              <IconStarFilled />
            </i>
            <i>
              <IconStarFilled />
            </i>
            <i>
              <IconStarFilled />
            </i>
            <i>
              <IconStarFilled />
            </i>
            <i>
              <IconStarOutlined />
            </i>
          </div>
        </div>
        <ul className='grid w-full grid-cols-1 gap-10 lg:w-auto lg:grid-cols-3'>
          {travelStats.map((item) => (
            <li
              key={item.id}
              className='card-linear text-viet-travels-accent-200 min-w-[160px] p-4 text-xl font-semibold'
            >
              {item.value}+
              <span className='mt-1 block text-base font-medium text-white/80'>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const travelStats = [
  {
    id: 0,
    value: 1000,
    label: 'Total partners',
  },
  {
    id: 1,
    value: 820,
    label: 'Local guides',
  },
  {
    id: 2,
    value: 3700,
    label: 'Trips booked',
  },
];

export default Stats;
