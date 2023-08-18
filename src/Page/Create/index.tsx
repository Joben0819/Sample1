import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../store/index';
import Firebase from '../../Component/Firebase';
import {Back, DataSet} from '../../Api/index'
import { RootState } from '../../store';
import {Mark, DataPart, Sample} from '../../Component/Interface/index';
import { text } from 'stream/consumers';


function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [part, setpart] = useState([])

  const { name } = useSelector((state: RootState) => state.counter);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await DataSet(title, content, image, name.someKey); // Pass the File object directly

      // Handle successful post creation or redirect to another page
      console.log('Response:',title, content, image, name.someKey);
    } catch (error) {
      console.error('Error creating post:', error);
      console.log('Response:',title, content, image, name.someKey);
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImage(file);
  };

  // console.warn(title, content)

  useEffect(() => { 
    var form = document.getElementById('final') 
    const inputElement = document.getElementById('exampleInputEmail1') as HTMLInputElement
    const inputElement2 = document.getElementById('exampleInputContent') as HTMLInputElement
    const inputElement3 = document.getElementById('exampleInputImage') as HTMLInputElement
    function Num(){
      // setTimeout(function() {
      //   window.location.reload();
      // }, 5000);
    }

    form?.addEventListener('click', Num)

  },[])

  useEffect(() => {
    Back().then( res => {
      console.warn("des",res.data)
      // const ages = res.data;
      // const result = ages.filter(checkAdult);
      
      // function checkAdult(card: { email: string }) {
      //   return card.email === name.someKey ;
      // }
      // setpart(result)
  })
  },[])
  const peoples: DataPart[] = part

  // var excess : Sample = {
  //   image: `${require('../../../Back-end/uploads2/1691733828884.png')}`,
  //   text: "22"
  // }


  // console.warn(excess)

  return (
    <div className='create'>
      <h1>Create</h1>
    { 
      name.someKey === 'undefined' ?
      <Firebase/> 
      :
      <>
        <form onSubmit={handleSubmit} className="form" id="form">
          <div className="mb-3">
            <label  className="form-label">Title</label>
            <input type="text"  onChange={handleTitleChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label  className="form-label">Content</label>
            <textarea onChange={handleContentChange} className="form-control" id="exampleInputContent"/>
          </div>
          <div className="mb-3">
            <label  className="form-label">Image</label>
            <input type="file" onChange={handleImageChange} className="form-control" id="exampleInputImage"/>
            {/* {image && <img src={URL.createObjectURL(image)} alt="Selected" style={{ width: '200px', height: 'auto' }} />} */}
          </div>

          <button type="submit" className="btn btn-primary" id="final">Submit</button>
        </form>
        <div className='body'>

        </div>
      </>

        
     } 

    </div>
  );
}

export default Create;