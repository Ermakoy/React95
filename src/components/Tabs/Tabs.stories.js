import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Tabs,
  Tab,
  TabBody,
  Window,
  WindowHeader,
  WindowContent,
  Fieldset,
  NumberField,
  Checkbox
} from 'react95';

storiesOf('Tabs', module)
  .addDecorator(story => (
    <div
      style={{
        padding: '5rem',
        background: '#008080'
      }}
    >
      {story()}
    </div>
  ))
  .add('default', () => <TabsDemo />);

class TabsDemo extends React.Component {
  state = {
    activeTab: 0
  };

  handleChange = value => this.setState({ activeTab: value });

  render() {
    const { activeTab } = this.state;
    return (
      <Window style={{ width: 350 }}>
        <WindowHeader>
          <span role='img' aria-label='👗'>
            👗
          </span>
          store.exe
        </WindowHeader>
        <WindowContent>
          <Tabs value={activeTab} onChange={this.handleChange}>
            <Tab value={0}>Shoes</Tab>
            <Tab value={1}>Accesories</Tab>
            <Tab value={2}>Clothing</Tab>
          </Tabs>
          <div style={{ height: 300 }}>
            {activeTab === 0 && (
              <TabBody>
                <Fieldset label='Order:'>
                  <div style={{ padding: '0.5em 0 0.5em 0' }}>Amount:</div>
                  <NumberField
                    width='100%'
                    min={0}
                    value={0}
                    onChange={() => null}
                  />
                  <Checkbox
                    style={{ marginTop: '1rem' }}
                    name='shipping'
                    value='fast'
                    label='Fast shipping'
                    onChange={() => null}
                    defaultChecked
                  />
                </Fieldset>
              </TabBody>
            )}
            {activeTab === 1 && <TabBody>Accesories stuff here</TabBody>}
            {activeTab === 2 && <TabBody>Clothing stuff here</TabBody>}
          </div>
        </WindowContent>
      </Window>
    );
  }
}
