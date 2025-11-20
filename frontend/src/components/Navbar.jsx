import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
        <div className='mx-auto max-w-6xl p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-primary font-mono tracking-tight'>
                    NoteZipper
                </h1>
                <div className='flex items-center gap-4'>
                    <Link to={'/create'} className="btn btn-primary inline-flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        <span>New Note</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
