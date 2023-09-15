import Head from 'next/head';
import Link from 'next/link';

import { PROJECT_LIST } from '@/lib/constants';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='container mx-auto'>
        <div className='layout relative flex min-h-screen flex-col py-12'>
          <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {PROJECT_LIST.map((item) => (
              <Link href={item.link} key={item.id}>
                <li className='flex flex-col items-start gap-4 rounded-lg p-4 text-center shadow-md hover:shadow-lg'>
                  <p className='line-clamp-1 text-lg font-semibold uppercase tracking-widest'>
                    {item.label}
                  </p>
                  <p className='rounded-full border border-zinc-300 px-4 py-1 text-sm capitalize text-zinc-500'>
                    {item.desc}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
