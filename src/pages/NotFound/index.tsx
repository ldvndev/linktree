import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      <h1 className='text-6xl'>404</h1>
      <h1 className='text-2xl'>Sorry, the page not found</h1>
      <p className='text-lg'>The link you followed probably broken or the page has been removed.</p>
      <Link className='text-lg' to="/">
        Return to <span className='text-violet-400'>home</span> page.
      </Link>
    </div>
  );
}
