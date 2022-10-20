import AppDataSource from '../../data-source'

import { Category } from '../../entities/category.entity'
import { Property } from '../../entities/property.entity'

const listCategoryPropertiesService = async(id: string): Promise<Property[]> => {

    const categoryRepository = AppDataSource.getRepository(Category)

    const category = await categoryRepository.findOne({
        where: {
            id
        }
    })
    
    return category?.properties!

}

export default listCategoryPropertiesService