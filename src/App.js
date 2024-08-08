import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App () {
    const [stateImages, setImages] = useState([]);

    const handleSubmit = async (term) => {
       const result = await searchImages(term);
       setImages(result);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList  images={stateImages}/>  
        </div>
    )
}

export default App;
