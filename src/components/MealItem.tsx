import React from 'react'
import Assets from '../assets'
import { Meal } from '../types'
import '../styles/mealItem.css'

const { Icons } = Assets
const { DeleteIcon, StarsIcon } = Icons

interface MealItemProps {
  showDelete?: boolean
  meal: Meal
  selectMeal?: (meal: Meal) => void
  removeFromWeek?: (mealId: number) => void
  isSelected?: boolean // isSelected prop
}

const MealItem: React.FC<MealItemProps> = ({
  showDelete,
  meal,
  selectMeal,
  removeFromWeek,
  isSelected,
}) => (
  <div
    className="meal-item"
    style={{ border: isSelected ? '2px solid #004370' : '1px solid #e2e2e2' }}
    onClick={() => selectMeal && selectMeal(meal)}
  >
    <div
      className="image-background"
      style={{
        backgroundImage: `url(${meal.image})`,
        justifyContent: showDelete ? 'space-between' : 'end',
      }}
    >
      {showDelete && (
        <img
          src={DeleteIcon}
          alt="Delete"
          onClick={() => removeFromWeek?.(meal.id ?? -1)}
        />
      )}
      <span>{meal.mealType}</span>
    </div>
    <h2>{meal.name}</h2>
    <p>{meal.instructions}</p>
    <div className="card-bottom">
      <span style={{ fontSize: '0.85em', fontWeight: 800 }}>
        Cuisine:{' '}
        <span style={{ fontSize: '1em', fontWeight: 600 }}>{meal.cuisine}</span>
      </span>
      <span
        style={{
          fontSize: '0.85em',
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        Rating:{' '}
        <span style={{ fontSize: '1em', fontWeight: 600 }}>{meal.rating}</span>
        <img src={StarsIcon} alt={String(meal.rating)} />
      </span>
    </div>
  </div>
)

export default MealItem
