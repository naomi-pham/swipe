'use client';

import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='mx-auto max-w-7xl bg-white'>
        <div className='layout relative flex min-h-screen flex-col py-12'>
          <ul>
            <li>
              <Link href='/pomodoro-timer' className='text-blue-600 underline'>
                Pomodoro timer
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
