import { CHOOSE_TIMESLOT } from "../actions/actions"
import { TIMESLOTS_RECEIVED } from "../actions/actions"

const initialState = []

const timeSlot = (prevState = initialState, action) => {
  if (action.type === CHOOSE_TIMESLOT) {
    // si l'action est de type CHOOSE_TIMESLOT
    return prevState.map(day => ({
      ...day,
      timeSlots: day.timeSlots.map(timeSlot => ({
        ...timeSlot,
        selected: action.timeSlot.time.s === timeSlot.time.s
      }))
    }))
  }
  if (action.type === TIMESLOTS_RECEIVED) {
    return action.response
  }
  return prevState
}
export default timeSlot
