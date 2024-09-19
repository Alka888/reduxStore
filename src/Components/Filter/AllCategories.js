import Filter from './Filter'


const AllCategories = () => {
    return (
        <div className='sidebar'>
            <h1>What kind of clothes do you like?</h1>
            
            {['Woman clothes', 'Men clothes', 'Shoes', 'Accessories', 'All'].
            map(category => <Filter category={category}/>
            )}
            
        </div>
    )
}

export default AllCategories