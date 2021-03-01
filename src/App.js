import React,{ useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {
  const[addItem,setAddItem]= useState([]);

  const addNote = (note) =>{
    setAddItem((oldData)=>{
        return [...oldData,note ]
    });
    console.log(note);

  };

const onDelete = (id) => {
  setAddItem((previousData)=>
    previousData.filter((currData,indx)=>{
        return indx !== id;
    })
  );

};
  return (
    <>
    <Header />
    <CreateNote passNote={addNote} />
  
   { addItem.map((val,index)=>{
      return <Note 
        key={index}
        id={index}
        title={val.title}
        content={val.content}  
        deleteItem={onDelete}    
        />
    })
  }
    <Footer />
    </>
  );
};

export default App;
