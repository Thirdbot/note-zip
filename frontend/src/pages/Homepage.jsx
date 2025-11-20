import { useEffect, useState } from 'react';
import Navbar from './../components/Navbar';
import RateLimitedUI from '../components/RateLimitedUI';
import { toast } from 'react-hot-toast';
import NoteCard from '../components/NoteCard';
import axiosIns from '../lib/axios';
import NotesNotFound from '../components/NoteNotFound';
const Homepage = () => {
    const [isRateLimited  , setIsRateLimited] = useState(false);
    const [note,setNote] = useState([]);
    const [loading,setLoading] = useState(false);
    
    useEffect(()=>{
        const fetchNote = async()=>{
            setLoading(true);
            try{
                const res = await axiosIns.get('/notes');
                const data = res.data;
                setNote(data);
                setIsRateLimited(false);
                console.log("Fetched notes:",data);

            }catch(error){
                console.log("Error fetching notes:",error);

                if(error.response?.status === 429){
                    setIsRateLimited(true);
                }else{
                    toast.error("Failed to fetch notes");
                }
            }finally{
                setLoading(false);
            }
            }
        fetchNote();
    },[])
    return (
    <div className='min-h-screen'>
        <Navbar />
        {isRateLimited && <RateLimitedUI />}
        <div className='max-w-7xl mx-auto p-4 mt-6'>
            {loading && <div className='text-center text-primary py-10'>Loading notes...</div>}
            {note.length === 0 && !loading && !isRateLimited && (
                <NotesNotFound />
            )}
            {note.length > 0 && !isRateLimited && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {note.map((n) => (
                    <NoteCard key={n._id} note={n} setNote={setNote} />
                ))}
            </div>
            )}
        
        </div>
    </div>
  )
}

export default Homepage
