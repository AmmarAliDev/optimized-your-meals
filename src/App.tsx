import React, { useState } from 'react'
import useGetMeals from './hooks/useGetMeals'
import Header from './components/Header'
import Tabs from './components/Tabs'
import MealList from './components/MealList'
import AddToWeekModal from './components/AddToWeekModal'
import WeekTab from './components/WeekTab'
import Assets from './assets'
import { Meal } from './types'
import './styles/global.css'

const { Images } = Assets
const { AppBackground } = Images

const App: React.FC = () => {
  const { meals, loading } = useGetMeals()
  const [activeTab, setActiveTab] = useState(0)
  const [weekMeals, setWeekMeals] = useState<Meal[][]>([[], [], [], []])
  const [selectedMeals, setSelectedMeals] = useState<Meal[]>([])
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const selectMeal = (meal: Meal) => {
    setSelectedMeals((prevSelectedMeals) => {
      const isSelected = prevSelectedMeals.some(
        (selectedMeal) => selectedMeal.id === meal.id
      )
      if (isSelected) {
        return prevSelectedMeals.filter(
          (selectedMeal) => selectedMeal.id !== meal.id
        )
      } else {
        return [...prevSelectedMeals, meal]
      }
    })
  }

  const openModal = () => {
    if (!selectedMeals.length) return
    setModalIsOpen(true)
  }

  const saveToWeek = (weekIndices: number[]) => {
    const updatedWeekMeals = [...weekMeals]

    weekIndices.forEach((weekIndex) => {
      selectedMeals.forEach((meal) => {
        if (
          !updatedWeekMeals[weekIndex].some(
            (weekMeal) => weekMeal.id === meal.id
          )
        ) {
          updatedWeekMeals[weekIndex] = [...updatedWeekMeals[weekIndex], meal]
        }
      })
    })

    setWeekMeals(updatedWeekMeals)
    setSelectedMeals([])
    setModalIsOpen(false)
  }

  const removeFromWeek = (mealId: number, weekIndex: number) => {
    if (mealId === undefined) {
      return
    }
    const updatedWeekMeals = [...weekMeals]
    updatedWeekMeals[weekIndex] = updatedWeekMeals[weekIndex].filter(
      (meal) => meal.id !== mealId
    )
    setWeekMeals(updatedWeekMeals)
  }

  return (
    <div className="app" style={{ backgroundImage: `url(${AppBackground})` }}>
      <Header />
      <div className="content-wrapper">
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          openModal={openModal}
          selectedMeals={selectedMeals}
        />
        {loading ? (
          <p>Loading meals...</p>
        ) : (
          <>
            {activeTab === 0 ? (
              <MealList
                meals={meals}
                selectMeal={selectMeal}
                selectedMeals={selectedMeals}
              />
            ) : (
              <WeekTab
                weekMeals={weekMeals[activeTab - 1]}
                // @ts-ignore
                removeFromWeek={(mealId: number) =>
                  removeFromWeek(mealId, activeTab - 1)
                }
              />
            )}
          </>
        )}
      </div>
      <AddToWeekModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        addToWeek={saveToWeek}
      />
    </div>
  )
}

export default App
