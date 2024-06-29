import axios from 'axios'
import { Meal } from '../types'

const mealsUrl = 'https://dummyjson.com/recipes'

export const getMeals = async (): Promise<Meal[]> => {
  const response = await axios.get(mealsUrl)
  return response.data.recipes
}
