import React from 'react'
import MealItem from './MealItem'
import { Meal } from '../types'
import '../styles/weekTab.css'

interface WeekTabProps {
  weekMeals: Meal[]
  removeFromWeek: (mealId?: number) => void
}

const WeekTab: React.FC<WeekTabProps> = ({ weekMeals, removeFromWeek }) => (
  <div className="week-tab">
    {weekMeals.map((meal) => (
      <MealItem
        showDelete={true}
        key={meal.id}
        meal={meal}
        removeFromWeek={removeFromWeek}
      />
    ))}
  </div>
)

export default WeekTab
