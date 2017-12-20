import { List as ImmutableList } from 'immutable';
import { STORE_HYDRATE } from '../actions/store';
import { CUSTUM_EMOJIS_FETCH_SUCCESS } from '../actions/custum_emojis';
import { search as emojiSearch } from '../features/emoji/emoji_mart_search_light';
import { buildCustomEmojis } from '../features/emoji/emoji';

const initialState = ImmutableList();

export default function custom_emojis(state = initialState, action) {
  switch(action.type) {
  case STORE_HYDRATE:
    emojiSearch('', { custom: buildCustomEmojis(action.state.get('custom_emojis', [])) });
    return action.state.get('custom_emojis');
  case CUSTUM_EMOJIS_FETCH_SUCCESS:
    emojiSearch('', { custom: buildCustomEmojis(action.emojis || ImmutableList()) });
    return action.emojis;
  default:
    return state;
  }
};
