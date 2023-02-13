import { useContext } from 'react'
import { AvatarContext } from '../store/context'
import { actions } from '../store/reducer'

function OptionHairStyle() {
  const { state, dispatch } = useContext(AvatarContext)
  const { avatar } = state.user

  const handleChange = e => {
    const { target } = e
    dispatch({
      type: actions.UPDATE_AVATAR,
      payload: { ...avatar, hairStyle: target.value }
    })
  }

  const options = ['normal', 'thick', 'mohawk', 'womanLong', 'womanShort']

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Pick the best fantasy HAIR style</span>
      </label>
      <select onChange={handleChange} className="select select-primary select-bordered">
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default OptionHairStyle
