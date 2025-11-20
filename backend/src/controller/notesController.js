import Note from "../models/Notes.js";

export async function getNotes(_, res){
    try {
        const note = await Note.find().sort(
            { createdAt: -1 } // Sort by creation date in descending order
        );
        res.status(200).json(note);
    }
    catch (error) {
        console.error("Error in getting all notes " + error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export async function createNote(req, res){
    try{
        const {title,content} = req.body;
        const newNote = new Note({
            title,content
        })
        await newNote.save();

        res.status(201).json({ message: "Note created successfully" });
    } catch (err){
        console.error("Error in creating note " + err);
        res.status(500).json({ message: "Internal server error" });
    }
}
export async function updateNote(req, res){
    try{
        const {title,content} = req.body;
        const noteId = req.params.id;

        const updatedNote = await Note.findByIdAndUpdate(noteId,{title,content},{
            new:true
        });
        if (!updatedNote){
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: updatedNote });
    } catch (err){
        console.error("Error in updating note " + err);
        res.status(500).json({ message: "Internal server error" });
    }
}
export async function deleteNote(req, res){
    try{
        const id = req.params.id;
        const deleted = await Note.findByIdAndDelete(id)
        if (!deleted){
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (err){
        console.error("Error in deleting note " + err);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getNotesbyId(req, res){
    try{
        const id = req.params.id;
        const note = await Note.findById(id);
        if(!note){
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    }catch (err){
        console.error("Error in getting note by id " + err);
        res.status(500).json({ message: "Internal server error" });
    }
}