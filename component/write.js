import React, { useState} from 'react';
import { Input} from './index.js';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';


function write() {
  const [blogContent, setBlogContent] = useState({
    title: '',
    content: ''
  })
  const [value, setValue] = useState(null);

  const getValue = e => {
    const name = e.currentTarget.name;
    const data = e.currentTarget.value;
    setBlogContent({
      ...blogContent,
      [name] : data
    })
  };
 
  const _submitBoard = async () => {
    const title = blogContent.title;
    const content = blogContent.content;

    if(title === "") {
      return alert('제목을 입력해주세요.');

    } else if(content === "") {
      return alert('내용을 입력해주세요.');
    }
    await axios.post('/api/v2/test', {
      title : title,
      content : content,
      image : value
    }) 
  };
     return (
      <div className='Write'>   
        <div>
          <Input onSave = {(data) => setValue(data)}/>
        </div>    
        <form id='board_form'>
        <input type='text' autoComplete='off' id='title_txt' name='title' placeholder='제목' onChange={getValue} />
        <div>
        < ReactQuill 
            onChange={(event) => {
              setBlogContent({
                ...blogContent,
                content: event
              });
            }}
        />
        </div>
        <button onClick={() => _submitBoard()}> 포스트 등록 </button>
        </form>  
      </div>
    );
  
}

export default write;


