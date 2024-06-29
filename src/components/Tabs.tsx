import React from 'react'
import '../styles/tabs.css'
import { Meal } from '../types'

interface TabsProps {
  activeTab: number
  setActiveTab: (index: number) => void
  openModal: () => void
  selectedMeals: Meal[]
}

const tabs = ['All meals', 'Week 1', 'Week 2', 'Week 3', 'Week 4']

const Tabs: React.FC<TabsProps> = ({
  activeTab,
  setActiveTab,
  openModal,
  selectedMeals,
}) => (
  <>
    <h1>Week Orders</h1>
    <div className="tabs">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={activeTab === index ? 'active' : ''}
          style={{ marginRight: index === 4 ? '5em' : '0em' }}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}

      <button
        className="addToWeekBtn"
        style={{
          background: selectedMeals.length ? '#004370' : '#9b9b9b',
        }}
        onClick={openModal}
      >
        Add to Week
      </button>
    </div>
  </>
)

export default Tabs
