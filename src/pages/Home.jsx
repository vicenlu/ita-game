import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Navbar, FooterMenu, UserCard } from "../components"
import { WeeklyResume } from "../components"
import useCurrentWeek from "../hooks/useCurrentWeek"
import { ActivitiesContext } from "../store/activitiesContext/ActivitiesContext"
import { calculateITA } from "../utils/calculateITA"
import { groupByType } from "../utils/groupByType"

function Home() {
  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const { activities } = useContext(ActivitiesContext)
  const currentWeekData = useCurrentWeek()

  const totalPerWeek = calculateITA(data)
  useEffect(() => {
    const groupedData = groupByType(currentWeekData)
    setData(groupedData)
  }, [activities])
  console.log("nombre?", currentWeekData)

  return (
    <>
      <Navbar>Resumen Semanal</Navbar>
      <div className="w-full h-full bg-base pt-12 pb-12">
        <div className="flex items-start p-6">
          <h1 className="font-bold text-3xl">Hola user!</h1>
        </div>
        <div className="flex items-start ml-6">
          <p className="font-bold">Puntos ganados</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <UserCard points={totalPerWeek.total} />
        </div>
        <div className="flex items-start ml-6 mt-4">
          <p className="font-bold">Estado de la semana</p>
        </div>
        <div className="flex justify-center items-center">
          <WeeklyResume data={data} />
        </div>
        <NavLink to="/admin" className="flex justify-end mr-16 my-5">
          <p className="font-bold">Ir a admin (pruebas)</p>
        </NavLink>
      </div>
      <FooterMenu />
    </>
  )
}

export default Home
