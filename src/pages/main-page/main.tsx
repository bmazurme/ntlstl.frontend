import React from 'react';

import Content from '../../components/content';
// import MainLayout from '../../layouts/main';

import withUser from '../../hocs/with-user';

function MainPage() {
  return (
    <Content header>
      {/* <MainLayout /> */}
      main
    </Content>
  );
}

export default withUser(MainPage);
