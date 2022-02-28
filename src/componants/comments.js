import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';
import { Control, Form, Errors, actions } from 'react-redux-form';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment);

        default:
          return state;
      }
};

<Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
</Form>
