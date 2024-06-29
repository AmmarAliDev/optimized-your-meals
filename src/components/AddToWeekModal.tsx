import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import '../styles/modal.css'

interface AddToWeekModalProps {
  isOpen: boolean
  onRequestClose: () => void
  addToWeek: (weekIndices: number[]) => void // Change addToWeek to accept an array of week indices
}

const WEEKS = ['Week 1', 'Week 2', 'Week 3', 'Week 4']

const AddToWeekModal: React.FC<AddToWeekModalProps> = ({
  isOpen,
  onRequestClose,
  addToWeek,
}) => {
  const [selectedWeeks, setSelectedWeeks] = useState<number[]>([]) // Use an array for multiple selections

  // Reset selected weeks when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedWeeks([])
    }
  }, [isOpen])

  const handleSave = () => {
    addToWeek(selectedWeeks) // Pass selectedWeeks array to addToWeek
    onRequestClose()
  }

  const toggleWeek = (index: number) => {
    const isSelected = selectedWeeks.includes(index)
    if (isSelected) {
      setSelectedWeeks(selectedWeeks.filter((weekIndex) => weekIndex !== index)) // Deselect if already selected
    } else {
      setSelectedWeeks([...selectedWeeks, index]) // Select if not selected
    }
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2 style={{ marginBottom: 0 }}>Select Week</h2>
      <div className="weeks">
        {WEEKS.map((week, index) => (
          <span
            key={index}
            onClick={() => toggleWeek(index)}
            style={{
              backgroundColor: selectedWeeks.includes(index) ? 'cyan' : '',
            }}
          >
            {week}
          </span>
        ))}
      </div>
      <button className="saveBtn" onClick={handleSave}>
        Save
      </button>
    </Modal>
  )
}

export default AddToWeekModal
