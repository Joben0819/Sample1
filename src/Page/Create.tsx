import React, { useState, ChangeEvent, FormEvent } from 'react';
import { DataSet } from '../Api/index';

function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await DataSet(title, content, image); // Pass the File object directly

      // Handle successful post creation or redirect to another page
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
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

  return (
    <div>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" value={title} onChange={handleTitleChange} />
        <label htmlFor="content">Content</label>
        <textarea value={content} onChange={handleContentChange} />
        <label htmlFor="image">Image</label>
        <input type="file" onChange={handleImageChange} />
        {image && <img src={URL.createObjectURL(image)} alt="Selected" style={{ width: '200px', height: 'auto' }} />}
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default Create;