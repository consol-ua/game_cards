const FLIP = "FLIP";
const RESET_CARDS = "RESET_CARDS";
const SET_CARDS = 'SET_CARDS'
const LOCKED_CARDS = 'LOCKED_CARDS'
export const flipOnClickAC = (id) => ({ type: FLIP, id });
export const resetCardsAC = () => ({ type: RESET_CARDS });
export const setCardsAC = (cards) => ({ type: SET_CARDS, cards});
export const lockedCardsAC = (name) => ({ type: SET_CARDS, name});


const initialState = {
  cards: [],
  flippedCards: 0,
  entryCardId: [],
};

const level1_reducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIP:
      return {
        ...state,
        cards: state.cards.map((el) => {
          if (el.id == action.id) {
            el.flip?el.flip = false:el.flip = true
          }
          return el
        }), flippedCards: (state.flippedCards + 1),
        firstCardId: () => {
          if (!state.firstCardId) {
            return action.id
          }
        },
        entryCardId: [...state.entryCardId, ...action.id]
      }
    case RESET_CARDS:
      return {
        ...state, cards: state.cards.map((el) => {
              el.flip = false
          return el
        }),
        flippedCards: 0,
        entryCardId: []
      }
    case SET_CARDS:
      return {
        ...state, cards: [...action.cards]
      }
    case LOCKED_CARDS:
      return {
        ...state, cards: state.cards.map((el) => {
          el.lock = true
          return el
        })
      }
    default:
      return state;
  }
  
};

export default level1_reducer;
