import { useState, useEffect } from 'react'
import { getMeals } from '../api/meals'
import { Meal } from '../types'

const useFetchMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getMeals().then((data) => {
      setMeals(data)
      setIsLoading(false)
    })
  }, [])

  return { meals, loading: isLoading }
}

export default useFetchMeals
