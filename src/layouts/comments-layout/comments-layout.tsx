import React from 'react';

import CommentList from '../../components/comment-list';
import CommentForm from '../../components/comment-form';
import { Item } from '../../components/item';

export default function CommentsLayout() {
  return (
    <Item sx={{ paddingTop: 2, paddingBottom: 2 }}>
      <CommentForm />
      <CommentList />
    </Item>
  );
}
