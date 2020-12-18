const FLIP = 'FLIP';
const RESET_CARDS = "RESET_CARDS";
const SET_CARDS = 'SET_CARDS'
const LOCKED_CARDS = 'LOCKED_CARDS'
const WIN_GAME = 'WIN_GAME'
export const flipOnClickAC = (id, name) => ({ type: FLIP, id, name });
export const resetCardsAC = () => ({ type: RESET_CARDS });
export const setCardsAC = (cards) => ({ type: SET_CARDS, cards});
export const lockedCardsAC = (name) => ({ type: LOCKED_CARDS, name});
export const winGameAC = () => ({ type: LOCKED_CARDS});


const initialState = {
  cards: [],
  flippedCards: 0,
  entryCardId: [],
  gameWin: false
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
        entryCardId: [...state.entryCardId, action.name]
      }
    case RESET_CARDS:
      return {
        ...state,
        cards: state.cards.map((el) => {
          el.flip = false
          return el
        }),
        flippedCards: 0,
        entryCardId: []
      }
    case SET_CARDS:
      return {
        cards: [...action.cards],
        flippedCards: 0,
        entryCardId: [],
        gameWin: false
      }
    case LOCKED_CARDS:
      return {
        ...state,
        cards: state.cards.map((el) => {
          if (el.name === action.name) {
            el.lock = true
          }
          return el
        }),
        flippedCards: 0,
        entryCardId: []
      }
    case WIN_GAME:
      return {
        ...state,
        gameWin: true,
        flippedCards: 0
      }
    default:
      return state;
  }
  
};

export default level1_reducer;
