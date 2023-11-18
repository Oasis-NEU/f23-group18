import React from "react";

function SearchBar() {

    
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleSearch = async (e) => {
        e.preventDefault();
    
        // Perform the HTTP request to your backend
        try {
        const response = await fetch(`your-backend-url?query=${searchQuery}`);
        const data = await response.json();
    
        // Process the response data as needed
        console.log(data);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };
    
    return (
        <div className="search-bar">
            <input type="text" placeholder="Enter an artist"/>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        
    )
}

export default SearchBar;