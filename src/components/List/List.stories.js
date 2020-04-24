import React from 'react';
import { storiesOf } from '@storybook/react';

import { List, ListItem, Bar } from 'react95';

storiesOf('List', module)
  .addDecorator(story => (
    <div
      style={{
        padding: '5rem',
        background: 'teal'
      }}
    >
      {story()}
    </div>
  ))
  .add('default', () => (
    <List>
      <ListItem>Photos</ListItem>
      <ListItem>Videos</ListItem>
      <ListItem>Other</ListItem>
    </List>
  ))
  .add('inline', () => (
    <List inline>
      <ListItem square disabled>
        <span role='img' aria-label='🌿'>
          🌿
        </span>
      </ListItem>
      <Bar />
      <ListItem>Tackle</ListItem>
      <ListItem>Growl</ListItem>
      <ListItem disabled>Razor Leaf</ListItem>
    </List>
  ))
  .add('no shadow', () => (
    <List shadow={false}>
      <ListItem>Photos</ListItem>
      <ListItem>Videos</ListItem>
      <ListItem>Other</ListItem>
    </List>
  ))
  .add('fullWidth', () => (
    <List fullWidth>
      <ListItem>Photos</ListItem>
      <ListItem>Videos</ListItem>
      <ListItem>Other</ListItem>
    </List>
  ));
