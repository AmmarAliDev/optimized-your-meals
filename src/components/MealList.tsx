import React from 'react'
import MealItem from './MealItem'
import { Meal } from '../types'
import '../styles/mealList.css'

interface MealListProps {
  meals: Meal[]
  selectMeal: (meal: Meal) => void
  selectedMeals: Meal[]
}

const MealList: React.FC<MealListProps> = ({
  meals,
  selectMeal,
  selectedMeals,
}) => (
  <div className="meal-list">
    {meals.map((meal) => (
      <MealItem
        key={meal.id}
        meal={meal}
        selectMeal={selectMeal}
        isSelected={selectedMeals.some(
          (selectedMeal) => selectedMeal.id === meal.id
        )}
      />
    ))}
  </div>
)

export default MealList
