type ThemeStateType = {
  themeId: number
}

type ActionsType = ReturnType<typeof changeThemeId>
type Action = { type: string; id: number }

const initState = {
  themeId: 1,
}

export const themeReducer = (state: ThemeStateType = initState, action: ActionsType): ThemeStateType => {
  // fix any
  switch (action.type) {
    // дописать
    case 'SET_THEME_ID':
      return { ...state, themeId: action.id }
    default:
      return state
  }
}

export const changeThemeId = (id: number): Action => ({ type: 'SET_THEME_ID', id }) // fix any
