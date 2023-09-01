import Head from 'next/head';
import Link from 'next/link';

import { PROJECT_LIST } from '@/lib/constants';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='mx-auto max-w-7xl bg-white'>
        <div className='layout relative flex min-h-screen flex-col py-12'>
          <ul className='space-y-2'>
            {PROJECT_LIST.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className='text-blue-600 underline'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
