import { CHANGE_COMPONENT_NAME, TOGGLE_BUTTON } from '../constants/settingConstant';
import { initialState } from '../constants/initial';

const settingReducer = (state=initialState, action) => {
    switch(action.type) {
        case CHANGE_COMPONENT_NAME:
            return {
                ...state,
                componentName: action.componentName
            }
        case TOGGLE_BUTTON:
            const { parentIndex, index } = action;

            return {
                ...state,
                group: [
                    ...state.group.slice(0, parentIndex),
                    { 
                        ...state.group[parentIndex],
                        children: [
                            ...state.group[parentIndex].children.slice(0, index),
                            {
                                ...state.group[parentIndex].children[index],
                                clicked: !state.group[parentIndex].children[index].clicked
                            },
                            ...state.group[parentIndex].children.slice(index+1)
                        ]
                    },
                    ...state.group.slice(parentIndex+1)
                ]
            }
        default:
            return state;
    }
}
export default settingReducer;