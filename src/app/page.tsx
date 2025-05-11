import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/users');
  return <div className="h-[992px] w-full"></div>;
}
