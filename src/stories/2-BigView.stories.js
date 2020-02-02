import React from 'react';
import BigView from '../bigView/BigView';
import BigViewNav from '../bigView/BigViewNav';
// import AccountPage from '../bigView/account/AccountPage';
// import HistoryPage from '../bigView/history/HistoryPage';
// import KeysPage from '../bigView/keys/KeysPage';


export default {
  title: 'BigView',
  component: BigView,
};

export const Nav_with_first_selected = () => <BigViewNav tab={0} />;
export const Nav_with_second_selected = () => <BigViewNav tab={1} />;
export const Nav_with_third_selected = () => <BigViewNav tab={2} />;

export const Whole_view = () => (
  <BigView />
);
