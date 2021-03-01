import React,{ useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
    const [expand,setExpand] =useState(false);

    const [note,setNote] = useState({
        title:"",
        content:"",
    });
    
    const InputEvent = (event) => {

        const{name,value}=event.target;   //object destructuring

        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
                
            };
        });
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });
    }
    const expandBox = () => {
        setExpand(true);

    }
    const shrinkBox = () => {
        setExpand(false);

    }
  return (
    <div className="main_note" onDoubleClick={shrinkBox}    >
      <form>
        {expand?
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={InputEvent}
          placeholder="Title"
          autoComplete="off"
        />: null}
        <textarea
          id=""
          name="content"
          cols=""
          rows=""
          value={note.content}
          onChange={InputEvent}
          placeholder="Write a Note..."
          onClick={expandBox}
          
        ></textarea>
        {expand ? (
        <Button onClick={addEvent}>
          <AddIcon className="plus_sign" />
        </Button>
        ) : null}
      </form>
    </div>
  );
};
export default CreateNote;
