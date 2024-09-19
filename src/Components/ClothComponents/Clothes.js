import Cloth from './Cloth'
import dataClothes from '../../Data/dataClothes'
import { getSelectedCategory } from '../../redux/clothesSlice'
import { useSelector } from "react-redux"


const Clothes = () => {
    const selectedCategory = useSelector(getSelectedCategory)

    return (
        <div>
        {dataClothes
        .filter(clothes => {
            if (selectedCategory === 'All') return true;
            return selectedCategory === clothes.category;
        })
        .map(clothes => 
            <div key="id">
                <Cloth clothes={clothes}/>
            </div>
        )}
        </div>
    )
}

export default Clothes;